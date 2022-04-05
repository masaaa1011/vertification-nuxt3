import { RouteMiddleware } from "nuxt3/dist/app/composables";

export default defineNuxtRouteMiddleware((to, from) => {
  console.log("shopify middleware");
});
