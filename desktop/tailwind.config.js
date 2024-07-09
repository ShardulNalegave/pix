/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'accent': 'var(--color-accent)',
      },
      fontFamily: {
        'sans': ['"Nunito"'],
        'serif': ['"DM Serif Text"'],
        'mono': ['"Space Mono"'],
        'display': ['"Jersey 25"'],
        'heading': ['"Raleway"'],
      },
    },
  },
  plugins: [],
}
