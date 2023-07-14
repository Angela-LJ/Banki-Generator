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
        'buttonhover': 'inset 0 0 100px 100px rgba(255, 255, 255, 0.2), 5px 5px 40px 20px rgba(24, 42, 123, 0.9)'
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

