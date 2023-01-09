const cards = document.querySelectorAll(".card");

cards.forEach((card) => card.addEventListener("click", handleCardClick));
cards.forEach((card) => card.addEventListener("touch", handleCardClick));

function handleCardClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    this.classList.toggle("rotated");
  }
}
