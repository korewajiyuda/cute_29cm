/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        acnh: {
          cream: '#F8F5EC',
          card: '#FFFDF9',
          mint: '#78D5B3',
          'mint-dark': '#52B491',
          'mint-soft': '#E6F7F0',
          yellow: '#F6D76B',
          'yellow-soft': '#FDF6D8',
          brown: '#4A3F35',
          'brown-light': '#8A7968',
          border: '#E5DAC5',
          'border-strong': '#D6C7AC',
          blush: '#F4A69E',
        },
        cm29: {
          black: '#111111',
          gray: '#767676',
          line: '#E8E8E8',
          soft: '#F7F7F7',
          accent: '#FF4800',
        },
      },
      fontFamily: {
        editorial: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          'sans-serif',
        ],
        cozy: [
          '"Jua"',
          '"Gowun Dodum"',
          'Pretendard',
          '"Apple SD Gothic Neo"',
          'rounded',
          'sans-serif',
        ],
      },
      keyframes: {
        'acnh-pop': {
          '0%': { transform: 'scale(0.92)' },
          '45%': { transform: 'scale(1.07)' },
          '75%': { transform: 'scale(0.97)' },
          '100%': { transform: 'scale(1)' },
        },
        'acnh-bounce': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '30%': { transform: 'translateY(-10px) scale(1.04, 0.96)' },
          '55%': { transform: 'translateY(2px) scale(0.97, 1.03)' },
          '78%': { transform: 'translateY(-4px) scale(1.01, 0.99)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--float-rot, 0deg))' },
          '50%': { transform: 'translateY(-6px) rotate(calc(var(--float-rot, 0deg) + 1.5deg))' },
        },
        'float-delay': {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--float-rot, 0deg))' },
          '50%': { transform: 'translateY(-8px) rotate(calc(var(--float-rot, 0deg) - 1.5deg))' },
        },
        'sparkle-burst': {
          '0%': { opacity: '0', transform: 'scale(0.4) rotate(0deg)' },
          '35%': { opacity: '1', transform: 'scale(1.15) rotate(18deg)' },
          '100%': { opacity: '0', transform: 'scale(0.7) translateY(-10px) rotate(45deg)' },
        },
        'tooltip-in': {
          '0%': { opacity: '0', transform: 'translateY(6px) scale(0.95)' },
          '65%': { opacity: '1', transform: 'translateY(-2px) scale(1.02)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'sheet-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'avatar-idle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-2.5px)' },
        },
      },
      animation: {
        'acnh-pop': 'acnh-pop 0.36s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'acnh-bounce': 'acnh-bounce 0.52s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'float-slow': 'float-slow 3.6s ease-in-out infinite',
        'float-delay': 'float-delay 4.1s ease-in-out infinite 0.7s',
        'sparkle-burst': 'sparkle-burst 0.75s ease-out forwards',
        'tooltip-in': 'tooltip-in 0.32s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'sheet-up': 'sheet-up 0.32s cubic-bezier(0.22, 1, 0.36, 1)',
        'avatar-idle': 'avatar-idle 3.2s ease-in-out infinite',
      },
      boxShadow: {
        acnh: '0 4px 0 0 #E5DAC5',
        'acnh-sm': '0 2px 0 0 #E5DAC5',
        'acnh-mint': '0 4px 0 0 #52B491',
        'acnh-yellow': '0 4px 0 0 #DFB93F',
        'acnh-float': '0 10px 24px -6px rgba(74, 63, 53, 0.16), 0 4px 0 0 #52B491',
      },
    },
  },
  plugins: [],
};
