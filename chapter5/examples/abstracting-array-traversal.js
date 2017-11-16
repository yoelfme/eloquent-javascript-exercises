'use strict'

function forEach(array, action) {
  for (let i = 0; i < array.length; i++) {
    action(array[i])
  }
}

forEach(['Wampeter', 'Foma', 'Granfalloon'], console.log)
