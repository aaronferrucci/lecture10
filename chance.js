// chance

var bu = require('./board_utils');
var t_CARDS = require('./t_cards');

var cards = [
    t_CARDS.GOTO_GO,
    t_CARDS.GOTO_JAIL,
    t_CARDS.GOTO_C1,
    t_CARDS.GOTO_E3,
    t_CARDS.GOTO_H2,
    t_CARDS.GOTO_R1,
    t_CARDS.GOTO_NEXTR,
    t_CARDS.GOTO_NEXTR,
    t_CARDS.GOTO_NEXTU,
    t_CARDS.GO_BACK3,
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

  console.assert(16 == cards.length, "Error, should have 16 Chance cards.");

  var cardinality_assert = function() {
    var card_types = {};
    card_types[t_CARDS.NORMAL] = 0;
    card_types[t_CARDS.GOTO_JAIL] = 0;
    card_types[t_CARDS.GOTO_GO] = 0;
    card_types[t_CARDS.GOTO_C1] = 0;
    card_types[t_CARDS.GOTO_E3] = 0;
    card_types[t_CARDS.GOTO_H2] = 0;
    card_types[t_CARDS.GOTO_R1] = 0;
    card_types[t_CARDS.GOTO_NEXTR] = 0;
    card_types[t_CARDS.GOTO_NEXTU] = 0;
    card_types[t_CARDS.GO_BACK3] = 0;
    for (var i = 0; i < cards.length; i++) {
      card_types[cards[i]]++;
    }
    console.assert(card_types[t_CARDS.NORMAL] == 6, "Error, expected 14 NORMAL cards.");
    console.assert(card_types[t_CARDS.GOTO_GO] == 1, "Error, expected 1 GOTO_GO card.");
    console.assert(card_types[t_CARDS.GOTO_JAIL] == 1, "Error, expected 1 GOTO_JAIL card.");
    console.assert(card_types[t_CARDS.GOTO_E3] == 1, "Error, expected 1 GOTO_E3 card.");
    console.assert(card_types[t_CARDS.GOTO_H2] == 1, "Error, expected 1 GOTO_H2 card.");
    console.assert(card_types[t_CARDS.GOTO_R1] == 1, "Error, expected 1 GOTO_R1 card.");
    console.assert(card_types[t_CARDS.GOTO_NEXTR] == 2, "Error, expected 2 GOTO_NEXTR cards.");
    console.assert(card_types[t_CARDS.GOTO_NEXTU] == 1, "Error, expected 1 GOTO_NEXTU cards.");
    console.assert(card_types[t_CARDS.GO_BACK3] == 1, "Error, expected 1 GO_BACK3 cards.");
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

