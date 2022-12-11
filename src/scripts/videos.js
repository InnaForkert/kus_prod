import { videoArray } from "./videoArray";

const videoGallery = document.querySelector("#videoGallery");
const videoModal = document.querySelector("#videoModal");
const overflow = document.querySelector(".video-modal");
const modal = document.querySelector(".modal");
const modalIcon = document.querySelector(".modal-icon");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const filters = document.querySelectorAll(".filter-item");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const allVideosBtn = document.querySelector("#allVideos");

let currentFilter;
let currentDiv;
let currentPageStart = 0;
let currentPageEnd = 6;
let filteredArray = [];

const sortedArray = videoArray.sort((a, b) => b.id - a.id);

createVideos(sortedArray);

filters.forEach((filter) => {
  filter.addEventListener("click", handleFilter);
});
modalIcon.addEventListener("click", videoClose);
next.addEventListener("click", nextVideo);
previous.addEventListener("click", previousVideo);
filters.forEach((filter) => filter.addEventListener("click", filterVideos));
right.addEventListener("click", nextPage);
left.addEventListener("click", previousPage);
allVideosBtn.addEventListener("click", showAllVideos);

function showAllVideos() {
  filteredArray = [];
  currentPageEnd = 6;
  currentPageStart = 0;
  console.log(sortedArray);
  createVideos(sortedArray);
}

function nextPage() {
  currentPageStart += 6;
  currentPageEnd += 6;
  if (filteredArray.length > 0) createVideos(filteredArray);
  else createVideos(sortedArray);
}

function previousPage() {
  currentPageStart -= 6;
  currentPageEnd -= 6;
  createVideos(sortedArray);
}

function filterVideos(e) {
  currentFilter = e.target;
  filteredArray = [...sortedArray].filter((video) =>
    video.category.includes(currentFilter.dataset.category)
  );
  createVideos(filteredArray);
}

function createVideos(arr) {
  const marcup = arr.map((video, idx) => {
    if (idx >= currentPageStart && idx < currentPageEnd) {
      return `<div class="gallery-item">
      <img
      src="${video.img}"
      alt="${video.subheading}"
      data-link="${video.link}"
      />
      <div class="gallery-item-caption">
      <div>
      <h2>${video.heading}</h2>
      <p>${video.subheading}</p>
      </div>
      </div>
      </div>`;
    }
  });
  videoGallery.innerHTML = marcup.join("");
  const videos = document.querySelectorAll(".gallery-item");
  videos.forEach((video) => video.addEventListener("click", videoPopup));
  if (currentPageStart > 0 && left.classList) {
    left.classList.remove("visually-hidden");
  } else {
    left.classList.add("visually-hidden");
  }
  if (filteredArray.length > 0) {
    if (currentPageEnd >= filteredArray.length)
      right.classList.add("visually-hidden");
    else right.classList.remove("visually-hidden");
  } else {
    if (currentPageEnd >= sortedArray.length)
      right.classList.add("visually-hidden");
    else right.classList.remove("visually-hidden");
  }
}

function nextVideo(e) {
  videoModal.setAttribute(
    "src",
    currentDiv.nextElementSibling.children[0].dataset.link
  );
  currentDiv = currentDiv.nextElementSibling;
}

function previousVideo(e) {
  videoModal.setAttribute(
    "src",
    currentDiv.previousElementSibling.children[0].dataset.link
  );
  currentDiv = currentDiv.previousElementSibling;
}

function videoClose() {
  modal.classList.add("hidden-opacity");
  overflow.classList.add("visually-hidden");
  document.removeEventListener("keydown", videoKeyHandler);
  overflow.removeEventListener("click", videoCloseOnOverflowClick);
  videoModal.setAttribute("src", "#");
}

function videoCloseOnOverflowClick(e) {
  if (e.target === e.currentTarget) videoClose();
}

function videoPopup(e) {
  e.preventDefault();
  videoModal.setAttribute("src", e.currentTarget.children[0].dataset.link);
  modal.classList.remove("hidden-opacity");
  overflow.classList.remove("visually-hidden");
  currentDiv = e.currentTarget;
  document.addEventListener("keydown", videoKeyHandler);
  overflow.addEventListener("click", videoCloseOnOverflowClick);
}

function videoKeyHandler(e) {
  if (e.key === "Escape") {
    videoClose();
  } else if (e.key === "ArrowRight") {
    nextVideo();
  } else if (e.key === "ArrowRight") {
    previousVideo();
  }
}

function handleFilter(e) {
  currentFilter ? currentFilter.classList.remove("active-filter") : null;
  currentFilter = e.target;
  currentFilter.classList.add("active-filter");
}
