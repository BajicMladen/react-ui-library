/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        "velvet-plum": {
          100: "#F1EFF0",
          200: "#FCF7FA",
          300: "#F1ECEE",
          400: "#F2DBE6",
          500: "#DEBFCD",
          600: "#D888AC",
          700: "#A5416F",
          800: "#86174A",
          900: "#72133F",
        },
        "silent-teal": {
          100: "#FAFAFA",
          200: "#F2F4F5",
          300: "#DFE9EB",
          400: "#CED9DB",
          500: "#3C5B60",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
