function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequire8436;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequire8436=r),r.register("kyEFX",(function(t,n){var i,o;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.a381c3d9.js","5WEWX":"video_pelmeni.b9da6776.jpg","dFQF6":"video_rulet.9defa5ad.jpg","sNsFy":"video_hinkali.eaa52bb9.jpg","0vW5c":"video_soup.6497e3c8.jpg","gY92g":"video_shtruli.91e991b8.jpg","93M9c":"video_pancakes.0e7a8ac2.jpg","3vST9":"video_holubzi.25dc224f.jpg","6I8rz":"lasui.b07479b3.webp","kkYpb":"hachapuri.abd4e0a6.webp","d3MLI":"hearts.255156c4.webp","l0mn5":"hen.23db6e1e.jpg","gZCQu":"easter.0657e65a.webp","ktDaU":"salads.04aac112.webp","2Jr0I":"vareniki2.78557174.webp","ajQLy":"beat.4cbe1a9b.webp","2TUyD":"hrecha.3771c592.webp","kQtOn":"citrus.577917cb.jpg","8uqk1":"freeze.8dea1d75.webp","fX1HZ":"video_buters.4262385c.jpg","gZiHN":"vareniki.3ebc86bb.webp","1tq1q":"benderyky.ab353674.webp","brnXY":"index.a8dec3ea.css"}'));const a=document.querySelector(".cursor"),c=document.querySelector(".cursor2"),d=document.querySelectorAll("a");document.addEventListener("mousemove",(function(e){const t=e.clientX,n=e.clientY;a.style.transform=`translate3d(calc(${t}px - 50%), calc(${n}px - 50%), 0)`}),{passive:!0}),document.addEventListener("mousemove",(function(e){const t=e.clientX,n=e.clientY;c.style.left=t+"px",c.style.top=n+"px"}),{passive:!0}),document.addEventListener("mousedown",(function(){a.classList.add("click"),c.classList.add("cursorinnerhover")}),{passive:!0}),document.addEventListener("mouseup",(function(){a.classList.remove("click"),c.classList.remove("cursorinnerhover")}),{passive:!0}),d.forEach((e=>{e.addEventListener("mouseover",(()=>{a.classList.add("hover")}),{passive:!0}),e.addEventListener("mouseleave",(()=>{a.classList.remove("hover")}),{passive:!0})}));const l=document.querySelectorAll(".card");function s(e){"BUTTON"!==e.target.nodeName&&this.classList.toggle("rotated")}l.forEach((e=>e.addEventListener("click",s))),l.forEach((e=>e.addEventListener("touch",s)));const u=document.querySelector(".mobile-menu"),m=document.querySelector(".mobile-menu-btn"),f=document.querySelectorAll(".mobile-menu-btn svg"),v=document.querySelectorAll(".mobile-menu-link");function p(){u.classList.remove("mobile-menu-onClose"),f[1].classList.add("move-top"),f[3].classList.add("move-left"),f[5].classList.add("move-right"),f[7].classList.add("move-bottom"),m.removeEventListener("click",p),m.addEventListener("click",g)}function g(){u.classList.add("mobile-menu-onClose"),f[1].classList.remove("move-top"),f[3].classList.remove("move-left"),f[5].classList.remove("move-right"),f[7].classList.remove("move-bottom"),m.addEventListener("click",p),m.removeEventListener("click",g)}m.addEventListener("click",p),v.forEach((e=>{e.addEventListener("click",g)}));var y;y=new URL(r("kyEFX").resolve("5WEWX"),import.meta.url).toString();var b;b=new URL(r("kyEFX").resolve("dFQF6"),import.meta.url).toString();var h;h=new URL(r("kyEFX").resolve("sNsFy"),import.meta.url).toString();var w;w=new URL(r("kyEFX").resolve("0vW5c"),import.meta.url).toString();var k;k=new URL(r("kyEFX").resolve("gY92g"),import.meta.url).toString();var L;L=new URL(r("kyEFX").resolve("93M9c"),import.meta.url).toString();var E;E=new URL(r("kyEFX").resolve("3vST9"),import.meta.url).toString();var S;S=new URL(r("kyEFX").resolve("6I8rz"),import.meta.url).toString();var _;_=new URL(r("kyEFX").resolve("kkYpb"),import.meta.url).toString();var x;x=new URL(r("kyEFX").resolve("d3MLI"),import.meta.url).toString();var R;R=new URL(r("kyEFX").resolve("l0mn5"),import.meta.url).toString();var H;H=new URL(r("kyEFX").resolve("gZCQu"),import.meta.url).toString();var q;q=new URL(r("kyEFX").resolve("ktDaU"),import.meta.url).toString();var F;F=new URL(r("kyEFX").resolve("2Jr0I"),import.meta.url).toString();var j;j=new URL(r("kyEFX").resolve("ajQLy"),import.meta.url).toString();var A;A=new URL(r("kyEFX").resolve("2TUyD"),import.meta.url).toString();var O;O=new URL(r("kyEFX").resolve("kQtOn"),import.meta.url).toString();var U;U=new URL(r("kyEFX").resolve("8uqk1"),import.meta.url).toString();var M;M=new URL(r("kyEFX").resolve("fX1HZ"),import.meta.url).toString();var T;T=new URL(r("kyEFX").resolve("gZiHN"),import.meta.url).toString();var X;X=new URL(r("kyEFX").resolve("1tq1q"),import.meta.url).toString();const z=[{id:18,img:new URL(y),link:"sleryK4X4S8",heading:"Пельмені",subheading:"ІДЕАЛЬНЕ тісто + соковита начинка❗Домашні пельмені ❗",category:"1, 2"},{id:17,img:new URL(b),link:"mB0RmAnJuXU",heading:"Фаршировані Стегенця",subheading:"🍗Бюджетно та по-Святковому 🎄",category:"2"},{id:16,img:new URL(h),link:"cxQhBzr7Cvk",heading:"🔴ХІНКАЛІ на вашій кухні",subheading:"Грузинська смакота з Українським акцентом💛💙",category:"1, 2"},{id:15,img:new URL(w),link:"f00Nm0q9Q5w",heading:"🧡Найяскравіший СУП цієї ОСЕНІ",subheading:"🍂/ pumpkin soup🥘",category:"3"},{id:14,img:new URL(k),link:"VwI54d-rThQ",heading:"Штрулі",subheading:"НАПІВФАБРИКАТИ для особливого випадку 🥟Як усе встигнути 👨‍🍳",category:"1, 2"},{id:13,img:new URL(L),link:"Bz5lxckxeoo",heading:"ТОП 5 Найкрасивіших булочок",subheading:"🥨Проста та зручна формовка",category:"4, 5"},{id:12,img:new URL(E),link:"VVMcesPAWiM",heading:"🔴ГОЛУБЦІ",subheading:"Всі тонкощі приготування та ТОП 3 способи закрутки (швидко і просто)❗",category:"1, 2"},{id:11,img:new URL(S),link:"k412HWe9vFQ",heading:"Ласуй, та Не Думай про Калорії ❗",subheading:"Корисний Перекус, що можна взяти з собою в дорогу",category:"5"},{id:10,img:new URL(_),link:"WtE1Et_gM8Y",heading:"ХАЧАПУРІ",subheading:"Експрес ХАЧАПУРІ за 10 хвилин🍕🥮",category:"2, 4"},{id:9,img:new URL(x),link:"TZiPAKqxioY",heading:"🔴ТОП 3 рецепти як смачно приготувати курячі сердечка",subheading:"НИЗЬКОКАЛОРІЙНІША частина курки.🍗",category:"2"},{id:8,img:new URL(R),link:"0mqnbl613uM",heading:"Курячий рулет з Клюквою🍒",subheading:"Неймовірна СМАКОТА!",category:"2"},{id:7,img:new URL(H),link:"dGJ51V5OPy0",heading:"Привітання з ВЕЛИКОДНЕМ!",subheading:"ХРИСТОС Воскрес!",category:"7"},{id:6,img:new URL(q),link:"XrwUxcr-RNI",heading:"Два СУПЕР-САЛАТИ за 5 хвилин 🥗",subheading:"для жіночої КРАСИ та ЗДОРОВ'Я. 🥕🍏🥬",category:"6"},{id:5,img:new URL(F),link:"HF2dXaUxVnw",heading:"ТОП 3 начинки для ВАРЕНИКІВ",subheading:"ТІСТО, що не розварюється🥟🥟🥟",category:"1, 2"},{id:4,img:new URL(j),link:"IHL9qLNiceA",heading:"Експрес - ВІДБИВНІ без Смаження на сковороді",subheading:"ШВИДКО та ЕКОНОМНО🥩",category:"2"},{id:3,img:new URL(A),link:"6E04A_tvnEw",heading:"Гречана СМАКОТА з картопляними Кльоцками🥣🥔",subheading:"Гречаний суп із кльоцками",category:"3"},{id:2,img:new URL(O),link:"P0_DtB_GXuQ",heading:"🍊🍋Цитрусові цукати",subheading:"випічка на ВЕЛИКДЕНЬ 🍊🍋",category:"5"},{id:1,img:new URL(U),link:"ZWA_FzCjnI0",heading:"ОБЗОР та ВІДГУК на морозильну камеру Vestfrost CMF144W",subheading:"Чесний відгук",category:"7"},{id:19,img:new URL(M),link:"5pKsJYTyYj0",heading:"🔴ТОП 3 незвичайних закусок зі звичайного Оселедця ❗",subheading:"ЩОСЬ НОВЕНЬКЕ на святковий стіл🎄 ❗",category:"7"},{id:20,img:new URL(T),link:"_H80tr01h7g",heading:"🔴ТОП 3 Способи 'Як защипнути вареники'",subheading:"🥟 Фігурне ліплення ВАРЕНИКІВ",category:"1, 2"},{id:21,img:new URL(X),link:"-7nlh0Mowc0",heading:"Українські БЕНДЕРИКИ🥞 ",subheading:"Смачні , Ситні та Бюджетні 💰",category:"1, 2"}],N=document.querySelector("#videoGallery"),P=document.querySelector("#videoModal"),D=document.querySelector(".video-modal"),I=document.querySelector(".modal"),$=document.querySelector(".modal-icon"),W=document.querySelector("#previous"),Y=document.querySelector("#next"),Q=document.querySelectorAll(".filter-item"),C=document.querySelector(".right"),B=document.querySelector(".left"),Z=document.querySelector("#allVideos"),K=document.querySelector(".iframeDiv");let G,V,J=0,ee=6,te=[];const ne=z.sort(((e,t)=>t.id-e.id));function ie(e){G=e.target,te=[...ne].filter((e=>e.category.includes(G.dataset.category))),oe(te)}function oe(e){const t=e.map(((e,t)=>{if(t>=J&&t<ee)return`<div class="gallery-item">\n      <img\n      src="${e.img}"\n      alt="${e.subheading}"\n      data-link="${e.link}"\n      />\n      <div class="gallery-item-caption">\n      <div>\n      <h2>${e.heading}</h2>\n      <p>${e.subheading}</p>\n      </div>\n      </div>\n      </div>`}));N.innerHTML=t.join("");document.querySelectorAll(".gallery-item").forEach((e=>e.addEventListener("click",le))),J>0&&B.classList?B.classList.remove("visually-hidden"):B.classList.add("visually-hidden"),te.length>0?ee>=te.length?C.classList.add("visually-hidden"):C.classList.remove("visually-hidden"):ee>=ne.length?C.classList.add("visually-hidden"):C.classList.remove("visually-hidden")}function re(e){K.innerHTML=`\n  <lite-youtube\n        id="videoModal"\n        class="iframe"\n        videoid="${V.nextElementSibling.children[0].dataset.link}"\n        playlabel="Play: Keynote (Google I/O '18)"\n        title='відео рецепт'\n      ></lite-youtube>`,V=V.nextElementSibling}function ae(e){K.innerHTML=`\n   <lite-youtube\n        id="videoModal"\n        class="iframe"\n        videoid="${V.previousElementSibling.children[0].dataset.link}"\n        playlabel="Play: Keynote (Google I/O '18)"\n      ></lite-youtube>`,V=V.previousElementSibling}function ce(){I.classList.add("hidden-opacity"),D.classList.add("visually-hidden"),document.removeEventListener("keydown",se),D.removeEventListener("click",de),P.setAttribute("src","#")}function de(e){e.target===e.currentTarget&&ce()}function le(e){e.preventDefault(),K.innerHTML=`\n  <lite-youtube\n        id="videoModal"\n        class="iframe"\n        videoid="${e.currentTarget.children[0].dataset.link}"\n        playlabel="Play: Keynote (Google I/O '18)"\n      ></lite-youtube>`,I.classList.remove("hidden-opacity"),D.classList.remove("visually-hidden"),V=e.currentTarget,document.addEventListener("keydown",se),D.addEventListener("click",de)}function se(e){"Escape"===e.key?ce():"ArrowRight"===e.key?re():"ArrowRight"===e.key&&ae()}function ue(e){G&&G.classList.remove("active-filter"),G=e.target,G.classList.add("active-filter")}oe(ne),Q.forEach((e=>{e.addEventListener("click",ue)})),$.addEventListener("click",ce),Y.addEventListener("click",re),W.addEventListener("click",ae),Q.forEach((e=>e.addEventListener("click",ie))),C.addEventListener("click",(function(){J+=6,ee+=6,te.length>0?oe(te):oe(ne)})),B.addEventListener("click",(function(){J-=6,ee-=6,oe(ne)})),Z.addEventListener("click",(function(){te=[],ee=6,J=0,console.log(ne),oe(ne)}));const me=document.querySelector(".show-filter"),fe=document.querySelector(".video-filter");function ve(){me.classList.add("show"),me.innerText="<",me.removeEventListener("click",ve),me.addEventListener("click",pe),fe.classList.add("show-filter-onclick")}function pe(){me.classList.remove("show"),me.innerText=">",me.addEventListener("click",ve),me.removeEventListener("click",pe),fe.classList.remove("show-filter-onclick")}me.addEventListener("click",ve);let ge=document.getElementById("myBtn");ge.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})),window.addEventListener("scroll",(function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?ge.style.display="block":ge.style.display="none"}),{passive:!0});t(function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=(i(n(1)),n(6)),a=i(r),c=i(n(7)),d=i(n(8)),l=i(n(9)),s=i(n(10)),u=i(n(11)),m=i(n(14)),f=[],v=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},g=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(v=!0),v)return f=(0,u.default)(f,p),(0,s.default)(f,p.once),f},y=function(){f=(0,m.default)(),g()},b=function(){f.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},h=function(e){return!0===e||"mobile"===e&&l.default.mobile()||"phone"===e&&l.default.phone()||"tablet"===e&&l.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){p=o(p,e),f=(0,m.default)();var t=document.all&&!window.atob;return h(p.disable)||t?b():(p.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),p.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),"DOMContentLoaded"===p.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?g(!0):"load"===p.startEvent?window.addEventListener(p.startEvent,(function(){g(!0)})):document.addEventListener(p.startEvent,(function(){g(!0)})),window.addEventListener("resize",(0,c.default)(g,p.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(g,p.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,s.default)(f,p.once)}),p.throttleDelay)),p.disableMutationObserver||d.default.ready("[data-aos]",y),f)};e.exports={init:w,refresh:g,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){function n(e,t,n){function i(t){var n=p,i=g;return p=g=void 0,S=t,b=e.apply(i,n)}function r(e){return S=e,h=setTimeout(s,t),_?i(e):b}function a(e){var n=t-(e-w);return x?L(n,y-(e-S)):n}function d(e){var n=e-w;return void 0===w||n>=t||n<0||x&&e-S>=y}function s(){var e=E();return d(e)?u(e):void(h=setTimeout(s,a(e)))}function u(e){return h=void 0,R&&p?i(e):(p=g=void 0,b)}function m(){void 0!==h&&clearTimeout(h),S=0,p=w=g=h=void 0}function f(){return void 0===h?b:u(E())}function v(){var e=E(),n=d(e);if(p=arguments,g=this,w=e,n){if(void 0===h)return r(w);if(x)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),b}var p,g,y,b,h,w,S=0,_=!1,x=!1,R=!0;if("function"!=typeof e)throw new TypeError(l);return t=c(t)||0,o(n)&&(_=!!n.leading,y=(x="maxWait"in n)?k(c(n.maxWait)||0,t):y,R="trailing"in n?!!n.trailing:R),v.cancel=m,v.flush=f,v}function i(e,t,i){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(l);return o(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function o(e){var t=void 0===e?"undefined":d(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(void 0===e?"undefined":d(e))}function a(e){return"symbol"==(void 0===e?"undefined":d(e))||r(e)&&w.call(e)==u}function c(e){if("number"==typeof e)return e;if(a(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=v.test(e);return n||p.test(e)?g(e.slice(2),n?2:8):f.test(e)?s:+e}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",s=NaN,u="[object Symbol]",m=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,p=/^0o[0-7]+$/i,g=parseInt,y="object"==(void 0===t?"undefined":d(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":d(self))&&self&&self.Object===Object&&self,h=y||b||Function("return this")(),w=Object.prototype.toString,k=Math.max,L=Math.min,E=function(){return h.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){(function(t){function n(e,t,n){function o(t){var n=p,i=g;return p=g=void 0,S=t,b=e.apply(i,n)}function r(e){return S=e,h=setTimeout(s,t),_?o(e):b}function c(e){var n=t-(e-E);return x?k(n,y-(e-S)):n}function l(e){var n=e-E;return void 0===E||n>=t||n<0||x&&e-S>=y}function s(){var e=L();return l(e)?u(e):void(h=setTimeout(s,c(e)))}function u(e){return h=void 0,R&&p?o(e):(p=g=void 0,b)}function m(){void 0!==h&&clearTimeout(h),S=0,p=E=g=h=void 0}function f(){return void 0===h?b:u(L())}function v(){var e=L(),n=l(e);if(p=arguments,g=this,E=e,n){if(void 0===h)return r(E);if(x)return h=setTimeout(s,t),o(E)}return void 0===h&&(h=setTimeout(s,t)),b}var p,g,y,b,h,E,S=0,_=!1,x=!1,R=!0;if("function"!=typeof e)throw new TypeError(d);return t=a(t)||0,i(n)&&(_=!!n.leading,y=(x="maxWait"in n)?w(a(n.maxWait)||0,t):y,R="trailing"in n?!!n.trailing:R),v.cancel=m,v.flush=f,v}function i(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function r(e){return"symbol"==(void 0===e?"undefined":c(e))||o(e)&&h.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||v.test(e)?p(e.slice(2),n?2:8):m.test(e)?l:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",l=NaN,s="[object Symbol]",u=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,v=/^0o[0-7]+$/i,p=parseInt,g="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,b=g||y||Function("return this")(),h=Object.prototype.toString,w=Math.max,k=Math.min,L=function(){return b.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){function n(e){var t=void 0,i=void 0;for(t=0;t<e.length;t+=1){if((i=e[t]).dataset&&i.dataset.aos)return!0;if(i.children&&n(i.children))return!0}return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!i()}function r(e,t){var n=window.document,o=new(i())(a);c=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(i)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:o,ready:r}},function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){n(this,e)}return o(e,[{key:"phone",value:function(){var e=i();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!c.test(e)&&!d.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!n&&"true"!==i)&&e.node.classList.remove("aos-animate")},i=function(e,t){var i=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,r){n(e,o+i,t)}))};t.default=i},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(12)),r=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e};t.default=r},function(e,t,n){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(13)),r=function(e,t){var n=0,i=0,r=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(i=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,o.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=r/2;break;case"bottom-center":n+=r/2+e.offsetHeight;break;case"center-center":n+=r/2+e.offsetHeight/2;break;case"top-top":n+=r;break;case"bottom-top":n+=e.offsetHeight+r;break;case"center-top":n+=e.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(t)||(i=t),n+i};t.default=r},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])).init();const ye=document.querySelector(".hero-btn"),be=document.querySelector(".menu-modal"),he=document.querySelector(".menu-inner-modal"),we=document.querySelector(".closePrices");function ke(){be.classList.add("visually-hidden"),he.classList.add("hidden-opacity"),be.removeEventListener("click",Le),document.removeEventListener("keydown",Ee),we.removeEventListener("click",ke)}function Le(e){e.target===e.currentTarget&&ke()}function Ee(e){"Escape"===e.key&&ke()}ye.addEventListener("click",(function(){be.classList.remove("visually-hidden"),he.classList.remove("hidden-opacity"),be.addEventListener("click",Le),document.addEventListener("keydown",Ee),we.addEventListener("click",ke)}));const Se=document.querySelector(".video-modal"),_e=document.querySelector(".modal"),xe=document.querySelectorAll("[data-card]"),Re=document.querySelector(".iframeDiv"),He=document.querySelector("#previous"),qe=document.querySelector("#next");function Fe(e){Re.innerHTML=`\n  <lite-youtube\n        id="videoModal"\n        class="iframe"\n        videoid="${e.target.dataset.card}"\n        playlabel="Play: Keynote (Google I/O '18)"\n        title='відео рецепт'\n      ></lite-youtube>`,_e.classList.remove("hidden-opacity"),Se.classList.remove("visually-hidden"),document.addEventListener("keydown",je),Se.addEventListener("click",Oe),He.classList.add("visually-hidden"),qe.classList.add("visually-hidden")}function je(e){"Escape"===e.key&&Ae()}function Ae(){_e.classList.add("hidden-opacity"),Se.classList.add("visually-hidden"),document.removeEventListener("keydown",je),Se.removeEventListener("click",Oe),He.classList.remove("visually-hidden"),qe.classList.remove("visually-hidden"),Re.innerHTML=""}function Oe(e){e.target===e.currentTarget&&Ae()}xe.forEach((e=>{e.addEventListener("click",Fe)}));
//# sourceMappingURL=index.a381c3d9.js.map