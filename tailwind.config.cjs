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
        background: '#E3DCC2',
        surface: '#E1E6E1',
        surfaceAccent: '#D3DAD3',
        primary: '#1B2021',
        primaryAccent: '#151612',
        secondary: '#FA850F',
        secondaryAccent: '#BC5F04',
        success: '#69DC9E',
        warning: '#F7EF99',
        attention: '#E63B2E'
      },
      zIndex: {
        navBar: 90,
        navBarToggle: 91,
        overlay: 997,
        modal: 998,
        loadingSpinner: 999
      },
      gridTemplateColumns: {
        crafterIngredience: '1fr 180px 80px 64px',
        crafterIngredienceMobile: '1fr 140px 64px 64px',
        crafterInstructions: '1fr 48px',
        formsQuantityInput: '1fr 75px'
      }
    }
  },
  plugins: []
}
