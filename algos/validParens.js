var map = {
  "(": ")",
  "[": "]",
  "{": "}"
};

var isValid = function(str) {
  let stack = [];

  for (char of str) {
    if (char in map) {
      stack.push(map[char]);
    } else {
      if (char !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("{[]}"));
