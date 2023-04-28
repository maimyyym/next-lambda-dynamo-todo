/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontfamily : {
        body: ['"Noto sans JP"'],
      },
      colors: {
        purple: '#B5A2C5',
        lightPurple: '#D2CAD8',
        lightBlue: '#DCE4EB',
        darkGray: '#808080',
        lightGray: '#999999',
        darkBlack:　'#505050'
      }
   },
  },
  plugins: [],
}
