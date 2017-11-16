var ANCESTRY_DATA = require('./ancestry')
var ancestry = JSON.parse(ANCESTRY_DATA)

function filter(array, test) {
  var passed = [];
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      passed.push(array[i]);
    }
  }

  return passed;
}

console.log(filter(ancestry, function (person) {
  return person.born > 1900 && person.born < 1925;
}));

console.log(ancestry.filter(function (person) {
  return person.father == 'Carel Haverbeke'
}))
