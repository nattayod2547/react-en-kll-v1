/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      //กำหนดเงา
      textShadow: {
        'gradient-shadow': '0 0 40px rgba(99, 102, 241, 0.7), 0 0 30px rgba(139, 92, 246, 0.7), 0 0 40px rgba(236, 72, 153, 0.7)',
      },
      //สิ้นสุดเงา
      // กำหนดสีหลายสี
      colors: {
        'custom-blue': '#FF00D2',
        'custom-green': '#4E08FF',
        'custom-cyan': '#00D2C7',
        'custom-yellow': '#FF0EA2',
        'custom-orange': '#00A5F6',
      },
        backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FF00D2, #FF0EA2, #4E08FF, #00A5F6 , #00D2C7)',
      },
    },
    //ถึงตรงนี้เลย
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow-gradient-shadow': {
            textShadow: '0 0 40px rgba(255, 1, 204, 0.7), 0 0 30px rgba(68, 30, 254, 0.4), 0 0 50px rgba(0, 206, 204, 0.8)',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
}