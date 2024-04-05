/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./packages/**/*.{html,tsx}"],
  darkMode: ['class', '[data-mode="dark"]'],
  purge: {
    options: {
      safelist: ['bg-neutral-100', 'dark:bg-neutral-800'],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],  
}

