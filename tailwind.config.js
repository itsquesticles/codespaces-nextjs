module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'surface-1': '#16161E',
        'surface-2': '#171820',
        'surface-3': '#191A23',
        'surface-4': '#1A1B26',
        'surface-5': '#1E1E2A',
        'surface-6': '#1E202E',
        'surface-7': '#202330',
        clay: '#6E83D4',
        ink: '#C8D0F0',
        inkSoft: '#A2A9C4'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.02em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.03em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.03em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.05em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.06em' }],
        '8xl': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.07em' }],
        '9xl': ['8rem', { lineHeight: '1.1', letterSpacing: '-0.08em' }]
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '28': '7rem'
      },
      borderRadius: {
        '4xl': '4rem',
        '5xl': '5rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem'
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'strong': '0 8px 32px rgba(0, 0, 0, 0.16)',
        'glow': '0 0 24px rgba(110, 131, 212, 0.15)',
        'glow-strong': '0 0 48px rgba(110, 131, 212, 0.25)',
        none: 'none'
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'display-tight': '-0.03em',
        'display-normal': '-0.02em'
      },
      transitionTimingFunction: {
        'soft-out': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'smooth-in': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        fade: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        fade: 'fade 0.9s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'slide-up': 'slide-up 0.8s ease-out both',
        'slide-down': 'slide-down 0.8s ease-out both',
        'scale-in': 'scale-in 0.5s ease-out both',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
