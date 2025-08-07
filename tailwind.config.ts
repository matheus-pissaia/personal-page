import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts}",
    ],
    theme: {
        colors: {
            white: '#C4CCCB',
            silver: 'silver',
            black: '#131313',
            transparent: 'transparent',
            gray: {
                300: '#bfbfbf',
                600: '#484848',
            },
            navy: 'navy',
            cadetblue: 'cadetblue',
            green: {
                500: '#04833C',
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
                    '.chromatic-aberration': {
                        textShadow: `
                            0.1rem 0 0.05rem rgba(0, 0, 255, 0.6),
                            -0.05rem 0.05rem 0.05rem rgba(255, 0, 255, 0.6),
                            -0.05rem -0.05rem 0.05rem rgba(0, 255, 0, 0.6)
                        `,
                    },
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
                })
            }
        }
    ],
} satisfies Config
