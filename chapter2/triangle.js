'use strict'

Array(10).fill(null).forEach((element, index)  => {
  console.log(Array(index + 1).fill('#').join(''))
})
