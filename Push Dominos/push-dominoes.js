/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  var dominoCount = dominoes.length;

  var transformedDominoes = "";

  // iterate over every domino
  var tipCount = 0;
  for (var i = 0; i < dominoCount; i++) {
    var thisDomino = dominoes[i];
    var leftDomino = dominoes[i - 1] || "";
    var rightDomino = dominoes[i + 1] || "";

    var transformedDomino = thisDomino;
    if (thisDomino === ".") {
      var thisScore = 0;
      if (rightDomino === "L") {
        thisScore -= 1;
      }
      if (leftDomino === "R") {
        thisScore += 1;
      }
      var newLetter = directionToLetter(thisScore);
      if (newLetter !== thisDomino) {
        tipCount += 1;
      }
      transformedDomino = newLetter;
    }
    transformedDominoes += transformedDomino;
  }

  if (tipCount > 0) {
    return pushDominoes(transformedDominoes);
  }
  return transformedDominoes;
};

var directionToLetter = function (num) {
  var letters = { "-1": "L", "0": ".", "1": "R" };
  return letters[num];
}
