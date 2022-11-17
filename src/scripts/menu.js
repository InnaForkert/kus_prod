const cards = document.querySelectorAll(".card");

cards.forEach((card) => card.addEventListener("click", handleCardClick));

function handleCardClick() {
  this.classList.toggle("rotated");
}
