'use strict'

function countBs(string, character) {
  var total = 0
  for (var index = 0; index < string.length; index++) {
    var actualCharacter = string.charAt(index);

    total += actualCharacter === character ? 1 : 0
  }

  return total
}

console.log(countBs('BadaBo', 'd'))
