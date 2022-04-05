import http from 'http'
import url from 'url'
import querystring from 'querystring';
import Shopify, { ApiVersion, AuthQuery } from '@shopify/shopify-api';

const { API_KEY, API_SECRET_KEY, SCOPES, SHOP, HOST } = process.env

Shopify.Context.initialize({
  API_KEY,
  API_SECRET_KEY,
  SCOPES: [SCOPES],
  HOST_NAME: HOST.replace(/https:\/\//, ""),
  IS_EMBEDDED_APP: false,
  API_VERSION: ApiVersion.April22 // all supported versions are available, as well as "unstable" and "unversioned"
})

const context = Shopify.Context
const ACTIVE_SHOPIFY_SHOPS: { [key: string]: string | undefined } = {};
const client = null;

export { client, context };
