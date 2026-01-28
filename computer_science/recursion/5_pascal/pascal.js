const pascal = function (n) {
  if (!Number.isInteger(n) || n < 1) return undefined;

  if (n === 1) return [1];

  const prev = pascal(n - 1);

  const arr = [];

  for (let i = 0; i <= prev.length; i++) {
    if (i === 0) {
      arr[i] = prev[0];
    } else if (i === prev.length) {
      arr[i] = prev[prev.length - 1];
    } else {
      arr[i] = prev[i - 1] + prev[i];
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = pascal;
