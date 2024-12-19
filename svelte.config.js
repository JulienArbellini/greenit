import adapter from "@sveltejs/adapter-vercel";
import sveltePreprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),

  kit: {
    adapter: adapter(),
    inlineStyleThreshold: 200000,
  },
  compilerOptions: {
    preserveComments: false,
  },
};

export default config;
