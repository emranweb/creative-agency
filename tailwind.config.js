/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        porfolioImage1: "url('../public/portfolio-bg-1.jpg')",
        porfolioImage2: "url('../public/portfolio-bg-2.jpg')",
        porfolioImage3: "url('../public/portfolio-bg-3.jpg')",
      },
    },
  },
  plugins: [],
};
