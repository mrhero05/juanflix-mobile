/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    './App.jsx'
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFC300',
        'custom-gray': '#C1C1C1',
      }
    },
  },
  plugins: [],
}