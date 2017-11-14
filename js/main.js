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

var updateText = function(){
  showCountdown();
};

var showCountdown = function(){
    var showDaysToStarWars = document.getElementById("swHeader");
    var today = new Date();
    var currentDay = today.getDate();
    var swDay = d.getDate();
    var month = today.getMonth();
    var months = 11 - month;
    var days;
    var hours;
    var seconds;

    if ( month === 3 || 5 || 7 || 10 ) {
    days = ( 29 - currentDay ) - swDay;
  } else if ( month === 11 ) {
    days = (swDay - 1) - currentDay;
  } else {
    days = ( 30 - currentDay );
  }

   if ( today != swDay ){
    var currentHour = today.getHours();
    hours = 23 - currentHour;
    var currentMinute = today.getMinutes();
    minutes = 60 - currentMinute;
    var currentSecond = today.getSeconds();
    seconds = 60 - currentSecond;
  } else {
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  var countDown;

  if ( months === 1 && days === 1 ) {
    countDown = months + " Month " + days + " Day " + hours + " Hrs " + minutes + " Min " + seconds + " Sec ";
  } else if (months === 1 && days != 1) {
    countDown = months + " Month " + days + " Days " + hours + " Hrs " + minutes + " Min " + seconds + " Sec ";
  } else {
    countDown = months + " Months " + days + " Days " + hours + " Hrs " + minutes + " Min " + seconds + " Sec ";
  }

    showDaysToStarWars.innerText = countDown;
};

updateText();

var oneSecond = 1000;
setInterval(updateText, oneSecond);
