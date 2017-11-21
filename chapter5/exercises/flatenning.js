'use strict'

var flatenning = (array) => {
  return array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc = acc.concat(flatenning(value))
    } else {
      acc = acc.concat([value])
    }

    return acc
  }, [])
}

console.log(flatenning([[1, 2, 3], [4, 5], [6]]))
