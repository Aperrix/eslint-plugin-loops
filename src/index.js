import pkg from "../package.json"
import { noLoopsRule } from "./rules/no-loops.js"

/** @type {import('eslint').ESLint.Plugin} */
const plugin = {
  meta: {
    name   : pkg.name,
    version: pkg.version
  },
  rules: {
    "no-loops": noLoopsRule
  },
  configs: {
    recommended: {
      plugins: ["loops"],
      rules  : {
        "loops/no-loops": "error"
      }
    }
  }
}

export default plugin