/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sansSerif: ['Source Sans Pro', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
      handwriting: ['Kalam', 'cursive']
    },
    extend: {
      colors: {
        colorPrimary: '#A63A50',
        colorPrimaryAccent: '#BA6E6E',
        colorBackground: '#f0e7d8',
        colorBackgroundAccent: '#AB9B96',
        colorSecondary: '#A1674A',
        colorSecondaryAccent: '#1C120D'
      }
    }
  },
  plugins: []
}
