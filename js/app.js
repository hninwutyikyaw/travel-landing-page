const header = document.querySelector("#header");
const navbar = document.querySelector(".navbar");
const collapse = document.querySelector(".collapse");
const navbarToggler = document.querySelector("#toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
const navigationLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 56) {
    header.classList.add("navbar-scroll");
  } else if (window.scrollY < 56) {
    header.classList.remove("navbar-scroll");
  }
});

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("collapse");
  if (navbarToggler.classList.contains("collapse")) {
    header.classList.add("navbar-scroll");
    header.style.height = "100%";
    header.style.zIndex = "100";
  } else {
    header.style.height = "";
    header.style.zIndex = "0";
  }
});

navigationLinks.forEach((navigationLink) => {
  navigationLink.addEventListener("click", () => {
    navbarToggler.classList.remove("collapse");
    header.style.height = "";
    header.style.zIndex = "0";
    navbarCollapse.classList.remove("show");
  });
});
