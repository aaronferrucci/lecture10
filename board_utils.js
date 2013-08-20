var squares = [
  "GO", // 0
  "A1",
  "CC1",
  "A2",
  "T1",
  "R1", // 5
  "B1",
  "CH1",
  "B2",
  "B3",
  "JAIL",
  "C1",
  "U1", // 12
  "C2",
  "C3",
  "R2", // 15
  "D1",
  "CC2",
  "D2",
  "D3",
  "FP",
  "E1",
  "CH2",
  "E2",
  "E3",
  "R3", // 25
  "F1",
  "F2",
  "U2", // 28
  "F3",
  "G2J",
  "G1",
  "G2",
  "CC3",
  "G3",
  "R4", // 35
  "CH3",
  "H1",
  "T2",
  "H2",
];

var n2i_cache = undefined;
var name2index = function(name) {

  if (n2i_cache === undefined) {
    n2i_cache = {};
    for (var i = 0; i < squares.length; i++) {
      n2i_cache[squares[i]] = i;
    }
  }

  var index = n2i_cache[name];
  // var index = squares.indexOf(name);
  // console.assert(index != -1, "Error, didn't find name " + name + " in cache.");
  console.assert(index != undefined, "Error, didn't find name " + name + " in cache.");
  return index;
}

var index2name = function(index) {

  console.assert(index >= 0, "Error, index (" + index + ") must be >= 0.");
  console.assert(index < squares.length, "Error, index (" + index + ") must be < " + squares.length);
  
  return squares[index];
}

exports.squares = squares;
exports.name2index = name2index;
exports.index2name = index2name;

