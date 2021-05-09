export default {

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'spaceP',
        titleTemplate: '%s|' + "站名",
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // 共用css，注意此處是真實css，主要放共通的像reset，但也可以全部放這裡
        //  { src: '@/assets/style/reset.css', lang: 'css' },
        //  { src: '@/assets/style/base.scss', lang: 'css' }

    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    //   styleResources: {
    //     // 全域scss變數注入，此處只能放不會產生css的 variable mixin  function (若放css) 所有的.vue檔都會新增
    //     scss: '@/assets/style/var.scss'
    // },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        'nuxt-rfg-icon', //自動產生icon
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options: {
                        fix: true
                    }
                })
                const StylelintPlugin = require('stylelint-webpack-plugin')
                config.plugins.push(
                    new StylelintPlugin({
                        files: ['**/*.vue', 'assets/**/*.scss'], // 要啟用自動修復的檔案路徑規則
                        exclude: /(node_modules)/,
                        fix: true
                    })
                )
            }
        },
        babel: {
            plugins: [
                ['@babel/plugin-proposal-private-methods', { loose: true }]
            ]
        }
    }
}