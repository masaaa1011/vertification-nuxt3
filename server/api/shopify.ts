import { Shopify, ApiVersion } from "@shopify/shopify-api";
import { Session } from "@shopify/shopify-api/dist/auth/session";
import type { IncomingMessage, ServerResponse } from "http";
import async from "./async";

export default async (req: IncomingMessage, res: ServerResponse) => {

  Shopify.Context.initialize({
    API_KEY: process.env.ACCESS_API_KEY,
    API_SECRET_KEY: process.env.ACCESS_API_SECRET_KEY,
    SCOPES: process.env.ACCESS_SCOPES.split(","),
    HOST_NAME: process.env.SHOP.replace(/https:\/\//, ""),
    API_VERSION: ApiVersion.April22,
    IS_EMBEDDED_APP: false,
    SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
  });

  const authRoute = await Shopify.Auth.beginAuth(
    req,
    res,
    process.env.SHOP,
    '/auth/callback',
    false,
  );

  console.log("authRoute: " + JSON.stringify(authRoute));

  const loadedSession = await Shopify.Utils.loadCurrentSession(req, res);
  console.log("loadedSession: " + JSON.stringify(loadedSession));
};
