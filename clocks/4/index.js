(function clock() {
  
  var innerGradient = document.querySelector('.inner-gradient');
  var outerGradient = document.querySelector('.outer-gradient');
  var bodyElement = document.body;
  var updateSpeed = 10000; // ms (10 seconds)

  function calculateGradient() {

    var date = new Date();

    var minPercentage = date.getMinutes() / 60;
    var hourPercentage = (date.getHours() / 12 + date.getMinutes() / (60 * 12));
    if( hourPercentage > 1) {
      hourPercentage = 1 - (hourPercentage % 1);
    }  

    var innerMovement = -35 - (70 * minPercentage);
    var outerMovement = -50 - (100 * hourPercentage);

    innerGradient.style.top = innerMovement + 'vw';
    outerGradient.style.top = outerMovement + 'vh';
  }

  setInterval(calculateGradient, updateSpeed);
  calculateGradient();

})();
