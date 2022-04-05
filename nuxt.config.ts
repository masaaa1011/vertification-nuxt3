import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    nitro: {
        preset: 'azure_functions'
    },
    publicRuntimeConfig: {
        url: process.env.SHOP,
        api_key: process.env.API_KEY,
        api_secret_key: process.env.API_SECRET_KEY,
        access_token: process.env.ACCESS_API_TOKEN,
        access_scopes: process.env.ACCESS_SCOPES,
    },
    privateRuntimeConfig: {
        admin_token: process.env.ADMIN_TOKEN,
        admin_scopes: process.env.ADMIN_SCOPES,
    },
    vite: {
        build: {
            sourcemap: true,
        }
    },
    vue: {
        compilerOptions: {
            sourceMap: true,
        }
    },
})
