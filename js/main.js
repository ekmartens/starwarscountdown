var welcome = document.getElementById("welcomeButton");
var name;
var age;
var startScreen = function(){
  name = input('What is your name?');
  age = input('What is your age?');
}

document.getElementById("welcomeButton").addEventListener("click", startScreen);




/* object.addEventListener("load", myScript); */
