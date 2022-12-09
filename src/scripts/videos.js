const videoArray = [
  {
    id: 1,
    img: "https://i9.ytimg.com/vi/sleryK4X4S8/maxresdefault.jpg?v=63617803&sqp=CNT39JsG&rs=AOn4CLAA93NPRCYs6D3yAPI2aoInKXzy-w",
    link: "https://www.youtube.com/embed/sleryK4X4S8",
    heading: "Пельмені",
    subheading: "ІДЕАЛЬНЕ тісто + соковита начинка❗Домашні пельмені ❗",
    category: "1, 2",
  },
  {
    id: 2,
    img: "https://i9.ytimg.com/vi_webp/mB0RmAnJuXU/maxresdefault.webp?v=637a05af&sqp=CID69JsG&rs=AOn4CLBWZax5FOVo1jjwcEzZNpswQHyPog",
    link: "https://www.youtube.com/embed/mB0RmAnJuXU",
    heading: "Фаршировані Стегенця",
    subheading: "🍗Бюджетно та по-Святковому 🎄",
    category: "2",
  },
  {
    id: 3,
    img: "https://i9.ytimg.com/vi_webp/cxQhBzr7Cvk/maxresdefault.webp?v=63487248&sqp=CID69JsG&rs=AOn4CLBsUiS_se0Qcie05RiYzz91837zAw",
    link: "https://www.youtube.com/embed/cxQhBzr7Cvk",
    heading: "🔴ХІНКАЛІ на вашій кухні",
    subheading: "Грузинська смакота з Українським акцентом💛💙",
    category: "1, 2",
  },
  {
    id: 4,
    img: "https://i9.ytimg.com/vi/f00Nm0q9Q5w/maxresdefault.jpg?v=6335f00e&sqp=CISB9ZsG&rs=AOn4CLAlF2LyzyiochDoA8xPlX1jccI3VA",
    link: "https://www.youtube.com/embed/f00Nm0q9Q5w",
    heading: "🧡Найяскравіший СУП цієї ОСЕНІ",
    subheading: "🍂/ pumpkin soup🥘",
    category: "3",
  },
  {
    id: 5,
    img: "https://i9.ytimg.com/vi/VwI54d-rThQ/maxresdefault.jpg?v=63117f8b&sqp=CLCD9ZsG&rs=AOn4CLAnVVD4sTNNX1Ng9ByR7hn2-rBlSA",
    link: "https://www.youtube.com/embed/VwI54d-rThQ",
    heading: "Штрулі",
    subheading: "НАПІВФАБРИКАТИ для особливого випадку 🥟Як усе встигнути 👨‍🍳",
    category: "1, 2",
  },
  {
    id: 6,
    img: "https://i9.ytimg.com/vi/Bz5lxckxeoo/maxresdefault.jpg?v=62f6b211&sqp=CNyF9ZsG&rs=AOn4CLC7g12-gdxuGuQiQNHbzzzLWQNGFg",
    link: "https://www.youtube.com/embed/Bz5lxckxeoo",
    heading: "ТОП 5 Найкрасивіших булочок",
    subheading: "🥨Проста та зручна формовка",
    category: "4, 5",
  },
  {
    id: 7,
    img: "https://i9.ytimg.com/vi_webp/VVMcesPAWiM/maxresdefault.webp?v=62e20f72&sqp=COia9ZsG&rs=AOn4CLDGO5HK5vt0JKdjGV01WM9p99oWow",
    link: "https://www.youtube.com/embed/VVMcesPAWiM",
    heading: "🔴ГОЛУБЦІ",
    subheading:
      "Всі тонкощі приготування та ТОП 3 способи закрутки (швидко і просто)❗",
    category: "1, 2",
  },
  {
    id: 8,
    img: "https://i9.ytimg.com/vi_webp/k412HWe9vFQ/maxresdefault.webp?v=62cb28c2&sqp=COia9ZsG&rs=AOn4CLDWeaakS6ojCqfHzip4r1Z-Gc2_Kg",
    link: "https://www.youtube.com/embed/k412HWe9vFQ",
    heading: "Ласуй, та Не Думай про Калорії ❗",
    subheading: "Корисний Перекус, що можна взяти з собою в дорогу",
    category: "5",
  },
  {
    id: 9,
    img: "https://i9.ytimg.com/vi_webp/WtE1Et_gM8Y/maxresdefault.webp?v=629265c2&sqp=CJSd9ZsG&rs=AOn4CLDoJSYkydRtFdN5g9U7GtjHCwiGbA",
    link: "https://www.youtube.com/embed/WtE1Et_gM8Y",
    heading: "ХАЧАПУРІ",
    subheading: "Експрес ХАЧАПУРІ за 10 хвилин🍕🥮",
    category: "2, 4",
  },
  {
    id: 10,
    img: "https://i9.ytimg.com/vi_webp/TZiPAKqxioY/maxresdefault.webp?v=627c2650&sqp=CMCf9ZsG&rs=AOn4CLCja8CddqHkJeE4wUH86QDtyC7YKQ",
    link: "https://www.youtube.com/embed/TZiPAKqxioY",
    heading: "🔴ТОП 3 рецепти як смачно приготувати курячі сердечка",
    subheading: "НИЗЬКОКАЛОРІЙНІША частина курки.🍗",
    category: "2",
  },
  {
    id: 11,
    img: "https://i9.ytimg.com/vi/0mqnbl613uM/maxresdefault.jpg?v=626ed71e&sqp=CMCf9ZsG&rs=AOn4CLCrBrCRlHEPGjVYBshqFp3M76gBeg",
    link: "https://www.youtube.com/embed/0mqnbl613uM",
    heading: "Курячий рулет з Клюквою🍒",
    subheading: "Неймовірна СМАКОТА!",
    category: "2",
  },
  {
    id: 12,
    img: "https://i9.ytimg.com/vi_webp/dGJ51V5OPy0/maxresdefault.webp?v=6262ba38&sqp=CMCf9ZsG&rs=AOn4CLBwfRUL7PH3dOys3D807aV6Wp2ldA",
    link: "https://www.youtube.com/embed/dGJ51V5OPy0",
    heading: "Привітання з ВЕЛИКОДНЕМ!",
    subheading: "ХРИСТОС Воскрес!",
    category: "7",
  },
  {
    id: 13,
    img: "https://i9.ytimg.com/vi_webp/XrwUxcr-RNI/maxresdefault.webp?v=625e847a&sqp=CMCf9ZsG&rs=AOn4CLBS-GTkSVQje7aFfzwzGFzeCVKHAA",
    link: "https://www.youtube.com/embed/XrwUxcr-RNI",
    heading: "Два СУПЕР-САЛАТИ за 5 хвилин 🥗",
    subheading: "для жіночої КРАСИ та ЗДОРОВ'Я. 🥕🍏🥬",
    category: "6",
  },
  {
    id: 14,
    img: "https://i9.ytimg.com/vi_webp/HF2dXaUxVnw/sddefault.webp?v=625334da&sqp=COyh9ZsG&rs=AOn4CLBd1qQXITFKfKZI-wB79cth0rEfQg",
    link: "https://www.youtube.com/embed/HF2dXaUxVnw",
    heading: "ТОП 3 начинки для ВАРЕНИКІВ",
    subheading: "ТІСТО, що не розварюється🥟🥟🥟",
    category: "1, 2",
  },
  {
    id: 15,
    img: "https://i9.ytimg.com/vi_webp/IHL9qLNiceA/maxresdefault.webp?v=624acd51&sqp=COyh9ZsG&rs=AOn4CLD9EFvmF_3T4uJ3nDyDC24xiNCrJA",
    link: "https://www.youtube.com/embed/IHL9qLNiceA",
    heading: "Експрес - ВІДБИВНІ без Смаження на сковороді",
    subheading: "ШВИДКО та ЕКОНОМНО🥩",
    category: "2",
  },
  {
    id: 16,
    img: "https://i9.ytimg.com/vi_webp/6E04A_tvnEw/maxresdefault.webp?v=62430ed6&sqp=COyh9ZsG&rs=AOn4CLABqJyEEKS-xbKQtVfU3asIqp-kug",
    link: "https://www.youtube.com/embed/6E04A_tvnEw",
    heading: "Гречана СМАКОТА з картопляними Кльоцками🥣🥔",
    subheading: "Гречаний суп із кльоцками",
    category: "3",
  },
  {
    id: 17,
    img: "https://i9.ytimg.com/vi/P0_DtB_GXuQ/maxresdefault.jpg?v=620e5bf9&sqp=COyh9ZsG&rs=AOn4CLAy4xEF42gK4TelXvV1S7DLc4twfw",
    link: "https://www.youtube.com/embed/P0_DtB_GXuQ",
    heading: "🍊🍋Цитрусові цукати",
    subheading: "випічка на ВЕЛИКДЕНЬ 🍊🍋",
    category: "5",
  },
  {
    id: 18,
    img: "https://i9.ytimg.com/vi_webp/ZWA_FzCjnI0/maxresdefault.webp?v=6328bddf&sqp=CLCD9ZsG&rs=AOn4CLDi8FQRKpn8CS9XJG-0Rpt-4F2w9Q",
    link: "https://www.youtube.com/embed/ZWA_FzCjnI0",
    heading: "ОБЗОР та ВІДГУК на морозильну камеру Vestfrost CMF144W",
    subheading: "Чесний відгук",
    category: "7",
  },
  // {
  //   id: 10,
  //   img: "",
  //   link: "",
  //   heading: "",
  //   subheading: "",
  //   category: "",
  // },
];

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

createVideos(videoArray);

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
  createVideos(videoArray);
}

function nextPage() {
  currentPageStart += 6;
  currentPageEnd += 6;
  if (filteredArray.length > 0) createVideos(filteredArray);
  else createVideos(videoArray);
}

function previousPage() {
  currentPageStart -= 6;
  currentPageEnd -= 6;
  createVideos(videoArray);
}

function filterVideos(e) {
  currentFilter = e.target;
  filteredArray = [...videoArray].filter((video) =>
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
    if (currentPageEnd >= videoArray.length)
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
