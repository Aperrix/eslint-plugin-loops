# eslint-plugin-loops

This plugin disallow the usage of `for`, `forOf`, `forIn`, `forEach`, `while` and `doWhile` loops.

## Installation
```sh
npm i --save-dev eslint-plugin-loops
```

## Usage

```js
// Flat config (eslint >=v8)
import loopsPlugin from "eslint-plugin-loops"
{
    plugins: {
        "loops": loopsPlugin
    },
    rules: {
        "loops/no-loops": ["error"]
    }
}

// Old config
{
    plugins: ["loops"],
    rules: {
        "loops/no-loops": ["error"]
    }
}
```

### Options
You can allow the use of some loops :
```js
{
    rules: {
        "loops/no-loops": [ "error",
            {
                exceptions: ["for", "forOf", "forIn", "forEach", "while", "doWhile"]
            }
        ]
    }
}
```