function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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
parcelRequire.register("9Yj41", function(module, exports) {
"use strict";

module.exports = (parcelRequire("lLQ5D"));

});
parcelRequire.register("lLQ5D", function(module, exports) {

$parcel$export(module.exports, "Fragment", function () { return $fd9664c0527f8161$export$ffb0004e005737fa; }, function (v) { return $fd9664c0527f8161$export$ffb0004e005737fa = v; });
$parcel$export(module.exports, "jsx", function () { return $fd9664c0527f8161$export$34b9dba7ce09269b; }, function (v) { return $fd9664c0527f8161$export$34b9dba7ce09269b = v; });
$parcel$export(module.exports, "jsxs", function () { return $fd9664c0527f8161$export$25062201e9e25d76; }, function (v) { return $fd9664c0527f8161$export$25062201e9e25d76 = v; });
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $fd9664c0527f8161$export$ffb0004e005737fa;
var $fd9664c0527f8161$export$34b9dba7ce09269b;
var $fd9664c0527f8161$export$25062201e9e25d76;
"use strict";

var $an5iK = parcelRequire("an5iK");
var $fd9664c0527f8161$var$k = Symbol.for("react.element"), $fd9664c0527f8161$var$l = Symbol.for("react.fragment"), $fd9664c0527f8161$var$m = Object.prototype.hasOwnProperty, $fd9664c0527f8161$var$n = $an5iK.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $fd9664c0527f8161$var$p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $fd9664c0527f8161$var$q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)$fd9664c0527f8161$var$m.call(a, b) && !$fd9664c0527f8161$var$p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: $fd9664c0527f8161$var$k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: $fd9664c0527f8161$var$n.current
    };
}
$fd9664c0527f8161$export$ffb0004e005737fa = $fd9664c0527f8161$var$l;
$fd9664c0527f8161$export$34b9dba7ce09269b = $fd9664c0527f8161$var$q;
$fd9664c0527f8161$export$25062201e9e25d76 = $fd9664c0527f8161$var$q;

});
parcelRequire.register("an5iK", function(module, exports) {
"use strict";

module.exports = (parcelRequire("kneQQ"));

});
parcelRequire.register("kneQQ", function(module, exports) {

$parcel$export(module.exports, "Children", function () { return $ed5179c75cc0196c$export$dca3b0875bd9a954; }, function (v) { return $ed5179c75cc0196c$export$dca3b0875bd9a954 = v; });
$parcel$export(module.exports, "Component", function () { return $ed5179c75cc0196c$export$16fa2f45be04daa8; }, function (v) { return $ed5179c75cc0196c$export$16fa2f45be04daa8 = v; });
$parcel$export(module.exports, "Fragment", function () { return $ed5179c75cc0196c$export$ffb0004e005737fa; }, function (v) { return $ed5179c75cc0196c$export$ffb0004e005737fa = v; });
$parcel$export(module.exports, "Profiler", function () { return $ed5179c75cc0196c$export$e2c29f18771995cb; }, function (v) { return $ed5179c75cc0196c$export$e2c29f18771995cb = v; });
$parcel$export(module.exports, "PureComponent", function () { return $ed5179c75cc0196c$export$221d75b3f55bb0bd; }, function (v) { return $ed5179c75cc0196c$export$221d75b3f55bb0bd = v; });
$parcel$export(module.exports, "StrictMode", function () { return $ed5179c75cc0196c$export$5f8d39834fd61797; }, function (v) { return $ed5179c75cc0196c$export$5f8d39834fd61797 = v; });
$parcel$export(module.exports, "Suspense", function () { return $ed5179c75cc0196c$export$74bf444e3cd11ea5; }, function (v) { return $ed5179c75cc0196c$export$74bf444e3cd11ea5 = v; });
$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function () { return $ed5179c75cc0196c$export$ae55be85d98224ed; }, function (v) { return $ed5179c75cc0196c$export$ae55be85d98224ed = v; });
$parcel$export(module.exports, "cloneElement", function () { return $ed5179c75cc0196c$export$e530037191fcd5d7; }, function (v) { return $ed5179c75cc0196c$export$e530037191fcd5d7 = v; });
$parcel$export(module.exports, "createContext", function () { return $ed5179c75cc0196c$export$fd42f52fd3ae1109; }, function (v) { return $ed5179c75cc0196c$export$fd42f52fd3ae1109 = v; });
$parcel$export(module.exports, "createElement", function () { return $ed5179c75cc0196c$export$c8a8987d4410bf2d; }, function (v) { return $ed5179c75cc0196c$export$c8a8987d4410bf2d = v; });
$parcel$export(module.exports, "createFactory", function () { return $ed5179c75cc0196c$export$d38cd72104c1f0e9; }, function (v) { return $ed5179c75cc0196c$export$d38cd72104c1f0e9 = v; });
$parcel$export(module.exports, "createRef", function () { return $ed5179c75cc0196c$export$7d1e3a5e95ceca43; }, function (v) { return $ed5179c75cc0196c$export$7d1e3a5e95ceca43 = v; });
$parcel$export(module.exports, "forwardRef", function () { return $ed5179c75cc0196c$export$257a8862b851cb5b; }, function (v) { return $ed5179c75cc0196c$export$257a8862b851cb5b = v; });
$parcel$export(module.exports, "isValidElement", function () { return $ed5179c75cc0196c$export$a8257692ac88316c; }, function (v) { return $ed5179c75cc0196c$export$a8257692ac88316c = v; });
$parcel$export(module.exports, "lazy", function () { return $ed5179c75cc0196c$export$488013bae63b21da; }, function (v) { return $ed5179c75cc0196c$export$488013bae63b21da = v; });
$parcel$export(module.exports, "memo", function () { return $ed5179c75cc0196c$export$7c73462e0d25e514; }, function (v) { return $ed5179c75cc0196c$export$7c73462e0d25e514 = v; });
$parcel$export(module.exports, "startTransition", function () { return $ed5179c75cc0196c$export$7568632d0d33d16d; }, function (v) { return $ed5179c75cc0196c$export$7568632d0d33d16d = v; });
$parcel$export(module.exports, "unstable_act", function () { return $ed5179c75cc0196c$export$88948ce120ea2619; }, function (v) { return $ed5179c75cc0196c$export$88948ce120ea2619 = v; });
$parcel$export(module.exports, "useCallback", function () { return $ed5179c75cc0196c$export$35808ee640e87ca7; }, function (v) { return $ed5179c75cc0196c$export$35808ee640e87ca7 = v; });
$parcel$export(module.exports, "useContext", function () { return $ed5179c75cc0196c$export$fae74005e78b1a27; }, function (v) { return $ed5179c75cc0196c$export$fae74005e78b1a27 = v; });
$parcel$export(module.exports, "useDebugValue", function () { return $ed5179c75cc0196c$export$dc8fbce3eb94dc1e; }, function (v) { return $ed5179c75cc0196c$export$dc8fbce3eb94dc1e = v; });
$parcel$export(module.exports, "useDeferredValue", function () { return $ed5179c75cc0196c$export$6a7bc4e911dc01cf; }, function (v) { return $ed5179c75cc0196c$export$6a7bc4e911dc01cf = v; });
$parcel$export(module.exports, "useEffect", function () { return $ed5179c75cc0196c$export$6d9c69b0de29b591; }, function (v) { return $ed5179c75cc0196c$export$6d9c69b0de29b591 = v; });
$parcel$export(module.exports, "useId", function () { return $ed5179c75cc0196c$export$f680877a34711e37; }, function (v) { return $ed5179c75cc0196c$export$f680877a34711e37 = v; });
$parcel$export(module.exports, "useImperativeHandle", function () { return $ed5179c75cc0196c$export$d5a552a76deda3c2; }, function (v) { return $ed5179c75cc0196c$export$d5a552a76deda3c2 = v; });
$parcel$export(module.exports, "useInsertionEffect", function () { return $ed5179c75cc0196c$export$aaabe4eda9ed9969; }, function (v) { return $ed5179c75cc0196c$export$aaabe4eda9ed9969 = v; });
$parcel$export(module.exports, "useLayoutEffect", function () { return $ed5179c75cc0196c$export$e5c5a5f917a5871c; }, function (v) { return $ed5179c75cc0196c$export$e5c5a5f917a5871c = v; });
$parcel$export(module.exports, "useMemo", function () { return $ed5179c75cc0196c$export$1538c33de8887b59; }, function (v) { return $ed5179c75cc0196c$export$1538c33de8887b59 = v; });
$parcel$export(module.exports, "useReducer", function () { return $ed5179c75cc0196c$export$13e3392192263954; }, function (v) { return $ed5179c75cc0196c$export$13e3392192263954 = v; });
$parcel$export(module.exports, "useRef", function () { return $ed5179c75cc0196c$export$b8f5890fc79d6aca; }, function (v) { return $ed5179c75cc0196c$export$b8f5890fc79d6aca = v; });
$parcel$export(module.exports, "useState", function () { return $ed5179c75cc0196c$export$60241385465d0a34; }, function (v) { return $ed5179c75cc0196c$export$60241385465d0a34 = v; });
$parcel$export(module.exports, "useSyncExternalStore", function () { return $ed5179c75cc0196c$export$306c0aa65ff9ec16; }, function (v) { return $ed5179c75cc0196c$export$306c0aa65ff9ec16 = v; });
$parcel$export(module.exports, "useTransition", function () { return $ed5179c75cc0196c$export$7b286972b8d8ccbf; }, function (v) { return $ed5179c75cc0196c$export$7b286972b8d8ccbf = v; });
$parcel$export(module.exports, "version", function () { return $ed5179c75cc0196c$export$83d89fbfd8236492; }, function (v) { return $ed5179c75cc0196c$export$83d89fbfd8236492 = v; });
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $ed5179c75cc0196c$export$dca3b0875bd9a954;
var $ed5179c75cc0196c$export$16fa2f45be04daa8;
var $ed5179c75cc0196c$export$ffb0004e005737fa;
var $ed5179c75cc0196c$export$e2c29f18771995cb;
var $ed5179c75cc0196c$export$221d75b3f55bb0bd;
var $ed5179c75cc0196c$export$5f8d39834fd61797;
var $ed5179c75cc0196c$export$74bf444e3cd11ea5;
var $ed5179c75cc0196c$export$ae55be85d98224ed;
var $ed5179c75cc0196c$export$e530037191fcd5d7;
var $ed5179c75cc0196c$export$fd42f52fd3ae1109;
var $ed5179c75cc0196c$export$c8a8987d4410bf2d;
var $ed5179c75cc0196c$export$d38cd72104c1f0e9;
var $ed5179c75cc0196c$export$7d1e3a5e95ceca43;
var $ed5179c75cc0196c$export$257a8862b851cb5b;
var $ed5179c75cc0196c$export$a8257692ac88316c;
var $ed5179c75cc0196c$export$488013bae63b21da;
var $ed5179c75cc0196c$export$7c73462e0d25e514;
var $ed5179c75cc0196c$export$7568632d0d33d16d;
var $ed5179c75cc0196c$export$88948ce120ea2619;
var $ed5179c75cc0196c$export$35808ee640e87ca7;
var $ed5179c75cc0196c$export$fae74005e78b1a27;
var $ed5179c75cc0196c$export$dc8fbce3eb94dc1e;
var $ed5179c75cc0196c$export$6a7bc4e911dc01cf;
var $ed5179c75cc0196c$export$6d9c69b0de29b591;
var $ed5179c75cc0196c$export$f680877a34711e37;
var $ed5179c75cc0196c$export$d5a552a76deda3c2;
var $ed5179c75cc0196c$export$aaabe4eda9ed9969;
var $ed5179c75cc0196c$export$e5c5a5f917a5871c;
var $ed5179c75cc0196c$export$1538c33de8887b59;
var $ed5179c75cc0196c$export$13e3392192263954;
var $ed5179c75cc0196c$export$b8f5890fc79d6aca;
var $ed5179c75cc0196c$export$60241385465d0a34;
var $ed5179c75cc0196c$export$306c0aa65ff9ec16;
var $ed5179c75cc0196c$export$7b286972b8d8ccbf;
var $ed5179c75cc0196c$export$83d89fbfd8236492;
"use strict";
var $ed5179c75cc0196c$var$l = Symbol.for("react.element"), $ed5179c75cc0196c$var$n = Symbol.for("react.portal"), $ed5179c75cc0196c$var$p = Symbol.for("react.fragment"), $ed5179c75cc0196c$var$q = Symbol.for("react.strict_mode"), $ed5179c75cc0196c$var$r = Symbol.for("react.profiler"), $ed5179c75cc0196c$var$t = Symbol.for("react.provider"), $ed5179c75cc0196c$var$u = Symbol.for("react.context"), $ed5179c75cc0196c$var$v = Symbol.for("react.forward_ref"), $ed5179c75cc0196c$var$w = Symbol.for("react.suspense"), $ed5179c75cc0196c$var$x = Symbol.for("react.memo"), $ed5179c75cc0196c$var$y = Symbol.for("react.lazy"), $ed5179c75cc0196c$var$z = Symbol.iterator;
function $ed5179c75cc0196c$var$A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $ed5179c75cc0196c$var$z && a[$ed5179c75cc0196c$var$z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $ed5179c75cc0196c$var$B = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, $ed5179c75cc0196c$var$C = Object.assign, $ed5179c75cc0196c$var$D = {};
function $ed5179c75cc0196c$var$E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $ed5179c75cc0196c$var$D;
    this.updater = e || $ed5179c75cc0196c$var$B;
}
$ed5179c75cc0196c$var$E.prototype.isReactComponent = {};
$ed5179c75cc0196c$var$E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
};
$ed5179c75cc0196c$var$E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function $ed5179c75cc0196c$var$F() {}
$ed5179c75cc0196c$var$F.prototype = $ed5179c75cc0196c$var$E.prototype;
function $ed5179c75cc0196c$var$G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = $ed5179c75cc0196c$var$D;
    this.updater = e || $ed5179c75cc0196c$var$B;
}
var $ed5179c75cc0196c$var$H = $ed5179c75cc0196c$var$G.prototype = new $ed5179c75cc0196c$var$F;
$ed5179c75cc0196c$var$H.constructor = $ed5179c75cc0196c$var$G;
$ed5179c75cc0196c$var$C($ed5179c75cc0196c$var$H, $ed5179c75cc0196c$var$E.prototype);
$ed5179c75cc0196c$var$H.isPureReactComponent = !0;
var $ed5179c75cc0196c$var$I = Array.isArray, $ed5179c75cc0196c$var$J = Object.prototype.hasOwnProperty, $ed5179c75cc0196c$var$K = {
    current: null
}, $ed5179c75cc0196c$var$L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $ed5179c75cc0196c$var$M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)$ed5179c75cc0196c$var$J.call(b, d) && !$ed5179c75cc0196c$var$L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
        for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
        c.children = f;
    }
    if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
    return {
        $$typeof: $ed5179c75cc0196c$var$l,
        type: a,
        key: k,
        ref: h,
        props: c,
        _owner: $ed5179c75cc0196c$var$K.current
    };
}
function $ed5179c75cc0196c$var$N(a, b) {
    return {
        $$typeof: $ed5179c75cc0196c$var$l,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function $ed5179c75cc0196c$var$O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === $ed5179c75cc0196c$var$l;
}
function $ed5179c75cc0196c$var$escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var $ed5179c75cc0196c$var$P = /\/+/g;
function $ed5179c75cc0196c$var$Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? $ed5179c75cc0196c$var$escape("" + a.key) : b.toString(36);
}
function $ed5179c75cc0196c$var$R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = !1;
    if (null === a) h = !0;
    else switch(k){
        case "string":
        case "number":
            h = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case $ed5179c75cc0196c$var$l:
                case $ed5179c75cc0196c$var$n:
                    h = !0;
            }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + $ed5179c75cc0196c$var$Q(h, 0) : d, $ed5179c75cc0196c$var$I(c) ? (e = "", null != a && (e = a.replace($ed5179c75cc0196c$var$P, "$&/") + "/"), $ed5179c75cc0196c$var$R(c, b, e, "", function(a) {
        return a;
    })) : null != c && ($ed5179c75cc0196c$var$O(c) && (c = $ed5179c75cc0196c$var$N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace($ed5179c75cc0196c$var$P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if ($ed5179c75cc0196c$var$I(a)) for(var g = 0; g < a.length; g++){
        k = a[g];
        var f = d + $ed5179c75cc0196c$var$Q(k, g);
        h += $ed5179c75cc0196c$var$R(k, b, e, f, c);
    }
    else if (f = $ed5179c75cc0196c$var$A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + $ed5179c75cc0196c$var$Q(k, g++), h += $ed5179c75cc0196c$var$R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
}
function $ed5179c75cc0196c$var$S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    $ed5179c75cc0196c$var$R(a, d, "", "", function(a) {
        return b.call(e, a, c++);
    });
    return d;
}
function $ed5179c75cc0196c$var$T(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
var $ed5179c75cc0196c$var$U = {
    current: null
}, $ed5179c75cc0196c$var$V = {
    transition: null
}, $ed5179c75cc0196c$var$W = {
    ReactCurrentDispatcher: $ed5179c75cc0196c$var$U,
    ReactCurrentBatchConfig: $ed5179c75cc0196c$var$V,
    ReactCurrentOwner: $ed5179c75cc0196c$var$K
};
$ed5179c75cc0196c$export$dca3b0875bd9a954 = {
    map: $ed5179c75cc0196c$var$S,
    forEach: function(a, b, e) {
        $ed5179c75cc0196c$var$S(a, function() {
            b.apply(this, arguments);
        }, e);
    },
    count: function(a) {
        var b = 0;
        $ed5179c75cc0196c$var$S(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return $ed5179c75cc0196c$var$S(a, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!$ed5179c75cc0196c$var$O(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
    }
};
$ed5179c75cc0196c$export$16fa2f45be04daa8 = $ed5179c75cc0196c$var$E;
$ed5179c75cc0196c$export$ffb0004e005737fa = $ed5179c75cc0196c$var$p;
$ed5179c75cc0196c$export$e2c29f18771995cb = $ed5179c75cc0196c$var$r;
$ed5179c75cc0196c$export$221d75b3f55bb0bd = $ed5179c75cc0196c$var$G;
$ed5179c75cc0196c$export$5f8d39834fd61797 = $ed5179c75cc0196c$var$q;
$ed5179c75cc0196c$export$74bf444e3cd11ea5 = $ed5179c75cc0196c$var$w;
$ed5179c75cc0196c$export$ae55be85d98224ed = $ed5179c75cc0196c$var$W;
$ed5179c75cc0196c$export$e530037191fcd5d7 = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = $ed5179c75cc0196c$var$C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = $ed5179c75cc0196c$var$K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for(f in b)$ed5179c75cc0196c$var$J.call(b, f) && !$ed5179c75cc0196c$var$L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
        g = Array(f);
        for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
        d.children = g;
    }
    return {
        $$typeof: $ed5179c75cc0196c$var$l,
        type: a.type,
        key: c,
        ref: k,
        props: d,
        _owner: h
    };
};
$ed5179c75cc0196c$export$fd42f52fd3ae1109 = function(a) {
    a = {
        $$typeof: $ed5179c75cc0196c$var$u,
        _currentValue: a,
        _currentValue2: a,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    };
    a.Provider = {
        $$typeof: $ed5179c75cc0196c$var$t,
        _context: a
    };
    return a.Consumer = a;
};
$ed5179c75cc0196c$export$c8a8987d4410bf2d = $ed5179c75cc0196c$var$M;
$ed5179c75cc0196c$export$d38cd72104c1f0e9 = function(a) {
    var b = $ed5179c75cc0196c$var$M.bind(null, a);
    b.type = a;
    return b;
};
$ed5179c75cc0196c$export$7d1e3a5e95ceca43 = function() {
    return {
        current: null
    };
};
$ed5179c75cc0196c$export$257a8862b851cb5b = function(a) {
    return {
        $$typeof: $ed5179c75cc0196c$var$v,
        render: a
    };
};
$ed5179c75cc0196c$export$a8257692ac88316c = $ed5179c75cc0196c$var$O;
$ed5179c75cc0196c$export$488013bae63b21da = function(a) {
    return {
        $$typeof: $ed5179c75cc0196c$var$y,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: $ed5179c75cc0196c$var$T
    };
};
$ed5179c75cc0196c$export$7c73462e0d25e514 = function(a, b) {
    return {
        $$typeof: $ed5179c75cc0196c$var$x,
        type: a,
        compare: void 0 === b ? null : b
    };
};
$ed5179c75cc0196c$export$7568632d0d33d16d = function(a) {
    var b = $ed5179c75cc0196c$var$V.transition;
    $ed5179c75cc0196c$var$V.transition = {};
    try {
        a();
    } finally{
        $ed5179c75cc0196c$var$V.transition = b;
    }
};
$ed5179c75cc0196c$export$88948ce120ea2619 = function() {
    throw Error("act(...) is not supported in production builds of React.");
};
$ed5179c75cc0196c$export$35808ee640e87ca7 = function(a, b) {
    return $ed5179c75cc0196c$var$U.current.useCallback(a, b);
};
$ed5179c75cc0196c$export$fae74005e78b1a27 = function(a) {
    return $ed5179c75cc0196c$var$U.current.useContext(a);
};
$ed5179c75cc0196c$export$dc8fbce3eb94dc1e = function() {};
$ed5179c75cc0196c$export$6a7bc4e911dc01cf = function(a) {
    return $ed5179c75cc0196c$var$U.current.useDeferredValue(a);
};
$ed5179c75cc0196c$export$6d9c69b0de29b591 = function(a, b) {
    return $ed5179c75cc0196c$var$U.current.useEffect(a, b);
};
$ed5179c75cc0196c$export$f680877a34711e37 = function() {
    return $ed5179c75cc0196c$var$U.current.useId();
};
$ed5179c75cc0196c$export$d5a552a76deda3c2 = function(a, b, e) {
    return $ed5179c75cc0196c$var$U.current.useImperativeHandle(a, b, e);
};
$ed5179c75cc0196c$export$aaabe4eda9ed9969 = function(a, b) {
    return $ed5179c75cc0196c$var$U.current.useInsertionEffect(a, b);
};
$ed5179c75cc0196c$export$e5c5a5f917a5871c = function(a, b) {
    return $ed5179c75cc0196c$var$U.current.useLayoutEffect(a, b);
};
$ed5179c75cc0196c$export$1538c33de8887b59 = function(a, b) {
    return $ed5179c75cc0196c$var$U.current.useMemo(a, b);
};
$ed5179c75cc0196c$export$13e3392192263954 = function(a, b, e) {
    return $ed5179c75cc0196c$var$U.current.useReducer(a, b, e);
};
$ed5179c75cc0196c$export$b8f5890fc79d6aca = function(a) {
    return $ed5179c75cc0196c$var$U.current.useRef(a);
};
$ed5179c75cc0196c$export$60241385465d0a34 = function(a) {
    return $ed5179c75cc0196c$var$U.current.useState(a);
};
$ed5179c75cc0196c$export$306c0aa65ff9ec16 = function(a, b, e) {
    return $ed5179c75cc0196c$var$U.current.useSyncExternalStore(a, b, e);
};
$ed5179c75cc0196c$export$7b286972b8d8ccbf = function() {
    return $ed5179c75cc0196c$var$U.current.useTransition();
};
$ed5179c75cc0196c$export$83d89fbfd8236492 = "18.2.0";

});




parcelRequire.register("ldSin", function(module, exports) {

$parcel$export(module.exports, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function () { return $f734edd0e0ae82f0$export$ae55be85d98224ed; }, function (v) { return $f734edd0e0ae82f0$export$ae55be85d98224ed = v; });
$parcel$export(module.exports, "createPortal", function () { return $f734edd0e0ae82f0$export$d39a5bbd09211389; }, function (v) { return $f734edd0e0ae82f0$export$d39a5bbd09211389 = v; });
$parcel$export(module.exports, "createRoot", function () { return $f734edd0e0ae82f0$export$882461b6382ed46c; }, function (v) { return $f734edd0e0ae82f0$export$882461b6382ed46c = v; });
$parcel$export(module.exports, "findDOMNode", function () { return $f734edd0e0ae82f0$export$466bfc07425424d5; }, function (v) { return $f734edd0e0ae82f0$export$466bfc07425424d5 = v; });
$parcel$export(module.exports, "flushSync", function () { return $f734edd0e0ae82f0$export$cd75ccfd720a3cd4; }, function (v) { return $f734edd0e0ae82f0$export$cd75ccfd720a3cd4 = v; });
$parcel$export(module.exports, "hydrate", function () { return $f734edd0e0ae82f0$export$fa8d919ba61d84db; }, function (v) { return $f734edd0e0ae82f0$export$fa8d919ba61d84db = v; });
$parcel$export(module.exports, "hydrateRoot", function () { return $f734edd0e0ae82f0$export$757ceba2d55c277e; }, function (v) { return $f734edd0e0ae82f0$export$757ceba2d55c277e = v; });
$parcel$export(module.exports, "render", function () { return $f734edd0e0ae82f0$export$b3890eb0ae9dca99; }, function (v) { return $f734edd0e0ae82f0$export$b3890eb0ae9dca99 = v; });
$parcel$export(module.exports, "unmountComponentAtNode", function () { return $f734edd0e0ae82f0$export$502457920280e6be; }, function (v) { return $f734edd0e0ae82f0$export$502457920280e6be = v; });
$parcel$export(module.exports, "unstable_batchedUpdates", function () { return $f734edd0e0ae82f0$export$c78a37762a8d58e1; }, function (v) { return $f734edd0e0ae82f0$export$c78a37762a8d58e1 = v; });
$parcel$export(module.exports, "unstable_renderSubtreeIntoContainer", function () { return $f734edd0e0ae82f0$export$dc54d992c10e8a18; }, function (v) { return $f734edd0e0ae82f0$export$dc54d992c10e8a18 = v; });
$parcel$export(module.exports, "version", function () { return $f734edd0e0ae82f0$export$83d89fbfd8236492; }, function (v) { return $f734edd0e0ae82f0$export$83d89fbfd8236492 = v; });
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/ var $f734edd0e0ae82f0$export$ae55be85d98224ed;
var $f734edd0e0ae82f0$export$d39a5bbd09211389;
var $f734edd0e0ae82f0$export$882461b6382ed46c;
var $f734edd0e0ae82f0$export$466bfc07425424d5;
var $f734edd0e0ae82f0$export$cd75ccfd720a3cd4;
var $f734edd0e0ae82f0$export$fa8d919ba61d84db;
var $f734edd0e0ae82f0$export$757ceba2d55c277e;
var $f734edd0e0ae82f0$export$b3890eb0ae9dca99;
var $f734edd0e0ae82f0$export$502457920280e6be;
var $f734edd0e0ae82f0$export$c78a37762a8d58e1;
var $f734edd0e0ae82f0$export$dc54d992c10e8a18;
var $f734edd0e0ae82f0$export$83d89fbfd8236492;
"use strict";

var $an5iK = parcelRequire("an5iK");

var $5zFK8 = parcelRequire("5zFK8");
function $f734edd0e0ae82f0$var$p(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var $f734edd0e0ae82f0$var$da = new Set, $f734edd0e0ae82f0$var$ea = {};
function $f734edd0e0ae82f0$var$fa(a, b) {
    $f734edd0e0ae82f0$var$ha(a, b);
    $f734edd0e0ae82f0$var$ha(a + "Capture", b);
}
function $f734edd0e0ae82f0$var$ha(a, b) {
    $f734edd0e0ae82f0$var$ea[a] = b;
    for(a = 0; a < b.length; a++)$f734edd0e0ae82f0$var$da.add(b[a]);
}
var $f734edd0e0ae82f0$var$ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), $f734edd0e0ae82f0$var$ja = Object.prototype.hasOwnProperty, $f734edd0e0ae82f0$var$ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $f734edd0e0ae82f0$var$la = {}, $f734edd0e0ae82f0$var$ma = {};
function $f734edd0e0ae82f0$var$oa(a) {
    if ($f734edd0e0ae82f0$var$ja.call($f734edd0e0ae82f0$var$ma, a)) return !0;
    if ($f734edd0e0ae82f0$var$ja.call($f734edd0e0ae82f0$var$la, a)) return !1;
    if ($f734edd0e0ae82f0$var$ka.test(a)) return $f734edd0e0ae82f0$var$ma[a] = !0;
    $f734edd0e0ae82f0$var$la[a] = !0;
    return !1;
}
function $f734edd0e0ae82f0$var$pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;
    switch(typeof b){
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            if (d) return !1;
            if (null !== c) return !c.acceptsBooleans;
            a = a.toLowerCase().slice(0, 5);
            return "data-" !== a && "aria-" !== a;
        default:
            return !1;
    }
}
function $f734edd0e0ae82f0$var$qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || $f734edd0e0ae82f0$var$pa(a, b, c, d)) return !0;
    if (d) return !1;
    if (null !== c) switch(c.type){
        case 3:
            return !b;
        case 4:
            return !1 === b;
        case 5:
            return isNaN(b);
        case 6:
            return isNaN(b) || 1 > b;
    }
    return !1;
}
function $f734edd0e0ae82f0$var$v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
}
var $f734edd0e0ae82f0$var$z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    $f734edd0e0ae82f0$var$z[a] = new $f734edd0e0ae82f0$var$v(a, 0, !1, a, null, !1, !1);
});
[
    [
        "acceptCharset",
        "accept-charset"
    ],
    [
        "className",
        "class"
    ],
    [
        "htmlFor",
        "for"
    ],
    [
        "httpEquiv",
        "http-equiv"
    ]
].forEach(function(a) {
    var b = a[0];
    $f734edd0e0ae82f0$var$z[b] = new $f734edd0e0ae82f0$var$v(b, 1, !1, a[1], null, !1, !1);
});
[
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
].forEach(function(a) {
    $f734edd0e0ae82f0$var$z[a] = new $f734edd0e0ae82f0$var$v(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
].forEach(function(a) {
    $f734edd0e0ae82f0$var$z[a] = new $f734edd0e0ae82f0$var$v(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    $f734edd0e0ae82f0$var$z[a] = new $f734edd0e0ae82f0$var$v(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
[
    "checked",
    "multiple",
    "muted",
    "selected"
].forEach(function(a) {
    $f734edd0e0ae82f0$var$z[a] = new $f734edd0e0ae82f0$var$v(a, 3, !0, a, null, !1, !1);
});
[
    "capture",
    "download"
].forEach(function(a) {
    $f734edd0e0ae82f0$var$z[a] = new $f734edd0e0ae82f0$var$v(a, 4, !1, a, null, !1, !1);
});
[
    "cols",
    "rows",
    "size",
    "span"
].forEach(function(a) {
    $f734edd0e0ae82f0$var$z[a] = new $f734edd0e0ae82f0$var$v(a, 6, !1, a, null, !1, !1);
});
[
    "rowSpan",
    "start"
].forEach(function(a) {
    $f734edd0e0ae82f0$var$z[a] = new $f734edd0e0ae82f0$var$v(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var $f734edd0e0ae82f0$var$ra = /[\-:]([a-z])/g;
function $f734edd0e0ae82f0$var$sa(a) {
    return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace($f734edd0e0ae82f0$var$ra, $f734edd0e0ae82f0$var$sa);
    $f734edd0e0ae82f0$var$z[b] = new $f734edd0e0ae82f0$var$v(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace($f734edd0e0ae82f0$var$ra, $f734edd0e0ae82f0$var$sa);
    $f734edd0e0ae82f0$var$z[b] = new $f734edd0e0ae82f0$var$v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
[
    "xml:base",
    "xml:lang",
    "xml:space"
].forEach(function(a) {
    var b = a.replace($f734edd0e0ae82f0$var$ra, $f734edd0e0ae82f0$var$sa);
    $f734edd0e0ae82f0$var$z[b] = new $f734edd0e0ae82f0$var$v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
[
    "tabIndex",
    "crossOrigin"
].forEach(function(a) {
    $f734edd0e0ae82f0$var$z[a] = new $f734edd0e0ae82f0$var$v(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
$f734edd0e0ae82f0$var$z.xlinkHref = new $f734edd0e0ae82f0$var$v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
[
    "src",
    "href",
    "action",
    "formAction"
].forEach(function(a) {
    $f734edd0e0ae82f0$var$z[a] = new $f734edd0e0ae82f0$var$v(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
function $f734edd0e0ae82f0$var$ta(a, b, c, d) {
    var e = $f734edd0e0ae82f0$var$z.hasOwnProperty(b) ? $f734edd0e0ae82f0$var$z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) $f734edd0e0ae82f0$var$qa(b, c, e, d) && (c = null), d || null === e ? $f734edd0e0ae82f0$var$oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var $f734edd0e0ae82f0$var$ua = $an5iK.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $f734edd0e0ae82f0$var$va = Symbol.for("react.element"), $f734edd0e0ae82f0$var$wa = Symbol.for("react.portal"), $f734edd0e0ae82f0$var$ya = Symbol.for("react.fragment"), $f734edd0e0ae82f0$var$za = Symbol.for("react.strict_mode"), $f734edd0e0ae82f0$var$Aa = Symbol.for("react.profiler"), $f734edd0e0ae82f0$var$Ba = Symbol.for("react.provider"), $f734edd0e0ae82f0$var$Ca = Symbol.for("react.context"), $f734edd0e0ae82f0$var$Da = Symbol.for("react.forward_ref"), $f734edd0e0ae82f0$var$Ea = Symbol.for("react.suspense"), $f734edd0e0ae82f0$var$Fa = Symbol.for("react.suspense_list"), $f734edd0e0ae82f0$var$Ga = Symbol.for("react.memo"), $f734edd0e0ae82f0$var$Ha = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var $f734edd0e0ae82f0$var$Ia = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var $f734edd0e0ae82f0$var$Ja = Symbol.iterator;
function $f734edd0e0ae82f0$var$Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = $f734edd0e0ae82f0$var$Ja && a[$f734edd0e0ae82f0$var$Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
var $f734edd0e0ae82f0$var$A = Object.assign, $f734edd0e0ae82f0$var$La;
function $f734edd0e0ae82f0$var$Ma(a) {
    if (void 0 === $f734edd0e0ae82f0$var$La) try {
        throw Error();
    } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        $f734edd0e0ae82f0$var$La = b && b[1] || "";
    }
    return "\n" + $f734edd0e0ae82f0$var$La + a;
}
var $f734edd0e0ae82f0$var$Na = !1;
function $f734edd0e0ae82f0$var$Oa(a, b) {
    if (!a || $f734edd0e0ae82f0$var$Na) return "";
    $f734edd0e0ae82f0$var$Na = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (b) {
            if (b = function() {
                throw Error();
            }, Object.defineProperty(b.prototype, "props", {
                set: function() {
                    throw Error();
                }
            }), "object" === typeof Reflect && Reflect.construct) {
                try {
                    Reflect.construct(b, []);
                } catch (l) {
                    var d = l;
                }
                Reflect.construct(a, [], b);
            } else {
                try {
                    b.call();
                } catch (l) {
                    d = l;
                }
                a.call(b.prototype);
            }
        } else {
            try {
                throw Error();
            } catch (l) {
                d = l;
            }
            a();
        }
    } catch (l) {
        if (l && d && "string" === typeof l.stack) {
            for(var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];)h--;
            for(; 1 <= g && 0 <= h; g--, h--)if (e[g] !== f[h]) {
                if (1 !== g || 1 !== h) {
                    do if (g--, h--, 0 > h || e[g] !== f[h]) {
                        var k = "\n" + e[g].replace(" at new ", " at ");
                        a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                        return k;
                    }
                    while (1 <= g && 0 <= h);
                }
                break;
            }
        }
    } finally{
        $f734edd0e0ae82f0$var$Na = !1, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? $f734edd0e0ae82f0$var$Ma(a) : "";
}
function $f734edd0e0ae82f0$var$Pa(a) {
    switch(a.tag){
        case 5:
            return $f734edd0e0ae82f0$var$Ma(a.type);
        case 16:
            return $f734edd0e0ae82f0$var$Ma("Lazy");
        case 13:
            return $f734edd0e0ae82f0$var$Ma("Suspense");
        case 19:
            return $f734edd0e0ae82f0$var$Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
            return a = $f734edd0e0ae82f0$var$Oa(a.type, !1), a;
        case 11:
            return a = $f734edd0e0ae82f0$var$Oa(a.type.render, !1), a;
        case 1:
            return a = $f734edd0e0ae82f0$var$Oa(a.type, !0), a;
        default:
            return "";
    }
}
function $f734edd0e0ae82f0$var$Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch(a){
        case $f734edd0e0ae82f0$var$ya:
            return "Fragment";
        case $f734edd0e0ae82f0$var$wa:
            return "Portal";
        case $f734edd0e0ae82f0$var$Aa:
            return "Profiler";
        case $f734edd0e0ae82f0$var$za:
            return "StrictMode";
        case $f734edd0e0ae82f0$var$Ea:
            return "Suspense";
        case $f734edd0e0ae82f0$var$Fa:
            return "SuspenseList";
    }
    if ("object" === typeof a) switch(a.$$typeof){
        case $f734edd0e0ae82f0$var$Ca:
            return (a.displayName || "Context") + ".Consumer";
        case $f734edd0e0ae82f0$var$Ba:
            return (a._context.displayName || "Context") + ".Provider";
        case $f734edd0e0ae82f0$var$Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
        case $f734edd0e0ae82f0$var$Ga:
            return b = a.displayName || null, null !== b ? b : $f734edd0e0ae82f0$var$Qa(a.type) || "Memo";
        case $f734edd0e0ae82f0$var$Ha:
            b = a._payload;
            a = a._init;
            try {
                return $f734edd0e0ae82f0$var$Qa(a(b));
            } catch (c) {}
    }
    return null;
}
function $f734edd0e0ae82f0$var$Ra(a) {
    var b = a.type;
    switch(a.tag){
        case 24:
            return "Cache";
        case 9:
            return (b.displayName || "Context") + ".Consumer";
        case 10:
            return (b._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return b;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return $f734edd0e0ae82f0$var$Qa(b);
        case 8:
            return b === $f734edd0e0ae82f0$var$za ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
    }
    return null;
}
function $f734edd0e0ae82f0$var$Sa(a) {
    switch(typeof a){
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return a;
        case "object":
            return a;
        default:
            return "";
    }
}
function $f734edd0e0ae82f0$var$Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function $f734edd0e0ae82f0$var$Ua(a) {
    var b = $f734edd0e0ae82f0$var$Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, {
            configurable: !0,
            get: function() {
                return e.call(this);
            },
            set: function(a) {
                d = "" + a;
                f.call(this, a);
            }
        });
        Object.defineProperty(a, b, {
            enumerable: c.enumerable
        });
        return {
            getValue: function() {
                return d;
            },
            setValue: function(a) {
                d = "" + a;
            },
            stopTracking: function() {
                a._valueTracker = null;
                delete a[b];
            }
        };
    }
}
function $f734edd0e0ae82f0$var$Va(a) {
    a._valueTracker || (a._valueTracker = $f734edd0e0ae82f0$var$Ua(a));
}
function $f734edd0e0ae82f0$var$Wa(a) {
    if (!a) return !1;
    var b = a._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d = "";
    a && (d = $f734edd0e0ae82f0$var$Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), !0) : !1;
}
function $f734edd0e0ae82f0$var$Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
        return a.activeElement || a.body;
    } catch (b) {
        return a.body;
    }
}
function $f734edd0e0ae82f0$var$Ya(a, b) {
    var c = b.checked;
    return $f734edd0e0ae82f0$var$A({}, b, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != c ? c : a._wrapperState.initialChecked
    });
}
function $f734edd0e0ae82f0$var$Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = $f734edd0e0ae82f0$var$Sa(null != b.value ? b.value : c);
    a._wrapperState = {
        initialChecked: d,
        initialValue: c,
        controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
    };
}
function $f734edd0e0ae82f0$var$ab(a, b) {
    b = b.checked;
    null != b && $f734edd0e0ae82f0$var$ta(a, "checked", b, !1);
}
function $f734edd0e0ae82f0$var$bb(a, b) {
    $f734edd0e0ae82f0$var$ab(a, b);
    var c = $f734edd0e0ae82f0$var$Sa(b.value), d = b.type;
    if (null != c) {
        if ("number" === d) {
            if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
        } else a.value !== "" + c && (a.value = "" + c);
    } else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
    }
    b.hasOwnProperty("value") ? $f734edd0e0ae82f0$var$cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && $f734edd0e0ae82f0$var$cb(a, b.type, $f734edd0e0ae82f0$var$Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function $f734edd0e0ae82f0$var$db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
}
function $f734edd0e0ae82f0$var$cb(a, b, c) {
    if ("number" !== b || $f734edd0e0ae82f0$var$Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var $f734edd0e0ae82f0$var$eb = Array.isArray;
function $f734edd0e0ae82f0$var$fb(a, b, c, d) {
    a = a.options;
    if (b) {
        b = {};
        for(var e = 0; e < c.length; e++)b["$" + c[e]] = !0;
        for(c = 0; c < a.length; c++)e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    } else {
        c = "" + $f734edd0e0ae82f0$var$Sa(c);
        b = null;
        for(e = 0; e < a.length; e++){
            if (a[e].value === c) {
                a[e].selected = !0;
                d && (a[e].defaultSelected = !0);
                return;
            }
            null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = !0);
    }
}
function $f734edd0e0ae82f0$var$gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error($f734edd0e0ae82f0$var$p(91));
    return $f734edd0e0ae82f0$var$A({}, b, {
        value: void 0,
        defaultValue: void 0,
        children: "" + a._wrapperState.initialValue
    });
}
function $f734edd0e0ae82f0$var$hb(a, b) {
    var c = b.value;
    if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
            if (null != b) throw Error($f734edd0e0ae82f0$var$p(92));
            if ($f734edd0e0ae82f0$var$eb(c)) {
                if (1 < c.length) throw Error($f734edd0e0ae82f0$var$p(93));
                c = c[0];
            }
            b = c;
        }
        null == b && (b = "");
        c = b;
    }
    a._wrapperState = {
        initialValue: $f734edd0e0ae82f0$var$Sa(c)
    };
}
function $f734edd0e0ae82f0$var$ib(a, b) {
    var c = $f734edd0e0ae82f0$var$Sa(b.value), d = $f734edd0e0ae82f0$var$Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
}
function $f734edd0e0ae82f0$var$jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function $f734edd0e0ae82f0$var$kb(a) {
    switch(a){
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function $f734edd0e0ae82f0$var$lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? $f734edd0e0ae82f0$var$kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var $f734edd0e0ae82f0$var$mb, $f734edd0e0ae82f0$var$nb = function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function() {
            return a(b, c, d, e);
        });
    } : a;
}(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
        $f734edd0e0ae82f0$var$mb = $f734edd0e0ae82f0$var$mb || document.createElement("div");
        $f734edd0e0ae82f0$var$mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for(b = $f734edd0e0ae82f0$var$mb.firstChild; a.firstChild;)a.removeChild(a.firstChild);
        for(; b.firstChild;)a.appendChild(b.firstChild);
    }
});
function $f734edd0e0ae82f0$var$ob(a, b) {
    if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
            c.nodeValue = b;
            return;
        }
    }
    a.textContent = b;
}
var $f734edd0e0ae82f0$var$pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, $f734edd0e0ae82f0$var$qb = [
    "Webkit",
    "ms",
    "Moz",
    "O"
];
Object.keys($f734edd0e0ae82f0$var$pb).forEach(function(a) {
    $f734edd0e0ae82f0$var$qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        $f734edd0e0ae82f0$var$pb[b] = $f734edd0e0ae82f0$var$pb[a];
    });
});
function $f734edd0e0ae82f0$var$rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || $f734edd0e0ae82f0$var$pb.hasOwnProperty(a) && $f734edd0e0ae82f0$var$pb[a] ? ("" + b).trim() : b + "px";
}
function $f734edd0e0ae82f0$var$sb(a, b) {
    a = a.style;
    for(var c in b)if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = $f734edd0e0ae82f0$var$rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
    }
}
var $f734edd0e0ae82f0$var$tb = $f734edd0e0ae82f0$var$A({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function $f734edd0e0ae82f0$var$ub(a, b) {
    if (b) {
        if ($f734edd0e0ae82f0$var$tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error($f734edd0e0ae82f0$var$p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error($f734edd0e0ae82f0$var$p(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error($f734edd0e0ae82f0$var$p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error($f734edd0e0ae82f0$var$p(62));
    }
}
function $f734edd0e0ae82f0$var$vb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch(a){
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var $f734edd0e0ae82f0$var$wb = null;
function $f734edd0e0ae82f0$var$xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
}
var $f734edd0e0ae82f0$var$yb = null, $f734edd0e0ae82f0$var$zb = null, $f734edd0e0ae82f0$var$Ab = null;
function $f734edd0e0ae82f0$var$Bb(a) {
    if (a = $f734edd0e0ae82f0$var$Cb(a)) {
        if ("function" !== typeof $f734edd0e0ae82f0$var$yb) throw Error($f734edd0e0ae82f0$var$p(280));
        var b = a.stateNode;
        b && (b = $f734edd0e0ae82f0$var$Db(b), $f734edd0e0ae82f0$var$yb(a.stateNode, a.type, b));
    }
}
function $f734edd0e0ae82f0$var$Eb(a) {
    $f734edd0e0ae82f0$var$zb ? $f734edd0e0ae82f0$var$Ab ? $f734edd0e0ae82f0$var$Ab.push(a) : $f734edd0e0ae82f0$var$Ab = [
        a
    ] : $f734edd0e0ae82f0$var$zb = a;
}
function $f734edd0e0ae82f0$var$Fb() {
    if ($f734edd0e0ae82f0$var$zb) {
        var a = $f734edd0e0ae82f0$var$zb, b = $f734edd0e0ae82f0$var$Ab;
        $f734edd0e0ae82f0$var$Ab = $f734edd0e0ae82f0$var$zb = null;
        $f734edd0e0ae82f0$var$Bb(a);
        if (b) for(a = 0; a < b.length; a++)$f734edd0e0ae82f0$var$Bb(b[a]);
    }
}
function $f734edd0e0ae82f0$var$Gb(a, b) {
    return a(b);
}
function $f734edd0e0ae82f0$var$Hb() {}
var $f734edd0e0ae82f0$var$Ib = !1;
function $f734edd0e0ae82f0$var$Jb(a, b, c) {
    if ($f734edd0e0ae82f0$var$Ib) return a(b, c);
    $f734edd0e0ae82f0$var$Ib = !0;
    try {
        return $f734edd0e0ae82f0$var$Gb(a, b, c);
    } finally{
        if ($f734edd0e0ae82f0$var$Ib = !1, null !== $f734edd0e0ae82f0$var$zb || null !== $f734edd0e0ae82f0$var$Ab) $f734edd0e0ae82f0$var$Hb(), $f734edd0e0ae82f0$var$Fb();
    }
}
function $f734edd0e0ae82f0$var$Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = $f734edd0e0ae82f0$var$Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch(b){
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d;
            break a;
        default:
            a = !1;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error($f734edd0e0ae82f0$var$p(231, b, typeof c));
    return c;
}
var $f734edd0e0ae82f0$var$Lb = !1;
if ($f734edd0e0ae82f0$var$ia) try {
    var $f734edd0e0ae82f0$var$Mb = {};
    Object.defineProperty($f734edd0e0ae82f0$var$Mb, "passive", {
        get: function() {
            $f734edd0e0ae82f0$var$Lb = !0;
        }
    });
    window.addEventListener("test", $f734edd0e0ae82f0$var$Mb, $f734edd0e0ae82f0$var$Mb);
    window.removeEventListener("test", $f734edd0e0ae82f0$var$Mb, $f734edd0e0ae82f0$var$Mb);
} catch (a) {
    $f734edd0e0ae82f0$var$Lb = !1;
}
function $f734edd0e0ae82f0$var$Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
        b.apply(c, l);
    } catch (m) {
        this.onError(m);
    }
}
var $f734edd0e0ae82f0$var$Ob = !1, $f734edd0e0ae82f0$var$Pb = null, $f734edd0e0ae82f0$var$Qb = !1, $f734edd0e0ae82f0$var$Rb = null, $f734edd0e0ae82f0$var$Sb = {
    onError: function(a) {
        $f734edd0e0ae82f0$var$Ob = !0;
        $f734edd0e0ae82f0$var$Pb = a;
    }
};
function $f734edd0e0ae82f0$var$Tb(a, b, c, d, e, f, g, h, k) {
    $f734edd0e0ae82f0$var$Ob = !1;
    $f734edd0e0ae82f0$var$Pb = null;
    $f734edd0e0ae82f0$var$Nb.apply($f734edd0e0ae82f0$var$Sb, arguments);
}
function $f734edd0e0ae82f0$var$Ub(a, b, c, d, e, f, g, h, k) {
    $f734edd0e0ae82f0$var$Tb.apply(this, arguments);
    if ($f734edd0e0ae82f0$var$Ob) {
        if ($f734edd0e0ae82f0$var$Ob) {
            var l = $f734edd0e0ae82f0$var$Pb;
            $f734edd0e0ae82f0$var$Ob = !1;
            $f734edd0e0ae82f0$var$Pb = null;
        } else throw Error($f734edd0e0ae82f0$var$p(198));
        $f734edd0e0ae82f0$var$Qb || ($f734edd0e0ae82f0$var$Qb = !0, $f734edd0e0ae82f0$var$Rb = l);
    }
}
function $f734edd0e0ae82f0$var$Vb(a) {
    var b = a, c = a;
    if (a.alternate) for(; b.return;)b = b.return;
    else {
        a = b;
        do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
    }
    return 3 === b.tag ? c : null;
}
function $f734edd0e0ae82f0$var$Wb(a) {
    if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
    }
    return null;
}
function $f734edd0e0ae82f0$var$Xb(a) {
    if ($f734edd0e0ae82f0$var$Vb(a) !== a) throw Error($f734edd0e0ae82f0$var$p(188));
}
function $f734edd0e0ae82f0$var$Yb(a) {
    var b = a.alternate;
    if (!b) {
        b = $f734edd0e0ae82f0$var$Vb(a);
        if (null === b) throw Error($f734edd0e0ae82f0$var$p(188));
        return b !== a ? null : a;
    }
    for(var c = a, d = b;;){
        var e = c.return;
        if (null === e) break;
        var f = e.alternate;
        if (null === f) {
            d = e.return;
            if (null !== d) {
                c = d;
                continue;
            }
            break;
        }
        if (e.child === f.child) {
            for(f = e.child; f;){
                if (f === c) return $f734edd0e0ae82f0$var$Xb(e), a;
                if (f === d) return $f734edd0e0ae82f0$var$Xb(e), b;
                f = f.sibling;
            }
            throw Error($f734edd0e0ae82f0$var$p(188));
        }
        if (c.return !== d.return) c = e, d = f;
        else {
            for(var g = !1, h = e.child; h;){
                if (h === c) {
                    g = !0;
                    c = e;
                    d = f;
                    break;
                }
                if (h === d) {
                    g = !0;
                    d = e;
                    c = f;
                    break;
                }
                h = h.sibling;
            }
            if (!g) {
                for(h = f.child; h;){
                    if (h === c) {
                        g = !0;
                        c = f;
                        d = e;
                        break;
                    }
                    if (h === d) {
                        g = !0;
                        d = f;
                        c = e;
                        break;
                    }
                    h = h.sibling;
                }
                if (!g) throw Error($f734edd0e0ae82f0$var$p(189));
            }
        }
        if (c.alternate !== d) throw Error($f734edd0e0ae82f0$var$p(190));
    }
    if (3 !== c.tag) throw Error($f734edd0e0ae82f0$var$p(188));
    return c.stateNode.current === c ? a : b;
}
function $f734edd0e0ae82f0$var$Zb(a) {
    a = $f734edd0e0ae82f0$var$Yb(a);
    return null !== a ? $f734edd0e0ae82f0$var$$b(a) : null;
}
function $f734edd0e0ae82f0$var$$b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for(a = a.child; null !== a;){
        var b = $f734edd0e0ae82f0$var$$b(a);
        if (null !== b) return b;
        a = a.sibling;
    }
    return null;
}
var $f734edd0e0ae82f0$var$ac = $5zFK8.unstable_scheduleCallback, $f734edd0e0ae82f0$var$bc = $5zFK8.unstable_cancelCallback, $f734edd0e0ae82f0$var$cc = $5zFK8.unstable_shouldYield, $f734edd0e0ae82f0$var$dc = $5zFK8.unstable_requestPaint, $f734edd0e0ae82f0$var$B = $5zFK8.unstable_now, $f734edd0e0ae82f0$var$ec = $5zFK8.unstable_getCurrentPriorityLevel, $f734edd0e0ae82f0$var$fc = $5zFK8.unstable_ImmediatePriority, $f734edd0e0ae82f0$var$gc = $5zFK8.unstable_UserBlockingPriority, $f734edd0e0ae82f0$var$hc = $5zFK8.unstable_NormalPriority, $f734edd0e0ae82f0$var$ic = $5zFK8.unstable_LowPriority, $f734edd0e0ae82f0$var$jc = $5zFK8.unstable_IdlePriority, $f734edd0e0ae82f0$var$kc = null, $f734edd0e0ae82f0$var$lc = null;
function $f734edd0e0ae82f0$var$mc(a) {
    if ($f734edd0e0ae82f0$var$lc && "function" === typeof $f734edd0e0ae82f0$var$lc.onCommitFiberRoot) try {
        $f734edd0e0ae82f0$var$lc.onCommitFiberRoot($f734edd0e0ae82f0$var$kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {}
}
var $f734edd0e0ae82f0$var$oc = Math.clz32 ? Math.clz32 : $f734edd0e0ae82f0$var$nc, $f734edd0e0ae82f0$var$pc = Math.log, $f734edd0e0ae82f0$var$qc = Math.LN2;
function $f734edd0e0ae82f0$var$nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - ($f734edd0e0ae82f0$var$pc(a) / $f734edd0e0ae82f0$var$qc | 0) | 0;
}
var $f734edd0e0ae82f0$var$rc = 64, $f734edd0e0ae82f0$var$sc = 4194304;
function $f734edd0e0ae82f0$var$tc(a) {
    switch(a & -a){
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return a & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return a;
    }
}
function $f734edd0e0ae82f0$var$uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = $f734edd0e0ae82f0$var$tc(h) : (f &= g, 0 !== f && (d = $f734edd0e0ae82f0$var$tc(f)));
    } else g = c & ~e, 0 !== g ? d = $f734edd0e0ae82f0$var$tc(g) : 0 !== f && (d = $f734edd0e0ae82f0$var$tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for(a = a.entanglements, b &= d; 0 < b;)c = 31 - $f734edd0e0ae82f0$var$oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
}
function $f734edd0e0ae82f0$var$vc(a, b) {
    switch(a){
        case 1:
        case 2:
        case 4:
            return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return b + 5E3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function $f734edd0e0ae82f0$var$wc(a, b) {
    for(var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;){
        var g = 31 - $f734edd0e0ae82f0$var$oc(f), h = 1 << g, k = e[g];
        if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = $f734edd0e0ae82f0$var$vc(h, b);
        } else k <= b && (a.expiredLanes |= h);
        f &= ~h;
    }
}
function $f734edd0e0ae82f0$var$xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function $f734edd0e0ae82f0$var$yc() {
    var a = $f734edd0e0ae82f0$var$rc;
    $f734edd0e0ae82f0$var$rc <<= 1;
    0 === ($f734edd0e0ae82f0$var$rc & 4194240) && ($f734edd0e0ae82f0$var$rc = 64);
    return a;
}
function $f734edd0e0ae82f0$var$zc(a) {
    for(var b = [], c = 0; 31 > c; c++)b.push(a);
    return b;
}
function $f734edd0e0ae82f0$var$Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - $f734edd0e0ae82f0$var$oc(b);
    a[b] = c;
}
function $f734edd0e0ae82f0$var$Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for(a = a.expirationTimes; 0 < c;){
        var e = 31 - $f734edd0e0ae82f0$var$oc(c), f = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f;
    }
}
function $f734edd0e0ae82f0$var$Cc(a, b) {
    var c = a.entangledLanes |= b;
    for(a = a.entanglements; c;){
        var d = 31 - $f734edd0e0ae82f0$var$oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
    }
}
var $f734edd0e0ae82f0$var$C = 0;
function $f734edd0e0ae82f0$var$Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var $f734edd0e0ae82f0$var$Ec, $f734edd0e0ae82f0$var$Fc, $f734edd0e0ae82f0$var$Gc, $f734edd0e0ae82f0$var$Hc, $f734edd0e0ae82f0$var$Ic, $f734edd0e0ae82f0$var$Jc = !1, $f734edd0e0ae82f0$var$Kc = [], $f734edd0e0ae82f0$var$Lc = null, $f734edd0e0ae82f0$var$Mc = null, $f734edd0e0ae82f0$var$Nc = null, $f734edd0e0ae82f0$var$Oc = new Map, $f734edd0e0ae82f0$var$Pc = new Map, $f734edd0e0ae82f0$var$Qc = [], $f734edd0e0ae82f0$var$Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $f734edd0e0ae82f0$var$Sc(a, b) {
    switch(a){
        case "focusin":
        case "focusout":
            $f734edd0e0ae82f0$var$Lc = null;
            break;
        case "dragenter":
        case "dragleave":
            $f734edd0e0ae82f0$var$Mc = null;
            break;
        case "mouseover":
        case "mouseout":
            $f734edd0e0ae82f0$var$Nc = null;
            break;
        case "pointerover":
        case "pointerout":
            $f734edd0e0ae82f0$var$Oc.delete(b.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            $f734edd0e0ae82f0$var$Pc.delete(b.pointerId);
    }
}
function $f734edd0e0ae82f0$var$Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = {
        blockedOn: b,
        domEventName: c,
        eventSystemFlags: d,
        nativeEvent: f,
        targetContainers: [
            e
        ]
    }, null !== b && (b = $f734edd0e0ae82f0$var$Cb(b), null !== b && $f734edd0e0ae82f0$var$Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
}
function $f734edd0e0ae82f0$var$Uc(a, b, c, d, e) {
    switch(b){
        case "focusin":
            return $f734edd0e0ae82f0$var$Lc = $f734edd0e0ae82f0$var$Tc($f734edd0e0ae82f0$var$Lc, a, b, c, d, e), !0;
        case "dragenter":
            return $f734edd0e0ae82f0$var$Mc = $f734edd0e0ae82f0$var$Tc($f734edd0e0ae82f0$var$Mc, a, b, c, d, e), !0;
        case "mouseover":
            return $f734edd0e0ae82f0$var$Nc = $f734edd0e0ae82f0$var$Tc($f734edd0e0ae82f0$var$Nc, a, b, c, d, e), !0;
        case "pointerover":
            var f = e.pointerId;
            $f734edd0e0ae82f0$var$Oc.set(f, $f734edd0e0ae82f0$var$Tc($f734edd0e0ae82f0$var$Oc.get(f) || null, a, b, c, d, e));
            return !0;
        case "gotpointercapture":
            return f = e.pointerId, $f734edd0e0ae82f0$var$Pc.set(f, $f734edd0e0ae82f0$var$Tc($f734edd0e0ae82f0$var$Pc.get(f) || null, a, b, c, d, e)), !0;
    }
    return !1;
}
function $f734edd0e0ae82f0$var$Vc(a) {
    var b = $f734edd0e0ae82f0$var$Wc(a.target);
    if (null !== b) {
        var c = $f734edd0e0ae82f0$var$Vb(b);
        if (null !== c) {
            if (b = c.tag, 13 === b) {
                if (b = $f734edd0e0ae82f0$var$Wb(c), null !== b) {
                    a.blockedOn = b;
                    $f734edd0e0ae82f0$var$Ic(a.priority, function() {
                        $f734edd0e0ae82f0$var$Gc(c);
                    });
                    return;
                }
            } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
                a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                return;
            }
        }
    }
    a.blockedOn = null;
}
function $f734edd0e0ae82f0$var$Xc(a) {
    if (null !== a.blockedOn) return !1;
    for(var b = a.targetContainers; 0 < b.length;){
        var c = $f734edd0e0ae82f0$var$Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
            c = a.nativeEvent;
            var d = new c.constructor(c.type, c);
            $f734edd0e0ae82f0$var$wb = d;
            c.target.dispatchEvent(d);
            $f734edd0e0ae82f0$var$wb = null;
        } else return b = $f734edd0e0ae82f0$var$Cb(c), null !== b && $f734edd0e0ae82f0$var$Fc(b), a.blockedOn = c, !1;
        b.shift();
    }
    return !0;
}
function $f734edd0e0ae82f0$var$Zc(a, b, c) {
    $f734edd0e0ae82f0$var$Xc(a) && c.delete(b);
}
function $f734edd0e0ae82f0$var$$c() {
    $f734edd0e0ae82f0$var$Jc = !1;
    null !== $f734edd0e0ae82f0$var$Lc && $f734edd0e0ae82f0$var$Xc($f734edd0e0ae82f0$var$Lc) && ($f734edd0e0ae82f0$var$Lc = null);
    null !== $f734edd0e0ae82f0$var$Mc && $f734edd0e0ae82f0$var$Xc($f734edd0e0ae82f0$var$Mc) && ($f734edd0e0ae82f0$var$Mc = null);
    null !== $f734edd0e0ae82f0$var$Nc && $f734edd0e0ae82f0$var$Xc($f734edd0e0ae82f0$var$Nc) && ($f734edd0e0ae82f0$var$Nc = null);
    $f734edd0e0ae82f0$var$Oc.forEach($f734edd0e0ae82f0$var$Zc);
    $f734edd0e0ae82f0$var$Pc.forEach($f734edd0e0ae82f0$var$Zc);
}
function $f734edd0e0ae82f0$var$ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, $f734edd0e0ae82f0$var$Jc || ($f734edd0e0ae82f0$var$Jc = !0, $5zFK8.unstable_scheduleCallback($5zFK8.unstable_NormalPriority, $f734edd0e0ae82f0$var$$c)));
}
function $f734edd0e0ae82f0$var$bd(a) {
    function b(b) {
        return $f734edd0e0ae82f0$var$ad(b, a);
    }
    if (0 < $f734edd0e0ae82f0$var$Kc.length) {
        $f734edd0e0ae82f0$var$ad($f734edd0e0ae82f0$var$Kc[0], a);
        for(var c = 1; c < $f734edd0e0ae82f0$var$Kc.length; c++){
            var d = $f734edd0e0ae82f0$var$Kc[c];
            d.blockedOn === a && (d.blockedOn = null);
        }
    }
    null !== $f734edd0e0ae82f0$var$Lc && $f734edd0e0ae82f0$var$ad($f734edd0e0ae82f0$var$Lc, a);
    null !== $f734edd0e0ae82f0$var$Mc && $f734edd0e0ae82f0$var$ad($f734edd0e0ae82f0$var$Mc, a);
    null !== $f734edd0e0ae82f0$var$Nc && $f734edd0e0ae82f0$var$ad($f734edd0e0ae82f0$var$Nc, a);
    $f734edd0e0ae82f0$var$Oc.forEach(b);
    $f734edd0e0ae82f0$var$Pc.forEach(b);
    for(c = 0; c < $f734edd0e0ae82f0$var$Qc.length; c++)d = $f734edd0e0ae82f0$var$Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for(; 0 < $f734edd0e0ae82f0$var$Qc.length && (c = $f734edd0e0ae82f0$var$Qc[0], null === c.blockedOn);)$f734edd0e0ae82f0$var$Vc(c), null === c.blockedOn && $f734edd0e0ae82f0$var$Qc.shift();
}
var $f734edd0e0ae82f0$var$cd = $f734edd0e0ae82f0$var$ua.ReactCurrentBatchConfig, $f734edd0e0ae82f0$var$dd = !0;
function $f734edd0e0ae82f0$var$ed(a, b, c, d) {
    var e = $f734edd0e0ae82f0$var$C, f = $f734edd0e0ae82f0$var$cd.transition;
    $f734edd0e0ae82f0$var$cd.transition = null;
    try {
        $f734edd0e0ae82f0$var$C = 1, $f734edd0e0ae82f0$var$fd(a, b, c, d);
    } finally{
        $f734edd0e0ae82f0$var$C = e, $f734edd0e0ae82f0$var$cd.transition = f;
    }
}
function $f734edd0e0ae82f0$var$gd(a, b, c, d) {
    var e = $f734edd0e0ae82f0$var$C, f = $f734edd0e0ae82f0$var$cd.transition;
    $f734edd0e0ae82f0$var$cd.transition = null;
    try {
        $f734edd0e0ae82f0$var$C = 4, $f734edd0e0ae82f0$var$fd(a, b, c, d);
    } finally{
        $f734edd0e0ae82f0$var$C = e, $f734edd0e0ae82f0$var$cd.transition = f;
    }
}
function $f734edd0e0ae82f0$var$fd(a, b, c, d) {
    if ($f734edd0e0ae82f0$var$dd) {
        var e = $f734edd0e0ae82f0$var$Yc(a, b, c, d);
        if (null === e) $f734edd0e0ae82f0$var$hd(a, b, d, $f734edd0e0ae82f0$var$id, c), $f734edd0e0ae82f0$var$Sc(a, d);
        else if ($f734edd0e0ae82f0$var$Uc(e, a, b, c, d)) d.stopPropagation();
        else if ($f734edd0e0ae82f0$var$Sc(a, d), b & 4 && -1 < $f734edd0e0ae82f0$var$Rc.indexOf(a)) {
            for(; null !== e;){
                var f = $f734edd0e0ae82f0$var$Cb(e);
                null !== f && $f734edd0e0ae82f0$var$Ec(f);
                f = $f734edd0e0ae82f0$var$Yc(a, b, c, d);
                null === f && $f734edd0e0ae82f0$var$hd(a, b, d, $f734edd0e0ae82f0$var$id, c);
                if (f === e) break;
                e = f;
            }
            null !== e && d.stopPropagation();
        } else $f734edd0e0ae82f0$var$hd(a, b, d, null, c);
    }
}
var $f734edd0e0ae82f0$var$id = null;
function $f734edd0e0ae82f0$var$Yc(a, b, c, d) {
    $f734edd0e0ae82f0$var$id = null;
    a = $f734edd0e0ae82f0$var$xb(d);
    a = $f734edd0e0ae82f0$var$Wc(a);
    if (null !== a) {
        if (b = $f734edd0e0ae82f0$var$Vb(a), null === b) a = null;
        else if (c = b.tag, 13 === c) {
            a = $f734edd0e0ae82f0$var$Wb(b);
            if (null !== a) return a;
            a = null;
        } else if (3 === c) {
            if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
            a = null;
        } else b !== a && (a = null);
    }
    $f734edd0e0ae82f0$var$id = a;
    return null;
}
function $f734edd0e0ae82f0$var$jd(a) {
    switch(a){
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch($f734edd0e0ae82f0$var$ec()){
                case $f734edd0e0ae82f0$var$fc:
                    return 1;
                case $f734edd0e0ae82f0$var$gc:
                    return 4;
                case $f734edd0e0ae82f0$var$hc:
                case $f734edd0e0ae82f0$var$ic:
                    return 16;
                case $f734edd0e0ae82f0$var$jc:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var $f734edd0e0ae82f0$var$kd = null, $f734edd0e0ae82f0$var$ld = null, $f734edd0e0ae82f0$var$md = null;
function $f734edd0e0ae82f0$var$nd() {
    if ($f734edd0e0ae82f0$var$md) return $f734edd0e0ae82f0$var$md;
    var a, b = $f734edd0e0ae82f0$var$ld, c = b.length, d, e = "value" in $f734edd0e0ae82f0$var$kd ? $f734edd0e0ae82f0$var$kd.value : $f734edd0e0ae82f0$var$kd.textContent, f = e.length;
    for(a = 0; a < c && b[a] === e[a]; a++);
    var g = c - a;
    for(d = 1; d <= g && b[c - d] === e[f - d]; d++);
    return $f734edd0e0ae82f0$var$md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function $f734edd0e0ae82f0$var$od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
}
function $f734edd0e0ae82f0$var$pd() {
    return !0;
}
function $f734edd0e0ae82f0$var$qd() {
    return !1;
}
function $f734edd0e0ae82f0$var$rd(a) {
    function b(b, d, e, f, g) {
        this._reactName = b;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f;
        this.target = g;
        this.currentTarget = null;
        for(var c in a)a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? $f734edd0e0ae82f0$var$pd : $f734edd0e0ae82f0$var$qd;
        this.isPropagationStopped = $f734edd0e0ae82f0$var$qd;
        return this;
    }
    $f734edd0e0ae82f0$var$A(b.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var a = this.nativeEvent;
            a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = $f734edd0e0ae82f0$var$pd);
        },
        stopPropagation: function() {
            var a = this.nativeEvent;
            a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = $f734edd0e0ae82f0$var$pd);
        },
        persist: function() {},
        isPersistent: $f734edd0e0ae82f0$var$pd
    });
    return b;
}
var $f734edd0e0ae82f0$var$sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(a) {
        return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
}, $f734edd0e0ae82f0$var$td = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$sd), $f734edd0e0ae82f0$var$ud = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$sd, {
    view: 0,
    detail: 0
}), $f734edd0e0ae82f0$var$vd = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$ud), $f734edd0e0ae82f0$var$wd, $f734edd0e0ae82f0$var$xd, $f734edd0e0ae82f0$var$yd, $f734edd0e0ae82f0$var$Ad = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: $f734edd0e0ae82f0$var$zd,
    button: 0,
    buttons: 0,
    relatedTarget: function(a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function(a) {
        if ("movementX" in a) return a.movementX;
        a !== $f734edd0e0ae82f0$var$yd && ($f734edd0e0ae82f0$var$yd && "mousemove" === a.type ? ($f734edd0e0ae82f0$var$wd = a.screenX - $f734edd0e0ae82f0$var$yd.screenX, $f734edd0e0ae82f0$var$xd = a.screenY - $f734edd0e0ae82f0$var$yd.screenY) : $f734edd0e0ae82f0$var$xd = $f734edd0e0ae82f0$var$wd = 0, $f734edd0e0ae82f0$var$yd = a);
        return $f734edd0e0ae82f0$var$wd;
    },
    movementY: function(a) {
        return "movementY" in a ? a.movementY : $f734edd0e0ae82f0$var$xd;
    }
}), $f734edd0e0ae82f0$var$Bd = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Ad), $f734edd0e0ae82f0$var$Cd = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$Ad, {
    dataTransfer: 0
}), $f734edd0e0ae82f0$var$Dd = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Cd), $f734edd0e0ae82f0$var$Ed = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$ud, {
    relatedTarget: 0
}), $f734edd0e0ae82f0$var$Fd = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Ed), $f734edd0e0ae82f0$var$Gd = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$sd, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), $f734edd0e0ae82f0$var$Hd = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Gd), $f734edd0e0ae82f0$var$Id = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$sd, {
    clipboardData: function(a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
}), $f734edd0e0ae82f0$var$Jd = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Id), $f734edd0e0ae82f0$var$Kd = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$sd, {
    data: 0
}), $f734edd0e0ae82f0$var$Ld = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Kd), $f734edd0e0ae82f0$var$Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, $f734edd0e0ae82f0$var$Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, $f734edd0e0ae82f0$var$Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function $f734edd0e0ae82f0$var$Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = $f734edd0e0ae82f0$var$Od[a]) ? !!b[a] : !1;
}
function $f734edd0e0ae82f0$var$zd() {
    return $f734edd0e0ae82f0$var$Pd;
}
var $f734edd0e0ae82f0$var$Qd = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$ud, {
    key: function(a) {
        if (a.key) {
            var b = $f734edd0e0ae82f0$var$Md[a.key] || a.key;
            if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = $f734edd0e0ae82f0$var$od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? $f734edd0e0ae82f0$var$Nd[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $f734edd0e0ae82f0$var$zd,
    charCode: function(a) {
        return "keypress" === a.type ? $f734edd0e0ae82f0$var$od(a) : 0;
    },
    keyCode: function(a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function(a) {
        return "keypress" === a.type ? $f734edd0e0ae82f0$var$od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
}), $f734edd0e0ae82f0$var$Rd = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Qd), $f734edd0e0ae82f0$var$Sd = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), $f734edd0e0ae82f0$var$Td = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Sd), $f734edd0e0ae82f0$var$Ud = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $f734edd0e0ae82f0$var$zd
}), $f734edd0e0ae82f0$var$Vd = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Ud), $f734edd0e0ae82f0$var$Wd = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$sd, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), $f734edd0e0ae82f0$var$Xd = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Wd), $f734edd0e0ae82f0$var$Yd = $f734edd0e0ae82f0$var$A({}, $f734edd0e0ae82f0$var$Ad, {
    deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
}), $f734edd0e0ae82f0$var$Zd = $f734edd0e0ae82f0$var$rd($f734edd0e0ae82f0$var$Yd), $f734edd0e0ae82f0$var$$d = [
    9,
    13,
    27,
    32
], $f734edd0e0ae82f0$var$ae = $f734edd0e0ae82f0$var$ia && "CompositionEvent" in window, $f734edd0e0ae82f0$var$be = null;
$f734edd0e0ae82f0$var$ia && "documentMode" in document && ($f734edd0e0ae82f0$var$be = document.documentMode);
var $f734edd0e0ae82f0$var$ce = $f734edd0e0ae82f0$var$ia && "TextEvent" in window && !$f734edd0e0ae82f0$var$be, $f734edd0e0ae82f0$var$de = $f734edd0e0ae82f0$var$ia && (!$f734edd0e0ae82f0$var$ae || $f734edd0e0ae82f0$var$be && 8 < $f734edd0e0ae82f0$var$be && 11 >= $f734edd0e0ae82f0$var$be), $f734edd0e0ae82f0$var$ee = String.fromCharCode(32), $f734edd0e0ae82f0$var$fe = !1;
function $f734edd0e0ae82f0$var$ge(a, b) {
    switch(a){
        case "keyup":
            return -1 !== $f734edd0e0ae82f0$var$$d.indexOf(b.keyCode);
        case "keydown":
            return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function $f734edd0e0ae82f0$var$he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
}
var $f734edd0e0ae82f0$var$ie = !1;
function $f734edd0e0ae82f0$var$je(a, b) {
    switch(a){
        case "compositionend":
            return $f734edd0e0ae82f0$var$he(b);
        case "keypress":
            if (32 !== b.which) return null;
            $f734edd0e0ae82f0$var$fe = !0;
            return $f734edd0e0ae82f0$var$ee;
        case "textInput":
            return a = b.data, a === $f734edd0e0ae82f0$var$ee && $f734edd0e0ae82f0$var$fe ? null : a;
        default:
            return null;
    }
}
function $f734edd0e0ae82f0$var$ke(a, b) {
    if ($f734edd0e0ae82f0$var$ie) return "compositionend" === a || !$f734edd0e0ae82f0$var$ae && $f734edd0e0ae82f0$var$ge(a, b) ? (a = $f734edd0e0ae82f0$var$nd(), $f734edd0e0ae82f0$var$md = $f734edd0e0ae82f0$var$ld = $f734edd0e0ae82f0$var$kd = null, $f734edd0e0ae82f0$var$ie = !1, a) : null;
    switch(a){
        case "paste":
            return null;
        case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                if (b.char && 1 < b.char.length) return b.char;
                if (b.which) return String.fromCharCode(b.which);
            }
            return null;
        case "compositionend":
            return $f734edd0e0ae82f0$var$de && "ko" !== b.locale ? null : b.data;
        default:
            return null;
    }
}
var $f734edd0e0ae82f0$var$le = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function $f734edd0e0ae82f0$var$me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!$f734edd0e0ae82f0$var$le[a.type] : "textarea" === b ? !0 : !1;
}
function $f734edd0e0ae82f0$var$ne(a, b, c, d) {
    $f734edd0e0ae82f0$var$Eb(d);
    b = $f734edd0e0ae82f0$var$oe(b, "onChange");
    0 < b.length && (c = new $f734edd0e0ae82f0$var$td("onChange", "change", null, c, d), a.push({
        event: c,
        listeners: b
    }));
}
var $f734edd0e0ae82f0$var$pe = null, $f734edd0e0ae82f0$var$qe = null;
function $f734edd0e0ae82f0$var$re(a) {
    $f734edd0e0ae82f0$var$se(a, 0);
}
function $f734edd0e0ae82f0$var$te(a) {
    var b = $f734edd0e0ae82f0$var$ue(a);
    if ($f734edd0e0ae82f0$var$Wa(b)) return a;
}
function $f734edd0e0ae82f0$var$ve(a, b) {
    if ("change" === a) return b;
}
var $f734edd0e0ae82f0$var$we = !1;
if ($f734edd0e0ae82f0$var$ia) {
    var $f734edd0e0ae82f0$var$xe;
    if ($f734edd0e0ae82f0$var$ia) {
        var $f734edd0e0ae82f0$var$ye = "oninput" in document;
        if (!$f734edd0e0ae82f0$var$ye) {
            var $f734edd0e0ae82f0$var$ze = document.createElement("div");
            $f734edd0e0ae82f0$var$ze.setAttribute("oninput", "return;");
            $f734edd0e0ae82f0$var$ye = "function" === typeof $f734edd0e0ae82f0$var$ze.oninput;
        }
        $f734edd0e0ae82f0$var$xe = $f734edd0e0ae82f0$var$ye;
    } else $f734edd0e0ae82f0$var$xe = !1;
    $f734edd0e0ae82f0$var$we = $f734edd0e0ae82f0$var$xe && (!document.documentMode || 9 < document.documentMode);
}
function $f734edd0e0ae82f0$var$Ae() {
    $f734edd0e0ae82f0$var$pe && ($f734edd0e0ae82f0$var$pe.detachEvent("onpropertychange", $f734edd0e0ae82f0$var$Be), $f734edd0e0ae82f0$var$qe = $f734edd0e0ae82f0$var$pe = null);
}
function $f734edd0e0ae82f0$var$Be(a) {
    if ("value" === a.propertyName && $f734edd0e0ae82f0$var$te($f734edd0e0ae82f0$var$qe)) {
        var b = [];
        $f734edd0e0ae82f0$var$ne(b, $f734edd0e0ae82f0$var$qe, a, $f734edd0e0ae82f0$var$xb(a));
        $f734edd0e0ae82f0$var$Jb($f734edd0e0ae82f0$var$re, b);
    }
}
function $f734edd0e0ae82f0$var$Ce(a, b, c) {
    "focusin" === a ? ($f734edd0e0ae82f0$var$Ae(), $f734edd0e0ae82f0$var$pe = b, $f734edd0e0ae82f0$var$qe = c, $f734edd0e0ae82f0$var$pe.attachEvent("onpropertychange", $f734edd0e0ae82f0$var$Be)) : "focusout" === a && $f734edd0e0ae82f0$var$Ae();
}
function $f734edd0e0ae82f0$var$De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return $f734edd0e0ae82f0$var$te($f734edd0e0ae82f0$var$qe);
}
function $f734edd0e0ae82f0$var$Ee(a, b) {
    if ("click" === a) return $f734edd0e0ae82f0$var$te(b);
}
function $f734edd0e0ae82f0$var$Fe(a, b) {
    if ("input" === a || "change" === a) return $f734edd0e0ae82f0$var$te(b);
}
function $f734edd0e0ae82f0$var$Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var $f734edd0e0ae82f0$var$He = "function" === typeof Object.is ? Object.is : $f734edd0e0ae82f0$var$Ge;
function $f734edd0e0ae82f0$var$Ie(a, b) {
    if ($f734edd0e0ae82f0$var$He(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for(d = 0; d < c.length; d++){
        var e = c[d];
        if (!$f734edd0e0ae82f0$var$ja.call(b, e) || !$f734edd0e0ae82f0$var$He(a[e], b[e])) return !1;
    }
    return !0;
}
function $f734edd0e0ae82f0$var$Je(a) {
    for(; a && a.firstChild;)a = a.firstChild;
    return a;
}
function $f734edd0e0ae82f0$var$Ke(a, b) {
    var c = $f734edd0e0ae82f0$var$Je(a);
    a = 0;
    for(var d; c;){
        if (3 === c.nodeType) {
            d = a + c.textContent.length;
            if (a <= b && d >= b) return {
                node: c,
                offset: b - a
            };
            a = d;
        }
        a: {
            for(; c;){
                if (c.nextSibling) {
                    c = c.nextSibling;
                    break a;
                }
                c = c.parentNode;
            }
            c = void 0;
        }
        c = $f734edd0e0ae82f0$var$Je(c);
    }
}
function $f734edd0e0ae82f0$var$Le(a, b) {
    return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? $f734edd0e0ae82f0$var$Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function $f734edd0e0ae82f0$var$Me() {
    for(var a = window, b = $f734edd0e0ae82f0$var$Xa(); b instanceof a.HTMLIFrameElement;){
        try {
            var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
            c = !1;
        }
        if (c) a = b.contentWindow;
        else break;
        b = $f734edd0e0ae82f0$var$Xa(a.document);
    }
    return b;
}
function $f734edd0e0ae82f0$var$Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function $f734edd0e0ae82f0$var$Oe(a) {
    var b = $f734edd0e0ae82f0$var$Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && $f734edd0e0ae82f0$var$Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && $f734edd0e0ae82f0$var$Ne(c)) {
            if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
            else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
                a = a.getSelection();
                var e = c.textContent.length, f = Math.min(d.start, e);
                d = void 0 === d.end ? f : Math.min(d.end, e);
                !a.extend && f > d && (e = d, d = f, f = e);
                e = $f734edd0e0ae82f0$var$Ke(c, f);
                var g = $f734edd0e0ae82f0$var$Ke(c, d);
                e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
            }
        }
        b = [];
        for(a = c; a = a.parentNode;)1 === a.nodeType && b.push({
            element: a,
            left: a.scrollLeft,
            top: a.scrollTop
        });
        "function" === typeof c.focus && c.focus();
        for(c = 0; c < b.length; c++)a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
}
var $f734edd0e0ae82f0$var$Pe = $f734edd0e0ae82f0$var$ia && "documentMode" in document && 11 >= document.documentMode, $f734edd0e0ae82f0$var$Qe = null, $f734edd0e0ae82f0$var$Re = null, $f734edd0e0ae82f0$var$Se = null, $f734edd0e0ae82f0$var$Te = !1;
function $f734edd0e0ae82f0$var$Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    $f734edd0e0ae82f0$var$Te || null == $f734edd0e0ae82f0$var$Qe || $f734edd0e0ae82f0$var$Qe !== $f734edd0e0ae82f0$var$Xa(d) || (d = $f734edd0e0ae82f0$var$Qe, "selectionStart" in d && $f734edd0e0ae82f0$var$Ne(d) ? d = {
        start: d.selectionStart,
        end: d.selectionEnd
    } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
        anchorNode: d.anchorNode,
        anchorOffset: d.anchorOffset,
        focusNode: d.focusNode,
        focusOffset: d.focusOffset
    }), $f734edd0e0ae82f0$var$Se && $f734edd0e0ae82f0$var$Ie($f734edd0e0ae82f0$var$Se, d) || ($f734edd0e0ae82f0$var$Se = d, d = $f734edd0e0ae82f0$var$oe($f734edd0e0ae82f0$var$Re, "onSelect"), 0 < d.length && (b = new $f734edd0e0ae82f0$var$td("onSelect", "select", null, b, c), a.push({
        event: b,
        listeners: d
    }), b.target = $f734edd0e0ae82f0$var$Qe)));
}
function $f734edd0e0ae82f0$var$Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
}
var $f734edd0e0ae82f0$var$We = {
    animationend: $f734edd0e0ae82f0$var$Ve("Animation", "AnimationEnd"),
    animationiteration: $f734edd0e0ae82f0$var$Ve("Animation", "AnimationIteration"),
    animationstart: $f734edd0e0ae82f0$var$Ve("Animation", "AnimationStart"),
    transitionend: $f734edd0e0ae82f0$var$Ve("Transition", "TransitionEnd")
}, $f734edd0e0ae82f0$var$Xe = {}, $f734edd0e0ae82f0$var$Ye = {};
$f734edd0e0ae82f0$var$ia && ($f734edd0e0ae82f0$var$Ye = document.createElement("div").style, "AnimationEvent" in window || (delete $f734edd0e0ae82f0$var$We.animationend.animation, delete $f734edd0e0ae82f0$var$We.animationiteration.animation, delete $f734edd0e0ae82f0$var$We.animationstart.animation), "TransitionEvent" in window || delete $f734edd0e0ae82f0$var$We.transitionend.transition);
function $f734edd0e0ae82f0$var$Ze(a) {
    if ($f734edd0e0ae82f0$var$Xe[a]) return $f734edd0e0ae82f0$var$Xe[a];
    if (!$f734edd0e0ae82f0$var$We[a]) return a;
    var b = $f734edd0e0ae82f0$var$We[a], c;
    for(c in b)if (b.hasOwnProperty(c) && c in $f734edd0e0ae82f0$var$Ye) return $f734edd0e0ae82f0$var$Xe[a] = b[c];
    return a;
}
var $f734edd0e0ae82f0$var$$e = $f734edd0e0ae82f0$var$Ze("animationend"), $f734edd0e0ae82f0$var$af = $f734edd0e0ae82f0$var$Ze("animationiteration"), $f734edd0e0ae82f0$var$bf = $f734edd0e0ae82f0$var$Ze("animationstart"), $f734edd0e0ae82f0$var$cf = $f734edd0e0ae82f0$var$Ze("transitionend"), $f734edd0e0ae82f0$var$df = new Map, $f734edd0e0ae82f0$var$ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function $f734edd0e0ae82f0$var$ff(a, b) {
    $f734edd0e0ae82f0$var$df.set(a, b);
    $f734edd0e0ae82f0$var$fa(b, [
        a
    ]);
}
for(var $f734edd0e0ae82f0$var$gf = 0; $f734edd0e0ae82f0$var$gf < $f734edd0e0ae82f0$var$ef.length; $f734edd0e0ae82f0$var$gf++){
    var $f734edd0e0ae82f0$var$hf = $f734edd0e0ae82f0$var$ef[$f734edd0e0ae82f0$var$gf], $f734edd0e0ae82f0$var$jf = $f734edd0e0ae82f0$var$hf.toLowerCase(), $f734edd0e0ae82f0$var$kf = $f734edd0e0ae82f0$var$hf[0].toUpperCase() + $f734edd0e0ae82f0$var$hf.slice(1);
    $f734edd0e0ae82f0$var$ff($f734edd0e0ae82f0$var$jf, "on" + $f734edd0e0ae82f0$var$kf);
}
$f734edd0e0ae82f0$var$ff($f734edd0e0ae82f0$var$$e, "onAnimationEnd");
$f734edd0e0ae82f0$var$ff($f734edd0e0ae82f0$var$af, "onAnimationIteration");
$f734edd0e0ae82f0$var$ff($f734edd0e0ae82f0$var$bf, "onAnimationStart");
$f734edd0e0ae82f0$var$ff("dblclick", "onDoubleClick");
$f734edd0e0ae82f0$var$ff("focusin", "onFocus");
$f734edd0e0ae82f0$var$ff("focusout", "onBlur");
$f734edd0e0ae82f0$var$ff($f734edd0e0ae82f0$var$cf, "onTransitionEnd");
$f734edd0e0ae82f0$var$ha("onMouseEnter", [
    "mouseout",
    "mouseover"
]);
$f734edd0e0ae82f0$var$ha("onMouseLeave", [
    "mouseout",
    "mouseover"
]);
$f734edd0e0ae82f0$var$ha("onPointerEnter", [
    "pointerout",
    "pointerover"
]);
$f734edd0e0ae82f0$var$ha("onPointerLeave", [
    "pointerout",
    "pointerover"
]);
$f734edd0e0ae82f0$var$fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$f734edd0e0ae82f0$var$fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$f734edd0e0ae82f0$var$fa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
]);
$f734edd0e0ae82f0$var$fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$f734edd0e0ae82f0$var$fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$f734edd0e0ae82f0$var$fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var $f734edd0e0ae82f0$var$lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $f734edd0e0ae82f0$var$mf = new Set("cancel close invalid load scroll toggle".split(" ").concat($f734edd0e0ae82f0$var$lf));
function $f734edd0e0ae82f0$var$nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    $f734edd0e0ae82f0$var$Ub(d, b, void 0, a);
    a.currentTarget = null;
}
function $f734edd0e0ae82f0$var$se(a, b) {
    b = 0 !== (b & 4);
    for(var c = 0; c < a.length; c++){
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
            var f = void 0;
            if (b) for(var g = d.length - 1; 0 <= g; g--){
                var h = d[g], k = h.instance, l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                $f734edd0e0ae82f0$var$nf(e, h, l);
                f = k;
            }
            else for(g = 0; g < d.length; g++){
                h = d[g];
                k = h.instance;
                l = h.currentTarget;
                h = h.listener;
                if (k !== f && e.isPropagationStopped()) break a;
                $f734edd0e0ae82f0$var$nf(e, h, l);
                f = k;
            }
        }
    }
    if ($f734edd0e0ae82f0$var$Qb) throw a = $f734edd0e0ae82f0$var$Rb, $f734edd0e0ae82f0$var$Qb = !1, $f734edd0e0ae82f0$var$Rb = null, a;
}
function $f734edd0e0ae82f0$var$D(a, b) {
    var c = b[$f734edd0e0ae82f0$var$of];
    void 0 === c && (c = b[$f734edd0e0ae82f0$var$of] = new Set);
    var d = a + "__bubble";
    c.has(d) || ($f734edd0e0ae82f0$var$pf(b, a, 2, !1), c.add(d));
}
function $f734edd0e0ae82f0$var$qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    $f734edd0e0ae82f0$var$pf(c, a, d, b);
}
var $f734edd0e0ae82f0$var$rf = "_reactListening" + Math.random().toString(36).slice(2);
function $f734edd0e0ae82f0$var$sf(a) {
    if (!a[$f734edd0e0ae82f0$var$rf]) {
        a[$f734edd0e0ae82f0$var$rf] = !0;
        $f734edd0e0ae82f0$var$da.forEach(function(b) {
            "selectionchange" !== b && ($f734edd0e0ae82f0$var$mf.has(b) || $f734edd0e0ae82f0$var$qf(b, !1, a), $f734edd0e0ae82f0$var$qf(b, !0, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[$f734edd0e0ae82f0$var$rf] || (b[$f734edd0e0ae82f0$var$rf] = !0, $f734edd0e0ae82f0$var$qf("selectionchange", !1, b));
    }
}
function $f734edd0e0ae82f0$var$pf(a, b, c, d) {
    switch($f734edd0e0ae82f0$var$jd(b)){
        case 1:
            var e = $f734edd0e0ae82f0$var$ed;
            break;
        case 4:
            e = $f734edd0e0ae82f0$var$gd;
            break;
        default:
            e = $f734edd0e0ae82f0$var$fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !$f734edd0e0ae82f0$var$Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
    d ? void 0 !== e ? a.addEventListener(b, c, {
        capture: !0,
        passive: e
    }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
        passive: e
    }) : a.addEventListener(b, c, !1);
}
function $f734edd0e0ae82f0$var$hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for(;;){
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for(g = d.return; null !== g;){
                var k = g.tag;
                if (3 === k || 4 === k) {
                    if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                }
                g = g.return;
            }
            for(; null !== h;){
                g = $f734edd0e0ae82f0$var$Wc(h);
                if (null === g) return;
                k = g.tag;
                if (5 === k || 6 === k) {
                    d = f = g;
                    continue a;
                }
                h = h.parentNode;
            }
        }
        d = d.return;
    }
    $f734edd0e0ae82f0$var$Jb(function() {
        var d = f, e = $f734edd0e0ae82f0$var$xb(c), g = [];
        a: {
            var h = $f734edd0e0ae82f0$var$df.get(a);
            if (void 0 !== h) {
                var k = $f734edd0e0ae82f0$var$td, n = a;
                switch(a){
                    case "keypress":
                        if (0 === $f734edd0e0ae82f0$var$od(c)) break a;
                    case "keydown":
                    case "keyup":
                        k = $f734edd0e0ae82f0$var$Rd;
                        break;
                    case "focusin":
                        n = "focus";
                        k = $f734edd0e0ae82f0$var$Fd;
                        break;
                    case "focusout":
                        n = "blur";
                        k = $f734edd0e0ae82f0$var$Fd;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = $f734edd0e0ae82f0$var$Fd;
                        break;
                    case "click":
                        if (2 === c.button) break a;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = $f734edd0e0ae82f0$var$Bd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = $f734edd0e0ae82f0$var$Dd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = $f734edd0e0ae82f0$var$Vd;
                        break;
                    case $f734edd0e0ae82f0$var$$e:
                    case $f734edd0e0ae82f0$var$af:
                    case $f734edd0e0ae82f0$var$bf:
                        k = $f734edd0e0ae82f0$var$Hd;
                        break;
                    case $f734edd0e0ae82f0$var$cf:
                        k = $f734edd0e0ae82f0$var$Xd;
                        break;
                    case "scroll":
                        k = $f734edd0e0ae82f0$var$vd;
                        break;
                    case "wheel":
                        k = $f734edd0e0ae82f0$var$Zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = $f734edd0e0ae82f0$var$Jd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = $f734edd0e0ae82f0$var$Td;
                }
                var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                t = [];
                for(var w = d, u; null !== w;){
                    u = w;
                    var F = u.stateNode;
                    5 === u.tag && null !== F && (u = F, null !== x && (F = $f734edd0e0ae82f0$var$Kb(w, x), null != F && t.push($f734edd0e0ae82f0$var$tf(w, F, u))));
                    if (J) break;
                    w = w.return;
                }
                0 < t.length && (h = new k(h, n, null, c, e), g.push({
                    event: h,
                    listeners: t
                }));
            }
        }
        if (0 === (b & 7)) {
            a: {
                h = "mouseover" === a || "pointerover" === a;
                k = "mouseout" === a || "pointerout" === a;
                if (h && c !== $f734edd0e0ae82f0$var$wb && (n = c.relatedTarget || c.fromElement) && ($f734edd0e0ae82f0$var$Wc(n) || n[$f734edd0e0ae82f0$var$uf])) break a;
                if (k || h) {
                    h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                    if (k) {
                        if (n = c.relatedTarget || c.toElement, k = d, n = n ? $f734edd0e0ae82f0$var$Wc(n) : null, null !== n && (J = $f734edd0e0ae82f0$var$Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                    } else k = null, n = d;
                    if (k !== n) {
                        t = $f734edd0e0ae82f0$var$Bd;
                        F = "onMouseLeave";
                        x = "onMouseEnter";
                        w = "mouse";
                        if ("pointerout" === a || "pointerover" === a) t = $f734edd0e0ae82f0$var$Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                        J = null == k ? h : $f734edd0e0ae82f0$var$ue(k);
                        u = null == n ? h : $f734edd0e0ae82f0$var$ue(n);
                        h = new t(F, w + "leave", k, c, e);
                        h.target = J;
                        h.relatedTarget = u;
                        F = null;
                        $f734edd0e0ae82f0$var$Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
                        J = F;
                        if (k && n) b: {
                            t = k;
                            x = n;
                            w = 0;
                            for(u = t; u; u = $f734edd0e0ae82f0$var$vf(u))w++;
                            u = 0;
                            for(F = x; F; F = $f734edd0e0ae82f0$var$vf(F))u++;
                            for(; 0 < w - u;)t = $f734edd0e0ae82f0$var$vf(t), w--;
                            for(; 0 < u - w;)x = $f734edd0e0ae82f0$var$vf(x), u--;
                            for(; w--;){
                                if (t === x || null !== x && t === x.alternate) break b;
                                t = $f734edd0e0ae82f0$var$vf(t);
                                x = $f734edd0e0ae82f0$var$vf(x);
                            }
                            t = null;
                        }
                        else t = null;
                        null !== k && $f734edd0e0ae82f0$var$wf(g, h, k, t, !1);
                        null !== n && null !== J && $f734edd0e0ae82f0$var$wf(g, J, n, t, !0);
                    }
                }
            }
            a: {
                h = d ? $f734edd0e0ae82f0$var$ue(d) : window;
                k = h.nodeName && h.nodeName.toLowerCase();
                if ("select" === k || "input" === k && "file" === h.type) var na = $f734edd0e0ae82f0$var$ve;
                else if ($f734edd0e0ae82f0$var$me(h)) {
                    if ($f734edd0e0ae82f0$var$we) na = $f734edd0e0ae82f0$var$Fe;
                    else {
                        na = $f734edd0e0ae82f0$var$De;
                        var xa = $f734edd0e0ae82f0$var$Ce;
                    }
                } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = $f734edd0e0ae82f0$var$Ee);
                if (na && (na = na(a, d))) {
                    $f734edd0e0ae82f0$var$ne(g, na, c, e);
                    break a;
                }
                xa && xa(a, h, d);
                "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && $f734edd0e0ae82f0$var$cb(h, "number", h.value);
            }
            xa = d ? $f734edd0e0ae82f0$var$ue(d) : window;
            switch(a){
                case "focusin":
                    if ($f734edd0e0ae82f0$var$me(xa) || "true" === xa.contentEditable) $f734edd0e0ae82f0$var$Qe = xa, $f734edd0e0ae82f0$var$Re = d, $f734edd0e0ae82f0$var$Se = null;
                    break;
                case "focusout":
                    $f734edd0e0ae82f0$var$Se = $f734edd0e0ae82f0$var$Re = $f734edd0e0ae82f0$var$Qe = null;
                    break;
                case "mousedown":
                    $f734edd0e0ae82f0$var$Te = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    $f734edd0e0ae82f0$var$Te = !1;
                    $f734edd0e0ae82f0$var$Ue(g, c, e);
                    break;
                case "selectionchange":
                    if ($f734edd0e0ae82f0$var$Pe) break;
                case "keydown":
                case "keyup":
                    $f734edd0e0ae82f0$var$Ue(g, c, e);
            }
            var $a;
            if ($f734edd0e0ae82f0$var$ae) b: {
                switch(a){
                    case "compositionstart":
                        var ba = "onCompositionStart";
                        break b;
                    case "compositionend":
                        ba = "onCompositionEnd";
                        break b;
                    case "compositionupdate":
                        ba = "onCompositionUpdate";
                        break b;
                }
                ba = void 0;
            }
            else $f734edd0e0ae82f0$var$ie ? $f734edd0e0ae82f0$var$ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
            ba && ($f734edd0e0ae82f0$var$de && "ko" !== c.locale && ($f734edd0e0ae82f0$var$ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && $f734edd0e0ae82f0$var$ie && ($a = $f734edd0e0ae82f0$var$nd()) : ($f734edd0e0ae82f0$var$kd = e, $f734edd0e0ae82f0$var$ld = "value" in $f734edd0e0ae82f0$var$kd ? $f734edd0e0ae82f0$var$kd.value : $f734edd0e0ae82f0$var$kd.textContent, $f734edd0e0ae82f0$var$ie = !0)), xa = $f734edd0e0ae82f0$var$oe(d, ba), 0 < xa.length && (ba = new $f734edd0e0ae82f0$var$Ld(ba, a, null, c, e), g.push({
                event: ba,
                listeners: xa
            }), $a ? ba.data = $a : ($a = $f734edd0e0ae82f0$var$he(c), null !== $a && (ba.data = $a))));
            if ($a = $f734edd0e0ae82f0$var$ce ? $f734edd0e0ae82f0$var$je(a, c) : $f734edd0e0ae82f0$var$ke(a, c)) d = $f734edd0e0ae82f0$var$oe(d, "onBeforeInput"), 0 < d.length && (e = new $f734edd0e0ae82f0$var$Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
                event: e,
                listeners: d
            }), e.data = $a);
        }
        $f734edd0e0ae82f0$var$se(g, b);
    });
}
function $f734edd0e0ae82f0$var$tf(a, b, c) {
    return {
        instance: a,
        listener: b,
        currentTarget: c
    };
}
function $f734edd0e0ae82f0$var$oe(a, b) {
    for(var c = b + "Capture", d = []; null !== a;){
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = $f734edd0e0ae82f0$var$Kb(a, c), null != f && d.unshift($f734edd0e0ae82f0$var$tf(a, f, e)), f = $f734edd0e0ae82f0$var$Kb(a, b), null != f && d.push($f734edd0e0ae82f0$var$tf(a, f, e)));
        a = a.return;
    }
    return d;
}
function $f734edd0e0ae82f0$var$vf(a) {
    if (null === a) return null;
    do a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
}
function $f734edd0e0ae82f0$var$wf(a, b, c, d, e) {
    for(var f = b._reactName, g = []; null !== c && c !== d;){
        var h = c, k = h.alternate, l = h.stateNode;
        if (null !== k && k === d) break;
        5 === h.tag && null !== l && (h = l, e ? (k = $f734edd0e0ae82f0$var$Kb(c, f), null != k && g.unshift($f734edd0e0ae82f0$var$tf(c, k, h))) : e || (k = $f734edd0e0ae82f0$var$Kb(c, f), null != k && g.push($f734edd0e0ae82f0$var$tf(c, k, h))));
        c = c.return;
    }
    0 !== g.length && a.push({
        event: b,
        listeners: g
    });
}
var $f734edd0e0ae82f0$var$xf = /\r\n?/g, $f734edd0e0ae82f0$var$yf = /\u0000|\uFFFD/g;
function $f734edd0e0ae82f0$var$zf(a) {
    return ("string" === typeof a ? a : "" + a).replace($f734edd0e0ae82f0$var$xf, "\n").replace($f734edd0e0ae82f0$var$yf, "");
}
function $f734edd0e0ae82f0$var$Af(a, b, c) {
    b = $f734edd0e0ae82f0$var$zf(b);
    if ($f734edd0e0ae82f0$var$zf(a) !== b && c) throw Error($f734edd0e0ae82f0$var$p(425));
}
function $f734edd0e0ae82f0$var$Bf() {}
var $f734edd0e0ae82f0$var$Cf = null, $f734edd0e0ae82f0$var$Df = null;
function $f734edd0e0ae82f0$var$Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var $f734edd0e0ae82f0$var$Ff = "function" === typeof setTimeout ? setTimeout : void 0, $f734edd0e0ae82f0$var$Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, $f734edd0e0ae82f0$var$Hf = "function" === typeof Promise ? Promise : void 0, $f734edd0e0ae82f0$var$Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof $f734edd0e0ae82f0$var$Hf ? function(a) {
    return $f734edd0e0ae82f0$var$Hf.resolve(null).then(a).catch($f734edd0e0ae82f0$var$If);
} : $f734edd0e0ae82f0$var$Ff;
function $f734edd0e0ae82f0$var$If(a) {
    setTimeout(function() {
        throw a;
    });
}
function $f734edd0e0ae82f0$var$Kf(a, b) {
    var c = b, d = 0;
    do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) {
            if (c = e.data, "/$" === c) {
                if (0 === d) {
                    a.removeChild(e);
                    $f734edd0e0ae82f0$var$bd(b);
                    return;
                }
                d--;
            } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        }
        c = e;
    }while (c);
    $f734edd0e0ae82f0$var$bd(b);
}
function $f734edd0e0ae82f0$var$Lf(a) {
    for(; null != a; a = a.nextSibling){
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
            b = a.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
        }
    }
    return a;
}
function $f734edd0e0ae82f0$var$Mf(a) {
    a = a.previousSibling;
    for(var b = 0; a;){
        if (8 === a.nodeType) {
            var c = a.data;
            if ("$" === c || "$!" === c || "$?" === c) {
                if (0 === b) return a;
                b--;
            } else "/$" === c && b++;
        }
        a = a.previousSibling;
    }
    return null;
}
var $f734edd0e0ae82f0$var$Nf = Math.random().toString(36).slice(2), $f734edd0e0ae82f0$var$Of = "__reactFiber$" + $f734edd0e0ae82f0$var$Nf, $f734edd0e0ae82f0$var$Pf = "__reactProps$" + $f734edd0e0ae82f0$var$Nf, $f734edd0e0ae82f0$var$uf = "__reactContainer$" + $f734edd0e0ae82f0$var$Nf, $f734edd0e0ae82f0$var$of = "__reactEvents$" + $f734edd0e0ae82f0$var$Nf, $f734edd0e0ae82f0$var$Qf = "__reactListeners$" + $f734edd0e0ae82f0$var$Nf, $f734edd0e0ae82f0$var$Rf = "__reactHandles$" + $f734edd0e0ae82f0$var$Nf;
function $f734edd0e0ae82f0$var$Wc(a) {
    var b = a[$f734edd0e0ae82f0$var$Of];
    if (b) return b;
    for(var c = a.parentNode; c;){
        if (b = c[$f734edd0e0ae82f0$var$uf] || c[$f734edd0e0ae82f0$var$Of]) {
            c = b.alternate;
            if (null !== b.child || null !== c && null !== c.child) for(a = $f734edd0e0ae82f0$var$Mf(a); null !== a;){
                if (c = a[$f734edd0e0ae82f0$var$Of]) return c;
                a = $f734edd0e0ae82f0$var$Mf(a);
            }
            return b;
        }
        a = c;
        c = a.parentNode;
    }
    return null;
}
function $f734edd0e0ae82f0$var$Cb(a) {
    a = a[$f734edd0e0ae82f0$var$Of] || a[$f734edd0e0ae82f0$var$uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function $f734edd0e0ae82f0$var$ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error($f734edd0e0ae82f0$var$p(33));
}
function $f734edd0e0ae82f0$var$Db(a) {
    return a[$f734edd0e0ae82f0$var$Pf] || null;
}
var $f734edd0e0ae82f0$var$Sf = [], $f734edd0e0ae82f0$var$Tf = -1;
function $f734edd0e0ae82f0$var$Uf(a) {
    return {
        current: a
    };
}
function $f734edd0e0ae82f0$var$E(a) {
    0 > $f734edd0e0ae82f0$var$Tf || (a.current = $f734edd0e0ae82f0$var$Sf[$f734edd0e0ae82f0$var$Tf], $f734edd0e0ae82f0$var$Sf[$f734edd0e0ae82f0$var$Tf] = null, $f734edd0e0ae82f0$var$Tf--);
}
function $f734edd0e0ae82f0$var$G(a, b) {
    $f734edd0e0ae82f0$var$Tf++;
    $f734edd0e0ae82f0$var$Sf[$f734edd0e0ae82f0$var$Tf] = a.current;
    a.current = b;
}
var $f734edd0e0ae82f0$var$Vf = {}, $f734edd0e0ae82f0$var$H = $f734edd0e0ae82f0$var$Uf($f734edd0e0ae82f0$var$Vf), $f734edd0e0ae82f0$var$Wf = $f734edd0e0ae82f0$var$Uf(!1), $f734edd0e0ae82f0$var$Xf = $f734edd0e0ae82f0$var$Vf;
function $f734edd0e0ae82f0$var$Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return $f734edd0e0ae82f0$var$Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for(f in c)e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
}
function $f734edd0e0ae82f0$var$Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
}
function $f734edd0e0ae82f0$var$$f() {
    $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Wf);
    $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$H);
}
function $f734edd0e0ae82f0$var$ag(a, b, c) {
    if ($f734edd0e0ae82f0$var$H.current !== $f734edd0e0ae82f0$var$Vf) throw Error($f734edd0e0ae82f0$var$p(168));
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$H, b);
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Wf, c);
}
function $f734edd0e0ae82f0$var$bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for(var e in d)if (!(e in b)) throw Error($f734edd0e0ae82f0$var$p(108, $f734edd0e0ae82f0$var$Ra(a) || "Unknown", e));
    return $f734edd0e0ae82f0$var$A({}, c, d);
}
function $f734edd0e0ae82f0$var$cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || $f734edd0e0ae82f0$var$Vf;
    $f734edd0e0ae82f0$var$Xf = $f734edd0e0ae82f0$var$H.current;
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$H, a);
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Wf, $f734edd0e0ae82f0$var$Wf.current);
    return !0;
}
function $f734edd0e0ae82f0$var$dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error($f734edd0e0ae82f0$var$p(169));
    c ? (a = $f734edd0e0ae82f0$var$bg(a, b, $f734edd0e0ae82f0$var$Xf), d.__reactInternalMemoizedMergedChildContext = a, $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Wf), $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$H), $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$H, a)) : $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Wf);
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Wf, c);
}
var $f734edd0e0ae82f0$var$eg = null, $f734edd0e0ae82f0$var$fg = !1, $f734edd0e0ae82f0$var$gg = !1;
function $f734edd0e0ae82f0$var$hg(a) {
    null === $f734edd0e0ae82f0$var$eg ? $f734edd0e0ae82f0$var$eg = [
        a
    ] : $f734edd0e0ae82f0$var$eg.push(a);
}
function $f734edd0e0ae82f0$var$ig(a) {
    $f734edd0e0ae82f0$var$fg = !0;
    $f734edd0e0ae82f0$var$hg(a);
}
function $f734edd0e0ae82f0$var$jg() {
    if (!$f734edd0e0ae82f0$var$gg && null !== $f734edd0e0ae82f0$var$eg) {
        $f734edd0e0ae82f0$var$gg = !0;
        var a = 0, b = $f734edd0e0ae82f0$var$C;
        try {
            var c = $f734edd0e0ae82f0$var$eg;
            for($f734edd0e0ae82f0$var$C = 1; a < c.length; a++){
                var d = c[a];
                do d = d(!0);
                while (null !== d);
            }
            $f734edd0e0ae82f0$var$eg = null;
            $f734edd0e0ae82f0$var$fg = !1;
        } catch (e) {
            throw null !== $f734edd0e0ae82f0$var$eg && ($f734edd0e0ae82f0$var$eg = $f734edd0e0ae82f0$var$eg.slice(a + 1)), $f734edd0e0ae82f0$var$ac($f734edd0e0ae82f0$var$fc, $f734edd0e0ae82f0$var$jg), e;
        } finally{
            $f734edd0e0ae82f0$var$C = b, $f734edd0e0ae82f0$var$gg = !1;
        }
    }
    return null;
}
var $f734edd0e0ae82f0$var$kg = [], $f734edd0e0ae82f0$var$lg = 0, $f734edd0e0ae82f0$var$mg = null, $f734edd0e0ae82f0$var$ng = 0, $f734edd0e0ae82f0$var$og = [], $f734edd0e0ae82f0$var$pg = 0, $f734edd0e0ae82f0$var$qg = null, $f734edd0e0ae82f0$var$rg = 1, $f734edd0e0ae82f0$var$sg = "";
function $f734edd0e0ae82f0$var$tg(a, b) {
    $f734edd0e0ae82f0$var$kg[$f734edd0e0ae82f0$var$lg++] = $f734edd0e0ae82f0$var$ng;
    $f734edd0e0ae82f0$var$kg[$f734edd0e0ae82f0$var$lg++] = $f734edd0e0ae82f0$var$mg;
    $f734edd0e0ae82f0$var$mg = a;
    $f734edd0e0ae82f0$var$ng = b;
}
function $f734edd0e0ae82f0$var$ug(a, b, c) {
    $f734edd0e0ae82f0$var$og[$f734edd0e0ae82f0$var$pg++] = $f734edd0e0ae82f0$var$rg;
    $f734edd0e0ae82f0$var$og[$f734edd0e0ae82f0$var$pg++] = $f734edd0e0ae82f0$var$sg;
    $f734edd0e0ae82f0$var$og[$f734edd0e0ae82f0$var$pg++] = $f734edd0e0ae82f0$var$qg;
    $f734edd0e0ae82f0$var$qg = a;
    var d = $f734edd0e0ae82f0$var$rg;
    a = $f734edd0e0ae82f0$var$sg;
    var e = 32 - $f734edd0e0ae82f0$var$oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - $f734edd0e0ae82f0$var$oc(b) + e;
    if (30 < f) {
        var g = e - e % 5;
        f = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        $f734edd0e0ae82f0$var$rg = 1 << 32 - $f734edd0e0ae82f0$var$oc(b) + e | c << e | d;
        $f734edd0e0ae82f0$var$sg = f + a;
    } else $f734edd0e0ae82f0$var$rg = 1 << f | c << e | d, $f734edd0e0ae82f0$var$sg = a;
}
function $f734edd0e0ae82f0$var$vg(a) {
    null !== a.return && ($f734edd0e0ae82f0$var$tg(a, 1), $f734edd0e0ae82f0$var$ug(a, 1, 0));
}
function $f734edd0e0ae82f0$var$wg(a) {
    for(; a === $f734edd0e0ae82f0$var$mg;)$f734edd0e0ae82f0$var$mg = $f734edd0e0ae82f0$var$kg[--$f734edd0e0ae82f0$var$lg], $f734edd0e0ae82f0$var$kg[$f734edd0e0ae82f0$var$lg] = null, $f734edd0e0ae82f0$var$ng = $f734edd0e0ae82f0$var$kg[--$f734edd0e0ae82f0$var$lg], $f734edd0e0ae82f0$var$kg[$f734edd0e0ae82f0$var$lg] = null;
    for(; a === $f734edd0e0ae82f0$var$qg;)$f734edd0e0ae82f0$var$qg = $f734edd0e0ae82f0$var$og[--$f734edd0e0ae82f0$var$pg], $f734edd0e0ae82f0$var$og[$f734edd0e0ae82f0$var$pg] = null, $f734edd0e0ae82f0$var$sg = $f734edd0e0ae82f0$var$og[--$f734edd0e0ae82f0$var$pg], $f734edd0e0ae82f0$var$og[$f734edd0e0ae82f0$var$pg] = null, $f734edd0e0ae82f0$var$rg = $f734edd0e0ae82f0$var$og[--$f734edd0e0ae82f0$var$pg], $f734edd0e0ae82f0$var$og[$f734edd0e0ae82f0$var$pg] = null;
}
var $f734edd0e0ae82f0$var$xg = null, $f734edd0e0ae82f0$var$yg = null, $f734edd0e0ae82f0$var$I = !1, $f734edd0e0ae82f0$var$zg = null;
function $f734edd0e0ae82f0$var$Ag(a, b) {
    var c = $f734edd0e0ae82f0$var$Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [
        c
    ], a.flags |= 16) : b.push(c);
}
function $f734edd0e0ae82f0$var$Cg(a, b) {
    switch(a.tag){
        case 5:
            var c = a.type;
            b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a.stateNode = b, $f734edd0e0ae82f0$var$xg = a, $f734edd0e0ae82f0$var$yg = $f734edd0e0ae82f0$var$Lf(b.firstChild), !0) : !1;
        case 6:
            return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, $f734edd0e0ae82f0$var$xg = a, $f734edd0e0ae82f0$var$yg = null, !0) : !1;
        case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== $f734edd0e0ae82f0$var$qg ? {
                id: $f734edd0e0ae82f0$var$rg,
                overflow: $f734edd0e0ae82f0$var$sg
            } : null, a.memoizedState = {
                dehydrated: b,
                treeContext: c,
                retryLane: 1073741824
            }, c = $f734edd0e0ae82f0$var$Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, $f734edd0e0ae82f0$var$xg = a, $f734edd0e0ae82f0$var$yg = null, !0) : !1;
        default:
            return !1;
    }
}
function $f734edd0e0ae82f0$var$Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function $f734edd0e0ae82f0$var$Eg(a) {
    if ($f734edd0e0ae82f0$var$I) {
        var b = $f734edd0e0ae82f0$var$yg;
        if (b) {
            var c = b;
            if (!$f734edd0e0ae82f0$var$Cg(a, b)) {
                if ($f734edd0e0ae82f0$var$Dg(a)) throw Error($f734edd0e0ae82f0$var$p(418));
                b = $f734edd0e0ae82f0$var$Lf(c.nextSibling);
                var d = $f734edd0e0ae82f0$var$xg;
                b && $f734edd0e0ae82f0$var$Cg(a, b) ? $f734edd0e0ae82f0$var$Ag(d, c) : (a.flags = a.flags & -4097 | 2, $f734edd0e0ae82f0$var$I = !1, $f734edd0e0ae82f0$var$xg = a);
            }
        } else {
            if ($f734edd0e0ae82f0$var$Dg(a)) throw Error($f734edd0e0ae82f0$var$p(418));
            a.flags = a.flags & -4097 | 2;
            $f734edd0e0ae82f0$var$I = !1;
            $f734edd0e0ae82f0$var$xg = a;
        }
    }
}
function $f734edd0e0ae82f0$var$Fg(a) {
    for(a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;)a = a.return;
    $f734edd0e0ae82f0$var$xg = a;
}
function $f734edd0e0ae82f0$var$Gg(a) {
    if (a !== $f734edd0e0ae82f0$var$xg) return !1;
    if (!$f734edd0e0ae82f0$var$I) return $f734edd0e0ae82f0$var$Fg(a), $f734edd0e0ae82f0$var$I = !0, !1;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !$f734edd0e0ae82f0$var$Ef(a.type, a.memoizedProps));
    if (b && (b = $f734edd0e0ae82f0$var$yg)) {
        if ($f734edd0e0ae82f0$var$Dg(a)) throw $f734edd0e0ae82f0$var$Hg(), Error($f734edd0e0ae82f0$var$p(418));
        for(; b;)$f734edd0e0ae82f0$var$Ag(a, b), b = $f734edd0e0ae82f0$var$Lf(b.nextSibling);
    }
    $f734edd0e0ae82f0$var$Fg(a);
    if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error($f734edd0e0ae82f0$var$p(317));
        a: {
            a = a.nextSibling;
            for(b = 0; a;){
                if (8 === a.nodeType) {
                    var c = a.data;
                    if ("/$" === c) {
                        if (0 === b) {
                            $f734edd0e0ae82f0$var$yg = $f734edd0e0ae82f0$var$Lf(a.nextSibling);
                            break a;
                        }
                        b--;
                    } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                }
                a = a.nextSibling;
            }
            $f734edd0e0ae82f0$var$yg = null;
        }
    } else $f734edd0e0ae82f0$var$yg = $f734edd0e0ae82f0$var$xg ? $f734edd0e0ae82f0$var$Lf(a.stateNode.nextSibling) : null;
    return !0;
}
function $f734edd0e0ae82f0$var$Hg() {
    for(var a = $f734edd0e0ae82f0$var$yg; a;)a = $f734edd0e0ae82f0$var$Lf(a.nextSibling);
}
function $f734edd0e0ae82f0$var$Ig() {
    $f734edd0e0ae82f0$var$yg = $f734edd0e0ae82f0$var$xg = null;
    $f734edd0e0ae82f0$var$I = !1;
}
function $f734edd0e0ae82f0$var$Jg(a) {
    null === $f734edd0e0ae82f0$var$zg ? $f734edd0e0ae82f0$var$zg = [
        a
    ] : $f734edd0e0ae82f0$var$zg.push(a);
}
var $f734edd0e0ae82f0$var$Kg = $f734edd0e0ae82f0$var$ua.ReactCurrentBatchConfig;
function $f734edd0e0ae82f0$var$Lg(a, b) {
    if (a && a.defaultProps) {
        b = $f734edd0e0ae82f0$var$A({}, b);
        a = a.defaultProps;
        for(var c in a)void 0 === b[c] && (b[c] = a[c]);
        return b;
    }
    return b;
}
var $f734edd0e0ae82f0$var$Mg = $f734edd0e0ae82f0$var$Uf(null), $f734edd0e0ae82f0$var$Ng = null, $f734edd0e0ae82f0$var$Og = null, $f734edd0e0ae82f0$var$Pg = null;
function $f734edd0e0ae82f0$var$Qg() {
    $f734edd0e0ae82f0$var$Pg = $f734edd0e0ae82f0$var$Og = $f734edd0e0ae82f0$var$Ng = null;
}
function $f734edd0e0ae82f0$var$Rg(a) {
    var b = $f734edd0e0ae82f0$var$Mg.current;
    $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Mg);
    a._currentValue = b;
}
function $f734edd0e0ae82f0$var$Sg(a, b, c) {
    for(; null !== a;){
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
    }
}
function $f734edd0e0ae82f0$var$Tg(a, b) {
    $f734edd0e0ae82f0$var$Ng = a;
    $f734edd0e0ae82f0$var$Pg = $f734edd0e0ae82f0$var$Og = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && ($f734edd0e0ae82f0$var$Ug = !0), a.firstContext = null);
}
function $f734edd0e0ae82f0$var$Vg(a) {
    var b = a._currentValue;
    if ($f734edd0e0ae82f0$var$Pg !== a) {
        if (a = {
            context: a,
            memoizedValue: b,
            next: null
        }, null === $f734edd0e0ae82f0$var$Og) {
            if (null === $f734edd0e0ae82f0$var$Ng) throw Error($f734edd0e0ae82f0$var$p(308));
            $f734edd0e0ae82f0$var$Og = a;
            $f734edd0e0ae82f0$var$Ng.dependencies = {
                lanes: 0,
                firstContext: a
            };
        } else $f734edd0e0ae82f0$var$Og = $f734edd0e0ae82f0$var$Og.next = a;
    }
    return b;
}
var $f734edd0e0ae82f0$var$Wg = null;
function $f734edd0e0ae82f0$var$Xg(a) {
    null === $f734edd0e0ae82f0$var$Wg ? $f734edd0e0ae82f0$var$Wg = [
        a
    ] : $f734edd0e0ae82f0$var$Wg.push(a);
}
function $f734edd0e0ae82f0$var$Yg(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, $f734edd0e0ae82f0$var$Xg(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return $f734edd0e0ae82f0$var$Zg(a, d);
}
function $f734edd0e0ae82f0$var$Zg(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for(a = a.return; null !== a;)a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
}
var $f734edd0e0ae82f0$var$$g = !1;
function $f734edd0e0ae82f0$var$ah(a) {
    a.updateQueue = {
        baseState: a.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    };
}
function $f734edd0e0ae82f0$var$bh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects
    });
}
function $f734edd0e0ae82f0$var$ch(a, b) {
    return {
        eventTime: a,
        lane: b,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    };
}
function $f734edd0e0ae82f0$var$dh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== ($f734edd0e0ae82f0$var$K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return $f734edd0e0ae82f0$var$Zg(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, $f734edd0e0ae82f0$var$Xg(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return $f734edd0e0ae82f0$var$Zg(a, c);
}
function $f734edd0e0ae82f0$var$eh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        $f734edd0e0ae82f0$var$Cc(a, c);
    }
}
function $f734edd0e0ae82f0$var$fh(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
            do {
                var g = {
                    eventTime: c.eventTime,
                    lane: c.lane,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                };
                null === f ? e = f = g : f = f.next = g;
                c = c.next;
            }while (null !== c);
            null === f ? e = f = b : f = f.next = b;
        } else e = f = b;
        c = {
            baseState: d.baseState,
            firstBaseUpdate: e,
            lastBaseUpdate: f,
            shared: d.shared,
            effects: d.effects
        };
        a.updateQueue = c;
        return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
}
function $f734edd0e0ae82f0$var$gh(a, b, c, d) {
    var e = a.updateQueue;
    $f734edd0e0ae82f0$var$$g = !1;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
        e.shared.pending = null;
        var k = h, l = k.next;
        k.next = null;
        null === g ? f = l : g.next = l;
        g = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }
    if (null !== f) {
        var q = e.baseState;
        g = 0;
        m = l = k = null;
        h = f;
        do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
                null !== m && (m = m.next = {
                    eventTime: y,
                    lane: 0,
                    tag: h.tag,
                    payload: h.payload,
                    callback: h.callback,
                    next: null
                });
                a: {
                    var n = a, t = h;
                    r = b;
                    y = c;
                    switch(t.tag){
                        case 1:
                            n = t.payload;
                            if ("function" === typeof n) {
                                q = n.call(y, q, r);
                                break a;
                            }
                            q = n;
                            break a;
                        case 3:
                            n.flags = n.flags & -65537 | 128;
                        case 0:
                            n = t.payload;
                            r = "function" === typeof n ? n.call(y, q, r) : n;
                            if (null === r || void 0 === r) break a;
                            q = $f734edd0e0ae82f0$var$A({}, q, r);
                            break a;
                        case 2:
                            $f734edd0e0ae82f0$var$$g = !0;
                    }
                }
                null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [
                    h
                ] : r.push(h));
            } else y = {
                eventTime: y,
                lane: r,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
            }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) {
                if (h = e.shared.pending, null === h) break;
                else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
            }
        }while (1);
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
            e = b;
            do g |= e.lane, e = e.next;
            while (e !== b);
        } else null === f && (e.shared.lanes = 0);
        $f734edd0e0ae82f0$var$hh |= g;
        a.lanes = g;
        a.memoizedState = q;
    }
}
function $f734edd0e0ae82f0$var$ih(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for(b = 0; b < a.length; b++){
        var d = a[b], e = d.callback;
        if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error($f734edd0e0ae82f0$var$p(191, e));
            e.call(d);
        }
    }
}
var $f734edd0e0ae82f0$var$jh = (new $an5iK.Component).refs;
function $f734edd0e0ae82f0$var$kh(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : $f734edd0e0ae82f0$var$A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
}
var $f734edd0e0ae82f0$var$nh = {
    isMounted: function(a) {
        return (a = a._reactInternals) ? $f734edd0e0ae82f0$var$Vb(a) === a : !1;
    },
    enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = $f734edd0e0ae82f0$var$L(), e = $f734edd0e0ae82f0$var$lh(a), f = $f734edd0e0ae82f0$var$ch(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = $f734edd0e0ae82f0$var$dh(a, f, e);
        null !== b && ($f734edd0e0ae82f0$var$mh(b, a, e, d), $f734edd0e0ae82f0$var$eh(b, a, e));
    },
    enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = $f734edd0e0ae82f0$var$L(), e = $f734edd0e0ae82f0$var$lh(a), f = $f734edd0e0ae82f0$var$ch(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = $f734edd0e0ae82f0$var$dh(a, f, e);
        null !== b && ($f734edd0e0ae82f0$var$mh(b, a, e, d), $f734edd0e0ae82f0$var$eh(b, a, e));
    },
    enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = $f734edd0e0ae82f0$var$L(), d = $f734edd0e0ae82f0$var$lh(a), e = $f734edd0e0ae82f0$var$ch(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = $f734edd0e0ae82f0$var$dh(a, e, d);
        null !== b && ($f734edd0e0ae82f0$var$mh(b, a, d, c), $f734edd0e0ae82f0$var$eh(b, a, d));
    }
};
function $f734edd0e0ae82f0$var$oh(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !$f734edd0e0ae82f0$var$Ie(c, d) || !$f734edd0e0ae82f0$var$Ie(e, f) : !0;
}
function $f734edd0e0ae82f0$var$ph(a, b, c) {
    var d = !1, e = $f734edd0e0ae82f0$var$Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = $f734edd0e0ae82f0$var$Vg(f) : (e = $f734edd0e0ae82f0$var$Zf(b) ? $f734edd0e0ae82f0$var$Xf : $f734edd0e0ae82f0$var$H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? $f734edd0e0ae82f0$var$Yf(a, e) : $f734edd0e0ae82f0$var$Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = $f734edd0e0ae82f0$var$nh;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
}
function $f734edd0e0ae82f0$var$qh(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && $f734edd0e0ae82f0$var$nh.enqueueReplaceState(b, b.state, null);
}
function $f734edd0e0ae82f0$var$rh(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = $f734edd0e0ae82f0$var$jh;
    $f734edd0e0ae82f0$var$ah(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = $f734edd0e0ae82f0$var$Vg(f) : (f = $f734edd0e0ae82f0$var$Zf(b) ? $f734edd0e0ae82f0$var$Xf : $f734edd0e0ae82f0$var$H.current, e.context = $f734edd0e0ae82f0$var$Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && ($f734edd0e0ae82f0$var$kh(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && $f734edd0e0ae82f0$var$nh.enqueueReplaceState(e, e.state, null), $f734edd0e0ae82f0$var$gh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function $f734edd0e0ae82f0$var$sh(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
            c = c._owner;
            if (c) {
                if (1 !== c.tag) throw Error($f734edd0e0ae82f0$var$p(309));
                var d = c.stateNode;
            }
            if (!d) throw Error($f734edd0e0ae82f0$var$p(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a) {
                var b = e.refs;
                b === $f734edd0e0ae82f0$var$jh && (b = e.refs = {});
                null === a ? delete b[f] : b[f] = a;
            };
            b._stringRef = f;
            return b;
        }
        if ("string" !== typeof a) throw Error($f734edd0e0ae82f0$var$p(284));
        if (!c._owner) throw Error($f734edd0e0ae82f0$var$p(290, a));
    }
    return a;
}
function $f734edd0e0ae82f0$var$th(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error($f734edd0e0ae82f0$var$p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function $f734edd0e0ae82f0$var$uh(a) {
    var b = a._init;
    return b(a._payload);
}
function $f734edd0e0ae82f0$var$vh(a) {
    function b(b, c) {
        if (a) {
            var d = b.deletions;
            null === d ? (b.deletions = [
                c
            ], b.flags |= 16) : d.push(c);
        }
    }
    function c(c, d) {
        if (!a) return null;
        for(; null !== d;)b(c, d), d = d.sibling;
        return null;
    }
    function d(a, b) {
        for(a = new Map; null !== b;)null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
        return a;
    }
    function e(a, b) {
        a = $f734edd0e0ae82f0$var$wh(a, b);
        a.index = 0;
        a.sibling = null;
        return a;
    }
    function f(b, c, d) {
        b.index = d;
        if (!a) return b.flags |= 1048576, c;
        d = b.alternate;
        if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
        b.flags |= 2;
        return c;
    }
    function g(b) {
        a && null === b.alternate && (b.flags |= 2);
        return b;
    }
    function h(a, b, c, d) {
        if (null === b || 6 !== b.tag) return b = $f734edd0e0ae82f0$var$xh(c, a.mode, d), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function k(a, b, c, d) {
        var f = c.type;
        if (f === $f734edd0e0ae82f0$var$ya) return m(a, b, c.props.children, d, c.key);
        if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === $f734edd0e0ae82f0$var$Ha && $f734edd0e0ae82f0$var$uh(f) === b.type)) return d = e(b, c.props), d.ref = $f734edd0e0ae82f0$var$sh(a, b, c), d.return = a, d;
        d = $f734edd0e0ae82f0$var$yh(c.type, c.key, c.props, null, a.mode, d);
        d.ref = $f734edd0e0ae82f0$var$sh(a, b, c);
        d.return = a;
        return d;
    }
    function l(a, b, c, d) {
        if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = $f734edd0e0ae82f0$var$zh(c, a.mode, d), b.return = a, b;
        b = e(b, c.children || []);
        b.return = a;
        return b;
    }
    function m(a, b, c, d, f) {
        if (null === b || 7 !== b.tag) return b = $f734edd0e0ae82f0$var$Ah(c, a.mode, d, f), b.return = a, b;
        b = e(b, c);
        b.return = a;
        return b;
    }
    function q(a, b, c) {
        if ("string" === typeof b && "" !== b || "number" === typeof b) return b = $f734edd0e0ae82f0$var$xh("" + b, a.mode, c), b.return = a, b;
        if ("object" === typeof b && null !== b) {
            switch(b.$$typeof){
                case $f734edd0e0ae82f0$var$va:
                    return c = $f734edd0e0ae82f0$var$yh(b.type, b.key, b.props, null, a.mode, c), c.ref = $f734edd0e0ae82f0$var$sh(a, null, b), c.return = a, c;
                case $f734edd0e0ae82f0$var$wa:
                    return b = $f734edd0e0ae82f0$var$zh(b, a.mode, c), b.return = a, b;
                case $f734edd0e0ae82f0$var$Ha:
                    var d = b._init;
                    return q(a, d(b._payload), c);
            }
            if ($f734edd0e0ae82f0$var$eb(b) || $f734edd0e0ae82f0$var$Ka(b)) return b = $f734edd0e0ae82f0$var$Ah(b, a.mode, c, null), b.return = a, b;
            $f734edd0e0ae82f0$var$th(a, b);
        }
        return null;
    }
    function r(a, b, c, d) {
        var e = null !== b ? b.key : null;
        if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
        if ("object" === typeof c && null !== c) {
            switch(c.$$typeof){
                case $f734edd0e0ae82f0$var$va:
                    return c.key === e ? k(a, b, c, d) : null;
                case $f734edd0e0ae82f0$var$wa:
                    return c.key === e ? l(a, b, c, d) : null;
                case $f734edd0e0ae82f0$var$Ha:
                    return e = c._init, r(a, b, e(c._payload), d);
            }
            if ($f734edd0e0ae82f0$var$eb(c) || $f734edd0e0ae82f0$var$Ka(c)) return null !== e ? null : m(a, b, c, d, null);
            $f734edd0e0ae82f0$var$th(a, c);
        }
        return null;
    }
    function y(a, b, c, d, e) {
        if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
        if ("object" === typeof d && null !== d) {
            switch(d.$$typeof){
                case $f734edd0e0ae82f0$var$va:
                    return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
                case $f734edd0e0ae82f0$var$wa:
                    return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
                case $f734edd0e0ae82f0$var$Ha:
                    var f = d._init;
                    return y(a, b, c, f(d._payload), e);
            }
            if ($f734edd0e0ae82f0$var$eb(d) || $f734edd0e0ae82f0$var$Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
            $f734edd0e0ae82f0$var$th(b, d);
        }
        return null;
    }
    function n(e, g, h, k) {
        for(var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++){
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n = r(e, u, h[w], k);
            if (null === n) {
                null === u && (u = x);
                break;
            }
            a && u && null === n.alternate && b(e, u);
            g = f(n, g, w);
            null === m ? l = n : m.sibling = n;
            m = n;
            u = x;
        }
        if (w === h.length) return c(e, u), $f734edd0e0ae82f0$var$I && $f734edd0e0ae82f0$var$tg(e, w), l;
        if (null === u) {
            for(; w < h.length; w++)u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
            $f734edd0e0ae82f0$var$I && $f734edd0e0ae82f0$var$tg(e, w);
            return l;
        }
        for(u = d(e, u); w < h.length; w++)x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
        a && u.forEach(function(a) {
            return b(e, a);
        });
        $f734edd0e0ae82f0$var$I && $f734edd0e0ae82f0$var$tg(e, w);
        return l;
    }
    function t(e, g, h, k) {
        var l = $f734edd0e0ae82f0$var$Ka(h);
        if ("function" !== typeof l) throw Error($f734edd0e0ae82f0$var$p(150));
        h = l.call(h);
        if (null == h) throw Error($f734edd0e0ae82f0$var$p(151));
        for(var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()){
            m.index > w ? (x = m, m = null) : x = m.sibling;
            var t = r(e, m, n.value, k);
            if (null === t) {
                null === m && (m = x);
                break;
            }
            a && m && null === t.alternate && b(e, m);
            g = f(t, g, w);
            null === u ? l = t : u.sibling = t;
            u = t;
            m = x;
        }
        if (n.done) return c(e, m), $f734edd0e0ae82f0$var$I && $f734edd0e0ae82f0$var$tg(e, w), l;
        if (null === m) {
            for(; !n.done; w++, n = h.next())n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
            $f734edd0e0ae82f0$var$I && $f734edd0e0ae82f0$var$tg(e, w);
            return l;
        }
        for(m = d(e, m); !n.done; w++, n = h.next())n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
        a && m.forEach(function(a) {
            return b(e, a);
        });
        $f734edd0e0ae82f0$var$I && $f734edd0e0ae82f0$var$tg(e, w);
        return l;
    }
    function J(a, d, f, h) {
        "object" === typeof f && null !== f && f.type === $f734edd0e0ae82f0$var$ya && null === f.key && (f = f.props.children);
        if ("object" === typeof f && null !== f) {
            switch(f.$$typeof){
                case $f734edd0e0ae82f0$var$va:
                    a: {
                        for(var k = f.key, l = d; null !== l;){
                            if (l.key === k) {
                                k = f.type;
                                if (k === $f734edd0e0ae82f0$var$ya) {
                                    if (7 === l.tag) {
                                        c(a, l.sibling);
                                        d = e(l, f.props.children);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    }
                                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === $f734edd0e0ae82f0$var$Ha && $f734edd0e0ae82f0$var$uh(k) === l.type) {
                                    c(a, l.sibling);
                                    d = e(l, f.props);
                                    d.ref = $f734edd0e0ae82f0$var$sh(a, l, f);
                                    d.return = a;
                                    a = d;
                                    break a;
                                }
                                c(a, l);
                                break;
                            } else b(a, l);
                            l = l.sibling;
                        }
                        f.type === $f734edd0e0ae82f0$var$ya ? (d = $f734edd0e0ae82f0$var$Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = $f734edd0e0ae82f0$var$yh(f.type, f.key, f.props, null, a.mode, h), h.ref = $f734edd0e0ae82f0$var$sh(a, d, f), h.return = a, a = h);
                    }
                    return g(a);
                case $f734edd0e0ae82f0$var$wa:
                    a: {
                        for(l = f.key; null !== d;){
                            if (d.key === l) {
                                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                    c(a, d.sibling);
                                    d = e(d, f.children || []);
                                    d.return = a;
                                    a = d;
                                    break a;
                                } else {
                                    c(a, d);
                                    break;
                                }
                            } else b(a, d);
                            d = d.sibling;
                        }
                        d = $f734edd0e0ae82f0$var$zh(f, a.mode, h);
                        d.return = a;
                        a = d;
                    }
                    return g(a);
                case $f734edd0e0ae82f0$var$Ha:
                    return l = f._init, J(a, d, l(f._payload), h);
            }
            if ($f734edd0e0ae82f0$var$eb(f)) return n(a, d, f, h);
            if ($f734edd0e0ae82f0$var$Ka(f)) return t(a, d, f, h);
            $f734edd0e0ae82f0$var$th(a, f);
        }
        return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = $f734edd0e0ae82f0$var$xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
    }
    return J;
}
var $f734edd0e0ae82f0$var$Bh = $f734edd0e0ae82f0$var$vh(!0), $f734edd0e0ae82f0$var$Ch = $f734edd0e0ae82f0$var$vh(!1), $f734edd0e0ae82f0$var$Dh = {}, $f734edd0e0ae82f0$var$Eh = $f734edd0e0ae82f0$var$Uf($f734edd0e0ae82f0$var$Dh), $f734edd0e0ae82f0$var$Fh = $f734edd0e0ae82f0$var$Uf($f734edd0e0ae82f0$var$Dh), $f734edd0e0ae82f0$var$Gh = $f734edd0e0ae82f0$var$Uf($f734edd0e0ae82f0$var$Dh);
function $f734edd0e0ae82f0$var$Hh(a) {
    if (a === $f734edd0e0ae82f0$var$Dh) throw Error($f734edd0e0ae82f0$var$p(174));
    return a;
}
function $f734edd0e0ae82f0$var$Ih(a, b) {
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Gh, b);
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Fh, a);
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Eh, $f734edd0e0ae82f0$var$Dh);
    a = b.nodeType;
    switch(a){
        case 9:
        case 11:
            b = (b = b.documentElement) ? b.namespaceURI : $f734edd0e0ae82f0$var$lb(null, "");
            break;
        default:
            a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = $f734edd0e0ae82f0$var$lb(b, a);
    }
    $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Eh);
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Eh, b);
}
function $f734edd0e0ae82f0$var$Jh() {
    $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Eh);
    $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Fh);
    $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Gh);
}
function $f734edd0e0ae82f0$var$Kh(a) {
    $f734edd0e0ae82f0$var$Hh($f734edd0e0ae82f0$var$Gh.current);
    var b = $f734edd0e0ae82f0$var$Hh($f734edd0e0ae82f0$var$Eh.current);
    var c = $f734edd0e0ae82f0$var$lb(b, a.type);
    b !== c && ($f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Fh, a), $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Eh, c));
}
function $f734edd0e0ae82f0$var$Lh(a) {
    $f734edd0e0ae82f0$var$Fh.current === a && ($f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Eh), $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Fh));
}
var $f734edd0e0ae82f0$var$M = $f734edd0e0ae82f0$var$Uf(0);
function $f734edd0e0ae82f0$var$Mh(a) {
    for(var b = a; null !== b;){
        if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
        }
        if (b === a) break;
        for(; null === b.sibling;){
            if (null === b.return || b.return === a) return null;
            b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
    }
    return null;
}
var $f734edd0e0ae82f0$var$Nh = [];
function $f734edd0e0ae82f0$var$Oh() {
    for(var a = 0; a < $f734edd0e0ae82f0$var$Nh.length; a++)$f734edd0e0ae82f0$var$Nh[a]._workInProgressVersionPrimary = null;
    $f734edd0e0ae82f0$var$Nh.length = 0;
}
var $f734edd0e0ae82f0$var$Ph = $f734edd0e0ae82f0$var$ua.ReactCurrentDispatcher, $f734edd0e0ae82f0$var$Qh = $f734edd0e0ae82f0$var$ua.ReactCurrentBatchConfig, $f734edd0e0ae82f0$var$Rh = 0, $f734edd0e0ae82f0$var$N = null, $f734edd0e0ae82f0$var$O = null, $f734edd0e0ae82f0$var$P = null, $f734edd0e0ae82f0$var$Sh = !1, $f734edd0e0ae82f0$var$Th = !1, $f734edd0e0ae82f0$var$Uh = 0, $f734edd0e0ae82f0$var$Vh = 0;
function $f734edd0e0ae82f0$var$Q() {
    throw Error($f734edd0e0ae82f0$var$p(321));
}
function $f734edd0e0ae82f0$var$Wh(a, b) {
    if (null === b) return !1;
    for(var c = 0; c < b.length && c < a.length; c++)if (!$f734edd0e0ae82f0$var$He(a[c], b[c])) return !1;
    return !0;
}
function $f734edd0e0ae82f0$var$Xh(a, b, c, d, e, f) {
    $f734edd0e0ae82f0$var$Rh = f;
    $f734edd0e0ae82f0$var$N = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    $f734edd0e0ae82f0$var$Ph.current = null === a || null === a.memoizedState ? $f734edd0e0ae82f0$var$Yh : $f734edd0e0ae82f0$var$Zh;
    a = c(d, e);
    if ($f734edd0e0ae82f0$var$Th) {
        f = 0;
        do {
            $f734edd0e0ae82f0$var$Th = !1;
            $f734edd0e0ae82f0$var$Uh = 0;
            if (25 <= f) throw Error($f734edd0e0ae82f0$var$p(301));
            f += 1;
            $f734edd0e0ae82f0$var$P = $f734edd0e0ae82f0$var$O = null;
            b.updateQueue = null;
            $f734edd0e0ae82f0$var$Ph.current = $f734edd0e0ae82f0$var$$h;
            a = c(d, e);
        }while ($f734edd0e0ae82f0$var$Th);
    }
    $f734edd0e0ae82f0$var$Ph.current = $f734edd0e0ae82f0$var$ai;
    b = null !== $f734edd0e0ae82f0$var$O && null !== $f734edd0e0ae82f0$var$O.next;
    $f734edd0e0ae82f0$var$Rh = 0;
    $f734edd0e0ae82f0$var$P = $f734edd0e0ae82f0$var$O = $f734edd0e0ae82f0$var$N = null;
    $f734edd0e0ae82f0$var$Sh = !1;
    if (b) throw Error($f734edd0e0ae82f0$var$p(300));
    return a;
}
function $f734edd0e0ae82f0$var$bi() {
    var a = 0 !== $f734edd0e0ae82f0$var$Uh;
    $f734edd0e0ae82f0$var$Uh = 0;
    return a;
}
function $f734edd0e0ae82f0$var$ci() {
    var a = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    null === $f734edd0e0ae82f0$var$P ? $f734edd0e0ae82f0$var$N.memoizedState = $f734edd0e0ae82f0$var$P = a : $f734edd0e0ae82f0$var$P = $f734edd0e0ae82f0$var$P.next = a;
    return $f734edd0e0ae82f0$var$P;
}
function $f734edd0e0ae82f0$var$di() {
    if (null === $f734edd0e0ae82f0$var$O) {
        var a = $f734edd0e0ae82f0$var$N.alternate;
        a = null !== a ? a.memoizedState : null;
    } else a = $f734edd0e0ae82f0$var$O.next;
    var b = null === $f734edd0e0ae82f0$var$P ? $f734edd0e0ae82f0$var$N.memoizedState : $f734edd0e0ae82f0$var$P.next;
    if (null !== b) $f734edd0e0ae82f0$var$P = b, $f734edd0e0ae82f0$var$O = a;
    else {
        if (null === a) throw Error($f734edd0e0ae82f0$var$p(310));
        $f734edd0e0ae82f0$var$O = a;
        a = {
            memoizedState: $f734edd0e0ae82f0$var$O.memoizedState,
            baseState: $f734edd0e0ae82f0$var$O.baseState,
            baseQueue: $f734edd0e0ae82f0$var$O.baseQueue,
            queue: $f734edd0e0ae82f0$var$O.queue,
            next: null
        };
        null === $f734edd0e0ae82f0$var$P ? $f734edd0e0ae82f0$var$N.memoizedState = $f734edd0e0ae82f0$var$P = a : $f734edd0e0ae82f0$var$P = $f734edd0e0ae82f0$var$P.next = a;
    }
    return $f734edd0e0ae82f0$var$P;
}
function $f734edd0e0ae82f0$var$ei(a, b) {
    return "function" === typeof b ? b(a) : b;
}
function $f734edd0e0ae82f0$var$fi(a) {
    var b = $f734edd0e0ae82f0$var$di(), c = b.queue;
    if (null === c) throw Error($f734edd0e0ae82f0$var$p(311));
    c.lastRenderedReducer = a;
    var d = $f734edd0e0ae82f0$var$O, e = d.baseQueue, f = c.pending;
    if (null !== f) {
        if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
        }
        d.baseQueue = e = f;
        c.pending = null;
    }
    if (null !== e) {
        f = e.next;
        d = d.baseState;
        var h = g = null, k = null, l = f;
        do {
            var m = l.lane;
            if (($f734edd0e0ae82f0$var$Rh & m) === m) null !== k && (k = k.next = {
                lane: 0,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
            }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
                var q = {
                    lane: m,
                    action: l.action,
                    hasEagerState: l.hasEagerState,
                    eagerState: l.eagerState,
                    next: null
                };
                null === k ? (h = k = q, g = d) : k = k.next = q;
                $f734edd0e0ae82f0$var$N.lanes |= m;
                $f734edd0e0ae82f0$var$hh |= m;
            }
            l = l.next;
        }while (null !== l && l !== f);
        null === k ? g = d : k.next = h;
        $f734edd0e0ae82f0$var$He(d, b.memoizedState) || ($f734edd0e0ae82f0$var$Ug = !0);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k;
        c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
        e = a;
        do f = e.lane, $f734edd0e0ae82f0$var$N.lanes |= f, $f734edd0e0ae82f0$var$hh |= f, e = e.next;
        while (e !== a);
    } else null === e && (c.lanes = 0);
    return [
        b.memoizedState,
        c.dispatch
    ];
}
function $f734edd0e0ae82f0$var$gi(a) {
    var b = $f734edd0e0ae82f0$var$di(), c = b.queue;
    if (null === c) throw Error($f734edd0e0ae82f0$var$p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do f = a(f, g.action), g = g.next;
        while (g !== e);
        $f734edd0e0ae82f0$var$He(f, b.memoizedState) || ($f734edd0e0ae82f0$var$Ug = !0);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
    }
    return [
        f,
        d
    ];
}
function $f734edd0e0ae82f0$var$hi() {}
function $f734edd0e0ae82f0$var$ii(a, b) {
    var c = $f734edd0e0ae82f0$var$N, d = $f734edd0e0ae82f0$var$di(), e = b(), f = !$f734edd0e0ae82f0$var$He(d.memoizedState, e);
    f && (d.memoizedState = e, $f734edd0e0ae82f0$var$Ug = !0);
    d = d.queue;
    $f734edd0e0ae82f0$var$ji($f734edd0e0ae82f0$var$ki.bind(null, c, d, a), [
        a
    ]);
    if (d.getSnapshot !== b || f || null !== $f734edd0e0ae82f0$var$P && $f734edd0e0ae82f0$var$P.memoizedState.tag & 1) {
        c.flags |= 2048;
        $f734edd0e0ae82f0$var$li(9, $f734edd0e0ae82f0$var$mi.bind(null, c, d, e, b), void 0, null);
        if (null === $f734edd0e0ae82f0$var$R) throw Error($f734edd0e0ae82f0$var$p(349));
        0 !== ($f734edd0e0ae82f0$var$Rh & 30) || $f734edd0e0ae82f0$var$ni(c, b, e);
    }
    return e;
}
function $f734edd0e0ae82f0$var$ni(a, b, c) {
    a.flags |= 16384;
    a = {
        getSnapshot: b,
        value: c
    };
    b = $f734edd0e0ae82f0$var$N.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, $f734edd0e0ae82f0$var$N.updateQueue = b, b.stores = [
        a
    ]) : (c = b.stores, null === c ? b.stores = [
        a
    ] : c.push(a));
}
function $f734edd0e0ae82f0$var$mi(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    $f734edd0e0ae82f0$var$oi(b) && $f734edd0e0ae82f0$var$pi(a);
}
function $f734edd0e0ae82f0$var$ki(a, b, c) {
    return c(function() {
        $f734edd0e0ae82f0$var$oi(b) && $f734edd0e0ae82f0$var$pi(a);
    });
}
function $f734edd0e0ae82f0$var$oi(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
        var c = b();
        return !$f734edd0e0ae82f0$var$He(a, c);
    } catch (d) {
        return !0;
    }
}
function $f734edd0e0ae82f0$var$pi(a) {
    var b = $f734edd0e0ae82f0$var$Zg(a, 1);
    null !== b && $f734edd0e0ae82f0$var$mh(b, a, 1, -1);
}
function $f734edd0e0ae82f0$var$qi(a) {
    var b = $f734edd0e0ae82f0$var$ci();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $f734edd0e0ae82f0$var$ei,
        lastRenderedState: a
    };
    b.queue = a;
    a = a.dispatch = $f734edd0e0ae82f0$var$ri.bind(null, $f734edd0e0ae82f0$var$N, a);
    return [
        b.memoizedState,
        a
    ];
}
function $f734edd0e0ae82f0$var$li(a, b, c, d) {
    a = {
        tag: a,
        create: b,
        destroy: c,
        deps: d,
        next: null
    };
    b = $f734edd0e0ae82f0$var$N.updateQueue;
    null === b ? (b = {
        lastEffect: null,
        stores: null
    }, $f734edd0e0ae82f0$var$N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
}
function $f734edd0e0ae82f0$var$si() {
    return $f734edd0e0ae82f0$var$di().memoizedState;
}
function $f734edd0e0ae82f0$var$ti(a, b, c, d) {
    var e = $f734edd0e0ae82f0$var$ci();
    $f734edd0e0ae82f0$var$N.flags |= a;
    e.memoizedState = $f734edd0e0ae82f0$var$li(1 | b, c, void 0, void 0 === d ? null : d);
}
function $f734edd0e0ae82f0$var$ui(a, b, c, d) {
    var e = $f734edd0e0ae82f0$var$di();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== $f734edd0e0ae82f0$var$O) {
        var g = $f734edd0e0ae82f0$var$O.memoizedState;
        f = g.destroy;
        if (null !== d && $f734edd0e0ae82f0$var$Wh(d, g.deps)) {
            e.memoizedState = $f734edd0e0ae82f0$var$li(b, c, f, d);
            return;
        }
    }
    $f734edd0e0ae82f0$var$N.flags |= a;
    e.memoizedState = $f734edd0e0ae82f0$var$li(1 | b, c, f, d);
}
function $f734edd0e0ae82f0$var$vi(a, b) {
    return $f734edd0e0ae82f0$var$ti(8390656, 8, a, b);
}
function $f734edd0e0ae82f0$var$ji(a, b) {
    return $f734edd0e0ae82f0$var$ui(2048, 8, a, b);
}
function $f734edd0e0ae82f0$var$wi(a, b) {
    return $f734edd0e0ae82f0$var$ui(4, 2, a, b);
}
function $f734edd0e0ae82f0$var$xi(a, b) {
    return $f734edd0e0ae82f0$var$ui(4, 4, a, b);
}
function $f734edd0e0ae82f0$var$yi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
        b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
        b.current = null;
    };
}
function $f734edd0e0ae82f0$var$zi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([
        a
    ]) : null;
    return $f734edd0e0ae82f0$var$ui(4, 4, $f734edd0e0ae82f0$var$yi.bind(null, b, a), c);
}
function $f734edd0e0ae82f0$var$Ai() {}
function $f734edd0e0ae82f0$var$Bi(a, b) {
    var c = $f734edd0e0ae82f0$var$di();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && $f734edd0e0ae82f0$var$Wh(b, d[1])) return d[0];
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function $f734edd0e0ae82f0$var$Ci(a, b) {
    var c = $f734edd0e0ae82f0$var$di();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && $f734edd0e0ae82f0$var$Wh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [
        a,
        b
    ];
    return a;
}
function $f734edd0e0ae82f0$var$Di(a, b, c) {
    if (0 === ($f734edd0e0ae82f0$var$Rh & 21)) return a.baseState && (a.baseState = !1, $f734edd0e0ae82f0$var$Ug = !0), a.memoizedState = c;
    $f734edd0e0ae82f0$var$He(c, b) || (c = $f734edd0e0ae82f0$var$yc(), $f734edd0e0ae82f0$var$N.lanes |= c, $f734edd0e0ae82f0$var$hh |= c, a.baseState = !0);
    return b;
}
function $f734edd0e0ae82f0$var$Ei(a, b) {
    var c = $f734edd0e0ae82f0$var$C;
    $f734edd0e0ae82f0$var$C = 0 !== c && 4 > c ? c : 4;
    a(!0);
    var d = $f734edd0e0ae82f0$var$Qh.transition;
    $f734edd0e0ae82f0$var$Qh.transition = {};
    try {
        a(!1), b();
    } finally{
        $f734edd0e0ae82f0$var$C = c, $f734edd0e0ae82f0$var$Qh.transition = d;
    }
}
function $f734edd0e0ae82f0$var$Fi() {
    return $f734edd0e0ae82f0$var$di().memoizedState;
}
function $f734edd0e0ae82f0$var$Gi(a, b, c) {
    var d = $f734edd0e0ae82f0$var$lh(a);
    c = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if ($f734edd0e0ae82f0$var$Hi(a)) $f734edd0e0ae82f0$var$Ii(b, c);
    else if (c = $f734edd0e0ae82f0$var$Yg(a, b, c, d), null !== c) {
        var e = $f734edd0e0ae82f0$var$L();
        $f734edd0e0ae82f0$var$mh(c, a, d, e);
        $f734edd0e0ae82f0$var$Ji(c, b, d);
    }
}
function $f734edd0e0ae82f0$var$ri(a, b, c) {
    var d = $f734edd0e0ae82f0$var$lh(a), e = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if ($f734edd0e0ae82f0$var$Hi(a)) $f734edd0e0ae82f0$var$Ii(b, e);
    else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = !0;
            e.eagerState = h;
            if ($f734edd0e0ae82f0$var$He(h, g)) {
                var k = b.interleaved;
                null === k ? (e.next = e, $f734edd0e0ae82f0$var$Xg(b)) : (e.next = k.next, k.next = e);
                b.interleaved = e;
                return;
            }
        } catch (l) {} finally{}
        c = $f734edd0e0ae82f0$var$Yg(a, b, e, d);
        null !== c && (e = $f734edd0e0ae82f0$var$L(), $f734edd0e0ae82f0$var$mh(c, a, d, e), $f734edd0e0ae82f0$var$Ji(c, b, d));
    }
}
function $f734edd0e0ae82f0$var$Hi(a) {
    var b = a.alternate;
    return a === $f734edd0e0ae82f0$var$N || null !== b && b === $f734edd0e0ae82f0$var$N;
}
function $f734edd0e0ae82f0$var$Ii(a, b) {
    $f734edd0e0ae82f0$var$Th = $f734edd0e0ae82f0$var$Sh = !0;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
}
function $f734edd0e0ae82f0$var$Ji(a, b, c) {
    if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        $f734edd0e0ae82f0$var$Cc(a, c);
    }
}
var $f734edd0e0ae82f0$var$ai = {
    readContext: $f734edd0e0ae82f0$var$Vg,
    useCallback: $f734edd0e0ae82f0$var$Q,
    useContext: $f734edd0e0ae82f0$var$Q,
    useEffect: $f734edd0e0ae82f0$var$Q,
    useImperativeHandle: $f734edd0e0ae82f0$var$Q,
    useInsertionEffect: $f734edd0e0ae82f0$var$Q,
    useLayoutEffect: $f734edd0e0ae82f0$var$Q,
    useMemo: $f734edd0e0ae82f0$var$Q,
    useReducer: $f734edd0e0ae82f0$var$Q,
    useRef: $f734edd0e0ae82f0$var$Q,
    useState: $f734edd0e0ae82f0$var$Q,
    useDebugValue: $f734edd0e0ae82f0$var$Q,
    useDeferredValue: $f734edd0e0ae82f0$var$Q,
    useTransition: $f734edd0e0ae82f0$var$Q,
    useMutableSource: $f734edd0e0ae82f0$var$Q,
    useSyncExternalStore: $f734edd0e0ae82f0$var$Q,
    useId: $f734edd0e0ae82f0$var$Q,
    unstable_isNewReconciler: !1
}, $f734edd0e0ae82f0$var$Yh = {
    readContext: $f734edd0e0ae82f0$var$Vg,
    useCallback: function(a, b) {
        $f734edd0e0ae82f0$var$ci().memoizedState = [
            a,
            void 0 === b ? null : b
        ];
        return a;
    },
    useContext: $f734edd0e0ae82f0$var$Vg,
    useEffect: $f734edd0e0ae82f0$var$vi,
    useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([
            a
        ]) : null;
        return $f734edd0e0ae82f0$var$ti(4194308, 4, $f734edd0e0ae82f0$var$yi.bind(null, b, a), c);
    },
    useLayoutEffect: function(a, b) {
        return $f734edd0e0ae82f0$var$ti(4194308, 4, a, b);
    },
    useInsertionEffect: function(a, b) {
        return $f734edd0e0ae82f0$var$ti(4, 2, a, b);
    },
    useMemo: function(a, b) {
        var c = $f734edd0e0ae82f0$var$ci();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [
            a,
            b
        ];
        return a;
    },
    useReducer: function(a, b, c) {
        var d = $f734edd0e0ae82f0$var$ci();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: a,
            lastRenderedState: b
        };
        d.queue = a;
        a = a.dispatch = $f734edd0e0ae82f0$var$Gi.bind(null, $f734edd0e0ae82f0$var$N, a);
        return [
            d.memoizedState,
            a
        ];
    },
    useRef: function(a) {
        var b = $f734edd0e0ae82f0$var$ci();
        a = {
            current: a
        };
        return b.memoizedState = a;
    },
    useState: $f734edd0e0ae82f0$var$qi,
    useDebugValue: $f734edd0e0ae82f0$var$Ai,
    useDeferredValue: function(a) {
        return $f734edd0e0ae82f0$var$ci().memoizedState = a;
    },
    useTransition: function() {
        var a = $f734edd0e0ae82f0$var$qi(!1), b = a[0];
        a = $f734edd0e0ae82f0$var$Ei.bind(null, a[1]);
        $f734edd0e0ae82f0$var$ci().memoizedState = a;
        return [
            b,
            a
        ];
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(a, b, c) {
        var d = $f734edd0e0ae82f0$var$N, e = $f734edd0e0ae82f0$var$ci();
        if ($f734edd0e0ae82f0$var$I) {
            if (void 0 === c) throw Error($f734edd0e0ae82f0$var$p(407));
            c = c();
        } else {
            c = b();
            if (null === $f734edd0e0ae82f0$var$R) throw Error($f734edd0e0ae82f0$var$p(349));
            0 !== ($f734edd0e0ae82f0$var$Rh & 30) || $f734edd0e0ae82f0$var$ni(d, b, c);
        }
        e.memoizedState = c;
        var f = {
            value: c,
            getSnapshot: b
        };
        e.queue = f;
        $f734edd0e0ae82f0$var$vi($f734edd0e0ae82f0$var$ki.bind(null, d, f, a), [
            a
        ]);
        d.flags |= 2048;
        $f734edd0e0ae82f0$var$li(9, $f734edd0e0ae82f0$var$mi.bind(null, d, f, c, b), void 0, null);
        return c;
    },
    useId: function() {
        var a = $f734edd0e0ae82f0$var$ci(), b = $f734edd0e0ae82f0$var$R.identifierPrefix;
        if ($f734edd0e0ae82f0$var$I) {
            var c = $f734edd0e0ae82f0$var$sg;
            var d = $f734edd0e0ae82f0$var$rg;
            c = (d & ~(1 << 32 - $f734edd0e0ae82f0$var$oc(d) - 1)).toString(32) + c;
            b = ":" + b + "R" + c;
            c = $f734edd0e0ae82f0$var$Uh++;
            0 < c && (b += "H" + c.toString(32));
            b += ":";
        } else c = $f734edd0e0ae82f0$var$Vh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
}, $f734edd0e0ae82f0$var$Zh = {
    readContext: $f734edd0e0ae82f0$var$Vg,
    useCallback: $f734edd0e0ae82f0$var$Bi,
    useContext: $f734edd0e0ae82f0$var$Vg,
    useEffect: $f734edd0e0ae82f0$var$ji,
    useImperativeHandle: $f734edd0e0ae82f0$var$zi,
    useInsertionEffect: $f734edd0e0ae82f0$var$wi,
    useLayoutEffect: $f734edd0e0ae82f0$var$xi,
    useMemo: $f734edd0e0ae82f0$var$Ci,
    useReducer: $f734edd0e0ae82f0$var$fi,
    useRef: $f734edd0e0ae82f0$var$si,
    useState: function() {
        return $f734edd0e0ae82f0$var$fi($f734edd0e0ae82f0$var$ei);
    },
    useDebugValue: $f734edd0e0ae82f0$var$Ai,
    useDeferredValue: function(a) {
        var b = $f734edd0e0ae82f0$var$di();
        return $f734edd0e0ae82f0$var$Di(b, $f734edd0e0ae82f0$var$O.memoizedState, a);
    },
    useTransition: function() {
        var a = $f734edd0e0ae82f0$var$fi($f734edd0e0ae82f0$var$ei)[0], b = $f734edd0e0ae82f0$var$di().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: $f734edd0e0ae82f0$var$hi,
    useSyncExternalStore: $f734edd0e0ae82f0$var$ii,
    useId: $f734edd0e0ae82f0$var$Fi,
    unstable_isNewReconciler: !1
}, $f734edd0e0ae82f0$var$$h = {
    readContext: $f734edd0e0ae82f0$var$Vg,
    useCallback: $f734edd0e0ae82f0$var$Bi,
    useContext: $f734edd0e0ae82f0$var$Vg,
    useEffect: $f734edd0e0ae82f0$var$ji,
    useImperativeHandle: $f734edd0e0ae82f0$var$zi,
    useInsertionEffect: $f734edd0e0ae82f0$var$wi,
    useLayoutEffect: $f734edd0e0ae82f0$var$xi,
    useMemo: $f734edd0e0ae82f0$var$Ci,
    useReducer: $f734edd0e0ae82f0$var$gi,
    useRef: $f734edd0e0ae82f0$var$si,
    useState: function() {
        return $f734edd0e0ae82f0$var$gi($f734edd0e0ae82f0$var$ei);
    },
    useDebugValue: $f734edd0e0ae82f0$var$Ai,
    useDeferredValue: function(a) {
        var b = $f734edd0e0ae82f0$var$di();
        return null === $f734edd0e0ae82f0$var$O ? b.memoizedState = a : $f734edd0e0ae82f0$var$Di(b, $f734edd0e0ae82f0$var$O.memoizedState, a);
    },
    useTransition: function() {
        var a = $f734edd0e0ae82f0$var$gi($f734edd0e0ae82f0$var$ei)[0], b = $f734edd0e0ae82f0$var$di().memoizedState;
        return [
            a,
            b
        ];
    },
    useMutableSource: $f734edd0e0ae82f0$var$hi,
    useSyncExternalStore: $f734edd0e0ae82f0$var$ii,
    useId: $f734edd0e0ae82f0$var$Fi,
    unstable_isNewReconciler: !1
};
function $f734edd0e0ae82f0$var$Ki(a, b) {
    try {
        var c = "", d = b;
        do c += $f734edd0e0ae82f0$var$Pa(d), d = d.return;
        while (d);
        var e = c;
    } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return {
        value: a,
        source: b,
        stack: e,
        digest: null
    };
}
function $f734edd0e0ae82f0$var$Li(a, b, c) {
    return {
        value: a,
        source: null,
        stack: null != c ? c : null,
        digest: null != b ? b : null
    };
}
function $f734edd0e0ae82f0$var$Mi(a, b) {
    try {
        console.error(b.value);
    } catch (c) {
        setTimeout(function() {
            throw c;
        });
    }
}
var $f734edd0e0ae82f0$var$Ni = "function" === typeof WeakMap ? WeakMap : Map;
function $f734edd0e0ae82f0$var$Oi(a, b, c) {
    c = $f734edd0e0ae82f0$var$ch(-1, c);
    c.tag = 3;
    c.payload = {
        element: null
    };
    var d = b.value;
    c.callback = function() {
        $f734edd0e0ae82f0$var$Pi || ($f734edd0e0ae82f0$var$Pi = !0, $f734edd0e0ae82f0$var$Qi = d);
        $f734edd0e0ae82f0$var$Mi(a, b);
    };
    return c;
}
function $f734edd0e0ae82f0$var$Ri(a, b, c) {
    c = $f734edd0e0ae82f0$var$ch(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
        var e = b.value;
        c.payload = function() {
            return d(e);
        };
        c.callback = function() {
            $f734edd0e0ae82f0$var$Mi(a, b);
        };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        $f734edd0e0ae82f0$var$Mi(a, b);
        "function" !== typeof d && (null === $f734edd0e0ae82f0$var$Si ? $f734edd0e0ae82f0$var$Si = new Set([
            this
        ]) : $f734edd0e0ae82f0$var$Si.add(this));
        var c = b.stack;
        this.componentDidCatch(b.value, {
            componentStack: null !== c ? c : ""
        });
    });
    return c;
}
function $f734edd0e0ae82f0$var$Ti(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
        d = a.pingCache = new $f734edd0e0ae82f0$var$Ni;
        var e = new Set;
        d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
    e.has(c) || (e.add(c), a = $f734edd0e0ae82f0$var$Ui.bind(null, a, b, c), b.then(a, a));
}
function $f734edd0e0ae82f0$var$Vi(a) {
    do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
        if (b) return a;
        a = a.return;
    }while (null !== a);
    return null;
}
function $f734edd0e0ae82f0$var$Wi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = $f734edd0e0ae82f0$var$ch(-1, 1), b.tag = 2, $f734edd0e0ae82f0$var$dh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
}
var $f734edd0e0ae82f0$var$Xi = $f734edd0e0ae82f0$var$ua.ReactCurrentOwner, $f734edd0e0ae82f0$var$Ug = !1;
function $f734edd0e0ae82f0$var$Yi(a, b, c, d) {
    b.child = null === a ? $f734edd0e0ae82f0$var$Ch(b, null, c, d) : $f734edd0e0ae82f0$var$Bh(b, a.child, c, d);
}
function $f734edd0e0ae82f0$var$Zi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    $f734edd0e0ae82f0$var$Tg(b, e);
    d = $f734edd0e0ae82f0$var$Xh(a, b, c, d, f, e);
    c = $f734edd0e0ae82f0$var$bi();
    if (null !== a && !$f734edd0e0ae82f0$var$Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $f734edd0e0ae82f0$var$$i(a, b, e);
    $f734edd0e0ae82f0$var$I && c && $f734edd0e0ae82f0$var$vg(b);
    b.flags |= 1;
    $f734edd0e0ae82f0$var$Yi(a, b, d, e);
    return b.child;
}
function $f734edd0e0ae82f0$var$aj(a, b, c, d, e) {
    if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !$f734edd0e0ae82f0$var$bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, $f734edd0e0ae82f0$var$cj(a, b, f, d, e);
        a = $f734edd0e0ae82f0$var$yh(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
        var g = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : $f734edd0e0ae82f0$var$Ie;
        if (c(g, d) && a.ref === b.ref) return $f734edd0e0ae82f0$var$$i(a, b, e);
    }
    b.flags |= 1;
    a = $f734edd0e0ae82f0$var$wh(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
}
function $f734edd0e0ae82f0$var$cj(a, b, c, d, e) {
    if (null !== a) {
        var f = a.memoizedProps;
        if ($f734edd0e0ae82f0$var$Ie(f, d) && a.ref === b.ref) {
            if ($f734edd0e0ae82f0$var$Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && ($f734edd0e0ae82f0$var$Ug = !0);
            else return b.lanes = a.lanes, $f734edd0e0ae82f0$var$$i(a, b, e);
        }
    }
    return $f734edd0e0ae82f0$var$dj(a, b, c, d, e);
}
function $f734edd0e0ae82f0$var$ej(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) {
        if (0 === (b.mode & 1)) b.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$fj, $f734edd0e0ae82f0$var$gj), $f734edd0e0ae82f0$var$gj |= c;
        else {
            if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
                baseLanes: a,
                cachePool: null,
                transitions: null
            }, b.updateQueue = null, $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$fj, $f734edd0e0ae82f0$var$gj), $f734edd0e0ae82f0$var$gj |= a, null;
            b.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            };
            d = null !== f ? f.baseLanes : c;
            $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$fj, $f734edd0e0ae82f0$var$gj);
            $f734edd0e0ae82f0$var$gj |= d;
        }
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$fj, $f734edd0e0ae82f0$var$gj), $f734edd0e0ae82f0$var$gj |= d;
    $f734edd0e0ae82f0$var$Yi(a, b, e, c);
    return b.child;
}
function $f734edd0e0ae82f0$var$hj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function $f734edd0e0ae82f0$var$dj(a, b, c, d, e) {
    var f = $f734edd0e0ae82f0$var$Zf(c) ? $f734edd0e0ae82f0$var$Xf : $f734edd0e0ae82f0$var$H.current;
    f = $f734edd0e0ae82f0$var$Yf(b, f);
    $f734edd0e0ae82f0$var$Tg(b, e);
    c = $f734edd0e0ae82f0$var$Xh(a, b, c, d, f, e);
    d = $f734edd0e0ae82f0$var$bi();
    if (null !== a && !$f734edd0e0ae82f0$var$Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $f734edd0e0ae82f0$var$$i(a, b, e);
    $f734edd0e0ae82f0$var$I && d && $f734edd0e0ae82f0$var$vg(b);
    b.flags |= 1;
    $f734edd0e0ae82f0$var$Yi(a, b, c, e);
    return b.child;
}
function $f734edd0e0ae82f0$var$ij(a, b, c, d, e) {
    if ($f734edd0e0ae82f0$var$Zf(c)) {
        var f = !0;
        $f734edd0e0ae82f0$var$cg(b);
    } else f = !1;
    $f734edd0e0ae82f0$var$Tg(b, e);
    if (null === b.stateNode) $f734edd0e0ae82f0$var$jj(a, b), $f734edd0e0ae82f0$var$ph(b, c, d), $f734edd0e0ae82f0$var$rh(b, c, d, e), d = !0;
    else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k = g.context, l = c.contextType;
        "object" === typeof l && null !== l ? l = $f734edd0e0ae82f0$var$Vg(l) : (l = $f734edd0e0ae82f0$var$Zf(c) ? $f734edd0e0ae82f0$var$Xf : $f734edd0e0ae82f0$var$H.current, l = $f734edd0e0ae82f0$var$Yf(b, l));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
        q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && $f734edd0e0ae82f0$var$qh(b, g, d, l);
        $f734edd0e0ae82f0$var$$g = !1;
        var r = b.memoizedState;
        g.state = r;
        $f734edd0e0ae82f0$var$gh(b, d, g, e);
        k = b.memoizedState;
        h !== d || r !== k || $f734edd0e0ae82f0$var$Wf.current || $f734edd0e0ae82f0$var$$g ? ("function" === typeof m && ($f734edd0e0ae82f0$var$kh(b, c, m, d), k = b.memoizedState), (h = $f734edd0e0ae82f0$var$$g || $f734edd0e0ae82f0$var$oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
    } else {
        g = b.stateNode;
        $f734edd0e0ae82f0$var$bh(a, b);
        h = b.memoizedProps;
        l = b.type === b.elementType ? h : $f734edd0e0ae82f0$var$Lg(b.type, h);
        g.props = l;
        q = b.pendingProps;
        r = g.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = $f734edd0e0ae82f0$var$Vg(k) : (k = $f734edd0e0ae82f0$var$Zf(c) ? $f734edd0e0ae82f0$var$Xf : $f734edd0e0ae82f0$var$H.current, k = $f734edd0e0ae82f0$var$Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && $f734edd0e0ae82f0$var$qh(b, g, d, k);
        $f734edd0e0ae82f0$var$$g = !1;
        r = b.memoizedState;
        g.state = r;
        $f734edd0e0ae82f0$var$gh(b, d, g, e);
        var n = b.memoizedState;
        h !== q || r !== n || $f734edd0e0ae82f0$var$Wf.current || $f734edd0e0ae82f0$var$$g ? ("function" === typeof y && ($f734edd0e0ae82f0$var$kh(b, c, y, d), n = b.memoizedState), (l = $f734edd0e0ae82f0$var$$g || $f734edd0e0ae82f0$var$oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
    }
    return $f734edd0e0ae82f0$var$kj(a, b, c, d, f, e);
}
function $f734edd0e0ae82f0$var$kj(a, b, c, d, e, f) {
    $f734edd0e0ae82f0$var$hj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && $f734edd0e0ae82f0$var$dg(b, c, !1), $f734edd0e0ae82f0$var$$i(a, b, f);
    d = b.stateNode;
    $f734edd0e0ae82f0$var$Xi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = $f734edd0e0ae82f0$var$Bh(b, a.child, null, f), b.child = $f734edd0e0ae82f0$var$Bh(b, null, h, f)) : $f734edd0e0ae82f0$var$Yi(a, b, h, f);
    b.memoizedState = d.state;
    e && $f734edd0e0ae82f0$var$dg(b, c, !0);
    return b.child;
}
function $f734edd0e0ae82f0$var$lj(a) {
    var b = a.stateNode;
    b.pendingContext ? $f734edd0e0ae82f0$var$ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && $f734edd0e0ae82f0$var$ag(a, b.context, !1);
    $f734edd0e0ae82f0$var$Ih(a, b.containerInfo);
}
function $f734edd0e0ae82f0$var$mj(a, b, c, d, e) {
    $f734edd0e0ae82f0$var$Ig();
    $f734edd0e0ae82f0$var$Jg(e);
    b.flags |= 256;
    $f734edd0e0ae82f0$var$Yi(a, b, c, d);
    return b.child;
}
var $f734edd0e0ae82f0$var$nj = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function $f734edd0e0ae82f0$var$oj(a) {
    return {
        baseLanes: a,
        cachePool: null,
        transitions: null
    };
}
function $f734edd0e0ae82f0$var$pj(a, b, c) {
    var d = b.pendingProps, e = $f734edd0e0ae82f0$var$M.current, f = !1, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    if (h) f = !0, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$M, e & 1);
    if (null === a) {
        $f734edd0e0ae82f0$var$Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f ? (d = b.mode, f = b.child, g = {
            mode: "hidden",
            children: g
        }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = $f734edd0e0ae82f0$var$qj(g, d, 0, null), a = $f734edd0e0ae82f0$var$Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = $f734edd0e0ae82f0$var$oj(c), b.memoizedState = $f734edd0e0ae82f0$var$nj, a) : $f734edd0e0ae82f0$var$rj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return $f734edd0e0ae82f0$var$sj(a, b, g, d, h, e, c);
    if (f) {
        f = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k = {
            mode: "hidden",
            children: d.children
        };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = $f734edd0e0ae82f0$var$wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f = $f734edd0e0ae82f0$var$wh(h, f) : (f = $f734edd0e0ae82f0$var$Ah(f, g, c, null), f.flags |= 2);
        f.return = b;
        d.return = b;
        d.sibling = f;
        b.child = d;
        d = f;
        f = b.child;
        g = a.child.memoizedState;
        g = null === g ? $f734edd0e0ae82f0$var$oj(c) : {
            baseLanes: g.baseLanes | c,
            cachePool: null,
            transitions: g.transitions
        };
        f.memoizedState = g;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = $f734edd0e0ae82f0$var$nj;
        return d;
    }
    f = a.child;
    a = f.sibling;
    d = $f734edd0e0ae82f0$var$wh(f, {
        mode: "visible",
        children: d.children
    });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [
        a
    ], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
}
function $f734edd0e0ae82f0$var$rj(a, b) {
    b = $f734edd0e0ae82f0$var$qj({
        mode: "visible",
        children: b
    }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
}
function $f734edd0e0ae82f0$var$tj(a, b, c, d) {
    null !== d && $f734edd0e0ae82f0$var$Jg(d);
    $f734edd0e0ae82f0$var$Bh(b, a.child, null, c);
    a = $f734edd0e0ae82f0$var$rj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
}
function $f734edd0e0ae82f0$var$sj(a, b, c, d, e, f, g) {
    if (c) {
        if (b.flags & 256) return b.flags &= -257, d = $f734edd0e0ae82f0$var$Li(Error($f734edd0e0ae82f0$var$p(422))), $f734edd0e0ae82f0$var$tj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f = d.fallback;
        e = b.mode;
        d = $f734edd0e0ae82f0$var$qj({
            mode: "visible",
            children: d.children
        }, e, 0, null);
        f = $f734edd0e0ae82f0$var$Ah(f, e, g, null);
        f.flags |= 2;
        d.return = b;
        f.return = b;
        d.sibling = f;
        b.child = d;
        0 !== (b.mode & 1) && $f734edd0e0ae82f0$var$Bh(b, a.child, null, g);
        b.child.memoizedState = $f734edd0e0ae82f0$var$oj(g);
        b.memoizedState = $f734edd0e0ae82f0$var$nj;
        return f;
    }
    if (0 === (b.mode & 1)) return $f734edd0e0ae82f0$var$tj(a, b, g, null);
    if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f = Error($f734edd0e0ae82f0$var$p(419));
        d = $f734edd0e0ae82f0$var$Li(f, d, void 0);
        return $f734edd0e0ae82f0$var$tj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if ($f734edd0e0ae82f0$var$Ug || h) {
        d = $f734edd0e0ae82f0$var$R;
        if (null !== d) {
            switch(g & -g){
                case 4:
                    e = 2;
                    break;
                case 16:
                    e = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    e = 32;
                    break;
                case 536870912:
                    e = 268435456;
                    break;
                default:
                    e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, $f734edd0e0ae82f0$var$Zg(a, e), $f734edd0e0ae82f0$var$mh(d, a, e, -1));
        }
        $f734edd0e0ae82f0$var$uj();
        d = $f734edd0e0ae82f0$var$Li(Error($f734edd0e0ae82f0$var$p(421)));
        return $f734edd0e0ae82f0$var$tj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = $f734edd0e0ae82f0$var$vj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    $f734edd0e0ae82f0$var$yg = $f734edd0e0ae82f0$var$Lf(e.nextSibling);
    $f734edd0e0ae82f0$var$xg = b;
    $f734edd0e0ae82f0$var$I = !0;
    $f734edd0e0ae82f0$var$zg = null;
    null !== a && ($f734edd0e0ae82f0$var$og[$f734edd0e0ae82f0$var$pg++] = $f734edd0e0ae82f0$var$rg, $f734edd0e0ae82f0$var$og[$f734edd0e0ae82f0$var$pg++] = $f734edd0e0ae82f0$var$sg, $f734edd0e0ae82f0$var$og[$f734edd0e0ae82f0$var$pg++] = $f734edd0e0ae82f0$var$qg, $f734edd0e0ae82f0$var$rg = a.id, $f734edd0e0ae82f0$var$sg = a.overflow, $f734edd0e0ae82f0$var$qg = b);
    b = $f734edd0e0ae82f0$var$rj(b, d.children);
    b.flags |= 4096;
    return b;
}
function $f734edd0e0ae82f0$var$wj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    $f734edd0e0ae82f0$var$Sg(a.return, b, c);
}
function $f734edd0e0ae82f0$var$xj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = {
        isBackwards: b,
        rendering: null,
        renderingStartTime: 0,
        last: d,
        tail: c,
        tailMode: e
    } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function $f734edd0e0ae82f0$var$yj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    $f734edd0e0ae82f0$var$Yi(a, b, d.children, c);
    d = $f734edd0e0ae82f0$var$M.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
        if (null !== a && 0 !== (a.flags & 128)) a: for(a = b.child; null !== a;){
            if (13 === a.tag) null !== a.memoizedState && $f734edd0e0ae82f0$var$wj(a, c, b);
            else if (19 === a.tag) $f734edd0e0ae82f0$var$wj(a, c, b);
            else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
            }
            if (a === b) break a;
            for(; null === a.sibling;){
                if (null === a.return || a.return === b) break a;
                a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
        }
        d &= 1;
    }
    $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$M, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch(e){
        case "forwards":
            c = b.child;
            for(e = null; null !== c;)a = c.alternate, null !== a && null === $f734edd0e0ae82f0$var$Mh(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            $f734edd0e0ae82f0$var$xj(b, !1, e, c, f);
            break;
        case "backwards":
            c = null;
            e = b.child;
            for(b.child = null; null !== e;){
                a = e.alternate;
                if (null !== a && null === $f734edd0e0ae82f0$var$Mh(a)) {
                    b.child = e;
                    break;
                }
                a = e.sibling;
                e.sibling = c;
                c = e;
                e = a;
            }
            $f734edd0e0ae82f0$var$xj(b, !0, c, null, f);
            break;
        case "together":
            $f734edd0e0ae82f0$var$xj(b, !1, null, null, void 0);
            break;
        default:
            b.memoizedState = null;
    }
    return b.child;
}
function $f734edd0e0ae82f0$var$jj(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $f734edd0e0ae82f0$var$$i(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    $f734edd0e0ae82f0$var$hh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error($f734edd0e0ae82f0$var$p(153));
    if (null !== b.child) {
        a = b.child;
        c = $f734edd0e0ae82f0$var$wh(a, a.pendingProps);
        b.child = c;
        for(c.return = b; null !== a.sibling;)a = a.sibling, c = c.sibling = $f734edd0e0ae82f0$var$wh(a, a.pendingProps), c.return = b;
        c.sibling = null;
    }
    return b.child;
}
function $f734edd0e0ae82f0$var$zj(a, b, c) {
    switch(b.tag){
        case 3:
            $f734edd0e0ae82f0$var$lj(b);
            $f734edd0e0ae82f0$var$Ig();
            break;
        case 5:
            $f734edd0e0ae82f0$var$Kh(b);
            break;
        case 1:
            $f734edd0e0ae82f0$var$Zf(b.type) && $f734edd0e0ae82f0$var$cg(b);
            break;
        case 4:
            $f734edd0e0ae82f0$var$Ih(b, b.stateNode.containerInfo);
            break;
        case 10:
            var d = b.type._context, e = b.memoizedProps.value;
            $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Mg, d._currentValue);
            d._currentValue = e;
            break;
        case 13:
            d = b.memoizedState;
            if (null !== d) {
                if (null !== d.dehydrated) return $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$M, $f734edd0e0ae82f0$var$M.current & 1), b.flags |= 128, null;
                if (0 !== (c & b.child.childLanes)) return $f734edd0e0ae82f0$var$pj(a, b, c);
                $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$M, $f734edd0e0ae82f0$var$M.current & 1);
                a = $f734edd0e0ae82f0$var$$i(a, b, c);
                return null !== a ? a.sibling : null;
            }
            $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$M, $f734edd0e0ae82f0$var$M.current & 1);
            break;
        case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
                if (d) return $f734edd0e0ae82f0$var$yj(a, b, c);
                b.flags |= 128;
            }
            e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$M, $f734edd0e0ae82f0$var$M.current);
            if (d) break;
            else return null;
        case 22:
        case 23:
            return b.lanes = 0, $f734edd0e0ae82f0$var$ej(a, b, c);
    }
    return $f734edd0e0ae82f0$var$$i(a, b, c);
}
var $f734edd0e0ae82f0$var$Aj, $f734edd0e0ae82f0$var$Bj, $f734edd0e0ae82f0$var$Cj, $f734edd0e0ae82f0$var$Dj;
$f734edd0e0ae82f0$var$Aj = function(a, b) {
    for(var c = b.child; null !== c;){
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
        }
        if (c === b) break;
        for(; null === c.sibling;){
            if (null === c.return || c.return === b) return;
            c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
    }
};
$f734edd0e0ae82f0$var$Bj = function() {};
$f734edd0e0ae82f0$var$Cj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
        a = b.stateNode;
        $f734edd0e0ae82f0$var$Hh($f734edd0e0ae82f0$var$Eh.current);
        var f = null;
        switch(c){
            case "input":
                e = $f734edd0e0ae82f0$var$Ya(a, e);
                d = $f734edd0e0ae82f0$var$Ya(a, d);
                f = [];
                break;
            case "select":
                e = $f734edd0e0ae82f0$var$A({}, e, {
                    value: void 0
                });
                d = $f734edd0e0ae82f0$var$A({}, d, {
                    value: void 0
                });
                f = [];
                break;
            case "textarea":
                e = $f734edd0e0ae82f0$var$gb(a, e);
                d = $f734edd0e0ae82f0$var$gb(a, d);
                f = [];
                break;
            default:
                "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = $f734edd0e0ae82f0$var$Bf);
        }
        $f734edd0e0ae82f0$var$ub(c, d);
        var g;
        c = null;
        for(l in e)if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) {
            if ("style" === l) {
                var h = e[l];
                for(g in h)h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
            } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && ($f734edd0e0ae82f0$var$ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
        }
        for(l in d){
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) {
                if ("style" === l) {
                    if (h) {
                        for(g in h)!h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
                        for(g in k)k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                    } else c || (f || (f = []), f.push(l, c)), c = k;
                } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && ($f734edd0e0ae82f0$var$ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && $f734edd0e0ae82f0$var$D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
            }
        }
        c && (f = f || []).push("style", c);
        var l = f;
        if (b.updateQueue = l) b.flags |= 4;
    }
};
$f734edd0e0ae82f0$var$Dj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
};
function $f734edd0e0ae82f0$var$Ej(a, b) {
    if (!$f734edd0e0ae82f0$var$I) switch(a.tailMode){
        case "hidden":
            b = a.tail;
            for(var c = null; null !== b;)null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
        case "collapsed":
            c = a.tail;
            for(var d = null; null !== c;)null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function $f734edd0e0ae82f0$var$S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for(var e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for(e = a.child; null !== e;)c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
}
function $f734edd0e0ae82f0$var$Fj(a, b, c) {
    var d = b.pendingProps;
    $f734edd0e0ae82f0$var$wg(b);
    switch(b.tag){
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return $f734edd0e0ae82f0$var$S(b), null;
        case 1:
            return $f734edd0e0ae82f0$var$Zf(b.type) && $f734edd0e0ae82f0$var$$f(), $f734edd0e0ae82f0$var$S(b), null;
        case 3:
            d = b.stateNode;
            $f734edd0e0ae82f0$var$Jh();
            $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Wf);
            $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$H);
            $f734edd0e0ae82f0$var$Oh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a || null === a.child) $f734edd0e0ae82f0$var$Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== $f734edd0e0ae82f0$var$zg && ($f734edd0e0ae82f0$var$Gj($f734edd0e0ae82f0$var$zg), $f734edd0e0ae82f0$var$zg = null));
            $f734edd0e0ae82f0$var$Bj(a, b);
            $f734edd0e0ae82f0$var$S(b);
            return null;
        case 5:
            $f734edd0e0ae82f0$var$Lh(b);
            var e = $f734edd0e0ae82f0$var$Hh($f734edd0e0ae82f0$var$Gh.current);
            c = b.type;
            if (null !== a && null != b.stateNode) $f734edd0e0ae82f0$var$Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
                if (!d) {
                    if (null === b.stateNode) throw Error($f734edd0e0ae82f0$var$p(166));
                    $f734edd0e0ae82f0$var$S(b);
                    return null;
                }
                a = $f734edd0e0ae82f0$var$Hh($f734edd0e0ae82f0$var$Eh.current);
                if ($f734edd0e0ae82f0$var$Gg(b)) {
                    d = b.stateNode;
                    c = b.type;
                    var f = b.memoizedProps;
                    d[$f734edd0e0ae82f0$var$Of] = b;
                    d[$f734edd0e0ae82f0$var$Pf] = f;
                    a = 0 !== (b.mode & 1);
                    switch(c){
                        case "dialog":
                            $f734edd0e0ae82f0$var$D("cancel", d);
                            $f734edd0e0ae82f0$var$D("close", d);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            $f734edd0e0ae82f0$var$D("load", d);
                            break;
                        case "video":
                        case "audio":
                            for(e = 0; e < $f734edd0e0ae82f0$var$lf.length; e++)$f734edd0e0ae82f0$var$D($f734edd0e0ae82f0$var$lf[e], d);
                            break;
                        case "source":
                            $f734edd0e0ae82f0$var$D("error", d);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            $f734edd0e0ae82f0$var$D("error", d);
                            $f734edd0e0ae82f0$var$D("load", d);
                            break;
                        case "details":
                            $f734edd0e0ae82f0$var$D("toggle", d);
                            break;
                        case "input":
                            $f734edd0e0ae82f0$var$Za(d, f);
                            $f734edd0e0ae82f0$var$D("invalid", d);
                            break;
                        case "select":
                            d._wrapperState = {
                                wasMultiple: !!f.multiple
                            };
                            $f734edd0e0ae82f0$var$D("invalid", d);
                            break;
                        case "textarea":
                            $f734edd0e0ae82f0$var$hb(d, f), $f734edd0e0ae82f0$var$D("invalid", d);
                    }
                    $f734edd0e0ae82f0$var$ub(c, f);
                    e = null;
                    for(var g in f)if (f.hasOwnProperty(g)) {
                        var h = f[g];
                        "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && $f734edd0e0ae82f0$var$Af(d.textContent, h, a), e = [
                            "children",
                            h
                        ]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && $f734edd0e0ae82f0$var$Af(d.textContent, h, a), e = [
                            "children",
                            "" + h
                        ]) : $f734edd0e0ae82f0$var$ea.hasOwnProperty(g) && null != h && "onScroll" === g && $f734edd0e0ae82f0$var$D("scroll", d);
                    }
                    switch(c){
                        case "input":
                            $f734edd0e0ae82f0$var$Va(d);
                            $f734edd0e0ae82f0$var$db(d, f, !0);
                            break;
                        case "textarea":
                            $f734edd0e0ae82f0$var$Va(d);
                            $f734edd0e0ae82f0$var$jb(d);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            "function" === typeof f.onClick && (d.onclick = $f734edd0e0ae82f0$var$Bf);
                    }
                    d = e;
                    b.updateQueue = d;
                    null !== d && (b.flags |= 4);
                } else {
                    g = 9 === e.nodeType ? e : e.ownerDocument;
                    "http://www.w3.org/1999/xhtml" === a && (a = $f734edd0e0ae82f0$var$kb(c));
                    "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                        is: d.is
                    }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                    a[$f734edd0e0ae82f0$var$Of] = b;
                    a[$f734edd0e0ae82f0$var$Pf] = d;
                    $f734edd0e0ae82f0$var$Aj(a, b, !1, !1);
                    b.stateNode = a;
                    a: {
                        g = $f734edd0e0ae82f0$var$vb(c, d);
                        switch(c){
                            case "dialog":
                                $f734edd0e0ae82f0$var$D("cancel", a);
                                $f734edd0e0ae82f0$var$D("close", a);
                                e = d;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                $f734edd0e0ae82f0$var$D("load", a);
                                e = d;
                                break;
                            case "video":
                            case "audio":
                                for(e = 0; e < $f734edd0e0ae82f0$var$lf.length; e++)$f734edd0e0ae82f0$var$D($f734edd0e0ae82f0$var$lf[e], a);
                                e = d;
                                break;
                            case "source":
                                $f734edd0e0ae82f0$var$D("error", a);
                                e = d;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $f734edd0e0ae82f0$var$D("error", a);
                                $f734edd0e0ae82f0$var$D("load", a);
                                e = d;
                                break;
                            case "details":
                                $f734edd0e0ae82f0$var$D("toggle", a);
                                e = d;
                                break;
                            case "input":
                                $f734edd0e0ae82f0$var$Za(a, d);
                                e = $f734edd0e0ae82f0$var$Ya(a, d);
                                $f734edd0e0ae82f0$var$D("invalid", a);
                                break;
                            case "option":
                                e = d;
                                break;
                            case "select":
                                a._wrapperState = {
                                    wasMultiple: !!d.multiple
                                };
                                e = $f734edd0e0ae82f0$var$A({}, d, {
                                    value: void 0
                                });
                                $f734edd0e0ae82f0$var$D("invalid", a);
                                break;
                            case "textarea":
                                $f734edd0e0ae82f0$var$hb(a, d);
                                e = $f734edd0e0ae82f0$var$gb(a, d);
                                $f734edd0e0ae82f0$var$D("invalid", a);
                                break;
                            default:
                                e = d;
                        }
                        $f734edd0e0ae82f0$var$ub(c, e);
                        h = e;
                        for(f in h)if (h.hasOwnProperty(f)) {
                            var k = h[f];
                            "style" === f ? $f734edd0e0ae82f0$var$sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && $f734edd0e0ae82f0$var$nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && $f734edd0e0ae82f0$var$ob(a, k) : "number" === typeof k && $f734edd0e0ae82f0$var$ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && ($f734edd0e0ae82f0$var$ea.hasOwnProperty(f) ? null != k && "onScroll" === f && $f734edd0e0ae82f0$var$D("scroll", a) : null != k && $f734edd0e0ae82f0$var$ta(a, f, k, g));
                        }
                        switch(c){
                            case "input":
                                $f734edd0e0ae82f0$var$Va(a);
                                $f734edd0e0ae82f0$var$db(a, d, !1);
                                break;
                            case "textarea":
                                $f734edd0e0ae82f0$var$Va(a);
                                $f734edd0e0ae82f0$var$jb(a);
                                break;
                            case "option":
                                null != d.value && a.setAttribute("value", "" + $f734edd0e0ae82f0$var$Sa(d.value));
                                break;
                            case "select":
                                a.multiple = !!d.multiple;
                                f = d.value;
                                null != f ? $f734edd0e0ae82f0$var$fb(a, !!d.multiple, f, !1) : null != d.defaultValue && $f734edd0e0ae82f0$var$fb(a, !!d.multiple, d.defaultValue, !0);
                                break;
                            default:
                                "function" === typeof e.onClick && (a.onclick = $f734edd0e0ae82f0$var$Bf);
                        }
                        switch(c){
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                d = !!d.autoFocus;
                                break a;
                            case "img":
                                d = !0;
                                break a;
                            default:
                                d = !1;
                        }
                    }
                    d && (b.flags |= 4);
                }
                null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            $f734edd0e0ae82f0$var$S(b);
            return null;
        case 6:
            if (a && null != b.stateNode) $f734edd0e0ae82f0$var$Dj(a, b, a.memoizedProps, d);
            else {
                if ("string" !== typeof d && null === b.stateNode) throw Error($f734edd0e0ae82f0$var$p(166));
                c = $f734edd0e0ae82f0$var$Hh($f734edd0e0ae82f0$var$Gh.current);
                $f734edd0e0ae82f0$var$Hh($f734edd0e0ae82f0$var$Eh.current);
                if ($f734edd0e0ae82f0$var$Gg(b)) {
                    d = b.stateNode;
                    c = b.memoizedProps;
                    d[$f734edd0e0ae82f0$var$Of] = b;
                    if (f = d.nodeValue !== c) {
                        if (a = $f734edd0e0ae82f0$var$xg, null !== a) switch(a.tag){
                            case 3:
                                $f734edd0e0ae82f0$var$Af(d.nodeValue, c, 0 !== (a.mode & 1));
                                break;
                            case 5:
                                !0 !== a.memoizedProps.suppressHydrationWarning && $f734edd0e0ae82f0$var$Af(d.nodeValue, c, 0 !== (a.mode & 1));
                        }
                    }
                    f && (b.flags |= 4);
                } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[$f734edd0e0ae82f0$var$Of] = b, b.stateNode = d;
            }
            $f734edd0e0ae82f0$var$S(b);
            return null;
        case 13:
            $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$M);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                if ($f734edd0e0ae82f0$var$I && null !== $f734edd0e0ae82f0$var$yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) $f734edd0e0ae82f0$var$Hg(), $f734edd0e0ae82f0$var$Ig(), b.flags |= 98560, f = !1;
                else if (f = $f734edd0e0ae82f0$var$Gg(b), null !== d && null !== d.dehydrated) {
                    if (null === a) {
                        if (!f) throw Error($f734edd0e0ae82f0$var$p(318));
                        f = b.memoizedState;
                        f = null !== f ? f.dehydrated : null;
                        if (!f) throw Error($f734edd0e0ae82f0$var$p(317));
                        f[$f734edd0e0ae82f0$var$Of] = b;
                    } else $f734edd0e0ae82f0$var$Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                    $f734edd0e0ae82f0$var$S(b);
                    f = !1;
                } else null !== $f734edd0e0ae82f0$var$zg && ($f734edd0e0ae82f0$var$Gj($f734edd0e0ae82f0$var$zg), $f734edd0e0ae82f0$var$zg = null), f = !0;
                if (!f) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            d = null !== d;
            d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== ($f734edd0e0ae82f0$var$M.current & 1) ? 0 === $f734edd0e0ae82f0$var$T && ($f734edd0e0ae82f0$var$T = 3) : $f734edd0e0ae82f0$var$uj()));
            null !== b.updateQueue && (b.flags |= 4);
            $f734edd0e0ae82f0$var$S(b);
            return null;
        case 4:
            return $f734edd0e0ae82f0$var$Jh(), $f734edd0e0ae82f0$var$Bj(a, b), null === a && $f734edd0e0ae82f0$var$sf(b.stateNode.containerInfo), $f734edd0e0ae82f0$var$S(b), null;
        case 10:
            return $f734edd0e0ae82f0$var$Rg(b.type._context), $f734edd0e0ae82f0$var$S(b), null;
        case 17:
            return $f734edd0e0ae82f0$var$Zf(b.type) && $f734edd0e0ae82f0$var$$f(), $f734edd0e0ae82f0$var$S(b), null;
        case 19:
            $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$M);
            f = b.memoizedState;
            if (null === f) return $f734edd0e0ae82f0$var$S(b), null;
            d = 0 !== (b.flags & 128);
            g = f.rendering;
            if (null === g) {
                if (d) $f734edd0e0ae82f0$var$Ej(f, !1);
                else {
                    if (0 !== $f734edd0e0ae82f0$var$T || null !== a && 0 !== (a.flags & 128)) for(a = b.child; null !== a;){
                        g = $f734edd0e0ae82f0$var$Mh(a);
                        if (null !== g) {
                            b.flags |= 128;
                            $f734edd0e0ae82f0$var$Ej(f, !1);
                            d = g.updateQueue;
                            null !== d && (b.updateQueue = d, b.flags |= 4);
                            b.subtreeFlags = 0;
                            d = c;
                            for(c = b.child; null !== c;)f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                lanes: a.lanes,
                                firstContext: a.firstContext
                            }), c = c.sibling;
                            $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$M, $f734edd0e0ae82f0$var$M.current & 1 | 2);
                            return b.child;
                        }
                        a = a.sibling;
                    }
                    null !== f.tail && $f734edd0e0ae82f0$var$B() > $f734edd0e0ae82f0$var$Hj && (b.flags |= 128, d = !0, $f734edd0e0ae82f0$var$Ej(f, !1), b.lanes = 4194304);
                }
            } else {
                if (!d) {
                    if (a = $f734edd0e0ae82f0$var$Mh(g), null !== a) {
                        if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), $f734edd0e0ae82f0$var$Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !$f734edd0e0ae82f0$var$I) return $f734edd0e0ae82f0$var$S(b), null;
                    } else 2 * $f734edd0e0ae82f0$var$B() - f.renderingStartTime > $f734edd0e0ae82f0$var$Hj && 1073741824 !== c && (b.flags |= 128, d = !0, $f734edd0e0ae82f0$var$Ej(f, !1), b.lanes = 4194304);
                }
                f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
            }
            if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = $f734edd0e0ae82f0$var$B(), b.sibling = null, c = $f734edd0e0ae82f0$var$M.current, $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$M, d ? c & 1 | 2 : c & 1), b;
            $f734edd0e0ae82f0$var$S(b);
            return null;
        case 22:
        case 23:
            return $f734edd0e0ae82f0$var$Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== ($f734edd0e0ae82f0$var$gj & 1073741824) && ($f734edd0e0ae82f0$var$S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : $f734edd0e0ae82f0$var$S(b), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error($f734edd0e0ae82f0$var$p(156, b.tag));
}
function $f734edd0e0ae82f0$var$Jj(a, b) {
    $f734edd0e0ae82f0$var$wg(b);
    switch(b.tag){
        case 1:
            return $f734edd0e0ae82f0$var$Zf(b.type) && $f734edd0e0ae82f0$var$$f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
            return $f734edd0e0ae82f0$var$Jh(), $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Wf), $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$H), $f734edd0e0ae82f0$var$Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
            return $f734edd0e0ae82f0$var$Lh(b), null;
        case 13:
            $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$M);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
                if (null === b.alternate) throw Error($f734edd0e0ae82f0$var$p(340));
                $f734edd0e0ae82f0$var$Ig();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
            return $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$M), null;
        case 4:
            return $f734edd0e0ae82f0$var$Jh(), null;
        case 10:
            return $f734edd0e0ae82f0$var$Rg(b.type._context), null;
        case 22:
        case 23:
            return $f734edd0e0ae82f0$var$Ij(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var $f734edd0e0ae82f0$var$Kj = !1, $f734edd0e0ae82f0$var$U = !1, $f734edd0e0ae82f0$var$Lj = "function" === typeof WeakSet ? WeakSet : Set, $f734edd0e0ae82f0$var$V = null;
function $f734edd0e0ae82f0$var$Mj(a, b) {
    var c = a.ref;
    if (null !== c) {
        if ("function" === typeof c) try {
            c(null);
        } catch (d) {
            $f734edd0e0ae82f0$var$W(a, b, d);
        }
        else c.current = null;
    }
}
function $f734edd0e0ae82f0$var$Nj(a, b, c) {
    try {
        c();
    } catch (d) {
        $f734edd0e0ae82f0$var$W(a, b, d);
    }
}
var $f734edd0e0ae82f0$var$Oj = !1;
function $f734edd0e0ae82f0$var$Pj(a, b) {
    $f734edd0e0ae82f0$var$Cf = $f734edd0e0ae82f0$var$dd;
    a = $f734edd0e0ae82f0$var$Me();
    if ($f734edd0e0ae82f0$var$Ne(a)) {
        if ("selectionStart" in a) var c = {
            start: a.selectionStart,
            end: a.selectionEnd
        };
        else a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d = c.getSelection && c.getSelection();
            if (d && 0 !== d.rangeCount) {
                c = d.anchorNode;
                var e = d.anchorOffset, f = d.focusNode;
                d = d.focusOffset;
                try {
                    c.nodeType, f.nodeType;
                } catch (F) {
                    c = null;
                    break a;
                }
                var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                b: for(;;){
                    for(var y;;){
                        q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                        q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                        3 === q.nodeType && (g += q.nodeValue.length);
                        if (null === (y = q.firstChild)) break;
                        r = q;
                        q = y;
                    }
                    for(;;){
                        if (q === a) break b;
                        r === c && ++l === e && (h = g);
                        r === f && ++m === d && (k = g);
                        if (null !== (y = q.nextSibling)) break;
                        q = r;
                        r = q.parentNode;
                    }
                    q = y;
                }
                c = -1 === h || -1 === k ? null : {
                    start: h,
                    end: k
                };
            } else c = null;
        }
        c = c || {
            start: 0,
            end: 0
        };
    } else c = null;
    $f734edd0e0ae82f0$var$Df = {
        focusedElem: a,
        selectionRange: c
    };
    $f734edd0e0ae82f0$var$dd = !1;
    for($f734edd0e0ae82f0$var$V = b; null !== $f734edd0e0ae82f0$var$V;)if (b = $f734edd0e0ae82f0$var$V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, $f734edd0e0ae82f0$var$V = a;
    else for(; null !== $f734edd0e0ae82f0$var$V;){
        b = $f734edd0e0ae82f0$var$V;
        try {
            var n = b.alternate;
            if (0 !== (b.flags & 1024)) switch(b.tag){
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (null !== n) {
                        var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : $f734edd0e0ae82f0$var$Lg(b.type, t), J);
                        x.__reactInternalSnapshotBeforeUpdate = w;
                    }
                    break;
                case 3:
                    var u = b.stateNode.containerInfo;
                    1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error($f734edd0e0ae82f0$var$p(163));
            }
        } catch (F) {
            $f734edd0e0ae82f0$var$W(b, b.return, F);
        }
        a = b.sibling;
        if (null !== a) {
            a.return = b.return;
            $f734edd0e0ae82f0$var$V = a;
            break;
        }
        $f734edd0e0ae82f0$var$V = b.return;
    }
    n = $f734edd0e0ae82f0$var$Oj;
    $f734edd0e0ae82f0$var$Oj = !1;
    return n;
}
function $f734edd0e0ae82f0$var$Qj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
        var e = d = d.next;
        do {
            if ((e.tag & a) === a) {
                var f = e.destroy;
                e.destroy = void 0;
                void 0 !== f && $f734edd0e0ae82f0$var$Nj(b, c, f);
            }
            e = e.next;
        }while (e !== d);
    }
}
function $f734edd0e0ae82f0$var$Rj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
        var c = b = b.next;
        do {
            if ((c.tag & a) === a) {
                var d = c.create;
                c.destroy = d();
            }
            c = c.next;
        }while (c !== b);
    }
}
function $f734edd0e0ae82f0$var$Sj(a) {
    var b = a.ref;
    if (null !== b) {
        var c = a.stateNode;
        switch(a.tag){
            case 5:
                a = c;
                break;
            default:
                a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
    }
}
function $f734edd0e0ae82f0$var$Tj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, $f734edd0e0ae82f0$var$Tj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[$f734edd0e0ae82f0$var$Of], delete b[$f734edd0e0ae82f0$var$Pf], delete b[$f734edd0e0ae82f0$var$of], delete b[$f734edd0e0ae82f0$var$Qf], delete b[$f734edd0e0ae82f0$var$Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
}
function $f734edd0e0ae82f0$var$Uj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function $f734edd0e0ae82f0$var$Vj(a) {
    a: for(;;){
        for(; null === a.sibling;){
            if (null === a.return || $f734edd0e0ae82f0$var$Uj(a.return)) return null;
            a = a.return;
        }
        a.sibling.return = a.return;
        for(a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;){
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
    }
}
function $f734edd0e0ae82f0$var$Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = $f734edd0e0ae82f0$var$Bf));
    else if (4 !== d && (a = a.child, null !== a)) for($f734edd0e0ae82f0$var$Wj(a, b, c), a = a.sibling; null !== a;)$f734edd0e0ae82f0$var$Wj(a, b, c), a = a.sibling;
}
function $f734edd0e0ae82f0$var$Xj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for($f734edd0e0ae82f0$var$Xj(a, b, c), a = a.sibling; null !== a;)$f734edd0e0ae82f0$var$Xj(a, b, c), a = a.sibling;
}
var $f734edd0e0ae82f0$var$X = null, $f734edd0e0ae82f0$var$Yj = !1;
function $f734edd0e0ae82f0$var$Zj(a, b, c) {
    for(c = c.child; null !== c;)$f734edd0e0ae82f0$var$ak(a, b, c), c = c.sibling;
}
function $f734edd0e0ae82f0$var$ak(a, b, c) {
    if ($f734edd0e0ae82f0$var$lc && "function" === typeof $f734edd0e0ae82f0$var$lc.onCommitFiberUnmount) try {
        $f734edd0e0ae82f0$var$lc.onCommitFiberUnmount($f734edd0e0ae82f0$var$kc, c);
    } catch (h) {}
    switch(c.tag){
        case 5:
            $f734edd0e0ae82f0$var$U || $f734edd0e0ae82f0$var$Mj(c, b);
        case 6:
            var d = $f734edd0e0ae82f0$var$X, e = $f734edd0e0ae82f0$var$Yj;
            $f734edd0e0ae82f0$var$X = null;
            $f734edd0e0ae82f0$var$Zj(a, b, c);
            $f734edd0e0ae82f0$var$X = d;
            $f734edd0e0ae82f0$var$Yj = e;
            null !== $f734edd0e0ae82f0$var$X && ($f734edd0e0ae82f0$var$Yj ? (a = $f734edd0e0ae82f0$var$X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : $f734edd0e0ae82f0$var$X.removeChild(c.stateNode));
            break;
        case 18:
            null !== $f734edd0e0ae82f0$var$X && ($f734edd0e0ae82f0$var$Yj ? (a = $f734edd0e0ae82f0$var$X, c = c.stateNode, 8 === a.nodeType ? $f734edd0e0ae82f0$var$Kf(a.parentNode, c) : 1 === a.nodeType && $f734edd0e0ae82f0$var$Kf(a, c), $f734edd0e0ae82f0$var$bd(a)) : $f734edd0e0ae82f0$var$Kf($f734edd0e0ae82f0$var$X, c.stateNode));
            break;
        case 4:
            d = $f734edd0e0ae82f0$var$X;
            e = $f734edd0e0ae82f0$var$Yj;
            $f734edd0e0ae82f0$var$X = c.stateNode.containerInfo;
            $f734edd0e0ae82f0$var$Yj = !0;
            $f734edd0e0ae82f0$var$Zj(a, b, c);
            $f734edd0e0ae82f0$var$X = d;
            $f734edd0e0ae82f0$var$Yj = e;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!$f734edd0e0ae82f0$var$U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                e = d = d.next;
                do {
                    var f = e, g = f.destroy;
                    f = f.tag;
                    void 0 !== g && (0 !== (f & 2) ? $f734edd0e0ae82f0$var$Nj(c, b, g) : 0 !== (f & 4) && $f734edd0e0ae82f0$var$Nj(c, b, g));
                    e = e.next;
                }while (e !== d);
            }
            $f734edd0e0ae82f0$var$Zj(a, b, c);
            break;
        case 1:
            if (!$f734edd0e0ae82f0$var$U && ($f734edd0e0ae82f0$var$Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
                $f734edd0e0ae82f0$var$W(c, b, h);
            }
            $f734edd0e0ae82f0$var$Zj(a, b, c);
            break;
        case 21:
            $f734edd0e0ae82f0$var$Zj(a, b, c);
            break;
        case 22:
            c.mode & 1 ? ($f734edd0e0ae82f0$var$U = (d = $f734edd0e0ae82f0$var$U) || null !== c.memoizedState, $f734edd0e0ae82f0$var$Zj(a, b, c), $f734edd0e0ae82f0$var$U = d) : $f734edd0e0ae82f0$var$Zj(a, b, c);
            break;
        default:
            $f734edd0e0ae82f0$var$Zj(a, b, c);
    }
}
function $f734edd0e0ae82f0$var$bk(a) {
    var b = a.updateQueue;
    if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new $f734edd0e0ae82f0$var$Lj);
        b.forEach(function(b) {
            var d = $f734edd0e0ae82f0$var$ck.bind(null, a, b);
            c.has(b) || (c.add(b), b.then(d, d));
        });
    }
}
function $f734edd0e0ae82f0$var$dk(a, b) {
    var c = b.deletions;
    if (null !== c) for(var d = 0; d < c.length; d++){
        var e = c[d];
        try {
            var f = a, g = b, h = g;
            a: for(; null !== h;){
                switch(h.tag){
                    case 5:
                        $f734edd0e0ae82f0$var$X = h.stateNode;
                        $f734edd0e0ae82f0$var$Yj = !1;
                        break a;
                    case 3:
                        $f734edd0e0ae82f0$var$X = h.stateNode.containerInfo;
                        $f734edd0e0ae82f0$var$Yj = !0;
                        break a;
                    case 4:
                        $f734edd0e0ae82f0$var$X = h.stateNode.containerInfo;
                        $f734edd0e0ae82f0$var$Yj = !0;
                        break a;
                }
                h = h.return;
            }
            if (null === $f734edd0e0ae82f0$var$X) throw Error($f734edd0e0ae82f0$var$p(160));
            $f734edd0e0ae82f0$var$ak(f, g, e);
            $f734edd0e0ae82f0$var$X = null;
            $f734edd0e0ae82f0$var$Yj = !1;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
        } catch (l) {
            $f734edd0e0ae82f0$var$W(e, b, l);
        }
    }
    if (b.subtreeFlags & 12854) for(b = b.child; null !== b;)$f734edd0e0ae82f0$var$ek(b, a), b = b.sibling;
}
function $f734edd0e0ae82f0$var$ek(a, b) {
    var c = a.alternate, d = a.flags;
    switch(a.tag){
        case 0:
        case 11:
        case 14:
        case 15:
            $f734edd0e0ae82f0$var$dk(b, a);
            $f734edd0e0ae82f0$var$fk(a);
            if (d & 4) {
                try {
                    $f734edd0e0ae82f0$var$Qj(3, a, a.return), $f734edd0e0ae82f0$var$Rj(3, a);
                } catch (t) {
                    $f734edd0e0ae82f0$var$W(a, a.return, t);
                }
                try {
                    $f734edd0e0ae82f0$var$Qj(5, a, a.return);
                } catch (t) {
                    $f734edd0e0ae82f0$var$W(a, a.return, t);
                }
            }
            break;
        case 1:
            $f734edd0e0ae82f0$var$dk(b, a);
            $f734edd0e0ae82f0$var$fk(a);
            d & 512 && null !== c && $f734edd0e0ae82f0$var$Mj(c, c.return);
            break;
        case 5:
            $f734edd0e0ae82f0$var$dk(b, a);
            $f734edd0e0ae82f0$var$fk(a);
            d & 512 && null !== c && $f734edd0e0ae82f0$var$Mj(c, c.return);
            if (a.flags & 32) {
                var e = a.stateNode;
                try {
                    $f734edd0e0ae82f0$var$ob(e, "");
                } catch (t) {
                    $f734edd0e0ae82f0$var$W(a, a.return, t);
                }
            }
            if (d & 4 && (e = a.stateNode, null != e)) {
                var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                a.updateQueue = null;
                if (null !== k) try {
                    "input" === h && "radio" === f.type && null != f.name && $f734edd0e0ae82f0$var$ab(e, f);
                    $f734edd0e0ae82f0$var$vb(h, g);
                    var l = $f734edd0e0ae82f0$var$vb(h, f);
                    for(g = 0; g < k.length; g += 2){
                        var m = k[g], q = k[g + 1];
                        "style" === m ? $f734edd0e0ae82f0$var$sb(e, q) : "dangerouslySetInnerHTML" === m ? $f734edd0e0ae82f0$var$nb(e, q) : "children" === m ? $f734edd0e0ae82f0$var$ob(e, q) : $f734edd0e0ae82f0$var$ta(e, m, q, l);
                    }
                    switch(h){
                        case "input":
                            $f734edd0e0ae82f0$var$bb(e, f);
                            break;
                        case "textarea":
                            $f734edd0e0ae82f0$var$ib(e, f);
                            break;
                        case "select":
                            var r = e._wrapperState.wasMultiple;
                            e._wrapperState.wasMultiple = !!f.multiple;
                            var y = f.value;
                            null != y ? $f734edd0e0ae82f0$var$fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? $f734edd0e0ae82f0$var$fb(e, !!f.multiple, f.defaultValue, !0) : $f734edd0e0ae82f0$var$fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                    }
                    e[$f734edd0e0ae82f0$var$Pf] = f;
                } catch (t) {
                    $f734edd0e0ae82f0$var$W(a, a.return, t);
                }
            }
            break;
        case 6:
            $f734edd0e0ae82f0$var$dk(b, a);
            $f734edd0e0ae82f0$var$fk(a);
            if (d & 4) {
                if (null === a.stateNode) throw Error($f734edd0e0ae82f0$var$p(162));
                e = a.stateNode;
                f = a.memoizedProps;
                try {
                    e.nodeValue = f;
                } catch (t) {
                    $f734edd0e0ae82f0$var$W(a, a.return, t);
                }
            }
            break;
        case 3:
            $f734edd0e0ae82f0$var$dk(b, a);
            $f734edd0e0ae82f0$var$fk(a);
            if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                $f734edd0e0ae82f0$var$bd(b.containerInfo);
            } catch (t) {
                $f734edd0e0ae82f0$var$W(a, a.return, t);
            }
            break;
        case 4:
            $f734edd0e0ae82f0$var$dk(b, a);
            $f734edd0e0ae82f0$var$fk(a);
            break;
        case 13:
            $f734edd0e0ae82f0$var$dk(b, a);
            $f734edd0e0ae82f0$var$fk(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || ($f734edd0e0ae82f0$var$gk = $f734edd0e0ae82f0$var$B()));
            d & 4 && $f734edd0e0ae82f0$var$bk(a);
            break;
        case 22:
            m = null !== c && null !== c.memoizedState;
            a.mode & 1 ? ($f734edd0e0ae82f0$var$U = (l = $f734edd0e0ae82f0$var$U) || m, $f734edd0e0ae82f0$var$dk(b, a), $f734edd0e0ae82f0$var$U = l) : $f734edd0e0ae82f0$var$dk(b, a);
            $f734edd0e0ae82f0$var$fk(a);
            if (d & 8192) {
                l = null !== a.memoizedState;
                if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for($f734edd0e0ae82f0$var$V = a, m = a.child; null !== m;){
                    for(q = $f734edd0e0ae82f0$var$V = m; null !== $f734edd0e0ae82f0$var$V;){
                        r = $f734edd0e0ae82f0$var$V;
                        y = r.child;
                        switch(r.tag){
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                $f734edd0e0ae82f0$var$Qj(4, r, r.return);
                                break;
                            case 1:
                                $f734edd0e0ae82f0$var$Mj(r, r.return);
                                var n = r.stateNode;
                                if ("function" === typeof n.componentWillUnmount) {
                                    d = r;
                                    c = r.return;
                                    try {
                                        b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                    } catch (t) {
                                        $f734edd0e0ae82f0$var$W(d, c, t);
                                    }
                                }
                                break;
                            case 5:
                                $f734edd0e0ae82f0$var$Mj(r, r.return);
                                break;
                            case 22:
                                if (null !== r.memoizedState) {
                                    $f734edd0e0ae82f0$var$hk(q);
                                    continue;
                                }
                        }
                        null !== y ? (y.return = r, $f734edd0e0ae82f0$var$V = y) : $f734edd0e0ae82f0$var$hk(q);
                    }
                    m = m.sibling;
                }
                a: for(m = null, q = a;;){
                    if (5 === q.tag) {
                        if (null === m) {
                            m = q;
                            try {
                                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = $f734edd0e0ae82f0$var$rb("display", g));
                            } catch (t) {
                                $f734edd0e0ae82f0$var$W(a, a.return, t);
                            }
                        }
                    } else if (6 === q.tag) {
                        if (null === m) try {
                            q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                        } catch (t) {
                            $f734edd0e0ae82f0$var$W(a, a.return, t);
                        }
                    } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                        q.child.return = q;
                        q = q.child;
                        continue;
                    }
                    if (q === a) break a;
                    for(; null === q.sibling;){
                        if (null === q.return || q.return === a) break a;
                        m === q && (m = null);
                        q = q.return;
                    }
                    m === q && (m = null);
                    q.sibling.return = q.return;
                    q = q.sibling;
                }
            }
            break;
        case 19:
            $f734edd0e0ae82f0$var$dk(b, a);
            $f734edd0e0ae82f0$var$fk(a);
            d & 4 && $f734edd0e0ae82f0$var$bk(a);
            break;
        case 21:
            break;
        default:
            $f734edd0e0ae82f0$var$dk(b, a), $f734edd0e0ae82f0$var$fk(a);
    }
}
function $f734edd0e0ae82f0$var$fk(a) {
    var b = a.flags;
    if (b & 2) {
        try {
            a: {
                for(var c = a.return; null !== c;){
                    if ($f734edd0e0ae82f0$var$Uj(c)) {
                        var d = c;
                        break a;
                    }
                    c = c.return;
                }
                throw Error($f734edd0e0ae82f0$var$p(160));
            }
            switch(d.tag){
                case 5:
                    var e = d.stateNode;
                    d.flags & 32 && ($f734edd0e0ae82f0$var$ob(e, ""), d.flags &= -33);
                    var f = $f734edd0e0ae82f0$var$Vj(a);
                    $f734edd0e0ae82f0$var$Xj(a, f, e);
                    break;
                case 3:
                case 4:
                    var g = d.stateNode.containerInfo, h = $f734edd0e0ae82f0$var$Vj(a);
                    $f734edd0e0ae82f0$var$Wj(a, h, g);
                    break;
                default:
                    throw Error($f734edd0e0ae82f0$var$p(161));
            }
        } catch (k) {
            $f734edd0e0ae82f0$var$W(a, a.return, k);
        }
        a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
}
function $f734edd0e0ae82f0$var$ik(a, b, c) {
    $f734edd0e0ae82f0$var$V = a;
    $f734edd0e0ae82f0$var$jk(a, b, c);
}
function $f734edd0e0ae82f0$var$jk(a, b, c) {
    for(var d = 0 !== (a.mode & 1); null !== $f734edd0e0ae82f0$var$V;){
        var e = $f734edd0e0ae82f0$var$V, f = e.child;
        if (22 === e.tag && d) {
            var g = null !== e.memoizedState || $f734edd0e0ae82f0$var$Kj;
            if (!g) {
                var h = e.alternate, k = null !== h && null !== h.memoizedState || $f734edd0e0ae82f0$var$U;
                h = $f734edd0e0ae82f0$var$Kj;
                var l = $f734edd0e0ae82f0$var$U;
                $f734edd0e0ae82f0$var$Kj = g;
                if (($f734edd0e0ae82f0$var$U = k) && !l) for($f734edd0e0ae82f0$var$V = e; null !== $f734edd0e0ae82f0$var$V;)g = $f734edd0e0ae82f0$var$V, k = g.child, 22 === g.tag && null !== g.memoizedState ? $f734edd0e0ae82f0$var$kk(e) : null !== k ? (k.return = g, $f734edd0e0ae82f0$var$V = k) : $f734edd0e0ae82f0$var$kk(e);
                for(; null !== f;)$f734edd0e0ae82f0$var$V = f, $f734edd0e0ae82f0$var$jk(f, b, c), f = f.sibling;
                $f734edd0e0ae82f0$var$V = e;
                $f734edd0e0ae82f0$var$Kj = h;
                $f734edd0e0ae82f0$var$U = l;
            }
            $f734edd0e0ae82f0$var$lk(a, b, c);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, $f734edd0e0ae82f0$var$V = f) : $f734edd0e0ae82f0$var$lk(a, b, c);
    }
}
function $f734edd0e0ae82f0$var$lk(a) {
    for(; null !== $f734edd0e0ae82f0$var$V;){
        var b = $f734edd0e0ae82f0$var$V;
        if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
                if (0 !== (b.flags & 8772)) switch(b.tag){
                    case 0:
                    case 11:
                    case 15:
                        $f734edd0e0ae82f0$var$U || $f734edd0e0ae82f0$var$Rj(5, b);
                        break;
                    case 1:
                        var d = b.stateNode;
                        if (b.flags & 4 && !$f734edd0e0ae82f0$var$U) {
                            if (null === c) d.componentDidMount();
                            else {
                                var e = b.elementType === b.type ? c.memoizedProps : $f734edd0e0ae82f0$var$Lg(b.type, c.memoizedProps);
                                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                            }
                        }
                        var f = b.updateQueue;
                        null !== f && $f734edd0e0ae82f0$var$ih(b, f, d);
                        break;
                    case 3:
                        var g = b.updateQueue;
                        if (null !== g) {
                            c = null;
                            if (null !== b.child) switch(b.child.tag){
                                case 5:
                                    c = b.child.stateNode;
                                    break;
                                case 1:
                                    c = b.child.stateNode;
                            }
                            $f734edd0e0ae82f0$var$ih(b, g, c);
                        }
                        break;
                    case 5:
                        var h = b.stateNode;
                        if (null === c && b.flags & 4) {
                            c = h;
                            var k = b.memoizedProps;
                            switch(b.type){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    k.autoFocus && c.focus();
                                    break;
                                case "img":
                                    k.src && (c.src = k.src);
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (null === b.memoizedState) {
                            var l = b.alternate;
                            if (null !== l) {
                                var m = l.memoizedState;
                                if (null !== m) {
                                    var q = m.dehydrated;
                                    null !== q && $f734edd0e0ae82f0$var$bd(q);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error($f734edd0e0ae82f0$var$p(163));
                }
                $f734edd0e0ae82f0$var$U || b.flags & 512 && $f734edd0e0ae82f0$var$Sj(b);
            } catch (r) {
                $f734edd0e0ae82f0$var$W(b, b.return, r);
            }
        }
        if (b === a) {
            $f734edd0e0ae82f0$var$V = null;
            break;
        }
        c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            $f734edd0e0ae82f0$var$V = c;
            break;
        }
        $f734edd0e0ae82f0$var$V = b.return;
    }
}
function $f734edd0e0ae82f0$var$hk(a) {
    for(; null !== $f734edd0e0ae82f0$var$V;){
        var b = $f734edd0e0ae82f0$var$V;
        if (b === a) {
            $f734edd0e0ae82f0$var$V = null;
            break;
        }
        var c = b.sibling;
        if (null !== c) {
            c.return = b.return;
            $f734edd0e0ae82f0$var$V = c;
            break;
        }
        $f734edd0e0ae82f0$var$V = b.return;
    }
}
function $f734edd0e0ae82f0$var$kk(a) {
    for(; null !== $f734edd0e0ae82f0$var$V;){
        var b = $f734edd0e0ae82f0$var$V;
        try {
            switch(b.tag){
                case 0:
                case 11:
                case 15:
                    var c = b.return;
                    try {
                        $f734edd0e0ae82f0$var$Rj(4, b);
                    } catch (k) {
                        $f734edd0e0ae82f0$var$W(b, c, k);
                    }
                    break;
                case 1:
                    var d = b.stateNode;
                    if ("function" === typeof d.componentDidMount) {
                        var e = b.return;
                        try {
                            d.componentDidMount();
                        } catch (k) {
                            $f734edd0e0ae82f0$var$W(b, e, k);
                        }
                    }
                    var f = b.return;
                    try {
                        $f734edd0e0ae82f0$var$Sj(b);
                    } catch (k) {
                        $f734edd0e0ae82f0$var$W(b, f, k);
                    }
                    break;
                case 5:
                    var g = b.return;
                    try {
                        $f734edd0e0ae82f0$var$Sj(b);
                    } catch (k) {
                        $f734edd0e0ae82f0$var$W(b, g, k);
                    }
            }
        } catch (k) {
            $f734edd0e0ae82f0$var$W(b, b.return, k);
        }
        if (b === a) {
            $f734edd0e0ae82f0$var$V = null;
            break;
        }
        var h = b.sibling;
        if (null !== h) {
            h.return = b.return;
            $f734edd0e0ae82f0$var$V = h;
            break;
        }
        $f734edd0e0ae82f0$var$V = b.return;
    }
}
var $f734edd0e0ae82f0$var$mk = Math.ceil, $f734edd0e0ae82f0$var$nk = $f734edd0e0ae82f0$var$ua.ReactCurrentDispatcher, $f734edd0e0ae82f0$var$ok = $f734edd0e0ae82f0$var$ua.ReactCurrentOwner, $f734edd0e0ae82f0$var$pk = $f734edd0e0ae82f0$var$ua.ReactCurrentBatchConfig, $f734edd0e0ae82f0$var$K = 0, $f734edd0e0ae82f0$var$R = null, $f734edd0e0ae82f0$var$Y = null, $f734edd0e0ae82f0$var$Z = 0, $f734edd0e0ae82f0$var$gj = 0, $f734edd0e0ae82f0$var$fj = $f734edd0e0ae82f0$var$Uf(0), $f734edd0e0ae82f0$var$T = 0, $f734edd0e0ae82f0$var$qk = null, $f734edd0e0ae82f0$var$hh = 0, $f734edd0e0ae82f0$var$rk = 0, $f734edd0e0ae82f0$var$sk = 0, $f734edd0e0ae82f0$var$tk = null, $f734edd0e0ae82f0$var$uk = null, $f734edd0e0ae82f0$var$gk = 0, $f734edd0e0ae82f0$var$Hj = Infinity, $f734edd0e0ae82f0$var$vk = null, $f734edd0e0ae82f0$var$Pi = !1, $f734edd0e0ae82f0$var$Qi = null, $f734edd0e0ae82f0$var$Si = null, $f734edd0e0ae82f0$var$wk = !1, $f734edd0e0ae82f0$var$xk = null, $f734edd0e0ae82f0$var$yk = 0, $f734edd0e0ae82f0$var$zk = 0, $f734edd0e0ae82f0$var$Ak = null, $f734edd0e0ae82f0$var$Bk = -1, $f734edd0e0ae82f0$var$Ck = 0;
function $f734edd0e0ae82f0$var$L() {
    return 0 !== ($f734edd0e0ae82f0$var$K & 6) ? $f734edd0e0ae82f0$var$B() : -1 !== $f734edd0e0ae82f0$var$Bk ? $f734edd0e0ae82f0$var$Bk : $f734edd0e0ae82f0$var$Bk = $f734edd0e0ae82f0$var$B();
}
function $f734edd0e0ae82f0$var$lh(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== ($f734edd0e0ae82f0$var$K & 2) && 0 !== $f734edd0e0ae82f0$var$Z) return $f734edd0e0ae82f0$var$Z & -$f734edd0e0ae82f0$var$Z;
    if (null !== $f734edd0e0ae82f0$var$Kg.transition) return 0 === $f734edd0e0ae82f0$var$Ck && ($f734edd0e0ae82f0$var$Ck = $f734edd0e0ae82f0$var$yc()), $f734edd0e0ae82f0$var$Ck;
    a = $f734edd0e0ae82f0$var$C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : $f734edd0e0ae82f0$var$jd(a.type);
    return a;
}
function $f734edd0e0ae82f0$var$mh(a, b, c, d) {
    if (50 < $f734edd0e0ae82f0$var$zk) throw $f734edd0e0ae82f0$var$zk = 0, $f734edd0e0ae82f0$var$Ak = null, Error($f734edd0e0ae82f0$var$p(185));
    $f734edd0e0ae82f0$var$Ac(a, c, d);
    if (0 === ($f734edd0e0ae82f0$var$K & 2) || a !== $f734edd0e0ae82f0$var$R) a === $f734edd0e0ae82f0$var$R && (0 === ($f734edd0e0ae82f0$var$K & 2) && ($f734edd0e0ae82f0$var$rk |= c), 4 === $f734edd0e0ae82f0$var$T && $f734edd0e0ae82f0$var$Dk(a, $f734edd0e0ae82f0$var$Z)), $f734edd0e0ae82f0$var$Ek(a, d), 1 === c && 0 === $f734edd0e0ae82f0$var$K && 0 === (b.mode & 1) && ($f734edd0e0ae82f0$var$Hj = $f734edd0e0ae82f0$var$B() + 500, $f734edd0e0ae82f0$var$fg && $f734edd0e0ae82f0$var$jg());
}
function $f734edd0e0ae82f0$var$Ek(a, b) {
    var c = a.callbackNode;
    $f734edd0e0ae82f0$var$wc(a, b);
    var d = $f734edd0e0ae82f0$var$uc(a, a === $f734edd0e0ae82f0$var$R ? $f734edd0e0ae82f0$var$Z : 0);
    if (0 === d) null !== c && $f734edd0e0ae82f0$var$bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
        null != c && $f734edd0e0ae82f0$var$bc(c);
        if (1 === b) 0 === a.tag ? $f734edd0e0ae82f0$var$ig($f734edd0e0ae82f0$var$Fk.bind(null, a)) : $f734edd0e0ae82f0$var$hg($f734edd0e0ae82f0$var$Fk.bind(null, a)), $f734edd0e0ae82f0$var$Jf(function() {
            0 === ($f734edd0e0ae82f0$var$K & 6) && $f734edd0e0ae82f0$var$jg();
        }), c = null;
        else {
            switch($f734edd0e0ae82f0$var$Dc(d)){
                case 1:
                    c = $f734edd0e0ae82f0$var$fc;
                    break;
                case 4:
                    c = $f734edd0e0ae82f0$var$gc;
                    break;
                case 16:
                    c = $f734edd0e0ae82f0$var$hc;
                    break;
                case 536870912:
                    c = $f734edd0e0ae82f0$var$jc;
                    break;
                default:
                    c = $f734edd0e0ae82f0$var$hc;
            }
            c = $f734edd0e0ae82f0$var$Gk(c, $f734edd0e0ae82f0$var$Hk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
    }
}
function $f734edd0e0ae82f0$var$Hk(a, b) {
    $f734edd0e0ae82f0$var$Bk = -1;
    $f734edd0e0ae82f0$var$Ck = 0;
    if (0 !== ($f734edd0e0ae82f0$var$K & 6)) throw Error($f734edd0e0ae82f0$var$p(327));
    var c = a.callbackNode;
    if ($f734edd0e0ae82f0$var$Ik() && a.callbackNode !== c) return null;
    var d = $f734edd0e0ae82f0$var$uc(a, a === $f734edd0e0ae82f0$var$R ? $f734edd0e0ae82f0$var$Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = $f734edd0e0ae82f0$var$Jk(a, d);
    else {
        b = d;
        var e = $f734edd0e0ae82f0$var$K;
        $f734edd0e0ae82f0$var$K |= 2;
        var f = $f734edd0e0ae82f0$var$Kk();
        if ($f734edd0e0ae82f0$var$R !== a || $f734edd0e0ae82f0$var$Z !== b) $f734edd0e0ae82f0$var$vk = null, $f734edd0e0ae82f0$var$Hj = $f734edd0e0ae82f0$var$B() + 500, $f734edd0e0ae82f0$var$Lk(a, b);
        for(;;)try {
            $f734edd0e0ae82f0$var$Mk();
            break;
        } catch (h) {
            $f734edd0e0ae82f0$var$Nk(a, h);
        }
        $f734edd0e0ae82f0$var$Qg();
        $f734edd0e0ae82f0$var$nk.current = f;
        $f734edd0e0ae82f0$var$K = e;
        null !== $f734edd0e0ae82f0$var$Y ? b = 0 : ($f734edd0e0ae82f0$var$R = null, $f734edd0e0ae82f0$var$Z = 0, b = $f734edd0e0ae82f0$var$T);
    }
    if (0 !== b) {
        2 === b && (e = $f734edd0e0ae82f0$var$xc(a), 0 !== e && (d = e, b = $f734edd0e0ae82f0$var$Ok(a, e)));
        if (1 === b) throw c = $f734edd0e0ae82f0$var$qk, $f734edd0e0ae82f0$var$Lk(a, 0), $f734edd0e0ae82f0$var$Dk(a, d), $f734edd0e0ae82f0$var$Ek(a, $f734edd0e0ae82f0$var$B()), c;
        if (6 === b) $f734edd0e0ae82f0$var$Dk(a, d);
        else {
            e = a.current.alternate;
            if (0 === (d & 30) && !$f734edd0e0ae82f0$var$Pk(e) && (b = $f734edd0e0ae82f0$var$Jk(a, d), 2 === b && (f = $f734edd0e0ae82f0$var$xc(a), 0 !== f && (d = f, b = $f734edd0e0ae82f0$var$Ok(a, f))), 1 === b)) throw c = $f734edd0e0ae82f0$var$qk, $f734edd0e0ae82f0$var$Lk(a, 0), $f734edd0e0ae82f0$var$Dk(a, d), $f734edd0e0ae82f0$var$Ek(a, $f734edd0e0ae82f0$var$B()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch(b){
                case 0:
                case 1:
                    throw Error($f734edd0e0ae82f0$var$p(345));
                case 2:
                    $f734edd0e0ae82f0$var$Qk(a, $f734edd0e0ae82f0$var$uk, $f734edd0e0ae82f0$var$vk);
                    break;
                case 3:
                    $f734edd0e0ae82f0$var$Dk(a, d);
                    if ((d & 130023424) === d && (b = $f734edd0e0ae82f0$var$gk + 500 - $f734edd0e0ae82f0$var$B(), 10 < b)) {
                        if (0 !== $f734edd0e0ae82f0$var$uc(a, 0)) break;
                        e = a.suspendedLanes;
                        if ((e & d) !== d) {
                            $f734edd0e0ae82f0$var$L();
                            a.pingedLanes |= a.suspendedLanes & e;
                            break;
                        }
                        a.timeoutHandle = $f734edd0e0ae82f0$var$Ff($f734edd0e0ae82f0$var$Qk.bind(null, a, $f734edd0e0ae82f0$var$uk, $f734edd0e0ae82f0$var$vk), b);
                        break;
                    }
                    $f734edd0e0ae82f0$var$Qk(a, $f734edd0e0ae82f0$var$uk, $f734edd0e0ae82f0$var$vk);
                    break;
                case 4:
                    $f734edd0e0ae82f0$var$Dk(a, d);
                    if ((d & 4194240) === d) break;
                    b = a.eventTimes;
                    for(e = -1; 0 < d;){
                        var g = 31 - $f734edd0e0ae82f0$var$oc(d);
                        f = 1 << g;
                        g = b[g];
                        g > e && (e = g);
                        d &= ~f;
                    }
                    d = e;
                    d = $f734edd0e0ae82f0$var$B() - d;
                    d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * $f734edd0e0ae82f0$var$mk(d / 1960)) - d;
                    if (10 < d) {
                        a.timeoutHandle = $f734edd0e0ae82f0$var$Ff($f734edd0e0ae82f0$var$Qk.bind(null, a, $f734edd0e0ae82f0$var$uk, $f734edd0e0ae82f0$var$vk), d);
                        break;
                    }
                    $f734edd0e0ae82f0$var$Qk(a, $f734edd0e0ae82f0$var$uk, $f734edd0e0ae82f0$var$vk);
                    break;
                case 5:
                    $f734edd0e0ae82f0$var$Qk(a, $f734edd0e0ae82f0$var$uk, $f734edd0e0ae82f0$var$vk);
                    break;
                default:
                    throw Error($f734edd0e0ae82f0$var$p(329));
            }
        }
    }
    $f734edd0e0ae82f0$var$Ek(a, $f734edd0e0ae82f0$var$B());
    return a.callbackNode === c ? $f734edd0e0ae82f0$var$Hk.bind(null, a) : null;
}
function $f734edd0e0ae82f0$var$Ok(a, b) {
    var c = $f734edd0e0ae82f0$var$tk;
    a.current.memoizedState.isDehydrated && ($f734edd0e0ae82f0$var$Lk(a, b).flags |= 256);
    a = $f734edd0e0ae82f0$var$Jk(a, b);
    2 !== a && (b = $f734edd0e0ae82f0$var$uk, $f734edd0e0ae82f0$var$uk = c, null !== b && $f734edd0e0ae82f0$var$Gj(b));
    return a;
}
function $f734edd0e0ae82f0$var$Gj(a) {
    null === $f734edd0e0ae82f0$var$uk ? $f734edd0e0ae82f0$var$uk = a : $f734edd0e0ae82f0$var$uk.push.apply($f734edd0e0ae82f0$var$uk, a);
}
function $f734edd0e0ae82f0$var$Pk(a) {
    for(var b = a;;){
        if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for(var d = 0; d < c.length; d++){
                var e = c[d], f = e.getSnapshot;
                e = e.value;
                try {
                    if (!$f734edd0e0ae82f0$var$He(f(), e)) return !1;
                } catch (g) {
                    return !1;
                }
            }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
            if (b === a) break;
            for(; null === b.sibling;){
                if (null === b.return || b.return === a) return !0;
                b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
        }
    }
    return !0;
}
function $f734edd0e0ae82f0$var$Dk(a, b) {
    b &= ~$f734edd0e0ae82f0$var$sk;
    b &= ~$f734edd0e0ae82f0$var$rk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for(a = a.expirationTimes; 0 < b;){
        var c = 31 - $f734edd0e0ae82f0$var$oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
    }
}
function $f734edd0e0ae82f0$var$Fk(a) {
    if (0 !== ($f734edd0e0ae82f0$var$K & 6)) throw Error($f734edd0e0ae82f0$var$p(327));
    $f734edd0e0ae82f0$var$Ik();
    var b = $f734edd0e0ae82f0$var$uc(a, 0);
    if (0 === (b & 1)) return $f734edd0e0ae82f0$var$Ek(a, $f734edd0e0ae82f0$var$B()), null;
    var c = $f734edd0e0ae82f0$var$Jk(a, b);
    if (0 !== a.tag && 2 === c) {
        var d = $f734edd0e0ae82f0$var$xc(a);
        0 !== d && (b = d, c = $f734edd0e0ae82f0$var$Ok(a, d));
    }
    if (1 === c) throw c = $f734edd0e0ae82f0$var$qk, $f734edd0e0ae82f0$var$Lk(a, 0), $f734edd0e0ae82f0$var$Dk(a, b), $f734edd0e0ae82f0$var$Ek(a, $f734edd0e0ae82f0$var$B()), c;
    if (6 === c) throw Error($f734edd0e0ae82f0$var$p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    $f734edd0e0ae82f0$var$Qk(a, $f734edd0e0ae82f0$var$uk, $f734edd0e0ae82f0$var$vk);
    $f734edd0e0ae82f0$var$Ek(a, $f734edd0e0ae82f0$var$B());
    return null;
}
function $f734edd0e0ae82f0$var$Rk(a, b) {
    var c = $f734edd0e0ae82f0$var$K;
    $f734edd0e0ae82f0$var$K |= 1;
    try {
        return a(b);
    } finally{
        $f734edd0e0ae82f0$var$K = c, 0 === $f734edd0e0ae82f0$var$K && ($f734edd0e0ae82f0$var$Hj = $f734edd0e0ae82f0$var$B() + 500, $f734edd0e0ae82f0$var$fg && $f734edd0e0ae82f0$var$jg());
    }
}
function $f734edd0e0ae82f0$var$Sk(a) {
    null !== $f734edd0e0ae82f0$var$xk && 0 === $f734edd0e0ae82f0$var$xk.tag && 0 === ($f734edd0e0ae82f0$var$K & 6) && $f734edd0e0ae82f0$var$Ik();
    var b = $f734edd0e0ae82f0$var$K;
    $f734edd0e0ae82f0$var$K |= 1;
    var c = $f734edd0e0ae82f0$var$pk.transition, d = $f734edd0e0ae82f0$var$C;
    try {
        if ($f734edd0e0ae82f0$var$pk.transition = null, $f734edd0e0ae82f0$var$C = 1, a) return a();
    } finally{
        $f734edd0e0ae82f0$var$C = d, $f734edd0e0ae82f0$var$pk.transition = c, $f734edd0e0ae82f0$var$K = b, 0 === ($f734edd0e0ae82f0$var$K & 6) && $f734edd0e0ae82f0$var$jg();
    }
}
function $f734edd0e0ae82f0$var$Ij() {
    $f734edd0e0ae82f0$var$gj = $f734edd0e0ae82f0$var$fj.current;
    $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$fj);
}
function $f734edd0e0ae82f0$var$Lk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, $f734edd0e0ae82f0$var$Gf(c));
    if (null !== $f734edd0e0ae82f0$var$Y) for(c = $f734edd0e0ae82f0$var$Y.return; null !== c;){
        var d = c;
        $f734edd0e0ae82f0$var$wg(d);
        switch(d.tag){
            case 1:
                d = d.type.childContextTypes;
                null !== d && void 0 !== d && $f734edd0e0ae82f0$var$$f();
                break;
            case 3:
                $f734edd0e0ae82f0$var$Jh();
                $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$Wf);
                $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$H);
                $f734edd0e0ae82f0$var$Oh();
                break;
            case 5:
                $f734edd0e0ae82f0$var$Lh(d);
                break;
            case 4:
                $f734edd0e0ae82f0$var$Jh();
                break;
            case 13:
                $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$M);
                break;
            case 19:
                $f734edd0e0ae82f0$var$E($f734edd0e0ae82f0$var$M);
                break;
            case 10:
                $f734edd0e0ae82f0$var$Rg(d.type._context);
                break;
            case 22:
            case 23:
                $f734edd0e0ae82f0$var$Ij();
        }
        c = c.return;
    }
    $f734edd0e0ae82f0$var$R = a;
    $f734edd0e0ae82f0$var$Y = a = $f734edd0e0ae82f0$var$wh(a.current, null);
    $f734edd0e0ae82f0$var$Z = $f734edd0e0ae82f0$var$gj = b;
    $f734edd0e0ae82f0$var$T = 0;
    $f734edd0e0ae82f0$var$qk = null;
    $f734edd0e0ae82f0$var$sk = $f734edd0e0ae82f0$var$rk = $f734edd0e0ae82f0$var$hh = 0;
    $f734edd0e0ae82f0$var$uk = $f734edd0e0ae82f0$var$tk = null;
    if (null !== $f734edd0e0ae82f0$var$Wg) {
        for(b = 0; b < $f734edd0e0ae82f0$var$Wg.length; b++)if (c = $f734edd0e0ae82f0$var$Wg[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
                var g = f.next;
                f.next = e;
                d.next = g;
            }
            c.pending = d;
        }
        $f734edd0e0ae82f0$var$Wg = null;
    }
    return a;
}
function $f734edd0e0ae82f0$var$Nk(a, b) {
    do {
        var c = $f734edd0e0ae82f0$var$Y;
        try {
            $f734edd0e0ae82f0$var$Qg();
            $f734edd0e0ae82f0$var$Ph.current = $f734edd0e0ae82f0$var$ai;
            if ($f734edd0e0ae82f0$var$Sh) {
                for(var d = $f734edd0e0ae82f0$var$N.memoizedState; null !== d;){
                    var e = d.queue;
                    null !== e && (e.pending = null);
                    d = d.next;
                }
                $f734edd0e0ae82f0$var$Sh = !1;
            }
            $f734edd0e0ae82f0$var$Rh = 0;
            $f734edd0e0ae82f0$var$P = $f734edd0e0ae82f0$var$O = $f734edd0e0ae82f0$var$N = null;
            $f734edd0e0ae82f0$var$Th = !1;
            $f734edd0e0ae82f0$var$Uh = 0;
            $f734edd0e0ae82f0$var$ok.current = null;
            if (null === c || null === c.return) {
                $f734edd0e0ae82f0$var$T = 1;
                $f734edd0e0ae82f0$var$qk = b;
                $f734edd0e0ae82f0$var$Y = null;
                break;
            }
            a: {
                var f = a, g = c.return, h = c, k = b;
                b = $f734edd0e0ae82f0$var$Z;
                h.flags |= 32768;
                if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                    var l = k, m = h, q = m.tag;
                    if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                        var r = m.alternate;
                        r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                    }
                    var y = $f734edd0e0ae82f0$var$Vi(g);
                    if (null !== y) {
                        y.flags &= -257;
                        $f734edd0e0ae82f0$var$Wi(y, g, h, f, b);
                        y.mode & 1 && $f734edd0e0ae82f0$var$Ti(f, l, b);
                        b = y;
                        k = l;
                        var n = b.updateQueue;
                        if (null === n) {
                            var t = new Set;
                            t.add(k);
                            b.updateQueue = t;
                        } else n.add(k);
                        break a;
                    } else {
                        if (0 === (b & 1)) {
                            $f734edd0e0ae82f0$var$Ti(f, l, b);
                            $f734edd0e0ae82f0$var$uj();
                            break a;
                        }
                        k = Error($f734edd0e0ae82f0$var$p(426));
                    }
                } else if ($f734edd0e0ae82f0$var$I && h.mode & 1) {
                    var J = $f734edd0e0ae82f0$var$Vi(g);
                    if (null !== J) {
                        0 === (J.flags & 65536) && (J.flags |= 256);
                        $f734edd0e0ae82f0$var$Wi(J, g, h, f, b);
                        $f734edd0e0ae82f0$var$Jg($f734edd0e0ae82f0$var$Ki(k, h));
                        break a;
                    }
                }
                f = k = $f734edd0e0ae82f0$var$Ki(k, h);
                4 !== $f734edd0e0ae82f0$var$T && ($f734edd0e0ae82f0$var$T = 2);
                null === $f734edd0e0ae82f0$var$tk ? $f734edd0e0ae82f0$var$tk = [
                    f
                ] : $f734edd0e0ae82f0$var$tk.push(f);
                f = g;
                do {
                    switch(f.tag){
                        case 3:
                            f.flags |= 65536;
                            b &= -b;
                            f.lanes |= b;
                            var x = $f734edd0e0ae82f0$var$Oi(f, k, b);
                            $f734edd0e0ae82f0$var$fh(f, x);
                            break a;
                        case 1:
                            h = k;
                            var w = f.type, u = f.stateNode;
                            if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === $f734edd0e0ae82f0$var$Si || !$f734edd0e0ae82f0$var$Si.has(u)))) {
                                f.flags |= 65536;
                                b &= -b;
                                f.lanes |= b;
                                var F = $f734edd0e0ae82f0$var$Ri(f, h, b);
                                $f734edd0e0ae82f0$var$fh(f, F);
                                break a;
                            }
                    }
                    f = f.return;
                }while (null !== f);
            }
            $f734edd0e0ae82f0$var$Tk(c);
        } catch (na) {
            b = na;
            $f734edd0e0ae82f0$var$Y === c && null !== c && ($f734edd0e0ae82f0$var$Y = c = c.return);
            continue;
        }
        break;
    }while (1);
}
function $f734edd0e0ae82f0$var$Kk() {
    var a = $f734edd0e0ae82f0$var$nk.current;
    $f734edd0e0ae82f0$var$nk.current = $f734edd0e0ae82f0$var$ai;
    return null === a ? $f734edd0e0ae82f0$var$ai : a;
}
function $f734edd0e0ae82f0$var$uj() {
    if (0 === $f734edd0e0ae82f0$var$T || 3 === $f734edd0e0ae82f0$var$T || 2 === $f734edd0e0ae82f0$var$T) $f734edd0e0ae82f0$var$T = 4;
    null === $f734edd0e0ae82f0$var$R || 0 === ($f734edd0e0ae82f0$var$hh & 268435455) && 0 === ($f734edd0e0ae82f0$var$rk & 268435455) || $f734edd0e0ae82f0$var$Dk($f734edd0e0ae82f0$var$R, $f734edd0e0ae82f0$var$Z);
}
function $f734edd0e0ae82f0$var$Jk(a, b) {
    var c = $f734edd0e0ae82f0$var$K;
    $f734edd0e0ae82f0$var$K |= 2;
    var d = $f734edd0e0ae82f0$var$Kk();
    if ($f734edd0e0ae82f0$var$R !== a || $f734edd0e0ae82f0$var$Z !== b) $f734edd0e0ae82f0$var$vk = null, $f734edd0e0ae82f0$var$Lk(a, b);
    for(;;)try {
        $f734edd0e0ae82f0$var$Uk();
        break;
    } catch (e) {
        $f734edd0e0ae82f0$var$Nk(a, e);
    }
    $f734edd0e0ae82f0$var$Qg();
    $f734edd0e0ae82f0$var$K = c;
    $f734edd0e0ae82f0$var$nk.current = d;
    if (null !== $f734edd0e0ae82f0$var$Y) throw Error($f734edd0e0ae82f0$var$p(261));
    $f734edd0e0ae82f0$var$R = null;
    $f734edd0e0ae82f0$var$Z = 0;
    return $f734edd0e0ae82f0$var$T;
}
function $f734edd0e0ae82f0$var$Uk() {
    for(; null !== $f734edd0e0ae82f0$var$Y;)$f734edd0e0ae82f0$var$Vk($f734edd0e0ae82f0$var$Y);
}
function $f734edd0e0ae82f0$var$Mk() {
    for(; null !== $f734edd0e0ae82f0$var$Y && !$f734edd0e0ae82f0$var$cc();)$f734edd0e0ae82f0$var$Vk($f734edd0e0ae82f0$var$Y);
}
function $f734edd0e0ae82f0$var$Vk(a) {
    var b = $f734edd0e0ae82f0$var$Wk(a.alternate, a, $f734edd0e0ae82f0$var$gj);
    a.memoizedProps = a.pendingProps;
    null === b ? $f734edd0e0ae82f0$var$Tk(a) : $f734edd0e0ae82f0$var$Y = b;
    $f734edd0e0ae82f0$var$ok.current = null;
}
function $f734edd0e0ae82f0$var$Tk(a) {
    var b = a;
    do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
            if (c = $f734edd0e0ae82f0$var$Fj(c, b, $f734edd0e0ae82f0$var$gj), null !== c) {
                $f734edd0e0ae82f0$var$Y = c;
                return;
            }
        } else {
            c = $f734edd0e0ae82f0$var$Jj(c, b);
            if (null !== c) {
                c.flags &= 32767;
                $f734edd0e0ae82f0$var$Y = c;
                return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
                $f734edd0e0ae82f0$var$T = 6;
                $f734edd0e0ae82f0$var$Y = null;
                return;
            }
        }
        b = b.sibling;
        if (null !== b) {
            $f734edd0e0ae82f0$var$Y = b;
            return;
        }
        $f734edd0e0ae82f0$var$Y = b = a;
    }while (null !== b);
    0 === $f734edd0e0ae82f0$var$T && ($f734edd0e0ae82f0$var$T = 5);
}
function $f734edd0e0ae82f0$var$Qk(a, b, c) {
    var d = $f734edd0e0ae82f0$var$C, e = $f734edd0e0ae82f0$var$pk.transition;
    try {
        $f734edd0e0ae82f0$var$pk.transition = null, $f734edd0e0ae82f0$var$C = 1, $f734edd0e0ae82f0$var$Xk(a, b, c, d);
    } finally{
        $f734edd0e0ae82f0$var$pk.transition = e, $f734edd0e0ae82f0$var$C = d;
    }
    return null;
}
function $f734edd0e0ae82f0$var$Xk(a, b, c, d) {
    do $f734edd0e0ae82f0$var$Ik();
    while (null !== $f734edd0e0ae82f0$var$xk);
    if (0 !== ($f734edd0e0ae82f0$var$K & 6)) throw Error($f734edd0e0ae82f0$var$p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error($f734edd0e0ae82f0$var$p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    $f734edd0e0ae82f0$var$Bc(a, f);
    a === $f734edd0e0ae82f0$var$R && ($f734edd0e0ae82f0$var$Y = $f734edd0e0ae82f0$var$R = null, $f734edd0e0ae82f0$var$Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || $f734edd0e0ae82f0$var$wk || ($f734edd0e0ae82f0$var$wk = !0, $f734edd0e0ae82f0$var$Gk($f734edd0e0ae82f0$var$hc, function() {
        $f734edd0e0ae82f0$var$Ik();
        return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
        f = $f734edd0e0ae82f0$var$pk.transition;
        $f734edd0e0ae82f0$var$pk.transition = null;
        var g = $f734edd0e0ae82f0$var$C;
        $f734edd0e0ae82f0$var$C = 1;
        var h = $f734edd0e0ae82f0$var$K;
        $f734edd0e0ae82f0$var$K |= 4;
        $f734edd0e0ae82f0$var$ok.current = null;
        $f734edd0e0ae82f0$var$Pj(a, c);
        $f734edd0e0ae82f0$var$ek(c, a);
        $f734edd0e0ae82f0$var$Oe($f734edd0e0ae82f0$var$Df);
        $f734edd0e0ae82f0$var$dd = !!$f734edd0e0ae82f0$var$Cf;
        $f734edd0e0ae82f0$var$Df = $f734edd0e0ae82f0$var$Cf = null;
        a.current = c;
        $f734edd0e0ae82f0$var$ik(c, a, e);
        $f734edd0e0ae82f0$var$dc();
        $f734edd0e0ae82f0$var$K = h;
        $f734edd0e0ae82f0$var$C = g;
        $f734edd0e0ae82f0$var$pk.transition = f;
    } else a.current = c;
    $f734edd0e0ae82f0$var$wk && ($f734edd0e0ae82f0$var$wk = !1, $f734edd0e0ae82f0$var$xk = a, $f734edd0e0ae82f0$var$yk = e);
    f = a.pendingLanes;
    0 === f && ($f734edd0e0ae82f0$var$Si = null);
    $f734edd0e0ae82f0$var$mc(c.stateNode, d);
    $f734edd0e0ae82f0$var$Ek(a, $f734edd0e0ae82f0$var$B());
    if (null !== b) for(d = a.onRecoverableError, c = 0; c < b.length; c++)e = b[c], d(e.value, {
        componentStack: e.stack,
        digest: e.digest
    });
    if ($f734edd0e0ae82f0$var$Pi) throw $f734edd0e0ae82f0$var$Pi = !1, a = $f734edd0e0ae82f0$var$Qi, $f734edd0e0ae82f0$var$Qi = null, a;
    0 !== ($f734edd0e0ae82f0$var$yk & 1) && 0 !== a.tag && $f734edd0e0ae82f0$var$Ik();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === $f734edd0e0ae82f0$var$Ak ? $f734edd0e0ae82f0$var$zk++ : ($f734edd0e0ae82f0$var$zk = 0, $f734edd0e0ae82f0$var$Ak = a) : $f734edd0e0ae82f0$var$zk = 0;
    $f734edd0e0ae82f0$var$jg();
    return null;
}
function $f734edd0e0ae82f0$var$Ik() {
    if (null !== $f734edd0e0ae82f0$var$xk) {
        var a = $f734edd0e0ae82f0$var$Dc($f734edd0e0ae82f0$var$yk), b = $f734edd0e0ae82f0$var$pk.transition, c = $f734edd0e0ae82f0$var$C;
        try {
            $f734edd0e0ae82f0$var$pk.transition = null;
            $f734edd0e0ae82f0$var$C = 16 > a ? 16 : a;
            if (null === $f734edd0e0ae82f0$var$xk) var d = !1;
            else {
                a = $f734edd0e0ae82f0$var$xk;
                $f734edd0e0ae82f0$var$xk = null;
                $f734edd0e0ae82f0$var$yk = 0;
                if (0 !== ($f734edd0e0ae82f0$var$K & 6)) throw Error($f734edd0e0ae82f0$var$p(331));
                var e = $f734edd0e0ae82f0$var$K;
                $f734edd0e0ae82f0$var$K |= 4;
                for($f734edd0e0ae82f0$var$V = a.current; null !== $f734edd0e0ae82f0$var$V;){
                    var f = $f734edd0e0ae82f0$var$V, g = f.child;
                    if (0 !== ($f734edd0e0ae82f0$var$V.flags & 16)) {
                        var h = f.deletions;
                        if (null !== h) {
                            for(var k = 0; k < h.length; k++){
                                var l = h[k];
                                for($f734edd0e0ae82f0$var$V = l; null !== $f734edd0e0ae82f0$var$V;){
                                    var m = $f734edd0e0ae82f0$var$V;
                                    switch(m.tag){
                                        case 0:
                                        case 11:
                                        case 15:
                                            $f734edd0e0ae82f0$var$Qj(8, m, f);
                                    }
                                    var q = m.child;
                                    if (null !== q) q.return = m, $f734edd0e0ae82f0$var$V = q;
                                    else for(; null !== $f734edd0e0ae82f0$var$V;){
                                        m = $f734edd0e0ae82f0$var$V;
                                        var r = m.sibling, y = m.return;
                                        $f734edd0e0ae82f0$var$Tj(m);
                                        if (m === l) {
                                            $f734edd0e0ae82f0$var$V = null;
                                            break;
                                        }
                                        if (null !== r) {
                                            r.return = y;
                                            $f734edd0e0ae82f0$var$V = r;
                                            break;
                                        }
                                        $f734edd0e0ae82f0$var$V = y;
                                    }
                                }
                            }
                            var n = f.alternate;
                            if (null !== n) {
                                var t = n.child;
                                if (null !== t) {
                                    n.child = null;
                                    do {
                                        var J = t.sibling;
                                        t.sibling = null;
                                        t = J;
                                    }while (null !== t);
                                }
                            }
                            $f734edd0e0ae82f0$var$V = f;
                        }
                    }
                    if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, $f734edd0e0ae82f0$var$V = g;
                    else b: for(; null !== $f734edd0e0ae82f0$var$V;){
                        f = $f734edd0e0ae82f0$var$V;
                        if (0 !== (f.flags & 2048)) switch(f.tag){
                            case 0:
                            case 11:
                            case 15:
                                $f734edd0e0ae82f0$var$Qj(9, f, f.return);
                        }
                        var x = f.sibling;
                        if (null !== x) {
                            x.return = f.return;
                            $f734edd0e0ae82f0$var$V = x;
                            break b;
                        }
                        $f734edd0e0ae82f0$var$V = f.return;
                    }
                }
                var w = a.current;
                for($f734edd0e0ae82f0$var$V = w; null !== $f734edd0e0ae82f0$var$V;){
                    g = $f734edd0e0ae82f0$var$V;
                    var u = g.child;
                    if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, $f734edd0e0ae82f0$var$V = u;
                    else b: for(g = w; null !== $f734edd0e0ae82f0$var$V;){
                        h = $f734edd0e0ae82f0$var$V;
                        if (0 !== (h.flags & 2048)) try {
                            switch(h.tag){
                                case 0:
                                case 11:
                                case 15:
                                    $f734edd0e0ae82f0$var$Rj(9, h);
                            }
                        } catch (na) {
                            $f734edd0e0ae82f0$var$W(h, h.return, na);
                        }
                        if (h === g) {
                            $f734edd0e0ae82f0$var$V = null;
                            break b;
                        }
                        var F = h.sibling;
                        if (null !== F) {
                            F.return = h.return;
                            $f734edd0e0ae82f0$var$V = F;
                            break b;
                        }
                        $f734edd0e0ae82f0$var$V = h.return;
                    }
                }
                $f734edd0e0ae82f0$var$K = e;
                $f734edd0e0ae82f0$var$jg();
                if ($f734edd0e0ae82f0$var$lc && "function" === typeof $f734edd0e0ae82f0$var$lc.onPostCommitFiberRoot) try {
                    $f734edd0e0ae82f0$var$lc.onPostCommitFiberRoot($f734edd0e0ae82f0$var$kc, a);
                } catch (na) {}
                d = !0;
            }
            return d;
        } finally{
            $f734edd0e0ae82f0$var$C = c, $f734edd0e0ae82f0$var$pk.transition = b;
        }
    }
    return !1;
}
function $f734edd0e0ae82f0$var$Yk(a, b, c) {
    b = $f734edd0e0ae82f0$var$Ki(c, b);
    b = $f734edd0e0ae82f0$var$Oi(a, b, 1);
    a = $f734edd0e0ae82f0$var$dh(a, b, 1);
    b = $f734edd0e0ae82f0$var$L();
    null !== a && ($f734edd0e0ae82f0$var$Ac(a, 1, b), $f734edd0e0ae82f0$var$Ek(a, b));
}
function $f734edd0e0ae82f0$var$W(a, b, c) {
    if (3 === a.tag) $f734edd0e0ae82f0$var$Yk(a, a, c);
    else for(; null !== b;){
        if (3 === b.tag) {
            $f734edd0e0ae82f0$var$Yk(b, a, c);
            break;
        } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === $f734edd0e0ae82f0$var$Si || !$f734edd0e0ae82f0$var$Si.has(d))) {
                a = $f734edd0e0ae82f0$var$Ki(c, a);
                a = $f734edd0e0ae82f0$var$Ri(b, a, 1);
                b = $f734edd0e0ae82f0$var$dh(b, a, 1);
                a = $f734edd0e0ae82f0$var$L();
                null !== b && ($f734edd0e0ae82f0$var$Ac(b, 1, a), $f734edd0e0ae82f0$var$Ek(b, a));
                break;
            }
        }
        b = b.return;
    }
}
function $f734edd0e0ae82f0$var$Ui(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = $f734edd0e0ae82f0$var$L();
    a.pingedLanes |= a.suspendedLanes & c;
    $f734edd0e0ae82f0$var$R === a && ($f734edd0e0ae82f0$var$Z & c) === c && (4 === $f734edd0e0ae82f0$var$T || 3 === $f734edd0e0ae82f0$var$T && ($f734edd0e0ae82f0$var$Z & 130023424) === $f734edd0e0ae82f0$var$Z && 500 > $f734edd0e0ae82f0$var$B() - $f734edd0e0ae82f0$var$gk ? $f734edd0e0ae82f0$var$Lk(a, 0) : $f734edd0e0ae82f0$var$sk |= c);
    $f734edd0e0ae82f0$var$Ek(a, b);
}
function $f734edd0e0ae82f0$var$Zk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = $f734edd0e0ae82f0$var$sc, $f734edd0e0ae82f0$var$sc <<= 1, 0 === ($f734edd0e0ae82f0$var$sc & 130023424) && ($f734edd0e0ae82f0$var$sc = 4194304)));
    var c = $f734edd0e0ae82f0$var$L();
    a = $f734edd0e0ae82f0$var$Zg(a, b);
    null !== a && ($f734edd0e0ae82f0$var$Ac(a, b, c), $f734edd0e0ae82f0$var$Ek(a, c));
}
function $f734edd0e0ae82f0$var$vj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    $f734edd0e0ae82f0$var$Zk(a, c);
}
function $f734edd0e0ae82f0$var$ck(a, b) {
    var c = 0;
    switch(a.tag){
        case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
        case 19:
            d = a.stateNode;
            break;
        default:
            throw Error($f734edd0e0ae82f0$var$p(314));
    }
    null !== d && d.delete(b);
    $f734edd0e0ae82f0$var$Zk(a, c);
}
var $f734edd0e0ae82f0$var$Wk;
$f734edd0e0ae82f0$var$Wk = function(a, b, c) {
    if (null !== a) {
        if (a.memoizedProps !== b.pendingProps || $f734edd0e0ae82f0$var$Wf.current) $f734edd0e0ae82f0$var$Ug = !0;
        else {
            if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return $f734edd0e0ae82f0$var$Ug = !1, $f734edd0e0ae82f0$var$zj(a, b, c);
            $f734edd0e0ae82f0$var$Ug = 0 !== (a.flags & 131072) ? !0 : !1;
        }
    } else $f734edd0e0ae82f0$var$Ug = !1, $f734edd0e0ae82f0$var$I && 0 !== (b.flags & 1048576) && $f734edd0e0ae82f0$var$ug(b, $f734edd0e0ae82f0$var$ng, b.index);
    b.lanes = 0;
    switch(b.tag){
        case 2:
            var d = b.type;
            $f734edd0e0ae82f0$var$jj(a, b);
            a = b.pendingProps;
            var e = $f734edd0e0ae82f0$var$Yf(b, $f734edd0e0ae82f0$var$H.current);
            $f734edd0e0ae82f0$var$Tg(b, c);
            e = $f734edd0e0ae82f0$var$Xh(null, b, d, a, e, c);
            var f = $f734edd0e0ae82f0$var$bi();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, $f734edd0e0ae82f0$var$Zf(d) ? (f = !0, $f734edd0e0ae82f0$var$cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, $f734edd0e0ae82f0$var$ah(b), e.updater = $f734edd0e0ae82f0$var$nh, b.stateNode = e, e._reactInternals = b, $f734edd0e0ae82f0$var$rh(b, d, a, c), b = $f734edd0e0ae82f0$var$kj(null, b, d, !0, f, c)) : (b.tag = 0, $f734edd0e0ae82f0$var$I && f && $f734edd0e0ae82f0$var$vg(b), $f734edd0e0ae82f0$var$Yi(null, b, e, c), b = b.child);
            return b;
        case 16:
            d = b.elementType;
            a: {
                $f734edd0e0ae82f0$var$jj(a, b);
                a = b.pendingProps;
                e = d._init;
                d = e(d._payload);
                b.type = d;
                e = b.tag = $f734edd0e0ae82f0$var$$k(d);
                a = $f734edd0e0ae82f0$var$Lg(d, a);
                switch(e){
                    case 0:
                        b = $f734edd0e0ae82f0$var$dj(null, b, d, a, c);
                        break a;
                    case 1:
                        b = $f734edd0e0ae82f0$var$ij(null, b, d, a, c);
                        break a;
                    case 11:
                        b = $f734edd0e0ae82f0$var$Zi(null, b, d, a, c);
                        break a;
                    case 14:
                        b = $f734edd0e0ae82f0$var$aj(null, b, d, $f734edd0e0ae82f0$var$Lg(d.type, a), c);
                        break a;
                }
                throw Error($f734edd0e0ae82f0$var$p(306, d, ""));
            }
            return b;
        case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $f734edd0e0ae82f0$var$Lg(d, e), $f734edd0e0ae82f0$var$dj(a, b, d, e, c);
        case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $f734edd0e0ae82f0$var$Lg(d, e), $f734edd0e0ae82f0$var$ij(a, b, d, e, c);
        case 3:
            a: {
                $f734edd0e0ae82f0$var$lj(b);
                if (null === a) throw Error($f734edd0e0ae82f0$var$p(387));
                d = b.pendingProps;
                f = b.memoizedState;
                e = f.element;
                $f734edd0e0ae82f0$var$bh(a, b);
                $f734edd0e0ae82f0$var$gh(b, d, null, c);
                var g = b.memoizedState;
                d = g.element;
                if (f.isDehydrated) {
                    if (f = {
                        element: d,
                        isDehydrated: !1,
                        cache: g.cache,
                        pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                        transitions: g.transitions
                    }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                        e = $f734edd0e0ae82f0$var$Ki(Error($f734edd0e0ae82f0$var$p(423)), b);
                        b = $f734edd0e0ae82f0$var$mj(a, b, d, c, e);
                        break a;
                    } else if (d !== e) {
                        e = $f734edd0e0ae82f0$var$Ki(Error($f734edd0e0ae82f0$var$p(424)), b);
                        b = $f734edd0e0ae82f0$var$mj(a, b, d, c, e);
                        break a;
                    } else for($f734edd0e0ae82f0$var$yg = $f734edd0e0ae82f0$var$Lf(b.stateNode.containerInfo.firstChild), $f734edd0e0ae82f0$var$xg = b, $f734edd0e0ae82f0$var$I = !0, $f734edd0e0ae82f0$var$zg = null, c = $f734edd0e0ae82f0$var$Ch(b, null, d, c), b.child = c; c;)c.flags = c.flags & -3 | 4096, c = c.sibling;
                } else {
                    $f734edd0e0ae82f0$var$Ig();
                    if (d === e) {
                        b = $f734edd0e0ae82f0$var$$i(a, b, c);
                        break a;
                    }
                    $f734edd0e0ae82f0$var$Yi(a, b, d, c);
                }
                b = b.child;
            }
            return b;
        case 5:
            return $f734edd0e0ae82f0$var$Kh(b), null === a && $f734edd0e0ae82f0$var$Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, $f734edd0e0ae82f0$var$Ef(d, e) ? g = null : null !== f && $f734edd0e0ae82f0$var$Ef(d, f) && (b.flags |= 32), $f734edd0e0ae82f0$var$hj(a, b), $f734edd0e0ae82f0$var$Yi(a, b, g, c), b.child;
        case 6:
            return null === a && $f734edd0e0ae82f0$var$Eg(b), null;
        case 13:
            return $f734edd0e0ae82f0$var$pj(a, b, c);
        case 4:
            return $f734edd0e0ae82f0$var$Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = $f734edd0e0ae82f0$var$Bh(b, null, d, c) : $f734edd0e0ae82f0$var$Yi(a, b, d, c), b.child;
        case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $f734edd0e0ae82f0$var$Lg(d, e), $f734edd0e0ae82f0$var$Zi(a, b, d, e, c);
        case 7:
            return $f734edd0e0ae82f0$var$Yi(a, b, b.pendingProps, c), b.child;
        case 8:
            return $f734edd0e0ae82f0$var$Yi(a, b, b.pendingProps.children, c), b.child;
        case 12:
            return $f734edd0e0ae82f0$var$Yi(a, b, b.pendingProps.children, c), b.child;
        case 10:
            a: {
                d = b.type._context;
                e = b.pendingProps;
                f = b.memoizedProps;
                g = e.value;
                $f734edd0e0ae82f0$var$G($f734edd0e0ae82f0$var$Mg, d._currentValue);
                d._currentValue = g;
                if (null !== f) {
                    if ($f734edd0e0ae82f0$var$He(f.value, g)) {
                        if (f.children === e.children && !$f734edd0e0ae82f0$var$Wf.current) {
                            b = $f734edd0e0ae82f0$var$$i(a, b, c);
                            break a;
                        }
                    } else for(f = b.child, null !== f && (f.return = b); null !== f;){
                        var h = f.dependencies;
                        if (null !== h) {
                            g = f.child;
                            for(var k = h.firstContext; null !== k;){
                                if (k.context === d) {
                                    if (1 === f.tag) {
                                        k = $f734edd0e0ae82f0$var$ch(-1, c & -c);
                                        k.tag = 2;
                                        var l = f.updateQueue;
                                        if (null !== l) {
                                            l = l.shared;
                                            var m = l.pending;
                                            null === m ? k.next = k : (k.next = m.next, m.next = k);
                                            l.pending = k;
                                        }
                                    }
                                    f.lanes |= c;
                                    k = f.alternate;
                                    null !== k && (k.lanes |= c);
                                    $f734edd0e0ae82f0$var$Sg(f.return, c, b);
                                    h.lanes |= c;
                                    break;
                                }
                                k = k.next;
                            }
                        } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                        else if (18 === f.tag) {
                            g = f.return;
                            if (null === g) throw Error($f734edd0e0ae82f0$var$p(341));
                            g.lanes |= c;
                            h = g.alternate;
                            null !== h && (h.lanes |= c);
                            $f734edd0e0ae82f0$var$Sg(g, c, b);
                            g = f.sibling;
                        } else g = f.child;
                        if (null !== g) g.return = f;
                        else for(g = f; null !== g;){
                            if (g === b) {
                                g = null;
                                break;
                            }
                            f = g.sibling;
                            if (null !== f) {
                                f.return = g.return;
                                g = f;
                                break;
                            }
                            g = g.return;
                        }
                        f = g;
                    }
                }
                $f734edd0e0ae82f0$var$Yi(a, b, e.children, c);
                b = b.child;
            }
            return b;
        case 9:
            return e = b.type, d = b.pendingProps.children, $f734edd0e0ae82f0$var$Tg(b, c), e = $f734edd0e0ae82f0$var$Vg(e), d = d(e), b.flags |= 1, $f734edd0e0ae82f0$var$Yi(a, b, d, c), b.child;
        case 14:
            return d = b.type, e = $f734edd0e0ae82f0$var$Lg(d, b.pendingProps), e = $f734edd0e0ae82f0$var$Lg(d.type, e), $f734edd0e0ae82f0$var$aj(a, b, d, e, c);
        case 15:
            return $f734edd0e0ae82f0$var$cj(a, b, b.type, b.pendingProps, c);
        case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : $f734edd0e0ae82f0$var$Lg(d, e), $f734edd0e0ae82f0$var$jj(a, b), b.tag = 1, $f734edd0e0ae82f0$var$Zf(d) ? (a = !0, $f734edd0e0ae82f0$var$cg(b)) : a = !1, $f734edd0e0ae82f0$var$Tg(b, c), $f734edd0e0ae82f0$var$ph(b, d, e), $f734edd0e0ae82f0$var$rh(b, d, e, c), $f734edd0e0ae82f0$var$kj(null, b, d, !0, a, c);
        case 19:
            return $f734edd0e0ae82f0$var$yj(a, b, c);
        case 22:
            return $f734edd0e0ae82f0$var$ej(a, b, c);
    }
    throw Error($f734edd0e0ae82f0$var$p(156, b.tag));
};
function $f734edd0e0ae82f0$var$Gk(a, b) {
    return $f734edd0e0ae82f0$var$ac(a, b);
}
function $f734edd0e0ae82f0$var$al(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
}
function $f734edd0e0ae82f0$var$Bg(a, b, c, d) {
    return new $f734edd0e0ae82f0$var$al(a, b, c, d);
}
function $f734edd0e0ae82f0$var$bj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
}
function $f734edd0e0ae82f0$var$$k(a) {
    if ("function" === typeof a) return $f734edd0e0ae82f0$var$bj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === $f734edd0e0ae82f0$var$Da) return 11;
        if (a === $f734edd0e0ae82f0$var$Ga) return 14;
    }
    return 2;
}
function $f734edd0e0ae82f0$var$wh(a, b) {
    var c = a.alternate;
    null === c ? (c = $f734edd0e0ae82f0$var$Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
        lanes: b.lanes,
        firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
}
function $f734edd0e0ae82f0$var$yh(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) $f734edd0e0ae82f0$var$bj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch(a){
        case $f734edd0e0ae82f0$var$ya:
            return $f734edd0e0ae82f0$var$Ah(c.children, e, f, b);
        case $f734edd0e0ae82f0$var$za:
            g = 8;
            e |= 8;
            break;
        case $f734edd0e0ae82f0$var$Aa:
            return a = $f734edd0e0ae82f0$var$Bg(12, c, b, e | 2), a.elementType = $f734edd0e0ae82f0$var$Aa, a.lanes = f, a;
        case $f734edd0e0ae82f0$var$Ea:
            return a = $f734edd0e0ae82f0$var$Bg(13, c, b, e), a.elementType = $f734edd0e0ae82f0$var$Ea, a.lanes = f, a;
        case $f734edd0e0ae82f0$var$Fa:
            return a = $f734edd0e0ae82f0$var$Bg(19, c, b, e), a.elementType = $f734edd0e0ae82f0$var$Fa, a.lanes = f, a;
        case $f734edd0e0ae82f0$var$Ia:
            return $f734edd0e0ae82f0$var$qj(c, e, f, b);
        default:
            if ("object" === typeof a && null !== a) switch(a.$$typeof){
                case $f734edd0e0ae82f0$var$Ba:
                    g = 10;
                    break a;
                case $f734edd0e0ae82f0$var$Ca:
                    g = 9;
                    break a;
                case $f734edd0e0ae82f0$var$Da:
                    g = 11;
                    break a;
                case $f734edd0e0ae82f0$var$Ga:
                    g = 14;
                    break a;
                case $f734edd0e0ae82f0$var$Ha:
                    g = 16;
                    d = null;
                    break a;
            }
            throw Error($f734edd0e0ae82f0$var$p(130, null == a ? a : typeof a, ""));
    }
    b = $f734edd0e0ae82f0$var$Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
}
function $f734edd0e0ae82f0$var$Ah(a, b, c, d) {
    a = $f734edd0e0ae82f0$var$Bg(7, a, d, b);
    a.lanes = c;
    return a;
}
function $f734edd0e0ae82f0$var$qj(a, b, c, d) {
    a = $f734edd0e0ae82f0$var$Bg(22, a, d, b);
    a.elementType = $f734edd0e0ae82f0$var$Ia;
    a.lanes = c;
    a.stateNode = {
        isHidden: !1
    };
    return a;
}
function $f734edd0e0ae82f0$var$xh(a, b, c) {
    a = $f734edd0e0ae82f0$var$Bg(6, a, null, b);
    a.lanes = c;
    return a;
}
function $f734edd0e0ae82f0$var$zh(a, b, c) {
    b = $f734edd0e0ae82f0$var$Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
        containerInfo: a.containerInfo,
        pendingChildren: null,
        implementation: a.implementation
    };
    return b;
}
function $f734edd0e0ae82f0$var$bl(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = $f734edd0e0ae82f0$var$zc(0);
    this.expirationTimes = $f734edd0e0ae82f0$var$zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = $f734edd0e0ae82f0$var$zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
}
function $f734edd0e0ae82f0$var$cl(a, b, c, d, e, f, g, h, k) {
    a = new $f734edd0e0ae82f0$var$bl(a, b, c, h, k);
    1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
    f = $f734edd0e0ae82f0$var$Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
        element: d,
        isDehydrated: c,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    };
    $f734edd0e0ae82f0$var$ah(f);
    return a;
}
function $f734edd0e0ae82f0$var$dl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        $$typeof: $f734edd0e0ae82f0$var$wa,
        key: null == d ? null : "" + d,
        children: a,
        containerInfo: b,
        implementation: c
    };
}
function $f734edd0e0ae82f0$var$el(a) {
    if (!a) return $f734edd0e0ae82f0$var$Vf;
    a = a._reactInternals;
    a: {
        if ($f734edd0e0ae82f0$var$Vb(a) !== a || 1 !== a.tag) throw Error($f734edd0e0ae82f0$var$p(170));
        var b = a;
        do {
            switch(b.tag){
                case 3:
                    b = b.stateNode.context;
                    break a;
                case 1:
                    if ($f734edd0e0ae82f0$var$Zf(b.type)) {
                        b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                        break a;
                    }
            }
            b = b.return;
        }while (null !== b);
        throw Error($f734edd0e0ae82f0$var$p(171));
    }
    if (1 === a.tag) {
        var c = a.type;
        if ($f734edd0e0ae82f0$var$Zf(c)) return $f734edd0e0ae82f0$var$bg(a, c, b);
    }
    return b;
}
function $f734edd0e0ae82f0$var$fl(a, b, c, d, e, f, g, h, k) {
    a = $f734edd0e0ae82f0$var$cl(c, d, !0, a, e, f, g, h, k);
    a.context = $f734edd0e0ae82f0$var$el(null);
    c = a.current;
    d = $f734edd0e0ae82f0$var$L();
    e = $f734edd0e0ae82f0$var$lh(c);
    f = $f734edd0e0ae82f0$var$ch(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    $f734edd0e0ae82f0$var$dh(c, f, e);
    a.current.lanes = e;
    $f734edd0e0ae82f0$var$Ac(a, e, d);
    $f734edd0e0ae82f0$var$Ek(a, d);
    return a;
}
function $f734edd0e0ae82f0$var$gl(a, b, c, d) {
    var e = b.current, f = $f734edd0e0ae82f0$var$L(), g = $f734edd0e0ae82f0$var$lh(e);
    c = $f734edd0e0ae82f0$var$el(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = $f734edd0e0ae82f0$var$ch(f, g);
    b.payload = {
        element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = $f734edd0e0ae82f0$var$dh(e, b, g);
    null !== a && ($f734edd0e0ae82f0$var$mh(a, e, g, f), $f734edd0e0ae82f0$var$eh(a, e, g));
    return g;
}
function $f734edd0e0ae82f0$var$hl(a) {
    a = a.current;
    if (!a.child) return null;
    switch(a.child.tag){
        case 5:
            return a.child.stateNode;
        default:
            return a.child.stateNode;
    }
}
function $f734edd0e0ae82f0$var$il(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
    }
}
function $f734edd0e0ae82f0$var$jl(a, b) {
    $f734edd0e0ae82f0$var$il(a, b);
    (a = a.alternate) && $f734edd0e0ae82f0$var$il(a, b);
}
function $f734edd0e0ae82f0$var$kl() {
    return null;
}
var $f734edd0e0ae82f0$var$ll = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
};
function $f734edd0e0ae82f0$var$ml(a) {
    this._internalRoot = a;
}
$f734edd0e0ae82f0$var$nl.prototype.render = $f734edd0e0ae82f0$var$ml.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error($f734edd0e0ae82f0$var$p(409));
    $f734edd0e0ae82f0$var$gl(a, b, null, null);
};
$f734edd0e0ae82f0$var$nl.prototype.unmount = $f734edd0e0ae82f0$var$ml.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        $f734edd0e0ae82f0$var$Sk(function() {
            $f734edd0e0ae82f0$var$gl(null, a, null, null);
        });
        b[$f734edd0e0ae82f0$var$uf] = null;
    }
};
function $f734edd0e0ae82f0$var$nl(a) {
    this._internalRoot = a;
}
$f734edd0e0ae82f0$var$nl.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
        var b = $f734edd0e0ae82f0$var$Hc();
        a = {
            blockedOn: null,
            target: a,
            priority: b
        };
        for(var c = 0; c < $f734edd0e0ae82f0$var$Qc.length && 0 !== b && b < $f734edd0e0ae82f0$var$Qc[c].priority; c++);
        $f734edd0e0ae82f0$var$Qc.splice(c, 0, a);
        0 === c && $f734edd0e0ae82f0$var$Vc(a);
    }
};
function $f734edd0e0ae82f0$var$ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function $f734edd0e0ae82f0$var$pl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function $f734edd0e0ae82f0$var$ql() {}
function $f734edd0e0ae82f0$var$rl(a, b, c, d, e) {
    if (e) {
        if ("function" === typeof d) {
            var f = d;
            d = function() {
                var a = $f734edd0e0ae82f0$var$hl(g);
                f.call(a);
            };
        }
        var g = $f734edd0e0ae82f0$var$fl(b, d, a, 0, null, !1, !1, "", $f734edd0e0ae82f0$var$ql);
        a._reactRootContainer = g;
        a[$f734edd0e0ae82f0$var$uf] = g.current;
        $f734edd0e0ae82f0$var$sf(8 === a.nodeType ? a.parentNode : a);
        $f734edd0e0ae82f0$var$Sk();
        return g;
    }
    for(; e = a.lastChild;)a.removeChild(e);
    if ("function" === typeof d) {
        var h = d;
        d = function() {
            var a = $f734edd0e0ae82f0$var$hl(k);
            h.call(a);
        };
    }
    var k = $f734edd0e0ae82f0$var$cl(a, 0, !1, null, null, !1, !1, "", $f734edd0e0ae82f0$var$ql);
    a._reactRootContainer = k;
    a[$f734edd0e0ae82f0$var$uf] = k.current;
    $f734edd0e0ae82f0$var$sf(8 === a.nodeType ? a.parentNode : a);
    $f734edd0e0ae82f0$var$Sk(function() {
        $f734edd0e0ae82f0$var$gl(b, k, c, d);
    });
    return k;
}
function $f734edd0e0ae82f0$var$sl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
        var g = f;
        if ("function" === typeof e) {
            var h = e;
            e = function() {
                var a = $f734edd0e0ae82f0$var$hl(g);
                h.call(a);
            };
        }
        $f734edd0e0ae82f0$var$gl(b, g, a, e);
    } else g = $f734edd0e0ae82f0$var$rl(c, b, a, e, d);
    return $f734edd0e0ae82f0$var$hl(g);
}
$f734edd0e0ae82f0$var$Ec = function(a) {
    switch(a.tag){
        case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
                var c = $f734edd0e0ae82f0$var$tc(b.pendingLanes);
                0 !== c && ($f734edd0e0ae82f0$var$Cc(b, c | 1), $f734edd0e0ae82f0$var$Ek(b, $f734edd0e0ae82f0$var$B()), 0 === ($f734edd0e0ae82f0$var$K & 6) && ($f734edd0e0ae82f0$var$Hj = $f734edd0e0ae82f0$var$B() + 500, $f734edd0e0ae82f0$var$jg()));
            }
            break;
        case 13:
            $f734edd0e0ae82f0$var$Sk(function() {
                var b = $f734edd0e0ae82f0$var$Zg(a, 1);
                if (null !== b) {
                    var c = $f734edd0e0ae82f0$var$L();
                    $f734edd0e0ae82f0$var$mh(b, a, 1, c);
                }
            }), $f734edd0e0ae82f0$var$jl(a, 1);
    }
};
$f734edd0e0ae82f0$var$Fc = function(a) {
    if (13 === a.tag) {
        var b = $f734edd0e0ae82f0$var$Zg(a, 134217728);
        if (null !== b) {
            var c = $f734edd0e0ae82f0$var$L();
            $f734edd0e0ae82f0$var$mh(b, a, 134217728, c);
        }
        $f734edd0e0ae82f0$var$jl(a, 134217728);
    }
};
$f734edd0e0ae82f0$var$Gc = function(a) {
    if (13 === a.tag) {
        var b = $f734edd0e0ae82f0$var$lh(a), c = $f734edd0e0ae82f0$var$Zg(a, b);
        if (null !== c) {
            var d = $f734edd0e0ae82f0$var$L();
            $f734edd0e0ae82f0$var$mh(c, a, b, d);
        }
        $f734edd0e0ae82f0$var$jl(a, b);
    }
};
$f734edd0e0ae82f0$var$Hc = function() {
    return $f734edd0e0ae82f0$var$C;
};
$f734edd0e0ae82f0$var$Ic = function(a, b) {
    var c = $f734edd0e0ae82f0$var$C;
    try {
        return $f734edd0e0ae82f0$var$C = a, b();
    } finally{
        $f734edd0e0ae82f0$var$C = c;
    }
};
$f734edd0e0ae82f0$var$yb = function(a, b, c) {
    switch(b){
        case "input":
            $f734edd0e0ae82f0$var$bb(a, c);
            b = c.name;
            if ("radio" === c.type && null != b) {
                for(c = a; c.parentNode;)c = c.parentNode;
                c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                for(b = 0; b < c.length; b++){
                    var d = c[b];
                    if (d !== a && d.form === a.form) {
                        var e = $f734edd0e0ae82f0$var$Db(d);
                        if (!e) throw Error($f734edd0e0ae82f0$var$p(90));
                        $f734edd0e0ae82f0$var$Wa(d);
                        $f734edd0e0ae82f0$var$bb(d, e);
                    }
                }
            }
            break;
        case "textarea":
            $f734edd0e0ae82f0$var$ib(a, c);
            break;
        case "select":
            b = c.value, null != b && $f734edd0e0ae82f0$var$fb(a, !!c.multiple, b, !1);
    }
};
$f734edd0e0ae82f0$var$Gb = $f734edd0e0ae82f0$var$Rk;
$f734edd0e0ae82f0$var$Hb = $f734edd0e0ae82f0$var$Sk;
var $f734edd0e0ae82f0$var$tl = {
    usingClientEntryPoint: !1,
    Events: [
        $f734edd0e0ae82f0$var$Cb,
        $f734edd0e0ae82f0$var$ue,
        $f734edd0e0ae82f0$var$Db,
        $f734edd0e0ae82f0$var$Eb,
        $f734edd0e0ae82f0$var$Fb,
        $f734edd0e0ae82f0$var$Rk
    ]
}, $f734edd0e0ae82f0$var$ul = {
    findFiberByHostInstance: $f734edd0e0ae82f0$var$Wc,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
};
var $f734edd0e0ae82f0$var$vl = {
    bundleType: $f734edd0e0ae82f0$var$ul.bundleType,
    version: $f734edd0e0ae82f0$var$ul.version,
    rendererPackageName: $f734edd0e0ae82f0$var$ul.rendererPackageName,
    rendererConfig: $f734edd0e0ae82f0$var$ul.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $f734edd0e0ae82f0$var$ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(a) {
        a = $f734edd0e0ae82f0$var$Zb(a);
        return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: $f734edd0e0ae82f0$var$ul.findFiberByHostInstance || $f734edd0e0ae82f0$var$kl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var $f734edd0e0ae82f0$var$wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$f734edd0e0ae82f0$var$wl.isDisabled && $f734edd0e0ae82f0$var$wl.supportsFiber) try {
        $f734edd0e0ae82f0$var$kc = $f734edd0e0ae82f0$var$wl.inject($f734edd0e0ae82f0$var$vl), $f734edd0e0ae82f0$var$lc = $f734edd0e0ae82f0$var$wl;
    } catch (a) {}
}
$f734edd0e0ae82f0$export$ae55be85d98224ed = $f734edd0e0ae82f0$var$tl;
$f734edd0e0ae82f0$export$d39a5bbd09211389 = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!$f734edd0e0ae82f0$var$ol(b)) throw Error($f734edd0e0ae82f0$var$p(200));
    return $f734edd0e0ae82f0$var$dl(a, b, null, c);
};
$f734edd0e0ae82f0$export$882461b6382ed46c = function(a, b) {
    if (!$f734edd0e0ae82f0$var$ol(a)) throw Error($f734edd0e0ae82f0$var$p(299));
    var c = !1, d = "", e = $f734edd0e0ae82f0$var$ll;
    null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = $f734edd0e0ae82f0$var$cl(a, 1, !1, null, null, c, !1, d, e);
    a[$f734edd0e0ae82f0$var$uf] = b.current;
    $f734edd0e0ae82f0$var$sf(8 === a.nodeType ? a.parentNode : a);
    return new $f734edd0e0ae82f0$var$ml(b);
};
$f734edd0e0ae82f0$export$466bfc07425424d5 = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
        if ("function" === typeof a.render) throw Error($f734edd0e0ae82f0$var$p(188));
        a = Object.keys(a).join(",");
        throw Error($f734edd0e0ae82f0$var$p(268, a));
    }
    a = $f734edd0e0ae82f0$var$Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
};
$f734edd0e0ae82f0$export$cd75ccfd720a3cd4 = function(a) {
    return $f734edd0e0ae82f0$var$Sk(a);
};
$f734edd0e0ae82f0$export$fa8d919ba61d84db = function(a, b, c) {
    if (!$f734edd0e0ae82f0$var$pl(b)) throw Error($f734edd0e0ae82f0$var$p(200));
    return $f734edd0e0ae82f0$var$sl(null, a, b, !0, c);
};
$f734edd0e0ae82f0$export$757ceba2d55c277e = function(a, b, c) {
    if (!$f734edd0e0ae82f0$var$ol(a)) throw Error($f734edd0e0ae82f0$var$p(405));
    var d = null != c && c.hydratedSources || null, e = !1, f = "", g = $f734edd0e0ae82f0$var$ll;
    null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = $f734edd0e0ae82f0$var$fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
    a[$f734edd0e0ae82f0$var$uf] = b.current;
    $f734edd0e0ae82f0$var$sf(a);
    if (d) for(a = 0; a < d.length; a++)c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [
        c,
        e
    ] : b.mutableSourceEagerHydrationData.push(c, e);
    return new $f734edd0e0ae82f0$var$nl(b);
};
$f734edd0e0ae82f0$export$b3890eb0ae9dca99 = function(a, b, c) {
    if (!$f734edd0e0ae82f0$var$pl(b)) throw Error($f734edd0e0ae82f0$var$p(200));
    return $f734edd0e0ae82f0$var$sl(null, a, b, !1, c);
};
$f734edd0e0ae82f0$export$502457920280e6be = function(a) {
    if (!$f734edd0e0ae82f0$var$pl(a)) throw Error($f734edd0e0ae82f0$var$p(40));
    return a._reactRootContainer ? ($f734edd0e0ae82f0$var$Sk(function() {
        $f734edd0e0ae82f0$var$sl(null, null, a, !1, function() {
            a._reactRootContainer = null;
            a[$f734edd0e0ae82f0$var$uf] = null;
        });
    }), !0) : !1;
};
$f734edd0e0ae82f0$export$c78a37762a8d58e1 = $f734edd0e0ae82f0$var$Rk;
$f734edd0e0ae82f0$export$dc54d992c10e8a18 = function(a, b, c, d) {
    if (!$f734edd0e0ae82f0$var$pl(c)) throw Error($f734edd0e0ae82f0$var$p(200));
    if (null == a || void 0 === a._reactInternals) throw Error($f734edd0e0ae82f0$var$p(38));
    return $f734edd0e0ae82f0$var$sl(a, b, c, !1, d);
};
$f734edd0e0ae82f0$export$83d89fbfd8236492 = "18.2.0-next-9e3b772b8-20220608";

});
parcelRequire.register("5zFK8", function(module, exports) {
"use strict";

module.exports = (parcelRequire("5h6IZ"));

});
parcelRequire.register("5h6IZ", function(module, exports) {

$parcel$export(module.exports, "unstable_now", function () { return $3d73c1a37bb582b5$export$c4744153514ff05d; }, function (v) { return $3d73c1a37bb582b5$export$c4744153514ff05d = v; });
$parcel$export(module.exports, "unstable_IdlePriority", function () { return $3d73c1a37bb582b5$export$3e506c1ccc9cc1a7; }, function (v) { return $3d73c1a37bb582b5$export$3e506c1ccc9cc1a7 = v; });
$parcel$export(module.exports, "unstable_ImmediatePriority", function () { return $3d73c1a37bb582b5$export$e26fe2ed2fa76875; }, function (v) { return $3d73c1a37bb582b5$export$e26fe2ed2fa76875 = v; });
$parcel$export(module.exports, "unstable_LowPriority", function () { return $3d73c1a37bb582b5$export$502329bbf4b505b1; }, function (v) { return $3d73c1a37bb582b5$export$502329bbf4b505b1 = v; });
$parcel$export(module.exports, "unstable_NormalPriority", function () { return $3d73c1a37bb582b5$export$6e3807111c4874c4; }, function (v) { return $3d73c1a37bb582b5$export$6e3807111c4874c4 = v; });
$parcel$export(module.exports, "unstable_Profiling", function () { return $3d73c1a37bb582b5$export$c27134553091fb3a; }, function (v) { return $3d73c1a37bb582b5$export$c27134553091fb3a = v; });
$parcel$export(module.exports, "unstable_UserBlockingPriority", function () { return $3d73c1a37bb582b5$export$33ee1acdc04fd2a2; }, function (v) { return $3d73c1a37bb582b5$export$33ee1acdc04fd2a2 = v; });
$parcel$export(module.exports, "unstable_cancelCallback", function () { return $3d73c1a37bb582b5$export$b00a404bbd5edef2; }, function (v) { return $3d73c1a37bb582b5$export$b00a404bbd5edef2 = v; });
$parcel$export(module.exports, "unstable_continueExecution", function () { return $3d73c1a37bb582b5$export$8352ce38b91d0c62; }, function (v) { return $3d73c1a37bb582b5$export$8352ce38b91d0c62 = v; });
$parcel$export(module.exports, "unstable_forceFrameRate", function () { return $3d73c1a37bb582b5$export$d66a1c1c77bd778b; }, function (v) { return $3d73c1a37bb582b5$export$d66a1c1c77bd778b = v; });
$parcel$export(module.exports, "unstable_getCurrentPriorityLevel", function () { return $3d73c1a37bb582b5$export$d3dfb8e4810cb555; }, function (v) { return $3d73c1a37bb582b5$export$d3dfb8e4810cb555 = v; });
$parcel$export(module.exports, "unstable_getFirstCallbackNode", function () { return $3d73c1a37bb582b5$export$839f9183b0465a69; }, function (v) { return $3d73c1a37bb582b5$export$839f9183b0465a69 = v; });
$parcel$export(module.exports, "unstable_next", function () { return $3d73c1a37bb582b5$export$72fdf0e06517287b; }, function (v) { return $3d73c1a37bb582b5$export$72fdf0e06517287b = v; });
$parcel$export(module.exports, "unstable_pauseExecution", function () { return $3d73c1a37bb582b5$export$4b844e58a3e414b4; }, function (v) { return $3d73c1a37bb582b5$export$4b844e58a3e414b4 = v; });
$parcel$export(module.exports, "unstable_requestPaint", function () { return $3d73c1a37bb582b5$export$816d2913ae6b83b1; }, function (v) { return $3d73c1a37bb582b5$export$816d2913ae6b83b1 = v; });
$parcel$export(module.exports, "unstable_runWithPriority", function () { return $3d73c1a37bb582b5$export$61bcfe829111a1d0; }, function (v) { return $3d73c1a37bb582b5$export$61bcfe829111a1d0 = v; });
$parcel$export(module.exports, "unstable_scheduleCallback", function () { return $3d73c1a37bb582b5$export$7ee8c9beb337bc3f; }, function (v) { return $3d73c1a37bb582b5$export$7ee8c9beb337bc3f = v; });
$parcel$export(module.exports, "unstable_shouldYield", function () { return $3d73c1a37bb582b5$export$b5836b71941fa3ed; }, function (v) { return $3d73c1a37bb582b5$export$b5836b71941fa3ed = v; });
$parcel$export(module.exports, "unstable_wrapCallback", function () { return $3d73c1a37bb582b5$export$cf845f2c119da08a; }, function (v) { return $3d73c1a37bb582b5$export$cf845f2c119da08a = v; });
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $3d73c1a37bb582b5$export$c4744153514ff05d;
var $3d73c1a37bb582b5$export$3e506c1ccc9cc1a7;
var $3d73c1a37bb582b5$export$e26fe2ed2fa76875;
var $3d73c1a37bb582b5$export$502329bbf4b505b1;
var $3d73c1a37bb582b5$export$6e3807111c4874c4;
var $3d73c1a37bb582b5$export$c27134553091fb3a;
var $3d73c1a37bb582b5$export$33ee1acdc04fd2a2;
var $3d73c1a37bb582b5$export$b00a404bbd5edef2;
var $3d73c1a37bb582b5$export$8352ce38b91d0c62;
var $3d73c1a37bb582b5$export$d66a1c1c77bd778b;
var $3d73c1a37bb582b5$export$d3dfb8e4810cb555;
var $3d73c1a37bb582b5$export$839f9183b0465a69;
var $3d73c1a37bb582b5$export$72fdf0e06517287b;
var $3d73c1a37bb582b5$export$4b844e58a3e414b4;
var $3d73c1a37bb582b5$export$816d2913ae6b83b1;
var $3d73c1a37bb582b5$export$61bcfe829111a1d0;
var $3d73c1a37bb582b5$export$7ee8c9beb337bc3f;
var $3d73c1a37bb582b5$export$b5836b71941fa3ed;
var $3d73c1a37bb582b5$export$cf845f2c119da08a;
"use strict";
function $3d73c1a37bb582b5$var$f(a, b) {
    var c = a.length;
    a.push(b);
    a: for(; 0 < c;){
        var d = c - 1 >>> 1, e = a[d];
        if (0 < $3d73c1a37bb582b5$var$g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
    }
}
function $3d73c1a37bb582b5$var$h(a) {
    return 0 === a.length ? null : a[0];
}
function $3d73c1a37bb582b5$var$k(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
        a[0] = c;
        a: for(var d = 0, e = a.length, w = e >>> 1; d < w;){
            var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
            if (0 > $3d73c1a37bb582b5$var$g(C, c)) n < e && 0 > $3d73c1a37bb582b5$var$g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
            else if (n < e && 0 > $3d73c1a37bb582b5$var$g(x, c)) a[d] = x, a[n] = c, d = n;
            else break a;
        }
    }
    return b;
}
function $3d73c1a37bb582b5$var$g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
    var $3d73c1a37bb582b5$var$l = performance;
    $3d73c1a37bb582b5$export$c4744153514ff05d = function() {
        return $3d73c1a37bb582b5$var$l.now();
    };
} else {
    var $3d73c1a37bb582b5$var$p = Date, $3d73c1a37bb582b5$var$q = $3d73c1a37bb582b5$var$p.now();
    $3d73c1a37bb582b5$export$c4744153514ff05d = function() {
        return $3d73c1a37bb582b5$var$p.now() - $3d73c1a37bb582b5$var$q;
    };
}
var $3d73c1a37bb582b5$var$r = [], $3d73c1a37bb582b5$var$t = [], $3d73c1a37bb582b5$var$u = 1, $3d73c1a37bb582b5$var$v = null, $3d73c1a37bb582b5$var$y = 3, $3d73c1a37bb582b5$var$z = !1, $3d73c1a37bb582b5$var$A = !1, $3d73c1a37bb582b5$var$B = !1, $3d73c1a37bb582b5$var$D = "function" === typeof setTimeout ? setTimeout : null, $3d73c1a37bb582b5$var$E = "function" === typeof clearTimeout ? clearTimeout : null, $3d73c1a37bb582b5$var$F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function $3d73c1a37bb582b5$var$G(a) {
    for(var b = $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$t); null !== b;){
        if (null === b.callback) $3d73c1a37bb582b5$var$k($3d73c1a37bb582b5$var$t);
        else if (b.startTime <= a) $3d73c1a37bb582b5$var$k($3d73c1a37bb582b5$var$t), b.sortIndex = b.expirationTime, $3d73c1a37bb582b5$var$f($3d73c1a37bb582b5$var$r, b);
        else break;
        b = $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$t);
    }
}
function $3d73c1a37bb582b5$var$H(a) {
    $3d73c1a37bb582b5$var$B = !1;
    $3d73c1a37bb582b5$var$G(a);
    if (!$3d73c1a37bb582b5$var$A) {
        if (null !== $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$r)) $3d73c1a37bb582b5$var$A = !0, $3d73c1a37bb582b5$var$I($3d73c1a37bb582b5$var$J);
        else {
            var b = $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$t);
            null !== b && $3d73c1a37bb582b5$var$K($3d73c1a37bb582b5$var$H, b.startTime - a);
        }
    }
}
function $3d73c1a37bb582b5$var$J(a, b) {
    $3d73c1a37bb582b5$var$A = !1;
    $3d73c1a37bb582b5$var$B && ($3d73c1a37bb582b5$var$B = !1, $3d73c1a37bb582b5$var$E($3d73c1a37bb582b5$var$L), $3d73c1a37bb582b5$var$L = -1);
    $3d73c1a37bb582b5$var$z = !0;
    var c = $3d73c1a37bb582b5$var$y;
    try {
        $3d73c1a37bb582b5$var$G(b);
        for($3d73c1a37bb582b5$var$v = $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$r); null !== $3d73c1a37bb582b5$var$v && (!($3d73c1a37bb582b5$var$v.expirationTime > b) || a && !$3d73c1a37bb582b5$var$M());){
            var d = $3d73c1a37bb582b5$var$v.callback;
            if ("function" === typeof d) {
                $3d73c1a37bb582b5$var$v.callback = null;
                $3d73c1a37bb582b5$var$y = $3d73c1a37bb582b5$var$v.priorityLevel;
                var e = d($3d73c1a37bb582b5$var$v.expirationTime <= b);
                b = $3d73c1a37bb582b5$export$c4744153514ff05d();
                "function" === typeof e ? $3d73c1a37bb582b5$var$v.callback = e : $3d73c1a37bb582b5$var$v === $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$r) && $3d73c1a37bb582b5$var$k($3d73c1a37bb582b5$var$r);
                $3d73c1a37bb582b5$var$G(b);
            } else $3d73c1a37bb582b5$var$k($3d73c1a37bb582b5$var$r);
            $3d73c1a37bb582b5$var$v = $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$r);
        }
        if (null !== $3d73c1a37bb582b5$var$v) var w = !0;
        else {
            var m = $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$t);
            null !== m && $3d73c1a37bb582b5$var$K($3d73c1a37bb582b5$var$H, m.startTime - b);
            w = !1;
        }
        return w;
    } finally{
        $3d73c1a37bb582b5$var$v = null, $3d73c1a37bb582b5$var$y = c, $3d73c1a37bb582b5$var$z = !1;
    }
}
var $3d73c1a37bb582b5$var$N = !1, $3d73c1a37bb582b5$var$O = null, $3d73c1a37bb582b5$var$L = -1, $3d73c1a37bb582b5$var$P = 5, $3d73c1a37bb582b5$var$Q = -1;
function $3d73c1a37bb582b5$var$M() {
    return $3d73c1a37bb582b5$export$c4744153514ff05d() - $3d73c1a37bb582b5$var$Q < $3d73c1a37bb582b5$var$P ? !1 : !0;
}
function $3d73c1a37bb582b5$var$R() {
    if (null !== $3d73c1a37bb582b5$var$O) {
        var a = $3d73c1a37bb582b5$export$c4744153514ff05d();
        $3d73c1a37bb582b5$var$Q = a;
        var b = !0;
        try {
            b = $3d73c1a37bb582b5$var$O(!0, a);
        } finally{
            b ? $3d73c1a37bb582b5$var$S() : ($3d73c1a37bb582b5$var$N = !1, $3d73c1a37bb582b5$var$O = null);
        }
    } else $3d73c1a37bb582b5$var$N = !1;
}
var $3d73c1a37bb582b5$var$S;
if ("function" === typeof $3d73c1a37bb582b5$var$F) $3d73c1a37bb582b5$var$S = function() {
    $3d73c1a37bb582b5$var$F($3d73c1a37bb582b5$var$R);
};
else if ("undefined" !== typeof MessageChannel) {
    var $3d73c1a37bb582b5$var$T = new MessageChannel, $3d73c1a37bb582b5$var$U = $3d73c1a37bb582b5$var$T.port2;
    $3d73c1a37bb582b5$var$T.port1.onmessage = $3d73c1a37bb582b5$var$R;
    $3d73c1a37bb582b5$var$S = function() {
        $3d73c1a37bb582b5$var$U.postMessage(null);
    };
} else $3d73c1a37bb582b5$var$S = function() {
    $3d73c1a37bb582b5$var$D($3d73c1a37bb582b5$var$R, 0);
};
function $3d73c1a37bb582b5$var$I(a) {
    $3d73c1a37bb582b5$var$O = a;
    $3d73c1a37bb582b5$var$N || ($3d73c1a37bb582b5$var$N = !0, $3d73c1a37bb582b5$var$S());
}
function $3d73c1a37bb582b5$var$K(a, b) {
    $3d73c1a37bb582b5$var$L = $3d73c1a37bb582b5$var$D(function() {
        a($3d73c1a37bb582b5$export$c4744153514ff05d());
    }, b);
}
$3d73c1a37bb582b5$export$3e506c1ccc9cc1a7 = 5;
$3d73c1a37bb582b5$export$e26fe2ed2fa76875 = 1;
$3d73c1a37bb582b5$export$502329bbf4b505b1 = 4;
$3d73c1a37bb582b5$export$6e3807111c4874c4 = 3;
$3d73c1a37bb582b5$export$c27134553091fb3a = null;
$3d73c1a37bb582b5$export$33ee1acdc04fd2a2 = 2;
$3d73c1a37bb582b5$export$b00a404bbd5edef2 = function(a) {
    a.callback = null;
};
$3d73c1a37bb582b5$export$8352ce38b91d0c62 = function() {
    $3d73c1a37bb582b5$var$A || $3d73c1a37bb582b5$var$z || ($3d73c1a37bb582b5$var$A = !0, $3d73c1a37bb582b5$var$I($3d73c1a37bb582b5$var$J));
};
$3d73c1a37bb582b5$export$d66a1c1c77bd778b = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $3d73c1a37bb582b5$var$P = 0 < a ? Math.floor(1E3 / a) : 5;
};
$3d73c1a37bb582b5$export$d3dfb8e4810cb555 = function() {
    return $3d73c1a37bb582b5$var$y;
};
$3d73c1a37bb582b5$export$839f9183b0465a69 = function() {
    return $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$r);
};
$3d73c1a37bb582b5$export$72fdf0e06517287b = function(a) {
    switch($3d73c1a37bb582b5$var$y){
        case 1:
        case 2:
        case 3:
            var b = 3;
            break;
        default:
            b = $3d73c1a37bb582b5$var$y;
    }
    var c = $3d73c1a37bb582b5$var$y;
    $3d73c1a37bb582b5$var$y = b;
    try {
        return a();
    } finally{
        $3d73c1a37bb582b5$var$y = c;
    }
};
$3d73c1a37bb582b5$export$4b844e58a3e414b4 = function() {};
$3d73c1a37bb582b5$export$816d2913ae6b83b1 = function() {};
$3d73c1a37bb582b5$export$61bcfe829111a1d0 = function(a, b) {
    switch(a){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            a = 3;
    }
    var c = $3d73c1a37bb582b5$var$y;
    $3d73c1a37bb582b5$var$y = a;
    try {
        return b();
    } finally{
        $3d73c1a37bb582b5$var$y = c;
    }
};
$3d73c1a37bb582b5$export$7ee8c9beb337bc3f = function(a, b, c) {
    var d = $3d73c1a37bb582b5$export$c4744153514ff05d();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch(a){
        case 1:
            var e = -1;
            break;
        case 2:
            e = 250;
            break;
        case 5:
            e = 1073741823;
            break;
        case 4:
            e = 1E4;
            break;
        default:
            e = 5E3;
    }
    e = c + e;
    a = {
        id: $3d73c1a37bb582b5$var$u++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1
    };
    c > d ? (a.sortIndex = c, $3d73c1a37bb582b5$var$f($3d73c1a37bb582b5$var$t, a), null === $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$r) && a === $3d73c1a37bb582b5$var$h($3d73c1a37bb582b5$var$t) && ($3d73c1a37bb582b5$var$B ? ($3d73c1a37bb582b5$var$E($3d73c1a37bb582b5$var$L), $3d73c1a37bb582b5$var$L = -1) : $3d73c1a37bb582b5$var$B = !0, $3d73c1a37bb582b5$var$K($3d73c1a37bb582b5$var$H, c - d))) : (a.sortIndex = e, $3d73c1a37bb582b5$var$f($3d73c1a37bb582b5$var$r, a), $3d73c1a37bb582b5$var$A || $3d73c1a37bb582b5$var$z || ($3d73c1a37bb582b5$var$A = !0, $3d73c1a37bb582b5$var$I($3d73c1a37bb582b5$var$J)));
    return a;
};
$3d73c1a37bb582b5$export$b5836b71941fa3ed = $3d73c1a37bb582b5$var$M;
$3d73c1a37bb582b5$export$cf845f2c119da08a = function(a) {
    var b = $3d73c1a37bb582b5$var$y;
    return function() {
        var c = $3d73c1a37bb582b5$var$y;
        $3d73c1a37bb582b5$var$y = b;
        try {
            return a.apply(this, arguments);
        } finally{
            $3d73c1a37bb582b5$var$y = c;
        }
    };
};

});



parcelRequire.register("Mo3ND", function(module, exports) {

module.exports = import("./" + (parcelRequire("hosjB")).resolve("2ebIJ")).then(()=>parcelRequire("djOaf"));

});


var $9Yj41 = parcelRequire("9Yj41");

var $an5iK = parcelRequire("an5iK");
var $ddee5f9eb529b191$exports = {};

$parcel$export($ddee5f9eb529b191$exports, "createRoot", function () { return $ddee5f9eb529b191$export$882461b6382ed46c; }, function (v) { return $ddee5f9eb529b191$export$882461b6382ed46c = v; });
$parcel$export($ddee5f9eb529b191$exports, "hydrateRoot", function () { return $ddee5f9eb529b191$export$757ceba2d55c277e; }, function (v) { return $ddee5f9eb529b191$export$757ceba2d55c277e = v; });
var $ddee5f9eb529b191$export$882461b6382ed46c;
var $ddee5f9eb529b191$export$757ceba2d55c277e;
"use strict";
var $386d4cd868978c18$exports = {};
"use strict";
function $386d4cd868978c18$var$checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
    try {
        // Verify that the code above has been dead code eliminated (DCE'd).
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($386d4cd868978c18$var$checkDCE);
    } catch (err) {
        // DevTools shouldn't crash React, no matter what.
        // We should still report in case we break this code.
        console.error(err);
    }
}
// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
$386d4cd868978c18$var$checkDCE();

$386d4cd868978c18$exports = (parcelRequire("ldSin"));


var $ddee5f9eb529b191$var$i;
$ddee5f9eb529b191$export$882461b6382ed46c = $386d4cd868978c18$exports.createRoot;
$ddee5f9eb529b191$export$757ceba2d55c277e = $386d4cd868978c18$exports.hydrateRoot;



var $9Yj41 = parcelRequire("9Yj41");

var $an5iK = parcelRequire("an5iK");
var $0f13c2d4eddbddf0$exports = {};

$0f13c2d4eddbddf0$exports = new URL((parcelRequire("hosjB")).resolve("1VZ11"), import.meta.url).toString();


/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 
var $an5iK = parcelRequire("an5iK");
/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $633b4c6f3df1e771$var$_extends() {
    $633b4c6f3df1e771$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $633b4c6f3df1e771$var$_extends.apply(this, arguments);
}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */ var $633b4c6f3df1e771$export$e19cd5f9376f8cee;
(function(Action) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action["Replace"] = "REPLACE";
})($633b4c6f3df1e771$export$e19cd5f9376f8cee || ($633b4c6f3df1e771$export$e19cd5f9376f8cee = {}));
const $633b4c6f3df1e771$var$PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */ function $633b4c6f3df1e771$export$2b76ad033c6e6d08(options) {
    if (options === void 0) options = {};
    let { initialEntries: initialEntries = [
        "/"
    ], initialIndex: initialIndex, v5Compat: v5Compat = false } = options;
    let entries; // Declare so we can access from createMemoryLocation
    entries = initialEntries.map((entry, index)=>createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
    let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    let action = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Pop;
    let listener = null;
    function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
        return entries[index];
    }
    function createMemoryLocation(to, state, key) {
        if (state === void 0) state = null;
        let location = $633b4c6f3df1e771$var$createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        $633b4c6f3df1e771$export$c0e02632e14916fd(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
    }
    function createHref(to) {
        return typeof to === "string" ? to : $633b4c6f3df1e771$export$fe53371bee54353d(to);
    }
    let history = {
        get index () {
            return index;
        },
        get action () {
            return action;
        },
        get location () {
            return getCurrentLocation();
        },
        createHref: createHref,
        createURL (to) {
            return new URL(createHref(to), "http://localhost");
        },
        encodeLocation (to) {
            let path = typeof to === "string" ? $633b4c6f3df1e771$export$8ccf933b0513f8d0(to) : to;
            return {
                pathname: path.pathname || "",
                search: path.search || "",
                hash: path.hash || ""
            };
        },
        push (to, state) {
            action = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Push;
            let nextLocation = createMemoryLocation(to, state);
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            if (v5Compat && listener) listener({
                action: action,
                location: nextLocation,
                delta: 1
            });
        },
        replace (to, state) {
            action = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Replace;
            let nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) listener({
                action: action,
                location: nextLocation,
                delta: 0
            });
        },
        go (delta) {
            action = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Pop;
            let nextIndex = clampIndex(index + delta);
            let nextLocation = entries[nextIndex];
            index = nextIndex;
            if (listener) listener({
                action: action,
                location: nextLocation,
                delta: delta
            });
        },
        listen (fn) {
            listener = fn;
            return ()=>{
                listener = null;
            };
        }
    };
    return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function $633b4c6f3df1e771$export$719fc203c4e16dee(options) {
    if (options === void 0) options = {};
    function createBrowserLocation(window1, globalHistory) {
        let { pathname: pathname, search: search, hash: hash } = window1.location;
        return $633b4c6f3df1e771$var$createLocation("", {
            pathname: pathname,
            search: search,
            hash: hash
        }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createBrowserHref(window1, to) {
        return typeof to === "string" ? to : $633b4c6f3df1e771$export$fe53371bee54353d(to);
    }
    return $633b4c6f3df1e771$var$getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function $633b4c6f3df1e771$export$b71fdd3798280242(options) {
    if (options === void 0) options = {};
    function createHashLocation(window1, globalHistory) {
        let { pathname: pathname = "/", search: search = "", hash: hash = "" } = $633b4c6f3df1e771$export$8ccf933b0513f8d0(window1.location.hash.substr(1));
        return $633b4c6f3df1e771$var$createLocation("", {
            pathname: pathname,
            search: search,
            hash: hash
        }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createHashHref(window1, to) {
        let base = window1.document.querySelector("base");
        let href = "";
        if (base && base.getAttribute("href")) {
            let url = window1.location.href;
            let hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : $633b4c6f3df1e771$export$fe53371bee54353d(to));
    }
    function validateHashLocation(location, to) {
        $633b4c6f3df1e771$export$c0e02632e14916fd(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    }
    return $633b4c6f3df1e771$var$getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function $633b4c6f3df1e771$export$3e9cee6b33872309(value, message) {
    if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function $633b4c6f3df1e771$export$c0e02632e14916fd(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message); // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
function $633b4c6f3df1e771$var$createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */ function $633b4c6f3df1e771$var$getHistoryState(location, index) {
    return {
        usr: location.state,
        key: location.key,
        idx: index
    };
}
/**
 * Creates a Location object with a unique key from the given Path
 */ function $633b4c6f3df1e771$var$createLocation(current, to, state, key) {
    if (state === void 0) state = null;
    let location = $633b4c6f3df1e771$var$_extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
    }, typeof to === "string" ? $633b4c6f3df1e771$export$8ccf933b0513f8d0(to) : to, {
        state: state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || $633b4c6f3df1e771$var$createKey()
    });
    return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */ function $633b4c6f3df1e771$export$fe53371bee54353d(_ref) {
    let { pathname: pathname = "/", search: search = "", hash: hash = "" } = _ref;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */ function $633b4c6f3df1e771$export$8ccf933b0513f8d0(path) {
    let parsedPath = {};
    if (path) {
        let hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        let searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) parsedPath.pathname = path;
    }
    return parsedPath;
}
function $633b4c6f3df1e771$var$getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    if (options === void 0) options = {};
    let { window: window1 = document.defaultView, v5Compat: v5Compat = false } = options;
    let globalHistory = window1.history;
    let action = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Pop;
    let listener = null;
    let index = getIndex(); // Index should only be null when we initialize. If not, it's because the
    // user called history.pushState or history.replaceState directly, in which
    // case we should log a warning as it will result in bugs.
    if (index == null) {
        index = 0;
        globalHistory.replaceState($633b4c6f3df1e771$var$_extends({}, globalHistory.state, {
            idx: index
        }), "");
    }
    function getIndex() {
        let state = globalHistory.state || {
            idx: null
        };
        return state.idx;
    }
    function handlePop() {
        action = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Pop;
        let nextIndex = getIndex();
        let delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) listener({
            action: action,
            location: history.location,
            delta: delta
        });
    }
    function push(to, state) {
        action = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Push;
        let location = $633b4c6f3df1e771$var$createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        let historyState = $633b4c6f3df1e771$var$getHistoryState(location, index);
        let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/
        try {
            globalHistory.pushState(historyState, "", url);
        } catch (error) {
            // They are going to lose state here, but there is no real
            // way to warn them about it since the page will refresh...
            window1.location.assign(url);
        }
        if (v5Compat && listener) listener({
            action: action,
            location: history.location,
            delta: 1
        });
    }
    function replace(to, state) {
        action = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Replace;
        let location = $633b4c6f3df1e771$var$createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        let historyState = $633b4c6f3df1e771$var$getHistoryState(location, index);
        let url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) listener({
            action: action,
            location: history.location,
            delta: 0
        });
    }
    function createURL(to) {
        // window.location.origin is "null" (the literal string value) in Firefox
        // under certain conditions, notably when serving from a local HTML file
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
        let base = window1.location.origin !== "null" ? window1.location.origin : window1.location.href;
        let href = typeof to === "string" ? to : $633b4c6f3df1e771$export$fe53371bee54353d(to);
        $633b4c6f3df1e771$export$3e9cee6b33872309(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
    }
    let history = {
        get action () {
            return action;
        },
        get location () {
            return getLocation(window1, globalHistory);
        },
        listen (fn) {
            if (listener) throw new Error("A history only accepts one active listener");
            window1.addEventListener($633b4c6f3df1e771$var$PopStateEventType, handlePop);
            listener = fn;
            return ()=>{
                window1.removeEventListener($633b4c6f3df1e771$var$PopStateEventType, handlePop);
                listener = null;
            };
        },
        createHref (to) {
            return createHref(window1, to);
        },
        createURL: createURL,
        encodeLocation (to) {
            // Encode a Location the same way window.location would
            let url = createURL(to);
            return {
                pathname: url.pathname,
                search: url.search,
                hash: url.hash
            };
        },
        push: push,
        replace: replace,
        go (n) {
            return globalHistory.go(n);
        }
    };
    return history;
} //#endregion
var $633b4c6f3df1e771$var$ResultType;
(function(ResultType) {
    ResultType["data"] = "data";
    ResultType["deferred"] = "deferred";
    ResultType["redirect"] = "redirect";
    ResultType["error"] = "error";
})($633b4c6f3df1e771$var$ResultType || ($633b4c6f3df1e771$var$ResultType = {}));
const $633b4c6f3df1e771$var$immutableRouteKeys = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function $633b4c6f3df1e771$var$isIndexRoute(route) {
    return route.index === true;
} // Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router
function $633b4c6f3df1e771$export$4a6d22b32134ea5d(routes, mapRouteProperties, parentPath, manifest) {
    if (parentPath === void 0) parentPath = [];
    if (manifest === void 0) manifest = {};
    return routes.map((route, index)=>{
        let treePath = [
            ...parentPath,
            index
        ];
        let id = typeof route.id === "string" ? route.id : treePath.join("-");
        $633b4c6f3df1e771$export$3e9cee6b33872309(route.index !== true || !route.children, "Cannot specify children on an index route");
        $633b4c6f3df1e771$export$3e9cee6b33872309(!manifest[id], 'Found a route id collision on id "' + id + '".  Route ' + "id's must be globally unique within Data Router usages");
        if ($633b4c6f3df1e771$var$isIndexRoute(route)) {
            let indexRoute = $633b4c6f3df1e771$var$_extends({}, route, mapRouteProperties(route), {
                id: id
            });
            manifest[id] = indexRoute;
            return indexRoute;
        } else {
            let pathOrLayoutRoute = $633b4c6f3df1e771$var$_extends({}, route, mapRouteProperties(route), {
                id: id,
                children: undefined
            });
            manifest[id] = pathOrLayoutRoute;
            if (route.children) pathOrLayoutRoute.children = $633b4c6f3df1e771$export$4a6d22b32134ea5d(route.children, mapRouteProperties, treePath, manifest);
            return pathOrLayoutRoute;
        }
    });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */ function $633b4c6f3df1e771$export$2708184779ceb39d(routes, locationArg, basename) {
    if (basename === void 0) basename = "/";
    let location = typeof locationArg === "string" ? $633b4c6f3df1e771$export$8ccf933b0513f8d0(locationArg) : locationArg;
    let pathname = $633b4c6f3df1e771$export$b69e3301ce081aa3(location.pathname || "/", basename);
    if (pathname == null) return null;
    let branches = $633b4c6f3df1e771$var$flattenRoutes(routes);
    $633b4c6f3df1e771$var$rankRouteBranches(branches);
    let matches = null;
    for(let i = 0; matches == null && i < branches.length; ++i)matches = $633b4c6f3df1e771$var$matchRouteBranch(branches[i], // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    $633b4c6f3df1e771$var$safelyDecodeURI(pathname));
    return matches;
}
function $633b4c6f3df1e771$var$flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) branches = [];
    if (parentsMeta === void 0) parentsMeta = [];
    if (parentPath === void 0) parentPath = "";
    let flattenRoute = (route, index, relativePath)=>{
        let meta = {
            relativePath: relativePath === undefined ? route.path || "" : relativePath,
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route: route
        };
        if (meta.relativePath.startsWith("/")) {
            $633b4c6f3df1e771$export$3e9cee6b33872309(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        let path = $633b4c6f3df1e771$export$86d9a7913e44197e([
            parentPath,
            meta.relativePath
        ]);
        let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            $633b4c6f3df1e771$export$3e9cee6b33872309(// @ts-expect-error
            route.index !== true, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".'));
            $633b4c6f3df1e771$var$flattenRoutes(route.children, branches, routesMeta, path);
        } // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) return;
        branches.push({
            path: path,
            score: $633b4c6f3df1e771$var$computeScore(path, route.index),
            routesMeta: routesMeta
        });
    };
    routes.forEach((route, index)=>{
        var _route$path;
        // coarse-grain check for optional params
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) flattenRoute(route, index);
        else for (let exploded of $633b4c6f3df1e771$var$explodeOptionalSegments(route.path))flattenRoute(route, index, exploded);
    });
    return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */ function $633b4c6f3df1e771$var$explodeOptionalSegments(path) {
    let segments = path.split("/");
    if (segments.length === 0) return [];
    let [first, ...rest] = segments; // Optional path segments are denoted by a trailing `?`
    let isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`
    let required = first.replace(/\?$/, "");
    if (rest.length === 0) // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [
        required,
        ""
    ] : [
        required
    ];
    let restExploded = $633b4c6f3df1e771$var$explodeOptionalSegments(rest.join("/"));
    let result = []; // All child paths with the prefix.  Do this for all children before the
    // optional version for all children so we get consistent ordering where the
    // parent optional aspect is preferred as required.  Otherwise, we can get
    // child sections interspersed where deeper optional segments are higher than
    // parent optional segments, where for example, /:two would explodes _earlier_
    // then /:one.  By always including the parent as required _for all children_
    // first, we avoid this issue
    result.push(...restExploded.map((subpath)=>subpath === "" ? required : [
            required,
            subpath
        ].join("/"))); // Then if this is an optional value, add all child versions without
    if (isOptional) result.push(...restExploded);
     // for absolute paths, ensure `/` instead of empty segment
    return result.map((exploded)=>path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function $633b4c6f3df1e771$var$rankRouteBranches(branches) {
    branches.sort((a, b)=>a.score !== b.score ? b.score - a.score // Higher score first
         : $633b4c6f3df1e771$var$compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex), b.routesMeta.map((meta)=>meta.childrenIndex)));
}
const $633b4c6f3df1e771$var$paramRe = /^:\w+$/;
const $633b4c6f3df1e771$var$dynamicSegmentValue = 3;
const $633b4c6f3df1e771$var$indexRouteValue = 2;
const $633b4c6f3df1e771$var$emptySegmentValue = 1;
const $633b4c6f3df1e771$var$staticSegmentValue = 10;
const $633b4c6f3df1e771$var$splatPenalty = -2;
const $633b4c6f3df1e771$var$isSplat = (s)=>s === "*";
function $633b4c6f3df1e771$var$computeScore(path, index) {
    let segments = path.split("/");
    let initialScore = segments.length;
    if (segments.some($633b4c6f3df1e771$var$isSplat)) initialScore += $633b4c6f3df1e771$var$splatPenalty;
    if (index) initialScore += $633b4c6f3df1e771$var$indexRouteValue;
    return segments.filter((s)=>!$633b4c6f3df1e771$var$isSplat(s)).reduce((score, segment)=>score + ($633b4c6f3df1e771$var$paramRe.test(segment) ? $633b4c6f3df1e771$var$dynamicSegmentValue : segment === "" ? $633b4c6f3df1e771$var$emptySegmentValue : $633b4c6f3df1e771$var$staticSegmentValue), initialScore);
}
function $633b4c6f3df1e771$var$compareIndexes(a, b) {
    let siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]);
    return siblings ? // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // so they sort equally.
    0;
}
function $633b4c6f3df1e771$var$matchRouteBranch(branch, pathname) {
    let { routesMeta: routesMeta } = branch;
    let matchedParams = {};
    let matchedPathname = "/";
    let matches = [];
    for(let i = 0; i < routesMeta.length; ++i){
        let meta = routesMeta[i];
        let end = i === routesMeta.length - 1;
        let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        let match = $633b4c6f3df1e771$export$81336c211d5ff295({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end: end
        }, remainingPathname);
        if (!match) return null;
        Object.assign(matchedParams, match.params);
        let route = meta.route;
        matches.push({
            // TODO: Can this as be avoided?
            params: matchedParams,
            pathname: $633b4c6f3df1e771$export$86d9a7913e44197e([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: $633b4c6f3df1e771$export$a5c6d149b50c1d86($633b4c6f3df1e771$export$86d9a7913e44197e([
                matchedPathname,
                match.pathnameBase
            ])),
            route: route
        });
        if (match.pathnameBase !== "/") matchedPathname = $633b4c6f3df1e771$export$86d9a7913e44197e([
            matchedPathname,
            match.pathnameBase
        ]);
    }
    return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */ function $633b4c6f3df1e771$export$82476f982757e71e(originalPath, params) {
    if (params === void 0) params = {};
    let path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        $633b4c6f3df1e771$export$c0e02632e14916fd(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
        path = path.replace(/\*$/, "/*");
    } // ensure `/` is added at the beginning if the path is absolute
    const prefix = path.startsWith("/") ? "/" : "";
    const segments = path.split(/\/+/).map((segment, index, array)=>{
        const isLastSegment = index === array.length - 1; // only apply the splat if it's the last segment
        if (isLastSegment && segment === "*") {
            const star = "*";
            const starParam = params[star]; // Apply the splat
            return starParam;
        }
        const keyMatch = segment.match(/^:(\w+)(\??)$/);
        if (keyMatch) {
            const [, key, optional] = keyMatch;
            let param = params[key];
            if (optional === "?") return param == null ? "" : param;
            if (param == null) $633b4c6f3df1e771$export$3e9cee6b33872309(false, 'Missing ":' + key + '" param');
            return param;
        } // Remove any optional markers from optional static segments
        return segment.replace(/\?$/g, "");
    }) // Remove empty segments
    .filter((segment)=>!!segment);
    return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */ function $633b4c6f3df1e771$export$81336c211d5ff295(pattern, pathname) {
    if (typeof pattern === "string") pattern = {
        path: pattern,
        caseSensitive: false,
        end: true
    };
    let [matcher, paramNames] = $633b4c6f3df1e771$var$compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    let match = pathname.match(matcher);
    if (!match) return null;
    let matchedPathname = match[0];
    let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    let captureGroups = match.slice(1);
    let params = paramNames.reduce((memo, paramName, index)=>{
        // We need to compute the pathnameBase here using the raw splat value
        // instead of using params["*"] later because it will be decoded then
        if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        memo[paramName] = $633b4c6f3df1e771$var$safelyDecodeURIComponent(captureGroups[index] || "", paramName);
        return memo;
    }, {});
    return {
        params: params,
        pathname: matchedPathname,
        pathnameBase: pathnameBase,
        pattern: pattern
    };
}
function $633b4c6f3df1e771$var$compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) caseSensitive = false;
    if (end === void 0) end = true;
    $633b4c6f3df1e771$export$c0e02632e14916fd(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
    let paramNames = [];
    let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/\/:(\w+)/g, (_, paramName)=>{
        paramNames.push(paramName);
        return "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
        paramNames.push("*");
        regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
         : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else if (end) // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
    else if (path !== "" && path !== "/") // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
    let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [
        matcher,
        paramNames
    ];
}
function $633b4c6f3df1e771$var$safelyDecodeURI(value) {
    try {
        return decodeURI(value);
    } catch (error) {
        $633b4c6f3df1e771$export$c0e02632e14916fd(false, 'The URL path "' + value + '" could not be decoded because it is is a ' + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
        return value;
    }
}
function $633b4c6f3df1e771$var$safelyDecodeURIComponent(value, paramName) {
    try {
        return decodeURIComponent(value);
    } catch (error) {
        $633b4c6f3df1e771$export$c0e02632e14916fd(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
        return value;
    }
}
/**
 * @private
 */ function $633b4c6f3df1e771$export$b69e3301ce081aa3(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
     // We want to leave trailing slash behavior in the user's control, so if they
    // specify a basename with a trailing slash, we should support it
    let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    let nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") // pathname does not start with basename/
    return null;
    return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */ function $633b4c6f3df1e771$export$b09f2ff0bbcb43c7(to, fromPathname) {
    if (fromPathname === void 0) fromPathname = "/";
    let { pathname: toPathname, search: search = "", hash: hash = "" } = typeof to === "string" ? $633b4c6f3df1e771$export$8ccf933b0513f8d0(to) : to;
    let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : $633b4c6f3df1e771$var$resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname: pathname,
        search: $633b4c6f3df1e771$var$normalizeSearch(search),
        hash: $633b4c6f3df1e771$var$normalizeHash(hash)
    };
}
function $633b4c6f3df1e771$var$resolvePathname(relativePath, fromPathname) {
    let segments = fromPathname.replace(/\/+$/, "").split("/");
    let relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment)=>{
        if (segment === "..") // Keep the root "" segment so the pathname starts at /
        {
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") segments.push(segment);
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function $633b4c6f3df1e771$var$getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */ function $633b4c6f3df1e771$export$90ba53ce1c7fdff2(matches) {
    return matches.filter((match, index)=>index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */ function $633b4c6f3df1e771$export$cae722b0cc860f13(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) isPathRelative = false;
    let to;
    if (typeof toArg === "string") to = $633b4c6f3df1e771$export$8ccf933b0513f8d0(toArg);
    else {
        to = $633b4c6f3df1e771$var$_extends({}, toArg);
        $633b4c6f3df1e771$export$3e9cee6b33872309(!to.pathname || !to.pathname.includes("?"), $633b4c6f3df1e771$var$getInvalidPathError("?", "pathname", "search", to));
        $633b4c6f3df1e771$export$3e9cee6b33872309(!to.pathname || !to.pathname.includes("#"), $633b4c6f3df1e771$var$getInvalidPathError("#", "pathname", "hash", to));
        $633b4c6f3df1e771$export$3e9cee6b33872309(!to.search || !to.search.includes("#"), $633b4c6f3df1e771$var$getInvalidPathError("#", "search", "hash", to));
    }
    let isEmptyPath = toArg === "" || to.pathname === "";
    let toPathname = isEmptyPath ? "/" : to.pathname;
    let from; // Routing is relative to the current pathname if explicitly requested.
    //
    // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.
    if (isPathRelative || toPathname == null) from = locationPathname;
    else {
        let routePathnameIndex = routePathnames.length - 1;
        if (toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
            // URL segment".  This is a key difference from how <a href> works and a
            // major reason we call this a "to" value instead of a "href".
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        } // If there are more ".." segments than parent routes, resolve relative to
        // the root / URL.
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    let path = $633b4c6f3df1e771$export$b09f2ff0bbcb43c7(to, from); // Ensure the pathname has a trailing slash if the original "to" had one
    let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash
    let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
    return path;
}
/**
 * @private
 */ function $633b4c6f3df1e771$export$f5655dfea9d981c7(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? $633b4c6f3df1e771$export$8ccf933b0513f8d0(to).pathname : to.pathname;
}
/**
 * @private
 */ const $633b4c6f3df1e771$export$86d9a7913e44197e = (paths)=>paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */ const $633b4c6f3df1e771$export$a5c6d149b50c1d86 = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */ const $633b4c6f3df1e771$var$normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */ const $633b4c6f3df1e771$var$normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */ const $633b4c6f3df1e771$export$7b419323e6ed4f31 = function json(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    let headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json; charset=utf-8");
    return new Response(JSON.stringify(data), $633b4c6f3df1e771$var$_extends({}, responseInit, {
        headers: headers
    }));
};
class $633b4c6f3df1e771$export$42a99a7a4bc0e76a extends Error {
}
class $633b4c6f3df1e771$export$61d759255b4eec65 {
    constructor(data, responseInit){
        this.pendingKeysSet = new Set();
        this.subscribers = new Set();
        this.deferredKeys = [];
        $633b4c6f3df1e771$export$3e9cee6b33872309(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
        // cancellation
        let reject;
        this.abortPromise = new Promise((_, r)=>reject = r);
        this.controller = new AbortController();
        let onAbort = ()=>reject(new $633b4c6f3df1e771$export$42a99a7a4bc0e76a("Deferred data aborted"));
        this.unlistenAbortSignal = ()=>this.controller.signal.removeEventListener("abort", onAbort);
        this.controller.signal.addEventListener("abort", onAbort);
        this.data = Object.entries(data).reduce((acc, _ref)=>{
            let [key, value] = _ref;
            return Object.assign(acc, {
                [key]: this.trackPromise(key, value)
            });
        }, {});
        if (this.done) // All incoming values were resolved
        this.unlistenAbortSignal();
        this.init = responseInit;
    }
    trackPromise(key, value) {
        if (!(value instanceof Promise)) return value;
        this.deferredKeys.push(key);
        this.pendingKeysSet.add(key); // We store a little wrapper promise that will be extended with
        // _data/_error props upon resolve/reject
        let promise = Promise.race([
            value,
            this.abortPromise
        ]).then((data)=>this.onSettle(promise, key, null, data), (error)=>this.onSettle(promise, key, error)); // Register rejection listeners to avoid uncaught promise rejections on
        // errors or aborted deferred values
        promise.catch(()=>{});
        Object.defineProperty(promise, "_tracked", {
            get: ()=>true
        });
        return promise;
    }
    onSettle(promise, key, error, data) {
        if (this.controller.signal.aborted && error instanceof $633b4c6f3df1e771$export$42a99a7a4bc0e76a) {
            this.unlistenAbortSignal();
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            return Promise.reject(error);
        }
        this.pendingKeysSet.delete(key);
        if (this.done) // Nothing left to abort!
        this.unlistenAbortSignal();
        if (error) {
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            this.emit(false, key);
            return Promise.reject(error);
        }
        Object.defineProperty(promise, "_data", {
            get: ()=>data
        });
        this.emit(false, key);
        return data;
    }
    emit(aborted, settledKey) {
        this.subscribers.forEach((subscriber)=>subscriber(aborted, settledKey));
    }
    subscribe(fn) {
        this.subscribers.add(fn);
        return ()=>this.subscribers.delete(fn);
    }
    cancel() {
        this.controller.abort();
        this.pendingKeysSet.forEach((v, k)=>this.pendingKeysSet.delete(k));
        this.emit(true);
    }
    async resolveData(signal) {
        let aborted = false;
        if (!this.done) {
            let onAbort = ()=>this.cancel();
            signal.addEventListener("abort", onAbort);
            aborted = await new Promise((resolve)=>{
                this.subscribe((aborted)=>{
                    signal.removeEventListener("abort", onAbort);
                    if (aborted || this.done) resolve(aborted);
                });
            });
        }
        return aborted;
    }
    get done() {
        return this.pendingKeysSet.size === 0;
    }
    get unwrappedData() {
        $633b4c6f3df1e771$export$3e9cee6b33872309(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
        return Object.entries(this.data).reduce((acc, _ref2)=>{
            let [key, value] = _ref2;
            return Object.assign(acc, {
                [key]: $633b4c6f3df1e771$var$unwrapTrackedPromise(value)
            });
        }, {});
    }
    get pendingKeys() {
        return Array.from(this.pendingKeysSet);
    }
}
function $633b4c6f3df1e771$var$isTrackedPromise(value) {
    return value instanceof Promise && value._tracked === true;
}
function $633b4c6f3df1e771$var$unwrapTrackedPromise(value) {
    if (!$633b4c6f3df1e771$var$isTrackedPromise(value)) return value;
    if (value._error) throw value._error;
    return value._data;
}
const $633b4c6f3df1e771$export$260e5c0943f31606 = function defer(data, init) {
    if (init === void 0) init = {};
    let responseInit = typeof init === "number" ? {
        status: init
    } : init;
    return new $633b4c6f3df1e771$export$61d759255b4eec65(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ const $633b4c6f3df1e771$export$89e12c5b50f7529d = function redirect(url, init) {
    if (init === void 0) init = 302;
    let responseInit = init;
    if (typeof responseInit === "number") responseInit = {
        status: responseInit
    };
    else if (typeof responseInit.status === "undefined") responseInit.status = 302;
    let headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, $633b4c6f3df1e771$var$_extends({}, responseInit, {
        headers: headers
    }));
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */ class $633b4c6f3df1e771$export$acf1a680051f5031 {
    constructor(status, statusText, data, internal){
        if (internal === void 0) internal = false;
        this.status = status;
        this.statusText = statusText || "";
        this.internal = internal;
        if (data instanceof Error) {
            this.data = data.toString();
            this.error = data;
        } else this.data = data;
    }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */ function $633b4c6f3df1e771$export$972111febbeef05b(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const $633b4c6f3df1e771$var$validMutationMethodsArr = [
    "post",
    "put",
    "patch",
    "delete"
];
const $633b4c6f3df1e771$var$validMutationMethods = new Set($633b4c6f3df1e771$var$validMutationMethodsArr);
const $633b4c6f3df1e771$var$validRequestMethodsArr = [
    "get",
    ...$633b4c6f3df1e771$var$validMutationMethodsArr
];
const $633b4c6f3df1e771$var$validRequestMethods = new Set($633b4c6f3df1e771$var$validRequestMethodsArr);
const $633b4c6f3df1e771$var$redirectStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
const $633b4c6f3df1e771$var$redirectPreserveMethodStatusCodes = new Set([
    307,
    308
]);
const $633b4c6f3df1e771$export$ed3e14b2f9e105d0 = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined
};
const $633b4c6f3df1e771$export$52eace9c284d3585 = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined
};
const $633b4c6f3df1e771$export$386d57f03f0b2883 = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
};
const $633b4c6f3df1e771$var$ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const $633b4c6f3df1e771$var$isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const $633b4c6f3df1e771$var$isServer = !$633b4c6f3df1e771$var$isBrowser;
const $633b4c6f3df1e771$var$defaultMapRouteProperties = (route)=>({
        hasErrorBoundary: Boolean(route.hasErrorBoundary)
    }); //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */ function $633b4c6f3df1e771$export$baddd0131ee8c05b(init) {
    $633b4c6f3df1e771$export$3e9cee6b33872309(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let mapRouteProperties;
    if (init.mapRouteProperties) mapRouteProperties = init.mapRouteProperties;
    else if (init.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = $633b4c6f3df1e771$var$defaultMapRouteProperties;
     // Routes keyed by ID
    let manifest = {}; // Routes in tree format for matching
    let dataRoutes = $633b4c6f3df1e771$export$4a6d22b32134ea5d(init.routes, mapRouteProperties, undefined, manifest);
    let inFlightDataRoutes;
    let basename = init.basename || "/"; // Config driven behavior flags
    let future = $633b4c6f3df1e771$var$_extends({
        v7_normalizeFormMethod: false,
        v7_prependBasename: false
    }, init.future); // Cleanup function for history
    let unlistenHistory = null; // Externally-provided functions to call on all state changes
    let subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing
    let savedScrollPositions = null; // Externally-provided function to get scroll restoration keys
    let getScrollRestorationKey = null; // Externally-provided function to get current scroll position
    let getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
    // we don't get the saved positions from <ScrollRestoration /> until _after_
    // the initial render, we need to manually trigger a separate updateState to
    // send along the restoreScrollPosition
    // Set to true if we have `hydrationData` since we assume we were SSR'd and that
    // SSR did the initial scroll restoration.
    let initialScrollRestored = init.hydrationData != null;
    let initialMatches = $633b4c6f3df1e771$export$2708184779ceb39d(dataRoutes, init.history.location, basename);
    let initialErrors = null;
    if (initialMatches == null) {
        // If we do not match a user-provided-route, fall back to the root
        // to allow the error boundary to take over
        let error = $633b4c6f3df1e771$var$getInternalRouterError(404, {
            pathname: init.history.location.pathname
        });
        let { matches: matches, route: route } = $633b4c6f3df1e771$var$getShortCircuitMatches(dataRoutes);
        initialMatches = matches;
        initialErrors = {
            [route.id]: error
        };
    }
    let initialized = // functions around still then we'll need to run them in initialize()
    !initialMatches.some((m)=>m.route.lazy) && (!initialMatches.some((m)=>m.route.loader) || init.hydrationData != null);
    let router;
    let state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized: initialized,
        navigation: $633b4c6f3df1e771$export$ed3e14b2f9e105d0,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: new Map(),
        blockers: new Map()
    }; // -- Stateful internal variables to manage navigations --
    // Current navigation in progress (to be committed in completeNavigation)
    let pendingAction = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
    // be restored?
    let pendingPreventScrollReset = false; // AbortController for the active navigation
    let pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
    // revalidation is entirely uninterrupted
    let isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
    //  - submissions (completed or interrupted)
    //  - useRevalidator()
    //  - X-Remix-Revalidate (from redirect)
    let isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
    // to a cancelled deferred on action submission
    let cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
    // action navigation and require revalidation
    let cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers
    let fetchControllers = new Map(); // Track loads based on the order in which they started
    let incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
    // the globally incrementing load when a fetcher load lands after a completed
    // navigation
    let pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions
    let fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations
    let fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers
    let fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
    // route loader returns defer() we stick one in here.  Then, when a nested
    // promise resolves we update loaderData.  If a new navigation starts we
    // cancel active deferreds for eliminated routes.
    let activeDeferreds = new Map(); // Store blocker functions in a separate Map outside of router state since
    // we don't need to update UI state if they change
    let blockerFunctions = new Map(); // Flag to ignore the next history update, so we can revert the URL change on
    // a POP navigation that was blocked by the user without touching router state
    let ignoreNextHistoryUpdate = false; // Initialize the router, all side effects should be kicked off from here.
    // Implemented as a Fluent API for ease of:
    //   let router = createRouter(init).initialize();
    function initialize() {
        // If history informs us of a POP navigation, start the navigation but do not update
        // state.  We'll update our own state once the navigation completes
        unlistenHistory = init.history.listen((_ref)=>{
            let { action: historyAction, location: location, delta: delta } = _ref;
            // Ignore this event if it was just us resetting the URL from a
            // blocked POP navigation
            if (ignoreNextHistoryUpdate) {
                ignoreNextHistoryUpdate = false;
                return;
            }
            $633b4c6f3df1e771$export$c0e02632e14916fd(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let blockerKey = shouldBlockNavigation({
                currentLocation: state.location,
                nextLocation: location,
                historyAction: historyAction
            });
            if (blockerKey && delta != null) {
                // Restore the URL to match the current UI, but don't update router state
                ignoreNextHistoryUpdate = true;
                init.history.go(delta * -1); // Put the blocker into a blocked state
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location: location,
                    proceed () {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: undefined,
                            reset: undefined,
                            location: location
                        }); // Re-do the same POP navigation we just blocked
                        init.history.go(delta);
                    },
                    reset () {
                        deleteBlocker(blockerKey);
                        updateState({
                            blockers: new Map(router.state.blockers)
                        });
                    }
                });
                return;
            }
            return startNavigation(historyAction, location);
        }); // Kick off initial data load if needed.  Use Pop to avoid modifying history
        // Note we don't do any handling of lazy here.  For SPA's it'll get handled
        // in the normal navigation flow.  For SSR it's expected that lazy modules are
        // resolved prior to router creation since we can't go into a fallbackElement
        // UI for SSR'd apps
        if (!state.initialized) startNavigation($633b4c6f3df1e771$export$e19cd5f9376f8cee.Pop, state.location);
        return router;
    } // Clean up a router and it's side effects
    function dispose() {
        if (unlistenHistory) unlistenHistory();
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach((_, key)=>deleteFetcher(key));
        state.blockers.forEach((_, key)=>deleteBlocker(key));
    } // Subscribe to state updates for the router
    function subscribe(fn) {
        subscribers.add(fn);
        return ()=>subscribers.delete(fn);
    } // Update our state and notify the calling context of the change
    function updateState(newState) {
        state = $633b4c6f3df1e771$var$_extends({}, state, newState);
        subscribers.forEach((subscriber)=>subscriber(state));
    } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
    // and setting state.[historyAction/location/matches] to the new route.
    // - Location is a required param
    // - Navigation will always be set to IDLE_NAVIGATION
    // - Can pass any other state in newState
    function completeNavigation(location, newState) {
        var _location$state, _location$state2;
        // Deduce if we're in a loading/actionReload state:
        // - We have committed actionData in the store
        // - The current navigation was a mutation submission
        // - We're past the submitting state and into the loading state
        // - The location being loaded is not the result of a redirect
        let isActionReload = state.actionData != null && state.navigation.formMethod != null && $633b4c6f3df1e771$var$isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
        let actionData;
        if (newState.actionData) {
            if (Object.keys(newState.actionData).length > 0) actionData = newState.actionData;
            else // Empty actionData -> clear prior actionData due to an action error
            actionData = null;
        } else if (isActionReload) // Keep the current data if we're wrapping up the action reload
        actionData = state.actionData;
        else // Clear actionData on any other completed navigations
        actionData = null;
         // Always preserve any existing loaderData from re-used routes
        let loaderData = newState.loaderData ? $633b4c6f3df1e771$var$mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData; // On a successful navigation we can assume we got through all blockers
        // so we can start fresh
        for (let [key] of blockerFunctions)deleteBlocker(key);
         // Always respect the user flag.  Otherwise don't reset on mutation
        // submission navigations unless they redirect
        let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && $633b4c6f3df1e771$var$isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = undefined;
        }
        updateState($633b4c6f3df1e771$var$_extends({}, newState, {
            actionData: actionData,
            loaderData: loaderData,
            historyAction: pendingAction,
            location: location,
            initialized: true,
            navigation: $633b4c6f3df1e771$export$ed3e14b2f9e105d0,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
            preventScrollReset: preventScrollReset,
            blockers: new Map(state.blockers)
        }));
        if (isUninterruptedRevalidation) ;
        else if (pendingAction === $633b4c6f3df1e771$export$e19cd5f9376f8cee.Pop) ;
        else if (pendingAction === $633b4c6f3df1e771$export$e19cd5f9376f8cee.Push) init.history.push(location, location.state);
        else if (pendingAction === $633b4c6f3df1e771$export$e19cd5f9376f8cee.Replace) init.history.replace(location, location.state);
         // Reset stateful navigation vars
        pendingAction = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Pop;
        pendingPreventScrollReset = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        cancelledDeferredRoutes = [];
        cancelledFetcherLoads = [];
    } // Trigger a navigation event, which can either be a numerical POP or a PUSH
    // replace with an optional submission
    async function navigate(to, opts) {
        if (typeof to === "number") {
            init.history.go(to);
            return;
        }
        let normalizedPath = $633b4c6f3df1e771$var$normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
        let { path: path, submission: submission, error: error } = $633b4c6f3df1e771$var$normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
        let currentLocation = state.location;
        let nextLocation = $633b4c6f3df1e771$var$createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
        // URL from window.location, so we need to encode it here so the behavior
        // remains the same as POP and non-data-router usages.  new URL() does all
        // the same encoding we'd get from a history.pushState/window.location read
        // without having to touch history
        nextLocation = $633b4c6f3df1e771$var$_extends({}, nextLocation, init.history.encodeLocation(nextLocation));
        let userReplace = opts && opts.replace != null ? opts.replace : undefined;
        let historyAction = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Push;
        if (userReplace === true) historyAction = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Replace;
        else if (userReplace === false) ;
        else if (submission != null && $633b4c6f3df1e771$var$isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) // By default on submissions to the current location we REPLACE so that
        // users don't have to double-click the back button to get to the prior
        // location.  If the user redirects to a different location from the
        // action/loader this will be ignored and the redirect will be a PUSH
        historyAction = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Replace;
        let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
        let blockerKey = shouldBlockNavigation({
            currentLocation: currentLocation,
            nextLocation: nextLocation,
            historyAction: historyAction
        });
        if (blockerKey) {
            // Put the blocker into a blocked state
            updateBlocker(blockerKey, {
                state: "blocked",
                location: nextLocation,
                proceed () {
                    updateBlocker(blockerKey, {
                        state: "proceeding",
                        proceed: undefined,
                        reset: undefined,
                        location: nextLocation
                    }); // Send the same navigation through
                    navigate(to, opts);
                },
                reset () {
                    deleteBlocker(blockerKey);
                    updateState({
                        blockers: new Map(state.blockers)
                    });
                }
            });
            return;
        }
        return await startNavigation(historyAction, nextLocation, {
            submission: submission,
            // Send through the formData serialization error if we have one so we can
            // render at the right error boundary after we match routes
            pendingError: error,
            preventScrollReset: preventScrollReset,
            replace: opts && opts.replace
        });
    } // Revalidate all current loaders.  If a navigation is in progress or if this
    // is interrupted by a navigation, allow this to "succeed" by calling all
    // loaders during the next loader round
    function revalidate() {
        interruptActiveLoads();
        updateState({
            revalidation: "loading"
        }); // If we're currently submitting an action, we don't need to start a new
        // navigation, we'll just let the follow up loader execution call all loaders
        if (state.navigation.state === "submitting") return;
         // If we're currently in an idle state, start a new navigation for the current
        // action/location and mark it as uninterrupted, which will skip the history
        // update in completeNavigation
        if (state.navigation.state === "idle") {
            startNavigation(state.historyAction, state.location, {
                startUninterruptedRevalidation: true
            });
            return;
        } // Otherwise, if we're currently in a loading state, just start a new
        // navigation to the navigation.location but do not trigger an uninterrupted
        // revalidation so that history correctly updates once the navigation completes
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
            overrideNavigation: state.navigation
        });
    } // Start a navigation to the given action/location.  Can optionally provide a
    // overrideNavigation which will override the normalLoad in the case of a redirect
    // navigation
    async function startNavigation(historyAction, location, opts) {
        // Abort any in-progress navigations and start a new one. Unset any ongoing
        // uninterrupted revalidations unless told otherwise, since we want this
        // new navigation to update history normally
        pendingNavigationController && pendingNavigationController.abort();
        pendingNavigationController = null;
        pendingAction = historyAction;
        isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
        // and track whether we should reset scroll on completion
        saveScrollPosition(state.location, state.matches);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let loadingNavigation = opts && opts.overrideNavigation;
        let matches = $633b4c6f3df1e771$export$2708184779ceb39d(routesToUse, location, basename); // Short circuit with a 404 on the root error boundary if we match nothing
        if (!matches) {
            let error = $633b4c6f3df1e771$var$getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route: route } = $633b4c6f3df1e771$var$getShortCircuitMatches(routesToUse); // Cancel all pending deferred on 404s since we don't keep any routes
            cancelActiveDeferreds();
            completeNavigation(location, {
                matches: notFoundMatches,
                loaderData: {},
                errors: {
                    [route.id]: error
                }
            });
            return;
        } // Short circuit if it's only a hash change and not a mutation submission
        // For example, on /page#hash and submit a <Form method="post"> which will
        // default to a navigation to /page
        if ($633b4c6f3df1e771$var$isHashChangeOnly(state.location, location) && !(opts && opts.submission && $633b4c6f3df1e771$var$isMutationMethod(opts.submission.formMethod))) {
            completeNavigation(location, {
                matches: matches
            });
            return;
        } // Create a controller/Request for this navigation
        pendingNavigationController = new AbortController();
        let request = $633b4c6f3df1e771$var$createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
        let pendingActionData;
        let pendingError;
        if (opts && opts.pendingError) // If we have a pendingError, it means the user attempted a GET submission
        // with binary FormData so assign here and skip to handleLoaders.  That
        // way we handle calling loaders above the boundary etc.  It's not really
        // different from an actionError in that sense.
        pendingError = {
            [$633b4c6f3df1e771$var$findNearestBoundary(matches).route.id]: opts.pendingError
        };
        else if (opts && opts.submission && $633b4c6f3df1e771$var$isMutationMethod(opts.submission.formMethod)) {
            // Call action if we received an action submission
            let actionOutput = await handleAction(request, location, opts.submission, matches, {
                replace: opts.replace
            });
            if (actionOutput.shortCircuited) return;
            pendingActionData = actionOutput.pendingActionData;
            pendingError = actionOutput.pendingActionError;
            let navigation = $633b4c6f3df1e771$var$_extends({
                state: "loading",
                location: location
            }, opts.submission);
            loadingNavigation = navigation; // Create a GET request for the loaders
            request = new Request(request.url, {
                signal: request.signal
            });
        } // Call loaders
        let { shortCircuited: shortCircuited, loaderData: loaderData, errors: errors } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, pendingActionData, pendingError);
        if (shortCircuited) return;
         // Clean up now that the action/loaders have completed.  Don't clean up if
        // we short circuited because pendingNavigationController will have already
        // been assigned to a new controller for the next navigation
        pendingNavigationController = null;
        completeNavigation(location, $633b4c6f3df1e771$var$_extends({
            matches: matches
        }, pendingActionData ? {
            actionData: pendingActionData
        } : {}, {
            loaderData: loaderData,
            errors: errors
        }));
    } // Call the action matched by the leaf route for this navigation and handle
    // redirects/errors
    async function handleAction(request, location, submission, matches, opts) {
        interruptActiveLoads(); // Put us in a submitting state
        let navigation = $633b4c6f3df1e771$var$_extends({
            state: "submitting",
            location: location
        }, submission);
        updateState({
            navigation: navigation
        }); // Call our action and get the result
        let result;
        let actionMatch = $633b4c6f3df1e771$var$getTargetMatch(matches, location);
        if (!actionMatch.route.action && !actionMatch.route.lazy) result = {
            type: $633b4c6f3df1e771$var$ResultType.error,
            error: $633b4c6f3df1e771$var$getInternalRouterError(405, {
                method: request.method,
                pathname: location.pathname,
                routeId: actionMatch.route.id
            })
        };
        else {
            result = await $633b4c6f3df1e771$var$callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename);
            if (request.signal.aborted) return {
                shortCircuited: true
            };
        }
        if ($633b4c6f3df1e771$var$isRedirectResult(result)) {
            let replace;
            if (opts && opts.replace != null) replace = opts.replace;
            else // If the user didn't explicity indicate replace behavior, replace if
            // we redirected to the exact same location we're currently at to avoid
            // double back-buttons
            replace = result.location === state.location.pathname + state.location.search;
            await startRedirectNavigation(state, result, {
                submission: submission,
                replace: replace
            });
            return {
                shortCircuited: true
            };
        }
        if ($633b4c6f3df1e771$var$isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = $633b4c6f3df1e771$var$findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
            // action threw an error that'll be rendered in an errorElement, we fall
            // back to PUSH so that the user can use the back button to get back to
            // the pre-submission form location to try again
            if ((opts && opts.replace) !== true) pendingAction = $633b4c6f3df1e771$export$e19cd5f9376f8cee.Push;
            return {
                // Send back an empty object we can use to clear out any prior actionData
                pendingActionData: {},
                pendingActionError: {
                    [boundaryMatch.route.id]: result.error
                }
            };
        }
        if ($633b4c6f3df1e771$var$isDeferredResult(result)) throw $633b4c6f3df1e771$var$getInternalRouterError(400, {
            type: "defer-action"
        });
        return {
            pendingActionData: {
                [actionMatch.route.id]: result.data
            }
        };
    } // Call all applicable loaders for the given matches, handling redirects,
    // errors, etc.
    async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
        // Figure out the right navigation we want to use for data loading
        let loadingNavigation = overrideNavigation;
        if (!loadingNavigation) {
            let navigation = $633b4c6f3df1e771$var$_extends({
                state: "loading",
                location: location,
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined
            }, submission);
            loadingNavigation = navigation;
        } // If this was a redirect from an action we don't have a "submission" but
        // we have it on the loading navigation so use that if available
        let activeSubmission = submission || fetcherSubmission ? submission || fetcherSubmission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
            formMethod: loadingNavigation.formMethod,
            formAction: loadingNavigation.formAction,
            formData: loadingNavigation.formData,
            formEncType: loadingNavigation.formEncType
        } : undefined;
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let [matchesToLoad, revalidatingFetchers] = $633b4c6f3df1e771$var$getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, basename, pendingActionData, pendingError); // Cancel pending deferreds for no-longer-matched routes or routes we're
        // about to reload.  Note that if this is an action reload we would have
        // already cancelled all pending deferreds so this would be a no-op
        cancelActiveDeferreds((routeId)=>!(matches && matches.some((m)=>m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m)=>m.route.id === routeId)); // Short circuit if we have no loaders to run
        if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
            let updatedFetchers = markFetchRedirectsDone();
            completeNavigation(location, $633b4c6f3df1e771$var$_extends({
                matches: matches,
                loaderData: {},
                // Commit pending error if we're short circuiting
                errors: pendingError || null
            }, pendingActionData ? {
                actionData: pendingActionData
            } : {}, updatedFetchers ? {
                fetchers: new Map(state.fetchers)
            } : {}));
            return {
                shortCircuited: true
            };
        } // If this is an uninterrupted revalidation, we remain in our current idle
        // state.  If not, we need to switch to our loading state and load data,
        // preserving any new action data or existing action data (in the case of
        // a revalidation interrupting an actionReload)
        if (!isUninterruptedRevalidation) {
            revalidatingFetchers.forEach((rf)=>{
                let fetcher = state.fetchers.get(rf.key);
                let revalidatingFetcher = {
                    state: "loading",
                    data: fetcher && fetcher.data,
                    formMethod: undefined,
                    formAction: undefined,
                    formEncType: undefined,
                    formData: undefined,
                    " _hasFetcherDoneAnything ": true
                };
                state.fetchers.set(rf.key, revalidatingFetcher);
            });
            let actionData = pendingActionData || state.actionData;
            updateState($633b4c6f3df1e771$var$_extends({
                navigation: loadingNavigation
            }, actionData ? Object.keys(actionData).length === 0 ? {
                actionData: null
            } : {
                actionData: actionData
            } : {}, revalidatingFetchers.length > 0 ? {
                fetchers: new Map(state.fetchers)
            } : {}));
        }
        pendingNavigationLoadId = ++incrementingLoadId;
        revalidatingFetchers.forEach((rf)=>{
            if (rf.controller) // Fetchers use an independent AbortController so that aborting a fetcher
            // (via deleteFetcher) does not abort the triggering navigation that
            // triggered the revalidation
            fetchControllers.set(rf.key, rf.controller);
        }); // Proxy navigation abort through to revalidation fetchers
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((f)=>abortFetcher(f.key));
        if (pendingNavigationController) pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { results: results, loaderResults: loaderResults, fetcherResults: fetcherResults } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
        if (request.signal.aborted) return {
            shortCircuited: true
        };
         // Clean up _after_ loaders have completed.  Don't clean up if we short
        // circuited because fetchControllers would have been aborted and
        // reassigned to new controllers for the next navigation
        if (pendingNavigationController) pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        revalidatingFetchers.forEach((rf)=>fetchControllers.delete(rf.key)); // If any loaders returned a redirect Response, start a new REPLACE navigation
        let redirect = $633b4c6f3df1e771$var$findRedirect(results);
        if (redirect) {
            await startRedirectNavigation(state, redirect, {
                replace: replace
            });
            return {
                shortCircuited: true
            };
        } // Process and commit output from loaders
        let { loaderData: loaderData, errors: errors } = $633b4c6f3df1e771$var$processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds); // Wire up subscribers to update loaderData as promises settle
        activeDeferreds.forEach((deferredData, routeId)=>{
            deferredData.subscribe((aborted)=>{
                // Note: No need to updateState here since the TrackedPromise on
                // loaderData is stable across resolve/reject
                // Remove this instance if we were aborted or if promises have settled
                if (aborted || deferredData.done) activeDeferreds.delete(routeId);
            });
        });
        let updatedFetchers = markFetchRedirectsDone();
        let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
        let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
        return $633b4c6f3df1e771$var$_extends({
            loaderData: loaderData,
            errors: errors
        }, shouldUpdateFetchers ? {
            fetchers: new Map(state.fetchers)
        } : {});
    }
    function getFetcher(key) {
        return state.fetchers.get(key) || $633b4c6f3df1e771$export$52eace9c284d3585;
    } // Trigger a fetcher load/submit for the given fetcher key
    function fetch(key, routeId, href, opts) {
        if ($633b4c6f3df1e771$var$isServer) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        if (fetchControllers.has(key)) abortFetcher(key);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let normalizedPath = $633b4c6f3df1e771$var$normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, routeId, opts == null ? void 0 : opts.relative);
        let matches = $633b4c6f3df1e771$export$2708184779ceb39d(routesToUse, normalizedPath, basename);
        if (!matches) {
            setFetcherError(key, routeId, $633b4c6f3df1e771$var$getInternalRouterError(404, {
                pathname: normalizedPath
            }));
            return;
        }
        let { path: path, submission: submission } = $633b4c6f3df1e771$var$normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
        let match = $633b4c6f3df1e771$var$getTargetMatch(matches, path);
        pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && $633b4c6f3df1e771$var$isMutationMethod(submission.formMethod)) {
            handleFetcherAction(key, routeId, path, match, matches, submission);
            return;
        } // Store off the match so we can call it's shouldRevalidate on subsequent
        // revalidations
        fetchLoadMatches.set(key, {
            routeId: routeId,
            path: path
        });
        handleFetcherLoader(key, routeId, path, match, matches, submission);
    } // Call the action for the matched fetcher.submit(), and then handle redirects,
    // errors, and revalidation
    async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
        interruptActiveLoads();
        fetchLoadMatches.delete(key);
        if (!match.route.action && !match.route.lazy) {
            let error = $633b4c6f3df1e771$var$getInternalRouterError(405, {
                method: submission.formMethod,
                pathname: path,
                routeId: routeId
            });
            setFetcherError(key, routeId, error);
            return;
        } // Put this fetcher into it's submitting state
        let existingFetcher = state.fetchers.get(key);
        let fetcher = $633b4c6f3df1e771$var$_extends({
            state: "submitting"
        }, submission, {
            data: existingFetcher && existingFetcher.data,
            " _hasFetcherDoneAnything ": true
        });
        state.fetchers.set(key, fetcher);
        updateState({
            fetchers: new Map(state.fetchers)
        }); // Call the action for the fetcher
        let abortController = new AbortController();
        let fetchRequest = $633b4c6f3df1e771$var$createClientSideRequest(init.history, path, abortController.signal, submission);
        fetchControllers.set(key, abortController);
        let actionResult = await $633b4c6f3df1e771$var$callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, mapRouteProperties, basename);
        if (fetchRequest.signal.aborted) {
            // We can delete this so long as we weren't aborted by ou our own fetcher
            // re-submit which would have put _new_ controller is in fetchControllers
            if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
            return;
        }
        if ($633b4c6f3df1e771$var$isRedirectResult(actionResult)) {
            fetchControllers.delete(key);
            fetchRedirectIds.add(key);
            let loadingFetcher = $633b4c6f3df1e771$var$_extends({
                state: "loading"
            }, submission, {
                data: undefined,
                " _hasFetcherDoneAnything ": true
            });
            state.fetchers.set(key, loadingFetcher);
            updateState({
                fetchers: new Map(state.fetchers)
            });
            return startRedirectNavigation(state, actionResult, {
                submission: submission,
                isFetchActionRedirect: true
            });
        } // Process any non-redirect errors thrown
        if ($633b4c6f3df1e771$var$isErrorResult(actionResult)) {
            setFetcherError(key, routeId, actionResult.error);
            return;
        }
        if ($633b4c6f3df1e771$var$isDeferredResult(actionResult)) throw $633b4c6f3df1e771$var$getInternalRouterError(400, {
            type: "defer-action"
        });
         // Start the data load for current matches, or the next location if we're
        // in the middle of a navigation
        let nextLocation = state.navigation.location || state.location;
        let revalidationRequest = $633b4c6f3df1e771$var$createClientSideRequest(init.history, nextLocation, abortController.signal);
        let routesToUse = inFlightDataRoutes || dataRoutes;
        let matches = state.navigation.state !== "idle" ? $633b4c6f3df1e771$export$2708184779ceb39d(routesToUse, state.navigation.location, basename) : state.matches;
        $633b4c6f3df1e771$export$3e9cee6b33872309(matches, "Didn't find any matches after fetcher action");
        let loadId = ++incrementingLoadId;
        fetchReloadIds.set(key, loadId);
        let loadFetcher = $633b4c6f3df1e771$var$_extends({
            state: "loading",
            data: actionResult.data
        }, submission, {
            " _hasFetcherDoneAnything ": true
        });
        state.fetchers.set(key, loadFetcher);
        let [matchesToLoad, revalidatingFetchers] = $633b4c6f3df1e771$var$getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, basename, {
            [match.route.id]: actionResult.data
        }, undefined // No need to send through errors since we short circuit above
        ); // Put all revalidating fetchers into the loading state, except for the
        // current fetcher which we want to keep in it's current loading state which
        // contains it's action submission info + action data
        revalidatingFetchers.filter((rf)=>rf.key !== key).forEach((rf)=>{
            let staleKey = rf.key;
            let existingFetcher = state.fetchers.get(staleKey);
            let revalidatingFetcher = {
                state: "loading",
                data: existingFetcher && existingFetcher.data,
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined,
                " _hasFetcherDoneAnything ": true
            };
            state.fetchers.set(staleKey, revalidatingFetcher);
            if (rf.controller) fetchControllers.set(staleKey, rf.controller);
        });
        updateState({
            fetchers: new Map(state.fetchers)
        });
        let abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((rf)=>abortFetcher(rf.key));
        abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
        let { results: results, loaderResults: loaderResults, fetcherResults: fetcherResults } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
        if (abortController.signal.aborted) return;
        abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
        fetchReloadIds.delete(key);
        fetchControllers.delete(key);
        revalidatingFetchers.forEach((r)=>fetchControllers.delete(r.key));
        let redirect = $633b4c6f3df1e771$var$findRedirect(results);
        if (redirect) return startRedirectNavigation(state, redirect);
         // Process and commit output from loaders
        let { loaderData: loaderData, errors: errors } = $633b4c6f3df1e771$var$processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
        let doneFetcher = {
            state: "idle",
            data: actionResult.data,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(key, doneFetcher);
        let didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
        // more recent than the navigation, we want the newer data so abort the
        // navigation and complete it with the fetcher data
        if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
            $633b4c6f3df1e771$export$3e9cee6b33872309(pendingAction, "Expected pending action");
            pendingNavigationController && pendingNavigationController.abort();
            completeNavigation(state.navigation.location, {
                matches: matches,
                loaderData: loaderData,
                errors: errors,
                fetchers: new Map(state.fetchers)
            });
        } else {
            // otherwise just update with the fetcher data, preserving any existing
            // loaderData for loaders that did not need to reload.  We have to
            // manually merge here since we aren't going through completeNavigation
            updateState($633b4c6f3df1e771$var$_extends({
                errors: errors,
                loaderData: $633b4c6f3df1e771$var$mergeLoaderData(state.loaderData, loaderData, matches, errors)
            }, didAbortFetchLoads ? {
                fetchers: new Map(state.fetchers)
            } : {}));
            isRevalidationRequired = false;
        }
    } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
    async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
        let existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state
        let loadingFetcher = $633b4c6f3df1e771$var$_extends({
            state: "loading",
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined
        }, submission, {
            data: existingFetcher && existingFetcher.data,
            " _hasFetcherDoneAnything ": true
        });
        state.fetchers.set(key, loadingFetcher);
        updateState({
            fetchers: new Map(state.fetchers)
        }); // Call the loader for this fetcher route match
        let abortController = new AbortController();
        let fetchRequest = $633b4c6f3df1e771$var$createClientSideRequest(init.history, path, abortController.signal);
        fetchControllers.set(key, abortController);
        let result = await $633b4c6f3df1e771$var$callLoaderOrAction("loader", fetchRequest, match, matches, manifest, mapRouteProperties, basename); // Deferred isn't supported for fetcher loads, await everything and treat it
        // as a normal load.  resolveDeferredData will return undefined if this
        // fetcher gets aborted, so we just leave result untouched and short circuit
        // below if that happens
        if ($633b4c6f3df1e771$var$isDeferredResult(result)) result = await $633b4c6f3df1e771$var$resolveDeferredData(result, fetchRequest.signal, true) || result;
         // We can delete this so long as we weren't aborted by our our own fetcher
        // re-load which would have put _new_ controller is in fetchControllers
        if (fetchControllers.get(key) === abortController) fetchControllers.delete(key);
        if (fetchRequest.signal.aborted) return;
         // If the loader threw a redirect Response, start a new REPLACE navigation
        if ($633b4c6f3df1e771$var$isRedirectResult(result)) {
            fetchRedirectIds.add(key);
            await startRedirectNavigation(state, result);
            return;
        } // Process any non-redirect errors thrown
        if ($633b4c6f3df1e771$var$isErrorResult(result)) {
            let boundaryMatch = $633b4c6f3df1e771$var$findNearestBoundary(state.matches, routeId);
            state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
            // do we need to behave any differently with our non-redirect errors?
            // What if it was a non-redirect Response?
            updateState({
                fetchers: new Map(state.fetchers),
                errors: {
                    [boundaryMatch.route.id]: result.error
                }
            });
            return;
        }
        $633b4c6f3df1e771$export$3e9cee6b33872309(!$633b4c6f3df1e771$var$isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state
        let doneFetcher = {
            state: "idle",
            data: result.data,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(key, doneFetcher);
        updateState({
            fetchers: new Map(state.fetchers)
        });
    }
    /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */ async function startRedirectNavigation(state, redirect, _temp) {
        var _window;
        let { submission: submission, replace: replace, isFetchActionRedirect: isFetchActionRedirect } = _temp === void 0 ? {} : _temp;
        if (redirect.revalidate) isRevalidationRequired = true;
        let redirectLocation = $633b4c6f3df1e771$var$createLocation(state.location, redirect.location, $633b4c6f3df1e771$var$_extends({
            _isRedirect: true
        }, isFetchActionRedirect ? {
            _isFetchActionRedirect: true
        } : {}));
        $633b4c6f3df1e771$export$3e9cee6b33872309(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an absolute external redirect that goes to a new origin
        if ($633b4c6f3df1e771$var$ABSOLUTE_URL_REGEX.test(redirect.location) && $633b4c6f3df1e771$var$isBrowser && typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
            let url = init.history.createURL(redirect.location);
            let isDifferentBasename = $633b4c6f3df1e771$export$b69e3301ce081aa3(url.pathname, basename) == null;
            if (window.location.origin !== url.origin || isDifferentBasename) {
                if (replace) window.location.replace(redirect.location);
                else window.location.assign(redirect.location);
                return;
            }
        } // There's no need to abort on redirects, since we don't detect the
        // redirect until the action/loaders have settled
        pendingNavigationController = null;
        let redirectHistoryAction = replace === true ? $633b4c6f3df1e771$export$e19cd5f9376f8cee.Replace : $633b4c6f3df1e771$export$e19cd5f9376f8cee.Push; // Use the incoming submission if provided, fallback on the active one in
        // state.navigation
        let { formMethod: formMethod, formAction: formAction, formEncType: formEncType, formData: formData } = state.navigation;
        if (!submission && formMethod && formAction && formData && formEncType) submission = {
            formMethod: formMethod,
            formAction: formAction,
            formEncType: formEncType,
            formData: formData
        };
         // If this was a 307/308 submission we want to preserve the HTTP method and
        // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
        // redirected location
        if ($633b4c6f3df1e771$var$redirectPreserveMethodStatusCodes.has(redirect.status) && submission && $633b4c6f3df1e771$var$isMutationMethod(submission.formMethod)) await startNavigation(redirectHistoryAction, redirectLocation, {
            submission: $633b4c6f3df1e771$var$_extends({}, submission, {
                formAction: redirect.location
            }),
            // Preserve this flag across redirects
            preventScrollReset: pendingPreventScrollReset
        });
        else if (isFetchActionRedirect) // For a fetch action redirect, we kick off a new loading navigation
        // without the fetcher submission, but we send it along for shouldRevalidate
        await startNavigation(redirectHistoryAction, redirectLocation, {
            overrideNavigation: {
                state: "loading",
                location: redirectLocation,
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined
            },
            fetcherSubmission: submission,
            // Preserve this flag across redirects
            preventScrollReset: pendingPreventScrollReset
        });
        else // Otherwise, we kick off a new loading navigation, preserving the
        // submission info for the duration of this navigation
        await startNavigation(redirectHistoryAction, redirectLocation, {
            overrideNavigation: {
                state: "loading",
                location: redirectLocation,
                formMethod: submission ? submission.formMethod : undefined,
                formAction: submission ? submission.formAction : undefined,
                formEncType: submission ? submission.formEncType : undefined,
                formData: submission ? submission.formData : undefined
            },
            // Preserve this flag across redirects
            preventScrollReset: pendingPreventScrollReset
        });
    }
    async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
        // Call all navigation loaders and revalidating fetcher loaders in parallel,
        // then slice off the results into separate arrays so we can handle them
        // accordingly
        let results = await Promise.all([
            ...matchesToLoad.map((match)=>$633b4c6f3df1e771$var$callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename)),
            ...fetchersToLoad.map((f)=>{
                if (f.matches && f.match && f.controller) return $633b4c6f3df1e771$var$callLoaderOrAction("loader", $633b4c6f3df1e771$var$createClientSideRequest(init.history, f.path, f.controller.signal), f.match, f.matches, manifest, mapRouteProperties, basename);
                else {
                    let error = {
                        type: $633b4c6f3df1e771$var$ResultType.error,
                        error: $633b4c6f3df1e771$var$getInternalRouterError(404, {
                            pathname: f.path
                        })
                    };
                    return error;
                }
            })
        ]);
        let loaderResults = results.slice(0, matchesToLoad.length);
        let fetcherResults = results.slice(matchesToLoad.length);
        await Promise.all([
            $633b4c6f3df1e771$var$resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(()=>request.signal), false, state.loaderData),
            $633b4c6f3df1e771$var$resolveDeferredResults(currentMatches, fetchersToLoad.map((f)=>f.match), fetcherResults, fetchersToLoad.map((f)=>f.controller ? f.controller.signal : null), true)
        ]);
        return {
            results: results,
            loaderResults: loaderResults,
            fetcherResults: fetcherResults
        };
    }
    function interruptActiveLoads() {
        // Every interruption triggers a revalidation
        isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
        // revalidation
        cancelledDeferredRoutes.push(...cancelActiveDeferreds()); // Abort in-flight fetcher loads
        fetchLoadMatches.forEach((_, key)=>{
            if (fetchControllers.has(key)) {
                cancelledFetcherLoads.push(key);
                abortFetcher(key);
            }
        });
    }
    function setFetcherError(key, routeId, error) {
        let boundaryMatch = $633b4c6f3df1e771$var$findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
            errors: {
                [boundaryMatch.route.id]: error
            },
            fetchers: new Map(state.fetchers)
        });
    }
    function deleteFetcher(key) {
        if (fetchControllers.has(key)) abortFetcher(key);
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        state.fetchers.delete(key);
    }
    function abortFetcher(key) {
        let controller = fetchControllers.get(key);
        $633b4c6f3df1e771$export$3e9cee6b33872309(controller, "Expected fetch controller: " + key);
        controller.abort();
        fetchControllers.delete(key);
    }
    function markFetchersDone(keys) {
        for (let key of keys){
            let fetcher = getFetcher(key);
            let doneFetcher = {
                state: "idle",
                data: fetcher.data,
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined,
                " _hasFetcherDoneAnything ": true
            };
            state.fetchers.set(key, doneFetcher);
        }
    }
    function markFetchRedirectsDone() {
        let doneKeys = [];
        let updatedFetchers = false;
        for (let key of fetchRedirectIds){
            let fetcher = state.fetchers.get(key);
            $633b4c6f3df1e771$export$3e9cee6b33872309(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                fetchRedirectIds.delete(key);
                doneKeys.push(key);
                updatedFetchers = true;
            }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
    }
    function abortStaleFetchLoads(landedId) {
        let yeetedKeys = [];
        for (let [key, id] of fetchReloadIds)if (id < landedId) {
            let fetcher = state.fetchers.get(key);
            $633b4c6f3df1e771$export$3e9cee6b33872309(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                abortFetcher(key);
                fetchReloadIds.delete(key);
                yeetedKeys.push(key);
            }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
    }
    function getBlocker(key, fn) {
        let blocker = state.blockers.get(key) || $633b4c6f3df1e771$export$386d57f03f0b2883;
        if (blockerFunctions.get(key) !== fn) blockerFunctions.set(key, fn);
        return blocker;
    }
    function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
    } // Utility function to update blockers, ensuring valid state transitions
    function updateBlocker(key, newBlocker) {
        let blocker = state.blockers.get(key) || $633b4c6f3df1e771$export$386d57f03f0b2883; // Poor mans state machine :)
        // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
        $633b4c6f3df1e771$export$3e9cee6b33872309(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
        state.blockers.set(key, newBlocker);
        updateState({
            blockers: new Map(state.blockers)
        });
    }
    function shouldBlockNavigation(_ref2) {
        let { currentLocation: currentLocation, nextLocation: nextLocation, historyAction: historyAction } = _ref2;
        if (blockerFunctions.size === 0) return;
         // We ony support a single active blocker at the moment since we don't have
        // any compelling use cases for multi-blocker yet
        if (blockerFunctions.size > 1) $633b4c6f3df1e771$export$c0e02632e14916fd(false, "A router only supports one blocker at a time");
        let entries = Array.from(blockerFunctions.entries());
        let [blockerKey, blockerFunction] = entries[entries.length - 1];
        let blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") // If the blocker is currently proceeding, we don't need to re-check
        // it and can let this navigation continue
        return;
         // At this point, we know we're unblocked/blocked so we need to check the
        // user-provided blocker function
        if (blockerFunction({
            currentLocation: currentLocation,
            nextLocation: nextLocation,
            historyAction: historyAction
        })) return blockerKey;
    }
    function cancelActiveDeferreds(predicate) {
        let cancelledRouteIds = [];
        activeDeferreds.forEach((dfd, routeId)=>{
            if (!predicate || predicate(routeId)) {
                // Cancel the deferred - but do not remove from activeDeferreds here -
                // we rely on the subscribers to do that so our tests can assert proper
                // cleanup via _internalActiveDeferreds
                dfd.cancel();
                cancelledRouteIds.push(routeId);
                activeDeferreds.delete(routeId);
            }
        });
        return cancelledRouteIds;
    } // Opt in to capturing and reporting scroll positions during navigations,
    // used by the <ScrollRestoration> component
    function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey = getKey || ((location)=>location.key); // Perform initial hydration scroll restoration, since we miss the boat on
        // the initial updateState() because we've not yet rendered <ScrollRestoration/>
        // and therefore have no savedScrollPositions available
        if (!initialScrollRestored && state.navigation === $633b4c6f3df1e771$export$ed3e14b2f9e105d0) {
            initialScrollRestored = true;
            let y = getSavedScrollPosition(state.location, state.matches);
            if (y != null) updateState({
                restoreScrollPosition: y
            });
        }
        return ()=>{
            savedScrollPositions = null;
            getScrollPosition = null;
            getScrollRestorationKey = null;
        };
    }
    function saveScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
            let userMatches = matches.map((m)=>$633b4c6f3df1e771$var$createUseMatchesMatch(m, state.loaderData));
            let key = getScrollRestorationKey(location, userMatches) || location.key;
            savedScrollPositions[key] = getScrollPosition();
        }
    }
    function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
            let userMatches = matches.map((m)=>$633b4c6f3df1e771$var$createUseMatchesMatch(m, state.loaderData));
            let key = getScrollRestorationKey(location, userMatches) || location.key;
            let y = savedScrollPositions[key];
            if (typeof y === "number") return y;
        }
        return null;
    }
    function _internalSetRoutes(newRoutes) {
        inFlightDataRoutes = newRoutes;
    }
    router = {
        get basename () {
            return basename;
        },
        get state () {
            return state;
        },
        get routes () {
            return dataRoutes;
        },
        initialize: initialize,
        subscribe: subscribe,
        enableScrollRestoration: enableScrollRestoration,
        navigate: navigate,
        fetch: fetch,
        revalidate: revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (to)=>init.history.createHref(to),
        encodeLocation: (to)=>init.history.encodeLocation(to),
        getFetcher: getFetcher,
        deleteFetcher: deleteFetcher,
        dispose: dispose,
        getBlocker: getBlocker,
        deleteBlocker: deleteBlocker,
        _internalFetchControllers: fetchControllers,
        _internalActiveDeferreds: activeDeferreds,
        _internalSetRoutes: // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes
    };
    return router;
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const $633b4c6f3df1e771$export$4d0306f8f6a4585b = Symbol("deferred");
function $633b4c6f3df1e771$export$3336b097a6fbc59a(routes, opts) {
    $633b4c6f3df1e771$export$3e9cee6b33872309(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    let manifest = {};
    let basename = (opts ? opts.basename : null) || "/";
    let mapRouteProperties;
    if (opts != null && opts.mapRouteProperties) mapRouteProperties = opts.mapRouteProperties;
    else if (opts != null && opts.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        let detectErrorBoundary = opts.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else mapRouteProperties = $633b4c6f3df1e771$var$defaultMapRouteProperties;
    let dataRoutes = $633b4c6f3df1e771$export$4a6d22b32134ea5d(routes, mapRouteProperties, undefined, manifest);
    /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */ async function query(request, _temp2) {
        let { requestContext: requestContext } = _temp2 === void 0 ? {} : _temp2;
        let url = new URL(request.url);
        let method = request.method;
        let location = $633b4c6f3df1e771$var$createLocation("", $633b4c6f3df1e771$export$fe53371bee54353d(url), null, "default");
        let matches = $633b4c6f3df1e771$export$2708184779ceb39d(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't
        if (!$633b4c6f3df1e771$var$isValidMethod(method) && method !== "HEAD") {
            let error = $633b4c6f3df1e771$var$getInternalRouterError(405, {
                method: method
            });
            let { matches: methodNotAllowedMatches, route: route } = $633b4c6f3df1e771$var$getShortCircuitMatches(dataRoutes);
            return {
                basename: basename,
                location: location,
                matches: methodNotAllowedMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        } else if (!matches) {
            let error = $633b4c6f3df1e771$var$getInternalRouterError(404, {
                pathname: location.pathname
            });
            let { matches: notFoundMatches, route: route } = $633b4c6f3df1e771$var$getShortCircuitMatches(dataRoutes);
            return {
                basename: basename,
                location: location,
                matches: notFoundMatches,
                loaderData: {},
                actionData: null,
                errors: {
                    [route.id]: error
                },
                statusCode: error.status,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        }
        let result = await queryImpl(request, location, matches, requestContext);
        if ($633b4c6f3df1e771$var$isResponse(result)) return result;
         // When returning StaticHandlerContext, we patch back in the location here
        // since we need it for React Context.  But this helps keep our submit and
        // loadRouteData operating on a Request instead of a Location
        return $633b4c6f3df1e771$var$_extends({
            location: location,
            basename: basename
        }, result);
    }
    /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */ async function queryRoute(request, _temp3) {
        let { routeId: routeId, requestContext: requestContext } = _temp3 === void 0 ? {} : _temp3;
        let url = new URL(request.url);
        let method = request.method;
        let location = $633b4c6f3df1e771$var$createLocation("", $633b4c6f3df1e771$export$fe53371bee54353d(url), null, "default");
        let matches = $633b4c6f3df1e771$export$2708184779ceb39d(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't
        if (!$633b4c6f3df1e771$var$isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") throw $633b4c6f3df1e771$var$getInternalRouterError(405, {
            method: method
        });
        else if (!matches) throw $633b4c6f3df1e771$var$getInternalRouterError(404, {
            pathname: location.pathname
        });
        let match = routeId ? matches.find((m)=>m.route.id === routeId) : $633b4c6f3df1e771$var$getTargetMatch(matches, location);
        if (routeId && !match) throw $633b4c6f3df1e771$var$getInternalRouterError(403, {
            pathname: location.pathname,
            routeId: routeId
        });
        else if (!match) // This should never hit I don't think?
        throw $633b4c6f3df1e771$var$getInternalRouterError(404, {
            pathname: location.pathname
        });
        let result = await queryImpl(request, location, matches, requestContext, match);
        if ($633b4c6f3df1e771$var$isResponse(result)) return result;
        let error = result.errors ? Object.values(result.errors)[0] : undefined;
        if (error !== undefined) // If we got back result.errors, that means the loader/action threw
        // _something_ that wasn't a Response, but it's not guaranteed/required
        // to be an `instanceof Error` either, so we have to use throw here to
        // preserve the "error" state outside of queryImpl.
        throw error;
         // Pick off the right state value to return
        if (result.actionData) return Object.values(result.actionData)[0];
        if (result.loaderData) {
            var _result$activeDeferre;
            let data = Object.values(result.loaderData)[0];
            if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) data[$633b4c6f3df1e771$export$4d0306f8f6a4585b] = result.activeDeferreds[match.route.id];
            return data;
        }
        return undefined;
    }
    async function queryImpl(request, location, matches, requestContext, routeMatch) {
        $633b4c6f3df1e771$export$3e9cee6b33872309(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
        try {
            if ($633b4c6f3df1e771$var$isMutationMethod(request.method.toLowerCase())) {
                let result = await submit(request, matches, routeMatch || $633b4c6f3df1e771$var$getTargetMatch(matches, location), requestContext, routeMatch != null);
                return result;
            }
            let result = await loadRouteData(request, matches, requestContext, routeMatch);
            return $633b4c6f3df1e771$var$isResponse(result) ? result : $633b4c6f3df1e771$var$_extends({}, result, {
                actionData: null,
                actionHeaders: {}
            });
        } catch (e) {
            // If the user threw/returned a Response in callLoaderOrAction, we throw
            // it to bail out and then return or throw here based on whether the user
            // returned or threw
            if ($633b4c6f3df1e771$var$isQueryRouteResponse(e)) {
                if (e.type === $633b4c6f3df1e771$var$ResultType.error && !$633b4c6f3df1e771$var$isRedirectResponse(e.response)) throw e.response;
                return e.response;
            } // Redirects are always returned since they don't propagate to catch
            // boundaries
            if ($633b4c6f3df1e771$var$isRedirectResponse(e)) return e;
            throw e;
        }
    }
    async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
        let result;
        if (!actionMatch.route.action && !actionMatch.route.lazy) {
            let error = $633b4c6f3df1e771$var$getInternalRouterError(405, {
                method: request.method,
                pathname: new URL(request.url).pathname,
                routeId: actionMatch.route.id
            });
            if (isRouteRequest) throw error;
            result = {
                type: $633b4c6f3df1e771$var$ResultType.error,
                error: error
            };
        } else {
            result = await $633b4c6f3df1e771$var$callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, true, isRouteRequest, requestContext);
            if (request.signal.aborted) {
                let method = isRouteRequest ? "queryRoute" : "query";
                throw new Error(method + "() call aborted");
            }
        }
        if ($633b4c6f3df1e771$var$isRedirectResult(result)) // Uhhhh - this should never happen, we should always throw these from
        // callLoaderOrAction, but the type narrowing here keeps TS happy and we
        // can get back on the "throw all redirect responses" train here should
        // this ever happen :/
        throw new Response(null, {
            status: result.status,
            headers: {
                Location: result.location
            }
        });
        if ($633b4c6f3df1e771$var$isDeferredResult(result)) {
            let error = $633b4c6f3df1e771$var$getInternalRouterError(400, {
                type: "defer-action"
            });
            if (isRouteRequest) throw error;
            result = {
                type: $633b4c6f3df1e771$var$ResultType.error,
                error: error
            };
        }
        if (isRouteRequest) {
            // Note: This should only be non-Response values if we get here, since
            // isRouteRequest should throw any Response received in callLoaderOrAction
            if ($633b4c6f3df1e771$var$isErrorResult(result)) throw result.error;
            return {
                matches: [
                    actionMatch
                ],
                loaderData: {},
                actionData: {
                    [actionMatch.route.id]: result.data
                },
                errors: null,
                // Note: statusCode + headers are unused here since queryRoute will
                // return the raw Response or value
                statusCode: 200,
                loaderHeaders: {},
                actionHeaders: {},
                activeDeferreds: null
            };
        }
        if ($633b4c6f3df1e771$var$isErrorResult(result)) {
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            let boundaryMatch = $633b4c6f3df1e771$var$findNearestBoundary(matches, actionMatch.route.id);
            let context = await loadRouteData(request, matches, requestContext, undefined, {
                [boundaryMatch.route.id]: result.error
            }); // action status codes take precedence over loader status codes
            return $633b4c6f3df1e771$var$_extends({}, context, {
                statusCode: $633b4c6f3df1e771$export$972111febbeef05b(result.error) ? result.error.status : 500,
                actionData: null,
                actionHeaders: $633b4c6f3df1e771$var$_extends({}, result.headers ? {
                    [actionMatch.route.id]: result.headers
                } : {})
            });
        } // Create a GET request for the loaders
        let loaderRequest = new Request(request.url, {
            headers: request.headers,
            redirect: request.redirect,
            signal: request.signal
        });
        let context = await loadRouteData(loaderRequest, matches, requestContext);
        return $633b4c6f3df1e771$var$_extends({}, context, result.statusCode ? {
            statusCode: result.statusCode
        } : {}, {
            actionData: {
                [actionMatch.route.id]: result.data
            },
            actionHeaders: $633b4c6f3df1e771$var$_extends({}, result.headers ? {
                [actionMatch.route.id]: result.headers
            } : {})
        });
    }
    async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
        let isRouteRequest = routeMatch != null; // Short circuit if we have no loaders to run (queryRoute())
        if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) throw $633b4c6f3df1e771$var$getInternalRouterError(400, {
            method: request.method,
            pathname: new URL(request.url).pathname,
            routeId: routeMatch == null ? void 0 : routeMatch.route.id
        });
        let requestMatches = routeMatch ? [
            routeMatch
        ] : $633b4c6f3df1e771$var$getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
        let matchesToLoad = requestMatches.filter((m)=>m.route.loader || m.route.lazy); // Short circuit if we have no loaders to run (query())
        if (matchesToLoad.length === 0) return {
            matches: matches,
            // Add a null for all matched routes for proper revalidation on the client
            loaderData: matches.reduce((acc, m)=>Object.assign(acc, {
                    [m.route.id]: null
                }), {}),
            errors: pendingActionError || null,
            statusCode: 200,
            loaderHeaders: {},
            activeDeferreds: null
        };
        let results = await Promise.all([
            ...matchesToLoad.map((match)=>$633b4c6f3df1e771$var$callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, true, isRouteRequest, requestContext))
        ]);
        if (request.signal.aborted) {
            let method = isRouteRequest ? "queryRoute" : "query";
            throw new Error(method + "() call aborted");
        } // Process and commit output from loaders
        let activeDeferreds = new Map();
        let context = $633b4c6f3df1e771$var$processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds); // Add a null for any non-loader matches for proper revalidation on the client
        let executedLoaders = new Set(matchesToLoad.map((match)=>match.route.id));
        matches.forEach((match)=>{
            if (!executedLoaders.has(match.route.id)) context.loaderData[match.route.id] = null;
        });
        return $633b4c6f3df1e771$var$_extends({}, context, {
            matches: matches,
            activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
        });
    }
    return {
        dataRoutes: dataRoutes,
        query: query,
        queryRoute: queryRoute
    };
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */ function $633b4c6f3df1e771$export$fec11da027c70692(routes, context, error) {
    let newContext = $633b4c6f3df1e771$var$_extends({}, context, {
        statusCode: 500,
        errors: {
            [context._deepestRenderedBoundaryId || routes[0].id]: error
        }
    });
    return newContext;
}
function $633b4c6f3df1e771$var$isSubmissionNavigation(opts) {
    return opts != null && "formData" in opts;
}
function $633b4c6f3df1e771$var$normalizeTo(location, matches, basename, prependBasename, to, fromRouteId, relative) {
    let contextualMatches;
    let activeRouteMatch;
    if (fromRouteId != null && relative !== "path") {
        // Grab matches up to the calling route so our route-relative logic is
        // relative to the correct source route.  When using relative:path,
        // fromRouteId is ignored since that is always relative to the current
        // location path
        contextualMatches = [];
        for (let match of matches){
            contextualMatches.push(match);
            if (match.route.id === fromRouteId) {
                activeRouteMatch = match;
                break;
            }
        }
    } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
    } // Resolve the relative path
    let path = $633b4c6f3df1e771$export$cae722b0cc860f13(to ? to : ".", $633b4c6f3df1e771$export$90ba53ce1c7fdff2(contextualMatches).map((m)=>m.pathnameBase), location.pathname, relative === "path"); // When `to` is not specified we inherit search/hash from the current
    // location, unlike when to="." and we just inherit the path.
    // See https://github.com/remix-run/remix/issues/927
    if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
    } // Add an ?index param for matched index routes if we don't already have one
    if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !$633b4c6f3df1e771$var$hasNakedIndexQuery(path.search)) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
     // If we're operating within a basename, prepend it to the pathname.  If
    // this is a root navigation, then just use the raw basename which allows
    // the basename to have full control over the presence of a trailing slash
    // on root actions
    if (prependBasename && basename !== "/") path.pathname = path.pathname === "/" ? basename : $633b4c6f3df1e771$export$86d9a7913e44197e([
        basename,
        path.pathname
    ]);
    return $633b4c6f3df1e771$export$fe53371bee54353d(path);
} // Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function $633b4c6f3df1e771$var$normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
    // Return location verbatim on non-submission navigations
    if (!opts || !$633b4c6f3df1e771$var$isSubmissionNavigation(opts)) return {
        path: path
    };
    if (opts.formMethod && !$633b4c6f3df1e771$var$isValidMethod(opts.formMethod)) return {
        path: path,
        error: $633b4c6f3df1e771$var$getInternalRouterError(405, {
            method: opts.formMethod
        })
    };
     // Create a Submission on non-GET navigations
    let submission;
    if (opts.formData) {
        let formMethod = opts.formMethod || "get";
        submission = {
            formMethod: normalizeFormMethod ? formMethod.toUpperCase() : formMethod.toLowerCase(),
            formAction: $633b4c6f3df1e771$var$stripHashFromPath(path),
            formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
            formData: opts.formData
        };
        if ($633b4c6f3df1e771$var$isMutationMethod(submission.formMethod)) return {
            path: path,
            submission: submission
        };
    } // Flatten submission onto URLSearchParams for GET submissions
    let parsedPath = $633b4c6f3df1e771$export$8ccf933b0513f8d0(path);
    let searchParams = $633b4c6f3df1e771$var$convertFormDataToSearchParams(opts.formData); // On GET navigation submissions we can drop the ?index param from the
    // resulting location since all loaders will run.  But fetcher GET submissions
    // only run a single loader so we need to preserve any incoming ?index params
    if (isFetcher && parsedPath.search && $633b4c6f3df1e771$var$hasNakedIndexQuery(parsedPath.search)) searchParams.append("index", "");
    parsedPath.search = "?" + searchParams;
    return {
        path: $633b4c6f3df1e771$export$fe53371bee54353d(parsedPath),
        submission: submission
    };
} // Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function $633b4c6f3df1e771$var$getLoaderMatchesUntilBoundary(matches, boundaryId) {
    let boundaryMatches = matches;
    if (boundaryId) {
        let index = matches.findIndex((m)=>m.route.id === boundaryId);
        if (index >= 0) boundaryMatches = matches.slice(0, index);
    }
    return boundaryMatches;
}
function $633b4c6f3df1e771$var$getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, routesToUse, basename, pendingActionData, pendingError) {
    let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
    let currentUrl = history.createURL(state.location);
    let nextUrl = history.createURL(location); // Pick navigation matches that are net-new or qualify for revalidation
    let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
    let boundaryMatches = $633b4c6f3df1e771$var$getLoaderMatchesUntilBoundary(matches, boundaryId);
    let navigationMatches = boundaryMatches.filter((match, index)=>{
        if (match.route.lazy) // We haven't loaded this route yet so we don't know if it's got a loader!
        return true;
        if (match.route.loader == null) return false;
         // Always call the loader on new route instances and pending defer cancellations
        if ($633b4c6f3df1e771$var$isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id)=>id === match.route.id)) return true;
         // This is the default implementation for when we revalidate.  If the route
        // provides it's own implementation, then we give them full control but
        // provide this value so they can leverage it if needed after they check
        // their own specific use cases
        let currentRouteMatch = state.matches[index];
        let nextRouteMatch = match;
        return $633b4c6f3df1e771$var$shouldRevalidateLoader(match, $633b4c6f3df1e771$var$_extends({
            currentUrl: currentUrl,
            currentParams: currentRouteMatch.params,
            nextUrl: nextUrl,
            nextParams: nextRouteMatch.params
        }, submission, {
            actionResult: actionResult,
            defaultShouldRevalidate: isRevalidationRequired || // Clicked the same link, resubmitted a GET form
            currentUrl.toString() === nextUrl.toString() || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || $633b4c6f3df1e771$var$isNewRouteInstance(currentRouteMatch, nextRouteMatch)
        }));
    }); // Pick fetcher.loads that need to be revalidated
    let revalidatingFetchers = [];
    fetchLoadMatches.forEach((f, key)=>{
        // Don't revalidate if fetcher won't be present in the subsequent render
        if (!matches.some((m)=>m.route.id === f.routeId)) return;
        let fetcherMatches = $633b4c6f3df1e771$export$2708184779ceb39d(routesToUse, f.path, basename); // If the fetcher path no longer matches, push it in with null matches so
        // we can trigger a 404 in callLoadersAndMaybeResolveData
        if (!fetcherMatches) {
            revalidatingFetchers.push({
                key: key,
                routeId: f.routeId,
                path: f.path,
                matches: null,
                match: null,
                controller: null
            });
            return;
        }
        let fetcherMatch = $633b4c6f3df1e771$var$getTargetMatch(fetcherMatches, f.path);
        if (cancelledFetcherLoads.includes(key)) {
            revalidatingFetchers.push({
                key: key,
                routeId: f.routeId,
                path: f.path,
                matches: fetcherMatches,
                match: fetcherMatch,
                controller: new AbortController()
            });
            return;
        } // Revalidating fetchers are decoupled from the route matches since they
        // hit a static href, so they _always_ check shouldRevalidate and the
        // default is strictly if a revalidation is explicitly required (action
        // submissions, useRevalidator, X-Remix-Revalidate).
        let shouldRevalidate = $633b4c6f3df1e771$var$shouldRevalidateLoader(fetcherMatch, $633b4c6f3df1e771$var$_extends({
            currentUrl: currentUrl,
            currentParams: state.matches[state.matches.length - 1].params,
            nextUrl: nextUrl,
            nextParams: matches[matches.length - 1].params
        }, submission, {
            actionResult: actionResult,
            // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            defaultShouldRevalidate: isRevalidationRequired
        }));
        if (shouldRevalidate) revalidatingFetchers.push({
            key: key,
            routeId: f.routeId,
            path: f.path,
            matches: fetcherMatches,
            match: fetcherMatch,
            controller: new AbortController()
        });
    });
    return [
        navigationMatches,
        revalidatingFetchers
    ];
}
function $633b4c6f3df1e771$var$isNewLoader(currentLoaderData, currentMatch, match) {
    let isNew = !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
    // from a prior error or from a cancelled pending deferred
    let isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data
    return isNew || isMissingData;
}
function $633b4c6f3df1e771$var$isNewRouteInstance(currentMatch, match) {
    let currentPath = currentMatch.route.path;
    return currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"];
}
function $633b4c6f3df1e771$var$shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
        let routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") return routeChoice;
    }
    return arg.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */ async function $633b4c6f3df1e771$var$loadLazyRouteModule(route, mapRouteProperties, manifest) {
    if (!route.lazy) return;
    let lazyRoute = await route.lazy(); // If the lazy route function was executed and removed by another parallel
    // call then we can return - first lazy() to finish wins because the return
    // value of lazy is expected to be static
    if (!route.lazy) return;
    let routeToUpdate = manifest[route.id];
    $633b4c6f3df1e771$export$3e9cee6b33872309(routeToUpdate, "No route found in manifest"); // Update the route in place.  This should be safe because there's no way
    // we could yet be sitting on this route as we can't get there without
    // resolving lazy() first.
    //
    // This is different than the HMR "update" use-case where we may actively be
    // on the route being updated.  The main concern boils down to "does this
    // mutation affect any ongoing navigations or any current state.matches
    // values?".  If not, it should be safe to update in place.
    let routeUpdates = {};
    for(let lazyRouteProperty in lazyRoute){
        let staticRouteValue = routeToUpdate[lazyRouteProperty];
        let isPropertyStaticallyDefined = staticRouteValue !== undefined && // This property isn't static since it should always be updated based
        // on the route updates
        lazyRouteProperty !== "hasErrorBoundary";
        $633b4c6f3df1e771$export$c0e02632e14916fd(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" ' + "defined but its lazy function is also returning a value for this property. " + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
        if (!isPropertyStaticallyDefined && !$633b4c6f3df1e771$var$immutableRouteKeys.has(lazyRouteProperty)) routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    } // Mutate the route with the provided updates.  Do this first so we pass
    // the updated version to mapRouteProperties
    Object.assign(routeToUpdate, routeUpdates); // Mutate the `hasErrorBoundary` property on the route based on the route
    // updates and remove the `lazy` function so we don't resolve the lazy
    // route again.
    Object.assign(routeToUpdate, $633b4c6f3df1e771$var$_extends({}, mapRouteProperties(routeToUpdate), {
        lazy: undefined
    }));
}
async function $633b4c6f3df1e771$var$callLoaderOrAction(type, request, match, matches, manifest, mapRouteProperties, basename, isStaticRequest, isRouteRequest, requestContext) {
    if (isStaticRequest === void 0) isStaticRequest = false;
    if (isRouteRequest === void 0) isRouteRequest = false;
    let resultType;
    let result;
    let onReject;
    let runHandler = (handler)=>{
        // Setup a promise we can race against so that abort signals short circuit
        let reject;
        let abortPromise = new Promise((_, r)=>reject = r);
        onReject = ()=>reject();
        request.signal.addEventListener("abort", onReject);
        return Promise.race([
            handler({
                request: request,
                params: match.params,
                context: requestContext
            }),
            abortPromise
        ]);
    };
    try {
        let handler = match.route[type];
        if (match.route.lazy) {
            if (handler) {
                // Run statically defined handler in parallel with lazy()
                let values = await Promise.all([
                    runHandler(handler),
                    $633b4c6f3df1e771$var$loadLazyRouteModule(match.route, mapRouteProperties, manifest)
                ]);
                result = values[0];
            } else {
                // Load lazy route module, then run any returned handler
                await $633b4c6f3df1e771$var$loadLazyRouteModule(match.route, mapRouteProperties, manifest);
                handler = match.route[type];
                if (handler) // Handler still run even if we got interrupted to maintain consistency
                // with un-abortable behavior of handler execution on non-lazy or
                // previously-lazy-loaded routes
                result = await runHandler(handler);
                else if (type === "action") {
                    let url = new URL(request.url);
                    let pathname = url.pathname + url.search;
                    throw $633b4c6f3df1e771$var$getInternalRouterError(405, {
                        method: request.method,
                        pathname: pathname,
                        routeId: match.route.id
                    });
                } else // lazy() route has no loader to run.  Short circuit here so we don't
                // hit the invariant below that errors on returning undefined.
                return {
                    type: $633b4c6f3df1e771$var$ResultType.data,
                    data: undefined
                };
            }
        } else if (!handler) {
            let url = new URL(request.url);
            let pathname = url.pathname + url.search;
            throw $633b4c6f3df1e771$var$getInternalRouterError(404, {
                pathname: pathname
            });
        } else result = await runHandler(handler);
        $633b4c6f3df1e771$export$3e9cee6b33872309(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
    } catch (e) {
        resultType = $633b4c6f3df1e771$var$ResultType.error;
        result = e;
    } finally{
        if (onReject) request.signal.removeEventListener("abort", onReject);
    }
    if ($633b4c6f3df1e771$var$isResponse(result)) {
        let status = result.status; // Process redirects
        if ($633b4c6f3df1e771$var$redirectStatusCodes.has(status)) {
            let location = result.headers.get("Location");
            $633b4c6f3df1e771$export$3e9cee6b33872309(location, "Redirects returned/thrown from loaders/actions must have a Location header"); // Support relative routing in internal redirects
            if (!$633b4c6f3df1e771$var$ABSOLUTE_URL_REGEX.test(location)) location = $633b4c6f3df1e771$var$normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match) + 1), basename, true, location);
            else if (!isStaticRequest) {
                // Strip off the protocol+origin for same-origin + same-basename absolute
                // redirects. If this is a static request, we can let it go back to the
                // browser as-is
                let currentUrl = new URL(request.url);
                let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
                let isSameBasename = $633b4c6f3df1e771$export$b69e3301ce081aa3(url.pathname, basename) != null;
                if (url.origin === currentUrl.origin && isSameBasename) location = url.pathname + url.search + url.hash;
            } // Don't process redirects in the router during static requests requests.
            // Instead, throw the Response and let the server handle it with an HTTP
            // redirect.  We also update the Location header in place in this flow so
            // basename and relative routing is taken into account
            if (isStaticRequest) {
                result.headers.set("Location", location);
                throw result;
            }
            return {
                type: $633b4c6f3df1e771$var$ResultType.redirect,
                status: status,
                location: location,
                revalidate: result.headers.get("X-Remix-Revalidate") !== null
            };
        } // For SSR single-route requests, we want to hand Responses back directly
        // without unwrapping.  We do this with the QueryRouteResponse wrapper
        // interface so we can know whether it was returned or thrown
        if (isRouteRequest) // eslint-disable-next-line no-throw-literal
        throw {
            type: resultType || $633b4c6f3df1e771$var$ResultType.data,
            response: result
        };
        let data;
        let contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
        // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
        if (contentType && /\bapplication\/json\b/.test(contentType)) data = await result.json();
        else data = await result.text();
        if (resultType === $633b4c6f3df1e771$var$ResultType.error) return {
            type: resultType,
            error: new $633b4c6f3df1e771$export$acf1a680051f5031(status, result.statusText, data),
            headers: result.headers
        };
        return {
            type: $633b4c6f3df1e771$var$ResultType.data,
            data: data,
            statusCode: result.status,
            headers: result.headers
        };
    }
    if (resultType === $633b4c6f3df1e771$var$ResultType.error) return {
        type: resultType,
        error: result
    };
    if ($633b4c6f3df1e771$export$fbcedacb60443473(result)) {
        var _result$init, _result$init2;
        return {
            type: $633b4c6f3df1e771$var$ResultType.deferred,
            deferredData: result,
            statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
            headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
        };
    }
    return {
        type: $633b4c6f3df1e771$var$ResultType.data,
        data: result
    };
} // Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function $633b4c6f3df1e771$var$createClientSideRequest(history, location, signal, submission) {
    let url = history.createURL($633b4c6f3df1e771$var$stripHashFromPath(location)).toString();
    let init = {
        signal: signal
    };
    if (submission && $633b4c6f3df1e771$var$isMutationMethod(submission.formMethod)) {
        let { formMethod: formMethod, formEncType: formEncType, formData: formData } = submission; // Didn't think we needed this but it turns out unlike other methods, patch
        // won't be properly normalized to uppercase and results in a 405 error.
        // See: https://fetch.spec.whatwg.org/#concept-method
        init.method = formMethod.toUpperCase();
        init.body = formEncType === "application/x-www-form-urlencoded" ? $633b4c6f3df1e771$var$convertFormDataToSearchParams(formData) : formData;
    } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
    return new Request(url, init);
}
function $633b4c6f3df1e771$var$convertFormDataToSearchParams(formData) {
    let searchParams = new URLSearchParams();
    for (let [key, value] of formData.entries())// https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, value instanceof File ? value.name : value);
    return searchParams;
}
function $633b4c6f3df1e771$var$processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
    // Fill in loaderData/errors from our loaders
    let loaderData = {};
    let errors = null;
    let statusCode;
    let foundError = false;
    let loaderHeaders = {}; // Process loader results into state.loaderData/state.errors
    results.forEach((result, index)=>{
        let id = matchesToLoad[index].route.id;
        $633b4c6f3df1e771$export$3e9cee6b33872309(!$633b4c6f3df1e771$var$isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if ($633b4c6f3df1e771$var$isErrorResult(result)) {
            // Look upwards from the matched route for the closest ancestor
            // error boundary, defaulting to the root match
            let boundaryMatch = $633b4c6f3df1e771$var$findNearestBoundary(matches, id);
            let error = result.error; // If we have a pending action error, we report it at the highest-route
            // that throws a loader error, and then clear it out to indicate that
            // it was consumed
            if (pendingError) {
                error = Object.values(pendingError)[0];
                pendingError = undefined;
            }
            errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary
            if (errors[boundaryMatch.route.id] == null) errors[boundaryMatch.route.id] = error;
             // Clear our any prior loaderData for the throwing route
            loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
            // prevent deeper status codes from overriding
            if (!foundError) {
                foundError = true;
                statusCode = $633b4c6f3df1e771$export$972111febbeef05b(result.error) ? result.error.status : 500;
            }
            if (result.headers) loaderHeaders[id] = result.headers;
        } else {
            if ($633b4c6f3df1e771$var$isDeferredResult(result)) {
                activeDeferreds.set(id, result.deferredData);
                loaderData[id] = result.deferredData.data;
            } else loaderData[id] = result.data;
             // Error status codes always override success status codes, but if all
            // loaders are successful we take the deepest status code.
            if (result.statusCode != null && result.statusCode !== 200 && !foundError) statusCode = result.statusCode;
            if (result.headers) loaderHeaders[id] = result.headers;
        }
    }); // If we didn't consume the pending action error (i.e., all loaders
    // resolved), then consume it here.  Also clear out any loaderData for the
    // throwing route
    if (pendingError) {
        errors = pendingError;
        loaderData[Object.keys(pendingError)[0]] = undefined;
    }
    return {
        loaderData: loaderData,
        errors: errors,
        statusCode: statusCode || 200,
        loaderHeaders: loaderHeaders
    };
}
function $633b4c6f3df1e771$var$processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
    let { loaderData: loaderData, errors: errors } = $633b4c6f3df1e771$var$processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds); // Process results from our revalidating fetchers
    for(let index = 0; index < revalidatingFetchers.length; index++){
        let { key: key, match: match, controller: controller } = revalidatingFetchers[index];
        $633b4c6f3df1e771$export$3e9cee6b33872309(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
        let result = fetcherResults[index]; // Process fetcher non-redirect errors
        if (controller && controller.signal.aborted) continue;
        else if ($633b4c6f3df1e771$var$isErrorResult(result)) {
            let boundaryMatch = $633b4c6f3df1e771$var$findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) errors = $633b4c6f3df1e771$var$_extends({}, errors, {
                [boundaryMatch.route.id]: result.error
            });
            state.fetchers.delete(key);
        } else if ($633b4c6f3df1e771$var$isRedirectResult(result)) // Should never get here, redirects should get processed above, but we
        // keep this to type narrow to a success result in the else
        $633b4c6f3df1e771$export$3e9cee6b33872309(false, "Unhandled fetcher revalidation redirect");
        else if ($633b4c6f3df1e771$var$isDeferredResult(result)) // Should never get here, deferred data should be awaited for fetchers
        // in resolveDeferredResults
        $633b4c6f3df1e771$export$3e9cee6b33872309(false, "Unhandled fetcher deferred data");
        else {
            let doneFetcher = {
                state: "idle",
                data: result.data,
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined,
                " _hasFetcherDoneAnything ": true
            };
            state.fetchers.set(key, doneFetcher);
        }
    }
    return {
        loaderData: loaderData,
        errors: errors
    };
}
function $633b4c6f3df1e771$var$mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    let mergedLoaderData = $633b4c6f3df1e771$var$_extends({}, newLoaderData);
    for (let match of matches){
        let id = match.route.id;
        if (newLoaderData.hasOwnProperty(id)) {
            if (newLoaderData[id] !== undefined) mergedLoaderData[id] = newLoaderData[id];
        } else if (loaderData[id] !== undefined && match.route.loader) // Preserve existing keys not included in newLoaderData and where a loader
        // wasn't removed by HMR
        mergedLoaderData[id] = loaderData[id];
        if (errors && errors.hasOwnProperty(id)) break;
    }
    return mergedLoaderData;
} // Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function $633b4c6f3df1e771$var$findNearestBoundary(matches, routeId) {
    let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1) : [
        ...matches
    ];
    return eligibleMatches.reverse().find((m)=>m.route.hasErrorBoundary === true) || matches[0];
}
function $633b4c6f3df1e771$var$getShortCircuitMatches(routes) {
    // Prefer a root layout route if present, otherwise shim in a route object
    let route = routes.find((r)=>r.index || !r.path || r.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route: route
            }
        ],
        route: route
    };
}
function $633b4c6f3df1e771$var$getInternalRouterError(status, _temp4) {
    let { pathname: pathname, routeId: routeId, method: method, type: type } = _temp4 === void 0 ? {} : _temp4;
    let statusText = "Unknown Server Error";
    let errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        else if (type === "defer-action") errorMessage = "defer() is not supported in actions";
    } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
    } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = 'No route matches URL "' + pathname + '"';
    } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
        else if (method) errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
    }
    return new $633b4c6f3df1e771$export$acf1a680051f5031(status || 500, statusText, new Error(errorMessage), true);
} // Find any returned redirect errors, starting from the lowest match
function $633b4c6f3df1e771$var$findRedirect(results) {
    for(let i = results.length - 1; i >= 0; i--){
        let result = results[i];
        if ($633b4c6f3df1e771$var$isRedirectResult(result)) return result;
    }
}
function $633b4c6f3df1e771$var$stripHashFromPath(path) {
    let parsedPath = typeof path === "string" ? $633b4c6f3df1e771$export$8ccf933b0513f8d0(path) : path;
    return $633b4c6f3df1e771$export$fe53371bee54353d($633b4c6f3df1e771$var$_extends({}, parsedPath, {
        hash: ""
    }));
}
function $633b4c6f3df1e771$var$isHashChangeOnly(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
}
function $633b4c6f3df1e771$var$isDeferredResult(result) {
    return result.type === $633b4c6f3df1e771$var$ResultType.deferred;
}
function $633b4c6f3df1e771$var$isErrorResult(result) {
    return result.type === $633b4c6f3df1e771$var$ResultType.error;
}
function $633b4c6f3df1e771$var$isRedirectResult(result) {
    return (result && result.type) === $633b4c6f3df1e771$var$ResultType.redirect;
}
function $633b4c6f3df1e771$export$fbcedacb60443473(value) {
    let deferred = value;
    return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function $633b4c6f3df1e771$var$isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function $633b4c6f3df1e771$var$isRedirectResponse(result) {
    if (!$633b4c6f3df1e771$var$isResponse(result)) return false;
    let status = result.status;
    let location = result.headers.get("Location");
    return status >= 300 && status <= 399 && location != null;
}
function $633b4c6f3df1e771$var$isQueryRouteResponse(obj) {
    return obj && $633b4c6f3df1e771$var$isResponse(obj.response) && (obj.type === $633b4c6f3df1e771$var$ResultType.data || $633b4c6f3df1e771$var$ResultType.error);
}
function $633b4c6f3df1e771$var$isValidMethod(method) {
    return $633b4c6f3df1e771$var$validRequestMethods.has(method.toLowerCase());
}
function $633b4c6f3df1e771$var$isMutationMethod(method) {
    return $633b4c6f3df1e771$var$validMutationMethods.has(method.toLowerCase());
}
async function $633b4c6f3df1e771$var$resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
    for(let index = 0; index < results.length; index++){
        let result = results[index];
        let match = matchesToLoad[index]; // If we don't have a match, then we can have a deferred result to do
        // anything with.  This is for revalidating fetchers where the route was
        // removed during HMR
        if (!match) continue;
        let currentMatch = currentMatches.find((m)=>m.route.id === match.route.id);
        let isRevalidatingLoader = currentMatch != null && !$633b4c6f3df1e771$var$isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
        if ($633b4c6f3df1e771$var$isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
            // Note: we do not have to touch activeDeferreds here since we race them
            // against the signal in resolveDeferredData and they'll get aborted
            // there if needed
            let signal = signals[index];
            $633b4c6f3df1e771$export$3e9cee6b33872309(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
            await $633b4c6f3df1e771$var$resolveDeferredData(result, signal, isFetcher).then((result)=>{
                if (result) results[index] = result || results[index];
            });
        }
    }
}
async function $633b4c6f3df1e771$var$resolveDeferredData(result, signal, unwrap) {
    if (unwrap === void 0) unwrap = false;
    let aborted = await result.deferredData.resolveData(signal);
    if (aborted) return;
    if (unwrap) try {
        return {
            type: $633b4c6f3df1e771$var$ResultType.data,
            data: result.deferredData.unwrappedData
        };
    } catch (e) {
        // Handle any TrackedPromise._error values encountered while unwrapping
        return {
            type: $633b4c6f3df1e771$var$ResultType.error,
            error: e
        };
    }
    return {
        type: $633b4c6f3df1e771$var$ResultType.data,
        data: result.deferredData.data
    };
}
function $633b4c6f3df1e771$var$hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some((v)=>v === "");
} // Note: This should match the format exported by useMatches, so if you change
// this please also change that :)  Eventually we'll DRY this up
function $633b4c6f3df1e771$var$createUseMatchesMatch(match, loaderData) {
    let { route: route, pathname: pathname, params: params } = match;
    return {
        id: route.id,
        pathname: pathname,
        params: params,
        data: loaderData[route.id],
        handle: route.handle
    };
}
function $633b4c6f3df1e771$var$getTargetMatch(matches, location) {
    let search = typeof location === "string" ? $633b4c6f3df1e771$export$8ccf933b0513f8d0(location).search : location.search;
    if (matches[matches.length - 1].route.index && $633b4c6f3df1e771$var$hasNakedIndexQuery(search || "")) // Return the leaf index route when index is present
    return matches[matches.length - 1];
     // Otherwise grab the deepest "path contributing" match (ignoring index and
    // pathless layout routes)
    let pathMatches = $633b4c6f3df1e771$export$90ba53ce1c7fdff2(matches);
    return pathMatches[pathMatches.length - 1];
} //#endregion

/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 
var $an5iK = parcelRequire("an5iK");

function $43f86cbc51c03ccf$var$_extends() {
    $43f86cbc51c03ccf$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $43f86cbc51c03ccf$var$_extends.apply(this, arguments);
}
const $43f86cbc51c03ccf$export$3add0d5dce533e2e = /*#__PURE__*/ $an5iK.createContext(null);
const $43f86cbc51c03ccf$export$145dfa71566a64dc = /*#__PURE__*/ $an5iK.createContext(null);
const $43f86cbc51c03ccf$var$AwaitContext = /*#__PURE__*/ $an5iK.createContext(null);
const $43f86cbc51c03ccf$export$26749e8557646306 = /*#__PURE__*/ $an5iK.createContext(null);
const $43f86cbc51c03ccf$export$c7914228fb69b0f5 = /*#__PURE__*/ $an5iK.createContext(null);
const $43f86cbc51c03ccf$export$9072aa6dd1f93057 = /*#__PURE__*/ $an5iK.createContext({
    outlet: null,
    matches: []
});
const $43f86cbc51c03ccf$var$RouteErrorContext = /*#__PURE__*/ $an5iK.createContext(null);
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */ function $43f86cbc51c03ccf$export$b66bb29c5006f12f(to, _temp) {
    let { relative: relative } = _temp === void 0 ? {} : _temp;
    !$43f86cbc51c03ccf$export$9c954a9d03d32f4a() && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    let { basename: basename, navigator: navigator } = $an5iK.useContext($43f86cbc51c03ccf$export$26749e8557646306);
    let { hash: hash, pathname: pathname, search: search } = $43f86cbc51c03ccf$export$e75d2a2d1b3c245b(to, {
        relative: relative
    });
    let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") joinedPathname = pathname === "/" ? basename : (0, $633b4c6f3df1e771$export$86d9a7913e44197e)([
        basename,
        pathname
    ]);
    return navigator.createHref({
        pathname: joinedPathname,
        search: search,
        hash: hash
    });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */ function $43f86cbc51c03ccf$export$9c954a9d03d32f4a() {
    return $an5iK.useContext($43f86cbc51c03ccf$export$c7914228fb69b0f5) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */ function $43f86cbc51c03ccf$export$45d76561a5302f2b() {
    !$43f86cbc51c03ccf$export$9c954a9d03d32f4a() && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    return $an5iK.useContext($43f86cbc51c03ccf$export$c7914228fb69b0f5).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */ function $43f86cbc51c03ccf$export$1b3f31771c5d07c() {
    return $an5iK.useContext($43f86cbc51c03ccf$export$c7914228fb69b0f5).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */ function $43f86cbc51c03ccf$export$6c330e8992e8a295(pattern) {
    !$43f86cbc51c03ccf$export$9c954a9d03d32f4a() && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    let { pathname: pathname } = $43f86cbc51c03ccf$export$45d76561a5302f2b();
    return $an5iK.useMemo(()=>(0, $633b4c6f3df1e771$export$81336c211d5ff295)(pattern, pathname), [
        pathname,
        pattern
    ]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */ const $43f86cbc51c03ccf$var$navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when your component is first rendered."; // Mute warnings for calls to useNavigate in SSR environments
function $43f86cbc51c03ccf$var$useIsomorphicLayoutEffect(cb) {
    let isStatic = $an5iK.useContext($43f86cbc51c03ccf$export$26749e8557646306).static;
    if (!isStatic) // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    $an5iK.useLayoutEffect(cb);
}
/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */ function $43f86cbc51c03ccf$export$9770f232ac06a008() {
    let isDataRouter = $an5iK.useContext($43f86cbc51c03ccf$export$3add0d5dce533e2e) != null; // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRouter ? $43f86cbc51c03ccf$var$useNavigateStable() : $43f86cbc51c03ccf$var$useNavigateUnstable();
}
function $43f86cbc51c03ccf$var$useNavigateUnstable() {
    !$43f86cbc51c03ccf$export$9c954a9d03d32f4a() && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    let { basename: basename, navigator: navigator } = $an5iK.useContext($43f86cbc51c03ccf$export$26749e8557646306);
    let { matches: matches } = $an5iK.useContext($43f86cbc51c03ccf$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $43f86cbc51c03ccf$export$45d76561a5302f2b();
    let routePathnamesJson = JSON.stringify((0, $633b4c6f3df1e771$export$90ba53ce1c7fdff2)(matches).map((match)=>match.pathnameBase));
    let activeRef = $an5iK.useRef(false);
    $43f86cbc51c03ccf$var$useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = $an5iK.useCallback(function(to, options) {
        if (options === void 0) options = {};
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        let path = (0, $633b4c6f3df1e771$export$cae722b0cc860f13)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history.  If this is a root navigation, then we
        // navigate to the raw basename which allows the basename to have full
        // control over the presence of a trailing slash on root links
        if (basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, $633b4c6f3df1e771$export$86d9a7913e44197e)([
            basename,
            path.pathname
        ]);
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname
    ]);
    return navigate;
}
const $43f86cbc51c03ccf$var$OutletContext = /*#__PURE__*/ $an5iK.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */ function $43f86cbc51c03ccf$export$4138103a3ae699cc() {
    return $an5iK.useContext($43f86cbc51c03ccf$var$OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */ function $43f86cbc51c03ccf$export$a3be3530d8e40d0b(context) {
    let outlet = $an5iK.useContext($43f86cbc51c03ccf$export$9072aa6dd1f93057).outlet;
    if (outlet) return /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$var$OutletContext.Provider, {
        value: context
    }, outlet);
    return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */ function $43f86cbc51c03ccf$export$99eaa27ddbbb95ef() {
    let { matches: matches } = $an5iK.useContext($43f86cbc51c03ccf$export$9072aa6dd1f93057);
    let routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function $43f86cbc51c03ccf$export$e75d2a2d1b3c245b(to, _temp2) {
    let { relative: relative } = _temp2 === void 0 ? {} : _temp2;
    let { matches: matches } = $an5iK.useContext($43f86cbc51c03ccf$export$9072aa6dd1f93057);
    let { pathname: locationPathname } = $43f86cbc51c03ccf$export$45d76561a5302f2b();
    let routePathnamesJson = JSON.stringify((0, $633b4c6f3df1e771$export$90ba53ce1c7fdff2)(matches).map((match)=>match.pathnameBase));
    return $an5iK.useMemo(()=>(0, $633b4c6f3df1e771$export$cae722b0cc860f13)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */ function $43f86cbc51c03ccf$export$5d3fca4a98652595(routes, locationArg) {
    return $43f86cbc51c03ccf$export$5fcee62552a12fbf(routes, locationArg);
} // Internal implementation with accept optional param for RouterProvider usage
function $43f86cbc51c03ccf$export$5fcee62552a12fbf(routes, locationArg, dataRouterState) {
    !$43f86cbc51c03ccf$export$9c954a9d03d32f4a() && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    let { navigator: navigator } = $an5iK.useContext($43f86cbc51c03ccf$export$26749e8557646306);
    let { matches: parentMatches } = $an5iK.useContext($43f86cbc51c03ccf$export$9072aa6dd1f93057);
    let routeMatch = parentMatches[parentMatches.length - 1];
    let parentParams = routeMatch ? routeMatch.params : {};
    let parentPathname = routeMatch ? routeMatch.pathname : "/";
    let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    let parentRoute = routeMatch && routeMatch.route;
    let locationFromContext = $43f86cbc51c03ccf$export$45d76561a5302f2b();
    let location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        let parsedLocationArg = typeof locationArg === "string" ? (0, $633b4c6f3df1e771$export$8ccf933b0513f8d0)(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
        location = parsedLocationArg;
    } else location = locationFromContext;
    let pathname = location.pathname || "/";
    let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
    let matches = (0, $633b4c6f3df1e771$export$2708184779ceb39d)(routes, {
        pathname: remainingPathname
    });
    let renderedMatches = $43f86cbc51c03ccf$var$_renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0, $633b4c6f3df1e771$export$86d9a7913e44197e)([
                parentPathnameBase,
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, $633b4c6f3df1e771$export$86d9a7913e44197e)([
                parentPathnameBase,
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        })), parentMatches, dataRouterState); // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) return /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$export$c7914228fb69b0f5.Provider, {
        value: {
            location: $43f86cbc51c03ccf$var$_extends({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, location),
            navigationType: (0, $633b4c6f3df1e771$export$e19cd5f9376f8cee).Pop
        }
    }, renderedMatches);
    return renderedMatches;
}
function $43f86cbc51c03ccf$var$DefaultErrorComponent() {
    let error = $43f86cbc51c03ccf$export$ed527bf60f6e05f2();
    let message = (0, $633b4c6f3df1e771$export$972111febbeef05b)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    let stack = error instanceof Error ? error.stack : null;
    let lightgrey = "rgba(200,200,200, 0.5)";
    let preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    let codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    let devInfo = null;
    return /*#__PURE__*/ $an5iK.createElement($an5iK.Fragment, null, /*#__PURE__*/ $an5iK.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ $an5iK.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ $an5iK.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
const $43f86cbc51c03ccf$var$defaultErrorElement = /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$var$DefaultErrorComponent, null);
class $43f86cbc51c03ccf$var$RenderErrorBoundary extends $an5iK.Component {
    constructor(props){
        super(props);
        this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    static getDerivedStateFromProps(props, state) {
        // When we get into an error state, the user will likely click "back" to the
        // previous page that didn't have an error. Because this wraps the entire
        // application, that will have no effect--the error page continues to display.
        // This gives us a mechanism to recover from the error when the location changes.
        //
        // Whether we're in an error state or not, we update the location in state
        // so that when we are in an error state, it gets reset when a new location
        // comes in and the user recovers from the error.
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
            error: props.error,
            location: props.location,
            revalidation: props.revalidation
        };
         // If we're not changing locations, preserve the location but still surface
        // any new errors that may come through. We retain the existing error, we do
        // this because the error provided from the app state may be cleared without
        // the location changing.
        return {
            error: props.error || state.error,
            location: state.location,
            revalidation: props.revalidation || state.revalidation
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
        return this.state.error ? /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$export$9072aa6dd1f93057.Provider, {
            value: this.props.routeContext
        }, /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$var$RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children;
    }
}
function $43f86cbc51c03ccf$var$RenderedRoute(_ref) {
    let { routeContext: routeContext, match: match, children: children } = _ref;
    let dataRouterContext = $an5iK.useContext($43f86cbc51c03ccf$export$3add0d5dce533e2e); // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    return /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$export$9072aa6dd1f93057.Provider, {
        value: routeContext
    }, children);
}
function $43f86cbc51c03ccf$var$_renderMatches(matches, parentMatches, dataRouterState) {
    var _dataRouterState2;
    if (parentMatches === void 0) parentMatches = [];
    if (dataRouterState === void 0) dataRouterState = null;
    if (matches == null) {
        var _dataRouterState;
        if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) // Don't bail if we have data router errors so we can render them in the
        // boundary.  Use the pre-matched (or shimmed) matches
        matches = dataRouterState.matches;
        else return null;
    }
    let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary
    let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
    if (errors != null) {
        let errorIndex = renderedMatches.findIndex((m)=>m.route.id && (errors == null ? void 0 : errors[m.route.id]));
        !(errorIndex >= 0) && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    return renderedMatches.reduceRight((outlet, match, index)=>{
        let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors
        let errorElement = null;
        if (dataRouterState) errorElement = match.route.errorElement || $43f86cbc51c03ccf$var$defaultErrorElement;
        let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
        let getChildren = ()=>{
            let children;
            if (error) children = errorElement;
            else if (match.route.element) children = match.route.element;
            else children = outlet;
            return /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$var$RenderedRoute, {
                match: match,
                routeContext: {
                    outlet: outlet,
                    matches: matches
                },
                children: children
            });
        }; // Only wrap in an error boundary within data router usages when we have an
        // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
        // an ancestor ErrorBoundary/errorElement
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$var$RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches: matches
            }
        }) : getChildren();
    }, null);
}
var $43f86cbc51c03ccf$var$DataRouterHook;
(function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
})($43f86cbc51c03ccf$var$DataRouterHook || ($43f86cbc51c03ccf$var$DataRouterHook = {}));
var $43f86cbc51c03ccf$var$DataRouterStateHook;
(function(DataRouterStateHook) {
    DataRouterStateHook["UseBlocker"] = "useBlocker";
    DataRouterStateHook["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook["UseActionData"] = "useActionData";
    DataRouterStateHook["UseRouteError"] = "useRouteError";
    DataRouterStateHook["UseNavigation"] = "useNavigation";
    DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook["UseMatches"] = "useMatches";
    DataRouterStateHook["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook["UseRouteId"] = "useRouteId";
})($43f86cbc51c03ccf$var$DataRouterStateHook || ($43f86cbc51c03ccf$var$DataRouterStateHook = {}));
function $43f86cbc51c03ccf$var$getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function $43f86cbc51c03ccf$var$useDataRouterContext(hookName) {
    let ctx = $an5iK.useContext($43f86cbc51c03ccf$export$3add0d5dce533e2e);
    !ctx && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    return ctx;
}
function $43f86cbc51c03ccf$var$useDataRouterState(hookName) {
    let state = $an5iK.useContext($43f86cbc51c03ccf$export$145dfa71566a64dc);
    !state && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    return state;
}
function $43f86cbc51c03ccf$var$useRouteContext(hookName) {
    let route = $an5iK.useContext($43f86cbc51c03ccf$export$9072aa6dd1f93057);
    !route && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    return route;
} // Internal version with hookName-aware debugging
function $43f86cbc51c03ccf$var$useCurrentRouteId(hookName) {
    let route = $43f86cbc51c03ccf$var$useRouteContext(hookName);
    let thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */ function $43f86cbc51c03ccf$export$5fc8298006ad9e58() {
    return $43f86cbc51c03ccf$var$useCurrentRouteId($43f86cbc51c03ccf$var$DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function $43f86cbc51c03ccf$export$d0fd4b7106de2769() {
    let state = $43f86cbc51c03ccf$var$useDataRouterState($43f86cbc51c03ccf$var$DataRouterStateHook.UseNavigation);
    return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function $43f86cbc51c03ccf$export$600dc272ed516c15() {
    let dataRouterContext = $43f86cbc51c03ccf$var$useDataRouterContext($43f86cbc51c03ccf$var$DataRouterHook.UseRevalidator);
    let state = $43f86cbc51c03ccf$var$useDataRouterState($43f86cbc51c03ccf$var$DataRouterStateHook.UseRevalidator);
    return {
        revalidate: dataRouterContext.router.revalidate,
        state: state.revalidation
    };
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */ function $43f86cbc51c03ccf$export$2378eb7f5ff86053() {
    let { matches: matches, loaderData: loaderData } = $43f86cbc51c03ccf$var$useDataRouterState($43f86cbc51c03ccf$var$DataRouterStateHook.UseMatches);
    return $an5iK.useMemo(()=>matches.map((match)=>{
            let { pathname: pathname, params: params } = match; // Note: This structure matches that created by createUseMatchesMatch
            // in the @remix-run/router , so if you change this please also change
            // that :)  Eventually we'll DRY this up
            return {
                id: match.route.id,
                pathname: pathname,
                params: params,
                data: loaderData[match.route.id],
                handle: match.route.handle
            };
        }), [
        matches,
        loaderData
    ]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function $43f86cbc51c03ccf$export$1448a5050d252c4d() {
    let state = $43f86cbc51c03ccf$var$useDataRouterState($43f86cbc51c03ccf$var$DataRouterStateHook.UseLoaderData);
    let routeId = $43f86cbc51c03ccf$var$useCurrentRouteId($43f86cbc51c03ccf$var$DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */ function $43f86cbc51c03ccf$export$fd5d37484eab868d(routeId) {
    let state = $43f86cbc51c03ccf$var$useDataRouterState($43f86cbc51c03ccf$var$DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */ function $43f86cbc51c03ccf$export$fdc00f3f26066d5e() {
    let state = $43f86cbc51c03ccf$var$useDataRouterState($43f86cbc51c03ccf$var$DataRouterStateHook.UseActionData);
    let route = $an5iK.useContext($43f86cbc51c03ccf$export$9072aa6dd1f93057);
    !route && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function $43f86cbc51c03ccf$export$ed527bf60f6e05f2() {
    var _state$errors;
    let error = $an5iK.useContext($43f86cbc51c03ccf$var$RouteErrorContext);
    let state = $43f86cbc51c03ccf$var$useDataRouterState($43f86cbc51c03ccf$var$DataRouterStateHook.UseRouteError);
    let routeId = $43f86cbc51c03ccf$var$useCurrentRouteId($43f86cbc51c03ccf$var$DataRouterStateHook.UseRouteError); // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error) return error;
     // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */ function $43f86cbc51c03ccf$export$78a72ddb39bdd145() {
    let value = $an5iK.useContext($43f86cbc51c03ccf$var$AwaitContext);
    return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */ function $43f86cbc51c03ccf$export$17f53340677d5831() {
    let value = $an5iK.useContext($43f86cbc51c03ccf$var$AwaitContext);
    return value == null ? void 0 : value._error;
}
let $43f86cbc51c03ccf$var$blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function $43f86cbc51c03ccf$export$2af03a1de5c0910(shouldBlock) {
    let { router: router } = $43f86cbc51c03ccf$var$useDataRouterContext($43f86cbc51c03ccf$var$DataRouterHook.UseBlocker);
    let state = $43f86cbc51c03ccf$var$useDataRouterState($43f86cbc51c03ccf$var$DataRouterStateHook.UseBlocker);
    let [blockerKey] = $an5iK.useState(()=>String(++$43f86cbc51c03ccf$var$blockerId));
    let blockerFunction = $an5iK.useCallback((args)=>{
        return typeof shouldBlock === "function" ? !!shouldBlock(args) : !!shouldBlock;
    }, [
        shouldBlock
    ]);
    let blocker = router.getBlocker(blockerKey, blockerFunction); // Cleanup on unmount
    $an5iK.useEffect(()=>()=>router.deleteBlocker(blockerKey), [
        router,
        blockerKey
    ]); // Prefer the blocker from state since DataRouterContext is memoized so this
    // ensures we update on blocker state updates
    return state.blockers.get(blockerKey) || blocker;
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function $43f86cbc51c03ccf$var$useNavigateStable() {
    let { router: router } = $43f86cbc51c03ccf$var$useDataRouterContext($43f86cbc51c03ccf$var$DataRouterHook.UseNavigateStable);
    let id = $43f86cbc51c03ccf$var$useCurrentRouteId($43f86cbc51c03ccf$var$DataRouterStateHook.UseNavigateStable);
    let activeRef = $an5iK.useRef(false);
    $43f86cbc51c03ccf$var$useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    let navigate = $an5iK.useCallback(function(to, options) {
        if (options === void 0) options = {};
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") router.navigate(to);
        else router.navigate(to, $43f86cbc51c03ccf$var$_extends({
            fromRouteId: id
        }, options));
    }, [
        router,
        id
    ]);
    return navigate;
}
const $43f86cbc51c03ccf$var$alreadyWarned = {};
function $43f86cbc51c03ccf$var$warningOnce(key, cond, message) {
    if (!cond && !$43f86cbc51c03ccf$var$alreadyWarned[key]) $43f86cbc51c03ccf$var$alreadyWarned[key] = true;
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function $43f86cbc51c03ccf$export$323e4fc2fa4753fb(_ref) {
    let { fallbackElement: fallbackElement, router: router } = _ref;
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    let [state, setState] = $an5iK.useState(router.state);
    $an5iK.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    let navigator = $an5iK.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state: state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    let basename = router.basename || "/";
    let dataRouterContext = $an5iK.useMemo(()=>({
            router: router,
            navigator: navigator,
            static: false,
            basename: basename
        }), [
        router,
        navigator,
        basename
    ]); // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ $an5iK.createElement($an5iK.Fragment, null, /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$export$3add0d5dce533e2e.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$export$145dfa71566a64dc.Provider, {
        value: state
    }, /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$export$55185c17a0fcbe46, {
        basename: router.basename,
        location: router.state.location,
        navigationType: router.state.historyAction,
        navigator: navigator
    }, router.state.initialized ? /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$var$DataRoutes, {
        routes: router.routes,
        state: state
    }) : fallbackElement))), null);
}
function $43f86cbc51c03ccf$var$DataRoutes(_ref2) {
    let { routes: routes, state: state } = _ref2;
    return $43f86cbc51c03ccf$export$5fcee62552a12fbf(routes, undefined, state);
}
/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */ function $43f86cbc51c03ccf$export$ae46f04cfaffe093(_ref3) {
    let { basename: basename, children: children, initialEntries: initialEntries, initialIndex: initialIndex } = _ref3;
    let historyRef = $an5iK.useRef();
    if (historyRef.current == null) historyRef.current = (0, $633b4c6f3df1e771$export$2b76ad033c6e6d08)({
        initialEntries: initialEntries,
        initialIndex: initialIndex,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setState] = $an5iK.useState({
        action: history.action,
        location: history.location
    });
    $an5iK.useLayoutEffect(()=>history.listen(setState), [
        history
    ]);
    return /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$export$55185c17a0fcbe46, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */ function $43f86cbc51c03ccf$export$444b3ab0cb9aec40(_ref4) {
    let { to: to, replace: replace, state: state, relative: relative } = _ref4;
    !$43f86cbc51c03ccf$export$9c954a9d03d32f4a() && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    let dataRouterState = $an5iK.useContext($43f86cbc51c03ccf$export$145dfa71566a64dc);
    let navigate = $43f86cbc51c03ccf$export$9770f232ac06a008();
    $an5iK.useEffect(()=>{
        // Avoid kicking off multiple navigations if we're in the middle of a
        // data-router navigation, since components get re-rendered when we enter
        // a submitting/loading state
        if (dataRouterState && dataRouterState.navigation.state !== "idle") return;
        navigate(to, {
            replace: replace,
            state: state,
            relative: relative
        });
    });
    return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */ function $43f86cbc51c03ccf$export$910ae8079b2c2852(props) {
    return $43f86cbc51c03ccf$export$a3be3530d8e40d0b(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */ function $43f86cbc51c03ccf$export$e7b0ac011bb776c6(_props) {
    (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function $43f86cbc51c03ccf$export$55185c17a0fcbe46(_ref5) {
    let { basename: basenameProp = "/", children: children = null, location: locationProp, navigationType: navigationType = (0, $633b4c6f3df1e771$export$e19cd5f9376f8cee).Pop, navigator: navigator, static: staticProp = false } = _ref5;
    !!$43f86cbc51c03ccf$export$9c954a9d03d32f4a() && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false); // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    let basename = basenameProp.replace(/^\/*/, "/");
    let navigationContext = $an5iK.useMemo(()=>({
            basename: basename,
            navigator: navigator,
            static: staticProp
        }), [
        basename,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") locationProp = (0, $633b4c6f3df1e771$export$8ccf933b0513f8d0)(locationProp);
    let { pathname: pathname = "/", search: search = "", hash: hash = "", state: state = null, key: key = "default" } = locationProp;
    let locationContext = $an5iK.useMemo(()=>{
        let trailingPathname = (0, $633b4c6f3df1e771$export$b69e3301ce081aa3)(pathname, basename);
        if (trailingPathname == null) return null;
        return {
            location: {
                pathname: trailingPathname,
                search: search,
                hash: hash,
                state: state,
                key: key
            },
            navigationType: navigationType
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
    if (locationContext == null) return null;
    return /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$export$26749e8557646306.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$export$c7914228fb69b0f5.Provider, {
        children: children,
        value: locationContext
    }));
}
/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */ function $43f86cbc51c03ccf$export$3565eb3d00ca5a74(_ref6) {
    let { children: children, location: location } = _ref6;
    return $43f86cbc51c03ccf$export$5d3fca4a98652595($43f86cbc51c03ccf$export$16da398f5434bdec(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function $43f86cbc51c03ccf$export$6ddabde395c8c576(_ref7) {
    let { children: children, errorElement: errorElement, resolve: resolve } = _ref7;
    return /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$var$AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$var$ResolveAwait, null, children));
}
var $43f86cbc51c03ccf$var$AwaitRenderStatus;
(function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})($43f86cbc51c03ccf$var$AwaitRenderStatus || ($43f86cbc51c03ccf$var$AwaitRenderStatus = {}));
const $43f86cbc51c03ccf$var$neverSettledPromise = new Promise(()=>{});
class $43f86cbc51c03ccf$var$AwaitErrorBoundary extends $an5iK.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("<Await> caught the following error during render", error, errorInfo);
    }
    render() {
        let { children: children, errorElement: errorElement, resolve: resolve } = this.props;
        let promise = null;
        let status = $43f86cbc51c03ccf$var$AwaitRenderStatus.pending;
        if (!(resolve instanceof Promise)) {
            // Didn't get a promise - provide as a resolved promise
            status = $43f86cbc51c03ccf$var$AwaitRenderStatus.success;
            promise = Promise.resolve();
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_data", {
                get: ()=>resolve
            });
        } else if (this.state.error) {
            // Caught a render error, provide it as a rejected promise
            status = $43f86cbc51c03ccf$var$AwaitRenderStatus.error;
            let renderError = this.state.error;
            promise = Promise.reject().catch(()=>{}); // Avoid unhandled rejection warnings
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_error", {
                get: ()=>renderError
            });
        } else if (resolve._tracked) {
            // Already tracked promise - check contents
            promise = resolve;
            status = promise._error !== undefined ? $43f86cbc51c03ccf$var$AwaitRenderStatus.error : promise._data !== undefined ? $43f86cbc51c03ccf$var$AwaitRenderStatus.success : $43f86cbc51c03ccf$var$AwaitRenderStatus.pending;
        } else {
            // Raw (untracked) promise - track it
            status = $43f86cbc51c03ccf$var$AwaitRenderStatus.pending;
            Object.defineProperty(resolve, "_tracked", {
                get: ()=>true
            });
            promise = resolve.then((data)=>Object.defineProperty(resolve, "_data", {
                    get: ()=>data
                }), (error)=>Object.defineProperty(resolve, "_error", {
                    get: ()=>error
                }));
        }
        if (status === $43f86cbc51c03ccf$var$AwaitRenderStatus.error && promise._error instanceof (0, $633b4c6f3df1e771$export$42a99a7a4bc0e76a)) // Freeze the UI by throwing a never resolved promise
        throw $43f86cbc51c03ccf$var$neverSettledPromise;
        if (status === $43f86cbc51c03ccf$var$AwaitRenderStatus.error && !errorElement) // No errorElement, throw to the nearest route-level error boundary
        throw promise._error;
        if (status === $43f86cbc51c03ccf$var$AwaitRenderStatus.error) // Render via our errorElement
        return /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$var$AwaitContext.Provider, {
            value: promise,
            children: errorElement
        });
        if (status === $43f86cbc51c03ccf$var$AwaitRenderStatus.success) // Render children with resolved value
        return /*#__PURE__*/ $an5iK.createElement($43f86cbc51c03ccf$var$AwaitContext.Provider, {
            value: promise,
            children: children
        });
         // Throw to the suspense boundary
        throw promise;
    }
}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */ function $43f86cbc51c03ccf$var$ResolveAwait(_ref8) {
    let { children: children } = _ref8;
    let data = $43f86cbc51c03ccf$export$78a72ddb39bdd145();
    let toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ $an5iK.createElement($an5iK.Fragment, null, toRender);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */ function $43f86cbc51c03ccf$export$16da398f5434bdec(children, parentPath) {
    if (parentPath === void 0) parentPath = [];
    let routes = [];
    $an5iK.Children.forEach(children, (element, index)=>{
        if (!/*#__PURE__*/ $an5iK.isValidElement(element)) // Ignore non-elements. This allows people to more easily inline
        // conditionals in their route config.
        return;
        let treePath = [
            ...parentPath,
            index
        ];
        if (element.type === $an5iK.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, $43f86cbc51c03ccf$export$16da398f5434bdec(element.props.children, treePath));
            return;
        }
        !(element.type === $43f86cbc51c03ccf$export$e7b0ac011bb776c6) && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
        !(!element.props.index || !element.props.children) && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
        let route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) route.children = $43f86cbc51c03ccf$export$16da398f5434bdec(element.props.children, treePath);
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function $43f86cbc51c03ccf$export$daf73786167a7f72(matches) {
    return $43f86cbc51c03ccf$var$_renderMatches(matches);
}
function $43f86cbc51c03ccf$export$52b333d321859367(route) {
    let updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) Object.assign(updates, {
        element: /*#__PURE__*/ $an5iK.createElement(route.Component),
        Component: undefined
    });
    if (route.ErrorBoundary) Object.assign(updates, {
        errorElement: /*#__PURE__*/ $an5iK.createElement(route.ErrorBoundary),
        ErrorBoundary: undefined
    });
    return updates;
}
function $43f86cbc51c03ccf$export$f30f7e456d254e83(routes, opts) {
    return (0, $633b4c6f3df1e771$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $43f86cbc51c03ccf$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $633b4c6f3df1e771$export$2b76ad033c6e6d08)({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes: routes,
        mapRouteProperties: $43f86cbc51c03ccf$export$52b333d321859367
    }).initialize();
} ///////////////////////////////////////////////////////////////////////////////



function $0d658d5ad93027ec$var$_extends() {
    $0d658d5ad93027ec$var$_extends = Object.assign ? Object.assign.bind() : function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $0d658d5ad93027ec$var$_extends.apply(this, arguments);
}
function $0d658d5ad93027ec$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const $0d658d5ad93027ec$var$defaultMethod = "get";
const $0d658d5ad93027ec$var$defaultEncType = "application/x-www-form-urlencoded";
function $0d658d5ad93027ec$var$isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
}
function $0d658d5ad93027ec$var$isButtonElement(object) {
    return $0d658d5ad93027ec$var$isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function $0d658d5ad93027ec$var$isFormElement(object) {
    return $0d658d5ad93027ec$var$isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function $0d658d5ad93027ec$var$isInputElement(object) {
    return $0d658d5ad93027ec$var$isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function $0d658d5ad93027ec$var$isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function $0d658d5ad93027ec$var$shouldProcessLinkClick(event, target) {
    return event.button === 0 && (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !$0d658d5ad93027ec$var$isModifiedEvent(event) // Ignore clicks with modifier keys
    ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */ function $0d658d5ad93027ec$export$a2e4e2dcc7b1f22f(init) {
    if (init === void 0) init = "";
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key)=>{
        let value = init[key];
        return memo.concat(Array.isArray(value) ? value.map((v)=>[
                key,
                v
            ]) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}
function $0d658d5ad93027ec$var$getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    let searchParams = $0d658d5ad93027ec$export$a2e4e2dcc7b1f22f(locationSearch);
    if (defaultSearchParams) {
        for (let key of defaultSearchParams.keys())if (!searchParams.has(key)) defaultSearchParams.getAll(key).forEach((value)=>{
            searchParams.append(key, value);
        });
    }
    return searchParams;
}
function $0d658d5ad93027ec$var$getFormSubmissionInfo(target, options, basename) {
    let method;
    let action = null;
    let encType;
    let formData;
    if ($0d658d5ad93027ec$var$isFormElement(target)) {
        let submissionTrigger = options.submissionTrigger;
        if (options.action) action = options.action;
        else {
            // When grabbing the action from the element, it will have had the basename
            // prefixed to ensure non-JS scenarios work, so strip it since we'll
            // re-prefix in the router
            let attr = target.getAttribute("action");
            action = attr ? (0, $633b4c6f3df1e771$export$b69e3301ce081aa3)(attr, basename) : null;
        }
        method = options.method || target.getAttribute("method") || $0d658d5ad93027ec$var$defaultMethod;
        encType = options.encType || target.getAttribute("enctype") || $0d658d5ad93027ec$var$defaultEncType;
        formData = new FormData(target);
        if (submissionTrigger && submissionTrigger.name) formData.append(submissionTrigger.name, submissionTrigger.value);
    } else if ($0d658d5ad93027ec$var$isButtonElement(target) || $0d658d5ad93027ec$var$isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        let form = target.form;
        if (form == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
         // <button>/<input type="submit"> may override attributes of <form>
        if (options.action) action = options.action;
        else {
            // When grabbing the action from the element, it will have had the basename
            // prefixed to ensure non-JS scenarios work, so strip it since we'll
            // re-prefix in the router
            let attr = target.getAttribute("formaction") || form.getAttribute("action");
            action = attr ? (0, $633b4c6f3df1e771$export$b69e3301ce081aa3)(attr, basename) : null;
        }
        method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || $0d658d5ad93027ec$var$defaultMethod;
        encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || $0d658d5ad93027ec$var$defaultEncType;
        formData = new FormData(form); // Include name + value from a <button>, appending in case the button name
        // matches an existing input name
        if (target.name) formData.append(target.name, target.value);
    } else if ($0d658d5ad93027ec$var$isHtmlElement(target)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    else {
        method = options.method || $0d658d5ad93027ec$var$defaultMethod;
        action = options.action || null;
        encType = options.encType || $0d658d5ad93027ec$var$defaultEncType;
        if (target instanceof FormData) formData = target;
        else {
            formData = new FormData();
            if (target instanceof URLSearchParams) for (let [name, value] of target)formData.append(name, value);
            else if (target != null) for (let name of Object.keys(target))formData.append(name, target[name]);
        }
    }
    return {
        action: action,
        method: method.toLowerCase(),
        encType: encType,
        formData: formData
    };
}
const $0d658d5ad93027ec$var$_excluded = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset"
], $0d658d5ad93027ec$var$_excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children"
], $0d658d5ad93027ec$var$_excluded3 = [
    "reloadDocument",
    "replace",
    "method",
    "action",
    "onSubmit",
    "fetcherKey",
    "routeId",
    "relative",
    "preventScrollReset"
];
function $0d658d5ad93027ec$export$1f3f55432a00e06d(routes, opts) {
    return (0, $633b4c6f3df1e771$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $0d658d5ad93027ec$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $633b4c6f3df1e771$export$719fc203c4e16dee)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || $0d658d5ad93027ec$var$parseHydrationData(),
        routes: routes,
        mapRouteProperties: (0, $43f86cbc51c03ccf$export$52b333d321859367)
    }).initialize();
}
function $0d658d5ad93027ec$export$1ba7ed8a3a7b3765(routes, opts) {
    return (0, $633b4c6f3df1e771$export$baddd0131ee8c05b)({
        basename: opts == null ? void 0 : opts.basename,
        future: $0d658d5ad93027ec$var$_extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0, $633b4c6f3df1e771$export$b71fdd3798280242)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || $0d658d5ad93027ec$var$parseHydrationData(),
        routes: routes,
        mapRouteProperties: (0, $43f86cbc51c03ccf$export$52b333d321859367)
    }).initialize();
}
function $0d658d5ad93027ec$var$parseHydrationData() {
    var _window;
    let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
    if (state && state.errors) state = $0d658d5ad93027ec$var$_extends({}, state, {
        errors: $0d658d5ad93027ec$var$deserializeErrors(state.errors)
    });
    return state;
}
function $0d658d5ad93027ec$var$deserializeErrors(errors) {
    if (!errors) return null;
    let entries = Object.entries(errors);
    let serialized = {};
    for (let [key, val] of entries){
        // Hey you!  If you change this, please change the corresponding logic in
        // serializeErrors in react-router-dom/server.tsx :)
        if (val && val.__type === "RouteErrorResponse") serialized[key] = new (0, $633b4c6f3df1e771$export$acf1a680051f5031)(val.status, val.statusText, val.data, val.internal === true);
        else if (val && val.__type === "Error") {
            let error = new Error(val.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
            // because we don't serialize SSR stack traces for security reasons
            error.stack = "";
            serialized[key] = error;
        } else serialized[key] = val;
    }
    return serialized;
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function $0d658d5ad93027ec$export$9ba4e89fdfa1fc54(_ref) {
    let { basename: basename, children: children, window: window1 } = _ref;
    let historyRef = $an5iK.useRef();
    if (historyRef.current == null) historyRef.current = (0, $633b4c6f3df1e771$export$719fc203c4e16dee)({
        window: window1,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setState] = $an5iK.useState({
        action: history.action,
        location: history.location
    });
    $an5iK.useLayoutEffect(()=>history.listen(setState), [
        history
    ]);
    return /*#__PURE__*/ $an5iK.createElement((0, $43f86cbc51c03ccf$export$55185c17a0fcbe46), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */ function $0d658d5ad93027ec$export$7221d69dcfc8e36b(_ref2) {
    let { basename: basename, children: children, window: window1 } = _ref2;
    let historyRef = $an5iK.useRef();
    if (historyRef.current == null) historyRef.current = (0, $633b4c6f3df1e771$export$b71fdd3798280242)({
        window: window1,
        v5Compat: true
    });
    let history = historyRef.current;
    let [state, setState] = $an5iK.useState({
        action: history.action,
        location: history.location
    });
    $an5iK.useLayoutEffect(()=>history.listen(setState), [
        history
    ]);
    return /*#__PURE__*/ $an5iK.createElement((0, $43f86cbc51c03ccf$export$55185c17a0fcbe46), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */ function $0d658d5ad93027ec$export$eefb0c834599897e(_ref3) {
    let { basename: basename, children: children, history: history } = _ref3;
    const [state, setState] = $an5iK.useState({
        action: history.action,
        location: history.location
    });
    $an5iK.useLayoutEffect(()=>history.listen(setState), [
        history
    ]);
    return /*#__PURE__*/ $an5iK.createElement((0, $43f86cbc51c03ccf$export$55185c17a0fcbe46), {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history
    });
}
const $0d658d5ad93027ec$var$isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const $0d658d5ad93027ec$var$ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware <a>.
 */ const $0d658d5ad93027ec$export$a6c7ac8248d6e38a = /*#__PURE__*/ $an5iK.forwardRef(function LinkWithRef(_ref4, ref) {
    let { onClick: onClick, relative: relative, reloadDocument: reloadDocument, replace: replace, state: state, target: target, to: to, preventScrollReset: preventScrollReset } = _ref4, rest = $0d658d5ad93027ec$var$_objectWithoutPropertiesLoose(_ref4, $0d658d5ad93027ec$var$_excluded);
    let { basename: basename } = $an5iK.useContext((0, $43f86cbc51c03ccf$export$26749e8557646306)); // Rendered into <a href> for absolute URLs
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && $0d658d5ad93027ec$var$ABSOLUTE_URL_REGEX.test(to)) {
        // Render the absolute href server- and client-side
        absoluteHref = to; // Only check for external origins client-side
        if ($0d658d5ad93027ec$var$isBrowser) try {
            let currentUrl = new URL(window.location.href);
            let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
            let path = (0, $633b4c6f3df1e771$export$b69e3301ce081aa3)(targetUrl.pathname, basename);
            if (targetUrl.origin === currentUrl.origin && path != null) // Strip the protocol/origin/basename for same-origin absolute URLs
            to = path + targetUrl.search + targetUrl.hash;
            else isExternal = true;
        } catch (e) {}
    } // Rendered into <a href> for relative URLs
    let href = (0, $43f86cbc51c03ccf$export$b66bb29c5006f12f)(to, {
        relative: relative
    });
    let internalOnClick = $0d658d5ad93027ec$export$67621102c14d847(to, {
        replace: replace,
        state: state,
        target: target,
        preventScrollReset: preventScrollReset,
        relative: relative
    });
    function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) internalOnClick(event);
    }
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
    $an5iK.createElement("a", $0d658d5ad93027ec$var$_extends({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref: ref,
        target: target
    })));
});
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */ const $0d658d5ad93027ec$export$b0d92dbee9b5b60d = /*#__PURE__*/ $an5iK.forwardRef(function NavLinkWithRef(_ref5, ref) {
    let { "aria-current": ariaCurrentProp = "page", caseSensitive: caseSensitive = false, className: classNameProp = "", end: end = false, style: styleProp, to: to, children: children } = _ref5, rest = $0d658d5ad93027ec$var$_objectWithoutPropertiesLoose(_ref5, $0d658d5ad93027ec$var$_excluded2);
    let path = (0, $43f86cbc51c03ccf$export$e75d2a2d1b3c245b)(to, {
        relative: rest.relative
    });
    let location = (0, $43f86cbc51c03ccf$export$45d76561a5302f2b)();
    let routerState = $an5iK.useContext((0, $43f86cbc51c03ccf$export$145dfa71566a64dc));
    let { navigator: navigator } = $an5iK.useContext((0, $43f86cbc51c03ccf$export$26749e8557646306));
    let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
    }
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let ariaCurrent = isActive ? ariaCurrentProp : undefined;
    let className;
    if (typeof classNameProp === "function") className = classNameProp({
        isActive: isActive,
        isPending: isPending
    });
    else // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null
    ].filter(Boolean).join(" ");
    let style = typeof styleProp === "function" ? styleProp({
        isActive: isActive,
        isPending: isPending
    }) : styleProp;
    return /*#__PURE__*/ $an5iK.createElement($0d658d5ad93027ec$export$a6c7ac8248d6e38a, $0d658d5ad93027ec$var$_extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to
    }), typeof children === "function" ? children({
        isActive: isActive,
        isPending: isPending
    }) : children);
});
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */ const $0d658d5ad93027ec$export$a7fed597f4b8afd8 = /*#__PURE__*/ $an5iK.forwardRef((props, ref)=>{
    return /*#__PURE__*/ $an5iK.createElement($0d658d5ad93027ec$var$FormImpl, $0d658d5ad93027ec$var$_extends({}, props, {
        ref: ref
    }));
});
const $0d658d5ad93027ec$var$FormImpl = /*#__PURE__*/ $an5iK.forwardRef((_ref6, forwardedRef)=>{
    let { reloadDocument: reloadDocument, replace: replace, method: method = $0d658d5ad93027ec$var$defaultMethod, action: action, onSubmit: onSubmit, fetcherKey: fetcherKey, routeId: routeId, relative: relative, preventScrollReset: preventScrollReset } = _ref6, props = $0d658d5ad93027ec$var$_objectWithoutPropertiesLoose(_ref6, $0d658d5ad93027ec$var$_excluded3);
    let submit = $0d658d5ad93027ec$var$useSubmitImpl(fetcherKey, routeId);
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let formAction = $0d658d5ad93027ec$export$89a6bd6db0d97c56(action, {
        relative: relative
    });
    let submitHandler = (event)=>{
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        let submitter = event.nativeEvent.submitter;
        let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
        submit(submitter || event.currentTarget, {
            method: submitMethod,
            replace: replace,
            relative: relative,
            preventScrollReset: preventScrollReset
        });
    };
    return /*#__PURE__*/ $an5iK.createElement("form", $0d658d5ad93027ec$var$_extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
    }, props));
});
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */ function $0d658d5ad93027ec$export$11aac1aab828f1fa(_ref7) {
    let { getKey: getKey, storageKey: storageKey } = _ref7;
    $0d658d5ad93027ec$export$25057cfe5591e3e9({
        getKey: getKey,
        storageKey: storageKey
    });
    return null;
}
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var $0d658d5ad93027ec$var$DataRouterHook;
(function(DataRouterHook) {
    DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
    DataRouterHook["UseFetcher"] = "useFetcher";
})($0d658d5ad93027ec$var$DataRouterHook || ($0d658d5ad93027ec$var$DataRouterHook = {}));
var $0d658d5ad93027ec$var$DataRouterStateHook;
(function(DataRouterStateHook) {
    DataRouterStateHook["UseFetchers"] = "useFetchers";
    DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})($0d658d5ad93027ec$var$DataRouterStateHook || ($0d658d5ad93027ec$var$DataRouterStateHook = {}));
function $0d658d5ad93027ec$var$getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function $0d658d5ad93027ec$var$useDataRouterContext(hookName) {
    let ctx = $an5iK.useContext((0, $43f86cbc51c03ccf$export$3add0d5dce533e2e));
    !ctx && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    return ctx;
}
function $0d658d5ad93027ec$var$useDataRouterState(hookName) {
    let state = $an5iK.useContext((0, $43f86cbc51c03ccf$export$145dfa71566a64dc));
    !state && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function $0d658d5ad93027ec$export$67621102c14d847(to, _temp) {
    let { target: target, replace: replaceProp, state: state, preventScrollReset: preventScrollReset, relative: relative } = _temp === void 0 ? {} : _temp;
    let navigate = (0, $43f86cbc51c03ccf$export$9770f232ac06a008)();
    let location = (0, $43f86cbc51c03ccf$export$45d76561a5302f2b)();
    let path = (0, $43f86cbc51c03ccf$export$e75d2a2d1b3c245b)(to, {
        relative: relative
    });
    return $an5iK.useCallback((event)=>{
        if ($0d658d5ad93027ec$var$shouldProcessLinkClick(event, target)) {
            event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here unless the replace prop is explicitly set
            let replace = replaceProp !== undefined ? replaceProp : (0, $633b4c6f3df1e771$export$fe53371bee54353d)(location) === (0, $633b4c6f3df1e771$export$fe53371bee54353d)(path);
            navigate(to, {
                replace: replace,
                state: state,
                preventScrollReset: preventScrollReset,
                relative: relative
            });
        }
    }, [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative
    ]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */ function $0d658d5ad93027ec$export$f1a78c17382fe22a(defaultInit) {
    let defaultSearchParamsRef = $an5iK.useRef($0d658d5ad93027ec$export$a2e4e2dcc7b1f22f(defaultInit));
    let hasSetSearchParamsRef = $an5iK.useRef(false);
    let location = (0, $43f86cbc51c03ccf$export$45d76561a5302f2b)();
    let searchParams = $an5iK.useMemo(()=>// Once we call that we want those to take precedence, otherwise you can't
        // remove a param with setSearchParams({}) if it has an initial value
        $0d658d5ad93027ec$var$getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [
        location.search
    ]);
    let navigate = (0, $43f86cbc51c03ccf$export$9770f232ac06a008)();
    let setSearchParams = $an5iK.useCallback((nextInit, navigateOptions)=>{
        const newSearchParams = $0d658d5ad93027ec$export$a2e4e2dcc7b1f22f(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
        hasSetSearchParamsRef.current = true;
        navigate("?" + newSearchParams, navigateOptions);
    }, [
        navigate,
        searchParams
    ]);
    return [
        searchParams,
        setSearchParams
    ];
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */ function $0d658d5ad93027ec$export$47c85c6e3a081d3() {
    return $0d658d5ad93027ec$var$useSubmitImpl();
}
function $0d658d5ad93027ec$var$useSubmitImpl(fetcherKey, fetcherRouteId) {
    let { router: router } = $0d658d5ad93027ec$var$useDataRouterContext($0d658d5ad93027ec$var$DataRouterHook.UseSubmitImpl);
    let { basename: basename } = $an5iK.useContext((0, $43f86cbc51c03ccf$export$26749e8557646306));
    let currentRouteId = (0, $43f86cbc51c03ccf$export$5fc8298006ad9e58)();
    return $an5iK.useCallback(function(target, options) {
        if (options === void 0) options = {};
        if (typeof document === "undefined") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
        let { action: action, method: method, encType: encType, formData: formData } = $0d658d5ad93027ec$var$getFormSubmissionInfo(target, options, basename); // Base options shared between fetch() and navigate()
        let opts = {
            preventScrollReset: options.preventScrollReset,
            formData: formData,
            formMethod: method,
            formEncType: encType
        };
        if (fetcherKey) {
            !(fetcherRouteId != null) && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
            router.fetch(fetcherKey, fetcherRouteId, action, opts);
        } else router.navigate(action, $0d658d5ad93027ec$var$_extends({}, opts, {
            replace: options.replace,
            fromRouteId: currentRouteId
        }));
    }, [
        router,
        basename,
        fetcherKey,
        fetcherRouteId,
        currentRouteId
    ]);
} // v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function $0d658d5ad93027ec$export$89a6bd6db0d97c56(action, _temp2) {
    let { relative: relative } = _temp2 === void 0 ? {} : _temp2;
    let { basename: basename } = $an5iK.useContext((0, $43f86cbc51c03ccf$export$26749e8557646306));
    let routeContext = $an5iK.useContext((0, $43f86cbc51c03ccf$export$9072aa6dd1f93057));
    !routeContext && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    let [match] = routeContext.matches.slice(-1); // Shallow clone path so we can modify it below, otherwise we modify the
    // object referenced by useMemo inside useResolvedPath
    let path = $0d658d5ad93027ec$var$_extends({}, (0, $43f86cbc51c03ccf$export$e75d2a2d1b3c245b)(action ? action : ".", {
        relative: relative
    })); // Previously we set the default action to ".". The problem with this is that
    // `useResolvedPath(".")` excludes search params and the hash of the resolved
    // URL. This is the intended behavior of when "." is specifically provided as
    // the form action, but inconsistent w/ browsers when the action is omitted.
    // https://github.com/remix-run/remix/issues/927
    let location = (0, $43f86cbc51c03ccf$export$45d76561a5302f2b)();
    if (action == null) {
        // Safe to write to these directly here since if action was undefined, we
        // would have called useResolvedPath(".") which will never include a search
        // or hash
        path.search = location.search;
        path.hash = location.hash; // When grabbing search params from the URL, remove the automatically
        // inserted ?index param so we match the useResolvedPath search behavior
        // which would not include ?index
        if (match.route.index) {
            let params = new URLSearchParams(path.search);
            params.delete("index");
            path.search = params.toString() ? "?" + params.toString() : "";
        }
    }
    if ((!action || action === ".") && match.route.index) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
     // If we're operating within a basename, prepend it to the pathname prior
    // to creating the form action.  If this is a root navigation, then just use
    // the raw basename which allows the basename to have full control over the
    // presence of a trailing slash on root actions
    if (basename !== "/") path.pathname = path.pathname === "/" ? basename : (0, $633b4c6f3df1e771$export$86d9a7913e44197e)([
        basename,
        path.pathname
    ]);
    return (0, $633b4c6f3df1e771$export$fe53371bee54353d)(path);
}
function $0d658d5ad93027ec$var$createFetcherForm(fetcherKey, routeId) {
    let FetcherForm = /*#__PURE__*/ $an5iK.forwardRef((props, ref)=>{
        return /*#__PURE__*/ $an5iK.createElement($0d658d5ad93027ec$var$FormImpl, $0d658d5ad93027ec$var$_extends({}, props, {
            ref: ref,
            fetcherKey: fetcherKey,
            routeId: routeId
        }));
    });
    return FetcherForm;
}
let $0d658d5ad93027ec$var$fetcherId = 0;
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */ function $0d658d5ad93027ec$export$5b0d2d9a9921565a() {
    var _route$matches;
    let { router: router } = $0d658d5ad93027ec$var$useDataRouterContext($0d658d5ad93027ec$var$DataRouterHook.UseFetcher);
    let route = $an5iK.useContext((0, $43f86cbc51c03ccf$export$9072aa6dd1f93057));
    !route && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
    !(routeId != null) && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
    let [fetcherKey] = $an5iK.useState(()=>String(++$0d658d5ad93027ec$var$fetcherId));
    let [Form] = $an5iK.useState(()=>{
        !routeId && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
        return $0d658d5ad93027ec$var$createFetcherForm(fetcherKey, routeId);
    });
    let [load] = $an5iK.useState(()=>(href)=>{
            !router && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
            !routeId && (0, $633b4c6f3df1e771$export$3e9cee6b33872309)(false);
            router.fetch(fetcherKey, routeId, href);
        });
    let submit = $0d658d5ad93027ec$var$useSubmitImpl(fetcherKey, routeId);
    let fetcher = router.getFetcher(fetcherKey);
    let fetcherWithComponents = $an5iK.useMemo(()=>$0d658d5ad93027ec$var$_extends({
            Form: Form,
            submit: submit,
            load: load
        }, fetcher), [
        fetcher,
        Form,
        submit,
        load
    ]);
    $an5iK.useEffect(()=>{
        // Is this busted when the React team gets real weird and calls effects
        // twice on mount?  We really just need to garbage collect here when this
        // fetcher is no longer around.
        return ()=>{
            if (!router) {
                console.warn("No router available to clean up from useFetcher()");
                return;
            }
            router.deleteFetcher(fetcherKey);
        };
    }, [
        router,
        fetcherKey
    ]);
    return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */ function $0d658d5ad93027ec$export$fa996778a3a31087() {
    let state = $0d658d5ad93027ec$var$useDataRouterState($0d658d5ad93027ec$var$DataRouterStateHook.UseFetchers);
    return [
        ...state.fetchers.values()
    ];
}
const $0d658d5ad93027ec$var$SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let $0d658d5ad93027ec$var$savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */ function $0d658d5ad93027ec$export$25057cfe5591e3e9(_temp3) {
    let { getKey: getKey, storageKey: storageKey } = _temp3 === void 0 ? {} : _temp3;
    let { router: router } = $0d658d5ad93027ec$var$useDataRouterContext($0d658d5ad93027ec$var$DataRouterHook.UseScrollRestoration);
    let { restoreScrollPosition: restoreScrollPosition, preventScrollReset: preventScrollReset } = $0d658d5ad93027ec$var$useDataRouterState($0d658d5ad93027ec$var$DataRouterStateHook.UseScrollRestoration);
    let location = (0, $43f86cbc51c03ccf$export$45d76561a5302f2b)();
    let matches = (0, $43f86cbc51c03ccf$export$2378eb7f5ff86053)();
    let navigation = (0, $43f86cbc51c03ccf$export$d0fd4b7106de2769)(); // Trigger manual scroll restoration while we're active
    $an5iK.useEffect(()=>{
        window.history.scrollRestoration = "manual";
        return ()=>{
            window.history.scrollRestoration = "auto";
        };
    }, []); // Save positions on pagehide
    $0d658d5ad93027ec$var$usePageHide($an5iK.useCallback(()=>{
        if (navigation.state === "idle") {
            let key = (getKey ? getKey(location, matches) : null) || location.key;
            $0d658d5ad93027ec$var$savedScrollPositions[key] = window.scrollY;
        }
        sessionStorage.setItem(storageKey || $0d658d5ad93027ec$var$SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify($0d658d5ad93027ec$var$savedScrollPositions));
        window.history.scrollRestoration = "auto";
    }, [
        storageKey,
        getKey,
        navigation.state,
        location,
        matches
    ])); // Read in any saved scroll locations
    if (typeof document !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $an5iK.useLayoutEffect(()=>{
            try {
                let sessionPositions = sessionStorage.getItem(storageKey || $0d658d5ad93027ec$var$SCROLL_RESTORATION_STORAGE_KEY);
                if (sessionPositions) $0d658d5ad93027ec$var$savedScrollPositions = JSON.parse(sessionPositions);
            } catch (e) {}
        }, [
            storageKey
        ]); // Enable scroll restoration in the router
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $an5iK.useLayoutEffect(()=>{
            let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration($0d658d5ad93027ec$var$savedScrollPositions, ()=>window.scrollY, getKey);
            return ()=>disableScrollRestoration && disableScrollRestoration();
        }, [
            router,
            getKey
        ]); // Restore scrolling when state.restoreScrollPosition changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        $an5iK.useLayoutEffect(()=>{
            // Explicit false means don't do anything (used for submissions)
            if (restoreScrollPosition === false) return;
             // been here before, scroll to it
            if (typeof restoreScrollPosition === "number") {
                window.scrollTo(0, restoreScrollPosition);
                return;
            } // try to scroll to the hash
            if (location.hash) {
                let el = document.getElementById(location.hash.slice(1));
                if (el) {
                    el.scrollIntoView();
                    return;
                }
            } // Don't reset if this navigation opted out
            if (preventScrollReset === true) return;
             // otherwise go to the top on new locations
            window.scrollTo(0, 0);
        }, [
            location,
            restoreScrollPosition,
            preventScrollReset
        ]);
    }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function $0d658d5ad93027ec$export$c0a586b329cae57d(callback, options) {
    let { capture: capture } = options || {};
    $an5iK.useEffect(()=>{
        let opts = capture != null ? {
            capture: capture
        } : undefined;
        window.addEventListener("beforeunload", callback, opts);
        return ()=>{
            window.removeEventListener("beforeunload", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function $0d658d5ad93027ec$var$usePageHide(callback, options) {
    let { capture: capture } = options || {};
    $an5iK.useEffect(()=>{
        let opts = capture != null ? {
            capture: capture
        } : undefined;
        window.addEventListener("pagehide", callback, opts);
        return ()=>{
            window.removeEventListener("pagehide", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */ function $0d658d5ad93027ec$export$39f4eb3dbd812741(_ref8) {
    let { when: when, message: message } = _ref8;
    let blocker = (0, $43f86cbc51c03ccf$export$2af03a1de5c0910)(when);
    $an5iK.useEffect(()=>{
        if (blocker.state === "blocked" && !when) blocker.reset();
    }, [
        blocker,
        when
    ]);
    $an5iK.useEffect(()=>{
        if (blocker.state === "blocked") {
            let proceed = window.confirm(message);
            if (proceed) setTimeout(blocker.proceed, 0);
            else blocker.reset();
        }
    }, [
        blocker,
        message
    ]);
}



var $an5iK = parcelRequire("an5iK");
const $05ea16868e194758$var$useOnline = ()=>{
    const [Isonline, setIsonline] = (0, $an5iK.useState)(true);
    (0, $an5iK.useEffect)(()=>{
        const handleOnline = ()=>{
            setIsonline(true);
        };
        const handleOffline = ()=>{
            setIsonline(false);
        };
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return ()=>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);
    return Isonline;
};
var $05ea16868e194758$export$2e2bcd8739ae039 = $05ea16868e194758$var$useOnline;


const $434a7183348a5bb7$var$Title = ()=>{
    return /*#__PURE__*/ (0, $9Yj41.jsx)((0, $9Yj41.Fragment), {
        children: /*#__PURE__*/ (0, $9Yj41.jsx)("a", {
            href: "/",
            children: /*#__PURE__*/ (0, $9Yj41.jsx)("img", {
                alt: "logo",
                src: (0, (/*@__PURE__*/$parcel$interopDefault($0f13c2d4eddbddf0$exports)))
            })
        })
    });
};
const $434a7183348a5bb7$var$Header = ()=>{
    const isOnline = (0, $05ea16868e194758$export$2e2bcd8739ae039)();
    const [isLogged, setisLogged] = (0, $an5iK.useState)(false);
    return /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
        className: "header",
        children: [
            /*#__PURE__*/ (0, $9Yj41.jsx)($434a7183348a5bb7$var$Title, {}),
            /*#__PURE__*/ (0, $9Yj41.jsx)("h1", {
                children: "Food villa"
            }),
            /*#__PURE__*/ (0, $9Yj41.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ (0, $9Yj41.jsxs)("li", {
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $9Yj41.jsx)((0, $0d658d5ad93027ec$export$a6c7ac8248d6e38a), {
                                to: "/",
                                children: "Home"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsxs)("li", {
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $9Yj41.jsx)((0, $0d658d5ad93027ec$export$a6c7ac8248d6e38a), {
                                to: "/Aboutus",
                                children: "About Us"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsxs)("li", {
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $9Yj41.jsx)((0, $0d658d5ad93027ec$export$a6c7ac8248d6e38a), {
                                to: "/Contactus",
                                children: "Contact Us"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsxs)("li", {
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $9Yj41.jsx)((0, $0d658d5ad93027ec$export$a6c7ac8248d6e38a), {
                                to: "/More",
                                children: "More"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsxs)("li", {
                        children: [
                            " ",
                            /*#__PURE__*/ (0, $9Yj41.jsx)((0, $0d658d5ad93027ec$export$a6c7ac8248d6e38a), {
                                to: "/instamart",
                                children: "instamart"
                            })
                        ]
                    }),
                    isLogged ? /*#__PURE__*/ (0, $9Yj41.jsx)("button", {
                        onClick: ()=>{
                            setisLogged(false);
                        },
                        children: "logout"
                    }) : /*#__PURE__*/ (0, $9Yj41.jsx)("button", {
                        onClick: ()=>{
                            setisLogged(true);
                        },
                        children: "login"
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsxs)("li", {
                        children: [
                            " ",
                            isOnline ? "\uD83D\uDFE2" : "\uD83D\uDD34"
                        ]
                    })
                ]
            })
        ]
    });
};
var $434a7183348a5bb7$export$2e2bcd8739ae039 = $434a7183348a5bb7$var$Header;



var $9Yj41 = parcelRequire("9Yj41");

var $9Yj41 = parcelRequire("9Yj41");
// export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const $57e601272047897c$export$3c67ec6258c4a827 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const $57e601272047897c$export$dd647375149eac = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5203896&lng=73.8567005&restaurantId=";
const $57e601272047897c$export$94e7423f6fc45a54 = [
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "74453",
            name: "Domino's Pizza",
            uuid: "87727dbd-7f2b-4857-9763-359624165845",
            city: "21",
            area: "Athwa",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "bz9zkh2aqywjhpankb07",
            cuisines: [
                "Pizzas"
            ],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 45,
            slaString: "45 MINS",
            lastMileTravel: 0,
            slugs: {
                restaurant: "dominos-pizza-majura-nondh-test_surat",
                city: "surat"
            },
            cityState: "21",
            address: "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
            locality: "Bhatar Road",
            parentId: 2456,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "2.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "74453",
                deliveryTime: 45,
                minDeliveryTime: 45,
                maxDeliveryTime: 45,
                lastMileTravel: 0,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 1000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "410476",
            name: "The Brooklyn Creamery - Healthy Ice Cream",
            uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
            city: "21",
            area: "althan bhatar",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "ldtibwymvzehvmdwl8la",
            cuisines: [
                "Desserts",
                "Ice Cream",
                "Healthy Food"
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 6.300000190734863,
            slugs: {
                restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
                city: "surat"
            },
            cityState: "21",
            address: "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
            locality: "Adajan FC",
            parentId: 236673,
            unserviceable: true,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "6.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "410476",
                deliveryTime: 31,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 6.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.4",
            totalRatings: 100,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "81094",
            name: "Richie Rich Juices & Shakes",
            uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
            city: "21",
            area: "Athwa",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
            cuisines: [
                "Ice Cream"
            ],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 5.599999904632568,
            slugs: {
                restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
                city: "surat"
            },
            cityState: "21",
            address: "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
            locality: "Parle Point",
            parentId: 771,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "5.5 kms",
            hasSurge: false,
            sla: {
                restaurantId: "81094",
                deliveryTime: 30,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 5.599999904632568,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 500,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "311443",
            name: "Siddhi Icecream & Thick Shake",
            uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
            city: "21",
            area: "Nanpura",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "spd3y5gok3vvwqulgmda",
            cuisines: [
                "Ice Cream",
                "Juices",
                "Desserts",
                "Beverages"
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 25,
            maxDeliveryTime: 35,
            slaString: "25-35 MINS",
            lastMileTravel: 3,
            slugs: {
                restaurant: "siddhi-icecream-athwa-athwa",
                city: "surat"
            },
            cityState: "21",
            address: "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
            locality: "Athwa",
            parentId: 387846,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "311443",
                deliveryTime: 30,
                minDeliveryTime: 25,
                maxDeliveryTime: 35,
                lastMileTravel: 3,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.5",
            totalRatings: 100,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "307070",
            name: "Pizza Pie",
            uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
            city: "21",
            area: "Nanpura",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "bvr70adr30ejyr5ua79k",
            cuisines: [
                "Pizzas"
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 37,
            minDeliveryTime: 35,
            maxDeliveryTime: 45,
            slaString: "35-45 MINS",
            lastMileTravel: 4,
            slugs: {
                restaurant: "pizza-pie-athwa-athwa",
                city: "surat"
            },
            cityState: "21",
            address: "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
            locality: "Nanpura",
            parentId: 158854,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "307070",
                deliveryTime: 37,
                minDeliveryTime: 35,
                maxDeliveryTime: 45,
                lastMileTravel: 4,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 50,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "76858",
            name: "Feeling Hungry",
            uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
            city: "21",
            area: "Athwa",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
            cuisines: [
                "Chinese",
                "North Indian",
                "Biryani"
            ],
            tags: [],
            costForTwo: 2000,
            costForTwoString: "₹20 FOR TWO",
            deliveryTime: 35,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 3.700000047683716,
            slugs: {
                restaurant: "feeling-hungry-adajan-gam-adajan",
                city: "surat"
            },
            cityState: "21",
            address: "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
            locality: "Royal Residency, Adajan Gam",
            parentId: 79237,
            unserviceable: true,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "3.7 kms",
            hasSurge: false,
            sla: {
                restaurantId: "76858",
                deliveryTime: 35,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 3.700000047683716,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.2",
            totalRatings: 1000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "617279",
            name: "Malaxmi Fast Food",
            uuid: "4848cb1b-b1c4-4a6e-9a6d-f96b781357db",
            city: "21",
            area: "Adajan",
            totalRatingsString: "20+ ratings",
            cloudinaryImageId: "agkm7cflq72tkualhstb",
            cuisines: [
                "Fast Food",
                "Pizzas",
                "Snacks",
                "Beverages"
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 44,
            minDeliveryTime: 40,
            maxDeliveryTime: 50,
            slaString: "40-50 MINS",
            lastMileTravel: 9.100000381469727,
            slugs: {
                restaurant: "mahalaxmi-fast-food-adajan-adajan-2",
                city: "surat"
            },
            cityState: "21",
            address: "shop no 15,palanpur food zone,opp.sai trith,pal gam suart",
            locality: "Palanpur Food Zone",
            parentId: 373635,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "9.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "617279",
                deliveryTime: 44,
                minDeliveryTime: 40,
                maxDeliveryTime: 50,
                lastMileTravel: 9.100000381469727,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 20,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "469264",
            name: "Dessert House",
            uuid: "7a320917-c577-49cb-875a-1e585a3adbc1",
            city: "21",
            area: "Piplod",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "jegpumsjcmomksbr2sxr",
            cuisines: [
                "Desserts",
                "Ice Cream"
            ],
            tags: [],
            costForTwo: 15000,
            costForTwoString: "₹150 FOR TWO",
            deliveryTime: 27,
            minDeliveryTime: 25,
            maxDeliveryTime: 35,
            slaString: "25-35 MINS",
            lastMileTravel: 6.199999809265137,
            slugs: {
                restaurant: "dessert-house-piplod-piplod",
                city: "surat"
            },
            cityState: "21",
            address: "SHOP NO 2, MARVELLA CORRIDOR OPP. C B PATEL HEALTH CLUB V.I.P ROAD, VESU",
            locality: "Piplod",
            parentId: 71430,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "6.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "469264",
                deliveryTime: 27,
                minDeliveryTime: 25,
                maxDeliveryTime: 35,
                lastMileTravel: 6.199999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.5",
            totalRatings: 0,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "395204",
            name: "McDonald's Gourmet Burger Collection",
            uuid: "55c33a9b-bb51-4b9d-8c94-708d48b08ebd",
            city: "21",
            area: "Piplod",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
            cuisines: [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 8.199999809265137,
            slugs: {
                restaurant: "mcdonalds-gourmet-burger-collection-valentine-cinema-piplod",
                city: "surat"
            },
            cityState: "21",
            address: "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
            locality: "Valentine Cinema",
            parentId: 10761,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "8.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "395204",
                deliveryTime: 31,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 8.199999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 100,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "193541",
            name: "Behrouz Biryani",
            uuid: "abc2e9d1-df00-4449-bde3-4c35982d0ef3",
            city: "21",
            area: "Adajan Patiya",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "craozjakzx7sll2uracb",
            cuisines: [
                "Biryani",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "North Indian",
                "Persian",
                "Desserts"
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 49,
            minDeliveryTime: 45,
            maxDeliveryTime: 55,
            slaString: "45-55 MINS",
            lastMileTravel: 6.400000095367432,
            slugs: {
                restaurant: "behrouz-biryani-adajan-adajan",
                city: "surat"
            },
            cityState: "21",
            address: "Chalta no 23, Ground Floor, Guru Ashish Building, Below Stallon Gym, Opp Kotyark Nagar, Near Navyug College, Adajan, Surat 395005",
            locality: "Nr Navyug College, Rander Road",
            parentId: 1803,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "6.4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "193541",
                deliveryTime: 49,
                minDeliveryTime: 45,
                maxDeliveryTime: 55,
                lastMileTravel: 6.400000095367432,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.3",
            totalRatings: 1000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "475510",
            name: "Momos House",
            uuid: "34320d9a-ffa7-450c-ad61-d50485306626",
            city: "21",
            area: "Piplod",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "vmold2zualdrrypxcvue",
            cuisines: [
                "Fast Food"
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 6.199999809265137,
            slugs: {
                restaurant: "momo’s-house-piplod-piplod",
                city: "surat"
            },
            cityState: "21",
            address: "SHOP NO - 2, MARVELLA CORRIDOR, OPP. C B PATEL HEALTH CLUB, V.I.P. ROAD, Surat,, Vesu , Surat Municipal Corporation, Surat Municipal Corporation, Gujarat - 395007",
            locality: "Vesu",
            parentId: 15884,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "6.1 kms",
            hasSurge: false,
            sla: {
                restaurantId: "475510",
                deliveryTime: 31,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 6.199999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 0,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "127596",
            name: "Sabir Chicken",
            uuid: "f0f49821-52ed-4435-9014-c845e964a3d8",
            city: "21",
            area: "Chowk Bazar",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "kilrdjqt8chduasii5ni",
            cuisines: [
                "North Indian",
                "Biryani"
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 25,
            maxDeliveryTime: 35,
            slaString: "25-35 MINS",
            lastMileTravel: 4.300000190734863,
            slugs: {
                restaurant: "sabir-chicken-athwa-athwa",
                city: "surat"
            },
            cityState: "21",
            address: "Nehru Bridge, Behind Nagin Chand Hall, Chowk Bazar, Surat, Gujarat 395003",
            locality: "Chowk Bazar",
            parentId: 173978,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "4.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "127596",
                deliveryTime: 30,
                minDeliveryTime: 25,
                maxDeliveryTime: 35,
                lastMileTravel: 4.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 5000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "64656",
            name: "Mahesh Pav Bhaji",
            uuid: "ccfda4b9-82b1-4f22-9567-eb98c448b267",
            city: "21",
            area: "Adajan",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "84d3bea985f13bd980dc39c9c73bc87f",
            cuisines: [
                "Desserts",
                "Chinese",
                "South Indian",
                "Ice Cream",
                "Pizzas"
            ],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 36,
            minDeliveryTime: 35,
            maxDeliveryTime: 45,
            slaString: "35-45 MINS",
            lastMileTravel: 6.900000095367432,
            slugs: {
                restaurant: "mahesh-pav-bhaji-adajan-gam-adajan",
                city: "surat"
            },
            cityState: "21",
            address: "Shop 12, Garden View Apartment, Honey Park Road, Adajan Gam, Surat",
            locality: "Adajan Gam",
            parentId: 6553,
            unserviceable: true,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "30% off",
                shortDescriptionList: [
                    {
                        meta: "30% off | Use JUMBO",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "30% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use JUMBO",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "6.9 kms",
            hasSurge: false,
            sla: {
                restaurantId: "64656",
                deliveryTime: 36,
                minDeliveryTime: 35,
                maxDeliveryTime: 45,
                lastMileTravel: 6.900000095367432,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 10000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "255204",
            name: "The Dango Cake Shop",
            uuid: "dbfd3f3c-77a6-4979-96c4-ce9863e54cdc",
            city: "21",
            area: "Galaxy Circle",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "mnvfpsoealkflze4e5qi",
            cuisines: [
                "Bakery"
            ],
            tags: [],
            costForTwo: 27000,
            costForTwoString: "₹270 FOR TWO",
            deliveryTime: 34,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 7.699999809265137,
            slugs: {
                restaurant: "twisted-cake-live-cake-adajan-adajan",
                city: "surat"
            },
            cityState: "21",
            address: "44 La Victoria, galaxy circle pal Surat",
            locality: "Galaxy Circle",
            parentId: 207513,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "7.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "255204",
                deliveryTime: 34,
                minDeliveryTime: 30,
                maxDeliveryTime: 40,
                lastMileTravel: 7.699999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 50,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "664656",
            name: "Cheezylicious Cafe",
            uuid: "5880e561-10ed-4f96-990b-2251e2f09c82",
            city: "21",
            area: "Piplod",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "fda9ad56b9d62070fec105cd93693129",
            cuisines: [
                "Cafe",
                "Fast Food",
                "Chinese",
                "Snacks",
                "Italian",
                "Mexican"
            ],
            tags: [],
            costForTwo: 15000,
            costForTwoString: "₹150 FOR TWO",
            deliveryTime: 38,
            minDeliveryTime: 35,
            maxDeliveryTime: 45,
            slaString: "35-45 MINS",
            lastMileTravel: 7.599999904632568,
            slugs: {
                restaurant: "cheezylicious-cafe-piplod-piplod-2",
                city: "surat"
            },
            cityState: "21",
            address: "Shop no G10 ground floor, aagam square B/S Dream heritage, Canal road, Vesu",
            locality: "Dream heritage",
            parentId: 59292,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "7.5 kms",
            hasSurge: false,
            sla: {
                restaurantId: "664656",
                deliveryTime: 38,
                minDeliveryTime: 35,
                maxDeliveryTime: 45,
                lastMileTravel: 7.599999904632568,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE_WITH_BANNER",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 0,
            new: true
        },
        subtype: "basic"
    }
];


const $044000270f86a99f$var$Restaurantcard = ({ cloudinaryImageId: cloudinaryImageId, name: name, avgRating: // cuisines,
avgRating, lastMileTravelString: lastMileTravelString })=>{
    // const restaurantList = props;
    // console.log(props);{restaurant}
    // const {cloudinaryImageId , name , cuisines} = restaurant.data;
    return /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, $9Yj41.jsx)("img", {
                alt: "img",
                src: (0, $57e601272047897c$export$3c67ec6258c4a827) + cloudinaryImageId
            }),
            /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {
                children: name
            }),
            /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {
                children: name
            }),
            /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {
                children: avgRating
            }),
            /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {
                children: lastMileTravelString
            })
        ]
    });
};
var $044000270f86a99f$export$2e2bcd8739ae039 = $044000270f86a99f$var$Restaurantcard;




var $an5iK = parcelRequire("an5iK");


var $9Yj41 = parcelRequire("9Yj41");
const $43096c75ddf8a8ed$var$ShimmerHome = ()=>{
    return /*#__PURE__*/ (0, $9Yj41.jsx)("div", {
        className: "restaurant-list",
        children: Array(15).fill("").map((e, index)=>/*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
                className: "shimmer-card",
                children: [
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h1", {
                        className: "image"
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h2", {
                        className: "name"
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h3", {
                        className: "cusine"
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {
                        className: "more-data"
                    })
                ]
            }, index))
    });
};
const $43096c75ddf8a8ed$export$9eeb9146fbfb500e = ()=>{
    return /*#__PURE__*/ (0, $9Yj41.jsxs)((0, $9Yj41.Fragment), {
        children: [
            /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
                className: "shimmer-card-details",
                children: [
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h2", {
                        children: " "
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {}),
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {}),
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {})
                ]
            }),
            /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
                className: "shimmer-restaurant-menu",
                children: [
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h1", {}),
                    Array(15).fill("").map((e, index)=>/*#__PURE__*/ (0, $9Yj41.jsxs)((0, $9Yj41.Fragment), {
                            children: [
                                /*#__PURE__*/ (0, $9Yj41.jsx)("h2", {}),
                                /*#__PURE__*/ (0, $9Yj41.jsx)("div", {
                                    children: Array(15).fill("").map((e, index)=>/*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
                                            className: "shimmer-menu-contents",
                                            children: [
                                                /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
                                                    className: "shimmer-menu-info",
                                                    children: [
                                                        /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {}),
                                                        /*#__PURE__*/ (0, $9Yj41.jsx)("p", {}),
                                                        /*#__PURE__*/ (0, $9Yj41.jsx)("p", {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0, $9Yj41.jsx)("div", {
                                                    className: "shimmer-menu-img",
                                                    children: /*#__PURE__*/ (0, $9Yj41.jsx)("img", {})
                                                })
                                            ]
                                        }))
                                })
                            ]
                        }))
                ]
            })
        ]
    });
};
var $43096c75ddf8a8ed$export$2e2bcd8739ae039 = $43096c75ddf8a8ed$var$ShimmerHome;


function $fe504b3aa525a0ea$export$d6ad891437e8c72c(searchTxt, allrestData) {
    const filteredData = allrestData.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchTxt));
    return filteredData;
}



const $62e9add39c439cc9$var$Body = ()=>{
    const [searchTxt, setsearchTxt] = (0, $an5iK.useState)("");
    const [restaurantData, setrestaurantData] = (0, $an5iK.useState)([]);
    // const [allrestData, setallrestData] = useState([]);
    (0, $an5iK.useEffect)(()=>{
        //api call
        getRestaurant();
    }, []);
    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.520430&lng=73.856743&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setallrestData(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setrestaurantData(json?.data?.cards?.[1]?.data?.data?.cards);
        const temp = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setrestaurantData(temp);
        // console.log(allrestData);
        console.log(restaurantData);
        console.log(temp);
    // setallrestData(restaurantList);
    // setrestaurantData(restaurantList);
    // console.log(allrestData);
    // console.log(restaurantData.length);
    }
    const Isonline = (0, $05ea16868e194758$export$2e2bcd8739ae039)();
    // const Isonline = false;
    if (!Isonline) return /*#__PURE__*/ (0, $9Yj41.jsx)("h1", {
        children: "your are offline"
    });
    console.log("first render");
    return restaurantData?.length === 0 ? /*#__PURE__*/ (0, $9Yj41.jsx)((0, $43096c75ddf8a8ed$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $9Yj41.jsxs)((0, $9Yj41.Fragment), {
        children: [
            /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
                className: "search-container",
                children: [
                    /*#__PURE__*/ (0, $9Yj41.jsx)("input", {
                        type: "text",
                        className: "search-input",
                        value: searchTxt,
                        onChange: (e)=>{
                            setsearchTxt(e.target.value.toLowerCase());
                        }
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsx)("button", {
                        className: "search-btn",
                        onClick: ()=>{
                            const updated = (0, $fe504b3aa525a0ea$export$d6ad891437e8c72c)(searchTxt, restaurantData);
                            setrestaurantData(updated);
                        },
                        children: "search"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9Yj41.jsx)("div", {
                className: "restaurant-list",
                children: !restaurantData ? /*#__PURE__*/ (0, $9Yj41.jsx)("h1", {
                    children: "not found"
                }) : restaurantData.map((restaurant)=>{
                    console.log(restaurant.id);
                    return /*#__PURE__*/ (0, $9Yj41.jsx)((0, $0d658d5ad93027ec$export$a6c7ac8248d6e38a), {
                        to: "/restaurant/" + restaurant.info.id,
                        children: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $044000270f86a99f$export$2e2bcd8739ae039), {
                            ...restaurant.info
                        })
                    }, restaurant.info.id);
                })
            })
        ]
    });
};
var $62e9add39c439cc9$export$2e2bcd8739ae039 = $62e9add39c439cc9$var$Body;



var $9Yj41 = parcelRequire("9Yj41");
const $970385ae1ece8627$var$Footer = ()=>{
    return /*#__PURE__*/ (0, $9Yj41.jsx)("h1", {
        children: "footer"
    });
};
var $970385ae1ece8627$export$2e2bcd8739ae039 = $970385ae1ece8627$var$Footer;



var $9Yj41 = parcelRequire("9Yj41");


var $9Yj41 = parcelRequire("9Yj41");

var $an5iK = parcelRequire("an5iK");
const $039d922179ceee11$var$username = "akshaymarch7";
class $039d922179ceee11$var$ProfileInfo extends (0, (/*@__PURE__*/$parcel$interopDefault($an5iK))).Component {
    constructor(props){
        super(props);
        console.log(this.props.name + " child -- constructor");
        this.state = {
            userinfo: {
                name: "dummy name",
                followers: 0,
                following: 0
            }
        };
    }
    async componentDidMount() {
        console.log(this.props.name + " child -- Mount");
        const data = await fetch("https://api.github.com/users/" + $039d922179ceee11$var$username);
        const json = await data.json();
        console.log(json);
        this.setState({
            // userinfo  :{
            //     name : json.name,
            //     followers : json.followers,
            //     following : json.following,
            // }
            userinfo: json
        });
    // console.log(this.state.userinfo);
    }
    render() {
        const { count: count } = this.state;
        console.log(this.props.name + " child -- render");
        // return <div>
        //     <h1>this is h1</h1>
        //     <h2>this is h2</h2>
        //     <h2>Name : {this.props.name}</h2>
        //     <h2>count : {count}</h2>
        //     <button onClick={ ()=>
        //     {
        //         this.setState({
        //             count : count + 1,
        //         })
        //     }}>click</button>
        // </div>
        return /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, $9Yj41.jsxs)("h1", {
                    children: [
                        "name : ",
                        this.state.userinfo.name
                    ]
                }),
                /*#__PURE__*/ (0, $9Yj41.jsxs)("h1", {
                    children: [
                        "followers : ",
                        this.state.userinfo.followers
                    ]
                }),
                /*#__PURE__*/ (0, $9Yj41.jsxs)("h1", {
                    children: [
                        "following : ",
                        this.state.userinfo.following
                    ]
                })
            ]
        });
    }
}
var $039d922179ceee11$export$2e2bcd8739ae039 = $039d922179ceee11$var$ProfileInfo;



var $an5iK = parcelRequire("an5iK");
// const About = () =>
// {
//     return (
//         <>
//         <h1> this is about us page of react </h1>
//         <li><Link to="profile">this is a way to profile</Link></li>
//         <ProfileInfo/>
//         <Outlet/>
//         </>
//     )
// }
class $8d35615b40d0066e$var$About extends (0, (/*@__PURE__*/$parcel$interopDefault($an5iK))).Component {
    constructor(props){
        super(props);
        console.log("Parent -- consturctor");
    }
    componentDidMount() {
        console.log("Parent -- componenet mount");
    }
    render() {
        console.log("Parent -- Render");
        return /*#__PURE__*/ (0, $9Yj41.jsxs)((0, $9Yj41.Fragment), {
            children: [
                /*#__PURE__*/ (0, $9Yj41.jsx)("h1", {
                    children: " this is about us page of react "
                }),
                /*#__PURE__*/ (0, $9Yj41.jsx)("li", {
                    children: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $0d658d5ad93027ec$export$a6c7ac8248d6e38a), {
                        to: "profile",
                        children: "this is a way to profile"
                    })
                }),
                /*#__PURE__*/ (0, $9Yj41.jsx)((0, $039d922179ceee11$export$2e2bcd8739ae039), {
                    name: "first"
                }),
                /*#__PURE__*/ (0, $9Yj41.jsx)((0, $039d922179ceee11$export$2e2bcd8739ae039), {
                    name: "second"
                })
            ]
        });
    }
}
var $8d35615b40d0066e$export$2e2bcd8739ae039 = $8d35615b40d0066e$var$About;



var $9Yj41 = parcelRequire("9Yj41");
const $87161a112a15f9a7$var$Contact = ()=>{
    return /*#__PURE__*/ (0, $9Yj41.jsx)("h1", {
        children: "this is contact us page"
    });
};
var $87161a112a15f9a7$export$2e2bcd8739ae039 = $87161a112a15f9a7$var$Contact;



var $9Yj41 = parcelRequire("9Yj41");




var $an5iK = parcelRequire("an5iK");

const $0d6c68672505ab80$var$restaurantMenu = (id)=>{
    const [restaurantInfo, setrestaurantInfo] = (0, $an5iK.useState)(null);
    async function getMenuData() {
        const data = await fetch((0, $57e601272047897c$export$dd647375149eac) + id);
        const json = await data.json();
        setrestaurantInfo(json?.data?.cards);
    }
    (0, $an5iK.useEffect)(()=>{
        getMenuData();
    }, []);
    return restaurantInfo;
};
var $0d6c68672505ab80$export$2e2bcd8739ae039 = $0d6c68672505ab80$var$restaurantMenu;


const $188b50d226df03ee$var$Menu = (data)=>{
    return /*#__PURE__*/ (0, $9Yj41.jsxs)((0, $9Yj41.Fragment), {
        children: [
            /*#__PURE__*/ (0, $9Yj41.jsxs)("h1", {
                children: [
                    data?.card?.card?.itemCards?.[0]?.card?.info?.category,
                    " "
                ]
            }, data?.card?.card?.itemCards?.card?.info?.id + 2000),
            data?.card?.card?.itemCards?.map((more)=>{
                return /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
                    className: "menu-contents",
                    children: [
                        /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
                            className: "menu-info",
                            children: [
                                /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {
                                    children: more?.card?.info?.name
                                }, more?.card?.info?.id + 501),
                                /*#__PURE__*/ (0, $9Yj41.jsxs)("p", {
                                    children: [
                                        "$ ",
                                        more?.card?.info?.price
                                    ]
                                }, more?.card?.info?.id + 502),
                                /*#__PURE__*/ (0, $9Yj41.jsx)("p", {
                                    children: more?.card?.info?.description
                                }, more?.card?.info?.id + 503)
                            ]
                        }, more?.card?.info?.id + 1001),
                        /*#__PURE__*/ (0, $9Yj41.jsx)("div", {
                            className: "menu-img",
                            children: /*#__PURE__*/ (0, $9Yj41.jsx)("img", {
                                src: (0, $57e601272047897c$export$3c67ec6258c4a827) + more?.card?.info?.imageId
                            })
                        }, more?.card?.info?.id + 1002)
                    ]
                }, more?.card?.info?.id);
            })
        ]
    });
};
const $188b50d226df03ee$var$RestaurantDetails = ()=>{
    const { id: id } = (0, $43f86cbc51c03ccf$export$99eaa27ddbbb95ef)();
    const restaurantInfo = (0, $0d6c68672505ab80$export$2e2bcd8739ae039)(id);
    return restaurantInfo == null ? /*#__PURE__*/ (0, $9Yj41.jsx)((0, $43096c75ddf8a8ed$export$9eeb9146fbfb500e), {}) : /*#__PURE__*/ (0, $9Yj41.jsxs)((0, $9Yj41.Fragment), {
        children: [
            /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
                className: "card-details",
                children: [
                    /*#__PURE__*/ (0, $9Yj41.jsxs)("h2", {
                        children: [
                            restaurantInfo?.[0]?.card?.card?.info?.name,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {
                        children: restaurantInfo?.[0]?.card?.card?.info?.cuisines.join(",")
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsxs)("h4", {
                        children: [
                            restaurantInfo?.[0]?.card?.card?.info?.avgRating,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h4", {
                        children: restaurantInfo?.[0]?.card?.card?.info?.totalRatingsString
                    })
                ]
            }, restaurantInfo?.[0]?.card?.card?.info?.id),
            /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
                className: "restaurant-menu",
                children: [
                    /*#__PURE__*/ (0, $9Yj41.jsx)("h1", {
                        children: "restaurant Menu"
                    }),
                    /*#__PURE__*/ (0, $9Yj41.jsx)("div", {
                        children: restaurantInfo?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((data)=>{
                            return /*#__PURE__*/ (0, $9Yj41.jsx)($188b50d226df03ee$var$Menu, {
                                ...data
                            });
                        })
                    })
                ]
            }, restaurantInfo?.[0]?.card?.card?.info?.id + 100)
        ]
    });
};
var $188b50d226df03ee$export$2e2bcd8739ae039 = $188b50d226df03ee$var$RestaurantDetails;



var $9Yj41 = parcelRequire("9Yj41");

const $be669718e98e4743$var$Error = ()=>{
    const err = (0, $43f86cbc51c03ccf$export$ed527bf60f6e05f2)();
    console.log(err);
    const { status: status, statusText: statusText } = err;
    return /*#__PURE__*/ (0, $9Yj41.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $9Yj41.jsx)("h1", {
                children: "oops!!!!"
            }),
            /*#__PURE__*/ (0, $9Yj41.jsx)("h2", {
                children: "something went wrong"
            }),
            /*#__PURE__*/ (0, $9Yj41.jsxs)("h2", {
                children: [
                    "Error code : ",
                    status
                ]
            }),
            /*#__PURE__*/ (0, $9Yj41.jsxs)("h2", {
                children: [
                    "status : ",
                    statusText
                ]
            })
        ]
    });
};
var $be669718e98e4743$export$2e2bcd8739ae039 = $be669718e98e4743$var$Error;






const $0deb3991047b8772$var$Instamart = /*#__PURE__*/ (0, $an5iK.lazy)(()=>(parcelRequire("Mo3ND")));
const $0deb3991047b8772$var$root = (0, (/*@__PURE__*/$parcel$interopDefault($ddee5f9eb529b191$exports))).createRoot(document.getElementById("root"));
// import Instamart from "./components/Instamart";
/*src\components\Shimmer.js
header  
    - logo
    - home 
    - about us
    - contact us
body
    -search bar
    - restaurant card

footer
    - important links
*/ const $0deb3991047b8772$var$Applayout = ()=>{
    return /*#__PURE__*/ (0, $9Yj41.jsxs)((0, $9Yj41.Fragment), {
        children: [
            /*#__PURE__*/ (0, $9Yj41.jsx)((0, $434a7183348a5bb7$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $9Yj41.jsx)((0, $43f86cbc51c03ccf$export$910ae8079b2c2852), {}),
            /*#__PURE__*/ (0, $9Yj41.jsx)((0, $970385ae1ece8627$export$2e2bcd8739ae039), {})
        ]
    });
};
const $0deb3991047b8772$var$AppRouter = (0, $0d658d5ad93027ec$export$1f3f55432a00e06d)([
    {
        path: "/",
        element: /*#__PURE__*/ (0, $9Yj41.jsx)($0deb3991047b8772$var$Applayout, {}),
        errorElement: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $be669718e98e4743$export$2e2bcd8739ae039), {}),
        children: [
            {
                path: "/",
                element: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $62e9add39c439cc9$export$2e2bcd8739ae039), {})
            },
            {
                path: "Aboutus",
                element: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $8d35615b40d0066e$export$2e2bcd8739ae039), {}),
                children: [
                    {
                        path: "profile",
                        element: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $039d922179ceee11$export$2e2bcd8739ae039), {
                            name: "ajinkya"
                        })
                    }
                ]
            },
            {
                path: "Contactus",
                element: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $87161a112a15f9a7$export$2e2bcd8739ae039), {})
            },
            {
                path: "More",
                element: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $9Yj41.Fragment), {})
            },
            {
                path: "Instamart",
                element: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $an5iK.Suspense), {
                    fallback: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $43096c75ddf8a8ed$export$2e2bcd8739ae039), {}),
                    children: /*#__PURE__*/ (0, $9Yj41.jsx)($0deb3991047b8772$var$Instamart, {})
                })
            },
            {
                path: "restaurant/:id",
                element: /*#__PURE__*/ (0, $9Yj41.jsx)((0, $188b50d226df03ee$export$2e2bcd8739ae039), {})
            }
        ]
    }
]);
// root.render(<Applayout/>);
$0deb3991047b8772$var$root.render(/*#__PURE__*/ (0, $9Yj41.jsx)((0, $43f86cbc51c03ccf$export$323e4fc2fa4753fb), {
    router: $0deb3991047b8772$var$AppRouter
}));


//# sourceMappingURL=index.a14e7e64.js.map
