/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      height: {
        '40': '40em',
        '80': '80vh'
      },
      boxShadow: {
        'buttonshadow': '5px 5px 40px 10px',
        'cardshadow': 'inset 0 0 0 .1rem rgb(105, 105, 105), inset 0 0 5rem black, inset 0 0 .5rem 1rem rgba(150,150,150,.25)',
        'questionshadow': 'inset 0 0 0 .1rem rgb(105, 105, 105), inset 0 0 5rem black, inset 0 0 .5rem 1rem rgba(150,150,150,.25)',
        'buttonhover': 'inset 0 0 100px 100px rgba(255, 255, 255, 0.2), 5px 5px 40px 20px rgba(24, 42, 123, 0.9)',
        "arcade-primary": 'inset 0 2.813px 0 #9508c5, inset 0 -2.813px 0 #670386, inset 0 0 0 2.813px #720ca1, inset 0 0 0 5.6px #5a0ac2, inset 0 0 0 6.72px #31044f, inset 0 0 0 7.3043478261px black, inset 0 0 0 9.6px rgba(123, 11, 141, 0.7), inset 0 0 0 12.8727272727px #5a0ac2, inset 0 36px 12px #670386, inset 0 0 9.6px 17.8133333333px #520470, 0 5.04px 0 rgba(0, 0, 0, 0.3);'
      },
      backgroundSize: {
        'main': '100% 0.15rem'
      },
      gridTemplateColumns: {
        'cardgrid': 'repeat(5, 1fr);',
        'buttongrid': 'repeat(7, 1fr);'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    plugins: []
  }
}

