// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            `@use "~/assets/css/variables.scss" as *;
            @use "~/assets/css/mixin.scss" as *;`
        }
      }
    },
    plugins: [
      tailwindcss()
    ],
  },

  runtimeConfig: {
    apiSecret: process.env.NEWS_API_KEY,
  },


  modules: ['@nuxt/eslint', '@nuxt/fonts'],
},)