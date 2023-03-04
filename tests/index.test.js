import { RuleTester  } from "eslint"
import { noLoopsRule } from "../src/rules/no-loops.js"

const ruleTester = new RuleTester()

ruleTester.run("no-loops", noLoopsRule, {
  valid: [
    {
      code: "[1, 2, 3].map(function (i) { console.log(i) })"
    },
    {
      code   : "for (var i; i <= n; i++) { console.log(i) }",
      options: [
        {
          exceptions: ["for"]
        }
      ]
    }

  ],
  invalid: [
    {
      code  : "for (var i; i <= n; i++) { console.log(i) }",
      errors: [ { messageId: "errorMessage" } ]
    },
    {
      code  : "for (i of [1, 2, 3]) { console.log(i) }",
      errors: [ { messageId: "errorMessage" } ]
    },
    {
      code  : "for (i in [1, 2, 3]) { console.log(i) }",
      errors: [ { messageId: "errorMessage" } ]
    },
    {
      code  : "[1, 2, 3].forEach(function(i){ console.log(i) })",
      errors: [ { messageId: "errorMessage" } ]
    },
    {
      code  : "while (i <= n) { console.log(i) }",
      errors: [ { messageId: "errorMessage" } ]
    },
    {
      code  : "do { console.log(i) } while (i <= n)",
      errors: [ { messageId: "errorMessage" } ]
    },
  ]
})

console.log("every tests passed")