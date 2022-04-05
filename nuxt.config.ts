import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    
    css: [],
    components: ["~/components","~/components/layout","~/components/ui","~/components/cards","~/pages"],
    buildModules: [["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_API_KEY}],'@nuxtjs/tailwindcss'],
    modules: [],
    // build: {
    //     transpile: [
    //         '#app',
    //       ],
    // },
})
