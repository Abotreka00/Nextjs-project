/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        colorOne: "#131424",
        colorTwo: "#393A47",
        colorThree: "#F13025",
        background: "#1d1539",
      },
      backgroundImage: {
        "hero-pattern": "url('/assest/fire.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
