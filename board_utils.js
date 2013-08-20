var squares = [
  "GO",
  "A1",
  "CC1",
  "A2",
  "T1",
  "R1",
  "B1",
  "CH1",
  "B2",
  "B3",
  "JAIL",
  "C1",
  "U1",
  "C2",
  "C3",
  "R2",
  "D1",
  "CC2",
  "D2",
  "D3",
  "FP",
  "E1",
  "CH2",
  "E2",
  "E3",
  "R3",
  "F1",
  "F2",
  "U2",
  "F3",
  "G2J",
  "G1",
  "G2",
  "CC3",
  "G3",
  "R4",
  "CH3",
  "H1",
  "T2",
  "H2",
];

var name2index = function(name) {

  for (var i = 0; i < squares.length; i++) {
    if (squares[i] == name) {
      return i;
    }
  }
    
  console.assert(false, "Error, " + name + " is not a square name.");
}

var index2name = function(index) {

  console.assert(index >= 0, "Error, index (" + index + ") must be >= 0.");
  console.assert(index < squares.length, "Error, index (" + index + ") must be < " + squares.length);
  
  return squares[index];
}

exports.squares = squares;
exports.name2index = name2index;
exports.index2name = index2name;

