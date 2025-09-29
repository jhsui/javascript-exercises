const sumAll = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }

    if (a < 0 || b < 0) {
        return "ERROR";
    }

    if (a % 1 !== 0 || b % 1 !== 0) {
        return "ERROR";
    }

    let result = 0;

    let small = a > b ? b : a;
    let large = a > b ? a : b;

    for (let i = small; i <= large; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
