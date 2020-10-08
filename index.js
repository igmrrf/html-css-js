// import "./styles/styles.scss";

//Start of Carousel Js
const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Image Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//Button Listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  console.log(carouselImages[counter]);

  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    console.log(counter);
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    console.log(counter);
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
// End of Carousel JS
// const clickButton = document.getElementById("alt-click");
// const video = document.getElementById("video");
// const controlButton = document.getElementById("control-button");
// const myLocation = document.getElementById("coords");

// function newPage() {
//   window.open(
//     "https://github.com/igmrrf",
//     "_blank",
//     "width=800, height=600, scrollbar=no"
//   );
// }

// function confirmation(e) {
//   var c = confirm("Are you sure you're okay with logging out?");
//   if (c) {
//     let word = "Hello World";
//     var escaped = escape(word);
//     //escape converts a string to linkable statement like search requests in google
//     alert(escaped);
//   } else {
//     alert("We are happy you decided to spend more time with us");
//   }
// }

// controlButton.addEventListener("click", (e) => {
//   if (controlButton.innerHTML === "Play") {
//     video.play();
//     controlButton.innerHTML = "Pause";
//   } else {
//     video.pause();
//     controlButton.innerHTML = "Play";
//   }
// });

// function getMyLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     myLocation.innerHTML = "Geolocation is not supported by this browser";
//   }
// }

// function showPosition(position) {
//   console.log(position);
//   console.log(position.coords.latitude);
//   console.log(position.coords.longitude);
//   myLocation.innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br/>Longitude: " +
//     position.coords.longitude;
// }

// function counting() {
//   if (typeof Storage !== "undefined") {
//     if (sessionStorage.counting) {
//       sessionStorage.counting = Number(sessionStorage.counting) + 1;
//     } else {
//       sessionStorage.counting = 1;
//     }
//     document.getElementById("number").innerHTML = sessionStorage.counting;
//     if (sessionStorage.counting > 1) {
//       document.getElementById("number").innerHTML +=
//         " <p> Refresh Your Page</p>";
//     }
//   } else {
//     document.getElementById("number").innerHTML =
//       "Sorry, your browser does not " + "support web Storage....";
//   }
// }
