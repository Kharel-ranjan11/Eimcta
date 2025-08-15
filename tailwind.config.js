/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#536CAC",
        secondary: "#EC8433",
        accent: "#F28D38",
        darkmaroon1: "#52252C",
        darkmaroon2: "#6C3B3B",
        softmaroon: "#7C5454",
        gray1: "#9C9898",
        gray2: "#666664",
        gray3: "#8C8C84",
        darkbg: "#111011",
      },
      backgroundImage: {
        'sunset-glow': 'linear-gradient(to right, #ff7e5f, #feb47b)',
        'purple-dream': 'linear-gradient(to right, #8e2de2, #4a00e0)',
        'mango-passion': 'linear-gradient(to right, #f7971e, #ffd200)',

        // --- Cool & Soothing Gradients ---
        'ocean-breeze': 'linear-gradient(to right, #2c3e50, #4ca1af)',
        'emerald-water': 'linear-gradient(to right, #00b09b, #96c93d)',
        'cherry-blossom': 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',

        // --- Deep & Mysterious Gradients ---
        'cosmic-fusion': 'linear-gradient(to right, #1d2b64, #f8cdda)',
        'aurora-borealis': 'linear-gradient(135deg, #7F00FF, #E100FF)',
      },
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
