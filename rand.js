
var die = function(faces) {
  return Math.floor(Math.random() * faces + 1);
}

var throw_dice = function(faces) {
  var d1 = die(faces);
  var d2 = die(faces);
  var doubles = d1 == d2;
  return {value: d1 + d2, doubles: doubles};
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
  exports.die = die;
}

