
var animatePoints = function(className) {
  var points = document.getElementsByClassName(className);

  for (var p = 0; p < points.length; p++) {
      points[p].style.opacity = 1;
      points[p].style.transform = 'scaleX(1) translateY(0)';
      points[p].style.msTransform = "scaleX(1) translateY(0)";
      points[p].style.WebkitTransform = "scaleX(1) translateY(0)";
  }
};
