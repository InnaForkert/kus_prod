const asortBtn = document.querySelector(".hero-btn");
const overflowPrices = document.querySelector(".menu-modal");
const pricesModal = document.querySelector(".menu-inner-modal");
const closePricesBtn = document.querySelector(".closePrices");
asortBtn.addEventListener("click", openPrices);

function openPrices() {
  overflowPrices.classList.remove("visually-hidden");
  pricesModal.classList.remove("hidden-opacity");

  overflowPrices.addEventListener("click", checkOverflow);
  document.addEventListener("keydown", checkKey);
  closePricesBtn.addEventListener("click", closePrices);
}

function closePrices() {
  overflowPrices.classList.add("visually-hidden");
  pricesModal.classList.add("hidden-opacity");

  overflowPrices.removeEventListener("click", checkOverflow);
  document.removeEventListener("keydown", checkKey);
  closePricesBtn.removeEventListener("click", closePrices);
}

function checkOverflow(e) {
  if (e.target === e.currentTarget) {
    closePrices();
  }
}

function checkKey(e) {
  if (e.key === "Escape") {
    closePrices();
  }
}
