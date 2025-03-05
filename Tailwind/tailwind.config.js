/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./HTML/*.{html,js}"], // Esto apunta correctamente a la carpeta 'HTML' donde está tu index.html
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFA07A',
          hover: '#FF8C5A',
        },
        secondary: {
          DEFAULT: '#FFD700',
          hover: '#FFC600',
        },
        accent: {
          DEFAULT: '#9370DB',
          muted: '#A080E0',
        },
        neutral: {
          DEFAULT: '#4682B4',
          light: '#5A9BC8',
        },
        dark: {
          DEFAULT: '#2F4F4F',
          muted: '#3A5C5C',
        },
      },

      fontFamily: {
        'viaoda': ['"Viaoda Libre"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
