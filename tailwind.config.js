/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['IBM Plex Mono', 'sans-serif'],
        numberFont: ['Kode mono', 'sans-serif'],
        auroraTitle: ['ZCOOL QingKe HuangYou', 'sans-serif'],
        auroraSubheading: ['Geo', 'sans-serif'],
        kanjiFont: ['Noto Serif JP', 'serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      backgroundImage: {},
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0.5',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out-up': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0%' },
          '50%': { opacity: '70%' },
          '100%': { opacity: '100%' },
        },
        fadeSlow: {
          '0%': { opacity: '0%' },
          '50%': { opacity: '0%' },
          '75%': { opacity: '50%' },
          '100%': { opacity: '100%' },
        },
        shadowChange: {
          '0%': { boxShadow: '0 0 30px rgba(217, 70, 239, 1)' },
          '50%': { boxShadow: '0 0 30px rgba(217, 70, 239, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(217, 70, 239, 1)' },
        },
        violetGlow: {
          '0%': { boxShadow: '0 0 30px rgba(124, 58, 237,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 1)' },
          '100%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.3)' },
        },
        colorFade: {
          '0%': { backgroundColor: 'rgba(251, 146, 60, 1)' },
          '100%': { backgroundColor: 'rgba(3, 7, 18, 1)' },
        },
        orangeButton: {
          '0%': { backgroundColor: 'rgba(99,53,15, 0.5)' },
          '50%': { backgroundColor: 'rgba(99,53,15, 0.2)' },
          '100%': { backgroundColor: 'rgba(99,53,15, 0.5)' },
        },
        pageLoadFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in-down 0.5s ease-in',
        'fade-out': 'fade-out-up 0.5s ease-out',
        fade: 'fadeIn 1s ease-in',
        fadeInSlow: 'fadeSlow 3s ease-in',
        shadowChange: 'shadowChange 2.5s infinite',
        oneSecond: 'violetGlow 1s infinite',
        colorFade: 'colorFade 2s ease-in-out forwards',
        buttonFlash: 'orangeButton 3s ease-in-out infinite',
        pageLoad: 'pageLoadFade 0.4s ease-in forwards',
      },
      boxShadow: {
        glow: '0 0 10px rgba(37,99,235,0.3), 0 0 10px rgba(37,99,235,0.3), 0 0 10px rgba(37,99,235,0.3), 0 0 10px rgba(37,99,235,0.3)',
        purpleGlow:
          '0 0 20px rgba(79,70,229,0.2), 0 0 20px rgba(79,70,229,0.2), 0 0 20px rgba(79,70,229,0.2), 0 0 20px rgba(79,70,229,0.2)',
        footer: '0 -20px 40px rgba(37,99,235,0.4)',
        rainbow:
          '0 0 10px rgba(139, 92, 246,0.3), 0 0 20px rgba(139, 92, 246,0.3), 0 0 10px rgba(56, 189, 248,0.3), 0 0 10px rgba(56, 189, 248,0.3)',
        violetGlow:
          '0 0 20px rgba(124, 58, 237,0.2), 0 0 20px rgba(124, 58, 237,0.2), 0 0 20px rgba(124, 58, 237,0.2), 0 0 20px rgba(124, 58, 237,0.2)',
      },
      cursor: {
        custom: 'url("/cursor.png"), auto',
        'pointer-custom': 'url("/link-cursor.png"), pointer',
      },
    },
  },
  plugins: [],
};
