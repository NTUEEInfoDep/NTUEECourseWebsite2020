module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {},
};