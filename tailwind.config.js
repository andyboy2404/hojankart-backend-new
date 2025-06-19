/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f5ed',
          100: '#c7e6d2',
          200: '#a3d5b5',
          300: '#7fc397',
          400: '#5bb67e',
          500: '#42a064',
          600: '#0B5C2E', // brand green
          700: '#094b26',
          800: '#073a1d',
          900: '#052915',
        },
        secondary: {
          50: '#fdf8ef',
          100: '#f9ecce',
          200: '#f5dfaa',
          300: '#f1d285',
          400: '#edc969',
          500: '#e9bf4d',
          600: '#d5a63c',
          700: '#a6822f',
          800: '#806423',
          900: '#554318',
        },
        accent: {
          50: '#fee8e7',
          100: '#fdc7c4',
          200: '#fba19d',
          300: '#f97c76',
          400: '#f8635b',
          500: '#f64a40',
          600: '#e14039',
          700: '#af322d',
          800: '#892722',
          900: '#581a17',
        },
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-in-out',
  'slide-down': 'slideDown 0.5s ease-in-out',
  'scroll': 'scroll 20s linear infinite', // ✅ already present!
},
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
