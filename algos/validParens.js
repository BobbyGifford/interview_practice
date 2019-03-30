var map = {
  "(": ")",
  "[": "]",
  "{": "}"
};

var isValid = function(s) {
  var stack = [];

  for (let char of s) {
    if (map[char]) {
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
