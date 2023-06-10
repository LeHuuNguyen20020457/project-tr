// babel.config.js
module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {
                    '~': './src',

                    // Thêm các alias khác tại đây
                },
            },
        ],
    ],
};
