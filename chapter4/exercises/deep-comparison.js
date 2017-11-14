'use strict'

function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

function length(obj) {
  var counter = 0

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      counter += 0
    }
  }

  return counter
}

function deepEqual(obj1, obj2) {
  if (isObject(obj1) && isObject(obj2)) {
    if (length(obj1) !== length(obj2)) {
      return false
    }

    for (var key in obj1) {
      if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
        return deepEqual(obj1[key], obj2[key])
      } else {
        return false
      }
    }
  } else {
    return obj1 === obj2
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
