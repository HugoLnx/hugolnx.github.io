/* eslint-disable-next-line import/no-unresolved */
import { config } from 'vike-vue/config';
import Layout from './_layout/Layout.vue';

export default {
    extends: config,
    title: 'Hugolnx Gamedev',
    favicon: '/favicon.ico',
    ssr: true,
    Layout,
};
