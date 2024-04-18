/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#0085ff',
          200: '#69b4ff',
          300: '#e0ffff',
        },
        'accent' : {
          100: '#006fff',
          200: '#e1ffff',
        },
        'text' : {
          100: '#FFFFFF',
          200: '#9e9e9e',
        },
        'bg': {
          100: '#1E1E1E',
          200: '#2d2d2d',
          300: '#454545',
        },
      }
    },
  },
  plugins: [],
}

