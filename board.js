// board.js

var community_chest = require('./community_chest');
var chance = require('./chance');

var bu = require('./board_utils');
var squares = bu.squares;
var _s = require('underscore.string');

var t_CARDS = require('./t_cards');

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

var next_r = function(current) {
  var next;
  if (current < 5) {
   next = 5;
  } else if (current < 15) {
   next = 15;
  } else if (current < 25) {
    next = 25;
  } else if (current < 35) {
    next = 35;
  } else {
    next = 5;
  }
    
  return next;
}

var next_u = function(current) {
  var next;
  if (current < 12) {
    next = 12;
  } else if (current < 28) {
    next = 28;
  } else {
    next = 12;
  }
  return next;
}

var card_update = function(card, current) {
  switch (card) {
    case t_CARDS.NORMAL:
      return current;
    case t_CARDS.GOTO_GO:
    case t_CARDS.GOTO_JAIL:
    case t_CARDS.GOTO_C1:
    case t_CARDS.GOTO_E3:
    case t_CARDS.GOTO_H2:
    case t_CARDS.GOTO_R1:
      return card;
    case t_CARDS.GOTO_NEXTR:
      return next_r(current);
    case t_CARDS.GOTO_NEXTU:
      return next_u(current);
    case t_CARDS.GO_BACK3:
      return current - 3;

    default:
      console.assert(false, "Error, unknown card: " + card);
      break;
  }
}

var update = function(current, roll) {
  current += roll;
  current %= squares.length;

  var current_name = bu.index2name(current);
  // But wait!  Did we land on a special square?
  if (current_name == 'G2J') {
    current = bu.name2index('JAIL');
  } else if (_s.startsWith(current_name, 'CH')) {
    var card = chance.card();
    current = card_update(card, current);
  } else if (_s.startsWith(current_name, 'CC')) {
    var card = community_chest.card();
    current = card_update(card, current);
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

