const shortestDistance = (words, word1, word2) => {
  w1 = -1;
  w2 = -1;
  min = words.length;

  for (let i = 0; i < words.length; i++) {
    if (word1 === words[i]) {
      w1 = i;
    }
    if (word2 === words[i]) {
      w2 = i;
    }

    if (w1 >= 0 && w2 >= 0) {
      min = Math.min(min, Math.abs(w1 - w2));
    }
  }

  return min;
};

console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "makes",
    "coding"
  )
);
