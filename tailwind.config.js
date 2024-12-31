/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
      },
      colors: {
        defaultPurple: "#7F56D9",
        defaultTextPurple: "#6941C6",
        softPurple: "rgb(243 232 255 / 29%)",
        softPurple2: "rgb(207 188 227)",
      },
    },
  },
  plugins: [],
};
