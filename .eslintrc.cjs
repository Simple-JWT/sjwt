module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
        // 'jest/globals': true,
    },
    parserOptions: {
        ecmaVersion: 2020,
    },
    extends: [
        // '@nuxt/eslint-config',
        'airbnb-base',
    ],
    ignorePatterns: ['dist/'],
    plugins: [
        // 'jest',
    ],
    rules: {
        'indent': ['error', 4, {
            ignoredNodes: ['TemplateLiteral'],
            SwitchCase: 1,
        }],
        'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
        'object-curly-spacing': [2, 'never'],
        'no-underscore-dangle': 0,
        'arrow-parens': ['error', 'always'],
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'prettier/prettier': 0,
        'comma-dangle': ['error', 'always-multiline'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'quote-props': ['error', 'consistent-as-needed'],
        'key-spacing': ['error', {mode: 'strict'}],
        'max-len': 0,
        'prefer-destructuring': 0,
        'no-multiple-empty-lines': ['error', {max: 2}],
        'no-console': ['error', {allow: ['warn', 'error']}],
    },
};
