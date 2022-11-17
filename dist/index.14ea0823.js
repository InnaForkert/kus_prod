console.log("../src/img/menu-hinkali.jpg");
const videoArray = [
    {
        id: 1,
        img: "../src/img/menu-hinkali.jpg",
        alt: "Відео-рецепт приготування пельменів",
        link: "https://www.youtube.com/embed/sleryK4X4S8",
        heading: "Пельмені",
        subheading: "Найсмачніший рецепт",
        category: "1"
    },
    {
        id: 2,
        img: "./img/menu-hinkali.jpg",
        alt: "Відео-рецепт приготування хінкалі",
        link: "https://www.youtube.com/embed/cxQhBzr7Cvk",
        heading: "Пельмені",
        subheading: "Найсмачніший рецепт",
        category: "2"
    },
    {
        id: 3,
        img: "./img/menu-hinkali.jpg",
        alt: "Відео-рецепт приготування хінкалі",
        link: "https://www.youtube.com/embed/VwI54d-rThQ",
        heading: "Пельмені",
        subheading: "Найсмачніший рецепт",
        category: "3"
    },
    {
        id: 4,
        img: "./img/menu-hinkali.jpg",
        alt: "Відео-рецепт приготування хінкалі",
        link: "https://www.youtube.com/embed/sleryK4X4S8",
        heading: "Пельмені",
        subheading: "Найсмачніший рецепт",
        category: "4"
    }
];
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
modalIcon.addEventListener("click", videoClose);
next.addEventListener("click", nextVideo);
previous.addEventListener("click", previousVideo);
filters.forEach((filter)=>filter.addEventListener("click", filterVideos));
function filterVideos(e) {
    const filteredArray = [
        ...videoArray
    ].filter((video)=>video.category === e.target.dataset.category);
    createVideos(filteredArray);
}
function createVideos(arr) {
    const marcup = arr.map((video)=>{
        return `<div class="gallery-item">
                <img
                  src="${video.img}"
                  alt="${video.alt}"
                  data-link="${video.link}"
                />
                <div class="gallery-item-caption">
                  <div>
                    <h2>${video.heading}</h2>
                    <p><${video.subheading}/p>
                  </div>
                </div>
              </div>`;
    });
    videoGallery.innerHTML = marcup.join("");
    const videos = document.querySelectorAll(".gallery-item");
    videos.forEach((video)=>video.addEventListener("click", videoPopup));
}
function nextVideo(e) {
    videoModal.setAttribute("src", currentDiv.nextElementSibling.children[0].dataset.link);
    currentDiv = currentDiv.nextElementSibling;
}
function previousVideo(e) {
    videoModal.setAttribute("src", currentDiv.previousElementSibling.children[0].dataset.link);
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
filters.forEach((filter)=>{
    filter.addEventListener("click", handleFilter);
});
function handleFilter(e) {
    currentFilter && currentFilter.classList.remove("active-filter");
    currentFilter = e.target;
    currentFilter.classList.add("active-filter");
}

//# sourceMappingURL=index.14ea0823.js.map
