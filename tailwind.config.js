/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "navbar-color": "#041e42",
      },
      minHeight: {
        less: "20vh",
        all: "95vh",
        medium: "82vh",
        part: "65vh",
        inter: "60vh",
      },
      fontFamily: {
        sans: ["bogle"],
      },
    },
  },
  plugins: [],
};
