// community_chest

var bu = require('./board_utils');
var t_CARDS = require('./t_cards');

var cards = [
  t_CARDS.GOTO_GO,
  t_CARDS.GOTO_JAIL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  t_CARDS.NORMAL,
  ];

var card_index = 0;
var card = function() {
  var next_card = cards[card_index];
  card_index++;
  card_index %= cards.length;

  return next_card;
}

var shuffle = function() {
  var _ = require('underscore');

  cards = _.shuffle(cards);
}

if(require.main == module) {

  console.assert(16 == cards.length, "Error, should have 16 Community Chest cards.");

  var cardinality_assert = function() {
    var card_types = {};
    card_types[t_CARDS.NORMAL] = 0;
    card_types[t_CARDS.GOTO_JAIL] = 0;
    card_types[t_CARDS.GOTO_GO] = 0;
    for (var i = 0; i < cards.length; i++) {
      card_types[cards[i]]++;
    }
    console.assert(card_types[t_CARDS.GOTO_GO] == 1, "Error, expected 1 GOTO_GO card, got " + card_types[t_CARDS.GOTO_GO] + ".");
    console.assert(card_types[t_CARDS.NORMAL] == 14, "Error, expected 14 NORMAL cards, got " + card_types[t_CARDS.NORMAL] + ".");
    console.assert(card_types[t_CARDS.GOTO_JAIL] == 1, "Error, expected 1 GOTO_JAIL car, got " + card_types[t_CARDS.GOTO_JAIL] + ".");
  };

  console.log("cards, pre-sort:");
  for (var i = 0; i < cards.length; i++) {
    console.log(i + ": " + cards[i]);
  }

  cardinality_assert();

  shuffle();

  console.log("cards, post-sort:");
  for (var i = 0; i < cards.length; i++) {
    console.log(i + ": " + cards[i]);
  }
  cardinality_assert();

} else {
  shuffle();
}
exports.card = card;

