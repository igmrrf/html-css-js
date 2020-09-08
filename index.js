import "./assets/styles/styles.scss";

const clickButton = document.getElementById("alt-click");
const video = document.getElementById("video");
const controlButton = document.getElementById("control-button");
const myLocation = document.getElementById("coords");

//Regular Expressions return true to a tested result
function regExpTest() {
  var myRegExp = new RegExp("lazy");
  var test = myRegExp.test("The owner of this website is the lazy dev otaku");
  alert(test);
  //for replace
  var myRegExp2 = /sentence/gi;
  //g is for global while i is for ignore-case
  var str = "Change this sentence";
  //replace takes in two parameter, first is the regex and second what's it to replace
  document.getElementById("reg-exp").innerHTML = str.replace(
    myRegExp2,
    "string"
  );

  //for match
  myRegExp1 = /string/g;
  //match always requires a global modifier
  var str1 = "This is my test string".match(myRegExp1);
  var matches = str.length;
  console.log(matches);
}

function freeCode() {
  var RoundMe = 1.9870934;
  Rounded = Math.round(RoundMe);
  console.log(Rounded);

  var p = Math.PI;
  console.log(p);

  var Name = prompt("Enter your name");
  //Try, Catch and throw
  try {
    console.log("Trying without error");
    var len = (Name = Name.length);
    if (len > 5) {
      throw "Long Name";
    } else if (len < 5) {
      throw "Short Name";
    } else {
      throw "5 letter name ";
    }
  } catch (e) {
    alert(e);
  }

  var myString = "The quick brown fox jumps over the lazy dog";
  //Split
  var iAmSplint = myString.split(" ");
  for (index in iAmSplint) {
    console.log(iAmSplint[index] + ", ");
  }
  //Substring
  console.log(myString.substr(0, 7) + "The Complete Web Dev");
}

function newPage() {
  window.open(
    "https://github.com/igmrrf",
    "_blank",
    "width=800, height=600, scrollbar=no"
  );
  //onblur is the opposite of onfocus
}

function confirmation(e) {
  var c = confirm("Are you sure you're okay with logging out?");
  if (c) {
    let word = "Hello World";
    var escaped = escape(word);
    //escape converts a string to linkable statement like search requests in google
    alert(escaped);
  } else {
    alert("We are happy you decided to spend more time with us");
  }
}

function prompting() {
  var p = prompt("How old are you?", "");
  if (p) {
    alert(p);
  } else {
    alert("You didn't submit any valuable information");
  }
}

controlButton.addEventListener("click", (e) => {
  if (controlButton.innerHTML === "Play") {
    video.play();
    controlButton.innerHTML = "Pause";
  } else {
    video.pause();
    controlButton.innerHTML = "Play";
  }
});

function pause() {
  console.log("Event is successfully assigned");
  video.width = 900;
}

function allowDrop(e) {
  e.preventDefault();
}
function drag(e) {
  e.dataTransfer.setData("Text", e.target.id);
}
function drop(e) {
  e.preventDefault();
  d = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(d));
}

function getMyLocation() {
  //Navigator Options
  //platform /the platform the user is on. i.e: Win32
  //cookieEnabled /checks if cookie is enabled on the browser
  //onLine /checks if the browser is online or offline
  //userAgent /agent sent to the server from the browser
  //appName /the name of the browser e.g: Netscape
  //appCodeName / the alias name of the browser: i.e Mozilla
  //appVersion /checks the version of the browser

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myLocation.innerHTML = "Geolocation is not supported by this browser";
  }
}

function showPosition(position) {
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  myLocation.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br/>Longitude: " +
    position.coords.longitude;
}

function storageCheck() {
  if (typeof Storage !== "undefined") {
    //We can accept Local Storage
    alert("Local Storage Available");
  } else {
    //We cannot accept Local Storage
    alert("No Local Storage Available");
  }
}

function storeInLocalStorage() {
  localStorage.myName = "Richard Francis";
  //SessionStorage can be created the same way as Local
  //Session data will be deleted when window is closed
}

function getLocalStorage() {
  alert(localStorage.myName);
}

function counter() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.counter) {
      sessionStorage.counter = Number(sessionStorage.counter) + 1;
    } else {
      sessionStorage.counter = 1;
    }
    document.getElementById("number").innerHTML = sessionStorage.counter;
    if (sessionStorage.counter > 1) {
      document.getElementById("number").innerHTML +=
        " <p> Refresh Your Page</p>";
    }
  } else {
    document.getElementById("number").innerHTML =
      "Sorry, your browser does not " + "support web Storage....";
  }
}
