const e=document.querySelector(".mobile-menu"),t=document.querySelector(".mobile-menu-btn"),o=document.querySelectorAll(".mobile-menu-btn svg"),s=document.querySelectorAll(".mobile-menu-link");function l(){e.classList.remove("mobile-menu-onClose"),o[1].classList.add("move-top"),o[3].classList.add("move-left"),o[5].classList.add("move-right"),o[7].classList.add("move-bottom"),t.removeEventListener("click",l),t.addEventListener("click",c)}function c(){e.classList.add("mobile-menu-onClose"),o[1].classList.remove("move-top"),o[3].classList.remove("move-left"),o[5].classList.remove("move-right"),o[7].classList.remove("move-bottom"),t.addEventListener("click",l),t.removeEventListener("click",c)}t.addEventListener("click",l),s.forEach((e=>{e.addEventListener("click",c)}));
//# sourceMappingURL=index.f6675be8.js.map
