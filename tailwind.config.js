/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '12/16': '12 / 16',
      },
    },
    fontFamily: {
      'bison': ['ui-sans-serif', 'Bison'],
      'zuume': ['ui-sans-serif', 'Zuume'],
      'poppins': ['ui-sans-serif', 'Poppins'],
      'apple': ['ui-sans-serif', 'SF Pro']
    },
  },
  plugins: [],
}
