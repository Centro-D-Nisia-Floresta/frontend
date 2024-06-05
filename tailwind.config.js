/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'magenta-/-fuchsia': {
        '50': '#fff3ff',
        '100': '#fce6ff',
        '200': '#f9ccff',
        '300': '#f9a4ff',
        '400': '#f76eff',
        '500': '#ec30fd',
        '600': '#d418e1',
        '700': '#b410bb',
        '800': '#950f99',
        '900': '#7c127d',
        '950': '#530054',
        },
        
        'bright-turquoise': {
          '50': '#f0fdfb',
          '100': '#ccfbf6',
          '200': '#98f7ee',
          '300': '#53eae2',
          '400': '#2cd5d2',
          '500': '#13b9b8',
          '600': '#0c9395',
          '700': '#0e7477',
          '800': '#105c5f',
          '900': '#124e4f',
          '950': '#042c2f',
      },
    },},
  },
  plugins: [],
}



