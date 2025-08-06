/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'utk-orange': '#ff8200',
        'utk-orange-light': '#ffb366',
        'utk-orange-dark': '#cc6800',
        'ewb-blue': '#0077C8',
        'ewb-green': '#28a745',
        'primary': {
          900: '#1a202c',
          800: '#2d3748',
        },
        'neutral': {
          900: '#1a1a1a',
        }
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
      spacing: {
        'container-custom': '80rem',
      }
    },
  },
  plugins: [],
}