/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      // => @media (min-width: 640px) { ... }

      md: '547px',
      // => @media (min-width: 768px) { ... }

      lg: '768px',
      // => @media (min-width: 1024px) { ... }

      xl: '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: {
        primary: '#E5E5E5',
        secondary: '#F3F6F5',
        tertiary: '#F0F0F0',
      },
      textColor: {
        primary: '#07484A',
        secondary: '#70908B',
        tertiary: '#FDFBF8',
      },
      fontFamily: {
        'big-shoulders-stencil-display': [
          'Big Shoulders Stencil Display',
          'cursive',
        ],
      },
    },
  },
  plugins: [],
};
