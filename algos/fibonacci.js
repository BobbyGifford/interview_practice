const fib = num => {
  let arr = [0, 1];

  for (let i = 1; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i]);
  }
  return arr;
};

console.log(fib(5));
