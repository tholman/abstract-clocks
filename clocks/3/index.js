(function clock() {
  
  var innerGradient = document.querySelector('.inner-gradient');
  var outerGradient = document.querySelector('.outer-gradient');
  var bodyElement = document.body;
  var updateSpeed = 10000; // ms (10 seconds)

  function calculateGradient() {

    var date = new Date();
    
    var percentage = (date.getHours() / 12 + date.getMinutes() / (60 * 12));
    if( percentage > 1) {
      percentage = 1 - (percentage % 1);
    }

    var innerMovement = -35 - (100 * percentage);
    var outerMovement = -50 - (100 * percentage);

    innerGradient.style.top = innerMovement + 'vw';
    outerGradient.style.top = outerMovement + 'vh';
      
  }

  setInterval(calculateGradient, updateSpeed);
  calculateGradient();

})();
