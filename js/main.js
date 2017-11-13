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
    var days = (30 - currentDay) + swDay;
    var currentHour = today.getHours();
    var hours = 23 - currentHour;
    var currentMinute = today.getMinutes();
    var minutes = 60 - currentMinute;
    var currentSecond = today.getSeconds();
    var seconds = 60 - currentSecond;
    var countDown = days + " Days " + hours + " Hrs " + minutes + " Min " + seconds + " Sec ";
    showDaysToStarWars.innerText = countDown;

};

updateText();

var oneSecond = 1000;
setInterval(updateText, oneSecond);
