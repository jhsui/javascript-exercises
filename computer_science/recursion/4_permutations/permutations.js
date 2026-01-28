const permutations = function (arr) {
  if (arr.length === 0) {
    return [[]];
  }

  if (arr.length === 1) {
    return [arr];
  }

  const whatIsReturned = [];
  const first = arr[0];

  const subArr = arr.toSpliced(0, 1);

  for (let i = 0; i <= subArr.length; i++) {
    for (const ar of permutations(subArr)) {
      const newArr = ar.toSpliced(i, 0, first);
      whatIsReturned.push(newArr);
    }
  }

  return whatIsReturned;
};

// Do not edit below this line
module.exports = permutations;
