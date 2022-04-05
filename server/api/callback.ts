import { Shopify, ApiVersion, AuthQuery } from "@shopify/shopify-api";
import { Session } from "@shopify/shopify-api/dist/auth/session";
import type { IncomingMessage, ServerResponse } from "http";
import async from "./async";

export default async (req, res) => {
  console.log("api: callback was called")

  const session = await Shopify.Auth.validateAuthCallback(
    req,
    res,
    req.query as AuthQuery
  );

  console.log(JSON.stringify(session))

  const scope = session.scope;

  console.log(session.accessToken);
  // all good, redirect to '/'
  const searchParams = new URLSearchParams(req.url);
  const host = searchParams.get("host");
  const shop = searchParams.get("shop");
};
