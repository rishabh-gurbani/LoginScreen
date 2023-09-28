/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize:{
        'xxl':['16rem', {
          'lineHeight':'0.8',
        }],
      },
      padding:{
        '59':'14.75rem',
      },
      colors:{
        "neutral-50":"#f9f9f9",
        "neutral-700":"#404040",
        "twitter-blue":"#1D9BF0",
        "sign-up-border":"rgba(29, 155, 240, 0.24)",
      }
    },
  },
  plugins: [],
}

