'use strict'

function range(start, end, step) {
  // Set a default value for step
  step = step || 1

  // Create counter for range
  var result = []

  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      result.push(i)
    }
  } else {
    for (var i = start; i >= end; i += step) {
      result.push(i)
    }
  }
  return result
}

function sum(numbers) {
  var total = 0
  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    total += number
  }

  return total
}

console.log(range(1, 10));
console.log(range(5, 5, 1));
console.log(sum(range(1, 10)));
