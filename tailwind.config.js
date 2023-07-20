/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#10CEEC",

          "secondary": "#19D1AD",

          "accent": "#424A65",

          "neutral": "#2b3440",

          "base-100": "#ffffff",

          "info": "#3abff8",

          "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}

