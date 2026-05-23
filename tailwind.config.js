/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#E25B2A',
        canvas: '#FAF8F5',
        ink: '#0A0A0A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 30px 60px -20px rgba(0,0,0,0.25), 0 18px 36px -18px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
}
