const navToggle = document.getElementById("nav_toggle");
const navMenu = document.getElementById("home");
const navClose = document.getElementById("nav_close");

// nav open
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("navToggle");
  });
}

// nav close
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("navToggle");
  });
}

function navCloseAction() {
  navMenu.classList.remove("navToggle");
}
const navLink = document.querySelectorAll(".nav_link");

navLink.forEach((n) => n.addEventListener("click", navCloseAction));
