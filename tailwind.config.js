/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { 400: '#240D57', 300: '#501FC1', 200: '#8456EC', 100: '#E87BF8' },
        secondary: { 300: '#CCB6FF', 200: '#EDE5FF', 100: '#F6F2FF' },
        alert: { 400: '#00805E', 300: '#D3FFE2', 200: '#E61445', 100: '#FFD7E0' },
        neutral: {
          600: '#4F4F4F',
          500: '#828282',
          400: '#BDBDBD',
          300: '#E0E0E0',
          200: '#F2F2F2',
          100: '#FBFAFF',
        },
      },
    },
  },
  plugins: [],
};
