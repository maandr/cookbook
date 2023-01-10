module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  pluginSearchDirs: false,
  plugins: [
    require('prettier-plugin-svelte'),
    require('prettier-plugin-tailwindcss') // MUST come last
  ],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }]
}
