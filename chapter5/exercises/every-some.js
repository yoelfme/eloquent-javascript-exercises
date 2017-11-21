const every = (array, predicate) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (!predicate(element)) {
      return false
    }
  }

  return true
}


const some = (array, predicate) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (predicate(element)) {
      return true
    }
  }

  return false
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
