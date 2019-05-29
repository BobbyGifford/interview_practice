const isIsomorphic = (s, t) => {
  if (s === t) return true;
  var lens = s.length;
  var i = 1;
  if (lens !== t.length) return false;
  while (i < lens) {
    if (s.indexOf(s[i]) === t.indexOf(t[i])) {
      i++;
    } else {
      break;
    }
  }
  return i === lens;
};

console.log(isIsomorphic("asdfa", "qwerq"));
