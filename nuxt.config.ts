import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    nitro: {
        preset: 'azure_functions'
    },
    publicRuntimeConfig: {
        url: process.env.SHOP,
        access_api_key: process.env.ACCESS_API_KEY,
        access_api_secret_key: process.env.ACCESS_API_SECRET_KEY,
        access_scopes: process.env.ACCESS_SCOPES,
    },
    privateRuntimeConfig: {
        admin_api_key: process.env.ADMIN_API_KEY,
        admin_api_secret_key: process.env.ADMIN_API_SECRET_KEY,
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
    }
})
