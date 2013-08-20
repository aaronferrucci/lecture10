
var bu = require('./board_utils');

var NORMAL = -1;
var GOTO_GO = bu.name2index("GO");
var GOTO_JAIL = bu.name2index("JAIL");
var GOTO_C1 = bu.name2index("C1");
var GOTO_E3 = bu.name2index("E3");
var GOTO_H2 = bu.name2index("H2");
var GOTO_R1 = bu.name2index("R1");
var GOTO_NEXTR = -2;
var GOTO_NEXTU = -3;
var GO_BACK3 = -4;

exports.NORMAL = NORMAL;
exports.GOTO_GO = GOTO_GO;
exports.GOTO_JAIL = GOTO_JAIL;
exports.GOTO_C1 = GOTO_C1;
exports.GOTO_E3 = GOTO_E3;
exports.GOTO_H2 = GOTO_H2;
exports.GOTO_R1 = GOTO_R1;
exports.GOTO_NEXTR = GOTO_NEXTR;
exports.GOTO_NEXTU = GOTO_NEXTU;
exports.GO_BACK3 = GO_BACK3;


