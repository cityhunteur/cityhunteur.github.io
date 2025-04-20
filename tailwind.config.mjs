/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      'xs': '0.306rem',    // (Base ÷ φ²) × 0.8
      'sm': '0.494rem',    // (Base ÷ φ) × 0.8
      'base': '0.8rem',    // Base size × 0.8
      'lg': '1.294rem',    // (Base × φ) × 0.8
      'xl': '2.094rem',    // (Base × φ²) × 0.8
      '2xl': '3.389rem',   // (Base × φ³) × 0.8
    },
    extend: {
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
      },
      colors: {
        primary: '#89ABE3', // Keeping the original primary color from the site
        'primary-dark': '#1d4ed8', // Darker blue for WCAG AA contrast compliance
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'rgba(0, 0, 0, 0.8)',
            fontSize: '0.8rem',
            h1: {
              fontSize: '2.094rem',
            },
            h2: {
              fontSize: '1.294rem',
            },
            h3: {
              fontSize: '0.8rem',
            },
            h4: {
              fontSize: '0.494rem',
            },
            a: {
              color: '#89ABE3',
              '&:hover': {
                color: '#89ABE3',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
