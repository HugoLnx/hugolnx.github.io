import { resolve } from 'path';
import { defineConfig } from 'vite';
import vike from 'vike/plugin';
import vue from '@vitejs/plugin-vue';
/* eslint-disable-next-line import/no-unresolved */
import md from 'unplugin-vue-markdown/vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import glsl from 'vite-plugin-glsl';
import eslint from 'vite-plugin-eslint';

import rollupConfig from './rollup.config';

export default defineConfig({
    plugins: [
        eslint(),
        glsl(),
        vike({
            ssr: true,
            prerender: true,
            filesystemRoutingRoot: resolve(__dirname, 'src/'),
        }),
        vue({ include: [/\.vue$/, /\.md$/] }),
        md(),
        ViteYaml(),
    ],
    resolve: {
        alias: {
            ':useData': 'vike-vue/useData',
            ':usePageContext': 'vike-vue/usePageContext',
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
