// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
var _console, _console2;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// 変数
// var
// var val1 = "var変数";
// console.log(val1);
// val1 = "var変数を上書き";
// console.log(val1);
// var val1 = "var変数を再宣言";
// console.log(val1);
// let
// let val2 = "let変数";
// console.log(val2);
// val2 = "let変数を上書き";
// // let val2 = "let変数を再宣言";
// const
// const val3 = "const変数";
// console.log(val3);
// val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";
var val4 = {
  name: "たろう",
  age: 26
};
val4.name = "じろう";
console.log(val4);
var val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5); // テンプレート文字列

var name2 = "たろう";
var age2 = 26;
var message1 = "私の名前は" + name2 + "です。年齢は" + age2 + "です。";
console.log(message1);
var message2 = "\u79C1\u306E\u540D\u524D\u306F".concat(name2, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(age2, "\u3067\u3059\u3002");
console.log(message2); // アロー関数
// function func1(str) {
//   return str;
// }

var func1 = function func1(str) {
  return str;
};

console.log(func1("func1です。"));

var func2 = function func2(str) {
  return str;
};

console.log(func2("func2です。"));

var func3 = function func3(num1, num2) {
  return num1 + num2;
};

console.log(func3(10, 20)); // 分割代入

var myProfile = {
  name3: "たろう",
  age3: 26
};
var message3 = "\u540D\u524D\u306F".concat(myProfile.name3, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(myProfile.age3, "\u6B73\u3067\u3059\u3002");
console.log(message3);
var name3 = myProfile.name3,
    age3 = myProfile.age3;
var message4 = "\u540D\u524D\u306F".concat(name3, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(age3, "\u6B73\u3067\u3059\u3002");
console.log(message4);
var myProfile2 = ["たろう", 26];
var message5 = "\u540D\u524D\u306F".concat(myProfile2[0], "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(myProfile2[1], "\u6B73\u3067\u3059\u3002");
console.log(message5);
var name4 = myProfile2[0],
    age4 = myProfile2[1];
var message6 = "\u540D\u524D\u306F".concat(name4, "\u3067\u3059\u3002\u5E74\u9F62\u306F").concat(age4, "\u6B73\u3067\u3059\u3002");
console.log(message6); // デフォルト値

var sayHello = function sayHello() {
  var name5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ゲストさん";
  return console.log("\u3053\u3093\u306B\u3061\u306F\uFF01".concat(name5, "\u3055\u3093!"));
};

sayHello("たろう");
sayHello(); // スプレッド構文
// 1.配列の展開

var arr1 = [1, 2];
console.log(arr1);

(_console = console).log.apply(_console, arr1);

var sumFunc = function sumFunc(num3, num4) {
  return console.log(num3 + num4);
};

sumFunc(arr1[0], arr1[1]);
sumFunc.apply(void 0, arr1); // 2.まとめる

var arr2 = [1, 2, 3, 4, 5];
var num5 = arr2[0],
    num6 = arr2[1],
    arr3 = arr2.slice(2);
console.log(num5);
console.log(num6);
console.log(arr3);

(_console2 = console).log.apply(_console2, _toConsumableArray(arr3)); // 3.配列のコピー、結合


var arr4 = [10, 20];
var arr5 = [30, 40];
var arr6 = [].concat(arr4);
console.log(arr6);
var arr7 = [].concat(arr4, arr5);
console.log(arr7);
var arr8 = arr4;
arr8[0] = 100;
console.log(arr8);
arr7[3] = 100;
console.log(arr7);
console.log(arr5); // map,filterの配列処理

var nameArr = ["田中", "山田", "佐藤"];

for (var index = 0; index < nameArr.length; index++) {
  console.log("".concat(index + 1, "\u756A\u76EE\u306F\u3001").concat(nameArr[index], "\u3067\u3059"));
} // const nameArr2 = nameArr.map((name6) => {
//   return name6;
// });
// console.log(...nameArr2);


nameArr.map(function (name7, index) {
  return console.log("".concat(index + 1, "\u756A\u76EE\u306F\u3001").concat(name7, "\u3067\u3059\u3002"));
});
var numArr = [1, 2, 3, 4, 5];
var newNumArr = numArr.filter(function (num7) {
  return num7 % 2 === 0;
});
console.log(newNumArr);
var newNameArr = nameArr.map(function (name8) {
  if (name8 === "田中") {
    return name8;
  } else {
    return name8 + "さん";
  }
});
console.log(newNameArr);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45001" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map