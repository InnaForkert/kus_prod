const videoArray = [
  {
    id: 1,
    img: "https://i9.ytimg.com/vi/sleryK4X4S8/maxresdefault.jpg?v=63617803&sqp=CNT39JsG&rs=AOn4CLAA93NPRCYs6D3yAPI2aoInKXzy-w",
    alt: "Відео-рецепт приготування пельменів",
    link: "https://www.youtube.com/embed/sleryK4X4S8",
    heading: "Пельмені",
    subheading: "ІДЕАЛЬНЕ тісто + соковита начинка❗Домашні пельмені ❗",
    category: "1",
  },
  {
    id: 2,
    img: "https://i9.ytimg.com/vi_webp/mB0RmAnJuXU/maxresdefault.webp?v=637a05af&sqp=CID69JsG&rs=AOn4CLBWZax5FOVo1jjwcEzZNpswQHyPog",
    alt: "Відео-рецепт приготування фаршированих курячих стегон",
    link: "https://www.youtube.com/embed/mB0RmAnJuXU",
    heading: "Фаршировані Стегенця",
    subheading: "🍗Бюджетно та по-Святковому 🎄",
    category: "2",
  },
  {
    id: 3,
    img: "https://i9.ytimg.com/vi_webp/cxQhBzr7Cvk/maxresdefault.webp?v=63487248&sqp=CID69JsG&rs=AOn4CLBsUiS_se0Qcie05RiYzz91837zAw",
    alt: "Відео-рецепт приготування хінкалі",
    link: "https://www.youtube.com/embed/cxQhBzr7Cvk",
    heading: "🔴ХІНКАЛІ на вашій кухні",
    subheading: "Грузинська смакота з Українським акцентом💛💙",
    category: "1",
  },
  {
    id: 4,
    img: new URL("../img/menu-hinkali.jpg", import.meta.url),
    alt: "Відео-рецепт приготування хінкалі",
    link: "https://www.youtube.com/embed/sleryK4X4S8",
    heading: "Пельмені",
    subheading: "Найсмачніший рецепт",
    category: "4",
  },
];
console.log(videoArray[0].img);

const videoGallery = document.querySelector("#videoGallery");
const videoModal = document.querySelector("#videoModal");
const modal = document.querySelector(".video-modal");
const modalIcon = document.querySelector(".modal-icon");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const filters = document.querySelectorAll(".filter-item");
let currentFilter;
let currentDiv;

createVideos(videoArray);

filters.forEach((filter) => {
  filter.addEventListener("click", handleFilter);
});
modalIcon.addEventListener("click", videoClose);
next.addEventListener("click", nextVideo);
previous.addEventListener("click", previousVideo);
filters.forEach((filter) => filter.addEventListener("click", filterVideos));

function filterVideos(e) {
  const filteredArray = [...videoArray].filter(
    (video) => video.category === e.target.dataset.category
  );
  createVideos(filteredArray);
}

function createVideos(arr) {
  const marcup = arr.map((video) => {
    return `<div class="gallery-item">
                <img
                  src="${video.img}"
                  alt="${video.alt}"
                  data-link="${video.link}"
                />
                <div class="gallery-item-caption">
                  <div>
                    <h2>${video.heading}</h2>
                    <p><${video.subheading}</p>
                  </div>
                </div>
              </div>`;
  });
  videoGallery.innerHTML = marcup.join("");
  const videos = document.querySelectorAll(".gallery-item");
  videos.forEach((video) => video.addEventListener("click", videoPopup));
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
  modal.classList.add("visually-hidden");
}

function videoPopup(e) {
  e.preventDefault();
  videoModal.setAttribute("src", e.currentTarget.children[0].dataset.link);
  modal.classList.remove("visually-hidden");
  currentDiv = e.currentTarget;
}

function handleFilter(e) {
  currentFilter ? currentFilter.classList.remove("active-filter") : null;
  currentFilter = e.target;
  currentFilter.classList.add("active-filter");
}
