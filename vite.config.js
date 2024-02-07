import { resolve } from 'path';
import { defineConfig } from 'vite';
import vike from 'vike/plugin';
import vue from '@vitejs/plugin-vue';
/* eslint-disable-next-line import/no-unresolved */
import md from 'unplugin-vue-markdown/vite';
import glsl from 'vite-plugin-glsl';
import eslint from 'vite-plugin-eslint';

import rollupConfig from './rollup.config';

export default defineConfig({
    plugins: [
        eslint(),
        glsl(),
        vike({
            ssr: false,
            prerender: true,
        }),
        vue({ include: [/\.vue$/, /\.md$/] }),
        md(),
    ],
    resolve: {
        alias: {
            '#utils/logger': resolve(__dirname, 'src/js/utils/logger.js'),
        },
    },
    server: {
        headers: {
            'Cache-Control': 'no-cache, no-store, max-age=0',
        },
    },
    build: {
        outDir: 'tmp/dist',
        chunkSizeWarningLimit: 600,
        rollupOptions: rollupConfig,
    },
});
