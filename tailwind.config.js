/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5bcfd',
          400: '#829bfa',
          500: '#6376f6',
          600: '#3B7FD1', // Primary
          700: '#3456e3',
          800: '#2d46c2',
          900: '#2a3f99',
          950: '#1d2968',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#9ef3e3',
          300: '#67e8d3',
          400: '#39d1bd',
          500: '#2E9E9B', // Secondary
          600: '#11807a',
          700: '#0e6b69',
          800: '#115655',
          900: '#114747',
          950: '#072d2d',
        },
        orange: {
          50: '#fff8f1',
          100: '#feecdd',
          200: '#fdd7bb',
          300: '#fbbc8d',
          400: '#f9985e',
          500: '#F97C5F', // Accent
          600: '#e8580a',
          700: '#c24707',
          800: '#9c3b0c',
          900: '#7e320d',
          950: '#431509',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      animation: {
        bounce: 'bounce 1.5s infinite',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};