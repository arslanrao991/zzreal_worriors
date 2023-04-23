module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: 'standard-with-typescript',
    "extends": ["plugin:codeceptjs/recommended"],
    overrides: [
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
    },
    "plugins": [
      "codeceptjs"
    ],
    "env": {
        "codeceptjs/codeceptjs": true
    },
    "rules": {
      "codeceptjs/no-skipped-tests": 1,   // set rule to give warning if there is any test skip
      "codeceptjs/no-exclusive-tests": 1   // Set rule to give warning if there is use of Scenario.only or Data.only in the test
    }
  }