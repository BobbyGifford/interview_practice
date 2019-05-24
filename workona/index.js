const equilizeArr = arr => {
  let hashMap = {};
  let maxValueUsed;
  let maxTimesUsed = 0;

  //   Iterates through given array and creates a map of each value and times they're used
  for (let value of arr) {
    hashMap[value] = ++hashMap[value] || 1;

    if (hashMap[value] >= arr.length / 2) {
      maxValueUsed = value;
    }
  }

  // Returns value used most and how many times it was used
  for (let used in hashMap) {
    if (hashMap[used] > maxTimesUsed) {
      maxValueUsed = used;
      maxTimesUsed = hashMap[used];
    }
  }

  //   Returns the differnce in length of the original array and times of most used value.
  return arr.length - maxTimesUsed;
};

class RomanNumerals {
  static fromRoman(str) {
    let romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
    let i = str.length;
    let result = 0;

    while (i--) {
      const curr = romanMap[str.charAt(i)];
      const prev = romanMap[str.charAt(i - 1)];

      result += curr;

      if (prev < curr) {
        result -= prev;
        i -= 1;
      }
    }

    return result;
  }

  static toRoman(num) {
    var hash = [
      ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
      ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
      ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
      ["", "M", "MM", "MMM"]
    ];

    var result = "";
    var counter = 0;
    // Each row represents each letter range going from 0-9
    // Each letter combo is appened then reevaluted depending on the row.
    // Counter represents the current multiple of 10.
    // num%10 returns the current index for the current row because each row goes from 0-10

    // num is the divided by 10 and rounded down, then reevaluated.
    while (num > 0) {
      result = hash[counter++][num % 10] + result;
      num = Math.floor(num / 10);
      console.log(result);
    }

    return result;
  }
}

const connectFour = moves => {};
