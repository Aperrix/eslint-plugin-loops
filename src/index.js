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
  }
}

export default plugin