/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B132B',      // Deep Navy Background
          darker: '#060B18',    // Darker Glass BG
          emerald: '#10B981',   // Accent Green
          cyan: '#06B6D4',      // Accent Cyan
          gold: '#F59E0B'       // Highlight Orange/Yellow
        }
      }
    },
  },
  plugins: [],
}