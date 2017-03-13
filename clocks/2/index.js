(function clock() {
  
  var clockElement = document.querySelector('.clock');
  var bodyElement = document.body;
  var updateSpeed = 10000; // ms (10 seconds)
  var colorA = '#bfe9ff';
  var colorB = '#ff6e7f';

  function calculateGradient() {

    var date = new Date();
    var hourPercentage = (date.getHours() / 12 + date.getMinutes() / (60 * 12));
    var minPercentage = (date.getMinutes() % 60) / 60;

    bodyElement.style.background = 'linear-gradient(' + Math.floor(hourPercentage * 360) + 'deg, ' + colorA + ',' + colorB + ')';
    clockElement.style.background = 'linear-gradient(' + Math.floor(minPercentage * 360) + 'deg, ' + colorA + ',' + colorB + ')';
      
  }

  setInterval(calculateGradient, updateSpeed);
  calculateGradient();

})();
