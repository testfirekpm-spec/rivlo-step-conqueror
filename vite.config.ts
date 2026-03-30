import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

function asyncCssPlugin(): Plugin {
  return {
    name: "async-css",
    enforce: "post",
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        '<link rel="stylesheet" href="$1" media="print" onload="this.media=\'all\'">' +
        '<noscript><link rel="stylesheet" href="$1"></noscript>'
      );
    },
  };
}

function inlineCriticalCssPlugin(): Plugin {
  return {
    name: "inline-critical-css",
    enforce: "post",
    async generateBundle(_, bundle) {
      // Find the CSS asset
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith('.css') && chunk.type === 'asset') {
          const cssSource = typeof chunk.source === 'string' ? chunk.source : chunk.source.toString();
          
          // Extract critical CSS: CSS custom properties (:root, .dark), body/html styles, 
          // keyframe animations used in hero, and basic layout classes
          const criticalPatterns = [
            /:root\s*\{[^}]+\}/g,
            /\.dark\s*\{[^}]+\}/g,
            /\*,[^{]*\{[^}]*box-sizing[^}]*\}/g,
            /html\s*\{[^}]+\}/g,
            /body\s*\{[^}]+\}/g,
            /@keyframes\s+fade-in-up\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\}/g,
            /@keyframes\s+underline-grow\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\}/g,
          ];
          
          let criticalCss = '';
          for (const pattern of criticalPatterns) {
            const matches = cssSource.match(pattern);
            if (matches) {
              criticalCss += matches.join('\n') + '\n';
            }
          }
          
          if (criticalCss) {
            // Write critical CSS to a separate file for the HTML plugin to pick up
            const criticalPath = path.resolve(__dirname, 'dist/.critical.css');
            fs.mkdirSync(path.dirname(criticalPath), { recursive: true });
            fs.writeFileSync(criticalPath, criticalCss);
          }
          break;
        }
      }
    },
    closeBundle() {
      // Inject critical CSS inline into index.html
      const criticalPath = path.resolve(__dirname, 'dist/.critical.css');
      const htmlPath = path.resolve(__dirname, 'dist/index.html');
      
      if (fs.existsSync(criticalPath) && fs.existsSync(htmlPath)) {
        const criticalCss = fs.readFileSync(criticalPath, 'utf-8');
        let html = fs.readFileSync(htmlPath, 'utf-8');
        
        // Insert critical CSS inline before </head>
        html = html.replace('</head>', `<style>${criticalCss}</style>\n</head>`);
        fs.writeFileSync(htmlPath, html);
        fs.unlinkSync(criticalPath);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  assetsInclude: ["**/*.PNG"],
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && asyncCssPlugin(),
    mode === "production" && inlineCriticalCssPlugin(),
  ].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom')) return 'react-vendor';
          if (id.includes('node_modules/react/')) return 'react-vendor';
          if (id.includes('node_modules/react-router')) return 'router';
          
          if (id.includes('node_modules/sonner')) return 'ui-feedback';
          
          if (id.includes('node_modules/@radix-ui')) return 'radix';
          if (id.includes('node_modules/class-variance-authority') || 
              id.includes('node_modules/clsx') || 
              id.includes('node_modules/tailwind-merge')) return 'ui-utils';
        },
      },
    },
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      // Block the lucide-react barrel — redirect to just createLucideIcon (no icons)
      { find: /^lucide-react$/, replacement: path.resolve(__dirname, "node_modules/lucide-react/dist/esm/createLucideIcon.js") },
    ],
  },
}));
