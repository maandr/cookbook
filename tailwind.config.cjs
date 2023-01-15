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
        background: '#F2E5D7',
        backgroundAccent: '#EBD7C1',
        primary: '#1E000E',
        primaryAccent: '#14000A',
        secondary: '#FFBCB5',
        secondaryAccent: '#CC1400',
        success: '#69DC9E',
        warning: '#F7EF99',
        attention: '#F34213'
      },
      zIndex: {
        navBar: 90,
        navBarToggle: 91,
        loadingSpinner: 100
      }
    }
  },
  plugins: []
}
