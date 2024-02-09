/* eslint-disable-next-line import/no-unresolved */
import { config } from 'vike-vue/config';
import Layout from './_layout/Layout.vue';
import Head from './_layout/Head.vue';

export default {
    extends: config,
    title: 'Hugolnx Website',
    favicon: '/favicon.ico',
    ssr: true,
    Layout,
    Head,
};
