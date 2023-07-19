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

        //arcade button shadow colors
        'arcade-btn-light-p-default': 'inset 0 2.813px 0 #9508c5, inset 0 -2.813px 0 #670386, inset 0 0 0 2.813px #720ca1, inset 0 0 0 5.6px #5a0ac2, inset 0 0 0 6.72px #31044f, inset 0 0 0 7.3043478261px black, inset 0 0 0 9.6px rgba(123, 11, 141, 0.7), inset 0 0 0 12.8727272727px #5a0ac2, inset 0 36px 12px #670386, inset 0 0 9.6px 17.8133333333px #520470, 0 5.04px 0 rgba(0, 0, 0, 0.3)',
        'arcade-btn-light-p-pushed': 'inset 0 2.813px 0 #9508c5, inset 0 -2.813px 0 #670386, inset 0 0 0 2.813px #720ca1, inset 0 0 0 5.6px #5a0ac2, inset 0 0 0 6.72px #31044f, inset 0 0 0 7.8901960784px black, inset 0 0 0 9.6px rgba(123, 11, 141, 0.2), inset 0 0 0 12.8727272727px #720ca1, inset 0 36px 12px #60057b, inset 0 0 9.6px 17.8133333333px #4b0362, 0 5.04px 0 rgba(0, 0, 0, 0.3)',
        'arcade-btn-dark-p':'inset 0 2.813px 0 #6634e4, inset 0 -2.813px 0 #350ba1, inset 0 0 0 2.813px rgb(62, 33, 190), inset 0 0 0 5.6px rgb(44, 17, 220), inset 0 0 0 6.72px rgb(39, 9, 110), inset 0 0 0 7.3043478261px black, inset 0 0 0 9.6px rgba(90, 24, 220, 0.97), inset 0 0 0 12.8727272727px #350ac269, inset 0 36px 12px #4704d7, inset 0 0 9.6px 17.8133333333px #6520fa, 0 5.04px 0 rgba(0, 0, 0, 0.3);',
        'arcade-btn-dark-p-pushed': 'inset 0 2.813px 0 #6634e4, inset 0 -2.813px 0 #3c14a1, inset 0 0 0 2.813px rgb(62, 33, 190), inset 0 0 0 5.6px rgb(44, 17, 220), inset 0 0 0 6.72px rgb(39, 9, 110), inset 0 0 0 7.8901960784px black, inset 0 0 0 9.6px rgba(27, 22, 122, 0.2), inset 0 0 0 12.8727272727px #481fec, inset 0 36px 12px #3f11a3, inset 0 0 9.6px 17.8133333333px #311082, 0 5.04px 0 rgba(0, 0, 0, 0.3)',
        'arcade-btn-light-b-default':'inset 0 2.813px 0 #2ac4ef, inset 0 -2.813px 0 #0a3e98, inset 0 0 0 2.813px #1087e2, inset 0 0 0 5.6px #2472cb, inset 0 0 0 6.72px #31044f, inset 0 0 0 7.3043478261px black, inset 0 0 0 9.6px #29bce5, inset 0 0 0 12.8727272727px #127dcffa, inset 0 36px 12px #098bee, inset 0 0 9.6px 17.8133333333px #09657e, 0 5.04px 0 rgba(0, 0, 0, 0.3)',
        'arcade-btn-light-b-pushed': 'inset 0 2.813px 0 #2ac4ef, inset 0 -2.813px 0 #0a3e98, inset 0 0 0 2.813px #1087e2, inset 0 0 0 5.6px #2472cb, inset 0 0 0 6.72px #31044f, inset 0 0 0 7.8901960784px black, inset 0 0 0 9.6px rgba(123, 11, 141, 0.2), inset 0 0 0 12.8727272727px #1087e2, inset 0 36px 12px #0f6cb4, inset 0 0 9.6px 17.8133333333px #0b4f83, 0 5.04px 0 rgba(0, 0, 0, 0.3)',
        'arcade-btn-dark-b-default':'inset 0 2.813px 0 #0d50f9, inset 0 -2.813px 0 #0b3fc2, inset 0 0 0 2.813px #0e45d1, inset 0 0 0 5.6px #0e39a4, inset 0 0 0 6.72px #31044f, inset 0 0 0 7.3043478261px black, inset 0 0 0 9.6px #156afe, inset 0 0 0 12.8727272727px #0d3cf9c6, inset 0 36px 12px #1544fe, inset 0 0 9.6px 17.8133333333px #267cd2, 0 5.04px 0 rgba(0, 0, 0, 0.3)',
        'arcade-btn-dark-b-pushed': 'inset 0 2.813px 0 #0d50f9, inset 0 -2.813px 0 #0b3fc2, inset 0 0 0 2.813px #0e45d1, inset 0 0 0 5.6px #0e39a4, inset 0 0 0 6.72px #31044f, inset 0 0 0 7.8901960784px black, inset 0 0 0 9.6px rgba(123, 11, 141, 0.2), inset 0 0 0 12.8727272727px #0048ff, inset 0 36px 12px #0d3bb1, inset 0 0 9.6px 17.8133333333px #0c3293, 0 5.04px 0 rgba(0, 0, 0, 0.3)'
      },
      backgroundColor:{
        //arcade button background colors on press
        'arcade-btn-light-p-bg': '#420869;',
        'arcade-btn-dark-p-bg': 'rgb(44, 12, 66)',
        'arcade-btn-light-b-bg': '#093c63',
        'arcade-btn-dark-b-bg': '#0a2a7b',

      },
      backgroundSize: {
        'main': '100% 0.15rem'
      },
      gridTemplateColumns: {
        'cardgrid': 'repeat(5, 1fr);'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    plugins: []
  }
}

