const reverseString = function (string) {

    const chars = string.split("");

    let result = "";

    for (let i = chars.length - 1; i >= 0; i--) {
        result += chars[i];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
