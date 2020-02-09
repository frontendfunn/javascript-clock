$(document).ready(function() {
  var _dt = new Date();
  var StartTime = new Date(_dt.getFullYear(), _dt.getMonth(), _dt.getDate());
  $('.clock').each(function(_, clock) {
    var secondsHand = $(clock).find('.seconds');
    var minutesHand = $(clock).find('.minutes');
    var hoursHand = $(clock).find('.hours');
    var easing = 'elastic.out(1, 0.3)';
    setInterval(function() {
      var now = new Date();
      var dataObj = convertMilliseconds(now - StartTime);
      gsap.to(secondsHand, {
        rotation: dataObj.seconds * 6,
        ease: easing,
        opacity: 1
      });
      gsap.to(minutesHand, {
        rotation: dataObj.minutes * 6,
        ease: easing,
        opacity: 1
      });
      gsap.to(hoursHand, {
        rotation: dataObj.hours * 30,
        ease: easing,
        opacity: 1
      });
    }, 1000);
  });
});
function convertMilliseconds(milliseconds) {
  var seconds = parseInt(milliseconds / 1000);
  var minutes = parseInt(seconds / 60);
  var hours = parseInt((minutes / 60) % 12);
  return {
    seconds: seconds,
    minutes: minutes,
    hours: hours
  };
}
