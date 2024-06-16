/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {

    },
  },
  plugins: [

  ],
}

