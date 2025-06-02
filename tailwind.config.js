/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#f43f5e",
        dark: "#020617",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
};
