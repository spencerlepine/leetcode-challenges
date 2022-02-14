/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  var completeRodsFound = 0;
  var rods = {};

  for (var i = 0; i < rings.length; i += 2) {
    var ringColor = rings[i];
    var rodLabel = rings[i + 1]

    if (rods[rodLabel] === undefined) {
      rods[rodLabel] = {}
    }

    rods[rodLabel][ringColor] = true;

    if (rods[rodLabel]['R'] && rods[rodLabel]['G'] && rods[rodLabel]['B'] && !rods[rodLabel]['counted']) {
      rods[rodLabel]['counted'] = true;
      completeRodsFound += 1;
    }
  }

  return completeRodsFound;
};