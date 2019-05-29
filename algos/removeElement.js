const removeElements = (nums, val) => {
  let length = nums.length;
  let i = 0;

  while (i < length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      length--;
    } else {
      i++;
    }
  }
  return nums.length;
};

console.log(removeElements([1, 2, 3, 5], 3));
