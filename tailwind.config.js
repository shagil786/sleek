/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 4px 1px rgba(0, 0, 0, 0.1)",
        dark: "0px 0px 4px 1px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
