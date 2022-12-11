const cards = document.querySelectorAll(".card");

cards.forEach((card) => card.addEventListener("click", handleCardClick));
cards.forEach((card) => card.addEventListener("touchend", handleCardClick));

function handleCardClick(e) {
  this.classList.toggle("rotated");
}
