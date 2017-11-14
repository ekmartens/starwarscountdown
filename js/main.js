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
    var year = today.getFullYear();
    var months;
    var days;
    var hours;
    var seconds;

    if ( month < 11 ) {
      days = ( 30 - currentDay ) + ( swDay - 1);
    } else {
      days = ( swDay - 1 ) - currentDay
    }

   if ( today != swDay ){
    var currentHour = today.getHours();
    hours = 23 - currentHour;
    var currentMinute = today.getMinutes();
    minutes = 60 - currentMinute;
    var currentSecond = today.getSeconds();
    seconds = 60 - currentSecond;
  } else {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }


  var countDown;

  if ( days === 1 ) {
    countDown = days + " Day " + hours + " Hrs " + minutes + " Min " + seconds + " Sec ";
  } else if (months === 1 && days != 1) {
    countDown = days + " Days " + hours + " Hrs " + minutes + " Min " + seconds + " Sec ";
  } else if ( currentDay >= 15 && month === 11 || year > 2017 ) {
    countDown = "Now Playing!"
  }
  else {
    countDown = days + " Days " + hours + " Hrs " + minutes + " Min " + seconds + " Sec ";
  }

  var subtitle = document.getElementById('secondHalf');
  var message;

  if ( currentDay >= 15 && month === 11 || year > 2017 ) {
    message = "Star Wars Episode VIII";
  } else {
    message = "Until Star Wars!";
  }

    showDaysToStarWars.innerText = countDown;
    subtitle.innerText = message;
};

updateText();

var oneSecond = 1000;
setInterval(updateText, oneSecond);
