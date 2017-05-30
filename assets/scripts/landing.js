var pointsArray = [document.getElementsByClassName('point')];

var animatePoints = function(points) {

  var allPoints = points[0];

  allPoints.forEach(function(n) {
    allPoints[n].style.opacity = 1;
    allPoints[n].transform = 'scaleX(1) translateY(0)';
    allPoints[n].msTransform = "scaleX(1) translateY(0)";
    allPoints[n].WebkitTransform = "scaleX(1) translateY(0)";
  });
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
