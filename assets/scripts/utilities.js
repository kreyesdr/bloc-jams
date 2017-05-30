var points = document.getElementsByClassName('point');

var forEach = function(callback) {

  for (var p = 0; p < points.length; p++) {
    callback();
  }
}

var callbackFunction = function() {
  console.log(points);
}

forEach(callbackFunction);
