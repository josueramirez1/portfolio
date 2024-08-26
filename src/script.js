function runWebsite() {
  const sections = document.querySelectorAll("section, header, footer");
  const navItems = document.querySelector(".nav-items");
  const header = document.querySelector("#header");
  const aboutSection = document.querySelector(".about");
  const navBtn = document.querySelector(".btn-mobile-nav");

  // Sticky navigation
  const sticky = new IntersectionObserver(
    (entries) => {
      const ent = entries[0];
      if (!ent.isIntersecting) {
        document.body.classList.add("sticky");
      }

      if (ent.isIntersecting) {
        document.body.classList.remove("sticky");
      }
    },
    {
      threshold: 0,
      root: null,
      rootMargin: "-96px",
    }
  );

  // Scrolling

  const scroll = new IntersectionObserver(
    (entries) => {
      for (let entry of entries) {
        entry.target.classList.toggle("show", entry.isIntersecting);
      }
    },
    {
      threshold: 0,
      root: null,
      rootMargin: "-40px",
    }
  );

  // Navigation menu

  function navigationMenu(e) {
    if (!navBtn) return;
    header.classList.toggle("nav-open");
    navItems.addEventListener("click", (e) => {
      header.classList.remove("nav-open");
    });
  }

  sticky.observe(aboutSection);
  sections.forEach((section) => {
    scroll.observe(section);
  });
  navBtn.addEventListener("click", navigationMenu);
}

const run = runWebsite();
