const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const circles = document.querySelectorAll(".mobile-menu-btn svg");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

mobileMenuBtn.addEventListener("click", openMobileMenu);
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

function openMobileMenu() {
  mobileMenu.classList.remove("mobile-menu-onClose");
  circles[1].classList.add("move-top");
  circles[3].classList.add("move-left");
  circles[5].classList.add("move-right");
  circles[7].classList.add("move-bottom");
  mobileMenuBtn.removeEventListener("click", openMobileMenu);
  mobileMenuBtn.addEventListener("click", closeMobileMenu);
}

function closeMobileMenu() {
  mobileMenu.classList.add("mobile-menu-onClose");
  circles[1].classList.remove("move-top");
  circles[3].classList.remove("move-left");
  circles[5].classList.remove("move-right");
  circles[7].classList.remove("move-bottom");
  mobileMenuBtn.addEventListener("click", openMobileMenu);
  mobileMenuBtn.removeEventListener("click", closeMobileMenu);
}
