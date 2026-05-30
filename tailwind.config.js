module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0F0F0F',
        surfaceMuted: '#141414',
        clay: '#D72638',
        ink: '#F8F8F8',
        inkSoft: '#D7D7D7'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        28: '7rem'
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem'
      },
      boxShadow: {
        glow: '0 30px 80px rgba(0, 0, 0, 0.38)',
        soft: '0 20px 50px rgba(0, 0, 0, 0.22)'
      },
      letterSpacing: {
        tightest: '-0.04em'
      },
      transitionTimingFunction: {
        'soft-out': 'cubic-bezier(0.25, 0.1, 0.25, 1)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        fade: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        fade: 'fade 0.9s ease-out both'
      }
    }
  },
  plugins: []
}
