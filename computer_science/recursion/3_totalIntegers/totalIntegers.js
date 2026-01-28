const totalIntegers = function (obj) {
  if (typeof obj !== "object") {
    return undefined;
  }
  const values = Object.values(obj);

  let count = 0;

  for (const e of values) {
    if (Number.isInteger(e)) {
      count += 1;
    } else if (typeof e === "object" && e !== null) {
      count += totalIntegers(e);
    }
  }

  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
