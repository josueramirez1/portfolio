const sections = document.querySelectorAll("section, header, footer");
const navItems = document.querySelector(".nav-items");
const topHeader = document.querySelector(".top-header");

const header = document.querySelector("#header");
const navBtn = document.querySelector(".btn-mobile-nav");
const options = {
  threshold: 0,
  rootMargin: "-50px",
};

// Navigation menu
navBtn.addEventListener("click", (e) => {
  if (!navBtn) return;
  header.classList.toggle("nav-open");
  navItems.addEventListener("click", (e) => {
    header.classList.remove("nav-open");
  });
});

// Scrolling

const observer = new IntersectionObserver((entries) => {
  for (let entry of entries) {
    entry.target.classList.toggle("show", entry.isIntersecting);
  }
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// Sticky navigation
// const sticky = new IntersectionObserver(
//   (entries) => {
//     const ent = entries[0];
//     if (!ent.isIntersecting) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting) {
//       document.body.classList.remove("sticky");
//       console.log(ent);
//     }
//   },
//   {
//     threshold: 0,
//     root: null,
//     rootMargin: "-105px",
//   }
// );
// sticky.observe(topHeader);

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
