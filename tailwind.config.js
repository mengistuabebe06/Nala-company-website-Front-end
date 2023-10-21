/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        bulePrimary: "#006dd5",
        neutralGrey: "#717171",
        gray900: "#18191F",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
