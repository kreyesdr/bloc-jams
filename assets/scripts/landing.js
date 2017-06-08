
var animatePoints = function() {
  var revealPoint = function() {

    $(this).css({
      opacity: 1,
      transform: 'scaleX(1) translateY(0)'
    });

    $.each($('.point'), revealPoint);
  };
}

$(window).load(function() {


  if ($(window).height() > 950) {
    animatePoints();
  }
  
  var scroolDistance = $('.selling-points').offset().top - $(window).height() + 200;

  $(window).scroll(function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scroolDistance) {
      animatePoints();

      if ($(window).scrollTop() >= scroolDistance) {
        animatePoints();
      }
    };
  });
});
