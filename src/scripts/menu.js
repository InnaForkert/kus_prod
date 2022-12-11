const cards = document.querySelectorAll(".card");

cards.forEach((card) => card.addEventListener("click", handleCardClick));
cards.forEach((card) => card.addEventListener("touchend", handleCardClick));

function handleCardClick(e) {
  console.log(e);
  this.classList.toggle("rotated");
}
