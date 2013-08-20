
var die = function() {
  return Math.floor(Math.random() * 6 + 1);
}

var throw_dice = function() {
  return die() + die();
}

if(require.main == module) {
  var uu = require('underscore');

  var log = console.log;

  var num = 2500000;
  var scores = uu.map(uu.range(0, num), throw_dice);

  var sum = uu.reduce(scores, function(a, b) { return a + b });
  log(sum/ num);
} else {
  exports.throw_dice = throw_dice;
}

