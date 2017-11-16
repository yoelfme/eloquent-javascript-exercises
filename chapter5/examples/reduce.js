var ANCESTRY_DATA = require('./ancestry')
var ancestry = JSON.parse(ANCESTRY_DATA)

function reduce(array, combine, start) {
  var current = start;
  for (let i = 0; i < array.length; i++) {
    current = combine(current, array[i])
  }

  return current
}

console.log(reduce([1, 2, 3, 4], function (a, b) {
  return a + b;
}, 0));

console.log(ancestry.reduce(function (acc, cur) {
  if (cur.born < acc.born) {
    return cur
  } else {
    return acc
  }
}))
