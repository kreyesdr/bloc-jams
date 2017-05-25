
var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
  for (var p = 0; p < points.length; p++) {
      points[p].style.opacity = 1;
      points[p].style.transform = 'scaleX(1) translateY(0)';
      points[p].style.msTransform = "scaleX(1) translateY(0)";
      points[p].style.WebkitTransform = "scaleX(1) translateY(0)";
  }
};

window.onload = function() {

if (window.innerHeight > 950) {
  animatePoints(pointsArray);
}

  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scroolDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

  window.addEventListener('scroll', function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scroolDistance) {
      animatePoints(pointsArray);
    }
  });
}
