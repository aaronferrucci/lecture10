#!/usr/bin/env node
var is_prime = function(n) {
  if (n < 2) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  if (n % 2 === 0) {
    return 0;
  }

  for (var d = 3; d < Math.sqrt(n); d += 2) {
    if (n % d === 0)
      return 0;
  }

  return 1;
}

var factorize = function(n) {
  var factors = [];

  var p = 2;
  while (n % p === 0) {
    factors.push(p);
    n /= p;
  }

  p = 3;
  while (n > 1) {
    if (n % p === 0) {
      factors.push(p);
      n /= p;
    } else {
      do {
        p += 2;
      } while (!is_prime(p));
    }
  }

  return factors;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 13195, 600851475143];
for (var i in numbers) {
  var n = numbers[i];
  console.log(n, factorize(n));
}

