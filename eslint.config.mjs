// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import js from '@eslint/js';

export default withNuxt(
  // Your custom configs here
  //! Configurazione raccomandata
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    }
  }
)
