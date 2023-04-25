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
        lightGreen: '#70908B',
        darkGreen: '#07484A',
        success: '#CAF3E5',
        error: '#F9D9DA',
        info: '#FFF4E7',
      },
      textColor: {
        primary: '#07484A',
        secondary: '#70908B',
        tertiary: '#FDFBF8',
        active: '#F9D9DA',
      },
      fontFamily: {
        'big-shoulders-stencil-display': [
          'Big Shoulders Stencil Display',
          'cursive',
        ],
        'big-shoulders-display': ['Big Shoulders Display', 'cursive'],
      },
    },
  },
  plugins: [],
};
