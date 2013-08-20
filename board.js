// board.js

var community_chest = require('./community_chest');
var chance = require('./chance');

var bu = require('./board_utils');
var squares = bu.squares;

var log = console.log;

var visit_counts = {};

var visit_asserts = function(s) {
  console.assert(s >= 0, "Error, square indices must be > 0.");
  console.assert(s < squares.length, "Error, square indices must be < " + squares.length, ".");
}

var visit = function(s) {
  visit_asserts(s);
  if (visit_counts[s] === undefined) {
    visit_counts[s] = 0;
  } 
  visit_counts[s]++;
}

var visits = function(s) {
  visit_asserts(s);
  
  if (visit_counts[s] === undefined) {
    return 0;
  } 
  return visit_counts[s];
}

var update = function(current, roll) {
  current += roll;
  current %= squares.length;

  var current_name = bu.index2name(current);
  // But wait!  Did we land on a special square?
  if (current_name == 'G2J') {
    current = bu.name2index('JAIL');
  } else if (current_name == 'CH1') {
    // log("landed on " + current_name + "; ignoring for now.");
  } else if (current_name == 'CH2') {
    // log("landed on " + current_name + "; ignoring for now.");
  } else if (current_name == 'CH3') {
    // log("landed on " + current_name + "; ignoring for now.");
  } else if (current_name == 'CC1') {
    // log("landed on " + current_name + "; ignoring for now.");
  } else if (current_name == 'CC2') {
    // log("landed on " + current_name + "; ignoring for now.");
  } else if (current_name == 'CC3') {
    // log("landed on " + current_name + "; ignoring for now.");
  }
  return current;
}

if(require.main == module) {
  // A few tests
  // Correct number of squares
  console.assert(squares.length == 40, "Error, incorrect number of squares on the board.");
  // Unique squares
  name_count = {};
  for (var i = 0; i < squares.length; i++) {
    console.assert(name_count[squares[i]] == undefined, "Error, saw square " + squares[i] + " more than once!");
    name_count[squares[i]] = 1;
  }

  // visit_counts sanity check
  for (var i = 0; i < squares.length; i++) {
    console.assert(visits(i) == 0, "Error, there should be no visits yet.");
  }
  visit(17);
  console.assert(visits(17) == 1, "Error, expected one visit.");

  // is "GO" among my squares?
  console.assert(bu.name2index("GO") == 0, "Error, GO should be index 0.");
}

exports.squares = squares;
exports.visit = visit;
exports.visits = visits;
exports.update = update;

