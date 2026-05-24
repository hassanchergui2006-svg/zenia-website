/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F0E6',
        paper: '#FFF9ED',
        'dark-green': '#174326',
        'leaf-green': '#6F8B61',
        'soft-green': '#DDE8D2',
        lavender: '#B58BD6',
        'deep-purple': '#4E285F',
        'warm-yellow': '#E9CF62',
        brown: '#5B3A24',
        ink: '#25221D',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        handwriting: ['Kalam', 'cursive'],
        body: ['Nunito Sans', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('/assets/paper-texture.png')",
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        soft: '0 4px 24px rgba(23, 67, 38, 0.10)',
        card: '0 2px 16px rgba(23, 67, 38, 0.08)',
        product: '0 16px 48px rgba(23, 67, 38, 0.15)',
      },
    },
  },
  plugins: [],
};
