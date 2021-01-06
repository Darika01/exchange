module.exports = {
    env: {
        browser: true,
        es2021: true,
        // es6: true,
        jest: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:flowtype/recommended',
        'plugin:jest/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks', 'jest', 'jest-dom', 'testing-library'],

    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'flowtype/boolean-style': [2, 'boolean'],
        'flowtype/define-flow-type': 1,
        'flowtype/delimiter-dangle': [2, 'never'],
        'flowtype/generic-spacing': [2, 'never'],
        'flowtype/no-mixed': 2,
        'flowtype/no-primitive-constructor-types': 2,
        'flowtype/no-types-missing-file-annotation': 2,
        'flowtype/object-type-delimiter': [2, 'comma'],
        'flowtype/require-readonly-react-props': 0,
        'flowtype/require-valid-file-annotation': 2,
        'flowtype/semi': [2, 'always'],
        'flowtype/space-after-type-colon': [2, 'always'],
        'flowtype/space-before-generic-bracket': [2, 'never'],
        'flowtype/space-before-type-colon': [2, 'never'],
        'flowtype/union-intersection-spacing': [2, 'always'],
        'flowtype/use-flow-type': 1,
        'flowtype/valid-syntax': 1,
        'react/prop-types': 0,
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'no-unused-vars': 'warn'
    },
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            version: 'detect'
        },
        propWrapperFunctions: [
            'forbidExtraProps',
            { property: 'freeze', object: 'Object' },
            { property: 'myFavoriteWrapper' }
        ],
        linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
        flowtype: {
            onlyFilesWithFlowAnnotation: false
        }
    }
};
