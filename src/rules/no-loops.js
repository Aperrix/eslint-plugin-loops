const loopsList = {
  "ForStatement"       : "for",
  "ForOfStatement"     : "forOf",
  "ForInStatement"     : "forIn",
  "ExpressionStatement": "forEach",
  "WhileStatement"     : "while",
  "DoWhileStatement"   : "doWhile",
}

/** @type {import('eslint').Rule.RuleModule} */
export const noLoopsRule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "disallow the use of loops",
      url        : "https://github.com/Aperrix/eslint-plugin-loops/blob/main/docs/rules/no-loops.md",
      recommended: true
    },
    schema: [
      {
        type      : "object",
        properties: {
          exceptions: {
            type: "array",
            // enum: ["for", "forOf", "forIn", "forEach", "while", "doWhile"]
          }
        },
        additionalProperties: false
      }
    ],
    messages: {
      errorMessage: "Usage of {{loopType}} loops is not allowed. Use methods like map, filter or reduce instead."
    },
  },
  create: (context) => {
    const options = context.options[0]?.exceptions ?? []
    // const sourceCode = context.sourceCode

    function reportLoopPresence(node) {
      if (!options.includes(loopsList[node.type])) {
        context.report({
          node,
          messageId: "errorMessage",
          data     : {
            loopType: loopsList[node.type]
          }
        })
      }
    }

    return {
      ForStatement                                                      : (node) => reportLoopPresence(node),
      ForOfStatement                                                    : (node) => reportLoopPresence(node),
      ForInStatement                                                    : (node) => reportLoopPresence(node),
      WhileStatement                                                    : (node) => reportLoopPresence(node),
      DoWhileStatement                                                  : (node) => reportLoopPresence(node),
      "ExpressionStatement[expression.callee.property.name = 'forEach']": (node) => reportLoopPresence(node),
    }
  }
}