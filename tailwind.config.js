/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.2s ease-out forwards",
      },
      keyframes: {
        'gradient-move': '',
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'gradient-x': 'gradient-move 15s ease infinite',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
    },
  },
  plugins: [],
}
