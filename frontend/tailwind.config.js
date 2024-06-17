// /** @type {import('tailwindcss').Config} */


// export default {
//   darkMode: 'selector',

//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     screens: {
//       'sm': '576px',
//       'md': '960px',
//       'lg': '1440px',
//     },
//     extend: {
      

//     },
//   },
//   plugins: [

//   ],
// }


const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors:{
      blue: {
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3',
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
      },

    },
    screens: {
            'sm': '576px',
            'md': '960px',
            'lg': '1440px',
          },
    extend: {

    },
  },
  plugins: [],
});