import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e11d48',
          black: '#0f172a',
          white: '#ffffff',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            transform: 'scale(0.95)',
            opacity: '0.7',
            filter: 'drop-shadow(0 0 20px rgba(225, 29, 72, 0.5))'
          },
          '50%': { 
            transform: 'scale(1.05)',
            opacity: '1',
            filter: 'drop-shadow(0 0 40px rgba(225, 29, 72, 0.8))'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'rotate-3d': {
          '0%, 100%': { transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)' },
          '50%': { transform: 'perspective(1000px) rotateY(5deg) rotateX(-2deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

