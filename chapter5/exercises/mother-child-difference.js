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

const differences = ancestry.filter((person) => {
  return byName[person.mother] != null
}).map((person) => {
  return person.born - byName[person.mother].born
})

console.log(average(differences))
