/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cp-black': '#0A0A0A',
        'cp-white': '#FAFAFA',
        'cp-blue': '#1E3A8A',
        'cp-blue-bright': '#3B63D6',
        'cp-grey': {
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Studio theme colors
        'studio-gold': '#D4AF37',
        'studio-gold-light': '#E8CC6E',
        'studio-gold-dark': '#B8960F',
        'studio-surface': '#111111',
        'studio-elevated': '#1a1a1a',
        'studio-bg': '#0d0d0d',
        'studio-border': '#2a2a2a',
        'studio-muted': '#737373',
      },
      fontFamily: {
        'stencil': ['"Bebas Neue"', 'sans-serif'],
        'heading': ['"Oswald"', 'sans-serif'],
        'condensed': ['"Barlow Condensed"', 'sans-serif'],
        'body': ['"Barlow"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(30,58,138,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(30,58,138,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
