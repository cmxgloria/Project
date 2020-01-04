var alamein = [
  "Flinder Street",
  "Richmond",
  "East Richmond",
  "Burnley",
  "Hawthorn",
  "Glenferrie"
];
var glenWaverly = [
  "Flagstaff",
  "Melbourne Central",
  "Parliament",
  "Richmond",
  "Kooyong",
  "Tooronga"
];
var sandringham = [
  "Southern Cross",
  "Richmond",
  "South Yarra",
  "Prahran",
  "Windsor"
];

var trainNetwork = {
  alamein: alamein,
  glenWaverly: glenWaverly,
  sandringham: sandringham
};

var sliceStops = function(originIndex, destinationInde)

var trainTravel = function(origin, destination) {
  if (origin === destination) {
    console.error("Origin and destination can not be the same");
    return;
  }
  var originalObj;
  var destinationObj;
  for (const line in trainNetwork) {
    var findOriginIndex = trainNetwork[line].indexOf(origin);
    var findDestinationIndex = trainNetwork[line].indexOf(destination);
    if (findOriginIndex !== -1) {
      originalObj = { index: findOriginIndex, line: line };
    }
    if (findDestinationIndex !== -1) {
      destinationObj = { index: findDestinationIndex, line: line };
    }
  }
  if (!originalObj || !destinationObj) {
    console.error("Make sure you type the correct origin and destination");
    return;
  }
  if (origin === "Richmond") {
    var richmondIndex = trainNetwork[destinationObj.line].indexOf("Richmond");
    var stops = [];
    if (richmondIndex < destinationObj.index) {
      stops = trainNetwork[destinationObj.line].slice(
        richmondIndex,
        destinationObj.index + 1
      );
    } else {
      stops = trainNetwork[destinationObj.line].slice(
        destinationObj.index,
        richmondIndex + 1
      ).reverse();
    }
    console.log(stops.join(" ----> "));
  } else if (destination === "Richmond") {
    var richmondIndex = trainNetwork[originalObj.line].indexOf("Richmond");
    var stops = [];
    if (richmondIndex < originalObj.index) {
      stops = trainNetwork[originalObj.line].slice(
        richmondIndex,
        originalObj.index + 1
      );
    } else {
      stops = trainNetwork[originalObj.line].slice(
        originalObj.index,
        richmondIndex + 1
      ).reverse();
    }
    console.log(stops.join(" ----> "));
  } else if (originalObj.line === destinationObj.line) {

  }
};
trainTravel("Richmond", "Tooronga");
trainTravel("Tooronga", "Richmond");
