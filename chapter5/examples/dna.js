var ANCESTRY_DATA = require('../ancestry')
var ancestry = JSON.parse(ANCESTRY_DATA)

var byName = {}

ancestry.forEach(function (person) {
  byName[person.name] = person
})

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null) {
      return defaultValue
    } else {
      return f(person, valueFor(byName[person.mother]),
                            valueFor(byName[person.father]))
    }
  }

  return valueFor(person)
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == 'Pauwels van Haverbeke') {
    return 1
  } else {
    return (fromMother + fromFather) / 2
  }
}

var ph = byName['Philibert Haverbeke']

console.log(reduceAncestors(ph, sharedDNA, 0) / 4)

function countAncestors(person, test) {
  function combine(person, fromMother, fromFather) {
    var thisOneCounts = test(person);

    return fromMother + fromFather + (thisOneCounts ? 1 : 0)
  }

  return reduceAncestors(person, combine, 0)
}

function longLivingPercentage(person) {
  var all = countAncestors(person, function (person) {
    return true;
  });

  var longLiving = countAncestors(person, function (person) {
    return (person.died - person.born) >= 70;
  });

  return longLiving / all;
}

console.log(longLivingPercentage(byName['Emile Haverbeke']))

