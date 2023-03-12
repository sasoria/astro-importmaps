import { defineConfig } from 'astro/config';
import importmap from "./importmap.json";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    react(),
    {
      name: 'importmap',
      hooks: {
        'astro:build:setup': ({ vite, target }) => {
          if(target === 'client') {
            vite.plugins.push({
              ...rollupImportMapPlugin(importmap),
              enforce: "pre",
              apply: "build",
            });
          }
       }
      }
    }
  ]
});