import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";
import {sveltekit, vitePreprocess} from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import vitePluginSocketIO from "./src/socketio.js";
import serverEvents from "./src/serverEvents.js";
import socketEvents from "./src/socketEvents.js";
import {Server} from "socket.io";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // See https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    // See https://kit.svelte.dev/docs/adapters
    adapter: adapter(),
  },
};

export default config;
