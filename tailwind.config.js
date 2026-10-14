/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ninja: {
          50: '#FFF4EC',
          100: '#FFE5D2',
          200: '#FFC9A3',
          300: '#FFA76E',
          400: '#FF8A45',
          500: '#F5731F',
          600: '#E25C0B',
          700: '#B94709',
          800: '#8F3709',
          900: '#6B2B09'
        },
        ink: {
          50: '#F5F6FA',
          100: '#E8EAF2',
          200: '#C9CDE0',
          300: '#A3A9C7',
          400: '#6B7196',
          500: '#4A4F70',
          600: '#333753',
          700: '#23263D',
          800: '#171A2B',
          900: '#0E1019',
          950: '#080910'
        },
        mint: '#14B8A6'
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ]
      },
      boxShadow: {
        card: '0 6px 24px -8px rgba(14, 16, 25, 0.16)',
        lift: '0 18px 40px -18px rgba(14, 16, 25, 0.35)',
        glow: '0 0 0 1px rgba(245, 115, 31, 0.35), 0 12px 32px -14px rgba(245, 115, 31, 0.5)'
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(120% 90% at 50% -10%, #2A1B3D 0%, #151225 45%, #0B0A14 100%)',
        'cta-radial':
          'radial-gradient(110% 120% at 15% 10%, #33204a 0%, #171327 50%, #0B0A14 100%)'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.3333%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-33.3333%)' },
          '100%': { transform: 'translateX(0)' }
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(245,115,31,0.45)' },
          '70%': { boxShadow: '0 0 0 14px rgba(245,115,31,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(245,115,31,0)' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-reverse': 'marquee-reverse 46s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: []
}
