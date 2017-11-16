var ANCESTRY_DATA = require('./ancestry')
var ancestry = JSON.parse(ANCESTRY_DATA)

var theSet = ['Carel Haverbeke', 'Maria van Brussel', 'Donald Duck']

function isInSet(set, person) {
  return set.indexOf(person.name) > -1
}

console.log(ancestry.filter(function (person) {
  return isInSet(theSet, person)
}))

console.log(ancestry.filter(isInSet.bind(null, theSet)))
