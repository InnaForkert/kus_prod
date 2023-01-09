const overflow = document.querySelector(".video-modal");
const modal = document.querySelector(".modal");
const buttons = document.querySelectorAll("[data-card]");
const iframe = document.querySelector(".iframeDiv");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

buttons.forEach((button) => {
  button.addEventListener("click", openVideo);
});

function openVideo(e) {
  iframe.innerHTML = `
  <lite-youtube
        id="videoModal"
        class="iframe"
        videoid="${e.target.dataset.card}"
        playlabel="Play: Keynote (Google I/O '18)"
      ></lite-youtube>`;
  modal.classList.remove("hidden-opacity");
  overflow.classList.remove("visually-hidden");
  document.addEventListener("keydown", videoKeyHandler);
  overflow.addEventListener("click", videoCloseOnOverflowClick);
  previous.classList.add("visually-hidden");
  next.classList.add("visually-hidden");
}

function videoKeyHandler(e) {
  if (e.key === "Escape") {
    videoClose();
  }
}

function videoClose() {
  modal.classList.add("hidden-opacity");
  overflow.classList.add("visually-hidden");
  document.removeEventListener("keydown", videoKeyHandler);
  overflow.removeEventListener("click", videoCloseOnOverflowClick);
  previous.classList.remove("visually-hidden");
  next.classList.remove("visually-hidden");
  iframe.innerHTML = "";
}

function videoCloseOnOverflowClick(e) {
  if (e.target === e.currentTarget) videoClose();
}
