/**
 * Build-time prerendering script.
 * Generates static HTML for key SEO routes.
 *
 * Usage: node --input-type=module prerender.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "dist");

const routes = [
  "/",
  "/best-step-counter-app/",
  "/fitness-challenge-app/",
  "/compare/rivlo-vs-pacer/",
  "/leaderboard/",
  "/milestones/",
  "/blog/",
  "/blog/how-to-walk-10000-steps-a-day/",
  "/blog/walking-for-weight-loss/",
  "/blog/best-walking-challenges-for-groups/",
  "/about/",
  "/about-rivlo-ai/",
  "/contact/",
  "/step-challenge/new-york/",
  "/step-challenge/los-angeles/",
  "/step-challenge/chicago/",
  "/step-challenge/houston/",
  "/step-challenge/san-francisco/",
  "/step-challenge/miami/",
  "/step-challenge/seattle/",
  "/step-challenge/denver/",
];

async function prerender() {
  const { render } = await import("./dist/server/entry-server.js");
  const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const { html: appHtml, helmet } = render(route);

      const headTags = [
        helmet?.title?.toString() || "",
        helmet?.meta?.toString() || "",
        helmet?.link?.toString() || "",
        helmet?.script?.toString() || "",
      ]
        .filter(Boolean)
        .join("\n    ");

      let finalHtml = template;

      // Replace everything inside <div id="root">...</div> (the outermost root div)
      // Match from <div id="root"> to the last </div> before <style> or <script
      const rootStart = finalHtml.indexOf('<div id="root">');
      const afterRoot = finalHtml.indexOf('</div>', rootStart);
      // Find the matching closing </div> for root - scan for the noscript end
      const scriptTag = finalHtml.indexOf('<script type="module"');
      const styleTag = finalHtml.indexOf('<style>@keyframes');
      const boundary = Math.min(
        scriptTag > -1 ? scriptTag : Infinity,
        styleTag > -1 ? styleTag : Infinity
      );
      // Find last </div> before boundary
      let lastDivEnd = -1;
      let searchPos = rootStart;
      while (true) {
        const pos = finalHtml.indexOf('</div>', searchPos);
        if (pos === -1 || pos >= boundary) break;
        lastDivEnd = pos + 6;
        searchPos = pos + 6;
      }
      if (rootStart > -1 && lastDivEnd > -1) {
        finalHtml = finalHtml.substring(0, rootStart) +
          `<div id="root">${appHtml}</div>` +
          finalHtml.substring(lastDivEnd);
      }

      // If helmet provides a title, replace the default <title> in template
      const helmetTitle = helmet?.title?.toString() || "";
      if (helmetTitle) {
        finalHtml = finalHtml.replace(
          /<title>[^<]*<\/title>/,
          helmetTitle
        );
      }

      // Replace template meta description with helmet's version
      const helmetMeta = helmet?.meta?.toString() || "";
      if (helmetMeta) {
        // Remove template meta description so helmet's takes over
        finalHtml = finalHtml.replace(
          /<meta name="description"[^>]*>/,
          ""
        );
      }

      // Inject remaining helmet head tags before </head>
      const otherHeadTags = [
        helmetMeta,
        helmet?.link?.toString() || "",
        helmet?.script?.toString() || "",
      ]
        .filter(Boolean)
        .join("\n    ");
      if (otherHeadTags) {
        finalHtml = finalHtml.replace("</head>", `    ${otherHeadTags}\n  </head>`);
      }

      // Write to the correct path
      const filePath =
        route === "/"
          ? path.join(DIST, "index.html")
          : path.join(DIST, route, "index.html");

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, finalHtml);

      success++;
      console.log(`✓ ${route}`);
    } catch (err) {
      failed++;
      console.error(`✗ ${route}: ${err.message}`);
    }
  }

  console.log(`\nPrerendered ${success}/${routes.length} routes (${failed} failed).`);
}

prerender();
