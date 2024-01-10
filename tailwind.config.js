/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
