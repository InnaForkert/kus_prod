const cursor = document.querySelector(".cursor");
const cursorinner = document.querySelector(".cursor2");
const a = document.querySelectorAll("a");

(function createCursor() {
  document.addEventListener(
    "mousemove",
    function (e) {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    },
    { passive: true }
  );

  document.addEventListener(
    "mousemove",
    function (e) {
      const x = e.clientX;
      const y = e.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    },
    { passive: true }
  );

  document.addEventListener(
    "mousedown",
    function () {
      cursor.classList.add("click");
      cursorinner.classList.add("cursorinnerhover");
    },
    { passive: true }
  );

  document.addEventListener(
    "mouseup",
    function () {
      cursor.classList.remove("click");
      cursorinner.classList.remove("cursorinnerhover");
    },
    { passive: true }
  );

  a.forEach((item) => {
    item.addEventListener(
      "mouseover",
      () => {
        cursor.classList.add("hover");
      },
      { passive: true }
    );
    item.addEventListener(
      "mouseleave",
      () => {
        cursor.classList.remove("hover");
      },
      { passive: true }
    );
  });
})();
