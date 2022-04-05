import { defineNuxtPlugin, useState } from "#app";

export default defineNuxtPlugin((_nuxt) => {
  const myplugin = useState<string>("myplugin", () => {
    return "hello myplugin!!!!";
  });
});