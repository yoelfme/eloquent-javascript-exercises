'use strict'

const size = 16
let str = ''

for (var index = 0; index < size; index++) {
  let odd = index % 2 === 1

  str += Array.from({ length: size }).map((e, i) => (((i + odd) % 2 === 0) ? '#': ' ')).join('')
  str += '\n'
}

console.log(str)
