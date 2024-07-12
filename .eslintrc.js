module.exports = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      },
      requireConfigFile: false
    },
    env: {
      browser: true,
      node: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/essential'
    ],
    plugins: [
      'vue'
    ],
    rules: {
      // Tus reglas personalizadas aquí
    }
  };
  