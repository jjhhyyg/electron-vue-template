const Path = require('path');
const vuePlugin = require('@vitejs/plugin-vue')

const {defineConfig} = require('vite');

/**
 * https://vitejs.dev/config
 */
const config = defineConfig({
    root: Path.join(__dirname, 'src', 'renderer'),
    publicDir: 'public',
    server: {
        port: 8080,
    },
    open: false,
    build: {
        outDir: Path.join(__dirname, 'build', 'renderer'),
        emptyOutDir: true,
    },
    plugins: [
        vuePlugin({
            include: [/\.vue$/, /\.md$/],
        }),

    ],
    resolve: {
        alias: {
            '@': Path.resolve(__dirname, 'src', 'renderer'),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                @import "@/assets/scss/global.scss";
                @import "@/assets/scss/globalVar.scss";
                @import "@/assets/scss/animations.scss";
                `,
            }
        }
    }
});

module.exports = config;
