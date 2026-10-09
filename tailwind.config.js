/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        'ink-3': 'var(--ink-3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', '"Times New Roman"', 'serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(.22,.61,.36,1)',
      },
      keyframes: {
        'pulse-ring': {
          '0%, 100%': { boxShadow: '0 0 0 0 color-mix(in srgb, var(--accent) 55%, transparent)' },
          '50%': { boxShadow: '0 0 0 7px transparent' },
        },
        'scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        'letter-rise': {
          from: { opacity: '0', transform: 'translateY(.5em) rotate(6deg)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(.22,.61,.36,1) infinite',
        'scroll-left': 'scroll-left 32s linear infinite',
        'scroll-right': 'scroll-right 32s linear infinite',
        'letter-rise': 'letter-rise .9s cubic-bezier(.22,.61,.36,1) backwards',
      },
    },
  },
  plugins: [],
}
