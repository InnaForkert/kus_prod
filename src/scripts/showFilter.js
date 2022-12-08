const filterShower = document.querySelector(".show-filter");
const filter = document.querySelector(".video-filter");

filterShower.addEventListener("click", showFilter);

function showFilter() {
  filterShower.classList.add("show");
  filterShower.innerText = "<";
  filterShower.removeEventListener("click", showFilter);
  filterShower.addEventListener("click", hideFilter);

  filter.classList.add("show-filter-onclick");
}

function hideFilter() {
  filterShower.classList.remove("show");
  filterShower.innerText = ">";
  filterShower.addEventListener("click", showFilter);
  filterShower.removeEventListener("click", hideFilter);

  filter.classList.remove("show-filter-onclick");
}
