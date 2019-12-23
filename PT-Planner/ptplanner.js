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
  alamein,
  glenWaverly,
  sandringham
};
var trainTravel = function(origin, destination) {
  if (origin === destination) {
    return "Origin and destination can not be the same";
  }
  var lines = Object.keys(trainNetwork);
  for (var line of lines) {
    var findOriginIndex = trainNetwork[line].indexOf(origin);
    var findDestinationIndex = trainNetwork[line].indexOf(destination);
  }

  // for (let i = 0; i < alamein.length; i++) {
  //   var stops = alamein.indexOf(destination) - alamein.indexOf(start);
  //   console.log(`You take ${stops} to get your destination.`);
  // }
};
trainTravel();

//   for (let j = 0; j < arr.length; j++) {
//     var trainTravel = function(start, destination) {
//       for (let i = 0; i < arr.length; i++) {
//         var stops = arr.indexOf(destination) - arr.indexOf(start);
//         console.log(`You take ${stops} to get your destination.`);
//       }
//     };
//     trainTravel();
//   }
// };
