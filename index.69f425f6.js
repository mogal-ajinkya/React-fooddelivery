(function () {
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
parcelRequire.register("cRJCa", function(module, exports) {

$parcel$export(module.exports, "register", function () { return $95ddd1655deba3a5$export$6503ec6e8aabbaf; }, function (v) { return $95ddd1655deba3a5$export$6503ec6e8aabbaf = v; });
$parcel$export(module.exports, "resolve", function () { return $95ddd1655deba3a5$export$f7ad0328861e2f03; }, function (v) { return $95ddd1655deba3a5$export$f7ad0328861e2f03 = v; });
var $95ddd1655deba3a5$export$6503ec6e8aabbaf;
var $95ddd1655deba3a5$export$f7ad0328861e2f03;
"use strict";
var $95ddd1655deba3a5$var$mapping = {};
function $95ddd1655deba3a5$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$95ddd1655deba3a5$var$mapping[keys[i]] = pairs[keys[i]];
}
function $95ddd1655deba3a5$var$resolve(id) {
    var resolved = $95ddd1655deba3a5$var$mapping[id];
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return resolved;
}
$95ddd1655deba3a5$export$6503ec6e8aabbaf = $95ddd1655deba3a5$var$register;
$95ddd1655deba3a5$export$f7ad0328861e2f03 = $95ddd1655deba3a5$var$resolve;

});

var $b686c9222dce6422$exports = {};

(parcelRequire("cRJCa")).register(JSON.parse('{"2HnvE":"index.6a44c129.js","gnDrR":"food-villa-logo.bc21d0d5.jpg","b35Kq":"Instamart.e26d5f96.js"}'));

})();
//# sourceMappingURL=index.69f425f6.js.map
