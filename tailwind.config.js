/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'black': {
            100: "#4B4B4B"
          },
          'gray': {
            100: "#E1E1E1"
          }
        }
      },
      backgroundImage: {
        'main': "linear-gradient(180deg, #72A1D4 0%, #9FC0E4 86%)"
      },
      fontFamily: {
        'trebuchet': ['Trebuchet MS', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      fontSize: {
        'xxs': ['10px', '15px']
      },
      borderRadius: {
        '4xl': '28px'
      }
    },
  },
  plugins: [],
}

