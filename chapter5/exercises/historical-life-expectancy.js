var ANCESTRY_DATA = require('../ancestry')
var ancestry = JSON.parse(ANCESTRY_DATA)

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

const getCentury = (person) => {
  return Math.ceil(person.died / 100)
}
const getAge = (person) => {
  return person.died - person.born
}

const groupBy = (data, predicate) => {
  return data.reduce((acc, value) => {
    const groupName = predicate(value)

    if (acc.hasOwnProperty(groupName)) {
      acc[groupName] = acc[groupName].concat([value])
    } else {
      acc[groupName] = [value]
    }

    return acc
  }, {})
}

const groupedByCentury = groupBy(ancestry, getCentury)

for (const century in groupedByCentury) {
  if (groupedByCentury.hasOwnProperty(century)) {
    const persons = groupedByCentury[century];
    const ages = persons.map((person) => person.died - person.born)

    console.log(`${century} \t ${average(ages)}`)
  }
}
