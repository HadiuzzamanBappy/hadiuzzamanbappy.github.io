/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[prefers-color-scheme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          'to': { transform: 'translate(calc(-50% - 0.5rem))' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}