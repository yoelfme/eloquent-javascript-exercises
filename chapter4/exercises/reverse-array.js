'use strict'

function reverseArray(array) {
  var result = []
  for (var i = array.length - 1; i >= 0; i--) {
    var element = array[i];

    result.push(element)
  }

  return result
}

function reverseArrayInPlace(array) {
  var limit = Math.floor(array.length / 2)

  for (var i = 0; i < limit; i++) {
    var old = array[i]
    var newIndex = array.length - 1 - i

    array[i] = array[newIndex]
    array[newIndex] = old
  }

  return array
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace(["A", "B", "C"]));
