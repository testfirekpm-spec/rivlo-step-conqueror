/**
 * Build-time prerendering script.
 * Run after `vite build` to generate static HTML for key SEO routes.
 *
 * Usage: npx tsx prerender.ts
 */
import fs from "fs";
import path from "path";

const DIST = path.resolve(__dirname, "dist");

// Key SEO routes to prerender
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
  // Dynamic import of the SSR build
  const { render } = await import("./dist/server/entry-server.js");
  const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

  for (const route of routes) {
    try {
      const { html: appHtml, helmet } = render(route);

      // Build head tags from helmet
      const headTags = [
        helmet?.title?.toString() || "",
        helmet?.meta?.toString() || "",
        helmet?.link?.toString() || "",
        helmet?.script?.toString() || "",
      ]
        .filter(Boolean)
        .join("\n    ");

      let finalHtml = template;

      // Replace the pre-render placeholder with actual content
      finalHtml = finalHtml.replace(
        /<div id="root">[\s\S]*?<\/div>/,
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

      console.log(`✓ Prerendered: ${route}`);
    } catch (err) {
      console.error(`✗ Failed to prerender ${route}:`, (err as Error).message);
    }
  }

  console.log(`\nDone! Prerendered ${routes.length} routes.`);
}

prerender();
