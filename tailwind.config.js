/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      boxShadow: {
        main: '-2px 0px 8px 2px rgba(0, 0, 0, 0.10)'
      }
    }
  },
  plugins: []
}
