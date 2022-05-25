module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "antfu",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "no-unused-vars": "off",
        "no-undef": "off",
    },
};