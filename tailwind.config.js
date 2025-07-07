/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // <-- this is critical
  ],
 theme: {
    extend: {
      textStrokeWidth: {
        DEFAULT: '1px',
        '2': '2px',
        '4': '4px',
      },
      textStrokeColor: {
        DEFAULT: '#fff',
        blue: '#3b82f6',
        cyan: '#22d3ee',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
