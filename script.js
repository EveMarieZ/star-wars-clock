var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var updateClock = function() {
  var lolcat = document.getElementById("lolcat");
  var message = document.getElementById("timeEvent");
  var messageText;
  var image =
    "https://imgix.bustle.com/uploads/image/2018/5/21/f0fbced7-d13a-4900-9da4-fab47eceaeeb-151204_bb_han-solojpgcroppromo-xlarge2.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70";

  if (time == partyTime) {
    image =
      "https://media.giphy.com/media/XQ1FwjRKun4nS/giphy.gif";
    messageText = "PARTY TIME!";
  } else if (time == napTime) {
    image =
      "https://vignette.wikia.nocookie.net/disney/images/7/73/Princess_Leia_3.jpg/revision/latest?cb=20140913192715";
    messageText = "NAP TIME!";
  } else if (time == lunchTime) {
    image =
      "https://res.cloudinary.com/jerrick/image/upload/f_auto,fl_progressive,q_auto,c_fit,w_1140/e4anmwvnpxj9v32lcczw";
    messageText = "LUNCH TIME!";
  } else if (time == wakeupTime) {
    image =
      "https://i.stack.imgur.com/4nNLr.jpg";
    messageText = "TIME TO GET UP!";
  } else if (time < noon) {
    messageText = "Good morning!";
  } else if (time > evening) {
    messageText = "Good Evening!";
  } else {
    messageText = "Good afternoon!";
  }

  message.innerText = messageText;
  lolcat.src = image;

  showCurrentTime();
};

var showCurrentTime = function() {
  // display the string on the webpage
  var clock = document.getElementById("clock");

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set Hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

partyTimeButton.addEventListener('click', partyEvent);

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
 
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
 
var napEvent = function() {
    napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
