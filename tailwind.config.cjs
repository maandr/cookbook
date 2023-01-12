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
        colorPrimary: '#1E000E',
        colorPrimaryAccent: '#14000A',
        colorBackground: '#F2E5D7',
        colorBackgroundAccent: '#EBD7C1',
        colorSecondary: '#FFBCB5',
        colorSecondaryAccent: '#CC1400'
      },
      zIndex: {
        navBar: 90,
        navBarToggle: 91
      }
    }
  },
  plugins: []
}
