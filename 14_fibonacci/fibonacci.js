const fibonacci = function (num) {
  num = Number(num);

  if (num < 0) {
    return "OOPS";
  }
  if (num == 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  }
  if (num == 2) {
    return 1;
  }

  const fib = [1, 1];

  for (let i = 2; i < Infinity; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    if (num === fib.length) {
      return fib[num - 1];
    }
  }
};

// Do not edit below this line
module.exports = fibonacci;
