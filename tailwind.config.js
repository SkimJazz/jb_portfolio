/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#0F172A",
        primary: "#1e293b",
        secondary: "rgb(221 160 50)",
        tertiary: "rgb(120 175 159)",    // cyan-700
      },
    },
    screens: {
      lg: {max: "2023px"},
      sm: {max: "1000px"},
    },
  },
  plugins: [],
}
