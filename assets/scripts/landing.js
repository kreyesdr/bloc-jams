var pointsArray = document.getElementsByClassName('point');

  var revealPoints = function(point) {
    point.style.opacity = 1;
    point.transform = 'scaleX(1) translateY(0)';
    point.msTransform = "scaleX(1) translateY(0)";
    point.WebkitTransform = "scaleX(1) translateY(0)";
  };

  var animatePoints = function(points) {
    forEach(points, revealPoints);

    for (var i = 0; i < points.length; i++) {
      revealPoints(i);
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
