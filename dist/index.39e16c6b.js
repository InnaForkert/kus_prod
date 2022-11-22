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
})({"2a4br":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ae5124d439e16c6b";
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

},{}],"7n5Iu":[function(require,module,exports) {
const videoArray = [
    {
        id: 1,
        img: "https://i9.ytimg.com/vi/sleryK4X4S8/maxresdefault.jpg?v=63617803&sqp=CNT39JsG&rs=AOn4CLAA93NPRCYs6D3yAPI2aoInKXzy-w",
        link: "https://www.youtube.com/embed/sleryK4X4S8",
        heading: "Пельмені",
        subheading: "ІДЕАЛЬНЕ тісто + соковита начинка❗Домашні пельмені ❗",
        category: "1, 2"
    },
    {
        id: 2,
        img: "https://i9.ytimg.com/vi_webp/mB0RmAnJuXU/maxresdefault.webp?v=637a05af&sqp=CID69JsG&rs=AOn4CLBWZax5FOVo1jjwcEzZNpswQHyPog",
        link: "https://www.youtube.com/embed/mB0RmAnJuXU",
        heading: "Фаршировані Стегенця",
        subheading: "\uD83C\uDF57Бюджетно та по-Святковому \uD83C\uDF84",
        category: "2"
    },
    {
        id: 3,
        img: "https://i9.ytimg.com/vi_webp/cxQhBzr7Cvk/maxresdefault.webp?v=63487248&sqp=CID69JsG&rs=AOn4CLBsUiS_se0Qcie05RiYzz91837zAw",
        link: "https://www.youtube.com/embed/cxQhBzr7Cvk",
        heading: "\uD83D\uDD34ХІНКАЛІ на вашій кухні",
        subheading: "Грузинська смакота з Українським акцентом\uD83D\uDC9B\uD83D\uDC99",
        category: "1, 2"
    },
    {
        id: 4,
        img: "https://i9.ytimg.com/vi/f00Nm0q9Q5w/maxresdefault.jpg?v=6335f00e&sqp=CISB9ZsG&rs=AOn4CLAlF2LyzyiochDoA8xPlX1jccI3VA",
        link: "https://www.youtube.com/embed/f00Nm0q9Q5w",
        heading: "\uD83E\uDDE1Найяскравіший СУП цієї ОСЕНІ",
        subheading: "\uD83C\uDF42/ pumpkin soup\uD83E\uDD58",
        category: "3"
    },
    {
        id: 5,
        img: "https://i9.ytimg.com/vi/VwI54d-rThQ/maxresdefault.jpg?v=63117f8b&sqp=CLCD9ZsG&rs=AOn4CLAnVVD4sTNNX1Ng9ByR7hn2-rBlSA",
        link: "https://www.youtube.com/embed/VwI54d-rThQ",
        heading: "Штрулі",
        subheading: "НАПІВФАБРИКАТИ для особливого випадку \uD83E\uDD5FЯк усе встигнути \uD83D\uDC68‍\uD83C\uDF73",
        category: "1, 2"
    },
    {
        id: 6,
        img: "https://i9.ytimg.com/vi/Bz5lxckxeoo/maxresdefault.jpg?v=62f6b211&sqp=CNyF9ZsG&rs=AOn4CLC7g12-gdxuGuQiQNHbzzzLWQNGFg",
        link: "https://www.youtube.com/embed/Bz5lxckxeoo",
        heading: "ТОП 5 Найкрасивіших булочок",
        subheading: "\uD83E\uDD68Проста та зручна формовка",
        category: "4, 5"
    },
    {
        id: 7,
        img: "https://i9.ytimg.com/vi_webp/VVMcesPAWiM/maxresdefault.webp?v=62e20f72&sqp=COia9ZsG&rs=AOn4CLDGO5HK5vt0JKdjGV01WM9p99oWow",
        link: "https://www.youtube.com/embed/VVMcesPAWiM",
        heading: "\uD83D\uDD34ГОЛУБЦІ",
        subheading: "Всі тонкощі приготування та ТОП 3 способи закрутки (швидко і просто)❗",
        category: "1, 2"
    },
    {
        id: 8,
        img: "https://i9.ytimg.com/vi_webp/k412HWe9vFQ/maxresdefault.webp?v=62cb28c2&sqp=COia9ZsG&rs=AOn4CLDWeaakS6ojCqfHzip4r1Z-Gc2_Kg",
        link: "https://www.youtube.com/embed/k412HWe9vFQ",
        heading: "Ласуй, та Не Думай про Калорії ❗",
        subheading: "Корисний Перекус, що можна взяти з собою в дорогу",
        category: "5"
    },
    {
        id: 9,
        img: "https://i9.ytimg.com/vi_webp/WtE1Et_gM8Y/maxresdefault.webp?v=629265c2&sqp=CJSd9ZsG&rs=AOn4CLDoJSYkydRtFdN5g9U7GtjHCwiGbA",
        link: "https://www.youtube.com/embed/WtE1Et_gM8Y",
        heading: "ХАЧАПУРІ",
        subheading: "Експрес ХАЧАПУРІ за 10 хвилин\uD83C\uDF55\uD83E\uDD6E",
        category: "2, 4"
    },
    {
        id: 10,
        img: "https://i9.ytimg.com/vi_webp/TZiPAKqxioY/maxresdefault.webp?v=627c2650&sqp=CMCf9ZsG&rs=AOn4CLCja8CddqHkJeE4wUH86QDtyC7YKQ",
        link: "https://www.youtube.com/embed/TZiPAKqxioY",
        heading: "\uD83D\uDD34ТОП 3 рецепти як смачно приготувати курячі сердечка",
        subheading: "НИЗЬКОКАЛОРІЙНІША частина курки.\uD83C\uDF57",
        category: "2"
    },
    {
        id: 11,
        img: "https://i9.ytimg.com/vi/0mqnbl613uM/maxresdefault.jpg?v=626ed71e&sqp=CMCf9ZsG&rs=AOn4CLCrBrCRlHEPGjVYBshqFp3M76gBeg",
        link: "https://www.youtube.com/embed/0mqnbl613uM",
        heading: "Курячий рулет з Клюквою\uD83C\uDF52",
        subheading: "Неймовірна СМАКОТА!",
        category: "2"
    },
    {
        id: 12,
        img: "https://i9.ytimg.com/vi_webp/dGJ51V5OPy0/maxresdefault.webp?v=6262ba38&sqp=CMCf9ZsG&rs=AOn4CLBwfRUL7PH3dOys3D807aV6Wp2ldA",
        link: "https://www.youtube.com/embed/dGJ51V5OPy0",
        heading: "Привітання з ВЕЛИКОДНЕМ!",
        subheading: "ХРИСТОС Воскрес!",
        category: "7"
    },
    {
        id: 13,
        img: "https://i9.ytimg.com/vi_webp/XrwUxcr-RNI/maxresdefault.webp?v=625e847a&sqp=CMCf9ZsG&rs=AOn4CLBS-GTkSVQje7aFfzwzGFzeCVKHAA",
        link: "https://www.youtube.com/embed/XrwUxcr-RNI",
        heading: "Два СУПЕР-САЛАТИ за 5 хвилин \uD83E\uDD57",
        subheading: "для жіночої КРАСИ та ЗДОРОВ'Я. \uD83E\uDD55\uD83C\uDF4F\uD83E\uDD6C",
        category: "6"
    },
    {
        id: 14,
        img: "https://i9.ytimg.com/vi_webp/HF2dXaUxVnw/sddefault.webp?v=625334da&sqp=COyh9ZsG&rs=AOn4CLBd1qQXITFKfKZI-wB79cth0rEfQg",
        link: "https://www.youtube.com/embed/HF2dXaUxVnw",
        heading: "ТОП 3 начинки для ВАРЕНИКІВ",
        subheading: "ТІСТО, що не розварюється\uD83E\uDD5F\uD83E\uDD5F\uD83E\uDD5F",
        category: "1, 2"
    },
    {
        id: 15,
        img: "https://i9.ytimg.com/vi_webp/IHL9qLNiceA/maxresdefault.webp?v=624acd51&sqp=COyh9ZsG&rs=AOn4CLD9EFvmF_3T4uJ3nDyDC24xiNCrJA",
        link: "https://www.youtube.com/embed/IHL9qLNiceA",
        heading: "Експрес - ВІДБИВНІ без Смаження на сковороді",
        subheading: "ШВИДКО та ЕКОНОМНО\uD83E\uDD69",
        category: "2"
    },
    {
        id: 16,
        img: "https://i9.ytimg.com/vi_webp/6E04A_tvnEw/maxresdefault.webp?v=62430ed6&sqp=COyh9ZsG&rs=AOn4CLABqJyEEKS-xbKQtVfU3asIqp-kug",
        link: "https://www.youtube.com/embed/6E04A_tvnEw",
        heading: "Гречана СМАКОТА з картопляними Кльоцками\uD83E\uDD63\uD83E\uDD54",
        subheading: "Гречаний суп із кльоцками",
        category: "3"
    },
    {
        id: 17,
        img: "https://i9.ytimg.com/vi/P0_DtB_GXuQ/maxresdefault.jpg?v=620e5bf9&sqp=COyh9ZsG&rs=AOn4CLAy4xEF42gK4TelXvV1S7DLc4twfw",
        link: "https://www.youtube.com/embed/P0_DtB_GXuQ",
        heading: "\uD83C\uDF4A\uD83C\uDF4BЦитрусові цукати",
        subheading: "випічка на ВЕЛИКДЕНЬ \uD83C\uDF4A\uD83C\uDF4B",
        category: "5"
    },
    {
        id: 18,
        img: "https://i9.ytimg.com/vi_webp/ZWA_FzCjnI0/maxresdefault.webp?v=6328bddf&sqp=CLCD9ZsG&rs=AOn4CLDi8FQRKpn8CS9XJG-0Rpt-4F2w9Q",
        link: "https://www.youtube.com/embed/ZWA_FzCjnI0",
        heading: "ОБЗОР та ВІДГУК на морозильну камеру Vestfrost CMF144W",
        subheading: "Чесний відгук",
        category: "7"
    }
];
const videoGallery = document.querySelector("#videoGallery");
const videoModal = document.querySelector("#videoModal");
const overflow = document.querySelector(".video-modal");
const modal = document.querySelector(".modal");
const modalIcon = document.querySelector(".modal-icon");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const filters = document.querySelectorAll(".filter-item");
let currentFilter;
let currentDiv;
createVideos(videoArray);
filters.forEach((filter)=>{
    filter.addEventListener("click", handleFilter);
});
modalIcon.addEventListener("click", videoClose);
next.addEventListener("click", nextVideo);
previous.addEventListener("click", previousVideo);
filters.forEach((filter)=>filter.addEventListener("click", filterVideos));
function filterVideos(e) {
    const filteredArray = [
        ...videoArray
    ].filter((video)=>video.category.includes(e.target.dataset.category));
    createVideos(filteredArray);
}
function createVideos(arr) {
    const marcup = arr.map((video)=>{
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
    modal.classList.add("hidden-opacity");
    overflow.classList.add("visually-hidden");
    document.removeEventListener("keydown", videoKeyHandler);
}
function videoPopup(e) {
    e.preventDefault();
    videoModal.setAttribute("src", e.currentTarget.children[0].dataset.link);
    modal.classList.remove("hidden-opacity");
    overflow.classList.remove("visually-hidden");
    currentDiv = e.currentTarget;
    document.addEventListener("keydown", videoKeyHandler);
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

},{}]},["2a4br","7n5Iu"], "7n5Iu", "parcelRequire8436")

//# sourceMappingURL=index.39e16c6b.js.map
