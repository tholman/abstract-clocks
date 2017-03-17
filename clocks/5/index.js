(function clock() {
  
  var innerGradient = document.querySelector('.wheel');
  var outerGradient = document.querySelector('.wheel2');
  var bodyElement = document.body;
  var updateSpeed = 10000; // ms (10 seconds)

  function calculateGradient() {

    var date = new Date();

    var percentage = (date.getHours() / 12 + date.getMinutes() / (60 * 12));
    if( percentage > 1) {
      percentage = percentage - 1;
    } 

    innerGradient.style.transform = "rotateZ(" + (-percentage * 360) + "deg)";
    outerGradient.style.transform = "scale(1.2) " + "rotateZ(" + (-percentage * 360) + "deg)";
  }

  setInterval(calculateGradient, updateSpeed);
  calculateGradient();

})();