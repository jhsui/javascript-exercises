const pascal = function (n) {
  if (!Number.isInteger(n)) return undefined;

  if (n < 1) return undefined;

  if (n === 1) {
    return [1];
  }

  const arr = [];

  for (let i = 0; i <= pascal(n - 1).length; i++) {
    if (i === 0) {
      arr[i] = pascal(n - 1)[0];
    } else if (i === pascal(n - 1).length) {
      arr[i] = pascal(n - 1)[pascal(n - 1).length - 1];
    } else {
      arr[i] = pascal(n - 1)[i - 1] + pascal(n - 1)[i];
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = pascal;
