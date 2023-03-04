import eslintPlugin from "eslint-plugin-eslint-plugin"
import stylisticJs from "@stylistic/eslint-plugin-js"

export default [
  {
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/quotes": [
        "error",
        "double",
        {
          allowTemplateLiterals: true,
        },
      ],
      "@stylistic/js/key-spacing": [
        "error",
        {
          align: {
            beforeColon: false,
            afterColon : true,
            on         : "colon",
            mode       : "strict",
          },
        },
      ],
    }
  },
  {
    files: ["src/rules/*.{js,ts}"],
    ...eslintPlugin.configs["flat/rules"],
  },
  {
    files: ["tests/rules/*.{js,ts}"],
    ...eslintPlugin.configs["flat/tests"]
  },
]