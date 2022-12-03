const closeMobileMenuBtn = document.querySelector(".mobile-menu-close");
const mobileMenu = document.querySelector(".mobile-menu");

console.log("hi");

closeMobileMenuBtn.addEventListener("click", closeMobileMenu);

function closeMobileMenu() {
  mobileMenu.classList.add("mobile-menu-onClose");
}
