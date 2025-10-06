const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums.reduce((sum, current) => sum + current);
};

const multiply = function (nums) {
  return nums.reduce((m, current) => m * current, 1);
};

const power = function (base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function (a) {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
