// import { resolve } from 'path';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

// const VENDOR_CHUNKS = [
//     { name: 'three', patterns: ['three'] },
//     { name: 'image', patterns: ['image'] },
// ];

export default {
    plugins: [
        commonjs(),
        babel({ babelHelpers: 'bundled' }),
    ],
    // output: {
    //     manualChunks(id) {
    //         if (!id.includes('node_modules')) {
    //             const pageMatch = id.match(/pages\/([^/]+)\//);
    //             if (pageMatch !== null) {
    //                 const pageName = pageMatch[1];
    //                 console.log('page', pageName, id);
    //                 return pageName;
    //             }

    //             const vueMatch = id.match(/([^/\\]+)\.vue/);
    //             if (vueMatch !== null) {
    //                 const vueName = vueMatch[1];
    //                 console.log('vue', vueName, id);
    //                 return vueName;
    //             }

    //             console.log('none', id);
    //             return undefined;
    //         }
    //         const libname = id.match(/node_modules\/([^/]+)\//)[1];
    //         for (const chunk of VENDOR_CHUNKS) {
    //             for (const libPattern of chunk.patterns) {
    //                 if (new RegExp(libPattern).test(libname)) {
    //                     return `vendor-${chunk.name}`;
    //                 }
    //             }
    //         }

    //         return undefined;
    //     },
    // },
};
