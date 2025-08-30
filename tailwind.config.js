/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",   // blue-600
          orange: "#F97316", // orange-500
          dark: "#0F172A",
          light: "#F8FAFC",
        },
      },
      boxShadow: { soft: "0 6px 24px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [],
};

