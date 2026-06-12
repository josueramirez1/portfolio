const hamburgerBtn = document.querySelector(".hamburger");

const hamburgerList = document.querySelector(".hamburger-list-container");

const buttons = document.querySelectorAll(".filter-btn");

const cards = document.querySelectorAll(".work-card");

hamburgerBtn.addEventListener("click", (e) => {
  hamburgerList.classList.toggle("hidden");
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // active button styling
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    cards.forEach((card) => {
      const categories = card.getAttribute("data-category");

      if (filter === "all" || categories.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
