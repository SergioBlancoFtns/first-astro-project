// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://creative-sable-b557be.netlify.app/",
  integrations: [preact()]
});