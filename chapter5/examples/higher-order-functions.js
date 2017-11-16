'use strict'

function greaterThan(n) {
  return function(m) {
    return m > n;
  }
}

function noisy(f) {
  return function (arg) {
    console.log('calling with', arg);
    var val = f(arg)
    console.log('clled with', arg, '- got', val);
    return val;
  }
}

noisy(Boolean)(0);

function unless(test, then) {
  if (!test) then()
}

function repeat(times, body) {
  for (let i = 0; i < times; i++) {
    body(i)
  }
}

repeat(3, function (n) {
  unless(n % 2, function () {
    console.log(n, 'is even')
  })
})
