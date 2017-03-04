var circle = document.querySelector('.clock');
var body = document.body;

var time = 0000;
var hour = 0;
var min = 0;

var maxHours = 23;
var maxMinutes = 59;

function rotateTime() {
  
  min++;
  if( min > maxMinutes ) {
    min = 0;
    hour++;
  }
  
  if( hour > maxHours ) {
    hour = 0;
  }
}

function loop() {
  rotateTime();
  updateGradient();
  requestAnimationFrame(loop);
}

function updateGradient() {
  var percentage = (hour / 24 + min / (60 * 24));
  var degree = Math.floor(percentage * 360);
  
  body.style.background = "linear-gradient(" + degree + "deg, #ff6e7f, #003973)";
  circle.style.background = "linear-gradient(" + (degree - 180) + "deg, #ff6e7f, #003973)"
}

loop();
