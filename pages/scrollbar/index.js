const progressBar = document.querySelector(".progress-bar");

let totalPageHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
  let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
  progressBar.style.height = `${newProgressHeight}%`;
  progressBar.style.opacity = `${newProgressHeight}%`;
};
let debounceResize;
window.addEventListener("resize", () => {
  clearTimeout(debounceResize);
  debounceResize = setTimeout(() => {
    totalPageHeight = document.body.scrollHeight - window.innerHeight;
  }, 250);
});

const progressBarContainer = document.querySelector("#progressBarContainer");
progressBarContainer.addEventListener("click", (e) => {
  let newPageScroll =
    (e.clientY / progressBarContainer.offsetHeight) * totalPageHeight;
  window.scrollTo({
    top: newPageScroll,
    behavior: "smooth",
  });
});
