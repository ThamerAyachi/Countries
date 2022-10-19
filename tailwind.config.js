/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lmb: "#fafafa",
        lElement: "#111517",
        dg: "#858585",
      },
    },
  },
  plugins: [],
};