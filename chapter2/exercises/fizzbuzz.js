'use strict'

const numbers = Array.from(Array(100).keys())
let str = ''

numbers.forEach((element) => {
  let number = element + 1
  let fizz = number % 3 === 0
  let buzz = number % 5 === 0

  str += (fizz ? (buzz ? 'FizzBuzz': 'Fizz') : (buzz ? 'Buzz' : number))
})

console.log(str)
