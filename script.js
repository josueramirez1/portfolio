const sections = document.querySelectorAll("section, header, footer");

const options = {
  threshold: 0,
  rootMargin: "-50px",
};

const observer = new IntersectionObserver((entries) => {
  for (let entry of entries) {
    entry.target.classList.toggle("show", entry.isIntersecting);
  }
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

//Thank you HTML page
const redirect = "index.html";

let count = 6;
let timer = document.getElementById("timer");

function countDown() {
  if (count > 0) {
    count--;
    timer.innerHTML = "This page will redirect in " + count + " seconds";

    setTimeout(() => {
      countDown();
    }, 1000);
  } else {
    window.location.href = redirect;
  }
}
countDown();
