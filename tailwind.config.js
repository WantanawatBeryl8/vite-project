/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('tailwindcss-animate')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DB-Heavent', 'system-ui', 'sans-serif'],
      },
      borderRadius: {},
      colors: {
        primary: {
          'fake-black': '#353239',
          'dark-gray': '#736E78',
          grey: '#959199',
          'light-gray': '#C9C6CD',
          white: '#FFFFFF',
        },
        accent: {
          'scb-purple': '#7631C1',
          'dark-purple': '#4F2A6F',
          // interface color
          'scb-yellow': '#FEAC00',
        },
        messaging: {
          // interface color
          'mossy-green': '#00603F',
          blue: '#4A90E2',
          'light-yellow': '#FFEAA8',
          'cherry-red': '#DA2E36',
          // font color
          green: '#06BF59',
          'light-red': '#F05F61',
        },
        background: {
          'fake-white': '#F5F3F6',
          white: '#FFFFFF',
          'slip-purple': '#4B2885',
        },
        icon: {
          'light-green': '#00BC50',
          'light-red': '#F05F61',
          yellow: '#FFC241',
          grey: '#A8A4AC',
        },
        divider: {
          'faint-grey': '#EAE7EC',
        },
        hover: {
          'light-purple': '#C8ADE6',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
};
