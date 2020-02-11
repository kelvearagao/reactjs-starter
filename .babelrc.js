module.exports = {
    "presets": [
      [
        "@babel/env",
        {
          "targets": {
            "edge": "17",
            "firefox": "60",
            "chrome": "67",
            "safari": "11.1"
          },
          // https://babeljs.io/docs/en/babel-preset-env
          // https://babeljs.io/docs/en/babel-polyfill
          "useBuiltIns": "usage",
          "corejs": "3.6",
          "modules": "commonjs",
          "debug": true
        }
      ]
    ]
  }