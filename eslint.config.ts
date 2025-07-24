import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,vue}'],
    },

    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

    pluginVue.configs['flat/recommended'],
    vueTsConfigs.recommended,

    {
        files: ['**/*.{js,ts,vue}'],
        rules: {
            curly: ['error', 'multi-or-nest', 'consistent'],

            camelcase: 'off',
            'no-unused-vars': 'off',
            'no-return-assign': 'off',
            'no-useless-constructor': 'off',
            'no-fallthrough': 'off',
            'import/no-named-as-default-member': 'off',

            // Typescript rules
            '@typescript-eslint/no-unused-expressions': [
                'error',
                { allowTernary: true },
            ],
            '@typescript-eslint/no-extraneous-class': ['off'],
            '@typescript-eslint/no-unused-vars': [
                'error', {
                    vars: 'all',
                    args: 'after-used',
                    caughtErrors: 'all', // check catch params…
                    caughtErrorsIgnorePattern: '^_', // …but ignore ones that start with "_"
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
    {
        files: ['**/*.vue'],
        rules: {
            'indent': ['off'],
            'vue/html-indent': [
                'error',
                4,
                { baseIndent: 1 },
            ],
            'vue/script-indent': [
                'error',
                4,
                { baseIndent: 1, switchCase: 1 },
            ],

            'vue/template-curly-spacing': ['error', 'always'],

            'vue/multi-word-component-names': 0,

            'vue/max-attributes-per-line': [
                'error', {
                    singleline: {
                        max: 2,
                    },
                    multiline: {
                        max: 1,
                    },
                },
            ],
        },
    },
)
