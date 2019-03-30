const twoSum = (target, nums) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in map) {
      return [map[diff], i];
    }
    map[nums[i]] = i;
  }

  return [-1, -1];
};

console.log(twoSum(10, [5, 1, 1, 5]));
