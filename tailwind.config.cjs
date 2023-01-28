/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sansSerif: ['Open Sans', 'sans-serif'],
      mono: ['Source Code Pro', 'monospace'],
      handwriting: ['Kalam', 'cursive']
    },
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#EBEAEB',
        surfaceAccent: '#EBEAEB',
        primary: '#1F1C21',
        primaryAccent: '#151316',
        primaryContrast: '#F5F5F5',
        secondary: '#BBB7B4',
        secondaryAccent: '#7D777A',
        secondaryContrast: '#F5F5F5',
        success: '#69DC9E',
        warning: '#F7EF99',
        attention: '#E63B2E'
      },
      zIndex: {
        filterBar: 90,
        filterToggle: 91,
        overlay: 997,
        modal: 998,
        loadingSpinner: 999
      },
      gridTemplateColumns: {
        crafterIngredience: '32px 1fr 180px 80px 64px',
        crafterIngredienceMobile: '32px 1fr 140px 64px 64px',
        crafterInstructions: '1fr 48px',
        formsQuantityInput: '1fr 75px'
      }
    }
  },
  plugins: []
}
