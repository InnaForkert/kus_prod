const cards = document.querySelectorAll(".card");
cards.forEach((card)=>card.addEventListener("click", handleCardClick));
function handleCardClick() {
    this.classList.toggle("rotated");
}

//# sourceMappingURL=index.c6e2c308.js.map
