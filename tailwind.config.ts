import type { Config } from 'tailwindcss'
const radixPlugin = require('tailwindcss-radix')

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-1': ' rgba(255, 255, 255, 0.90)',
        'grey-10': 'hsl(210, 15%, 95%)',
        'grey-20': 'hsla(198, 19%, 89%, 1)',
        'grey-30': 'hsl(0, 0%, 75%)',
        'grey-40': 'hsl(0, 1%, 57%)',
        'grey-50': 'hsl(0, 0%, 48%)',
        'grey-55': 'hsla(0, 0%, 46%, 1)',
        'grey-60': 'hsl(218, 8%, 20%)',
        'grey-70': 'hsl(193, 9%, 19%)',
        'grey-80': 'hsl(220, 9%, 13%)',
        'grey-90': 'hsl(220, 12%, 10%)',
        'black-60': 'hsla(0, 0%, 50%, 0.467)',
        'green-60': 'hsl(151, 83%, 34%)',
        'green-10': 'hsla(151, 83%, 34%, 1)',
        'blue-20': 'hsl(150, 100%, 98%)',
       
      },

      gridTemplateColumns: {
        '5col': '2fr 1fr 1fr 1fr 1fr',
        '6colPlus': '2fr 1fr 7px 1fr 1fr 1fr',
        'page-layout': 'minmax(max-content, 426px) 1fr',
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dancingScript: ['Dancing-Script', 'sans'],
      },
      boxShadow: {
        headerBottom: '0px 12px 23px 0px rgba(0, 0, 0, 0.05)',
        userDropdown: '0px 4px 124px rgba(44, 39, 40, 0.25)',
        slider: '0 0 0 5px rgba(0, 0, 0, 0.3)',
        black: '0 0 0 2px black',
        '4x': '2px 4px 16px rgba(0, 0, 0, 0.12)',
      },

      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Tooltip
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right-fade': {
          '0%': { opacity: '0', transform: 'translateX(-2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left-fade': {
          '0%': { opacity: '0', transform: 'translateX(2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        // Navigation menu
        'enter-from-right': {
          '0%': { transform: 'translateX(200px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'enter-from-left': {
          '0%': { transform: 'translateX(-200px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'exit-to-right': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(200px)', opacity: '0' },
        },
        'exit-to-left': {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-200px)', opacity: 0 },
        },
        'scale-in-content': {
          '0%': { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
          '100%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
        },
        'scale-out-content': {
          '0%': { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
          '100%': { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },

        // Toast
        'toast-hide': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'toast-slide-in-right': {
          '0%': { transform: `translateX(calc(100% + 1rem))` },
          '100%': { transform: 'translateX(0)' },
        },
        'toast-slide-in-bottom': {
          '0%': { transform: `translateY(calc(100% + 1rem))` },
          '100%': { transform: 'translateY(0)' },
        },
        'toast-swipe-out': {
          '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          '100%': {
            transform: `translateX(calc(100% + 1rem))`,
          },
        },
      },

      animation: {
        // Dropdown menu
        'scale-in': 'scale-in 0.2s ease-in-out',
        'slide-down': 'slide-down 0.1s linear',
        'slide-up': 'slide-up 0.1s linear',

        // Tooltip
        'slide-up-fade': 'slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade':
          'slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',

        // Navigation menu
        'enter-from-right': 'enter-from-right 0.25s ease',
        'enter-from-left': 'enter-from-left 0.25s ease',
        'exit-to-right': 'exit-to-right 0.25s ease',
        'exit-to-left': 'exit-to-left 0.25s ease',
        'scale-in-content': 'scale-in-content 0.2s ease',
        'scale-out-content': 'scale-out-content 0.2s ease',
        'fade-in': 'fade-in 0.2s ease',
        'fade-out': 'fade-out 0.2s ease',
        'fade-in-out': 'fade 350ms cubic-bezier(0.16, 1, 0.3, 1)',

        // Toast
        'toast-hide': 'toast-hide 100ms ease-in forwards',
        'toast-slide-in-right':
          'toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-slide-in-bottom':
          'toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'toast-swipe-out': 'toast-swipe-out 100ms ease-out forwards',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [radixPlugin],
}
export default config
