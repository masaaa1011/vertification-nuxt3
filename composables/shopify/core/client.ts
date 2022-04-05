import Shopify from "@shopify/shopify-api";

const { SHOP, ACCESS_API_KEY, ADMIN_API_KEY } = process.env;


const accessApiClient = new Shopify.Clients.Graphql(SHOP, ACCESS_API_KEY);
const adminApiClient = new Shopify.Clients.Graphql(SHOP, ADMIN_API_KEY);

export { accessApiClient, adminApiClient }