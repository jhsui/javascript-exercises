const convertToCelsius = function (degree) {
  if (typeof degree !== "number") {
    return "ERROR";
  }

  result = (degree - 32) * 5 / 9;

  result = Math.round(result * 10) / 10;

  return result;
};

const convertToFahrenheit = function (degree) {

  if (typeof degree !== "number") {
    return "ERROR";
  }

  result = degree * 9 / 5 + 32;

  result = Math.round(result * 10) / 10;

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
