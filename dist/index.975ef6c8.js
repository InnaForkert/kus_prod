// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _cursor = require("./scripts/cursor");
var _menu = require("./scripts/menu");
var _mobileMenu = require("./scripts/mobileMenu");
var _videos = require("./scripts/videos");
var _showFilter = require("./scripts/showFilter");
var _topTop = require("./scripts/topTop");
var _aos = require("./scripts/aos");

},{"./scripts/cursor":"46TGa","./scripts/menu":"iDcOQ","./scripts/mobileMenu":"1OFUP","./scripts/videos":"7n5Iu","./scripts/showFilter":"dXhsG","./scripts/topTop":"kll1L","./scripts/aos":"d4i0M"}],"46TGa":[function(require,module,exports) {
const cursor = document.querySelector(".cursor");
const cursorinner = document.querySelector(".cursor2");
const a = document.querySelectorAll("a");
(function createCursor() {
    document.addEventListener("mousemove", function(e) {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    });
    document.addEventListener("mousemove", function(e) {
        const x = e.clientX;
        const y = e.clientY;
        cursorinner.style.left = x + "px";
        cursorinner.style.top = y + "px";
    });
    document.addEventListener("mousedown", function() {
        cursor.classList.add("click");
        cursorinner.classList.add("cursorinnerhover");
    });
    document.addEventListener("mouseup", function() {
        cursor.classList.remove("click");
        cursorinner.classList.remove("cursorinnerhover");
    });
    a.forEach((item)=>{
        item.addEventListener("mouseover", ()=>{
            cursor.classList.add("hover");
        });
        item.addEventListener("mouseleave", ()=>{
            cursor.classList.remove("hover");
        });
    });
})();

},{}],"iDcOQ":[function(require,module,exports) {
const cards = document.querySelectorAll(".card");
cards.forEach((card)=>card.addEventListener("click", handleCardClick));
cards.forEach((card)=>card.addEventListener("touchend", handleCardClick));
function handleCardClick(e) {
    console.log(e);
    this.classList.toggle("rotated");
}

},{}],"1OFUP":[function(require,module,exports) {
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const circles = document.querySelectorAll(".mobile-menu-btn svg");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
mobileMenuBtn.addEventListener("click", openMobileMenu);
mobileMenuLinks.forEach((link)=>{
    link.addEventListener("click", closeMobileMenu);
});
function openMobileMenu() {
    mobileMenu.classList.remove("mobile-menu-onClose");
    circles[1].classList.add("move-top");
    circles[3].classList.add("move-left");
    circles[5].classList.add("move-right");
    circles[7].classList.add("move-bottom");
    mobileMenuBtn.removeEventListener("click", openMobileMenu);
    mobileMenuBtn.addEventListener("click", closeMobileMenu);
}
function closeMobileMenu() {
    mobileMenu.classList.add("mobile-menu-onClose");
    circles[1].classList.remove("move-top");
    circles[3].classList.remove("move-left");
    circles[5].classList.remove("move-right");
    circles[7].classList.remove("move-bottom");
    mobileMenuBtn.addEventListener("click", openMobileMenu);
    mobileMenuBtn.removeEventListener("click", closeMobileMenu);
}

},{}],"7n5Iu":[function(require,module,exports) {
var _videoArray = require("./videoArray");
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
const sortedArray = (0, _videoArray.videoArray).sort((a, b)=>b.id - a.id);
createVideos(sortedArray);
filters.forEach((filter)=>{
    filter.addEventListener("click", handleFilter);
});
modalIcon.addEventListener("click", videoClose);
next.addEventListener("click", nextVideo);
previous.addEventListener("click", previousVideo);
filters.forEach((filter)=>filter.addEventListener("click", filterVideos));
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
    filteredArray = [
        ...sortedArray
    ].filter((video)=>video.category.includes(currentFilter.dataset.category));
    createVideos(filteredArray);
}
function createVideos(arr) {
    const marcup = arr.map((video, idx)=>{
        if (idx >= currentPageStart && idx < currentPageEnd) return `<div class="gallery-item">
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
    });
    videoGallery.innerHTML = marcup.join("");
    const videos = document.querySelectorAll(".gallery-item");
    videos.forEach((video)=>video.addEventListener("click", videoPopup));
    if (currentPageStart > 0 && left.classList) left.classList.remove("visually-hidden");
    else left.classList.add("visually-hidden");
    if (filteredArray.length > 0) {
        if (currentPageEnd >= filteredArray.length) right.classList.add("visually-hidden");
        else right.classList.remove("visually-hidden");
    } else if (currentPageEnd >= sortedArray.length) right.classList.add("visually-hidden");
    else right.classList.remove("visually-hidden");
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
    if (e.key === "Escape") videoClose();
    else if (e.key === "ArrowRight") nextVideo();
    else if (e.key === "ArrowRight") previousVideo();
}
function handleFilter(e) {
    currentFilter && currentFilter.classList.remove("active-filter");
    currentFilter = e.target;
    currentFilter.classList.add("active-filter");
}

},{"./videoArray":"faMc4"}],"faMc4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "videoArray", ()=>videoArray);
const videoArray = [
    {
        id: 18,
        img: new URL(require("75737fcdb6bf2459")),
        link: "https://www.youtube.com/embed/sleryK4X4S8",
        heading: "Пельмені",
        subheading: "ІДЕАЛЬНЕ тісто + соковита начинка❗Домашні пельмені ❗",
        category: "1, 2"
    },
    {
        id: 17,
        img: new URL(require("4576fc15b2366e8c")),
        link: "https://www.youtube.com/embed/mB0RmAnJuXU",
        heading: "Фаршировані Стегенця",
        subheading: "\uD83C\uDF57Бюджетно та по-Святковому \uD83C\uDF84",
        category: "2"
    },
    {
        id: 16,
        img: new URL(require("75c79cebcd1fae5b")),
        link: "https://www.youtube.com/embed/cxQhBzr7Cvk",
        heading: "\uD83D\uDD34ХІНКАЛІ на вашій кухні",
        subheading: "Грузинська смакота з Українським акцентом\uD83D\uDC9B\uD83D\uDC99",
        category: "1, 2"
    },
    {
        id: 15,
        img: new URL(require("53bbfd72a04c1a28")),
        link: "https://www.youtube.com/embed/f00Nm0q9Q5w",
        heading: "\uD83E\uDDE1Найяскравіший СУП цієї ОСЕНІ",
        subheading: "\uD83C\uDF42/ pumpkin soup\uD83E\uDD58",
        category: "3"
    },
    {
        id: 14,
        img: new URL(require("e779213691e38212")),
        link: "https://www.youtube.com/embed/VwI54d-rThQ",
        heading: "Штрулі",
        subheading: "НАПІВФАБРИКАТИ для особливого випадку \uD83E\uDD5FЯк усе встигнути \uD83D\uDC68‍\uD83C\uDF73",
        category: "1, 2"
    },
    {
        id: 13,
        img: new URL(require("b759997499ad4121")),
        link: "https://www.youtube.com/embed/Bz5lxckxeoo",
        heading: "ТОП 5 Найкрасивіших булочок",
        subheading: "\uD83E\uDD68Проста та зручна формовка",
        category: "4, 5"
    },
    {
        id: 12,
        img: new URL(require("9fcf07e86ee004c9")),
        link: "https://www.youtube.com/embed/VVMcesPAWiM",
        heading: "\uD83D\uDD34ГОЛУБЦІ",
        subheading: "Всі тонкощі приготування та ТОП 3 способи закрутки (швидко і просто)❗",
        category: "1, 2"
    },
    {
        id: 11,
        img: "https://i9.ytimg.com/vi_webp/k412HWe9vFQ/maxresdefault.webp?v=62cb28c2&sqp=COia9ZsG&rs=AOn4CLDWeaakS6ojCqfHzip4r1Z-Gc2_Kg",
        link: "https://www.youtube.com/embed/k412HWe9vFQ",
        heading: "Ласуй, та Не Думай про Калорії ❗",
        subheading: "Корисний Перекус, що можна взяти з собою в дорогу",
        category: "5"
    },
    {
        id: 10,
        img: "https://i9.ytimg.com/vi_webp/WtE1Et_gM8Y/maxresdefault.webp?v=629265c2&sqp=CJSd9ZsG&rs=AOn4CLDoJSYkydRtFdN5g9U7GtjHCwiGbA",
        link: "https://www.youtube.com/embed/WtE1Et_gM8Y",
        heading: "ХАЧАПУРІ",
        subheading: "Експрес ХАЧАПУРІ за 10 хвилин\uD83C\uDF55\uD83E\uDD6E",
        category: "2, 4"
    },
    {
        id: 9,
        img: "https://i9.ytimg.com/vi_webp/TZiPAKqxioY/maxresdefault.webp?v=627c2650&sqp=CMCf9ZsG&rs=AOn4CLCja8CddqHkJeE4wUH86QDtyC7YKQ",
        link: "https://www.youtube.com/embed/TZiPAKqxioY",
        heading: "\uD83D\uDD34ТОП 3 рецепти як смачно приготувати курячі сердечка",
        subheading: "НИЗЬКОКАЛОРІЙНІША частина курки.\uD83C\uDF57",
        category: "2"
    },
    {
        id: 8,
        img: "https://i9.ytimg.com/vi/0mqnbl613uM/maxresdefault.jpg?v=626ed71e&sqp=CMCf9ZsG&rs=AOn4CLCrBrCRlHEPGjVYBshqFp3M76gBeg",
        link: "https://www.youtube.com/embed/0mqnbl613uM",
        heading: "Курячий рулет з Клюквою\uD83C\uDF52",
        subheading: "Неймовірна СМАКОТА!",
        category: "2"
    },
    {
        id: 7,
        img: "https://i9.ytimg.com/vi_webp/dGJ51V5OPy0/maxresdefault.webp?v=6262ba38&sqp=CMCf9ZsG&rs=AOn4CLBwfRUL7PH3dOys3D807aV6Wp2ldA",
        link: "https://www.youtube.com/embed/dGJ51V5OPy0",
        heading: "Привітання з ВЕЛИКОДНЕМ!",
        subheading: "ХРИСТОС Воскрес!",
        category: "7"
    },
    {
        id: 6,
        img: "https://i9.ytimg.com/vi_webp/XrwUxcr-RNI/maxresdefault.webp?v=625e847a&sqp=CMCf9ZsG&rs=AOn4CLBS-GTkSVQje7aFfzwzGFzeCVKHAA",
        link: "https://www.youtube.com/embed/XrwUxcr-RNI",
        heading: "Два СУПЕР-САЛАТИ за 5 хвилин \uD83E\uDD57",
        subheading: "для жіночої КРАСИ та ЗДОРОВ'Я. \uD83E\uDD55\uD83C\uDF4F\uD83E\uDD6C",
        category: "6"
    },
    {
        id: 5,
        img: "https://i9.ytimg.com/vi_webp/HF2dXaUxVnw/sddefault.webp?v=625334da&sqp=COyh9ZsG&rs=AOn4CLBd1qQXITFKfKZI-wB79cth0rEfQg",
        link: "https://www.youtube.com/embed/HF2dXaUxVnw",
        heading: "ТОП 3 начинки для ВАРЕНИКІВ",
        subheading: "ТІСТО, що не розварюється\uD83E\uDD5F\uD83E\uDD5F\uD83E\uDD5F",
        category: "1, 2"
    },
    {
        id: 4,
        img: "https://i9.ytimg.com/vi_webp/IHL9qLNiceA/maxresdefault.webp?v=624acd51&sqp=COyh9ZsG&rs=AOn4CLD9EFvmF_3T4uJ3nDyDC24xiNCrJA",
        link: "https://www.youtube.com/embed/IHL9qLNiceA",
        heading: "Експрес - ВІДБИВНІ без Смаження на сковороді",
        subheading: "ШВИДКО та ЕКОНОМНО\uD83E\uDD69",
        category: "2"
    },
    {
        id: 3,
        img: "https://i9.ytimg.com/vi_webp/6E04A_tvnEw/maxresdefault.webp?v=62430ed6&sqp=COyh9ZsG&rs=AOn4CLABqJyEEKS-xbKQtVfU3asIqp-kug",
        link: "https://www.youtube.com/embed/6E04A_tvnEw",
        heading: "Гречана СМАКОТА з картопляними Кльоцками\uD83E\uDD63\uD83E\uDD54",
        subheading: "Гречаний суп із кльоцками",
        category: "3"
    },
    {
        id: 2,
        img: "https://i9.ytimg.com/vi/P0_DtB_GXuQ/maxresdefault.jpg?v=620e5bf9&sqp=COyh9ZsG&rs=AOn4CLAy4xEF42gK4TelXvV1S7DLc4twfw",
        link: "https://www.youtube.com/embed/P0_DtB_GXuQ",
        heading: "\uD83C\uDF4A\uD83C\uDF4BЦитрусові цукати",
        subheading: "випічка на ВЕЛИКДЕНЬ \uD83C\uDF4A\uD83C\uDF4B",
        category: "5"
    },
    {
        id: 1,
        img: "https://i9.ytimg.com/vi_webp/ZWA_FzCjnI0/maxresdefault.webp?v=6328bddf&sqp=CLCD9ZsG&rs=AOn4CLDi8FQRKpn8CS9XJG-0Rpt-4F2w9Q",
        link: "https://www.youtube.com/embed/ZWA_FzCjnI0",
        heading: "ОБЗОР та ВІДГУК на морозильну камеру Vestfrost CMF144W",
        subheading: "Чесний відгук",
        category: "7"
    },
    {
        id: 19,
        img: new URL(require("5e4060326ee85f5f")),
        link: "https://www.youtube.com/embed/5pKsJYTyYj0",
        heading: "\uD83D\uDD34ТОП 3 незвичайних закусок зі звичайного Оселедця ❗",
        subheading: "ЩОСЬ НОВЕНЬКЕ на святковий стіл\uD83C\uDF84 ❗",
        category: "7"
    }
];

},{"75737fcdb6bf2459":"dDma7","4576fc15b2366e8c":"lfM5l","75c79cebcd1fae5b":"gb6sq","53bbfd72a04c1a28":"hZ9ha","e779213691e38212":"kxjVA","b759997499ad4121":"dlEAF","9fcf07e86ee004c9":"8Kh4d","5e4060326ee85f5f":"a87io","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDma7":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "video_pelmeni.29a879a7.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"lfM5l":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "video_rulet.aa506d55.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gb6sq":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "video_hinkali.6e68ccfa.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"hZ9ha":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "video_soup.9e5f1e4b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kxjVA":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "video_shtruli.8be55829.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dlEAF":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "video_pancakes.7474821d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8Kh4d":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "video_holubzi.5f465f15.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"a87io":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bLxZJ") + "video_buters.8e52b56a.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dXhsG":[function(require,module,exports) {
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

},{}],"kll1L":[function(require,module,exports) {
let mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", topFunction);
window.onscroll = function() {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) mybutton.style.display = "block";
    else mybutton.style.display = "none";
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

},{}],"d4i0M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _aos = require("aos");
var _aosDefault = parcelHelpers.interopDefault(_aos);
var _aosCss = require("aos/dist/aos.css"); // You can also use <link> for styles
(0, _aosDefault.default).init();

},{"aos":"eRzTM","aos/dist/aos.css":"iYkXi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRzTM":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0);
    }([
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            var i = Object.assign || function(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = arguments[t];
                    for(var o in n)Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
            }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            }, j = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
            }, O = function() {
                w = (0, h.default)(), j();
            }, M = function() {
                w.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                });
            }, S = function(e) {
                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
            }, _ = function(e) {
                x = i(x, e), w = (0, h.default)();
                var t = document.all && !window.atob;
                return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && [
                    "complete",
                    "interactive"
                ].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                    j(!0);
                }) : document.addEventListener(x.startEvent, function() {
                    j(!0);
                }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                    (0, b.default)(w, x.once);
                }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
            };
            e.exports = {
                init: _,
                refresh: j,
                refreshHard: O
            };
        },
        function(e, t) {},
        ,
        ,
        ,
        ,
        function(e, t) {
            (function(t) {
                "use strict";
                function n(e, t, n) {
                    function o(t) {
                        var n = b, o = v;
                        return b = v = void 0, k = t, g = e.apply(o, n);
                    }
                    function r(e) {
                        return k = e, h = setTimeout(f, t), M ? o(e) : g;
                    }
                    function a(e) {
                        var n = e - w, o = e - k, i = t - n;
                        return S ? j(i, y - o) : i;
                    }
                    function c(e) {
                        var n = e - w, o = e - k;
                        return void 0 === w || n >= t || n < 0 || S && o >= y;
                    }
                    function f() {
                        var e = O();
                        return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                    }
                    function d(e) {
                        return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return void 0 === h ? g : d(O());
                    }
                    function m() {
                        var e = O(), n = c(e);
                        if (b = arguments, v = this, w = e, n) {
                            if (void 0 === h) return r(w);
                            if (S) return h = setTimeout(f, t), o(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b, v, y, g, h, w, k = 0, M = !1, S = !1, _ = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o(e, t, o) {
                    var r = !0, a = !0;
                    if ("function" != typeof e) throw new TypeError(s);
                    return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: a
                    });
                }
                function i(e) {
                    var t = "undefined" == typeof e ? "undefined" : c(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function r(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                }
                function a(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
                }
                function u(e) {
                    if ("number" == typeof e) return e;
                    if (a(e)) return f;
                    if (i(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(l, "");
                    var n = m.test(e);
                    return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
                }
                var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
                    return h.Date.now();
                };
                e.exports = o;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t) {
            (function(t) {
                "use strict";
                function n(e, t, n) {
                    function i(t) {
                        var n = b, o = v;
                        return b = v = void 0, O = t, g = e.apply(o, n);
                    }
                    function r(e) {
                        return O = e, h = setTimeout(f, t), M ? i(e) : g;
                    }
                    function u(e) {
                        var n = e - w, o = e - O, i = t - n;
                        return S ? x(i, y - o) : i;
                    }
                    function s(e) {
                        var n = e - w, o = e - O;
                        return void 0 === w || n >= t || n < 0 || S && o >= y;
                    }
                    function f() {
                        var e = j();
                        return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                    }
                    function d(e) {
                        return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return void 0 === h ? g : d(j());
                    }
                    function m() {
                        var e = j(), n = s(e);
                        if (b = arguments, v = this, w = e, n) {
                            if (void 0 === h) return r(w);
                            if (S) return h = setTimeout(f, t), i(w);
                        }
                        return void 0 === h && (h = setTimeout(f, t)), g;
                    }
                    var b, v, y, g, h, w, O = 0, M = !1, S = !1, _ = !0;
                    if ("function" != typeof e) throw new TypeError(c);
                    return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o(e) {
                    var t = "undefined" == typeof e ? "undefined" : u(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function i(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                }
                function r(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
                }
                function a(e) {
                    if ("number" == typeof e) return e;
                    if (r(e)) return s;
                    if (o(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var n = p.test(e);
                    return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
                }
                var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
                    return g.Date.now();
                };
                e.exports = n;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t) {
            "use strict";
            function n(e) {
                var t = void 0, o = void 0, i = void 0;
                for(t = 0; t < e.length; t += 1){
                    if (o = e[t], o.dataset && o.dataset.aos) return !0;
                    if (i = o.children && n(o.children)) return !0;
                }
                return !1;
            }
            function o() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            }
            function i() {
                return !!o();
            }
            function r(e, t) {
                var n = window.document, i = o(), r = new i(a);
                u = t, r.observe(n.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                });
            }
            function a(e) {
                e && e.forEach(function(e) {
                    var t = Array.prototype.slice.call(e.addedNodes), o = Array.prototype.slice.call(e.removedNodes), i = t.concat(o);
                    if (n(i)) return u();
                });
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = function() {};
            t.default = {
                isSupported: i,
                ready: r
            };
        },
        function(e, t) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o() {
                return navigator.userAgent || navigator.vendor || window.opera || "";
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function() {
                function e(e, t) {
                    for(var n = 0; n < t.length; n++){
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t;
                };
            }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
                function e() {
                    n(this, e);
                }
                return i(e, [
                    {
                        key: "phone",
                        value: function() {
                            var e = o();
                            return !(!r.test(e) && !a.test(e.substr(0, 4)));
                        }
                    },
                    {
                        key: "mobile",
                        value: function() {
                            var e = o();
                            return !(!u.test(e) && !c.test(e.substr(0, 4)));
                        }
                    },
                    {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone();
                        }
                    }
                ]), e;
            }();
            t.default = new s;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e, t, n) {
                var o = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
            }, o = function(e, t) {
                var o = window.pageYOffset, i = window.innerHeight;
                e.forEach(function(e, r) {
                    n(e, i + o, t);
                });
            };
            t.default = o;
        },
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(12), r = o(i), a = function(e, t) {
                return e.forEach(function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
                }), e;
            };
            t.default = a;
        },
        function(e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(13), r = o(i), a = function(e, t) {
                var n = 0, o = 0, i = window.innerHeight, a = {
                    offset: e.getAttribute("data-aos-offset"),
                    anchor: e.getAttribute("data-aos-anchor"),
                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                };
                switch(a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement){
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += i / 2;
                        break;
                    case "bottom-center":
                        n += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += i;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + i;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + i;
                }
                return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
            };
            t.default = a;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                for(var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);)t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: n,
                    left: t
                };
            };
            t.default = n;
        },
        function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                    return {
                        node: e
                    };
                });
            };
            t.default = n;
        }
    ]);
});

},{}],"iYkXi":[function() {},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire8436")

//# sourceMappingURL=index.975ef6c8.js.map
