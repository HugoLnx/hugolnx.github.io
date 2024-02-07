export default (api) => {
    api.cache(true);
    return {
        presets: [
            [
                '@babel/preset-env',
                { targets: '> 0.2%, not dead, last 2 versions' },
            ],
        ],
    };
};
