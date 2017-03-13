(function clock() {
  
  var clockElement = document.querySelector('.clock');
  var bodyElement = document.body;
  var updateSpeed = 10000; // ms (10 seconds)
  var colorA = '#003973';
  var colorB = '#ff6e7f';

  function calculateGradient() {

    var date = new Date();
    var percentage = (date.getHours() / 24 + date.getMinutes() / (60 * 24));
    var degree = Math.floor(percentage * 360);

    bodyElement.style.background = 'linear-gradient(' + degree + 'deg, ' + colorA + ',' + colorB + ')';
    clockElement.style.background = 'linear-gradient(' + (degree - 180) + 'deg, ' + colorA + ',' + colorB + ')';
  }

  setInterval(calculateGradient, updateSpeed);
  calculateGradient();

})();
