const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slowBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },

        pulseLoop: {
          '0%': { opacity: .15, transform: 'scale(1) translateZ(0) '},
          '30%': { opacity: .15 },
          '60%': { opacity: 0 },
          '80%': { opacity: 0, transform: 'scale(1.8) translateZ(0)' },
          '100%': { opacity: 0, transform: 'scale(2) translateZ(0)' },
        },
        pulseMiniLoop: {
          '0%': { opacity: 0, transform: 'scale(1) translateZ(0) translateY(-5%)' },
          '30%': { opacity: .3 },
          '50%': { opacity: .3 },
          '80%': { opacity: 0, transform: 'scale(1.8) translateZ(0)' }        }
      },
      animation: {
        slowBounce: 'slowBounce 3s ease-in-out infinite',
        pulse: 'pulseLoop 10s infinite 0s',
        pulse1: 'pulseLoop 10s  infinite 3000ms',
        pulse2: 'pulseLoop 10s  infinite 5500ms ',
        pulseMini: 'pulseMiniLoop 6000ms linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
