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
            borderColor: {
                duotone: '#f9f9f9 #484848 #484848 #f9f9f9',
                'duotone-active': '#131313 #f9f9f9 #f9f9f9 #131313',
            },

            boxShadow: {
                window: 'inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff',
                button: 'inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf',
                'button-active': 'inset -1px -1px #fff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px grey',
            },

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
                })
            }
        }
    ],
} satisfies Config
