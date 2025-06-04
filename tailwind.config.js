/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        empireRed: '#E11D48',
        empireBlack: '#0F0F0F',
        empireGray: '#1A1A1A',
        empireGlow: '#F43F5E',
      },
      fontFamily: {
        empire: ['"Orbitron"', 'monospace'],
      },
      boxShadow: {
        empireGlow: '0 0 10px #F43F5E',
      }
    },
  },
  plugins: [],
}
