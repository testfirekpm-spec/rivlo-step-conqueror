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
  "/best-step-counter-app",
  "/fitness-challenge-app",
  "/compare/rivlo-vs-pacer",
  "/leaderboard",
  "/milestones",
  "/blog",
  "/blog/how-to-walk-10000-steps-a-day",
  "/blog/walking-for-weight-loss",
  "/blog/best-walking-challenges-for-groups",
  "/about",
  "/about-rivlo-ai",
  "/contact",
  "/step-challenge/new-york",
  "/step-challenge/los-angeles",
  "/step-challenge/chicago",
  "/step-challenge/houston",
  "/step-challenge/san-francisco",
  "/step-challenge/miami",
  "/step-challenge/seattle",
  "/step-challenge/denver",
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

      // Replace the pre-render spinner + noscript block with actual content
      finalHtml = finalHtml.replace(
        /<div id="root">[\s\S]*?<\/div>\s*<\/div>/,
        `<div id="root">${appHtml}</div>`
      );

      // Inject helmet head tags before </head>
      if (headTags) {
        finalHtml = finalHtml.replace("</head>", `    ${headTags}\n  </head>`);
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
