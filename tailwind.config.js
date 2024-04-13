/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
        white: '#f9f9f9',
        black: '#131313',
        transparent: 'transparent',
        gray: {
            300: '#bfbfbf',
            600: '#484848',
        },
        blue: '#07007f',
    },

    fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
    },

    extend: {
        borderColor: {
            duotone: '#f9f9f9 #484848 #484848 #f9f9f9',
            'duotone-active': '#131313 #f9f9f9 #f9f9f9 #131313',
        },
    },
  },
  plugins: [],
}

