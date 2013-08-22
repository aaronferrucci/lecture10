#!/usr/bin/env node
var uu = require('underscore');
var mu = require('./math_utils');

var is_square_path = function(a, b, c) {
  var squ_path = a * a + (b + c) * (b + c);
  var is = mu.is_square(squ_path);
  // log(squ_path, is);
  return is;
}

var log = console.log;
var M = 101;
var count = 0;
for (var a = 1; a < M; a++) {
  for (var b = 1; b <= a; b++) {
    for (var c = 1; c <= b; c++) {
      var flag = is_square_path(a, b, c);
      if (flag) {
        log(a, b, c, flag);
        count++;
      }
    }
  }
}
log(count);
