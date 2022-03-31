import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: [],
    components: ["~/components"],
    buildModules: [["@storyblok/nuxt", { accessToken: "azwuFZproaHF8wrs1wCr5Qtt" }],'@nuxtjs/tailwindcss'],
    modules: [],
    build: {},
})
