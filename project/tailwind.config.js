/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#D8E3FF',
          200: '#B5C6FF',
          300: '#8DA9FF',
          400: '#6687FF',
          500: '#3E64FE',
          600: '#2D4BD8',
          700: '#1E3A8A',
          800: '#152962',
          900: '#0B1732',
        },
        secondary: {
          50: '#FFF8E5',
          100: '#FFF1CC',
          200: '#FFE699',
          300: '#FFDB66',
          400: '#FFD033',
          500: '#FFC107',
          600: '#D9A406',
          700: '#B38705',
          800: '#8C6A04',
          900: '#664D03',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};