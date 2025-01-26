/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: 15,
    },
    extend: {
      screens: {
        'can-hover': {'raw': '(hover: hover)'},
      }
    },
  },
  plugins: [],
}