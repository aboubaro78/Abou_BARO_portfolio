/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B2545',
          light: '#134074',
          dark: '#071a33',
        },
        secondary: '#134074',
        accent: {
          DEFAULT: '#F4A261',
          light: '#fbbe91',
          dark: '#e07b37',
        },
        surface: '#F8FAFD',
        text: {
          DEFAULT: '#333333',
          muted: '#6B7280',
          light: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(11,37,69,0.08)',
        'card-hover': '0 12px 40px -8px rgba(11,37,69,0.16)',
        glow: '0 0 40px rgba(244,162,97,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        pulse2: 'pulse2 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(2deg)' },
        },
        pulse2: {
          '0%,100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
      },
    },
  },
  plugins: [],
};
