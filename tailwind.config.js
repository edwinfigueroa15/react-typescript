/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: '#86bd7f'
    },
    borderRadius: {      
      lg: '25px',
    },
    extend: {}, 
  },
  plugins: [],
}