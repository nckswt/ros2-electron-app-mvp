module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "react-hooks"
  ],
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true
  },
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "rules": {
    "arrow-body-style": 1,
    "class-methods-use-this": 2,
    "comma-dangle": 1,
    "default-case": 0,
    "function-paren-newline": 0,
    "global-require": 1,
    "import/no-extraneous-dependencies": [2, { "devDependencies": ["**/*.test.js", "mocks/*.*"] }],
    "import/no-unresolved": 1,
    "indent": 1,
    "jsx-a11y/anchor-is-valid": 1,
    "linebreak-style": 0,
    "max-len": [1, 140, 2, { "ignoreComments": true }],
    "new-cap": 0,
    "no-cond-assign": [2, "except-parens"],
    "no-console": 1,
    "no-else-return": 0,
    "no-param-reassign": 1,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": [1, { "vars": "local", "args": "none" }],
    "object-curly-spacing": 1,
    "prefer-template": 1,
    "quote-props": [1, "consistent-as-needed"],
    "react-hooks/exhaustive-deps": 2,
    "react-hooks/rules-of-hooks": "error",
    "react/forbid-component-props": [2, { "forbid": ["id"] }],
    "react/forbid-dom-props": [2, { "forbid": ["id"] }],
    "react/forbid-prop-types": 0,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-indent-props": 1,
    "react/no-unused-prop-types": 0,  //due to bug https://github.com/yannickcr/eslint-plugin-react/issues/811
    "react/prefer-stateless-function": [2, { "ignorePureComponents": true }],
    "react/prop-types": 1,
    "react/require-default-props": 0,
    "space-infix-ops": 1,
  },
  "globals": {},
  "overrides": [{
    "files": [
      "**/*.test.js",
      "tools/testing/*.js"
    ],
    "env": {
      "mocha": true,
    }
  }],
  "ignorePatterns": [
    'node_modules/',
    'src/assets/'
  ],
};
