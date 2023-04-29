/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '640px',
      desktop: '1280px',
    },
    extend: {
      fontFamily: {},
      colors: {
        black: {
          1: '#35393F',
          2: '#2B2D31',
          3: '#1D1F22',
          4: '#151619',
        },
        grey: {
          1: '#F5F5F5',
          2: '#E4E4E4',
          3: '#C1C4CB',
          4: '#7C8187',
          5: '#5A6069',
        },
        coral: {
          1: '#F39765',
          2: '#E46643',
        },
      },
    },
    plugins: [],
  },
};

