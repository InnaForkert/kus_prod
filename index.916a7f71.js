!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire8436;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire8436=i),i.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),i("iE7OH").register(JSON.parse('{"9herP":"index.916a7f71.js","e8UEs":"menu-hinkali.973a3081.jpg"}'));var o;o=i("aNJCr").getBundleURL("9herP")+i("iE7OH").resolve("e8UEs");const a=[{id:1,img:"https://i9.ytimg.com/vi/sleryK4X4S8/maxresdefault.jpg?v=63617803&sqp=CNT39JsG&rs=AOn4CLAA93NPRCYs6D3yAPI2aoInKXzy-w",alt:"Відео-рецепт приготування пельменів",link:"https://www.youtube.com/embed/sleryK4X4S8",heading:"Пельмені",subheading:"ІДЕАЛЬНЕ тісто + соковита начинка❗Домашні пельмені ❗",category:"1"},{id:2,img:"https://i9.ytimg.com/vi_webp/mB0RmAnJuXU/maxresdefault.webp?v=637a05af&sqp=CID69JsG&rs=AOn4CLBWZax5FOVo1jjwcEzZNpswQHyPog",alt:"Відео-рецепт приготування фаршированих курячих стегон",link:"https://www.youtube.com/embed/mB0RmAnJuXU",heading:"Фаршировані Стегенця",subheading:"🍗Бюджетно та по-Святковому 🎄",category:"2"},{id:3,img:"https://i9.ytimg.com/vi_webp/cxQhBzr7Cvk/maxresdefault.webp?v=63487248&sqp=CID69JsG&rs=AOn4CLBsUiS_se0Qcie05RiYzz91837zAw",alt:"Відео-рецепт приготування хінкалі",link:"https://www.youtube.com/embed/cxQhBzr7Cvk",heading:"🔴ХІНКАЛІ на вашій кухні",subheading:"Грузинська смакота з Українським акцентом💛💙",category:"1"},{id:4,img:new URL(o),alt:"Відео-рецепт приготування хінкалі",link:"https://www.youtube.com/embed/sleryK4X4S8",heading:"Пельмені",subheading:"Найсмачніший рецепт",category:"4"}];console.log(a[0].img);const c=document.querySelector("#videoGallery"),l=document.querySelector("#videoModal"),s=document.querySelector(".video-modal"),u=document.querySelector(".modal-icon"),d=document.querySelector("#previous"),f=document.querySelector("#next"),m=document.querySelectorAll(".filter-item");let g,v;function p(e){h([...a].filter((t=>t.category===e.target.dataset.category)))}function h(e){const t=e.map((e=>`<div class="gallery-item">\n                <img\n                  src="${e.img}"\n                  alt="${e.alt}"\n                  data-link="${e.link}"\n                />\n                <div class="gallery-item-caption">\n                  <div>\n                    <h2>${e.heading}</h2>\n                    <p><${e.subheading}</p>\n                  </div>\n                </div>\n              </div>`));c.innerHTML=t.join("");document.querySelectorAll(".gallery-item").forEach((e=>e.addEventListener("click",y)))}function y(e){e.preventDefault(),l.setAttribute("src",e.currentTarget.children[0].dataset.link),s.classList.remove("visually-hidden"),v=e.currentTarget}function b(e){g&&g.classList.remove("active-filter"),g=e.target,g.classList.add("active-filter")}h(a),m.forEach((e=>{e.addEventListener("click",b)})),u.addEventListener("click",(function(){s.classList.add("visually-hidden")})),f.addEventListener("click",(function(e){l.setAttribute("src",v.nextElementSibling.children[0].dataset.link),v=v.nextElementSibling})),d.addEventListener("click",(function(e){l.setAttribute("src",v.previousElementSibling.children[0].dataset.link),v=v.previousElementSibling})),m.forEach((e=>e.addEventListener("click",p)))}();
//# sourceMappingURL=index.916a7f71.js.map
