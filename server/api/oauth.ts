import { Shopify, ApiVersion, DataType } from "@shopify/shopify-api";
import { Session } from "@shopify/shopify-api/dist/auth/session";
import type { IncomingMessage, ServerResponse } from "http";
import async from "./async";

export default async (req: IncomingMessage, res: ServerResponse) => {
  //   const p_loadedSession = await Shopify.Utils.loadCurrentSession(req, res, true);
  //   console.log("p_loadedSession: " + JSON.stringify(p_loadedSession));
  console.log("1")

  // this call require only once.
  Shopify.Context.initialize({
    API_KEY: process.env.API_KEY,
    API_SECRET_KEY: process.env.API_SECRET_KEY,
    SCOPES: process.env.ACCESS_SCOPES.split(","),
    HOST_NAME: process.env.SHOP.replace(/https:\/\//, ""),
    IS_EMBEDDED_APP: false,
    API_VERSION: ApiVersion.April22,
  });

  console.log("2")

  // this is client fot connect shopify rest api
  const apiClient = new Shopify.Clients.Rest(
    process.env.SHOP.replace(/https:\/\//, ""),
    process.env.ADMIN_TOKEN
  );

  console.log("3")

  // this is auth
  // from client -> callback uri -> /api/callback
  // const authRoute = await Shopify.Auth.beginAuth(
  //   req,
  //   res,
  //   process.env.SHOP,
  //   "/api/callback",
  //   false
  // );

  console.log("5")
  // rest api call http get
  const apiResponse = await apiClient.get({ path: "shop" });
  console.log("response: " + JSON.stringify(apiResponse));

  console.log("6")
  // rest api call http post
  // TODO: postで何が出来るか確かめる事
  // const storefrontTokenResponse = await apiClient.post({
  //   path: "shop",
  //   data: {},
  //   type: DataType.JSON,
  // });

  console.log("7")
  // TODO: sessionを保持してくれるらしいけどどう使うのか不明なので調べること
  const loadedSession = await Shopify.Utils.loadCurrentSession(req, res, true);
  console.log("loadedSession: " + JSON.stringify(loadedSession));

  console.log("8")
  // 
  const grapClient = new Shopify.Clients.Graphql(
    process.env.SHOP.replace(/https:\/\//, ""),
    process.env.ADMIN_TOKEN
  );

  console.log("9")
  // this is client fot connect shopify graphql
  const graphResponse = await grapClient.query({
    data: `{
      products (first: 10) {
        edges {
          node {
            id
            title
            descriptionHtml
          }
        }
      }
    }`,
  });

  console.log("gparhResponse: " + JSON.stringify(graphResponse))

};
