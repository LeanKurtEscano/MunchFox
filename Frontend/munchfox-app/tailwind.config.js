/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mygray': '#9DA298',
        'customOrange': '#FF8E3C',  
        'customBg': '#EFFOF3', 
        'customWhite': '#FFFFFE',    
      
      },

    },
  },
  plugins: [],
}