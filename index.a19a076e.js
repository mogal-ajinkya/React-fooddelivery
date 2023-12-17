function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire164e"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire164e"] = parcelRequire;
}
parcelRequire.register("hosjB", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $ca9aa45f09f75750$export$6503ec6e8aabbaf; }, function (v) { return $ca9aa45f09f75750$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $ca9aa45f09f75750$export$f7ad0328861e2f03; }, function (v) { return $ca9aa45f09f75750$export$f7ad0328861e2f03 = v; });
var $ca9aa45f09f75750$export$6503ec6e8aabbaf;
var $ca9aa45f09f75750$export$f7ad0328861e2f03;
"use strict";
var $ca9aa45f09f75750$var$mapping = {};
function $ca9aa45f09f75750$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$ca9aa45f09f75750$var$mapping[keys[i]] = pairs[keys[i]];
}
function $ca9aa45f09f75750$var$resolve(id) {
    var resolved = $ca9aa45f09f75750$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$ca9aa45f09f75750$export$6503ec6e8aabbaf = $ca9aa45f09f75750$var$register;
$ca9aa45f09f75750$export$f7ad0328861e2f03 = $ca9aa45f09f75750$var$resolve;

});

var $dad47b50982253b1$exports = {};

(parcelRequire("hosjB")).register(JSON.parse('{"l00c3":"index.a14e7e64.js","1VZ11":"food-villa-logo.bc21d0d5.jpg","2ebIJ":"Instamart.7bf5f6ff.js"}'));


//# sourceMappingURL=index.a19a076e.js.map
