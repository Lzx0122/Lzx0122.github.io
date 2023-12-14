import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "LZX BLOG",
  description: "廖子翔的部落格",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
