// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-x': 'floatX 3s ease-in-out infinite', // Horizontal floating animation
        'float-y': 'floatY 3s ease-in-out infinite', // Vertical floating animation
      },
      keyframes: {
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },      // Start and end at the original position
          '50%': { transform: 'translateX(10px)' },        // Move 10px to the right at 50% of the animation
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },      // Start and end at the original position
          '50%': { transform: 'translateY(-10px)' },       // Move up by 10px at 50% of the animation
        },
      },
    },
  },
  plugins: [],
}
