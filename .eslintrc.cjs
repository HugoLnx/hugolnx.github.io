/* eslint-disable no-undef */
module.exports = {
    ignorePatterns: [
        'node_modules/',
        'dist/',
        'star-wars/',
    ],
    plugins: [
        'import',
        '@stylistic/js',
    ],
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'plugin:vue/vue3-recommended',
    ],
    globals: {
        logger: 'readonly',
    },
    overrides: [
        {
            env: {
                node: false,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        // '@stylistic/js/indent': ['error', 4],
        indent: ['error', 4],
        'no-underscore-dangle': ['error', {
            allowAfterSuper: true,
            allowAfterThis: true,
        }],
        'no-param-reassign': ['error', {
            props: false,
        }],
        'class-methods-use-this': ['error', {
            exceptMethods: [
                'initialize',
                'clone',
            ],
        }],
        'vue/multi-word-component-names': 'off',
        // '@stylistic/js/lines-between-class-members'
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'no-restricted-syntax': ['error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'import/no-unresolved': ['error', {
            commonjs: true,
            caseSensitive: true,
            caseSensitiveStrict: false,
            ignore: [
                '^/projects/',
                '^three/addons/',
            ],
        }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: [
                'test/**',
                'tests/**',
                'spec/**',
                '**/__tests__/**',
                '**/__mocks__/**',
                'test.{js,jsx,cjs,mjs}',
                'test-*.{js,jsx,cjs,mjs}',
                '**/*{.,_}{test,spec}.{js,jsx}',
                '**/jest.config.{js,cjs,mjs}',
                '**/jest.setup.{js,cjs,mjs}',
                '**/vue.config.{js,cjs,mjs}',
                '**/webpack.config.{js,cjs,mjs}',
                '**/webpack.config.*.{js,cjs,mjs}',
                '**/rollup.config.{js,cjs,mjs}',
                '**/rollup.config.*.{js,cjs,mjs}',
                '**/gulpfile.{js,cjs,mjs}',
                '**/gulpfile.*.{js,cjs,mjs}',
                '**/Gruntfile{,.js,.cjs,.mjs}',
                '**/protractor.conf.{js,cjs,mjs}',
                '**/protractor.conf.*.{js,cjs,mjs}',
                '**/karma.conf.{js,cjs,mjs}',
                '**/.eslintrc.{js,cjs,mjs}',
                '**/.vite.config.{js,cjs,mjs}',
                '**/.vitest.config.{js,cjs,mjs}',
                '/*.{js,cjs,mjs}',
            ],
            optionalDependencies: true,
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: { max: 3 },
            multiline: { max: 1 },
        }],
    },
};
