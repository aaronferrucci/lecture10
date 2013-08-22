#!/usr/bin/env node
var uu = require('underscore');
var is_square = function(n) {
  if (n < 0) return false;

  var root = Math.sqrt(n);
  // console.log("\t", n, root);
  return root == Math.floor(root);
}

if(require.main == module) {
  console.log(uu.filter(uu.range(100), is_square));
}

exports.is_square = is_square;

