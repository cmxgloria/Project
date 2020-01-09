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

var sliceStops = function(originIndex, destinationIndex, arr) {
  var stops = [];
  if (originIndex < destinationIndex) {
    stops = arr.slice(originIndex, destinationIndex + 1);
  } else {
    stops = arr.slice(destinationIndex, originIndex + 1).reverse();
  }
  return stops;
};

var printStops = function(firstLineStops, secondLineStops) {
  if (secondLineStops) {
    console.log(`${firstLineStops.join(" ----> ")}
                                                    || ${secondLineStops.join(
                                                      " ----> "
                                                    )}`);
  } else {
    console.log(firstLineStops.join(" ----> "));
  }
};
var trainTravel = function(origin, destination) {
  if (origin === destination) {
    console.error("Origin and destination can not be the same");
    return;
  }
  var originObj;
  var destinationObj;
  for (const line in trainNetwork) {
    var findOriginIndex = trainNetwork[line].indexOf(origin);
    var findDestinationIndex = trainNetwork[line].indexOf(destination);
    if (findOriginIndex !== -1) {
      //found it, then store info to a object because it has two value "index and line name"
      originObj = { index: findOriginIndex, line: line };
    }
    if (findDestinationIndex !== -1) {
      destinationObj = { index: findDestinationIndex, line: line };
    }
  }
  if (!originObj || !destinationObj) {
    console.error("Make sure you type the correct origin and destination");
    return;
  }
  if (origin === "Richmond") {
    var richmondIndex = trainNetwork[destinationObj.line].indexOf("Richmond");
    var stops = sliceStops(
      richmondIndex,
      destinationObj.index,
      trainNetwork[destinationObj.line]
    );

    printStops(stops);
    console.log(`origin: ${origin} ; destination: ${destination}`);
    console.log(stops.length-1 + " stops");
  } else if (destination === "Richmond") {
    var richmondIndex = trainNetwork[originObj.line].indexOf("Richmond");
    var stops = sliceStops(
      originObj.index,
      richmondIndex,
      trainNetwork[originObj.line]
    );

    printStops(stops);
    console.log(`origin: ${origin}  ; destination: ${destination}`);
    console.log(stops.length-1 + " stops");
  } else if (originObj.line === destinationObj.line) {
    var stops = sliceStops(
      originObj.index,
      destinationObj.index,
      trainNetwork[originObj.line]
    );
    printStops(stops);
    
  } else {
    // different lines
    var richmondInOriginIndex = trainNetwork[originObj.line].indexOf(
      "Richmond"
    );
    var originStops = sliceStops(
      originObj.index,
      richmondInOriginIndex,
      trainNetwork[originObj.line]
    );
    var richmondInDestinationIndex = trainNetwork[destinationObj.line].indexOf(
      "Richmond"
    );
    var destinationStops = sliceStops(
      richmondInDestinationIndex,
      destinationObj.index,
      trainNetwork[destinationObj.line]
    );
    printStops(originStops, destinationStops);
    var totalStops = originStops.length-1 + destinationStops.length-1;
    console.log(`origin: ${originStops[0]}  ; destination: ${destinationStops[destinationStops.length -1]}`);
    console.log(totalStops + " stops");
  }
};
trainTravel("Richmond", "Tooronga");
trainTravel("Tooronga", "Richmond");
trainTravel("Glenferrie", "Windsor");
trainTravel("Glenferrie", "Glenferrie");
trainTravel("Flinder Street", "Heidelberg");

//print out 
Richmond ----> Kooyong ----> Tooronga
 origin: Richmond ; destination: Tooronga
 2 stops
 Tooronga ----> Kooyong ----> Richmond
 origin: Tooronga  ; destination: Richmond
 2 stops
 Glenferrie ----> Hawthorn ----> Burnley ----> East Richmond ----> Richmond
                                                    || Richmond ----> South Yarra ----> Prahran ----> Windsor
 origin: Glenferrie  ; destination: Windsor
 7 stops
Origin and destination can not be the same
Make sure you type the correct origin and destination
