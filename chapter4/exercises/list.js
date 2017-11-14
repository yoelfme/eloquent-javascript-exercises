'use strict'

function arrayToList(array) {
  if (array.length > 1) {
    return {
      value: array[0],
      rest: arrayToList(array.slice(1))
    }
  } else if (array.length === 1) {
    return {
      value: array[0],
      rest: null
    }
  }
}

function listToArray(list, carry) {
  var result = carry || []

  if (list !== null) {
    result.push(list.value)

    return listToArray(list.rest, result)
  } else {
    return result
  }
}

function prepend(value, rest) {
  return {
    value: value,
    rest: rest
  }
}

function nth(list, number) {

  if (!list) {
    return null
  } else if (number === 0) {
    return list.value
  } else {
    return nth(list.rest, number - 1)
  }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
