const findTheOldest = function (people) {
  const ages = [];
  people.forEach((p) => {
    if (p.yearOfDeath === undefined) {
      ages.push({
        name: p.name,
        age: 2025 - p.yearOfBirth,
      });
    } else {
      ages.push({
        name: p.name,
        age: p.yearOfDeath - p.yearOfBirth,
      });
    }
  });
  ages.sort((a, b) => a.age - b.age);

  const name = ages[ages.length - 1].name;

  for (let i = 0; i < people.length - 1; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
};

// Do not edit below this line
module.exports = findTheOldest;
