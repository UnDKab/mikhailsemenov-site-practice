import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '480': '480px',
      '768': '768px',
      '980': '980px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#0F4989',
        accent: '#00A0E3',
        surface: '#F4F8FD',
        surface2: '#E8F2FB',
        border: '#D1E4FA',
        text: {
          DEFAULT: '#0A1628',
          2: '#4A5E78',
          3: '#8EA4BC',
        },
        'footer-bg': '#081222',
      },
      borderRadius: {
        pill: '100px',
        card: '18px',
        'card-lg': '20px',
        form: '22px',
        input: '13px',
      },
      boxShadow: {
        card: '0 8px 32px rgba(15,73,137,.08)',
        'card-hover': '0 26px 60px -22px rgba(15,73,137,.4)',
        cta: '0 10px 30px -8px rgba(15,73,137,.5)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.22,.61,.36,1)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
    },
  },
  plugins: [],
}

export default config
