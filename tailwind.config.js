/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      white: '#fff',
      black: '#000',
      green: '#52ae30',
      orange: '#f60',
      red: '#ff435a',
      blue: '#328fe6',
      yellow: '#fc0',
      purple: '#650c90',
      'cold-gray': '#d0d8e8',
      'neutral-gray': '#ababab',
      'dull-green': '#a8ccab',
      'pale-green': '#9dcc8f',
      'pale-gray': '#c0c6b3',
      ocher: '#eac15a',
      peach: '#f6ad82',
      mallow: '#e3adc3',
      lilac: '#c6afd5',
      'crystal-blue': '#a5c3d9',
      'dark-green': '#006648'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
