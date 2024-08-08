/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primabgbox': '#FAFAFA',
        'primabgstal':'#FFFFFF',
        'primatext': '#B4B4B8',
      },
    },
  },
  plugins: [],
}

