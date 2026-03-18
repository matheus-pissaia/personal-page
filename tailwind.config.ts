import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts}",
    ],
    theme: {
        colors: {
            white: '#e6e6e6',
            black: '#131313',
            transparent: 'transparent',
            green: {
                500: '#07A84B',
                900: '#061704',
            },
        },

        fontSize: {
            12: '12px',
            14: '14px',
            16: '16px',
            18: '18px',
            20: '20px',
            24: '24px',
            28: '28px',
            32: '32px',
            36: '36px',
        },

        fontWeight: {
            400: '400',
            600: '600',
        },

        extend: {
            fontFamily: {
                'Terminal': ['Terminal', 'monospace'],
            },
        },
    },
    plugins: [
        {
            handler: ({ addComponents }) => {
                addComponents({
                    '.absolute-center': {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    },
                    '.bloom-effect': {
                        boxShadow: `
                            -64px 0 16px -2px theme('colors.white/2%'),
                            -32px 0 16px -2px theme('colors.white/3%'),
                            32px 0 16px -2px theme('colors.white/3%'),
                            64px 0 16px -2px theme('colors.white/2%'),
                            0 0 16px -8px theme('colors.white/75%')
                        `,
                    },
                    '.text-bloom': {
                        textShadow: `
                            12px 0 .5rem theme('colors.white/10%'),
                            24px 0 .5rem theme('colors.white/5%'),
                            -12px 0 .5rem theme('colors.white/10%'),
                            -24px 0 .5rem theme('colors.white/5%'),
                            0 0 .3rem theme('colors.white/20%')
                        `,
                    }
                })
            }
        }
    ],
} satisfies Config
