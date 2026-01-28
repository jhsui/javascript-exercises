const contains = function (obj, value) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      //   if (obj[prop] === value && !isNaN(obj[prop])) {
      if (obj[prop] === value) {
        return true;
        //   } else if (
        //     typeof obj[prop] !== "string" &&
        //     Number.isNaN(value) &&
        //     Number.isNaN(obj[prop])
        //   ) {
        //     return true;
      } else {
        if (Number.isNaN(value) && Number.isNaN(obj[prop])) {
          return true;
        }

        if (typeof obj[prop] === "object" && obj[prop] !== null) {
          //   return contains(obj[prop], value);
          if (contains(obj[prop], value)) {
            return true;
          }
        }
      }
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
