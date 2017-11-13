var vid = document.getElementById("bgvid");
vid.playbackRate = 0.35;

var d = new Date();
d.setMonth(11);
d.setDate(15);
d.setHours(0);
d.setMinutes(0);
d.setSeconds(0);
d.setMilliseconds(0);
document.getElementById("releaseDay").innerHTML = d;

var showDaysToStarWars = document.getElementById("swHeader");
var today = new Date();


var changeText = function() {
  var currentDay = today.getDate();
  var swRelease = d.getDate();
  var numDays = (30 - currentDay) + swRelease;
  swHeader.innerText = numDays + " Days";
}

changeText();
