#!/usr/bin/env node
var uu = require('underscore');
var r = require('./rand');
var board = require('./board');

var log = console.log;

var num_turns = 1000000;
var current_square = 0;
for (var i = 0; i < num_turns; i++) {
  var roll = r.throw_dice();
  current_square = board.update(current_square, roll);
  board.visit(current_square);
}

for (var i = 0; i < board.squares.length; i++) {
  var visits = board.visits(i);
  var percentage = 100 * ((0.0 + visits) / num_turns);
  log(i + ": " + visits + "(" + percentage.toFixed(2) + ")");
}

