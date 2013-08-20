#!/usr/bin/env node
var uu = require('underscore');
var r = require('./rand');
var bu = require('./board_utils');
var board = require('./board');

var log = console.log;

var num_turns = 10000000;
var current_square = 0;
var doubles_count = 0;
for (var i = 0; i < num_turns; i++) {
  var roll = r.throw_dice(4);
  if (roll.doubles) {
    doubles_count++;
  } else {
    doubles_count = 0;
  }
  // console.log(roll.value, roll.doubles, doubles_count);
  if (doubles_count == 3) {
    doubles_count = 0;
    current_square = bu.name2index('JAIL');
  } else {
    current_square = board.update(current_square, roll.value);
  }
  board.visit(current_square);
}

var stats = [];
for (var i = 0; i < board.squares.length; i++) {
  var visits = board.visits(i);
  var percentage = 100 * ((0.0 + visits) / num_turns);
  stats.push({name: bu.index2name(i), visits: visits, percent: percentage});
}

// for (var i = 0; i < stats.length; i++) {
//   log(i + " (" + stats[i].name + "): " + stats[i].visits + " (" + stats[i].percent.toFixed(2) + ")");
// }

stats.sort(function(a, b) { return b.visits - a.visits});
log("sorted:\n");
for (var i = 0; i < stats.length; i++) {
  log(bu.name2index(stats[i].name) + " (" + stats[i].name + "): " + stats[i].visits + " (" + stats[i].percent.toFixed(2) + ")");
}
