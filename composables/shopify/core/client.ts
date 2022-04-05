import Shopify from "@shopify/shopify-api";

const { SHOP, ACCESS_API_KEY, ACCESS_API_SECRET_KEY, ACCESS_SCOPES, HOST } = process.env;
const adminApiClient = new Shopify.Clients.Rest(SHOP, ACCESS_API_KEY);

export { adminApiClient }