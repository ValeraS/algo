"use strict";

function check_parentheses(str = "") {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str.substr(i, 1);
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0) return false;
      const pair = stack.pop();
      if (
        (char === ")" && pair !== "(") ||
        (char === "]" && pair !== "[") ||
        (char === "}" && pair !== "{")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(
  'check_parentheses("df[sdfs]sdfs(sfs{sdfs}sfs)")',
  check_parentheses("df[sdfs]sdfs(sfs{sdfs}sfs)")
);
console.log(
  'check_parentheses("df[sdfs]sdfs(sfssdfs}sfs)")',
  check_parentheses("df[sdfs]sdfs(sfssdfs}sfs)")
);
