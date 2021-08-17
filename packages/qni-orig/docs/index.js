/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// CONCATENATED MODULE: ./node_modules/@github/catalyst/lib/bind.js


var _marked = /*#__PURE__*/regenerator_default.a.mark(bindings);

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var controllers = new WeakSet();
/*
 * Bind `[data-action]` elements from the DOM to their actions.
 *
 */

function bind(controller) {
  controllers.add(controller);
  if (controller.shadowRoot) bindShadow(controller.shadowRoot);
  bindElements(controller);
  listenForBind(controller.ownerDocument);
}
function bindShadow(root) {
  bindElements(root);
  listenForBind(root);
}
var observers = new WeakMap();
/**
 * Set up observer that will make sure any actions that are dynamically
 * injected into `el` will be bound to it's controller.
 *
 * This returns a Subscription object which you can call `unsubscribe()` on to
 * stop further live updates.
 */

function listenForBind() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  if (observers.has(el)) return observers.get(el);
  var closed = false;
  var observer = new MutationObserver(function (mutations) {
    var _iterator = _createForOfIteratorHelper(mutations),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;

        if (mutation.type === 'attributes' && mutation.target instanceof Element) {
          bindActions(mutation.target);
        } else if (mutation.type === 'childList' && mutation.addedNodes.length) {
          var _iterator2 = _createForOfIteratorHelper(mutation.addedNodes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var node = _step2.value;

              if (node instanceof Element) {
                bindElements(node);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  observer.observe(el, {
    childList: true,
    subtree: true,
    attributeFilter: ['data-action']
  });
  var subscription = {
    get closed() {
      return closed;
    },

    unsubscribe: function unsubscribe() {
      closed = true;
      observers.delete(el);
      observer.disconnect();
    }
  };
  observers.set(el, subscription);
  return subscription;
}

function bindElements(root) {
  var _iterator3 = _createForOfIteratorHelper(root.querySelectorAll('[data-action]')),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var el = _step3.value;
      bindActions(el);
    } // Also bind the controller to itself

  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  if (root instanceof Element && root.hasAttribute('data-action')) {
    bindActions(root);
  }
} // Bind a single function to all events to avoid anonymous closure performance penalty.


function handleEvent(event) {
  var el = event.currentTarget;

  var _iterator4 = _createForOfIteratorHelper(bindings(el)),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var binding = _step4.value;

      if (event.type === binding.type) {
        var controller = el.closest(binding.tag);

        if (controllers.has(controller) && typeof controller[binding.method] === 'function') {
          controller[binding.method](event);
        }

        var root = el.getRootNode();

        if (root instanceof ShadowRoot && controllers.has(root.host) && root.host.matches(binding.tag)) {
          var shadowController = root.host;

          if (typeof shadowController[binding.method] === 'function') {
            shadowController[binding.method](event);
          }
        }
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}

function bindings(el) {
  var _iterator5, _step5, action, eventSep, methodSep;

  return regenerator_default.a.wrap(function bindings$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iterator5 = _createForOfIteratorHelper((el.getAttribute('data-action') || '').trim().split(/\s+/));
          _context.prev = 1;

          _iterator5.s();

        case 3:
          if ((_step5 = _iterator5.n()).done) {
            _context.next = 11;
            break;
          }

          action = _step5.value;
          eventSep = action.lastIndexOf(':');
          methodSep = action.lastIndexOf('#');
          _context.next = 9;
          return {
            type: action.slice(0, eventSep),
            tag: action.slice(eventSep + 1, methodSep),
            method: action.slice(methodSep + 1)
          };

        case 9:
          _context.next = 3;
          break;

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);

          _iterator5.e(_context.t0);

        case 16:
          _context.prev = 16;

          _iterator5.f();

          return _context.finish(16);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 13, 16, 19]]);
}

function bindActions(el) {
  var _iterator6 = _createForOfIteratorHelper(bindings(el)),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var binding = _step6.value;
      el.addEventListener(binding.type, handleEvent);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
}
// CONCATENATED MODULE: ./node_modules/@github/catalyst/lib/register.js
/**
 * Register the controller as a custom element.
 *
 * The classname is converted to a approriate tag name.
 *
 * Example: HelloController => hello-controller
 */
function register(classObject) {
  var name = classObject.name.replace(/([A-Z]($|[a-z]))/g, '-$1').replace(/(^-|-Element$)/g, '').toLowerCase();

  if (!window.customElements.get(name)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window[classObject.name] = classObject;
    window.customElements.define(name, classObject);
  }
}
// CONCATENATED MODULE: ./node_modules/@github/catalyst/lib/findtarget.js
function findtarget_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = findtarget_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function findtarget_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return findtarget_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return findtarget_arrayLikeToArray(o, minLen); }

function findtarget_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * findTarget will run `querySelectorAll` against the given controller, plus
 * its shadowRoot, returning any the first child that:
 *
 *  - Matches the selector of `[data-target~="tag.name"]` where tag is the
 *  tagName of the given HTMLElement, and `name` is the given `name` argument.
 *
 *  - Closest ascendant of the element, that matches the tagname of the
 *  controller, is the specific instance of the controller itself - in other
 *  words it is not nested in other controllers of the same type.
 *
 */
function findTarget(controller, name) {
  var tag = controller.tagName.toLowerCase();

  if (controller.shadowRoot) {
    var _iterator = findtarget_createForOfIteratorHelper(controller.shadowRoot.querySelectorAll("[data-target~=\"".concat(tag, ".").concat(name, "\"]"))),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var el = _step.value;
        if (!el.closest(tag)) return el;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  var _iterator2 = findtarget_createForOfIteratorHelper(controller.querySelectorAll("[data-target~=\"".concat(tag, ".").concat(name, "\"]"))),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _el = _step2.value;
      if (_el.closest(tag) === controller) return _el;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function findTargets(controller, name) {
  var tag = controller.tagName.toLowerCase();
  var targets = [];

  if (controller.shadowRoot) {
    var _iterator3 = findtarget_createForOfIteratorHelper(controller.shadowRoot.querySelectorAll("[data-targets~=\"".concat(tag, ".").concat(name, "\"]"))),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var el = _step3.value;
        if (!el.closest(tag)) targets.push(el);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }

  var _iterator4 = findtarget_createForOfIteratorHelper(controller.querySelectorAll("[data-targets~=\"".concat(tag, ".").concat(name, "\"]"))),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _el2 = _step4.value;
      if (_el2.closest(tag) === controller) targets.push(_el2);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return targets;
}
// CONCATENATED MODULE: ./node_modules/@github/catalyst/lib/target.js

/**
 * Target is a decorator which - when assigned to a property field on the
 * class - will override that class field, turning it into a Getter which
 * returns a call to `findTarget(this, key)` where `key` is the name of the
 * property field. In other words, `@target foo` becomes a getter for
 * `findTarget(this, 'foo')`.
 */

function target(proto, key) {
  return Object.defineProperty(proto, key, {
    configurable: true,
    get: function get() {
      return findTarget(this, key);
    }
  });
}
/**
 * Targets is a decorator which - when assigned to a property field on the
 * class - will override that class field, turning it into a Getter which
 * returns a call to `findTargets(this, key)` where `key` is the name of the
 * property field. In other words, `@targets foo` becomes a getter for
 * `findTargets(this, 'foo')`.
 */

function targets(proto, key) {
  return Object.defineProperty(proto, key, {
    configurable: true,
    get: function get() {
      return findTargets(this, key);
    }
  });
}
// CONCATENATED MODULE: ./node_modules/@github/catalyst/lib/auto-shadow-root.js
function auto_shadow_root_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = auto_shadow_root_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function auto_shadow_root_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return auto_shadow_root_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return auto_shadow_root_arrayLikeToArray(o, minLen); }

function auto_shadow_root_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function autoShadowRoot(element) {
  var _iterator = auto_shadow_root_createForOfIteratorHelper(element.querySelectorAll('template[data-shadowroot]')),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var template = _step.value;

      if (template.parentElement === element) {
        element.attachShadow({
          mode: template.getAttribute('data-shadowroot') === 'closed' ? 'closed' : 'open'
        }).append(template.content.cloneNode(true));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
// CONCATENATED MODULE: ./node_modules/@github/catalyst/lib/attr.js
function attr_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = attr_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function attr_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return attr_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return attr_arrayLikeToArray(o, minLen); }

function attr_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var attrs = new WeakMap();
/**
 * Attr is a decorator which tags a property as one to be initialized via
 * `initializeAttrs`.
 *
 * The signature is typed such that the property must be one of a String,
 * Number or Boolean. This matches the behavior of `initializeAttrs`.
 */

function attr_attr(proto, key) {
  if (!attrs.has(proto)) attrs.set(proto, []);
  attrs.get(proto).push(key);
}
/**
 * initializeAttrs is called with a set of class property names (if omitted, it
 * will look for any properties tagged with the `@attr` decorator). With this
 * list it defines property descriptors for each property that map to `data-*`
 * attributes on the HTMLElement instance.
 *
 * It works around Native Class Property semantics - which are equivalent to
 * calling `Object.defineProperty` on the instance upon creation, but before
 * `constructor()` is called.
 *
 * If a class property is assigned to the class body, it will infer the type
 * (using `typeof`) and define an appropriate getter/setter combo that aligns
 * to that type. This means class properties assigned to Numbers can only ever
 * be Numbers, assigned to Booleans can only ever be Booleans, and assigned to
 * Strings can only ever be Strings.
 *
 * This is automatically called as part of `@controller`. If a class uses the
 * `@controller` decorator it should not call this manually.
 */

function initializeAttrs(instance, names) {
  if (!names) names = attrs.get(Object.getPrototypeOf(instance)) || [];

  var _iterator = attr_createForOfIteratorHelper(names),
      _step;

  try {
    var _loop = function _loop() {
      var key = _step.value;
      var value = instance[key];
      var name = attrToAttributeName(key);
      var descriptor = {
        get: function get() {
          return this.getAttribute(name) || '';
        },
        set: function set(newValue) {
          this.setAttribute(name, newValue || '');
        }
      };

      if (typeof value === 'number') {
        descriptor = {
          get: function get() {
            return Number(this.getAttribute(name) || 0);
          },
          set: function set(newValue) {
            this.setAttribute(name, newValue);
          }
        };
      } else if (typeof value === 'boolean') {
        descriptor = {
          get: function get() {
            return this.hasAttribute(name);
          },
          set: function set(newValue) {
            this.toggleAttribute(name, newValue);
          }
        };
      }

      Object.defineProperty(instance, key, descriptor);

      if (key in instance && !instance.hasAttribute(name)) {
        descriptor.set.call(instance, value);
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function attrToAttributeName(name) {
  return "data-".concat(name.replace(/([A-Z]($|[a-z]))/g, '-$1')).replace(/--/g, '-').toLowerCase();
}

function defineObservedAttributes(classObject) {
  var observed = classObject.observedAttributes || [];
  Object.defineProperty(classObject, 'observedAttributes', {
    get: function get() {
      var attrMap = attrs.get(classObject.prototype);
      if (!attrMap) return observed;
      return attrMap.map(attrToAttributeName).concat(observed);
    },
    set: function set(attributes) {
      observed = attributes;
    }
  });
}
// CONCATENATED MODULE: ./node_modules/@github/catalyst/lib/controller.js




/**
 * Controller is a decorator to be used over a class that extends HTMLElement.
 * It will automatically `register()` the component in the customElement
 * registry, as well as ensuring `bind(this)` is called on `connectedCallback`,
 * wrapping the classes `connectedCallback` method if needed.
 */

function controller(classObject) {
  var connect = classObject.prototype.connectedCallback;

  classObject.prototype.connectedCallback = function () {
    this.toggleAttribute('data-catalyst', true);
    autoShadowRoot(this);
    initializeAttrs(this);
    bind(this);
    if (connect) connect.call(this);
    if (this.shadowRoot) bindShadow(this.shadowRoot);
  };

  defineObservedAttributes(classObject);
  register(classObject);
}
// CONCATENATED MODULE: ./node_modules/@github/catalyst/lib/index.js






// CONCATENATED MODULE: ./node_modules/@github/template-parts/lib/template-string-parser.js


var template_string_parser_marked = /*#__PURE__*/regenerator_default.a.mark(parse);

function parse(text) {
  var value, tokenStart, open, i;
  return regenerator_default.a.wrap(function parse$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          value = '';
          tokenStart = 0;
          open = false;
          i = 0;

        case 4:
          if (!(i < text.length)) {
            _context.next = 26;
            break;
          }

          if (!(text[i] === '{' && text[i + 1] === '{' && text[i - 1] !== '\\' && !open)) {
            _context.next = 15;
            break;
          }

          open = true;

          if (!value) {
            _context.next = 10;
            break;
          }

          _context.next = 10;
          return {
            type: 'string',
            start: tokenStart,
            end: i,
            value: value
          };

        case 10:
          value = '{{';
          tokenStart = i;
          i += 2;
          _context.next = 22;
          break;

        case 15:
          if (!(text[i] === '}' && text[i + 1] === '}' && text[i - 1] !== '\\' && open)) {
            _context.next = 22;
            break;
          }

          open = false;
          _context.next = 19;
          return {
            type: 'part',
            start: tokenStart,
            end: i + 2,
            value: value.slice(2).trim()
          };

        case 19:
          value = '';
          i += 2;
          tokenStart = i;

        case 22:
          value += text[i] || '';

        case 23:
          i += 1;
          _context.next = 4;
          break;

        case 26:
          if (!value) {
            _context.next = 29;
            break;
          }

          _context.next = 29;
          return {
            type: 'string',
            start: tokenStart,
            end: text.length,
            value: value
          };

        case 29:
        case "end":
          return _context.stop();
      }
    }
  }, template_string_parser_marked);
}
// CONCATENATED MODULE: ./node_modules/@github/template-parts/lib/attribute-template-part.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
};

var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
};

var _setter, _value;

var AttributeTemplatePart = /*#__PURE__*/function () {
  function AttributeTemplatePart(setter, expression) {
    _classCallCheck(this, AttributeTemplatePart);

    this.expression = expression;

    _setter.set(this, void 0);

    _value.set(this, '');

    __classPrivateFieldSet(this, _setter, setter);

    __classPrivateFieldGet(this, _setter).updateParent('');
  }

  _createClass(AttributeTemplatePart, [{
    key: "attributeName",
    get: function get() {
      return __classPrivateFieldGet(this, _setter).attr.name;
    }
  }, {
    key: "attributeNamespace",
    get: function get() {
      return __classPrivateFieldGet(this, _setter).attr.namespaceURI;
    }
  }, {
    key: "value",
    get: function get() {
      return __classPrivateFieldGet(this, _value);
    },
    set: function set(value) {
      __classPrivateFieldSet(this, _value, value || '');

      __classPrivateFieldGet(this, _setter).updateParent(value);
    }
  }, {
    key: "element",
    get: function get() {
      return __classPrivateFieldGet(this, _setter).element;
    }
  }, {
    key: "booleanValue",
    get: function get() {
      return __classPrivateFieldGet(this, _setter).booleanValue;
    },
    set: function set(value) {
      __classPrivateFieldGet(this, _setter).booleanValue = value;
    }
  }]);

  return AttributeTemplatePart;
}();
_setter = new WeakMap(), _value = new WeakMap();
var AttributeValueSetter = /*#__PURE__*/function () {
  function AttributeValueSetter(element, attr) {
    _classCallCheck(this, AttributeValueSetter);

    this.element = element;
    this.attr = attr;
    this.partList = [];
  }

  _createClass(AttributeValueSetter, [{
    key: "booleanValue",
    get: function get() {
      return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name);
    },
    set: function set(value) {
      if (this.partList.length !== 1) {
        throw new DOMException('Operation not supported', 'NotSupportedError');
      }

      ;
      this.partList[0].value = value ? '' : null;
    }
  }, {
    key: "append",
    value: function append(part) {
      this.partList.push(part);
    }
  }, {
    key: "updateParent",
    value: function updateParent(partValue) {
      if (this.partList.length === 1 && partValue === null) {
        this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
      } else {
        var str = this.partList.map(function (s) {
          return typeof s === 'string' ? s : s.value;
        }).join('');
        this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, str);
      }
    }
  }]);

  return AttributeValueSetter;
}();
// CONCATENATED MODULE: ./node_modules/@github/template-parts/lib/node-template-part.js
function node_template_part_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = node_template_part_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || node_template_part_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function node_template_part_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return node_template_part_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return node_template_part_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return node_template_part_arrayLikeToArray(arr); }

function node_template_part_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function node_template_part_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function node_template_part_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function node_template_part_createClass(Constructor, protoProps, staticProps) { if (protoProps) node_template_part_defineProperties(Constructor.prototype, protoProps); if (staticProps) node_template_part_defineProperties(Constructor, staticProps); return Constructor; }

var node_template_part_classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
};

var node_template_part_classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
};

var _parts;

var NodeTemplatePart = /*#__PURE__*/function () {
  function NodeTemplatePart(node, expression) {
    node_template_part_classCallCheck(this, NodeTemplatePart);

    this.expression = expression;

    _parts.set(this, void 0);

    node_template_part_classPrivateFieldSet(this, _parts, [node]);

    node.textContent = '';
  }

  node_template_part_createClass(NodeTemplatePart, [{
    key: "value",
    get: function get() {
      return node_template_part_classPrivateFieldGet(this, _parts).map(function (node) {
        return node.textContent;
      }).join('');
    },
    set: function set(string) {
      this.replace(string);
    }
  }, {
    key: "previousSibling",
    get: function get() {
      return node_template_part_classPrivateFieldGet(this, _parts)[0].previousSibling;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      return node_template_part_classPrivateFieldGet(this, _parts)[node_template_part_classPrivateFieldGet(this, _parts).length - 1].nextSibling;
    }
  }, {
    key: "replace",
    value: function replace() {
      var _classPrivateFieldGe;

      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      var parts = nodes.map(function (node) {
        if (typeof node === 'string') return new Text(node);
        return node;
      });
      if (!parts.length) parts.push(new Text(''));

      (_classPrivateFieldGe = node_template_part_classPrivateFieldGet(this, _parts)[0]).before.apply(_classPrivateFieldGe, _toConsumableArray(parts));

      var _iterator = node_template_part_createForOfIteratorHelper(node_template_part_classPrivateFieldGet(this, _parts)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;
          part.remove();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      node_template_part_classPrivateFieldSet(this, _parts, parts);
    }
  }]);

  return NodeTemplatePart;
}();
_parts = new WeakMap();
// CONCATENATED MODULE: ./node_modules/@github/template-parts/lib/processors.js
function processors_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = processors_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function processors_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return processors_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return processors_arrayLikeToArray(o, minLen); }

function processors_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


function createProcessor(processPart) {
  return {
    createCallback: function createCallback(instance, parts, params) {
      this.processCallback(instance, parts, params);
    },
    processCallback: function processCallback(_, parts, params) {
      var _a;

      if (_typeof(params) !== 'object' || !params) return;

      var _iterator = processors_createForOfIteratorHelper(parts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;

          if (part.expression in params) {
            var value = (_a = params[part.expression]) !== null && _a !== void 0 ? _a : '';
            processPart(part, value);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };
}
function processPropertyIdentity(part, value) {
  part.value = String(value);
}
function processBooleanAttribute(part, value) {
  if (typeof value === 'boolean' && part instanceof AttributeTemplatePart && typeof part.element[part.attributeName] === 'boolean') {
    part.booleanValue = value;
    return true;
  }

  return false;
}
var propertyIdentity = createProcessor(processPropertyIdentity);
var propertyIdentityOrBooleanAttribute = createProcessor(function (part, value) {
  processBooleanAttribute(part, value) || processPropertyIdentity(part, value);
});
// CONCATENATED MODULE: ./node_modules/@github/template-parts/lib/template-instance.js
function template_instance_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { template_instance_typeof = function _typeof(obj) { return typeof obj; }; } else { template_instance_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return template_instance_typeof(obj); }

function template_instance_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function template_instance_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function template_instance_createClass(Constructor, protoProps, staticProps) { if (protoProps) template_instance_defineProperties(Constructor.prototype, protoProps); if (staticProps) template_instance_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (template_instance_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var template_instance_marked = /*#__PURE__*/regenerator_default.a.mark(collectParts);

function template_instance_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = template_instance_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function template_instance_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return template_instance_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return template_instance_arrayLikeToArray(o, minLen); }

function template_instance_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var template_instance_classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
};

var template_instance_classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
};

var _processor, template_instance_parts;






function collectParts(el) {
  var walker, node, i, attr, valueSetter, _iterator, _step, token, part, _iterator2, _step2, _token;

  return regenerator_default.a.wrap(function collectParts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          walker = el.ownerDocument.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false);

        case 1:
          if (!(node = walker.nextNode())) {
            _context.next = 59;
            break;
          }

          if (!(node instanceof Element && node.hasAttributes())) {
            _context.next = 36;
            break;
          }

          i = 0;

        case 4:
          if (!(i < node.attributes.length)) {
            _context.next = 34;
            break;
          }

          attr = node.attributes.item(i);

          if (!(attr && attr.value.includes('{{'))) {
            _context.next = 31;
            break;
          }

          valueSetter = new AttributeValueSetter(node, attr);
          _iterator = template_instance_createForOfIteratorHelper(parse(attr.value));
          _context.prev = 9;

          _iterator.s();

        case 11:
          if ((_step = _iterator.n()).done) {
            _context.next = 23;
            break;
          }

          token = _step.value;

          if (!(token.type === 'string')) {
            _context.next = 17;
            break;
          }

          valueSetter.append(token.value);
          _context.next = 21;
          break;

        case 17:
          part = new AttributeTemplatePart(valueSetter, token.value);
          valueSetter.append(part);
          _context.next = 21;
          return part;

        case 21:
          _context.next = 11;
          break;

        case 23:
          _context.next = 28;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](9);

          _iterator.e(_context.t0);

        case 28:
          _context.prev = 28;

          _iterator.f();

          return _context.finish(28);

        case 31:
          i += 1;
          _context.next = 4;
          break;

        case 34:
          _context.next = 57;
          break;

        case 36:
          if (!(node instanceof Text && node.textContent && node.textContent.includes('{{'))) {
            _context.next = 57;
            break;
          }

          _iterator2 = template_instance_createForOfIteratorHelper(parse(node.textContent));
          _context.prev = 38;

          _iterator2.s();

        case 40:
          if ((_step2 = _iterator2.n()).done) {
            _context.next = 49;
            break;
          }

          _token = _step2.value;
          if (_token.end < node.textContent.length) node.splitText(_token.end);

          if (!(_token.type === 'part')) {
            _context.next = 46;
            break;
          }

          _context.next = 46;
          return new NodeTemplatePart(node, _token.value);

        case 46:
          return _context.abrupt("break", 49);

        case 47:
          _context.next = 40;
          break;

        case 49:
          _context.next = 54;
          break;

        case 51:
          _context.prev = 51;
          _context.t1 = _context["catch"](38);

          _iterator2.e(_context.t1);

        case 54:
          _context.prev = 54;

          _iterator2.f();

          return _context.finish(54);

        case 57:
          _context.next = 1;
          break;

        case 59:
        case "end":
          return _context.stop();
      }
    }
  }, template_instance_marked, null, [[9, 25, 28, 31], [38, 51, 54, 57]]);
}

var template_instance_TemplateInstance = /*#__PURE__*/function (_DocumentFragment) {
  _inherits(TemplateInstance, _DocumentFragment);

  var _super = _createSuper(TemplateInstance);

  function TemplateInstance(template, params) {
    var _this;

    var processor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : propertyIdentity;

    template_instance_classCallCheck(this, TemplateInstance);

    var _a, _b;

    _this = _super.call(this);

    _processor.set(_assertThisInitialized(_this), void 0);

    template_instance_parts.set(_assertThisInitialized(_this), void 0); // This is to fix an inconsistency in Safari which prevents us from
    // correctly sub-classing DocumentFragment.
    // https://bugs.webkit.org/show_bug.cgi?id=195556


    if (Object.getPrototypeOf(_assertThisInitialized(_this) !== TemplateInstance.prototype)) {
      Object.setPrototypeOf(_assertThisInitialized(_this), TemplateInstance.prototype);
    }

    _this.appendChild(template.content.cloneNode(true));

    template_instance_classPrivateFieldSet(_assertThisInitialized(_this), template_instance_parts, Array.from(collectParts(_assertThisInitialized(_this))));

    template_instance_classPrivateFieldSet(_assertThisInitialized(_this), _processor, processor);

    (_b = (_a = template_instance_classPrivateFieldGet(_assertThisInitialized(_this), _processor)).createCallback) === null || _b === void 0 ? void 0 : _b.call(_a, _assertThisInitialized(_this), template_instance_classPrivateFieldGet(_assertThisInitialized(_this), template_instance_parts), params);
    return _this;
  }

  template_instance_createClass(TemplateInstance, [{
    key: "update",
    value: function update(params) {
      template_instance_classPrivateFieldGet(this, _processor).processCallback(this, template_instance_classPrivateFieldGet(this, template_instance_parts), params);
    }
  }]);

  return TemplateInstance;
}( /*#__PURE__*/_wrapNativeSuper(DocumentFragment));
_processor = new WeakMap(), template_instance_parts = new WeakMap();
// CONCATENATED MODULE: ./node_modules/@github/template-parts/lib/index.js





// CONCATENATED MODULE: ./node_modules/@github/jtml/lib/directive.js
var directives = new WeakSet();
function isDirective(directiveCallback) {
  return directives.has(directiveCallback);
}
function processDirective(part, value) {
  if (isDirective(value)) {
    value(part);
    return true;
  }

  return false;
}
function directive(directiveFactory) {
  return function () {
    var callback = directiveFactory.apply(void 0, arguments);
    directives.add(callback);
    return callback;
  };
}
// CONCATENATED MODULE: ./node_modules/@github/jtml/lib/events.js
function events_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { events_typeof = function _typeof(obj) { return typeof obj; }; } else { events_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return events_typeof(obj); }

function events_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function events_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function events_createClass(Constructor, protoProps, staticProps) { if (protoProps) events_defineProperties(Constructor.prototype, protoProps); if (staticProps) events_defineProperties(Constructor, staticProps); return Constructor; }


var eventListeners = new WeakMap();

var EventHandler = /*#__PURE__*/function () {
  function EventHandler(element, type) {
    events_classCallCheck(this, EventHandler);

    this.element = element;
    this.type = type;
    this.element.addEventListener(this.type, this);
    eventListeners.get(this.element).set(this.type, this);
  }

  events_createClass(EventHandler, [{
    key: "set",
    value: function set(listener) {
      if (typeof listener == 'function') {
        this.handleEvent = listener.bind(this.element);
      } else if (events_typeof(listener) === 'object' && typeof listener.handleEvent === 'function') {
        this.handleEvent = listener.handleEvent.bind(listener);
      } else {
        this.element.removeEventListener(this.type, this);
        eventListeners.get(this.element).delete(this.type);
      }
    }
  }], [{
    key: "for",
    value: function _for(part) {
      if (!eventListeners.has(part.element)) eventListeners.set(part.element, new Map());
      var type = part.attributeName.slice(2);
      var elementListeners = eventListeners.get(part.element);
      if (elementListeners.has(type)) return elementListeners.get(type);
      return new EventHandler(part.element, type);
    }
  }]);

  return EventHandler;
}();

function processEvent(part, value) {
  if (part instanceof AttributeTemplatePart && part.attributeName.startsWith('on')) {
    EventHandler.for(part).set(value);
    part.element.removeAttributeNS(part.attributeNamespace, part.attributeName);
    return true;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/@github/jtml/lib/html.js
function html_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function html_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function html_createClass(Constructor, protoProps, staticProps) { if (protoProps) html_defineProperties(Constructor.prototype, protoProps); if (staticProps) html_defineProperties(Constructor, staticProps); return Constructor; }

function html_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = html_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function html_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { html_typeof = function _typeof(obj) { return typeof obj; }; } else { html_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return html_typeof(obj); }

function html_toConsumableArray(arr) { return html_arrayWithoutHoles(arr) || html_iterableToArray(arr) || html_unsupportedIterableToArray(arr) || html_nonIterableSpread(); }

function html_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function html_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return html_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return html_arrayLikeToArray(o, minLen); }

function html_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function html_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return html_arrayLikeToArray(arr); }

function html_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function processSubTemplate(part, value) {
  if (value instanceof html_TemplateResult && part instanceof NodeTemplatePart) {
    value.renderInto(part);
    return true;
  }

  return false;
}

function processDocumentFragment(part, value) {
  if (value instanceof DocumentFragment && part instanceof NodeTemplatePart) {
    if (value.childNodes.length) part.replace.apply(part, html_toConsumableArray(value.childNodes));
    return true;
  }

  return false;
}

function isIterable(value) {
  return html_typeof(value) === 'object' && Symbol.iterator in value;
}

function processIterable(part, value) {
  if (!isIterable(value)) return false;

  if (part instanceof NodeTemplatePart) {
    var nodes = [];

    var _iterator = html_createForOfIteratorHelper(value),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (item instanceof html_TemplateResult) {
          var fragment = document.createDocumentFragment();
          item.renderInto(fragment);
          nodes.push.apply(nodes, html_toConsumableArray(fragment.childNodes));
        } else if (item instanceof DocumentFragment) {
          nodes.push.apply(nodes, html_toConsumableArray(item.childNodes));
        } else {
          nodes.push(String(item));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    if (nodes.length) part.replace.apply(part, nodes);
    return true;
  } else {
    part.value = Array.from(value).join(' ');
    return true;
  }
}

function processPart(part, value) {
  processDirective(part, value) || processBooleanAttribute(part, value) || processEvent(part, value) || processSubTemplate(part, value) || processDocumentFragment(part, value) || processIterable(part, value) || processPropertyIdentity(part, value);
}
var templates = new WeakMap();
var renderedTemplates = new WeakMap();
var renderedTemplateInstances = new WeakMap();
var html_TemplateResult = /*#__PURE__*/function () {
  function TemplateResult(strings, values, processor) {
    html_classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.processor = processor;
  }

  html_createClass(TemplateResult, [{
    key: "template",
    get: function get() {
      if (templates.has(this.strings)) {
        return templates.get(this.strings);
      } else {
        var template = document.createElement('template');
        var end = this.strings.length - 1;
        template.innerHTML = this.strings.reduce(function (str, cur, i) {
          return str + cur + (i < end ? "{{ ".concat(i, " }}") : '');
        }, '');
        templates.set(this.strings, template);
        return template;
      }
    }
  }, {
    key: "renderInto",
    value: function renderInto(element) {
      var template = this.template;

      if (renderedTemplates.get(element) !== template) {
        renderedTemplates.set(element, template);
        var instance = new template_instance_TemplateInstance(template, this.values, this.processor);
        renderedTemplateInstances.set(element, instance);

        if (element instanceof NodeTemplatePart) {
          element.replace.apply(element, html_toConsumableArray(instance.children));
        } else {
          element.appendChild(instance);
        }

        return;
      }

      renderedTemplateInstances.get(element).update(this.values);
    }
  }]);

  return TemplateResult;
}();
var defaultProcessor = createProcessor(processPart);
function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new html_TemplateResult(strings, values, defaultProcessor);
}
function render(result, element) {
  result.renderInto(element);
}
// CONCATENATED MODULE: ./node_modules/@github/jtml/lib/until.js


var untils = new WeakMap();
var until = directive(function () {
  for (var _len = arguments.length, promises = new Array(_len), _key = 0; _key < _len; _key++) {
    promises[_key] = arguments[_key];
  }

  return function (part) {
    if (!untils.has(part)) untils.set(part, {
      i: promises.length
    });
    var state = untils.get(part);

    var _loop = function _loop(i) {
      if (promises[i] instanceof Promise) {
        // eslint-disable-next-line github/no-then
        Promise.resolve(promises[i]).then(function (value) {
          if (i < state.i) {
            state.i = i;
            processPart(part, value);
          }
        });
      } else if (i <= state.i) {
        state.i = i;
        processPart(part, promises[i]);
      }
    };

    for (var i = 0; i < promises.length; i += 1) {
      _loop(i);
    }
  };
});
// CONCATENATED MODULE: ./node_modules/@github/jtml/lib/unsafe-html.js
function unsafe_html_toConsumableArray(arr) { return unsafe_html_arrayWithoutHoles(arr) || unsafe_html_iterableToArray(arr) || unsafe_html_unsupportedIterableToArray(arr) || unsafe_html_nonIterableSpread(); }

function unsafe_html_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function unsafe_html_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return unsafe_html_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return unsafe_html_arrayLikeToArray(o, minLen); }

function unsafe_html_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function unsafe_html_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return unsafe_html_arrayLikeToArray(arr); }

function unsafe_html_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var unsafeHTML = directive(function (value) {
  return function (part) {
    if (!(part instanceof NodeTemplatePart)) return;
    var template = document.createElement('template');
    template.innerHTML = value;
    var fragment = document.importNode(template.content, true);
    part.replace.apply(part, unsafe_html_toConsumableArray(fragment.childNodes));
  };
});
// CONCATENATED MODULE: ./node_modules/@github/jtml/lib/index.js




// CONCATENATED MODULE: ./app/components/circuit_dropzone_component/circuitDropzoneElement.ts
var _templateObject,_class,_class2,_descriptor,_descriptor2,_descriptor3,_descriptor4,_templateObject2;function _initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function circuitDropzoneElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function circuitDropzoneElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function circuitDropzoneElement_createClass(Constructor,protoProps,staticProps){if(protoProps)circuitDropzoneElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)circuitDropzoneElement_defineProperties(Constructor,staticProps);return Constructor;}function circuitDropzoneElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)circuitDropzoneElement_setPrototypeOf(subClass,superClass);}function circuitDropzoneElement_createSuper(Derived){var hasNativeReflectConstruct=circuitDropzoneElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=circuitDropzoneElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=circuitDropzoneElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return circuitDropzoneElement_possibleConstructorReturn(this,result);};}function circuitDropzoneElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return circuitDropzoneElement_assertThisInitialized(self);}function circuitDropzoneElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function circuitDropzoneElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;circuitDropzoneElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!circuitDropzoneElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return circuitDropzoneElement_construct(Class,arguments,circuitDropzoneElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return circuitDropzoneElement_setPrototypeOf(Wrapper,Class);};return circuitDropzoneElement_wrapNativeSuper(Class);}function circuitDropzoneElement_construct(Parent,args,Class){if(circuitDropzoneElement_isNativeReflectConstruct()){circuitDropzoneElement_construct=Reflect.construct;}else{circuitDropzoneElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)circuitDropzoneElement_setPrototypeOf(instance,Class.prototype);return instance;};}return circuitDropzoneElement_construct.apply(null,arguments);}function circuitDropzoneElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function circuitDropzoneElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function circuitDropzoneElement_setPrototypeOf(o,p){circuitDropzoneElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return circuitDropzoneElement_setPrototypeOf(o,p);}function circuitDropzoneElement_getPrototypeOf(o){circuitDropzoneElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return circuitDropzoneElement_getPrototypeOf(o);}function _applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function _initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var wires=html(_templateObject||(_templateObject=_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-left\"\n    x1=\"0\"\n    y1=\"50\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-right\"\n    x1=\"50\"\n    y1=\"50\"\n    x2=\"100\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg> "])));// @ts-ignore
var circuitDropzoneElement_CircuitDropzoneElement=controller(_class=(_class2=/*#__PURE__*/function(_HTMLElement){circuitDropzoneElement_inherits(CircuitDropzoneElement,_HTMLElement);var _super=circuitDropzoneElement_createSuper(CircuitDropzoneElement);function CircuitDropzoneElement(){var _this;circuitDropzoneElement_classCallCheck(this,CircuitDropzoneElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_initializerDefineProperty(_this,"wireTop",_descriptor,circuitDropzoneElement_assertThisInitialized(_this));_initializerDefineProperty(_this,"wireBottom",_descriptor2,circuitDropzoneElement_assertThisInitialized(_this));_initializerDefineProperty(_this,"body",_descriptor3,circuitDropzoneElement_assertThisInitialized(_this));_initializerDefineProperty(_this,"draggable",_descriptor4,circuitDropzoneElement_assertThisInitialized(_this));return _this;}circuitDropzoneElement_createClass(CircuitDropzoneElement,[{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-wire-top"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireTopClassString);}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireBottomClassString);}}},{key:"update",value:function update(){render(html(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["<style>\n          #body {\n            position: relative;\n            height: 2rem;\n            width: 3rem;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            color: var(--colors-gate, #43c000);\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\""," ","\"\n          data-target=\"circuit-dropzone.body\"\n        >\n          ","\n          <slot></slot>\n        </div>"])),this.wireTopClassString,this.wireBottomClassString,wires),this.shadowRoot);}},{key:"wireTopClassString",get:function get(){return this.wireTop?"wire-top":"";}},{key:"wireBottomClassString",get:function get(){return this.wireBottom?"wire-bottom":"";}}]);return CircuitDropzoneElement;}(/*#__PURE__*/circuitDropzoneElement_wrapNativeSuper(HTMLElement)),(_descriptor=_applyDecoratedDescriptor(_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),_descriptor2=_applyDecoratedDescriptor(_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),_descriptor3=_applyDecoratedDescriptor(_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),_descriptor4=_applyDecoratedDescriptor(_class2.prototype,"draggable",[target],{configurable:true,enumerable:true,writable:true,initializer:null})),_class2))||_class;
// CONCATENATED MODULE: ./app/components/circuit_step_component/circuitStepElement.ts
var circuitStepElement_class,circuitStepElement_class2,circuitStepElement_descriptor,circuitStepElement_descriptor2,circuitStepElement_descriptor3,circuitStepElement_descriptor4,circuitStepElement_templateObject;function circuitStepElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function circuitStepElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function circuitStepElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function circuitStepElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function circuitStepElement_createClass(Constructor,protoProps,staticProps){if(protoProps)circuitStepElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)circuitStepElement_defineProperties(Constructor,staticProps);return Constructor;}function circuitStepElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)circuitStepElement_setPrototypeOf(subClass,superClass);}function circuitStepElement_createSuper(Derived){var hasNativeReflectConstruct=circuitStepElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=circuitStepElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=circuitStepElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return circuitStepElement_possibleConstructorReturn(this,result);};}function circuitStepElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return circuitStepElement_assertThisInitialized(self);}function circuitStepElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function circuitStepElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;circuitStepElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!circuitStepElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return circuitStepElement_construct(Class,arguments,circuitStepElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return circuitStepElement_setPrototypeOf(Wrapper,Class);};return circuitStepElement_wrapNativeSuper(Class);}function circuitStepElement_construct(Parent,args,Class){if(circuitStepElement_isNativeReflectConstruct()){circuitStepElement_construct=Reflect.construct;}else{circuitStepElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)circuitStepElement_setPrototypeOf(instance,Class.prototype);return instance;};}return circuitStepElement_construct.apply(null,arguments);}function circuitStepElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function circuitStepElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function circuitStepElement_setPrototypeOf(o,p){circuitStepElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return circuitStepElement_setPrototypeOf(o,p);}function circuitStepElement_getPrototypeOf(o){circuitStepElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return circuitStepElement_getPrototypeOf(o);}function circuitStepElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function circuitStepElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}var circuitStepElement_CircuitStepElement=controller(circuitStepElement_class=(circuitStepElement_class2=/*#__PURE__*/function(_HTMLElement){circuitStepElement_inherits(CircuitStepElement,_HTMLElement);var _super=circuitStepElement_createSuper(CircuitStepElement);function CircuitStepElement(){var _this;circuitStepElement_classCallCheck(this,CircuitStepElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));circuitStepElement_initializerDefineProperty(_this,"dropzones",circuitStepElement_descriptor,circuitStepElement_assertThisInitialized(_this));circuitStepElement_initializerDefineProperty(_this,"controlGates",circuitStepElement_descriptor2,circuitStepElement_assertThisInitialized(_this));circuitStepElement_initializerDefineProperty(_this,"swapGates",circuitStepElement_descriptor3,circuitStepElement_assertThisInitialized(_this));circuitStepElement_initializerDefineProperty(_this,"controllableGates",circuitStepElement_descriptor4,circuitStepElement_assertThisInitialized(_this));return _this;}circuitStepElement_createClass(CircuitStepElement,[{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"update",value:function update(){render(html(circuitStepElement_templateObject||(circuitStepElement_templateObject=circuitStepElement_taggedTemplateLiteral(["<style>\n          #body {\n            display: flex;\n            flex-direction: column;\n          }\n\n          ::slotted(circuit-dropzone:nth-of-type(n + 2)) {\n            margin-top: 1rem;\n          }\n        </style>\n\n        <div id=\"body\">\n          <slot></slot>\n        </div>"]))),this.shadowRoot);}},{key:"bit",value:function bit(gate){var dropzoneEl=gate.parentElement;if(dropzoneEl===null){throw new Error("Dropzone not found");}return this.dropzones.indexOf(dropzoneEl);}}]);return CircuitStepElement;}(/*#__PURE__*/circuitStepElement_wrapNativeSuper(HTMLElement)),(circuitStepElement_descriptor=circuitStepElement_applyDecoratedDescriptor(circuitStepElement_class2.prototype,"dropzones",[targets],{configurable:true,enumerable:true,writable:true,initializer:null}),circuitStepElement_descriptor2=circuitStepElement_applyDecoratedDescriptor(circuitStepElement_class2.prototype,"controlGates",[targets],{configurable:true,enumerable:true,writable:true,initializer:null}),circuitStepElement_descriptor3=circuitStepElement_applyDecoratedDescriptor(circuitStepElement_class2.prototype,"swapGates",[targets],{configurable:true,enumerable:true,writable:true,initializer:null}),circuitStepElement_descriptor4=circuitStepElement_applyDecoratedDescriptor(circuitStepElement_class2.prototype,"controllableGates",[targets],{configurable:true,enumerable:true,writable:true,initializer:null})),circuitStepElement_class2))||circuitStepElement_class;
// CONCATENATED MODULE: ./app/components/quantum_circuit_component/quantumCircuitElement.ts
var quantumCircuitElement_class,quantumCircuitElement_class2,quantumCircuitElement_descriptor,quantumCircuitElement_descriptor2,quantumCircuitElement_descriptor3,quantumCircuitElement_templateObject;function quantumCircuitElement_createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=quantumCircuitElement_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e){throw _e;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e2){didErr=true;err=_e2;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function quantumCircuitElement_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return quantumCircuitElement_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return quantumCircuitElement_arrayLikeToArray(o,minLen);}function quantumCircuitElement_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function quantumCircuitElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function quantumCircuitElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function quantumCircuitElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function quantumCircuitElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function quantumCircuitElement_createClass(Constructor,protoProps,staticProps){if(protoProps)quantumCircuitElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)quantumCircuitElement_defineProperties(Constructor,staticProps);return Constructor;}function quantumCircuitElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)quantumCircuitElement_setPrototypeOf(subClass,superClass);}function quantumCircuitElement_createSuper(Derived){var hasNativeReflectConstruct=quantumCircuitElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=quantumCircuitElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=quantumCircuitElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return quantumCircuitElement_possibleConstructorReturn(this,result);};}function quantumCircuitElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return quantumCircuitElement_assertThisInitialized(self);}function quantumCircuitElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function quantumCircuitElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;quantumCircuitElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!quantumCircuitElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return quantumCircuitElement_construct(Class,arguments,quantumCircuitElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return quantumCircuitElement_setPrototypeOf(Wrapper,Class);};return quantumCircuitElement_wrapNativeSuper(Class);}function quantumCircuitElement_construct(Parent,args,Class){if(quantumCircuitElement_isNativeReflectConstruct()){quantumCircuitElement_construct=Reflect.construct;}else{quantumCircuitElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)quantumCircuitElement_setPrototypeOf(instance,Class.prototype);return instance;};}return quantumCircuitElement_construct.apply(null,arguments);}function quantumCircuitElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function quantumCircuitElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function quantumCircuitElement_setPrototypeOf(o,p){quantumCircuitElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return quantumCircuitElement_setPrototypeOf(o,p);}function quantumCircuitElement_getPrototypeOf(o){quantumCircuitElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return quantumCircuitElement_getPrototypeOf(o);}function quantumCircuitElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function quantumCircuitElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}var quantumCircuitElement_QuantumCircuitElement=controller(quantumCircuitElement_class=(quantumCircuitElement_class2=/*#__PURE__*/function(_HTMLElement){quantumCircuitElement_inherits(QuantumCircuitElement,_HTMLElement);var _super=quantumCircuitElement_createSuper(QuantumCircuitElement);function QuantumCircuitElement(){var _this;quantumCircuitElement_classCallCheck(this,QuantumCircuitElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));quantumCircuitElement_initializerDefineProperty(_this,"json",quantumCircuitElement_descriptor,quantumCircuitElement_assertThisInitialized(_this));quantumCircuitElement_initializerDefineProperty(_this,"body",quantumCircuitElement_descriptor2,quantumCircuitElement_assertThisInitialized(_this));quantumCircuitElement_initializerDefineProperty(_this,"circuitSteps",quantumCircuitElement_descriptor3,quantumCircuitElement_assertThisInitialized(_this));return _this;}quantumCircuitElement_createClass(QuantumCircuitElement,[{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-json"&&oldValue!==newValue&&this.body){this.body.innerHTML="";this.body.append(this.circuitStepFragment);this.updateConnections();}}},{key:"update",value:function update(){render(html(quantumCircuitElement_templateObject||(quantumCircuitElement_templateObject=quantumCircuitElement_taggedTemplateLiteral(["<style>\n          #body {\n            display: flex;\n            flex-direction: row;\n          }\n        </style>\n\n        <div id=\"body\" data-target=\"quantum-circuit.body\">\n          <slot></slot>\n          ","\n        </div>"])),this.circuitStepFragment),this.shadowRoot);this.updateConnections();}},{key:"circuitStepFragment",get:function get(){var frag=document.createDocumentFragment();if(this.json==="")return frag;var jsonData=JSON.parse(this.json);var _iterator=quantumCircuitElement_createForOfIteratorHelper(jsonData.cols),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var step=_step.value;var circuitStep=document.createElement("circuit-step");circuitStep.setAttribute("data-targets","quantum-circuit.circuitSteps");var _iterator2=quantumCircuitElement_createForOfIteratorHelper(step),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var instruction=_step2.value;var dropzone=document.createElement("circuit-dropzone");dropzone.setAttribute("data-targets","circuit-step.dropzones");switch(true){case /^\|0>$/.test(instruction):{var writeGate=document.createElement("write-gate");writeGate.setAttribute("data-value","0");dropzone.append(writeGate);break;}case /^\|1>$/.test(instruction):{var _writeGate=document.createElement("write-gate");_writeGate.setAttribute("data-value","1");dropzone.append(_writeGate);break;}case /^H$/.test(instruction):{var hGate=document.createElement("h-gate");hGate.setAttribute("data-targets","circuit-step.controllableGates");hGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(hGate);break;}case /^X$/.test(instruction):{var xGate=document.createElement("x-gate");xGate.setAttribute("data-targets","circuit-step.controllableGates");xGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(xGate);break;}case /^Y$/.test(instruction):{var yGate=document.createElement("y-gate");yGate.setAttribute("data-targets","circuit-step.controllableGates");yGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(yGate);break;}case /^Z$/.test(instruction):{var zGate=document.createElement("z-gate");zGate.setAttribute("data-targets","circuit-step.controllableGates");zGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(zGate);break;}case /^P$/.test(instruction):{var phaseGate=document.createElement("phase-gate");phaseGate.setAttribute("data-targets","circuit-step.controllableGates");phaseGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(phaseGate);break;}case /^P\((.+)\)$/.test(instruction):{var _phaseGate=document.createElement("phase-gate");_phaseGate.setAttribute("data-targets","circuit-step.controllableGates");_phaseGate.setAttribute("data-target","circuit-dropzone.draggable");_phaseGate.setAttribute("data-phi",RegExp.$1);dropzone.append(_phaseGate);break;}case /^X\^½$/.test(instruction):{var rootNotGate=document.createElement("root-not-gate");rootNotGate.setAttribute("data-targets","circuit-step.controllableGates");rootNotGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(rootNotGate);break;}case /^Rx$/.test(instruction):{var rxGate=document.createElement("rx-gate");rxGate.setAttribute("data-targets","circuit-step.controllableGates");rxGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(rxGate);break;}case /^Rx\((.+)\)$/.test(instruction):{var _rxGate=document.createElement("rx-gate");_rxGate.setAttribute("data-targets","circuit-step.controllableGates");_rxGate.setAttribute("data-target","circuit-dropzone.draggable");_rxGate.setAttribute("data-theta",RegExp.$1);dropzone.append(_rxGate);break;}case /^Ry$/.test(instruction):{var ryGate=document.createElement("ry-gate");ryGate.setAttribute("data-targets","circuit-step.controllableGates");ryGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(ryGate);break;}case /^Ry\((.+)\)$/.test(instruction):{var _ryGate=document.createElement("ry-gate");_ryGate.setAttribute("data-targets","circuit-step.controllableGates");_ryGate.setAttribute("data-target","circuit-dropzone.draggable");_ryGate.setAttribute("data-theta",RegExp.$1);dropzone.append(_ryGate);break;}case /^Rz$/.test(instruction):{var rzGate=document.createElement("rz-gate");rzGate.setAttribute("data-targets","circuit-step.controllableGates");rzGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(rzGate);break;}case /^Rz\((.+)\)$/.test(instruction):{var _rzGate=document.createElement("rz-gate");_rzGate.setAttribute("data-targets","circuit-step.controllableGates");_rzGate.setAttribute("data-target","circuit-dropzone.draggable");_rzGate.setAttribute("data-theta",RegExp.$1);dropzone.append(_rzGate);break;}case /^Swap$/.test(instruction):{var swapGate=document.createElement("swap-gate");swapGate.setAttribute("data-targets","circuit-step.swapGates circuit-step.controllableGates");swapGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(swapGate);break;}case /^•$/.test(instruction):{var controlGate=document.createElement("control-gate");controlGate.setAttribute("data-targets","circuit-step.controlGates");controlGate.setAttribute("data-target","circuit-dropzone.draggable");dropzone.append(controlGate);break;}case /^Bloch$/.test(instruction):{var blochDisplay=document.createElement("bloch-display");dropzone.append(blochDisplay);break;}case /^Measure$/.test(instruction):{var measureGate=document.createElement("measurement-gate");dropzone.append(measureGate);break;}default:}circuitStep.append(dropzone);}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}frag.append(circuitStep);}}catch(err){_iterator.e(err);}finally{_iterator.f();}return frag;}},{key:"updateConnections",value:function updateConnections(){var _iterator3=quantumCircuitElement_createForOfIteratorHelper(this.circuitSteps),_step3;try{var _loop=function _loop(){var circuitStep=_step3.value;if(circuitStep.controlGates.length===1&&circuitStep.controllableGates.length===0){circuitStep.controlGates[0].disable();}if(circuitStep.swapGates.length!==2){var _iterator4=quantumCircuitElement_createForOfIteratorHelper(circuitStep.swapGates),_step4;try{for(_iterator4.s();!(_step4=_iterator4.n()).done;){var swapGate=_step4.value;swapGate.disable();}}catch(err){_iterator4.e(err);}finally{_iterator4.f();}}if(circuitStep.controlGates.length===0)return"continue";var _iterator5=quantumCircuitElement_createForOfIteratorHelper(circuitStep.controllableGates),_step5;try{var _loop2=function _loop2(){var controllableGate=_step5.value;controllableGate.wireTop=circuitStep.controlGates.some(function(each){return circuitStep.bit(each)<circuitStep.bit(controllableGate);})||circuitStep.controllableGates.some(function(each){return circuitStep.bit(each)<circuitStep.bit(controllableGate);});controllableGate.wireBottom=circuitStep.controlGates.some(function(each){return circuitStep.bit(each)>circuitStep.bit(controllableGate);})||circuitStep.controllableGates.some(function(each){return circuitStep.bit(each)>circuitStep.bit(controllableGate);});};for(_iterator5.s();!(_step5=_iterator5.n()).done;){_loop2();}}catch(err){_iterator5.e(err);}finally{_iterator5.f();}var _iterator6=quantumCircuitElement_createForOfIteratorHelper(circuitStep.controlGates),_step6;try{var _loop3=function _loop3(){var controlGate=_step6.value;controlGate.wireTop=circuitStep.controllableGates.some(function(each){return circuitStep.bit(controlGate)>circuitStep.bit(each);})||circuitStep.controlGates.some(function(each){return circuitStep.bit(controlGate)>circuitStep.bit(each);});controlGate.wireBottom=circuitStep.controllableGates.some(function(each){return circuitStep.bit(controlGate)<circuitStep.bit(each);})||circuitStep.controlGates.some(function(each){return circuitStep.bit(controlGate)<circuitStep.bit(each);});};for(_iterator6.s();!(_step6=_iterator6.n()).done;){_loop3();}}catch(err){_iterator6.e(err);}finally{_iterator6.f();}var _iterator7=quantumCircuitElement_createForOfIteratorHelper(circuitStep.dropzones),_step7;try{for(_iterator7.s();!(_step7=_iterator7.n()).done;){var dropzone=_step7.value;if(dropzone.draggable)continue;var bits=circuitStep.controlGates.map(function(each){return circuitStep.bit(each);}).concat(circuitStep.controllableGates.map(function(each){return circuitStep.bit(each);}));var minBit=bits.sort()[0];var maxBit=bits.sort().slice(-1)[0];if(minBit<circuitStep.dropzones.indexOf(dropzone)&&circuitStep.dropzones.indexOf(dropzone)<maxBit){dropzone.wireTop=true;dropzone.wireBottom=true;}}}catch(err){_iterator7.e(err);}finally{_iterator7.f();}};for(_iterator3.s();!(_step3=_iterator3.n()).done;){var _ret=_loop();if(_ret==="continue")continue;}}catch(err){_iterator3.e(err);}finally{_iterator3.f();}}}]);return QuantumCircuitElement;}(/*#__PURE__*/quantumCircuitElement_wrapNativeSuper(HTMLElement)),(quantumCircuitElement_descriptor=quantumCircuitElement_applyDecoratedDescriptor(quantumCircuitElement_class2.prototype,"json",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"";}}),quantumCircuitElement_descriptor2=quantumCircuitElement_applyDecoratedDescriptor(quantumCircuitElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),quantumCircuitElement_descriptor3=quantumCircuitElement_applyDecoratedDescriptor(quantumCircuitElement_class2.prototype,"circuitSteps",[targets],{configurable:true,enumerable:true,writable:true,initializer:null})),quantumCircuitElement_class2))||quantumCircuitElement_class;
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.esm.js + 52 modules
var tippy_esm = __webpack_require__(6);

// CONCATENATED MODULE: ./app/components/bloch_display_component/blochDisplayElement.ts
var blochDisplayElement_class,blochDisplayElement_class2,blochDisplayElement_descriptor,blochDisplayElement_descriptor2,blochDisplayElement_descriptor3,blochDisplayElement_descriptor4,_descriptor5,_descriptor6,_descriptor7,_descriptor8,_descriptor9,_descriptor10,_descriptor11,_descriptor12,blochDisplayElement_templateObject,blochDisplayElement_templateObject2,_templateObject3,_templateObject4;function blochDisplayElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function blochDisplayElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function blochDisplayElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function blochDisplayElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function blochDisplayElement_createClass(Constructor,protoProps,staticProps){if(protoProps)blochDisplayElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)blochDisplayElement_defineProperties(Constructor,staticProps);return Constructor;}function blochDisplayElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)blochDisplayElement_setPrototypeOf(subClass,superClass);}function blochDisplayElement_createSuper(Derived){var hasNativeReflectConstruct=blochDisplayElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=blochDisplayElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=blochDisplayElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return blochDisplayElement_possibleConstructorReturn(this,result);};}function blochDisplayElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return blochDisplayElement_assertThisInitialized(self);}function blochDisplayElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function blochDisplayElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;blochDisplayElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!blochDisplayElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return blochDisplayElement_construct(Class,arguments,blochDisplayElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return blochDisplayElement_setPrototypeOf(Wrapper,Class);};return blochDisplayElement_wrapNativeSuper(Class);}function blochDisplayElement_construct(Parent,args,Class){if(blochDisplayElement_isNativeReflectConstruct()){blochDisplayElement_construct=Reflect.construct;}else{blochDisplayElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)blochDisplayElement_setPrototypeOf(instance,Class.prototype);return instance;};}return blochDisplayElement_construct.apply(null,arguments);}function blochDisplayElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function blochDisplayElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function blochDisplayElement_setPrototypeOf(o,p){blochDisplayElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return blochDisplayElement_setPrototypeOf(o,p);}function blochDisplayElement_getPrototypeOf(o){blochDisplayElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return blochDisplayElement_getPrototypeOf(o);}function blochDisplayElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function blochDisplayElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}var blochDisplayElement_BlochDisplayElement=controller(blochDisplayElement_class=(blochDisplayElement_class2=/*#__PURE__*/function(_HTMLElement){blochDisplayElement_inherits(BlochDisplayElement,_HTMLElement);var _super=blochDisplayElement_createSuper(BlochDisplayElement);function BlochDisplayElement(){var _this;blochDisplayElement_classCallCheck(this,BlochDisplayElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));blochDisplayElement_initializerDefineProperty(_this,"body",blochDisplayElement_descriptor,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"vectorLine",blochDisplayElement_descriptor2,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"vectorEnd",blochDisplayElement_descriptor3,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"vector",blochDisplayElement_descriptor4,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"vectorEndCircles",_descriptor5,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"size",_descriptor6,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"x",_descriptor7,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"y",_descriptor8,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"z",_descriptor9,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"draggable",_descriptor10,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"draggableSource",_descriptor11,blochDisplayElement_assertThisInitialized(_this));blochDisplayElement_initializerDefineProperty(_this,"draggableShadow",_descriptor12,blochDisplayElement_assertThisInitialized(_this));return _this;}blochDisplayElement_createClass(BlochDisplayElement,[{key:"grab",value:function grab(event){var _this$parentElement;var customEvent=new CustomEvent("grabDraggable",{detail:event,bubbles:true});(_this$parentElement=this.parentElement)===null||_this$parentElement===void 0?void 0:_this$parentElement.dispatchEvent(customEvent);}},{key:"drop",value:function drop(event){var _this$parentElement2;var customEvent=new CustomEvent("dropDraggable",{detail:event,bubbles:true});(_this$parentElement2=this.parentElement)===null||_this$parentElement2===void 0?void 0:_this$parentElement2.dispatchEvent(customEvent);}},{key:"showPopup",value:function showPopup(){var content;var placement;if(this.isCircuitDraggable()){placement="auto";content=this.blochInspectorPopupContent();}else{placement="right";var descriptionHeader=this.descriptionHeader();if(descriptionHeader===null)return;content=descriptionHeader;}var popup=Object(tippy_esm["b" /* default */])(this,{allowHTML:true,animation:false,arrow:tippy_esm["c" /* roundArrow */]+tippy_esm["c" /* roundArrow */],delay:0,placement:placement,theme:"qni",onShow:function onShow(instance){instance.setContent(content);}});popup.show();}},{key:"blochInspectorPopupContent",value:function blochInspectorPopupContent(){var content=document.createDocumentFragment();render(html(blochDisplayElement_templateObject||(blochDisplayElement_templateObject=blochDisplayElement_taggedTemplateLiteral(["\n        <div class=\"bloch-display__inspector\">\n          <header>\n            <h1>Local State</h1>\n          </header>\n\n          <section>\n            r:\n            <span class=\"bloch-display__inspector-d\"\n              >","</span\n            >, \u03D5:\n            <span class=\"bloch-display__inspector-phi\"\n              >","</span\n            >, \u03B8:\n            <span class=\"bloch-display__inspector-theta\"\n              >","</span\n            >\n          </section>\n          <section>\n            x:\n            <span class=\"bloch-display__inspector-x\"\n              >","</span\n            >, y:\n            <span class=\"bloch-display__inspector-y\"\n              >","</span\n            >, z:\n            <span class=\"bloch-display__inspector-z\"\n              >","</span\n            >\n          </section>\n        </div>\n      "])),this.forceSigned(this.d),this.forceSigned(this.phi,2),this.forceSigned(this.theta,2),this.forceSigned(this.x),this.forceSigned(this.y),this.forceSigned(this.z)),content);return content;}},{key:"descriptionHeader",value:function descriptionHeader(){return this.querySelector("header");}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();this.updateBlochVector();}},{key:"disconnectedCallback",value:function disconnectedCallback(){var instance=this._tippy;instance===null||instance===void 0?void 0:instance.destroy();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(!this.body)return;if(oldValue===newValue)return;if(name==="data-draggable-source"){this.body.classList.toggle("draggable-source");return;}if(name==="data-draggable-shadow"){this.body.classList.toggle("draggable-shadow");return;}if(newValue===null)return;if(name==="data-x")this.x=parseFloat(newValue);if(name==="data-y")this.y=parseFloat(newValue);if(name==="data-z")this.z=parseFloat(newValue);this.d=this.vectorLength();this.phi=this.calculatePhi();this.theta=this.calculateTheta();this.updateBlochVector();}},{key:"update",value:function update(){this.addEventListener("mouseenter",this.showPopup);this.addEventListener("mousedown",this.grab);this.addEventListener("mouseup",this.drop);this.d=this.vectorLength();this.phi=this.calculatePhi();this.theta=this.calculateTheta();var vectorLineRect=function vectorLineRect(degree){return html(blochDisplayElement_templateObject2||(blochDisplayElement_templateObject2=blochDisplayElement_taggedTemplateLiteral(["<div\n        class=\"vector-line-rect\"\n        style=\"transform: rotateY(","deg)\"\n      ></div>"])),degree);};var vectorEndCircle=function vectorEndCircle(degree,axis){return html(_templateObject3||(_templateObject3=blochDisplayElement_taggedTemplateLiteral(["<div\n        class=\"vector-end-circle\"\n        style=\"transform: rotate","(","deg)\"\n        data-targets=\"bloch-display.vectorEndCircles\"\n      ></div>"])),axis,degree);};render(html(_templateObject4||(_templateObject4=blochDisplayElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n          }\n\n          #body.size-xs {\n            height: 1rem;\n            width: 1rem;\n          }\n\n          #body.size-sm {\n            height: 1.5rem;\n            width: 1.5rem;\n          }\n\n          #body.size-base {\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body.size-lg {\n            height: 2.5rem;\n            width: 2.5rem;\n          }\n\n          #body.size-xl {\n            height: 3rem;\n            width: 3rem;\n          }\n\n          #body.draggable {\n            cursor: grab;\n          }\n\n          #body.draggable::after {\n            position: absolute;\n            top: 0px;\n            right: 0px;\n            bottom: 0px;\n            left: 0px;\n            border-color: var(--colors-cardinal, #ff4b4b);\n            border-radius: 0.25rem;\n            border-style: solid;\n            border-width: 2px;\n            box-sizing: border-box;\n            opacity: 0;\n            content: \"\";\n          }\n\n          #body:hover::after {\n            opacity: 100;\n          }\n\n          #body.draggable-source::after {\n            opacity: 100;\n            border-color: var(--colors-fox, #ff9600);\n          }\n\n          #body.draggable-shadow::after {\n            opacity: 100;\n            border-color: var(--colors-superposition, #ce82ff);\n          }\n\n          #background {\n            border-radius: 9999px;\n            background-color: var(--colors-snow, #ffffff);\n          }\n\n          #sphere-border {\n            box-sizing: border-box;\n            border-style: solid;\n            border-radius: 9999px;\n            border-width: 2px;\n            border-color: var(--colors-hare, #afafaf);\n            background-color: rgba(67, 192, 0, 0.1);\n          }\n\n          #body.size-xs #sphere-border {\n            border-width: 1px;\n          }\n\n          #sphere-lines {\n            width: 100%;\n            height: 100%;\n            stroke: currentColor;\n            color: var(--colors-hare, #afafaf);\n          }\n\n          #perspective {\n            position: relative;\n            width: 100%;\n            height: 100%;\n            perspective-origin: top right;\n          }\n\n          #body.size-xs #perspective {\n            perspective: 2rem;\n          }\n\n          #body.size-sm #perspective {\n            perspective: 3rem;\n          }\n\n          #body.size-base #perspective {\n            perspective: 4rem;\n          }\n\n          #body.size-lg #perspective {\n            perspective: 5rem;\n          }\n\n          #body.size-xl #perspective {\n            perspective: 6rem;\n          }\n\n          #vector {\n            position: relative;\n            width: 100%;\n            height: 100%;\n            transform-origin: center;\n            transform-style: preserve-3d;\n          }\n\n          #vector-line {\n            position: absolute;\n            width: 100%;\n            height: 0;\n            bottom: 50%;\n          }\n\n          .vector-line-rect {\n            position: absolute;\n            left: 0px;\n            right: 0px;\n            background-color: var(--colors-eel, #4b4b4b);\n            margin-left: auto;\n            margin-right: auto;\n            transform-origin: bottom;\n            height: 100%;\n            width: 2px;\n          }\n\n          #vector-end {\n            position: absolute;\n            width: 100%;\n          }\n\n          .vector-end-circle {\n            position: absolute;\n            left: 0px;\n            right: 0px;\n            background-color: var(--colors-cardinal, #ff4b4b);\n            margin-left: auto;\n            margin-right: auto;\n            border-radius: 9999px;\n            height: 6px;\n            width: 6px;\n          }\n\n          #body.size-xs .vector-end-circle {\n            height: 4px;\n            width: 4px;\n          }\n\n          #body.size-lg .vector-end-circle,\n          #body.size-xl .vector-end-circle {\n            height: 8px;\n            width: 8px;\n          }\n\n          #body[data-d=\"0\"] .vector-end-circle {\n            background-color: var(--colors-magnitude, #1cb0f6);\n          }\n\n          .absolute {\n            position: absolute;\n          }\n\n          .inset-0 {\n            top: 0px;\n            right: 0px;\n            bottom: 0px;\n            left: 0px;\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\"","\"\n          data-target=\"bloch-display.body\"\n          data-d=\"","\"\n        >\n          <div id=\"background\" class=\"absolute inset-0\"></div>\n          <div id=\"sphere-border\" class=\"absolute inset-0\">\n            <svg\n              id=\"sphere-lines\"\n              class=\"absolute inset-0\"\n              viewBox=\"0 0 48 48\"\n              fill=\"none\"\n              stroke-width=\"1\"\n            >\n              <line x1=\"0%\" y1=\"50%\" x2=\"100%\" y2=\"50%\" />\n              <line x1=\"50%\" y1=\"0%\" x2=\"50%\" y2=\"100%\" />\n              <line x1=\"32%\" y1=\"70%\" x2=\"68%\" y2=\"30%\" />\n              <ellipse cx=\"50%\" cy=\"50%\" rx=\"18%\" ry=\"50%\" />\n              <ellipse cx=\"50%\" cy=\"50%\" rx=\"50%\" ry=\"18%\" />\n            </svg>\n            <div class=\"absolute inset-0\">\n              <div id=\"perspective\">\n                <div id=\"vector\" data-target=\"bloch-display.vector\">\n                  <div id=\"vector-line\" data-target=\"bloch-display.vectorLine\">\n                    "," ","\n                    "," ","\n                    "," ","\n                    "," ","\n                    ","\n                  </div>\n\n                  <div id=\"vector-end\" data-target=\"bloch-display.vectorEnd\">\n                    "," ","\n                    "," ","\n                    "," ","\n                    "," ","\n                    "," ","\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>"])),this.classString,this.d,vectorLineRect(0),vectorLineRect(20),vectorLineRect(40),vectorLineRect(60),vectorLineRect(80),vectorLineRect(100),vectorLineRect(120),vectorLineRect(140),vectorLineRect(160),vectorEndCircle(0,"Y"),vectorEndCircle(20,"Y"),vectorEndCircle(40,"Y"),vectorEndCircle(60,"Y"),vectorEndCircle(80,"Y"),vectorEndCircle(100,"Y"),vectorEndCircle(120,"Y"),vectorEndCircle(140,"Y"),vectorEndCircle(160,"Y"),vectorEndCircle(90,"X")),this.shadowRoot);}},{key:"updateBlochVector",value:function updateBlochVector(){var vectorEndCircleWidth=this.vectorEndCircles[0].offsetWidth;this.vectorLine.style.height="calc(".concat(100*this.d/2,"% - ").concat(vectorEndCircleWidth/2,"px)");this.vectorEnd.style.bottom="calc(50% + ".concat(100*this.d/2,"% + ").concat(vectorEndCircleWidth/2,"px)");if(this.d!==0){this.vector.style.transform="rotateY(".concat(this.phi,"deg) rotateX(").concat(-this.theta,"deg)");}}},{key:"d",get:function get(){var dataD=this.getAttribute("data-d");if(dataD===null)throw new Error("data-d not set");return parseFloat(dataD);},set:function set(value){var _this$body;this.setAttribute("data-d",value.toString());(_this$body=this.body)===null||_this$body===void 0?void 0:_this$body.setAttribute("data-d",value.toString());}},{key:"vectorLength",value:function vectorLength(){return parseFloat(Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z).toFixed(4));}},{key:"phi",get:function get(){var dataPhi=this.getAttribute("data-phi");if(dataPhi===null)throw new Error("data-phi not set");return parseFloat(dataPhi);},set:function set(value){this.setAttribute("data-phi",value.toString());}},{key:"calculatePhi",value:function calculatePhi(){return Math.atan2(this.y,this.x)*180/Math.PI;}},{key:"theta",get:function get(){var dataTheta=this.getAttribute("data-theta");if(dataTheta===null)throw new Error("data-theta not set");return parseFloat(dataTheta);},set:function set(value){this.setAttribute("data-theta",value.toString());}},{key:"calculateTheta",value:function calculateTheta(){var θ=Math.max(0,Math.PI/2-Math.atan2(this.z,Math.sqrt(this.y*this.y+this.x*this.x)));return 180*θ/Math.PI;}},{key:"forceSigned",value:function forceSigned(value){var digits=arguments.length>1&&arguments[1]!==undefined?arguments[1]:4;return(value>=0?"+":"")+value.toFixed(digits);}},{key:"classString",get:function get(){var klass=[];if(this.draggable)klass.push("draggable");if(this.size==="xs")klass.push("size-xs");if(this.size==="sm")klass.push("size-sm");if(this.size==="base")klass.push("size-base");if(this.size==="lg")klass.push("size-lg");if(this.size==="xl")klass.push("size-xl");return klass.join(" ");}},{key:"isCircuitDraggable",value:function isCircuitDraggable(){if(this.parentElement===null)return false;return this.parentElement.tagName==="CIRCUIT-DROPZONE"||// FIXME: dropzone を web component 化した後に消す
this.parentElement.classList.contains("dropzone");}}]);return BlochDisplayElement;}(/*#__PURE__*/blochDisplayElement_wrapNativeSuper(HTMLElement)),(blochDisplayElement_descriptor=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),blochDisplayElement_descriptor2=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"vectorLine",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),blochDisplayElement_descriptor3=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"vectorEnd",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),blochDisplayElement_descriptor4=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"vector",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),_descriptor5=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"vectorEndCircles",[targets],{configurable:true,enumerable:true,writable:true,initializer:null}),_descriptor6=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"size",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"base";}}),_descriptor7=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"x",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return 0;}}),_descriptor8=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"y",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return 0;}}),_descriptor9=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"z",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return 0;}}),_descriptor10=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"draggable",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),_descriptor11=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"draggableSource",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),_descriptor12=blochDisplayElement_applyDecoratedDescriptor(blochDisplayElement_class2.prototype,"draggableShadow",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),blochDisplayElement_class2))||blochDisplayElement_class;
// CONCATENATED MODULE: ./app/components/control_gate_component/controlGateElement.ts
var controlGateElement_templateObject,controlGateElement_templateObject2,controlGateElement_class,controlGateElement_class2,controlGateElement_descriptor,controlGateElement_descriptor2,controlGateElement_descriptor3,controlGateElement_descriptor4,controlGateElement_descriptor5,controlGateElement_descriptor6,controlGateElement_descriptor7,controlGateElement_descriptor8,controlGateElement_descriptor9,controlGateElement_descriptor10,controlGateElement_descriptor11,controlGateElement_templateObject3;function controlGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function controlGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function controlGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function controlGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)controlGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)controlGateElement_defineProperties(Constructor,staticProps);return Constructor;}function controlGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)controlGateElement_setPrototypeOf(subClass,superClass);}function controlGateElement_createSuper(Derived){var hasNativeReflectConstruct=controlGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=controlGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=controlGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return controlGateElement_possibleConstructorReturn(this,result);};}function controlGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return controlGateElement_assertThisInitialized(self);}function controlGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function controlGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;controlGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!controlGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return controlGateElement_construct(Class,arguments,controlGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return controlGateElement_setPrototypeOf(Wrapper,Class);};return controlGateElement_wrapNativeSuper(Class);}function controlGateElement_construct(Parent,args,Class){if(controlGateElement_isNativeReflectConstruct()){controlGateElement_construct=Reflect.construct;}else{controlGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)controlGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return controlGateElement_construct.apply(null,arguments);}function controlGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function controlGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function controlGateElement_setPrototypeOf(o,p){controlGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return controlGateElement_setPrototypeOf(o,p);}function controlGateElement_getPrototypeOf(o){controlGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return controlGateElement_getPrototypeOf(o);}function controlGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function controlGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function controlGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var verticalWires=html(controlGateElement_templateObject||(controlGateElement_templateObject=controlGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var controlDotIcon=html(controlGateElement_templateObject2||(controlGateElement_templateObject2=controlGateElement_taggedTemplateLiteral(["\n  <svg\n    id=\"icon\"\n    width=\"48\"\n    height=\"48\"\n    viewBox=\"0 0 48 48\"\n    fill=\"none\"\n    stroke-width=\"2\"\n    stroke-linecap=\"round\"\n  >\n    <circle cx=\"24\" cy=\"24\" r=\"8\" fill=\"currentColor\" />\n  </svg>\n"])));var controlGateElement_ControlGateElement=controller(controlGateElement_class=(controlGateElement_class2=/*#__PURE__*/function(_HTMLElement){controlGateElement_inherits(ControlGateElement,_HTMLElement);var _super=controlGateElement_createSuper(ControlGateElement);function ControlGateElement(){var _this;controlGateElement_classCallCheck(this,ControlGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));controlGateElement_initializerDefineProperty(_this,"body",controlGateElement_descriptor,controlGateElement_assertThisInitialized(_this));controlGateElement_initializerDefineProperty(_this,"size",controlGateElement_descriptor2,controlGateElement_assertThisInitialized(_this));controlGateElement_initializerDefineProperty(_this,"draggable",controlGateElement_descriptor3,controlGateElement_assertThisInitialized(_this));controlGateElement_initializerDefineProperty(_this,"draggableSource",controlGateElement_descriptor4,controlGateElement_assertThisInitialized(_this));controlGateElement_initializerDefineProperty(_this,"draggableShadow",controlGateElement_descriptor5,controlGateElement_assertThisInitialized(_this));controlGateElement_initializerDefineProperty(_this,"grabbed",controlGateElement_descriptor6,controlGateElement_assertThisInitialized(_this));controlGateElement_initializerDefineProperty(_this,"disabled",controlGateElement_descriptor7,controlGateElement_assertThisInitialized(_this));controlGateElement_initializerDefineProperty(_this,"wireTop",controlGateElement_descriptor8,controlGateElement_assertThisInitialized(_this));controlGateElement_initializerDefineProperty(_this,"wireTopDisabled",controlGateElement_descriptor9,controlGateElement_assertThisInitialized(_this));controlGateElement_initializerDefineProperty(_this,"wireBottom",controlGateElement_descriptor10,controlGateElement_assertThisInitialized(_this));controlGateElement_initializerDefineProperty(_this,"wireBottomDisabled",controlGateElement_descriptor11,controlGateElement_assertThisInitialized(_this));return _this;}controlGateElement_createClass(ControlGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"showGateDescription",value:function showGateDescription(){if(this._tippy)return;var content=this.descriptionHeader();if(!content)return;var popup=Object(tippy_esm["b" /* default */])(this,{allowHTML:true,animation:false,arrow:tippy_esm["c" /* roundArrow */]+tippy_esm["c" /* roundArrow */],delay:0,placement:"right",theme:"qni",onShow:function onShow(instance){instance.setContent(content);}});popup.show();}},{key:"descriptionHeader",value:function descriptionHeader(){return this.querySelector("header");}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-wire-top"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("wire-top");}else{this.body.classList.add("wire-top");}}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("wire-bottom");}else{this.body.classList.add("wire-bottom");}}if(name==="data-disabled"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("disabled");}else{this.body.classList.add("disabled");}}if(name==="data-draggable-source"&&this.body){this.body.classList.toggle("draggable-source");}if(name==="data-draggable-shadow"&&this.body){this.body.classList.toggle("draggable-shadow");}if(name==="data-grabbed"){this.body.classList.toggle("grabbed");}}},{key:"update",value:function update(){render(html(controlGateElement_templateObject3||(controlGateElement_templateObject3=controlGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body.size-xs {\n            height: 1rem;\n            width: 1rem;\n          }\n\n          #body.size-sm {\n            height: 1.5rem;\n            width: 1.5rem;\n          }\n\n          #body.size-base {\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body.size-lg {\n            height: 2.5rem;\n            width: 2.5rem;\n          }\n\n          #body.size-xl {\n            height: 3rem;\n            width: 3rem;\n          }\n\n          #body.draggable {\n            cursor: grab;\n          }\n\n          #body.grabbed {\n            background-color: var(--colors-snow, #ffffff);\n          }\n\n          #body.draggable::after {\n            position: absolute;\n            top: 0px;\n            right: 0px;\n            bottom: 0px;\n            left: 0px;\n            border-color: var(--colors-cardinal, #ff4b4b);\n            border-radius: 0.25rem;\n            border-style: solid;\n            border-width: 2px;\n            box-sizing: border-box;\n            opacity: 0;\n            content: \"\";\n          }\n\n          #body:hover::after {\n            opacity: 100;\n          }\n\n          #body.draggable-source::after {\n            opacity: 100;\n            border-color: var(--colors-fox, #ff9600);\n          }\n\n          #body.draggable-shadow::after {\n            opacity: 100;\n            border-color: var(--colors-superposition, #ce82ff);\n          }\n\n          #body.grabbed #wires,\n          #body.draggable-shadow #wires {\n            display: none;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\"","\"\n          data-target=\"control-gate.body\"\n          data-action=\"mouseenter:control-gate#showGateDescription\"\n        >\n          "," ","\n        </div>"])),this.classString,verticalWires,controlDotIcon),this.shadowRoot);}},{key:"classString",get:function get(){var klass=[];if(this.size==="xs")klass.push("size-xs");if(this.size==="sm")klass.push("size-sm");if(this.size==="base")klass.push("size-base");if(this.size==="lg")klass.push("size-lg");if(this.size==="xl")klass.push("size-xl");if(this.disabled)klass.push("disabled");if(this.wireTop)klass.push("wire-top");if(this.wireTopDisabled)klass.push("wire-top-disabled");if(this.wireBottom)klass.push("wire-bottom");if(this.wireBottomDisabled)klass.push("wire-bottom-disabled");if(this.draggable)klass.push("draggable");return klass.join(" ");}}]);return ControlGateElement;}(/*#__PURE__*/controlGateElement_wrapNativeSuper(HTMLElement)),(controlGateElement_descriptor=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),controlGateElement_descriptor2=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"size",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"base";}}),controlGateElement_descriptor3=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"draggable",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),controlGateElement_descriptor4=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"draggableSource",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),controlGateElement_descriptor5=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"draggableShadow",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),controlGateElement_descriptor6=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"grabbed",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),controlGateElement_descriptor7=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),controlGateElement_descriptor8=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),controlGateElement_descriptor9=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),controlGateElement_descriptor10=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),controlGateElement_descriptor11=controlGateElement_applyDecoratedDescriptor(controlGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),controlGateElement_class2))||controlGateElement_class;
// CONCATENATED MODULE: ./app/components/h_gate_component/hGateElement.ts
var hGateElement_templateObject,hGateElement_templateObject2,hGateElement_class,hGateElement_class2,hGateElement_descriptor,hGateElement_descriptor2,hGateElement_descriptor3,hGateElement_descriptor4,hGateElement_descriptor5,hGateElement_descriptor6,hGateElement_descriptor7,hGateElement_descriptor8,hGateElement_templateObject3;function hGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function hGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function hGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function hGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)hGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)hGateElement_defineProperties(Constructor,staticProps);return Constructor;}function hGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)hGateElement_setPrototypeOf(subClass,superClass);}function hGateElement_createSuper(Derived){var hasNativeReflectConstruct=hGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=hGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=hGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return hGateElement_possibleConstructorReturn(this,result);};}function hGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return hGateElement_assertThisInitialized(self);}function hGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function hGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;hGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!hGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return hGateElement_construct(Class,arguments,hGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return hGateElement_setPrototypeOf(Wrapper,Class);};return hGateElement_wrapNativeSuper(Class);}function hGateElement_construct(Parent,args,Class){if(hGateElement_isNativeReflectConstruct()){hGateElement_construct=Reflect.construct;}else{hGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)hGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return hGateElement_construct.apply(null,arguments);}function hGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function hGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function hGateElement_setPrototypeOf(o,p){hGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return hGateElement_setPrototypeOf(o,p);}function hGateElement_getPrototypeOf(o){hGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return hGateElement_getPrototypeOf(o);}function hGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function hGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function hGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var hGateElement_verticalWires=html(hGateElement_templateObject||(hGateElement_templateObject=hGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var hIcon=html(hGateElement_templateObject2||(hGateElement_templateObject2=hGateElement_taggedTemplateLiteral(["<svg\n  id=\"icon\"\n  width=\"48\"\n  height=\"48\"\n  viewBox=\"0 0 48 48\"\n  fill=\"none\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n>\n  <path d=\"M17 13L17 35M17 24L31 24M31 13L31 35\" />\n</svg>"])));var hGateElement_HGateElement=controller(hGateElement_class=(hGateElement_class2=/*#__PURE__*/function(_HTMLElement){hGateElement_inherits(HGateElement,_HTMLElement);var _super=hGateElement_createSuper(HGateElement);function HGateElement(){var _this;hGateElement_classCallCheck(this,HGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));hGateElement_initializerDefineProperty(_this,"body",hGateElement_descriptor,hGateElement_assertThisInitialized(_this));hGateElement_initializerDefineProperty(_this,"size",hGateElement_descriptor2,hGateElement_assertThisInitialized(_this));hGateElement_initializerDefineProperty(_this,"disabled",hGateElement_descriptor3,hGateElement_assertThisInitialized(_this));hGateElement_initializerDefineProperty(_this,"wireTop",hGateElement_descriptor4,hGateElement_assertThisInitialized(_this));hGateElement_initializerDefineProperty(_this,"wireTopDisabled",hGateElement_descriptor5,hGateElement_assertThisInitialized(_this));hGateElement_initializerDefineProperty(_this,"wireBottom",hGateElement_descriptor6,hGateElement_assertThisInitialized(_this));hGateElement_initializerDefineProperty(_this,"wireBottomDisabled",hGateElement_descriptor7,hGateElement_assertThisInitialized(_this));hGateElement_initializerDefineProperty(_this,"draggable",hGateElement_descriptor8,hGateElement_assertThisInitialized(_this));return _this;}hGateElement_createClass(HGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"showGateDescription",value:function showGateDescription(){if(this._tippy)return;var content=this.description();if(!content)return;var popup=Object(tippy_esm["b" /* default */])(this,{allowHTML:true,animation:false,arrow:tippy_esm["c" /* roundArrow */]+tippy_esm["c" /* roundArrow */],delay:0,placement:"right",theme:"qni",onShow:function onShow(instance){instance.setContent(content);}});popup.show();}},{key:"description",value:function description(){return this.innerHTML;}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-disabled"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("disabled");}else{this.body.classList.add("disabled");}}if(name==="data-wire-top"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireTopClassString);}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireBottomClassString);}}},{key:"update",value:function update(){render(html(hGateElement_templateObject3||(hGateElement_templateObject3=hGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body.size-xs {\n            height: 1rem;\n            width: 1rem;\n          }\n\n          #body.size-sm {\n            height: 1.5rem;\n            width: 1.5rem;\n          }\n\n          #body.size-base {\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body.size-lg {\n            height: 2.5rem;\n            width: 2.5rem;\n          }\n\n          #body.size-xl {\n            height: 3rem;\n            width: 3rem;\n          }\n\n          #body.draggable {\n            cursor: grab;\n          }\n\n          #body.draggable::after {\n            position: absolute;\n            top: 0px;\n            right: 0px;\n            bottom: 0px;\n            left: 0px;\n            border-color: var(--colors-cardinal, #ff4b4b);\n            border-radius: 0.25rem;\n            border-style: solid;\n            border-width: 2px;\n            box-sizing: border-box;\n            opacity: 0;\n            content: \"\";\n          }\n\n          #body:hover::after {\n            opacity: 100;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            color: var(--colors-gate, #43c000);\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            top: 0px;\n            height: 100%;\n            width: 100%;\n            border-radius: 0.25rem;\n            color: var(--colors-snow, #ffffff);\n            background-color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            background-color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\"","\"\n          data-target=\"h-gate.body\"\n          data-action=\"mouseenter:h-gate#showGateDescription\"\n        >\n          "," ","\n        </div>"])),this.classString,hGateElement_verticalWires,hIcon),this.shadowRoot);}},{key:"classString",get:function get(){var klass=[];if(this.size==="xs")klass.push("size-xs");if(this.size==="sm")klass.push("size-sm");if(this.size==="base")klass.push("size-base");if(this.size==="lg")klass.push("size-lg");if(this.size==="xl")klass.push("size-xl");if(this.wireTop)klass.push("wire-top");if(this.wireTopDisabled)klass.push("wire-top-disabled");if(this.wireBottom)klass.push("wire-bottom");if(this.wireBottomDisabled)klass.push("wire-bottom-disabled");if(this.disabled)klass.push("disabled");if(this.draggable)klass.push("draggable");return klass.join(" ");}}]);return HGateElement;}(/*#__PURE__*/hGateElement_wrapNativeSuper(HTMLElement)),(hGateElement_descriptor=hGateElement_applyDecoratedDescriptor(hGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),hGateElement_descriptor2=hGateElement_applyDecoratedDescriptor(hGateElement_class2.prototype,"size",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"base";}}),hGateElement_descriptor3=hGateElement_applyDecoratedDescriptor(hGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),hGateElement_descriptor4=hGateElement_applyDecoratedDescriptor(hGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),hGateElement_descriptor5=hGateElement_applyDecoratedDescriptor(hGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),hGateElement_descriptor6=hGateElement_applyDecoratedDescriptor(hGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),hGateElement_descriptor7=hGateElement_applyDecoratedDescriptor(hGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),hGateElement_descriptor8=hGateElement_applyDecoratedDescriptor(hGateElement_class2.prototype,"draggable",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),hGateElement_class2))||hGateElement_class;
// CONCATENATED MODULE: ./app/components/measurement_gate_component/measurementGateElement.ts
var measurementGateElement_templateObject,measurementGateElement_class,measurementGateElement_class2,measurementGateElement_descriptor,measurementGateElement_descriptor2,measurementGateElement_descriptor3,measurementGateElement_descriptor4,measurementGateElement_descriptor5,measurementGateElement_descriptor6,measurementGateElement_descriptor7,measurementGateElement_descriptor8,measurementGateElement_templateObject2;function measurementGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function measurementGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function measurementGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function measurementGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)measurementGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)measurementGateElement_defineProperties(Constructor,staticProps);return Constructor;}function measurementGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)measurementGateElement_setPrototypeOf(subClass,superClass);}function measurementGateElement_createSuper(Derived){var hasNativeReflectConstruct=measurementGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=measurementGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=measurementGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return measurementGateElement_possibleConstructorReturn(this,result);};}function measurementGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return measurementGateElement_assertThisInitialized(self);}function measurementGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function measurementGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;measurementGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!measurementGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return measurementGateElement_construct(Class,arguments,measurementGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return measurementGateElement_setPrototypeOf(Wrapper,Class);};return measurementGateElement_wrapNativeSuper(Class);}function measurementGateElement_construct(Parent,args,Class){if(measurementGateElement_isNativeReflectConstruct()){measurementGateElement_construct=Reflect.construct;}else{measurementGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)measurementGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return measurementGateElement_construct.apply(null,arguments);}function measurementGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function measurementGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function measurementGateElement_setPrototypeOf(o,p){measurementGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return measurementGateElement_setPrototypeOf(o,p);}function measurementGateElement_getPrototypeOf(o){measurementGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return measurementGateElement_getPrototypeOf(o);}function measurementGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function measurementGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function measurementGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var measurementIcon=html(measurementGateElement_templateObject||(measurementGateElement_templateObject=measurementGateElement_taggedTemplateLiteral(["\n  <svg\n    id=\"icon\"\n    width=\"48\"\n    height=\"48\"\n    viewBox=\"0 0 48 48\"\n    fill=\"none\"\n    stroke-width=\"3\"\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n  >\n    <path d=\"M8 35A16 16 0 0 1 40 35\" fill=\"none\" />\n    <path d=\"M24.5 33L35 15\" />\n    <circle\n      cx=\"24.5\"\n      cy=\"33\"\n      r=\"1.5\"\n      fill=\"currentColor\"\n      stroke=\"currentColor\"\n    />\n  </svg>\n"])));var measurementGateElement_MeasurementGateElement=controller(measurementGateElement_class=(measurementGateElement_class2=/*#__PURE__*/function(_HTMLElement){measurementGateElement_inherits(MeasurementGateElement,_HTMLElement);var _super=measurementGateElement_createSuper(MeasurementGateElement);function MeasurementGateElement(){var _this;measurementGateElement_classCallCheck(this,MeasurementGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));measurementGateElement_initializerDefineProperty(_this,"body",measurementGateElement_descriptor,measurementGateElement_assertThisInitialized(_this));measurementGateElement_initializerDefineProperty(_this,"size",measurementGateElement_descriptor2,measurementGateElement_assertThisInitialized(_this));measurementGateElement_initializerDefineProperty(_this,"value",measurementGateElement_descriptor3,measurementGateElement_assertThisInitialized(_this));measurementGateElement_initializerDefineProperty(_this,"flag",measurementGateElement_descriptor4,measurementGateElement_assertThisInitialized(_this));measurementGateElement_initializerDefineProperty(_this,"draggable",measurementGateElement_descriptor5,measurementGateElement_assertThisInitialized(_this));measurementGateElement_initializerDefineProperty(_this,"grabbed",measurementGateElement_descriptor6,measurementGateElement_assertThisInitialized(_this));measurementGateElement_initializerDefineProperty(_this,"draggableSource",measurementGateElement_descriptor7,measurementGateElement_assertThisInitialized(_this));measurementGateElement_initializerDefineProperty(_this,"draggableShadow",measurementGateElement_descriptor8,measurementGateElement_assertThisInitialized(_this));return _this;}measurementGateElement_createClass(MeasurementGateElement,[{key:"grab",value:function grab(event){var _this$parentElement;var customEvent=new CustomEvent("grabDraggable",{detail:event,bubbles:true});(_this$parentElement=this.parentElement)===null||_this$parentElement===void 0?void 0:_this$parentElement.dispatchEvent(customEvent);}},{key:"drop",value:function drop(event){var _this$parentElement2;var customEvent=new CustomEvent("dropDraggable",{detail:event,bubbles:true});(_this$parentElement2=this.parentElement)===null||_this$parentElement2===void 0?void 0:_this$parentElement2.dispatchEvent(customEvent);}},{key:"showGateDescription",value:function showGateDescription(){if(this._tippy)return;var content=this.descriptionHeader();if(!content)return;var popup=Object(tippy_esm["b" /* default */])(this,{allowHTML:true,animation:false,arrow:tippy_esm["c" /* roundArrow */]+tippy_esm["c" /* roundArrow */],delay:0,placement:"right",theme:"qni",onShow:function onShow(instance){instance.setContent(content);}});popup.show();}},{key:"descriptionHeader",value:function descriptionHeader(){return this.querySelector("header");}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-grabbed"){this.body.classList.toggle("grabbed");}if(name==="data-draggable-source"&&this.body){this.body.classList.toggle("draggable-source");}if(name==="data-draggable-shadow"&&this.body){this.body.classList.toggle("draggable-shadow");}if(name==="data-value"&&this.body){this.body.classList.remove("value-0");this.body.classList.remove("value-1");switch(newValue){case"0":this.body.classList.add("value-0");break;case"1":this.body.classList.add("value-1");break;default:}}}},{key:"update",value:function update(){this.addEventListener("mousedown",this.grab);this.addEventListener("mouseup",this.drop);render(html(measurementGateElement_templateObject2||(measurementGateElement_templateObject2=measurementGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n          }\n\n          #body.size-xs {\n            height: 1rem;\n            width: 1rem;\n          }\n\n          #body.size-sm {\n            height: 1.5rem;\n            width: 1.5rem;\n          }\n\n          #body.size-base {\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body.size-lg {\n            height: 2.5rem;\n            width: 2.5rem;\n          }\n\n          #body.size-xl {\n            height: 3rem;\n            width: 3rem;\n          }\n\n          #body.grabbed,\n          #body.draggable-source,\n          #body.draggable-shadow {\n            background-color: var(--colors-snow, #ffffff);\n          }\n\n          #body.draggable {\n            cursor: grab;\n          }\n\n          #body.draggable::after {\n            position: absolute;\n            top: 0px;\n            right: 0px;\n            bottom: 0px;\n            left: 0px;\n            border-color: var(--colors-cardinal, #ff4b4b);\n            border-radius: 0.25rem;\n            border-style: solid;\n            border-width: 2px;\n            box-sizing: border-box;\n            opacity: 0;\n            content: \"\";\n          }\n\n          #body:hover::after {\n            opacity: 100;\n          }\n\n          #body.draggable-source::after {\n            opacity: 100;\n            border-color: var(--colors-fox, #ff9600);\n          }\n\n          #body.draggable-shadow::after {\n            opacity: 100;\n            border-color: var(--colors-superposition, #ce82ff);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            top: 0px;\n            height: 100%;\n            width: 100%;\n            color: var(--colors-superposition, #ce82ff);\n            stroke: currentColor;\n            transform: rotate(90deg);\n          }\n\n          @media (min-width: 768px) {\n            #icon {\n              transform: rotate(0deg);\n            }\n          }\n\n          #body.value-0 #icon,\n          #body.value-1 #icon {\n            color: var(--colors-swan, #e5e5e5);\n          }\n\n          #ket-label {\n            position: relative;\n            font-size: 1rem;\n            line-height: 1.5rem;\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n          }\n\n          #body.value-0 #ket-label,\n          #body.value-1 #ket-label {\n            background-color: var(--colors-snow, #ffffff);\n          }\n\n          #body.value-0 #ket-label {\n            color: var(--colors-cardinal, #ff4b4b);\n          }\n\n          #body.value-0 #ket-label::after {\n            content: \"0\";\n          }\n\n          #body.value-1 #ket-label {\n            color: var(--colors-magnitude, #1cb0f6);\n          }\n\n          #body.value-1 #ket-label::after {\n            content: \"1\";\n          }\n\n          #body::before {\n            bottom: 0;\n            color: var(--colors-wolf, #777777);\n            content: attr(data-flag) \"\";\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n            font-size: 0.75rem;\n            line-height: 1rem;\n            margin-bottom: 2rem;\n            position: absolute;\n            writing-mode: horizontal-tb;\n            z-index: 10;\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\"","\"\n          data-flag=\"","\"\n          data-target=\"measurement-gate.body\"\n          data-action=\"mouseenter:measurement-gate#showGateDescription\"\n        >\n          ","\n          <div id=\"ket-label\"></div>\n        </div>"])),this.classString,this.flag,measurementIcon),this.shadowRoot);}},{key:"classString",get:function get(){var klass=[];if(this.value)klass.push("value-".concat(this.value));if(this.draggable)klass.push("draggable");if(this.size==="xs")klass.push("size-xs");if(this.size==="sm")klass.push("size-sm");if(this.size==="base")klass.push("size-base");if(this.size==="lg")klass.push("size-lg");if(this.size==="xl")klass.push("size-xl");return klass.join(" ");}}]);return MeasurementGateElement;}(/*#__PURE__*/measurementGateElement_wrapNativeSuper(HTMLElement)),(measurementGateElement_descriptor=measurementGateElement_applyDecoratedDescriptor(measurementGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),measurementGateElement_descriptor2=measurementGateElement_applyDecoratedDescriptor(measurementGateElement_class2.prototype,"size",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"base";}}),measurementGateElement_descriptor3=measurementGateElement_applyDecoratedDescriptor(measurementGateElement_class2.prototype,"value",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"";}}),measurementGateElement_descriptor4=measurementGateElement_applyDecoratedDescriptor(measurementGateElement_class2.prototype,"flag",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"";}}),measurementGateElement_descriptor5=measurementGateElement_applyDecoratedDescriptor(measurementGateElement_class2.prototype,"draggable",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),measurementGateElement_descriptor6=measurementGateElement_applyDecoratedDescriptor(measurementGateElement_class2.prototype,"grabbed",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),measurementGateElement_descriptor7=measurementGateElement_applyDecoratedDescriptor(measurementGateElement_class2.prototype,"draggableSource",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),measurementGateElement_descriptor8=measurementGateElement_applyDecoratedDescriptor(measurementGateElement_class2.prototype,"draggableShadow",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),measurementGateElement_class2))||measurementGateElement_class;
// CONCATENATED MODULE: ./app/components/phase_gate_component/phaseGateElement.ts
var phaseGateElement_templateObject,phaseGateElement_templateObject2,phaseGateElement_class,phaseGateElement_class2,phaseGateElement_descriptor,phaseGateElement_descriptor2,phaseGateElement_descriptor3,phaseGateElement_descriptor4,phaseGateElement_descriptor5,phaseGateElement_descriptor6,phaseGateElement_descriptor7,phaseGateElement_templateObject3;function phaseGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function phaseGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function phaseGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function phaseGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)phaseGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)phaseGateElement_defineProperties(Constructor,staticProps);return Constructor;}function phaseGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)phaseGateElement_setPrototypeOf(subClass,superClass);}function phaseGateElement_createSuper(Derived){var hasNativeReflectConstruct=phaseGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=phaseGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=phaseGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return phaseGateElement_possibleConstructorReturn(this,result);};}function phaseGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return phaseGateElement_assertThisInitialized(self);}function phaseGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function phaseGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;phaseGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!phaseGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return phaseGateElement_construct(Class,arguments,phaseGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return phaseGateElement_setPrototypeOf(Wrapper,Class);};return phaseGateElement_wrapNativeSuper(Class);}function phaseGateElement_construct(Parent,args,Class){if(phaseGateElement_isNativeReflectConstruct()){phaseGateElement_construct=Reflect.construct;}else{phaseGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)phaseGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return phaseGateElement_construct.apply(null,arguments);}function phaseGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function phaseGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function phaseGateElement_setPrototypeOf(o,p){phaseGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return phaseGateElement_setPrototypeOf(o,p);}function phaseGateElement_getPrototypeOf(o){phaseGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return phaseGateElement_getPrototypeOf(o);}function phaseGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function phaseGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function phaseGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var phaseGateElement_verticalWires=html(phaseGateElement_templateObject||(phaseGateElement_templateObject=phaseGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var phaseIcon=html(phaseGateElement_templateObject2||(phaseGateElement_templateObject2=phaseGateElement_taggedTemplateLiteral(["<svg\n  id=\"icon\"\n  width=\"48\"\n  height=\"48\"\n  viewBox=\"0 0 48 48\"\n  fill=\"none\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n>\n  <path d=\"M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13\" />\n</svg>"])));var phaseGateElement_PhaseGateElement=controller(phaseGateElement_class=(phaseGateElement_class2=/*#__PURE__*/function(_HTMLElement){phaseGateElement_inherits(PhaseGateElement,_HTMLElement);var _super=phaseGateElement_createSuper(PhaseGateElement);function PhaseGateElement(){var _this;phaseGateElement_classCallCheck(this,PhaseGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));phaseGateElement_initializerDefineProperty(_this,"body",phaseGateElement_descriptor,phaseGateElement_assertThisInitialized(_this));phaseGateElement_initializerDefineProperty(_this,"phi",phaseGateElement_descriptor2,phaseGateElement_assertThisInitialized(_this));phaseGateElement_initializerDefineProperty(_this,"disabled",phaseGateElement_descriptor3,phaseGateElement_assertThisInitialized(_this));phaseGateElement_initializerDefineProperty(_this,"wireTop",phaseGateElement_descriptor4,phaseGateElement_assertThisInitialized(_this));phaseGateElement_initializerDefineProperty(_this,"wireTopDisabled",phaseGateElement_descriptor5,phaseGateElement_assertThisInitialized(_this));phaseGateElement_initializerDefineProperty(_this,"wireBottom",phaseGateElement_descriptor6,phaseGateElement_assertThisInitialized(_this));phaseGateElement_initializerDefineProperty(_this,"wireBottomDisabled",phaseGateElement_descriptor7,phaseGateElement_assertThisInitialized(_this));return _this;}phaseGateElement_createClass(PhaseGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-disabled"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("disabled");}else{this.body.classList.add("disabled");}}if(name==="data-wire-top"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireTopClassString);}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireBottomClassString);}}},{key:"update",value:function update(){render(html(phaseGateElement_templateObject3||(phaseGateElement_templateObject3=phaseGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body::before {\n            position: absolute;\n            bottom: 0px;\n            margin-bottom: 2rem;\n            color: var(--colors-wolf, #777777);\n            background-color: var(--colors-snow, #ffffff);\n            font-size: 0.75rem;\n            line-height: 0.75rem;\n            letter-spacing: -0.05em;\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n            z-index: 10;\n            content: attr(data-phi) \"\";\n          }\n\n          #body.wire-top:not(.wire-bottom)::before,\n          #body.wire-top-disabled:not(.wire-bottom-disabled)::before {\n            display: none;\n          }\n\n          #body::after {\n            position: absolute;\n            top: 0px;\n            margin-top: 2rem;\n            color: var(--colors-wolf, #777777);\n            background-color: var(--colors-snow, #ffffff);\n            font-size: 0.75rem;\n            line-height: 0.75rem;\n            letter-spacing: -0.05em;\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n            z-index: 10;\n            content: attr(data-phi) \"\";\n          }\n\n          #body.wire-bottom::after,\n          #body.wire-bottom-disabled::after,\n          #body:not(.wire-bottom):not(.wire-top):not(.wire-bottom-disabled):not(.wire-top-disabled)::after {\n            display: none;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            top: 0px;\n            height: 100%;\n            width: 100%;\n            border-radius: 9999px;\n            color: var(--colors-snow, #ffffff);\n            background-color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            background-color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\""," "," ","\"\n          data-target=\"phase-gate.body\"\n          data-phi=\"","\"\n        >\n          "," ","\n        </div>"])),this.disabledClassString,this.wireTopClassString,this.wireBottomClassString,this.phi,phaseGateElement_verticalWires,phaseIcon),this.shadowRoot);}},{key:"disabledClassString",get:function get(){return this.disabled?"disabled":"";}},{key:"wireTopClassString",get:function get(){if(this.wireTop)return"wire-top";if(this.wireTopDisabled)return"wire-top-disabled";return"";}},{key:"wireBottomClassString",get:function get(){if(this.wireBottom)return"wire-bottom";if(this.wireBottomDisabled)return"wire-bottom-disabled";return"";}}]);return PhaseGateElement;}(/*#__PURE__*/phaseGateElement_wrapNativeSuper(HTMLElement)),(phaseGateElement_descriptor=phaseGateElement_applyDecoratedDescriptor(phaseGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),phaseGateElement_descriptor2=phaseGateElement_applyDecoratedDescriptor(phaseGateElement_class2.prototype,"phi",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"";}}),phaseGateElement_descriptor3=phaseGateElement_applyDecoratedDescriptor(phaseGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),phaseGateElement_descriptor4=phaseGateElement_applyDecoratedDescriptor(phaseGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),phaseGateElement_descriptor5=phaseGateElement_applyDecoratedDescriptor(phaseGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),phaseGateElement_descriptor6=phaseGateElement_applyDecoratedDescriptor(phaseGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),phaseGateElement_descriptor7=phaseGateElement_applyDecoratedDescriptor(phaseGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),phaseGateElement_class2))||phaseGateElement_class;
// CONCATENATED MODULE: ./app/components/root_not_gate_component/rootNotGateElement.ts
var rootNotGateElement_templateObject,rootNotGateElement_templateObject2,rootNotGateElement_class,rootNotGateElement_class2,rootNotGateElement_descriptor,rootNotGateElement_descriptor2,rootNotGateElement_descriptor3,rootNotGateElement_descriptor4,rootNotGateElement_descriptor5,rootNotGateElement_descriptor6,rootNotGateElement_templateObject3;function rootNotGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function rootNotGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function rootNotGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function rootNotGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)rootNotGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)rootNotGateElement_defineProperties(Constructor,staticProps);return Constructor;}function rootNotGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)rootNotGateElement_setPrototypeOf(subClass,superClass);}function rootNotGateElement_createSuper(Derived){var hasNativeReflectConstruct=rootNotGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=rootNotGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=rootNotGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return rootNotGateElement_possibleConstructorReturn(this,result);};}function rootNotGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return rootNotGateElement_assertThisInitialized(self);}function rootNotGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function rootNotGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;rootNotGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!rootNotGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return rootNotGateElement_construct(Class,arguments,rootNotGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return rootNotGateElement_setPrototypeOf(Wrapper,Class);};return rootNotGateElement_wrapNativeSuper(Class);}function rootNotGateElement_construct(Parent,args,Class){if(rootNotGateElement_isNativeReflectConstruct()){rootNotGateElement_construct=Reflect.construct;}else{rootNotGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)rootNotGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return rootNotGateElement_construct.apply(null,arguments);}function rootNotGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function rootNotGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function rootNotGateElement_setPrototypeOf(o,p){rootNotGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return rootNotGateElement_setPrototypeOf(o,p);}function rootNotGateElement_getPrototypeOf(o){rootNotGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return rootNotGateElement_getPrototypeOf(o);}function rootNotGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function rootNotGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function rootNotGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var rootNotGateElement_verticalWires=html(rootNotGateElement_templateObject||(rootNotGateElement_templateObject=rootNotGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var rootNotIcon=html(rootNotGateElement_templateObject2||(rootNotGateElement_templateObject2=rootNotGateElement_taggedTemplateLiteral(["<svg\n  id=\"icon\"\n  width=\"48\"\n  height=\"48\"\n  viewBox=\"0 0 48 48\"\n  fill=\"none\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <path d=\"M10 24L13 24L14 36L17 36L18 12L38 12\" />\n  <path d=\"M24 32L34 18M34 32L24 18\" />\n</svg>"])));var rootNotGateElement_RootNotGateElement=controller(rootNotGateElement_class=(rootNotGateElement_class2=/*#__PURE__*/function(_HTMLElement){rootNotGateElement_inherits(RootNotGateElement,_HTMLElement);var _super=rootNotGateElement_createSuper(RootNotGateElement);function RootNotGateElement(){var _this;rootNotGateElement_classCallCheck(this,RootNotGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));rootNotGateElement_initializerDefineProperty(_this,"body",rootNotGateElement_descriptor,rootNotGateElement_assertThisInitialized(_this));rootNotGateElement_initializerDefineProperty(_this,"disabled",rootNotGateElement_descriptor2,rootNotGateElement_assertThisInitialized(_this));rootNotGateElement_initializerDefineProperty(_this,"wireTop",rootNotGateElement_descriptor3,rootNotGateElement_assertThisInitialized(_this));rootNotGateElement_initializerDefineProperty(_this,"wireTopDisabled",rootNotGateElement_descriptor4,rootNotGateElement_assertThisInitialized(_this));rootNotGateElement_initializerDefineProperty(_this,"wireBottom",rootNotGateElement_descriptor5,rootNotGateElement_assertThisInitialized(_this));rootNotGateElement_initializerDefineProperty(_this,"wireBottomDisabled",rootNotGateElement_descriptor6,rootNotGateElement_assertThisInitialized(_this));return _this;}rootNotGateElement_createClass(RootNotGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-disabled"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("disabled");}else{this.body.classList.add("disabled");}}if(name==="data-wire-top"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireTopClassString);}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireBottomClassString);}}},{key:"update",value:function update(){render(html(rootNotGateElement_templateObject3||(rootNotGateElement_templateObject3=rootNotGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            top: 0px;\n            height: 100%;\n            width: 100%;\n            border-radius: 0.25rem;\n            color: var(--colors-snow, #ffffff);\n            background-color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            background-color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\""," "," ","\"\n          data-target=\"root-not-gate.body\"\n        >\n          "," ","\n        </div>"])),this.disabledClassString,this.wireTopClassString,this.wireBottomClassString,rootNotGateElement_verticalWires,rootNotIcon),this.shadowRoot);}},{key:"disabledClassString",get:function get(){return this.disabled?"disabled":"";}},{key:"wireTopClassString",get:function get(){if(this.wireTop)return"wire-top";if(this.wireTopDisabled)return"wire-top-disabled";return"";}},{key:"wireBottomClassString",get:function get(){if(this.wireBottom)return"wire-bottom";if(this.wireBottomDisabled)return"wire-bottom-disabled";return"";}}]);return RootNotGateElement;}(/*#__PURE__*/rootNotGateElement_wrapNativeSuper(HTMLElement)),(rootNotGateElement_descriptor=rootNotGateElement_applyDecoratedDescriptor(rootNotGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),rootNotGateElement_descriptor2=rootNotGateElement_applyDecoratedDescriptor(rootNotGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rootNotGateElement_descriptor3=rootNotGateElement_applyDecoratedDescriptor(rootNotGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rootNotGateElement_descriptor4=rootNotGateElement_applyDecoratedDescriptor(rootNotGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rootNotGateElement_descriptor5=rootNotGateElement_applyDecoratedDescriptor(rootNotGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rootNotGateElement_descriptor6=rootNotGateElement_applyDecoratedDescriptor(rootNotGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),rootNotGateElement_class2))||rootNotGateElement_class;
// CONCATENATED MODULE: ./app/components/rx_gate_component/rxGateElement.ts
var rxGateElement_templateObject,rxGateElement_templateObject2,rxGateElement_class,rxGateElement_class2,rxGateElement_descriptor,rxGateElement_descriptor2,rxGateElement_descriptor3,rxGateElement_descriptor4,rxGateElement_descriptor5,rxGateElement_descriptor6,rxGateElement_descriptor7,rxGateElement_templateObject3;function rxGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function rxGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function rxGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function rxGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)rxGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)rxGateElement_defineProperties(Constructor,staticProps);return Constructor;}function rxGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)rxGateElement_setPrototypeOf(subClass,superClass);}function rxGateElement_createSuper(Derived){var hasNativeReflectConstruct=rxGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=rxGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=rxGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return rxGateElement_possibleConstructorReturn(this,result);};}function rxGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return rxGateElement_assertThisInitialized(self);}function rxGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function rxGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;rxGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!rxGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return rxGateElement_construct(Class,arguments,rxGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return rxGateElement_setPrototypeOf(Wrapper,Class);};return rxGateElement_wrapNativeSuper(Class);}function rxGateElement_construct(Parent,args,Class){if(rxGateElement_isNativeReflectConstruct()){rxGateElement_construct=Reflect.construct;}else{rxGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)rxGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return rxGateElement_construct.apply(null,arguments);}function rxGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function rxGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function rxGateElement_setPrototypeOf(o,p){rxGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return rxGateElement_setPrototypeOf(o,p);}function rxGateElement_getPrototypeOf(o){rxGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return rxGateElement_getPrototypeOf(o);}function rxGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function rxGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function rxGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var rxGateElement_verticalWires=html(rxGateElement_templateObject||(rxGateElement_templateObject=rxGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var rxIcon=html(rxGateElement_templateObject2||(rxGateElement_templateObject2=rxGateElement_taggedTemplateLiteral(["<svg id=\"icon\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\">\n  <path\n    d=\"M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998L34.609 35\"\n    fill=\"none\"\n    stroke=\"#FFF\"\n    stroke-width=\"2\"\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n  />\n</svg>"])));var rxGateElement_RxGateElement=controller(rxGateElement_class=(rxGateElement_class2=/*#__PURE__*/function(_HTMLElement){rxGateElement_inherits(RxGateElement,_HTMLElement);var _super=rxGateElement_createSuper(RxGateElement);function RxGateElement(){var _this;rxGateElement_classCallCheck(this,RxGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));rxGateElement_initializerDefineProperty(_this,"body",rxGateElement_descriptor,rxGateElement_assertThisInitialized(_this));rxGateElement_initializerDefineProperty(_this,"theta",rxGateElement_descriptor2,rxGateElement_assertThisInitialized(_this));rxGateElement_initializerDefineProperty(_this,"disabled",rxGateElement_descriptor3,rxGateElement_assertThisInitialized(_this));rxGateElement_initializerDefineProperty(_this,"wireTop",rxGateElement_descriptor4,rxGateElement_assertThisInitialized(_this));rxGateElement_initializerDefineProperty(_this,"wireTopDisabled",rxGateElement_descriptor5,rxGateElement_assertThisInitialized(_this));rxGateElement_initializerDefineProperty(_this,"wireBottom",rxGateElement_descriptor6,rxGateElement_assertThisInitialized(_this));rxGateElement_initializerDefineProperty(_this,"wireBottomDisabled",rxGateElement_descriptor7,rxGateElement_assertThisInitialized(_this));return _this;}rxGateElement_createClass(RxGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-disabled"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("disabled");}else{this.body.classList.add("disabled");}}if(name==="data-wire-top"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireTopClassString);}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireBottomClassString);}}},{key:"update",value:function update(){render(html(rxGateElement_templateObject3||(rxGateElement_templateObject3=rxGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body::before {\n            position: absolute;\n            bottom: 0px;\n            margin-bottom: 2rem;\n            color: var(--colors-wolf, #777777);\n            background-color: var(--colors-snow, #ffffff);\n            font-size: 0.75rem;\n            line-height: 0.75rem;\n            letter-spacing: -0.05em;\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n            z-index: 10;\n            content: attr(data-theta) \"\";\n          }\n\n          #body.wire-top:not(.wire-bottom)::before,\n          #body.wire-top-disabled:not(.wire-bottom-disabled)::before {\n            display: none;\n          }\n\n          #body::after {\n            position: absolute;\n            top: 0px;\n            margin-top: 2rem;\n            color: var(--colors-wolf, #777777);\n            background-color: var(--colors-snow, #ffffff);\n            font-size: 0.75rem;\n            line-height: 0.75rem;\n            letter-spacing: -0.05em;\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n            z-index: 10;\n            content: attr(data-theta) \"\";\n          }\n\n          #body.wire-bottom::after,\n          #body.wire-bottom-disabled::after,\n          #body:not(.wire-bottom):not(.wire-top):not(.wire-bottom-disabled):not(.wire-top-disabled)::after {\n            display: none;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            top: 0px;\n            height: 100%;\n            width: 100%;\n            border-radius: 0.25rem;\n            color: var(--colors-gate, #43c000);\n            background-color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            background-color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\""," "," ","\"\n          data-target=\"rx-gate.body\"\n          data-theta=\"","\"\n        >\n          "," ","\n        </div>"])),this.disabledClassString,this.wireTopClassString,this.wireBottomClassString,this.theta,rxGateElement_verticalWires,rxIcon),this.shadowRoot);}},{key:"disabledClassString",get:function get(){return this.disabled?"disabled":"";}},{key:"wireTopClassString",get:function get(){if(this.wireTop)return"wire-top";if(this.wireTopDisabled)return"wire-top-disabled";return"";}},{key:"wireBottomClassString",get:function get(){if(this.wireBottom)return"wire-bottom";if(this.wireBottomDisabled)return"wire-bottom-disabled";return"";}}]);return RxGateElement;}(/*#__PURE__*/rxGateElement_wrapNativeSuper(HTMLElement)),(rxGateElement_descriptor=rxGateElement_applyDecoratedDescriptor(rxGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),rxGateElement_descriptor2=rxGateElement_applyDecoratedDescriptor(rxGateElement_class2.prototype,"theta",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"";}}),rxGateElement_descriptor3=rxGateElement_applyDecoratedDescriptor(rxGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rxGateElement_descriptor4=rxGateElement_applyDecoratedDescriptor(rxGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rxGateElement_descriptor5=rxGateElement_applyDecoratedDescriptor(rxGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rxGateElement_descriptor6=rxGateElement_applyDecoratedDescriptor(rxGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rxGateElement_descriptor7=rxGateElement_applyDecoratedDescriptor(rxGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),rxGateElement_class2))||rxGateElement_class;
// CONCATENATED MODULE: ./app/components/ry_gate_component/ryGateElement.ts
var ryGateElement_templateObject,ryGateElement_templateObject2,ryGateElement_class,ryGateElement_class2,ryGateElement_descriptor,ryGateElement_descriptor2,ryGateElement_descriptor3,ryGateElement_descriptor4,ryGateElement_descriptor5,ryGateElement_descriptor6,ryGateElement_descriptor7,ryGateElement_templateObject3;function ryGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function ryGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function ryGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function ryGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)ryGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)ryGateElement_defineProperties(Constructor,staticProps);return Constructor;}function ryGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)ryGateElement_setPrototypeOf(subClass,superClass);}function ryGateElement_createSuper(Derived){var hasNativeReflectConstruct=ryGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=ryGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=ryGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return ryGateElement_possibleConstructorReturn(this,result);};}function ryGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return ryGateElement_assertThisInitialized(self);}function ryGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function ryGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;ryGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!ryGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return ryGateElement_construct(Class,arguments,ryGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return ryGateElement_setPrototypeOf(Wrapper,Class);};return ryGateElement_wrapNativeSuper(Class);}function ryGateElement_construct(Parent,args,Class){if(ryGateElement_isNativeReflectConstruct()){ryGateElement_construct=Reflect.construct;}else{ryGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)ryGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return ryGateElement_construct.apply(null,arguments);}function ryGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function ryGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function ryGateElement_setPrototypeOf(o,p){ryGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return ryGateElement_setPrototypeOf(o,p);}function ryGateElement_getPrototypeOf(o){ryGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return ryGateElement_getPrototypeOf(o);}function ryGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function ryGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function ryGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var ryGateElement_verticalWires=html(ryGateElement_templateObject||(ryGateElement_templateObject=ryGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var ryIcon=html(ryGateElement_templateObject2||(ryGateElement_templateObject2=ryGateElement_taggedTemplateLiteral(["<svg id=\"icon\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\">\n  <path\n    d=\"M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002l-4.967 10.927M25.03 13.002l4.613 10.927m0 0L29.676 35\"\n    fill=\"none\"\n    stroke=\"#FFF\"\n    stroke-width=\"2\"\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n  />\n</svg>"])));var ryGateElement_RyGateElement=controller(ryGateElement_class=(ryGateElement_class2=/*#__PURE__*/function(_HTMLElement){ryGateElement_inherits(RyGateElement,_HTMLElement);var _super=ryGateElement_createSuper(RyGateElement);function RyGateElement(){var _this;ryGateElement_classCallCheck(this,RyGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));ryGateElement_initializerDefineProperty(_this,"body",ryGateElement_descriptor,ryGateElement_assertThisInitialized(_this));ryGateElement_initializerDefineProperty(_this,"theta",ryGateElement_descriptor2,ryGateElement_assertThisInitialized(_this));ryGateElement_initializerDefineProperty(_this,"disabled",ryGateElement_descriptor3,ryGateElement_assertThisInitialized(_this));ryGateElement_initializerDefineProperty(_this,"wireTop",ryGateElement_descriptor4,ryGateElement_assertThisInitialized(_this));ryGateElement_initializerDefineProperty(_this,"wireTopDisabled",ryGateElement_descriptor5,ryGateElement_assertThisInitialized(_this));ryGateElement_initializerDefineProperty(_this,"wireBottom",ryGateElement_descriptor6,ryGateElement_assertThisInitialized(_this));ryGateElement_initializerDefineProperty(_this,"wireBottomDisabled",ryGateElement_descriptor7,ryGateElement_assertThisInitialized(_this));return _this;}ryGateElement_createClass(RyGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-disabled"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("disabled");}else{this.body.classList.add("disabled");}}if(name==="data-wire-top"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireTopClassString);}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireBottomClassString);}}},{key:"update",value:function update(){render(html(ryGateElement_templateObject3||(ryGateElement_templateObject3=ryGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body::before {\n            position: absolute;\n            bottom: 0px;\n            margin-bottom: 2rem;\n            color: var(--colors-wolf, #777777);\n            background-color: var(--colors-snow, #ffffff);\n            font-size: 0.75rem;\n            line-height: 0.75rem;\n            letter-spacing: -0.05em;\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n            z-index: 10;\n            content: attr(data-theta) \"\";\n          }\n\n          #body.wire-top:not(.wire-bottom)::before,\n          #body.wire-top-disabled:not(.wire-bottom-disabled)::before {\n            display: none;\n          }\n\n          #body::after {\n            position: absolute;\n            top: 0px;\n            margin-top: 2rem;\n            color: var(--colors-wolf, #777777);\n            background-color: var(--colors-snow, #ffffff);\n            font-size: 0.75rem;\n            line-height: 0.75rem;\n            letter-spacing: -0.05em;\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n            z-index: 10;\n            content: attr(data-theta) \"\";\n          }\n\n          #body.wire-bottom::after,\n          #body.wire-bottom-disabled::after,\n          #body:not(.wire-bottom):not(.wire-top):not(.wire-bottom-disabled):not(.wire-top-disabled)::after {\n            display: none;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            top: 0px;\n            height: 100%;\n            width: 100%;\n            border-radius: 0.25rem;\n            color: var(--colors-gate, #43c000);\n            background-color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            background-color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\""," "," ","\"\n          data-target=\"ry-gate.body\"\n          data-theta=\"","\"\n        >\n          "," ","\n        </div>"])),this.disabledClassString,this.wireTopClassString,this.wireBottomClassString,this.theta,ryGateElement_verticalWires,ryIcon),this.shadowRoot);}},{key:"disabledClassString",get:function get(){return this.disabled?"disabled":"";}},{key:"wireTopClassString",get:function get(){if(this.wireTop)return"wire-top";if(this.wireTopDisabled)return"wire-top-disabled";return"";}},{key:"wireBottomClassString",get:function get(){if(this.wireBottom)return"wire-bottom";if(this.wireBottomDisabled)return"wire-bottom-disabled";return"";}}]);return RyGateElement;}(/*#__PURE__*/ryGateElement_wrapNativeSuper(HTMLElement)),(ryGateElement_descriptor=ryGateElement_applyDecoratedDescriptor(ryGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),ryGateElement_descriptor2=ryGateElement_applyDecoratedDescriptor(ryGateElement_class2.prototype,"theta",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"";}}),ryGateElement_descriptor3=ryGateElement_applyDecoratedDescriptor(ryGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),ryGateElement_descriptor4=ryGateElement_applyDecoratedDescriptor(ryGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),ryGateElement_descriptor5=ryGateElement_applyDecoratedDescriptor(ryGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),ryGateElement_descriptor6=ryGateElement_applyDecoratedDescriptor(ryGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),ryGateElement_descriptor7=ryGateElement_applyDecoratedDescriptor(ryGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),ryGateElement_class2))||ryGateElement_class;
// CONCATENATED MODULE: ./app/components/rz_gate_component/rzGateElement.ts
var rzGateElement_templateObject,rzGateElement_templateObject2,rzGateElement_class,rzGateElement_class2,rzGateElement_descriptor,rzGateElement_descriptor2,rzGateElement_descriptor3,rzGateElement_descriptor4,rzGateElement_descriptor5,rzGateElement_descriptor6,rzGateElement_descriptor7,rzGateElement_templateObject3;function rzGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function rzGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function rzGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function rzGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)rzGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)rzGateElement_defineProperties(Constructor,staticProps);return Constructor;}function rzGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)rzGateElement_setPrototypeOf(subClass,superClass);}function rzGateElement_createSuper(Derived){var hasNativeReflectConstruct=rzGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=rzGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=rzGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return rzGateElement_possibleConstructorReturn(this,result);};}function rzGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return rzGateElement_assertThisInitialized(self);}function rzGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function rzGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;rzGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!rzGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return rzGateElement_construct(Class,arguments,rzGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return rzGateElement_setPrototypeOf(Wrapper,Class);};return rzGateElement_wrapNativeSuper(Class);}function rzGateElement_construct(Parent,args,Class){if(rzGateElement_isNativeReflectConstruct()){rzGateElement_construct=Reflect.construct;}else{rzGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)rzGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return rzGateElement_construct.apply(null,arguments);}function rzGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function rzGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function rzGateElement_setPrototypeOf(o,p){rzGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return rzGateElement_setPrototypeOf(o,p);}function rzGateElement_getPrototypeOf(o){rzGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return rzGateElement_getPrototypeOf(o);}function rzGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function rzGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function rzGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var rzGateElement_verticalWires=html(rzGateElement_templateObject||(rzGateElement_templateObject=rzGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var rzIcon=html(rzGateElement_templateObject2||(rzGateElement_templateObject2=rzGateElement_taggedTemplateLiteral(["<svg id=\"icon\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\">\n  <path\n    d=\"M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998h9.79M24.747 35h10.074\"\n    fill=\"none\"\n    stroke=\"#FFF\"\n    stroke-width=\"2\"\n    stroke-linecap=\"round\"\n    stroke-linejoin=\"round\"\n  />\n</svg>"])));var rzGateElement_RzGateElement=controller(rzGateElement_class=(rzGateElement_class2=/*#__PURE__*/function(_HTMLElement){rzGateElement_inherits(RzGateElement,_HTMLElement);var _super=rzGateElement_createSuper(RzGateElement);function RzGateElement(){var _this;rzGateElement_classCallCheck(this,RzGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));rzGateElement_initializerDefineProperty(_this,"body",rzGateElement_descriptor,rzGateElement_assertThisInitialized(_this));rzGateElement_initializerDefineProperty(_this,"theta",rzGateElement_descriptor2,rzGateElement_assertThisInitialized(_this));rzGateElement_initializerDefineProperty(_this,"disabled",rzGateElement_descriptor3,rzGateElement_assertThisInitialized(_this));rzGateElement_initializerDefineProperty(_this,"wireTop",rzGateElement_descriptor4,rzGateElement_assertThisInitialized(_this));rzGateElement_initializerDefineProperty(_this,"wireTopDisabled",rzGateElement_descriptor5,rzGateElement_assertThisInitialized(_this));rzGateElement_initializerDefineProperty(_this,"wireBottom",rzGateElement_descriptor6,rzGateElement_assertThisInitialized(_this));rzGateElement_initializerDefineProperty(_this,"wireBottomDisabled",rzGateElement_descriptor7,rzGateElement_assertThisInitialized(_this));return _this;}rzGateElement_createClass(RzGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-disabled"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("disabled");}else{this.body.classList.add("disabled");}}if(name==="data-wire-top"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireTopClassString);}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireBottomClassString);}}},{key:"update",value:function update(){render(html(rzGateElement_templateObject3||(rzGateElement_templateObject3=rzGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body::before {\n            position: absolute;\n            bottom: 0px;\n            margin-bottom: 2rem;\n            color: var(--colors-wolf, #777777);\n            background-color: var(--colors-snow, #ffffff);\n            font-size: 0.75rem;\n            line-height: 0.75rem;\n            letter-spacing: -0.05em;\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n            z-index: 10;\n            content: attr(data-theta) \"\";\n          }\n\n          #body.wire-top:not(.wire-bottom)::before,\n          #body.wire-top-disabled:not(.wire-bottom-disabled)::before {\n            display: none;\n          }\n\n          #body::after {\n            position: absolute;\n            top: 0px;\n            margin-top: 2rem;\n            color: var(--colors-wolf, #777777);\n            background-color: var(--colors-snow, #ffffff);\n            font-size: 0.75rem;\n            line-height: 0.75rem;\n            letter-spacing: -0.05em;\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n            z-index: 10;\n            content: attr(data-theta) \"\";\n          }\n\n          #body.wire-bottom::after,\n          #body.wire-bottom-disabled::after,\n          #body:not(.wire-bottom):not(.wire-top):not(.wire-bottom-disabled):not(.wire-top-disabled)::after {\n            display: none;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            top: 0px;\n            height: 100%;\n            width: 100%;\n            border-radius: 0.25rem;\n            color: var(--colors-gate, #43c000);\n            background-color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            background-color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\""," "," ","\"\n          data-target=\"rz-gate.body\"\n          data-theta=\"","\"\n        >\n          "," ","\n        </div>"])),this.disabledClassString,this.wireTopClassString,this.wireBottomClassString,this.theta,rzGateElement_verticalWires,rzIcon),this.shadowRoot);}},{key:"disabledClassString",get:function get(){return this.disabled?"disabled":"";}},{key:"wireTopClassString",get:function get(){if(this.wireTop)return"wire-top";if(this.wireTopDisabled)return"wire-top-disabled";return"";}},{key:"wireBottomClassString",get:function get(){if(this.wireBottom)return"wire-bottom";if(this.wireBottomDisabled)return"wire-bottom-disabled";return"";}}]);return RzGateElement;}(/*#__PURE__*/rzGateElement_wrapNativeSuper(HTMLElement)),(rzGateElement_descriptor=rzGateElement_applyDecoratedDescriptor(rzGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),rzGateElement_descriptor2=rzGateElement_applyDecoratedDescriptor(rzGateElement_class2.prototype,"theta",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"";}}),rzGateElement_descriptor3=rzGateElement_applyDecoratedDescriptor(rzGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rzGateElement_descriptor4=rzGateElement_applyDecoratedDescriptor(rzGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rzGateElement_descriptor5=rzGateElement_applyDecoratedDescriptor(rzGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rzGateElement_descriptor6=rzGateElement_applyDecoratedDescriptor(rzGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),rzGateElement_descriptor7=rzGateElement_applyDecoratedDescriptor(rzGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),rzGateElement_class2))||rzGateElement_class;
// CONCATENATED MODULE: ./app/components/swap_gate_component/swapGateElement.ts
var swapGateElement_templateObject,swapGateElement_templateObject2,swapGateElement_class,swapGateElement_class2,swapGateElement_descriptor,swapGateElement_descriptor2,swapGateElement_descriptor3,swapGateElement_descriptor4,swapGateElement_descriptor5,swapGateElement_descriptor6,swapGateElement_descriptor7,swapGateElement_descriptor8,swapGateElement_templateObject3;function swapGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function swapGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function swapGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function swapGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)swapGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)swapGateElement_defineProperties(Constructor,staticProps);return Constructor;}function swapGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)swapGateElement_setPrototypeOf(subClass,superClass);}function swapGateElement_createSuper(Derived){var hasNativeReflectConstruct=swapGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=swapGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=swapGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return swapGateElement_possibleConstructorReturn(this,result);};}function swapGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return swapGateElement_assertThisInitialized(self);}function swapGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function swapGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;swapGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!swapGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return swapGateElement_construct(Class,arguments,swapGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return swapGateElement_setPrototypeOf(Wrapper,Class);};return swapGateElement_wrapNativeSuper(Class);}function swapGateElement_construct(Parent,args,Class){if(swapGateElement_isNativeReflectConstruct()){swapGateElement_construct=Reflect.construct;}else{swapGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)swapGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return swapGateElement_construct.apply(null,arguments);}function swapGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function swapGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function swapGateElement_setPrototypeOf(o,p){swapGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return swapGateElement_setPrototypeOf(o,p);}function swapGateElement_getPrototypeOf(o){swapGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return swapGateElement_getPrototypeOf(o);}function swapGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function swapGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function swapGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var swapGateElement_verticalWires=html(swapGateElement_templateObject||(swapGateElement_templateObject=swapGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var swapIcon=html(swapGateElement_templateObject2||(swapGateElement_templateObject2=swapGateElement_taggedTemplateLiteral(["<svg\n  id=\"icon\"\n  fill=\"none\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n  stroke-width=\"2\"\n  stroke=\"currentColor\"\n  viewBox=\"0 0 24 24\"\n>\n  <path d=\"M6 18L18 6M6 6l12 12\"></path>\n</svg>"])));var swapGateElement_SwapGateElement=controller(swapGateElement_class=(swapGateElement_class2=/*#__PURE__*/function(_HTMLElement){swapGateElement_inherits(SwapGateElement,_HTMLElement);var _super=swapGateElement_createSuper(SwapGateElement);function SwapGateElement(){var _this;swapGateElement_classCallCheck(this,SwapGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));swapGateElement_initializerDefineProperty(_this,"body",swapGateElement_descriptor,swapGateElement_assertThisInitialized(_this));swapGateElement_initializerDefineProperty(_this,"size",swapGateElement_descriptor2,swapGateElement_assertThisInitialized(_this));swapGateElement_initializerDefineProperty(_this,"disabled",swapGateElement_descriptor3,swapGateElement_assertThisInitialized(_this));swapGateElement_initializerDefineProperty(_this,"wireTop",swapGateElement_descriptor4,swapGateElement_assertThisInitialized(_this));swapGateElement_initializerDefineProperty(_this,"wireTopDisabled",swapGateElement_descriptor5,swapGateElement_assertThisInitialized(_this));swapGateElement_initializerDefineProperty(_this,"wireBottom",swapGateElement_descriptor6,swapGateElement_assertThisInitialized(_this));swapGateElement_initializerDefineProperty(_this,"wireBottomDisabled",swapGateElement_descriptor7,swapGateElement_assertThisInitialized(_this));swapGateElement_initializerDefineProperty(_this,"draggable",swapGateElement_descriptor8,swapGateElement_assertThisInitialized(_this));return _this;}swapGateElement_createClass(SwapGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"showGateDescription",value:function showGateDescription(){if(this._tippy)return;var content=this.descriptionHeader();if(!content)return;var popup=Object(tippy_esm["b" /* default */])(this,{allowHTML:true,animation:false,arrow:tippy_esm["c" /* roundArrow */]+tippy_esm["c" /* roundArrow */],delay:0,placement:"right",theme:"qni",onShow:function onShow(instance){instance.setContent(content);}});popup.show();}},{key:"descriptionHeader",value:function descriptionHeader(){return this.querySelector("header");}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(!this.body)return;if(oldValue===newValue)return;if(name==="data-disabled"){this.body.classList.toggle("disabled");}if(name==="data-wire-top"){this.body.classList.toggle("wire-top");}if(name==="data-wire-bottom"){this.body.classList.toggle("wire-bottom");}}},{key:"update",value:function update(){render(html(swapGateElement_templateObject3||(swapGateElement_templateObject3=swapGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body.size-xs {\n            height: 1rem;\n            width: 1rem;\n          }\n\n          #body.size-sm {\n            height: 1.5rem;\n            width: 1.5rem;\n          }\n\n          #body.size-base {\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body.size-lg {\n            height: 2.5rem;\n            width: 2.5rem;\n          }\n\n          #body.size-xl {\n            height: 3rem;\n            width: 3rem;\n          }\n\n          #body.draggable {\n            cursor: grab;\n          }\n\n          #body.draggable::after {\n            position: absolute;\n            top: 0px;\n            right: 0px;\n            bottom: 0px;\n            left: 0px;\n            border-color: var(--colors-cardinal, #ff4b4b);\n            border-radius: 0.25rem;\n            border-style: solid;\n            border-width: 2px;\n            box-sizing: border-box;\n            opacity: 0;\n            content: \"\";\n          }\n\n          #body:hover::after {\n            opacity: 100;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\"","\"\n          data-target=\"swap-gate.body\"\n          data-action=\"mouseenter:swap-gate#showGateDescription\"\n        >\n          "," ","\n        </div>"])),this.classString,swapGateElement_verticalWires,swapIcon),this.shadowRoot);}},{key:"classString",get:function get(){var klass=[];if(this.size==="xs")klass.push("size-xs");if(this.size==="sm")klass.push("size-sm");if(this.size==="base")klass.push("size-base");if(this.size==="lg")klass.push("size-lg");if(this.size==="xl")klass.push("size-xl");if(this.disabled)klass.push("disabled");if(this.wireTop)klass.push("wire-top");if(this.wireTopDisabled)klass.push("wire-top-disabled");if(this.wireBottom)klass.push("wire-bottom");if(this.wireBottomDisabled)klass.push("wire-bottom-disabled");if(this.draggable)klass.push("draggable");return klass.join(" ");}}]);return SwapGateElement;}(/*#__PURE__*/swapGateElement_wrapNativeSuper(HTMLElement)),(swapGateElement_descriptor=swapGateElement_applyDecoratedDescriptor(swapGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),swapGateElement_descriptor2=swapGateElement_applyDecoratedDescriptor(swapGateElement_class2.prototype,"size",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"base";}}),swapGateElement_descriptor3=swapGateElement_applyDecoratedDescriptor(swapGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),swapGateElement_descriptor4=swapGateElement_applyDecoratedDescriptor(swapGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),swapGateElement_descriptor5=swapGateElement_applyDecoratedDescriptor(swapGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),swapGateElement_descriptor6=swapGateElement_applyDecoratedDescriptor(swapGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),swapGateElement_descriptor7=swapGateElement_applyDecoratedDescriptor(swapGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),swapGateElement_descriptor8=swapGateElement_applyDecoratedDescriptor(swapGateElement_class2.prototype,"draggable",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),swapGateElement_class2))||swapGateElement_class;
// CONCATENATED MODULE: ./app/components/write_gate_component/writeGateElement.ts
var writeGateElement_templateObject,writeGateElement_class,writeGateElement_class2,writeGateElement_descriptor,writeGateElement_descriptor2,writeGateElement_descriptor3,writeGateElement_descriptor4,writeGateElement_templateObject2;function writeGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function writeGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function writeGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function writeGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)writeGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)writeGateElement_defineProperties(Constructor,staticProps);return Constructor;}function writeGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)writeGateElement_setPrototypeOf(subClass,superClass);}function writeGateElement_createSuper(Derived){var hasNativeReflectConstruct=writeGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=writeGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=writeGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return writeGateElement_possibleConstructorReturn(this,result);};}function writeGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return writeGateElement_assertThisInitialized(self);}function writeGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function writeGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;writeGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!writeGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return writeGateElement_construct(Class,arguments,writeGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return writeGateElement_setPrototypeOf(Wrapper,Class);};return writeGateElement_wrapNativeSuper(Class);}function writeGateElement_construct(Parent,args,Class){if(writeGateElement_isNativeReflectConstruct()){writeGateElement_construct=Reflect.construct;}else{writeGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)writeGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return writeGateElement_construct.apply(null,arguments);}function writeGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function writeGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function writeGateElement_setPrototypeOf(o,p){writeGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return writeGateElement_setPrototypeOf(o,p);}function writeGateElement_getPrototypeOf(o){writeGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return writeGateElement_getPrototypeOf(o);}function writeGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function writeGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function writeGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var ketIcon=html(writeGateElement_templateObject||(writeGateElement_templateObject=writeGateElement_taggedTemplateLiteral(["<svg\n  id=\"icon\"\n  width=\"48\"\n  height=\"48\"\n  viewBox=\"0 0 48 48\"\n  fill=\"none\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n  stroke-linejoin=\"round\"\n>\n  <polygon points=\"9 40, 9 10, 34 10, 40 24, 34 40\" stroke=\"#fff\" fill=\"#fff\" />\n  <path d=\"M9 10L9 40M34 10L40 24L34 40\" />\n</svg>"])));var writeGateElement_WriteGateElement=controller(writeGateElement_class=(writeGateElement_class2=/*#__PURE__*/function(_HTMLElement){writeGateElement_inherits(WriteGateElement,_HTMLElement);var _super=writeGateElement_createSuper(WriteGateElement);function WriteGateElement(){var _this;writeGateElement_classCallCheck(this,WriteGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));writeGateElement_initializerDefineProperty(_this,"body",writeGateElement_descriptor,writeGateElement_assertThisInitialized(_this));writeGateElement_initializerDefineProperty(_this,"size",writeGateElement_descriptor2,writeGateElement_assertThisInitialized(_this));writeGateElement_initializerDefineProperty(_this,"value",writeGateElement_descriptor3,writeGateElement_assertThisInitialized(_this));writeGateElement_initializerDefineProperty(_this,"draggable",writeGateElement_descriptor4,writeGateElement_assertThisInitialized(_this));return _this;}writeGateElement_createClass(WriteGateElement,[{key:"showGateDescription",value:function showGateDescription(){if(this._tippy)return;var content=this.description();if(!content)return;var popup=Object(tippy_esm["b" /* default */])(this,{allowHTML:true,animation:false,arrow:tippy_esm["c" /* roundArrow */]+tippy_esm["c" /* roundArrow */],delay:0,placement:"right",theme:"qni",onShow:function onShow(instance){instance.setContent(content);}});popup.show();}},{key:"description",value:function description(){return this.innerHTML;}},{key:"connectedCallback",value:function connectedCallback(){try{this.attachShadow({mode:"open"});}catch(InvalidStateError){// NOP
}this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-value"&&this.body){this.body.classList.remove("value-0");this.body.classList.remove("value-1");switch(newValue){case"0":this.body.classList.add("value-0");break;case"1":this.body.classList.add("value-1");break;default:}}}},{key:"update",value:function update(){render(html(writeGateElement_templateObject2||(writeGateElement_templateObject2=writeGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body.size-xs {\n            height: 1rem;\n            width: 1rem;\n          }\n\n          #body.size-sm {\n            height: 1.5rem;\n            width: 1.5rem;\n          }\n\n          #body.size-base {\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #body.size-lg {\n            height: 2.5rem;\n            width: 2.5rem;\n          }\n\n          #body.size-xl {\n            height: 3rem;\n            width: 3rem;\n          }\n\n          #body.draggable {\n            cursor: grab;\n          }\n\n          #body.draggable::after {\n            position: absolute;\n            top: 0px;\n            right: 0px;\n            bottom: 0px;\n            left: 0px;\n            border-color: var(--colors-cardinal, #ff4b4b);\n            border-radius: 0.25rem;\n            border-style: solid;\n            border-width: 2px;\n            box-sizing: border-box;\n            opacity: 0;\n            content: \"\";\n          }\n\n          #body:hover::after {\n            opacity: 100;\n          }\n\n          #icon {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            color: var(--colors-eel, #4b4b4b);\n            stroke: currentColor;\n            transform: rotate(90deg);\n          }\n\n          @media (min-width: 768px) {\n            #icon {\n              transform: rotate(0deg);\n            }\n          }\n\n          #ket-label {\n            position: relative;\n            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,\n              \"Liberation Mono\", \"Courier New\", monospace;\n          }\n\n          #body.size-xs #ket-label {\n            font-size: 0.75rem;\n            line-height: 1rem;\n          }\n\n          #body.size-sm #ket-label {\n            font-size: 0.875rem;\n            line-height: 1.25rem;\n          }\n\n          #body.size-base #ket-label {\n            font-size: 1rem;\n            line-height: 1.5rem;\n          }\n\n          #body.size-lg #ket-label {\n            font-size: 1.125rem;\n            line-height: 1.75rem;\n          }\n\n          #body.size-xl #ket-label {\n            font-size: 1.25rem;\n            line-height: 1.75rem;\n          }\n\n          #body.value-0 #ket-label,\n          #body.value-1 #ket-label {\n            background-color: var(--colors-snow, #ffffff);\n          }\n\n          #body.value-0 #ket-label {\n            color: var(--colors-cardinal, #ff4b4b);\n          }\n\n          #body.value-0 #ket-label::after {\n            content: \"0\";\n          }\n\n          #body.value-1 #ket-label {\n            color: var(--colors-magnitude, #1cb0f6);\n          }\n\n          #body.value-1 #ket-label::after {\n            content: \"1\";\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\"","\"\n          data-target=\"write-gate.body\"\n          data-action=\"mouseenter:write-gate#showGateDescription\"\n        >\n          ","\n          <div id=\"ket-label\"></div>\n        </div>"])),this.classString,ketIcon),this.shadowRoot);}},{key:"classString",get:function get(){var klass=[];if(this.value)klass.push("value-".concat(this.value));if(this.size==="xs")klass.push("size-xs");if(this.size==="sm")klass.push("size-sm");if(this.size==="base")klass.push("size-base");if(this.size==="lg")klass.push("size-lg");if(this.size==="xl")klass.push("size-xl");if(this.draggable)klass.push("draggable");return klass.join(" ");}}]);return WriteGateElement;}(/*#__PURE__*/writeGateElement_wrapNativeSuper(HTMLElement)),(writeGateElement_descriptor=writeGateElement_applyDecoratedDescriptor(writeGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),writeGateElement_descriptor2=writeGateElement_applyDecoratedDescriptor(writeGateElement_class2.prototype,"size",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"base";}}),writeGateElement_descriptor3=writeGateElement_applyDecoratedDescriptor(writeGateElement_class2.prototype,"value",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"0";}}),writeGateElement_descriptor4=writeGateElement_applyDecoratedDescriptor(writeGateElement_class2.prototype,"draggable",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),writeGateElement_class2))||writeGateElement_class;
// CONCATENATED MODULE: ./app/components/x_gate_component/xGateElement.ts
var xGateElement_templateObject,xGateElement_templateObject2,xGateElement_class,xGateElement_class2,xGateElement_descriptor,xGateElement_descriptor2,xGateElement_descriptor3,xGateElement_descriptor4,xGateElement_descriptor5,xGateElement_descriptor6,xGateElement_templateObject3;function xGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function xGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function xGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function xGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)xGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)xGateElement_defineProperties(Constructor,staticProps);return Constructor;}function xGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)xGateElement_setPrototypeOf(subClass,superClass);}function xGateElement_createSuper(Derived){var hasNativeReflectConstruct=xGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=xGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=xGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return xGateElement_possibleConstructorReturn(this,result);};}function xGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return xGateElement_assertThisInitialized(self);}function xGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function xGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;xGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!xGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return xGateElement_construct(Class,arguments,xGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return xGateElement_setPrototypeOf(Wrapper,Class);};return xGateElement_wrapNativeSuper(Class);}function xGateElement_construct(Parent,args,Class){if(xGateElement_isNativeReflectConstruct()){xGateElement_construct=Reflect.construct;}else{xGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)xGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return xGateElement_construct.apply(null,arguments);}function xGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function xGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function xGateElement_setPrototypeOf(o,p){xGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return xGateElement_setPrototypeOf(o,p);}function xGateElement_getPrototypeOf(o){xGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return xGateElement_getPrototypeOf(o);}function xGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function xGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function xGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var xGateElement_verticalWires=html(xGateElement_templateObject||(xGateElement_templateObject=xGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var xIcon=html(xGateElement_templateObject2||(xGateElement_templateObject2=xGateElement_taggedTemplateLiteral(["<svg\n  id=\"icon\"\n  width=\"48\"\n  height=\"48\"\n  viewBox=\"0 0 48 48\"\n  fill=\"none\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n>\n  <line x1=\"50%\" y1=\"28%\" x2=\"50%\" y2=\"72%\" />\n  <line x1=\"28%\" y1=\"50%\" x2=\"72%\" y2=\"50%\" />\n</svg>"])));var xGateElement_XGateElement=controller(xGateElement_class=(xGateElement_class2=/*#__PURE__*/function(_HTMLElement){xGateElement_inherits(XGateElement,_HTMLElement);var _super=xGateElement_createSuper(XGateElement);function XGateElement(){var _this;xGateElement_classCallCheck(this,XGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));xGateElement_initializerDefineProperty(_this,"body",xGateElement_descriptor,xGateElement_assertThisInitialized(_this));xGateElement_initializerDefineProperty(_this,"disabled",xGateElement_descriptor2,xGateElement_assertThisInitialized(_this));xGateElement_initializerDefineProperty(_this,"wireTop",xGateElement_descriptor3,xGateElement_assertThisInitialized(_this));xGateElement_initializerDefineProperty(_this,"wireTopDisabled",xGateElement_descriptor4,xGateElement_assertThisInitialized(_this));xGateElement_initializerDefineProperty(_this,"wireBottom",xGateElement_descriptor5,xGateElement_assertThisInitialized(_this));xGateElement_initializerDefineProperty(_this,"wireBottomDisabled",xGateElement_descriptor6,xGateElement_assertThisInitialized(_this));return _this;}xGateElement_createClass(XGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-disabled"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("disabled");}else{this.body.classList.add("disabled");}}if(name==="data-wire-top"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireTopClassString);}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireBottomClassString);}}},{key:"update",value:function update(){render(html(xGateElement_templateObject3||(xGateElement_templateObject3=xGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            color: var(--colors-gate, #43c000);\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            top: 0px;\n            height: 100%;\n            width: 100%;\n            border-radius: 9999px;\n            color: var(--colors-snow, #ffffff);\n            background-color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            background-color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\""," "," ","\"\n          data-target=\"x-gate.body\"\n        >\n          "," ","\n        </div>"])),this.disabledClassString,this.wireTopClassString,this.wireBottomClassString,xGateElement_verticalWires,xIcon),this.shadowRoot);}},{key:"disabledClassString",get:function get(){return this.disabled?"disabled":"";}},{key:"wireTopClassString",get:function get(){if(this.wireTop)return"wire-top";if(this.wireTopDisabled)return"wire-top-disabled";return"";}},{key:"wireBottomClassString",get:function get(){if(this.wireBottom)return"wire-bottom";if(this.wireBottomDisabled)return"wire-bottom-disabled";return"";}}]);return XGateElement;}(/*#__PURE__*/xGateElement_wrapNativeSuper(HTMLElement)),(xGateElement_descriptor=xGateElement_applyDecoratedDescriptor(xGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),xGateElement_descriptor2=xGateElement_applyDecoratedDescriptor(xGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),xGateElement_descriptor3=xGateElement_applyDecoratedDescriptor(xGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),xGateElement_descriptor4=xGateElement_applyDecoratedDescriptor(xGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),xGateElement_descriptor5=xGateElement_applyDecoratedDescriptor(xGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),xGateElement_descriptor6=xGateElement_applyDecoratedDescriptor(xGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),xGateElement_class2))||xGateElement_class;
// CONCATENATED MODULE: ./app/components/y_gate_component/yGateElement.ts
var yGateElement_templateObject,yGateElement_templateObject2,yGateElement_class,yGateElement_class2,yGateElement_descriptor,yGateElement_descriptor2,yGateElement_descriptor3,yGateElement_descriptor4,yGateElement_descriptor5,yGateElement_descriptor6,yGateElement_templateObject3;function yGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function yGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function yGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function yGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)yGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)yGateElement_defineProperties(Constructor,staticProps);return Constructor;}function yGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)yGateElement_setPrototypeOf(subClass,superClass);}function yGateElement_createSuper(Derived){var hasNativeReflectConstruct=yGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=yGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=yGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return yGateElement_possibleConstructorReturn(this,result);};}function yGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return yGateElement_assertThisInitialized(self);}function yGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function yGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;yGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!yGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return yGateElement_construct(Class,arguments,yGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return yGateElement_setPrototypeOf(Wrapper,Class);};return yGateElement_wrapNativeSuper(Class);}function yGateElement_construct(Parent,args,Class){if(yGateElement_isNativeReflectConstruct()){yGateElement_construct=Reflect.construct;}else{yGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)yGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return yGateElement_construct.apply(null,arguments);}function yGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function yGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function yGateElement_setPrototypeOf(o,p){yGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return yGateElement_setPrototypeOf(o,p);}function yGateElement_getPrototypeOf(o){yGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return yGateElement_getPrototypeOf(o);}function yGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function yGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function yGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var yGateElement_verticalWires=html(yGateElement_templateObject||(yGateElement_templateObject=yGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var yIcon=html(yGateElement_templateObject2||(yGateElement_templateObject2=yGateElement_taggedTemplateLiteral(["<svg\n  id=\"icon\"\n  width=\"48\"\n  height=\"48\"\n  viewBox=\"0 0 48 48\"\n  fill=\"none\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n>\n  <path d=\"M17 13L24 24L31 13M24 24L24 35\" />\n</svg>"])));var yGateElement_YGateElement=controller(yGateElement_class=(yGateElement_class2=/*#__PURE__*/function(_HTMLElement){yGateElement_inherits(YGateElement,_HTMLElement);var _super=yGateElement_createSuper(YGateElement);function YGateElement(){var _this;yGateElement_classCallCheck(this,YGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));yGateElement_initializerDefineProperty(_this,"body",yGateElement_descriptor,yGateElement_assertThisInitialized(_this));yGateElement_initializerDefineProperty(_this,"disabled",yGateElement_descriptor2,yGateElement_assertThisInitialized(_this));yGateElement_initializerDefineProperty(_this,"wireTop",yGateElement_descriptor3,yGateElement_assertThisInitialized(_this));yGateElement_initializerDefineProperty(_this,"wireTopDisabled",yGateElement_descriptor4,yGateElement_assertThisInitialized(_this));yGateElement_initializerDefineProperty(_this,"wireBottom",yGateElement_descriptor5,yGateElement_assertThisInitialized(_this));yGateElement_initializerDefineProperty(_this,"wireBottomDisabled",yGateElement_descriptor6,yGateElement_assertThisInitialized(_this));return _this;}yGateElement_createClass(YGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-disabled"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("disabled");}else{this.body.classList.add("disabled");}}if(name==="data-wire-top"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireTopClassString);}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireBottomClassString);}}},{key:"update",value:function update(){render(html(yGateElement_templateObject3||(yGateElement_templateObject3=yGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            top: 0px;\n            height: 100%;\n            width: 100%;\n            border-radius: 0.25rem;\n            color: var(--colors-snow, #ffffff);\n            background-color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            background-color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\""," "," ","\"\n          data-target=\"y-gate.body\"\n        >\n          "," ","\n        </div>"])),this.disabledClassString,this.wireTopClassString,this.wireBottomClassString,yGateElement_verticalWires,yIcon),this.shadowRoot);}},{key:"disabledClassString",get:function get(){return this.disabled?"disabled":"";}},{key:"wireTopClassString",get:function get(){if(this.wireTop)return"wire-top";if(this.wireTopDisabled)return"wire-top-disabled";return"";}},{key:"wireBottomClassString",get:function get(){if(this.wireBottom)return"wire-bottom";if(this.wireBottomDisabled)return"wire-bottom-disabled";return"";}}]);return YGateElement;}(/*#__PURE__*/yGateElement_wrapNativeSuper(HTMLElement)),(yGateElement_descriptor=yGateElement_applyDecoratedDescriptor(yGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),yGateElement_descriptor2=yGateElement_applyDecoratedDescriptor(yGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),yGateElement_descriptor3=yGateElement_applyDecoratedDescriptor(yGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),yGateElement_descriptor4=yGateElement_applyDecoratedDescriptor(yGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),yGateElement_descriptor5=yGateElement_applyDecoratedDescriptor(yGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),yGateElement_descriptor6=yGateElement_applyDecoratedDescriptor(yGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),yGateElement_class2))||yGateElement_class;
// CONCATENATED MODULE: ./app/components/z_gate_component/zGateElement.ts
var zGateElement_templateObject,zGateElement_templateObject2,zGateElement_class,zGateElement_class2,zGateElement_descriptor,zGateElement_descriptor2,zGateElement_descriptor3,zGateElement_descriptor4,zGateElement_descriptor5,zGateElement_descriptor6,zGateElement_templateObject3;function zGateElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function zGateElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function zGateElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function zGateElement_createClass(Constructor,protoProps,staticProps){if(protoProps)zGateElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)zGateElement_defineProperties(Constructor,staticProps);return Constructor;}function zGateElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)zGateElement_setPrototypeOf(subClass,superClass);}function zGateElement_createSuper(Derived){var hasNativeReflectConstruct=zGateElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=zGateElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=zGateElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return zGateElement_possibleConstructorReturn(this,result);};}function zGateElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return zGateElement_assertThisInitialized(self);}function zGateElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function zGateElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;zGateElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!zGateElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return zGateElement_construct(Class,arguments,zGateElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return zGateElement_setPrototypeOf(Wrapper,Class);};return zGateElement_wrapNativeSuper(Class);}function zGateElement_construct(Parent,args,Class){if(zGateElement_isNativeReflectConstruct()){zGateElement_construct=Reflect.construct;}else{zGateElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)zGateElement_setPrototypeOf(instance,Class.prototype);return instance;};}return zGateElement_construct.apply(null,arguments);}function zGateElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function zGateElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function zGateElement_setPrototypeOf(o,p){zGateElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return zGateElement_setPrototypeOf(o,p);}function zGateElement_getPrototypeOf(o){zGateElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return zGateElement_getPrototypeOf(o);}function zGateElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function zGateElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function zGateElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var zGateElement_verticalWires=html(zGateElement_templateObject||(zGateElement_templateObject=zGateElement_taggedTemplateLiteral(["<svg\n  id=\"wires\"\n  width=\"100\"\n  height=\"100\"\n  viewBox=\"0 0 100 100\"\n  preserveAspectRatio=\"none\"\n>\n  <line\n    id=\"wire-top\"\n    x1=\"50\"\n    y1=\"0\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n  <line\n    id=\"wire-bottom\"\n    x1=\"50\"\n    y1=\"100\"\n    x2=\"50\"\n    y2=\"50\"\n    stroke-width=\"2\"\n    stroke=\"currentColor\"\n    vector-effect=\"non-scaling-stroke\"\n  ></line>\n</svg>"])));var zIcon=html(zGateElement_templateObject2||(zGateElement_templateObject2=zGateElement_taggedTemplateLiteral(["<svg\n  id=\"icon\"\n  width=\"48\"\n  height=\"48\"\n  viewBox=\"0 0 48 48\"\n  fill=\"none\"\n  stroke-width=\"2\"\n  stroke-linecap=\"round\"\n>\n  <path d=\"M17 13L31 13L17 35L31 35\" />\n</svg>"])));var zGateElement_ZGateElement=controller(zGateElement_class=(zGateElement_class2=/*#__PURE__*/function(_HTMLElement){zGateElement_inherits(ZGateElement,_HTMLElement);var _super=zGateElement_createSuper(ZGateElement);function ZGateElement(){var _this;zGateElement_classCallCheck(this,ZGateElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));zGateElement_initializerDefineProperty(_this,"body",zGateElement_descriptor,zGateElement_assertThisInitialized(_this));zGateElement_initializerDefineProperty(_this,"disabled",zGateElement_descriptor2,zGateElement_assertThisInitialized(_this));zGateElement_initializerDefineProperty(_this,"wireTop",zGateElement_descriptor3,zGateElement_assertThisInitialized(_this));zGateElement_initializerDefineProperty(_this,"wireTopDisabled",zGateElement_descriptor4,zGateElement_assertThisInitialized(_this));zGateElement_initializerDefineProperty(_this,"wireBottom",zGateElement_descriptor5,zGateElement_assertThisInitialized(_this));zGateElement_initializerDefineProperty(_this,"wireBottomDisabled",zGateElement_descriptor6,zGateElement_assertThisInitialized(_this));return _this;}zGateElement_createClass(ZGateElement,[{key:"disable",value:function disable(){this.disabled=true;}},{key:"enable",value:function enable(){this.disabled=false;}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"attributeChangedCallback",value:function attributeChangedCallback(name,oldValue,newValue){if(name==="data-disabled"&&oldValue!==newValue&&this.body){if(newValue===null){this.body.classList.remove("disabled");}else{this.body.classList.add("disabled");}}if(name==="data-wire-top"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireTopClassString);}if(name==="data-wire-bottom"&&oldValue!==newValue&&this.body){this.body.classList.add(this.wireBottomClassString);}}},{key:"update",value:function update(){render(html(zGateElement_templateObject3||(zGateElement_templateObject3=zGateElement_taggedTemplateLiteral(["<style>\n          #body {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n            position: relative;\n            height: 2rem;\n            width: 2rem;\n          }\n\n          #wires {\n            position: absolute;\n            bottom: -2px;\n            left: -2px;\n            right: -2px;\n            top: -2px;\n            height: calc(100% + 4px);\n            width: calc(100% + 4px);\n            overflow: visible;\n          }\n\n          #wire-top,\n          #wire-bottom {\n            stroke-width: 4;\n            display: none;\n          }\n\n          #body.wire-top #wire-top {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-top-disabled #wire-top {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: top;\n            transform: translateY(-25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom #wire-bottom {\n            display: block;\n            color: var(--colors-gate, #43c000);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #body.wire-bottom-disabled #wire-bottom {\n            display: block;\n            color: var(--colors-eel, #4b4b4b);\n            transform-origin: bottom;\n            transform: translateY(25%) scaleY(1.5);\n          }\n\n          #icon {\n            position: absolute;\n            bottom: 0px;\n            left: 0px;\n            right: 0px;\n            top: 0px;\n            height: 100%;\n            width: 100%;\n            border-radius: 0.25rem;\n            color: var(--colors-snow, #ffffff);\n            background-color: var(--colors-gate, #43c000);\n            stroke: currentColor;\n          }\n\n          #body.disabled #icon {\n            background-color: var(--colors-eel, #4b4b4b);\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\""," "," ","\"\n          data-target=\"z-gate.body\"\n        >\n          "," ","\n        </div>"])),this.disabledClassString,this.wireTopClassString,this.wireBottomClassString,zGateElement_verticalWires,zIcon),this.shadowRoot);}},{key:"disabledClassString",get:function get(){return this.disabled?"disabled":"";}},{key:"wireTopClassString",get:function get(){if(this.wireTop)return"wire-top";if(this.wireTopDisabled)return"wire-top-disabled";return"";}},{key:"wireBottomClassString",get:function get(){if(this.wireBottom)return"wire-bottom";if(this.wireBottomDisabled)return"wire-bottom-disabled";return"";}}]);return ZGateElement;}(/*#__PURE__*/zGateElement_wrapNativeSuper(HTMLElement)),(zGateElement_descriptor=zGateElement_applyDecoratedDescriptor(zGateElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),zGateElement_descriptor2=zGateElement_applyDecoratedDescriptor(zGateElement_class2.prototype,"disabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),zGateElement_descriptor3=zGateElement_applyDecoratedDescriptor(zGateElement_class2.prototype,"wireTop",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),zGateElement_descriptor4=zGateElement_applyDecoratedDescriptor(zGateElement_class2.prototype,"wireTopDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),zGateElement_descriptor5=zGateElement_applyDecoratedDescriptor(zGateElement_class2.prototype,"wireBottom",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}}),zGateElement_descriptor6=zGateElement_applyDecoratedDescriptor(zGateElement_class2.prototype,"wireBottomDisabled",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return false;}})),zGateElement_class2))||zGateElement_class;
// CONCATENATED MODULE: ./app/components/circle_notation_component/circleNotationElement.ts
var circleNotationElement_class,circleNotationElement_class2,circleNotationElement_descriptor,circleNotationElement_descriptor2,circleNotationElement_descriptor3,circleNotationElement_descriptor4,circleNotationElement_descriptor5,circleNotationElement_templateObject;function circleNotationElement_createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=circleNotationElement_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e2){throw _e2;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e3){didErr=true;err=_e3;},f:function f(){try{if(!normalCompletion&&it["return"]!=null)it["return"]();}finally{if(didErr)throw err;}}};}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||circleNotationElement_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function circleNotationElement_unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return circleNotationElement_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return circleNotationElement_arrayLikeToArray(o,minLen);}function circleNotationElement_arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr&&(typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"]);if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function circleNotationElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}function circleNotationElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function circleNotationElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function circleNotationElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function circleNotationElement_createClass(Constructor,protoProps,staticProps){if(protoProps)circleNotationElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)circleNotationElement_defineProperties(Constructor,staticProps);return Constructor;}function circleNotationElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)circleNotationElement_setPrototypeOf(subClass,superClass);}function circleNotationElement_createSuper(Derived){var hasNativeReflectConstruct=circleNotationElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=circleNotationElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=circleNotationElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return circleNotationElement_possibleConstructorReturn(this,result);};}function circleNotationElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return circleNotationElement_assertThisInitialized(self);}function circleNotationElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function circleNotationElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;circleNotationElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!circleNotationElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return circleNotationElement_construct(Class,arguments,circleNotationElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return circleNotationElement_setPrototypeOf(Wrapper,Class);};return circleNotationElement_wrapNativeSuper(Class);}function circleNotationElement_construct(Parent,args,Class){if(circleNotationElement_isNativeReflectConstruct()){circleNotationElement_construct=Reflect.construct;}else{circleNotationElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)circleNotationElement_setPrototypeOf(instance,Class.prototype);return instance;};}return circleNotationElement_construct.apply(null,arguments);}function circleNotationElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function circleNotationElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function circleNotationElement_setPrototypeOf(o,p){circleNotationElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return circleNotationElement_setPrototypeOf(o,p);}function circleNotationElement_getPrototypeOf(o){circleNotationElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return circleNotationElement_getPrototypeOf(o);}function circleNotationElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function circleNotationElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}var circleNotationElement_CircleNotationElement=controller(circleNotationElement_class=(circleNotationElement_class2=/*#__PURE__*/function(_HTMLElement){circleNotationElement_inherits(CircleNotationElement,_HTMLElement);var _super=circleNotationElement_createSuper(CircleNotationElement);function CircleNotationElement(){var _this;circleNotationElement_classCallCheck(this,CircleNotationElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));circleNotationElement_initializerDefineProperty(_this,"size",circleNotationElement_descriptor,circleNotationElement_assertThisInitialized(_this));circleNotationElement_initializerDefineProperty(_this,"magnitudes",circleNotationElement_descriptor2,circleNotationElement_assertThisInitialized(_this));circleNotationElement_initializerDefineProperty(_this,"phases",circleNotationElement_descriptor3,circleNotationElement_assertThisInitialized(_this));circleNotationElement_initializerDefineProperty(_this,"body",circleNotationElement_descriptor4,circleNotationElement_assertThisInitialized(_this));circleNotationElement_initializerDefineProperty(_this,"qubitCircles",circleNotationElement_descriptor5,circleNotationElement_assertThisInitialized(_this));return _this;}circleNotationElement_createClass(CircleNotationElement,[{key:"setMagnitude",value:function setMagnitude(qubitCircleIndex,magnitude){var magInt=Math.round(magnitude*100);var magRounded=magInt<10?magInt===0?0:10:Math.round(magInt/10)*10;this.qubitCircles[qubitCircleIndex].setAttribute("data-magnitude",magRounded.toString());}},{key:"setPhase",value:function setPhase(qubitCircleIndex,phase){var phaseRounded=Math.round(phase/10)*10;if(phaseRounded<0)phaseRounded=360+phaseRounded;this.qubitCircles[qubitCircleIndex].setAttribute("data-phase",phaseRounded.toString());}},{key:"connectedCallback",value:function connectedCallback(){try{this.attachShadow({mode:"open"});}catch(InvalidStateError){// NOP
}this.update();}},{key:"update",value:function update(){render(html(circleNotationElement_templateObject||(circleNotationElement_templateObject=circleNotationElement_taggedTemplateLiteral(["<style>\n          #body {\n            display: flex;\n            flex-direction: row;\n          }\n\n          .qubit-circle {\n            position: relative;\n            height: 32px;\n            width: 32px;\n          }\n\n          #body.size-xs .qubit-circle {\n            height: 17px;\n            width: 17px;\n          }\n\n          #body.size-sm .qubit-circle {\n            height: 25px;\n            width: 25px;\n          }\n\n          #body.size-base .qubit-circle {\n            height: 32px;\n            width: 32px;\n          }\n\n          #body.size-lg .qubit-circle {\n            height: 48px;\n            width: 48px;\n          }\n\n          #body.size-xl .qubit-circle {\n            height: 64px;\n            width: 64px;\n          }\n\n          .qubit-circle__magnitude {\n            position: absolute;\n            top: 1px;\n            right: 1px;\n            bottom: 1px;\n            left: 1px;\n            border-radius: 9999px;\n            border-color: #e5e5e5;\n            border-style: solid;\n          }\n\n          #body.size-xs .qubit-circle__magnitude,\n          #body.size-sm .qubit-circle__magnitude {\n            border-width: 1px;\n          }\n\n          #body.size-base .qubit-circle__magnitude,\n          #body.size-lg .qubit-circle__magnitude,\n          #body.size-xl .qubit-circle__magnitude {\n            border-width: 2px;\n          }\n\n          .qubit-circle__magnitude::after {\n            position: absolute;\n            top: 0px;\n            right: 0px;\n            bottom: 0px;\n            left: 0px;\n            border-radius: 9999px;\n            content: \"\";\n            background-color: #1cb0f6;\n            transform: scaleX(0) scaleY(0);\n            transform-origin: center;\n          }\n\n          .qubit-circle[data-magnitude=\"10\"] > .qubit-circle__magnitude::after {\n            transform: scaleX(0.1) scaleY(0.1);\n          }\n\n          .qubit-circle[data-magnitude=\"20\"] > .qubit-circle__magnitude::after {\n            transform: scaleX(0.2) scaleY(0.2);\n          }\n\n          .qubit-circle[data-magnitude=\"30\"] > .qubit-circle__magnitude::after {\n            transform: scaleX(0.3) scaleY(0.3);\n          }\n\n          .qubit-circle[data-magnitude=\"40\"] > .qubit-circle__magnitude::after {\n            transform: scaleX(0.4) scaleY(0.4);\n          }\n\n          .qubit-circle[data-magnitude=\"50\"] > .qubit-circle__magnitude::after {\n            transform: scaleX(0.5) scaleY(0.5);\n          }\n\n          .qubit-circle[data-magnitude=\"60\"] > .qubit-circle__magnitude::after {\n            transform: scaleX(0.6) scaleY(0.6);\n          }\n\n          .qubit-circle[data-magnitude=\"70\"] > .qubit-circle__magnitude::after {\n            transform: scaleX(0.7) scaleY(0.7);\n          }\n\n          .qubit-circle[data-magnitude=\"80\"] > .qubit-circle__magnitude::after {\n            transform: scaleX(0.8) scaleY(0.8);\n          }\n\n          .qubit-circle[data-magnitude=\"90\"] > .qubit-circle__magnitude::after {\n            transform: scaleX(0.9) scaleY(0.9);\n          }\n\n          .qubit-circle[data-magnitude=\"100\"]\n            > .qubit-circle__magnitude::after {\n            transform: scaleX(1) scaleY(1);\n          }\n\n          .qubit-circle__phase {\n            position: absolute;\n            top: 1px;\n            right: 1px;\n            bottom: 1px;\n            left: 1px;\n            border-radius: 9999px;\n            border-color: #777777;\n            border-style: solid;\n            transform: rotate(0deg);\n            transform-origin: center;\n          }\n\n          #body.size-xs .qubit-circle__phase,\n          #body.size-sm .qubit-circle__phase {\n            border-width: 1px;\n          }\n\n          #body.size-base .qubit-circle__phase,\n          #body.size-lg .qubit-circle__phase,\n          #body.size-xl .qubit-circle__phase {\n            border-width: 2px;\n          }\n\n          .qubit-circle:not([data-magnitude]) > .qubit-circle__phase,\n          .qubit-circle[data-magnitude=\"0\"] > .qubit-circle__phase {\n            transform: scaleX(0) scaleY(0);\n          }\n\n          .qubit-circle[data-phase=\"10\"] > .qubit-circle__phase {\n            transform: rotate(-10deg);\n          }\n\n          .qubit-circle[data-phase=\"20\"] > .qubit-circle__phase {\n            transform: rotate(-20deg);\n          }\n\n          .qubit-circle[data-phase=\"30\"] > .qubit-circle__phase {\n            transform: rotate(-30deg);\n          }\n\n          .qubit-circle[data-phase=\"40\"] > .qubit-circle__phase {\n            transform: rotate(-40deg);\n          }\n\n          .qubit-circle[data-phase=\"50\"] > .qubit-circle__phase {\n            transform: rotate(-50deg);\n          }\n\n          .qubit-circle[data-phase=\"60\"] > .qubit-circle__phase {\n            transform: rotate(-60deg);\n          }\n\n          .qubit-circle[data-phase=\"70\"] > .qubit-circle__phase {\n            transform: rotate(-70deg);\n          }\n\n          .qubit-circle[data-phase=\"80\"] > .qubit-circle__phase {\n            transform: rotate(-80deg);\n          }\n\n          .qubit-circle[data-phase=\"90\"] > .qubit-circle__phase {\n            transform: rotate(-90deg);\n          }\n\n          .qubit-circle[data-phase=\"100\"] > .qubit-circle__phase {\n            transform: rotate(-100deg);\n          }\n\n          .qubit-circle[data-phase=\"110\"] > .qubit-circle__phase {\n            transform: rotate(-110deg);\n          }\n\n          .qubit-circle[data-phase=\"120\"] > .qubit-circle__phase {\n            transform: rotate(-120deg);\n          }\n\n          .qubit-circle[data-phase=\"130\"] > .qubit-circle__phase {\n            transform: rotate(-130deg);\n          }\n\n          .qubit-circle[data-phase=\"140\"] > .qubit-circle__phase {\n            transform: rotate(-140deg);\n          }\n\n          .qubit-circle[data-phase=\"150\"] > .qubit-circle__phase {\n            transform: rotate(-150deg);\n          }\n\n          .qubit-circle[data-phase=\"160\"] > .qubit-circle__phase {\n            transform: rotate(-160deg);\n          }\n\n          .qubit-circle[data-phase=\"170\"] > .qubit-circle__phase {\n            transform: rotate(-170deg);\n          }\n\n          .qubit-circle[data-phase=\"180\"] > .qubit-circle__phase {\n            transform: rotate(-180deg);\n          }\n\n          .qubit-circle[data-phase=\"190\"] > .qubit-circle__phase {\n            transform: rotate(-190deg);\n          }\n\n          .qubit-circle[data-phase=\"200\"] > .qubit-circle__phase {\n            transform: rotate(-200deg);\n          }\n\n          .qubit-circle[data-phase=\"210\"] > .qubit-circle__phase {\n            transform: rotate(-210deg);\n          }\n\n          .qubit-circle[data-phase=\"220\"] > .qubit-circle__phase {\n            transform: rotate(-220deg);\n          }\n\n          .qubit-circle[data-phase=\"230\"] > .qubit-circle__phase {\n            transform: rotate(-230deg);\n          }\n\n          .qubit-circle[data-phase=\"240\"] > .qubit-circle__phase {\n            transform: rotate(-240deg);\n          }\n\n          .qubit-circle[data-phase=\"250\"] > .qubit-circle__phase {\n            transform: rotate(-250deg);\n          }\n\n          .qubit-circle[data-phase=\"260\"] > .qubit-circle__phase {\n            transform: rotate(-260deg);\n          }\n\n          .qubit-circle[data-phase=\"270\"] > .qubit-circle__phase {\n            transform: rotate(-270deg);\n          }\n\n          .qubit-circle[data-phase=\"280\"] > .qubit-circle__phase {\n            transform: rotate(-280deg);\n          }\n\n          .qubit-circle[data-phase=\"290\"] > .qubit-circle__phase {\n            transform: rotate(-290deg);\n          }\n\n          .qubit-circle[data-phase=\"300\"] > .qubit-circle__phase {\n            transform: rotate(-300deg);\n          }\n\n          .qubit-circle[data-phase=\"310\"] > .qubit-circle__phase {\n            transform: rotate(-310deg);\n          }\n\n          .qubit-circle[data-phase=\"320\"] > .qubit-circle__phase {\n            transform: rotate(-320deg);\n          }\n\n          .qubit-circle[data-phase=\"330\"] > .qubit-circle__phase {\n            transform: rotate(-330deg);\n          }\n\n          .qubit-circle[data-phase=\"340\"] > .qubit-circle__phase {\n            transform: rotate(-340deg);\n          }\n\n          .qubit-circle[data-phase=\"350\"] > .qubit-circle__phase {\n            transform: rotate(-350deg);\n          }\n\n          .qubit-circle[data-phase=\"360\"] > .qubit-circle__phase {\n            transform: rotate(-360deg);\n          }\n\n          .qubit-circle__phase::after {\n            position: absolute;\n            top: 0px;\n            right: 0px;\n            left: 0px;\n            background-color: #4b4b4b;\n            height: 50%;\n            margin-left: auto;\n            margin-right: auto;\n            border-bottom-right-radius: 0.25rem;\n            border-bottom-left-radius: 0.25rem;\n            content: \"\";\n          }\n\n          #body.size-xs .qubit-circle__phase::after,\n          #body.size-sm .qubit-circle__phase::after {\n            width: 1px;\n          }\n\n          #body.size-base .qubit-circle__phase::after,\n          #body.size-lg .qubit-circle__phase::after,\n          #body.size-xl .qubit-circle__phase::after {\n            width: 2px;\n          }\n        </style>\n\n        <div\n          id=\"body\"\n          class=\"","\"\n          data-target=\"circle-notation.body\"\n        >\n          <div class=\"qubit-circle\" data-targets=\"circle-notation.qubitCircles\">\n            <div class=\"qubit-circle__magnitude\"></div>\n            <div class=\"qubit-circle__phase\"></div>\n          </div>\n          <div class=\"qubit-circle\" data-targets=\"circle-notation.qubitCircles\">\n            <div class=\"qubit-circle__magnitude\"></div>\n            <div class=\"qubit-circle__phase\"></div>\n          </div>\n        </div>"])),this.classString),this.shadowRoot);var _iterator=circleNotationElement_createForOfIteratorHelper(this.magnitudes.split(",").entries()),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var _ref5=_step.value;var _ref2=_slicedToArray(_ref5,2);var i=_ref2[0];var each=_ref2[1];this.setMagnitude(i,parseFloat(each));}}catch(err){_iterator.e(err);}finally{_iterator.f();}var _iterator2=circleNotationElement_createForOfIteratorHelper(this.phases.split(",").entries()),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var _ref6=_step2.value;var _ref4=_slicedToArray(_ref6,2);var _i2=_ref4[0];var _each=_ref4[1];this.setPhase(_i2,parseFloat(_each));}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}}},{key:"classString",get:function get(){var klass=[];if(this.size==="xs")klass.push("size-xs");if(this.size==="sm")klass.push("size-sm");if(this.size==="base")klass.push("size-base");if(this.size==="lg")klass.push("size-lg");if(this.size==="xl")klass.push("size-xl");return klass.join(" ");}}]);return CircleNotationElement;}(/*#__PURE__*/circleNotationElement_wrapNativeSuper(HTMLElement)),(circleNotationElement_descriptor=circleNotationElement_applyDecoratedDescriptor(circleNotationElement_class2.prototype,"size",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"base";}}),circleNotationElement_descriptor2=circleNotationElement_applyDecoratedDescriptor(circleNotationElement_class2.prototype,"magnitudes",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"1.0";}}),circleNotationElement_descriptor3=circleNotationElement_applyDecoratedDescriptor(circleNotationElement_class2.prototype,"phases",[attr_attr],{configurable:true,enumerable:true,writable:true,initializer:function initializer(){return"";}}),circleNotationElement_descriptor4=circleNotationElement_applyDecoratedDescriptor(circleNotationElement_class2.prototype,"body",[target],{configurable:true,enumerable:true,writable:true,initializer:null}),circleNotationElement_descriptor5=circleNotationElement_applyDecoratedDescriptor(circleNotationElement_class2.prototype,"qubitCircles",[targets],{configurable:true,enumerable:true,writable:true,initializer:null})),circleNotationElement_class2))||circleNotationElement_class;
// CONCATENATED MODULE: ./app/components/run_circuit_button_component/runCircuitButtonElement.ts
var runCircuitButtonElement_templateObject,runCircuitButtonElement_templateObject2,runCircuitButtonElement_class,runCircuitButtonElement_class2,runCircuitButtonElement_descriptor,runCircuitButtonElement_templateObject3;function runCircuitButtonElement_initializerDefineProperty(target,property,descriptor,context){if(!descriptor)return;Object.defineProperty(target,property,{enumerable:descriptor.enumerable,configurable:descriptor.configurable,writable:descriptor.writable,value:descriptor.initializer?descriptor.initializer.call(context):void 0});}function runCircuitButtonElement_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function runCircuitButtonElement_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function runCircuitButtonElement_createClass(Constructor,protoProps,staticProps){if(protoProps)runCircuitButtonElement_defineProperties(Constructor.prototype,protoProps);if(staticProps)runCircuitButtonElement_defineProperties(Constructor,staticProps);return Constructor;}function runCircuitButtonElement_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)runCircuitButtonElement_setPrototypeOf(subClass,superClass);}function runCircuitButtonElement_createSuper(Derived){var hasNativeReflectConstruct=runCircuitButtonElement_isNativeReflectConstruct();return function _createSuperInternal(){var Super=runCircuitButtonElement_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=runCircuitButtonElement_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return runCircuitButtonElement_possibleConstructorReturn(this,result);};}function runCircuitButtonElement_possibleConstructorReturn(self,call){if(call&&(typeof call==="object"||typeof call==="function")){return call;}return runCircuitButtonElement_assertThisInitialized(self);}function runCircuitButtonElement_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function runCircuitButtonElement_wrapNativeSuper(Class){var _cache=typeof Map==="function"?new Map():undefined;runCircuitButtonElement_wrapNativeSuper=function _wrapNativeSuper(Class){if(Class===null||!runCircuitButtonElement_isNativeFunction(Class))return Class;if(typeof Class!=="function"){throw new TypeError("Super expression must either be null or a function");}if(typeof _cache!=="undefined"){if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);}function Wrapper(){return runCircuitButtonElement_construct(Class,arguments,runCircuitButtonElement_getPrototypeOf(this).constructor);}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return runCircuitButtonElement_setPrototypeOf(Wrapper,Class);};return runCircuitButtonElement_wrapNativeSuper(Class);}function runCircuitButtonElement_construct(Parent,args,Class){if(runCircuitButtonElement_isNativeReflectConstruct()){runCircuitButtonElement_construct=Reflect.construct;}else{runCircuitButtonElement_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)runCircuitButtonElement_setPrototypeOf(instance,Class.prototype);return instance;};}return runCircuitButtonElement_construct.apply(null,arguments);}function runCircuitButtonElement_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function runCircuitButtonElement_isNativeFunction(fn){return Function.toString.call(fn).indexOf("[native code]")!==-1;}function runCircuitButtonElement_setPrototypeOf(o,p){runCircuitButtonElement_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return runCircuitButtonElement_setPrototypeOf(o,p);}function runCircuitButtonElement_getPrototypeOf(o){runCircuitButtonElement_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return runCircuitButtonElement_getPrototypeOf(o);}function runCircuitButtonElement_applyDecoratedDescriptor(target,property,decorators,descriptor,context){var desc={};Object.keys(descriptor).forEach(function(key){desc[key]=descriptor[key];});desc.enumerable=!!desc.enumerable;desc.configurable=!!desc.configurable;if('value'in desc||desc.initializer){desc.writable=true;}desc=decorators.slice().reverse().reduce(function(desc,decorator){return decorator(target,property,desc)||desc;},desc);if(context&&desc.initializer!==void 0){desc.value=desc.initializer?desc.initializer.call(context):void 0;desc.initializer=undefined;}if(desc.initializer===void 0){Object.defineProperty(target,property,desc);desc=null;}return desc;}function runCircuitButtonElement_initializerWarningHelper(descriptor,context){throw new Error('Decorating class property failed. Please ensure that '+'proposal-class-properties is enabled and runs after the decorators transform.');}function runCircuitButtonElement_taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var reloadIcon=html(runCircuitButtonElement_templateObject||(runCircuitButtonElement_templateObject=runCircuitButtonElement_taggedTemplateLiteral(["<style>\n    .reload-icon {\n      fill: currentColor;\n      color: rgb(255, 255, 255);\n      height: 60%;\n      width: 60%;\n    }\n\n    #button:disabled > .reload-icon {\n      display: none;\n    }\n  </style>\n\n  <svg\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 20 20\"\n    class=\"reload-icon\"\n  >\n    <path\n      d=\"M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z\"\n    />\n  </svg>"])));var ovalLoaderIcon=html(runCircuitButtonElement_templateObject2||(runCircuitButtonElement_templateObject2=runCircuitButtonElement_taggedTemplateLiteral(["<style>\n    .oval-loader-icon {\n      display: none;\n      height: 60%;\n      width: 60%;\n    }\n\n    #button:disabled > .oval-loader-icon {\n      stroke: currentColor;\n      color: rgb(255, 255, 255);\n      display: block;\n    }\n  </style>\n\n  <svg\n    viewBox=\"0 0 38 38\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    class=\"oval-loader-icon\"\n  >\n    <g fill=\"none\" fill-rule=\"evenodd\">\n      <g transform=\"translate(1 1)\" stroke-width=\"2\">\n        <circle stroke-opacity=\".5\" cx=\"18\" cy=\"18\" r=\"18\" />\n        <path d=\"M36 18c0-9.94-8.06-18-18-18\">\n          <animateTransform\n            attributeName=\"transform\"\n            type=\"rotate\"\n            from=\"0 18 18\"\n            to=\"360 18 18\"\n            dur=\"1s\"\n            repeatCount=\"indefinite\"\n          />\n        </path>\n      </g>\n    </g>\n  </svg>"])));var runCircuitButtonElement_RunCircuitButtonElement=controller(runCircuitButtonElement_class=(runCircuitButtonElement_class2=/*#__PURE__*/function(_HTMLElement){runCircuitButtonElement_inherits(RunCircuitButtonElement,_HTMLElement);var _super=runCircuitButtonElement_createSuper(RunCircuitButtonElement);function RunCircuitButtonElement(){var _this;runCircuitButtonElement_classCallCheck(this,RunCircuitButtonElement);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));runCircuitButtonElement_initializerDefineProperty(_this,"button",runCircuitButtonElement_descriptor,runCircuitButtonElement_assertThisInitialized(_this));return _this;}runCircuitButtonElement_createClass(RunCircuitButtonElement,[{key:"runSimulator",value:function runSimulator(){var _this$simulator;(_this$simulator=this.simulator)===null||_this$simulator===void 0?void 0:_this$simulator.dispatchEvent(new CustomEvent("run",{bubbles:false}));this.disable();}},{key:"disable",value:function disable(){this.button.disabled=true;}},{key:"enable",value:function enable(){this.button.disabled=false;}},{key:"connectedCallback",value:function connectedCallback(){this.attachShadow({mode:"open"});this.update();}},{key:"update",value:function update(){render(html(runCircuitButtonElement_templateObject3||(runCircuitButtonElement_templateObject3=runCircuitButtonElement_taggedTemplateLiteral(["<style>\n          #button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background-color: rgb(206, 130, 255);\n            border-radius: 9999px;\n            border-width: 0px;\n            cursor: pointer;\n            width: 4rem;\n            height: 4rem;\n            box-shadow: 0 0 #0000, 0 0 #0000,\n              0 10px 15px -3px rgba(0, 0, 0, 0.1),\n              0 4px 6px -2px rgba(0, 0, 0, 0.05);\n          }\n\n          #button:disabled {\n            cursor: wait;\n          }\n\n          #button:focus {\n            outline: 2px solid transparent;\n            outline-offset: 2px;\n          }\n        </style>\n\n        <button\n          id=\"button\"\n          type=\"button\"\n          data-action=\"click:run-circuit-button#runSimulator\"\n          data-target=\"run-circuit-button.button\"\n          aria-label=\"Run circuit\"\n        >\n          "," ","\n        </button>"])),reloadIcon,ovalLoaderIcon),this.shadowRoot);}},{key:"simulator",get:function get(){return document.getElementById("simulator");}}]);return RunCircuitButtonElement;}(/*#__PURE__*/runCircuitButtonElement_wrapNativeSuper(HTMLElement)),(runCircuitButtonElement_descriptor=runCircuitButtonElement_applyDecoratedDescriptor(runCircuitButtonElement_class2.prototype,"button",[target],{configurable:true,enumerable:true,writable:true,initializer:null})),runCircuitButtonElement_class2))||runCircuitButtonElement_class;
// CONCATENATED MODULE: ./app/javascript/catalyst/index.js


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createSingleton; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ ROUND_ARROW; });

// UNUSED EXPORTS: animateFill, delegate, followCursor, hideAll, inlinePositioning, sticky

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js






 // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var enums_clippingParents = 'clippingParents';
var viewport = 'viewport';
var enums_popper = 'popper';
var enums_reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper_createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets_popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets_popperOffsets,
  data: {}
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js






 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums_top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function applyStyles_effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: applyStyles_effect,
  requires: ['computeStyles']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js


function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset_offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset_offset
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js



function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? enums_clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? enums_popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === enums_popper ? enums_reference : enums_popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === enums_popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === enums_popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? enums_top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? math_min(_min, tetherMin) : _min, _offset, tether ? math_max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var arrow_toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow_arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = arrow_toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow_arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide_hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide_hide
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var popper_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: popper_defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ./node_modules/tippy.js/dist/tippy.esm.js
/**!
* tippy.js v6.3.1
* (c) 2017-2021 atomiks
* MIT License
*/

var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};

function tippy_esm_hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}

function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}

function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}

function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}

function tippy_esm_debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}

function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}

function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}

function normalizeToArray(value) {
  return [].concat(value);
}

function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}

function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}

function tippy_esm_getBasePlacement(placement) {
  return placement.split('-')[0];
}

function arrayFrom(value) {
  return [].slice.call(value);
}

function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

function div() {
  return document.createElement('div');
}

function tippy_esm_isElement(value) {
  return ['Element', 'Fragment'].some(function (type) {
    return isType(value, type);
  });
}

function isNodeList(value) {
  return isType(value, 'NodeList');
}

function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}

function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}

function getArrayOfElements(value) {
  if (tippy_esm_isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}

function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}

function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}

function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;

  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


  return (element == null ? void 0 : (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body) ? element.ownerDocument : document;
}

function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = tippy_esm_getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;

    if (!offsetData) {
      return true;
    }

    var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
    var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}

function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
  // `webkitTransitionEnd`...

  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
    box[method](event, listener);
  });
}

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */


function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */


function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}

function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser ? navigator.userAgent : '';
var tippy_esm_isIE = /MSIE |Trident\//.test(ua);

function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
}

function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
} // Assume warnings and errors never have the same message


var visitedMessages;

if (false) {}

function resetVisitedMessages() {
  visitedMessages = new Set();
}

function warnWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console;

    visitedMessages.add(message);

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}

function errorWhen(condition, message) {
  if (condition && !visitedMessages.has(message)) {
    var _console2;

    visitedMessages.add(message);

    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}

function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
  errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
}

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: 'fade',
  arrow: true,
  content: '',
  inertia: false,
  maxWidth: 350,
  role: 'tooltip',
  theme: '',
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: function appendTo() {
    return document.body;
  },
  aria: {
    content: 'auto',
    expanded: 'auto'
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: '',
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  onClickOutside: function onClickOutside() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null
}, pluginProps, {}, renderProps);
var defaultKeys = Object.keys(defaultProps);

var setDefaultProps = function setDefaultProps(partialProps) {
  /* istanbul ignore else */
  if (false) {}

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};

function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      acc[name] = passedProps[name] !== undefined ? passedProps[name] : defaultValue;
    }

    return acc;
  }, {});
  return Object.assign({}, passedProps, {}, pluginProps);
}

function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}

function evaluateProps(reference, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, {}, out.aria);
  out.aria = {
    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
  };
  return out;
}

function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
    var didPassUnknownProp = !tippy_esm_hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`

    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }

    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
  });
}

var innerHTML = function innerHTML() {
  return 'innerHTML';
};

function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}

function createArrowElement(value) {
  var arrow = div();

  if (value === true) {
    arrow.className = ARROW_CLASS;
  } else {
    arrow.className = SVG_ARROW_CLASS;

    if (tippy_esm_isElement(value)) {
      arrow.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow, value);
    }
  }

  return arrow;
}

function tippy_esm_setContent(content, props) {
  if (tippy_esm_isElement(props.content)) {
    dangerouslySetInnerHTML(content, '');
    content.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}

function getChildren(popper) {
  var box = popper.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box: box,
    content: boxChildren.find(function (node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function (node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function (node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}

function render(instance) {
  var popper = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute('data-state', 'hidden');
  box.setAttribute('tabindex', '-1');
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');
  tippy_esm_setContent(content, instance.props);
  popper.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);

  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;

    if (nextProps.theme) {
      box.setAttribute('data-theme', nextProps.theme);
    } else {
      box.removeAttribute('data-theme');
    }

    if (typeof nextProps.animation === 'string') {
      box.setAttribute('data-animation', nextProps.animation);
    } else {
      box.removeAttribute('data-animation');
    }

    if (nextProps.inertia) {
      box.setAttribute('data-inertia', '');
    } else {
      box.removeAttribute('data-inertia');
    }

    box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

    if (nextProps.role) {
      box.setAttribute('role', nextProps.role);
    } else {
      box.removeAttribute('role');
    }

    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      tippy_esm_setContent(content, instance.props);
    }

    if (nextProps.arrow) {
      if (!arrow) {
        box.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box.removeChild(arrow);
        box.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow) {
      box.removeChild(arrow);
    }
  }

  return {
    popper: popper,
    onUpdate: onUpdate
  };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away


render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`

var mountedInstances = [];

function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, Object.assign({}, defaultProps, {}, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
  // 🔒 Private members
  // ===========================================================================

  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget; // ===========================================================================
  // 🔑 Public members
  // ===========================================================================

  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: div(),
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    hideWithInteractivity: hideWithInteractivity,
    enable: enable,
    disable: disable,
    unmount: unmount,
    destroy: destroy
  }; // TODO: Investigate why this early return causes a TDZ error in the tests —
  // it doesn't seem to happen in the browser

  /* istanbul ignore if */

  if (!props.render) {
    if (false) {}

    return instance;
  } // ===========================================================================
  // Initial mutations
  // ===========================================================================


  var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;

  popper.setAttribute('data-tippy-root', '');
  popper.id = "tippy-" + instance.id;
  instance.popper = popper;
  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference.hasAttribute('aria-expanded');
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function (event) {
    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }
  });
  return instance; // ===========================================================================
  // 🔒 Private methods
  // ===========================================================================

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getIsDefaultRenderFn() {
    var _instance$props$rende; // @ts-ignore


    return !!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }

  function getDefaultTemplateChildren() {
    return getChildren(popper);
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function handleStyles() {
    popper.style.pointerEvents = instance.props.interactive && instance.state.isVisible ? '' : 'none';
    popper.style.zIndex = "" + instance.props.zIndex;
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(void 0, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaContentAttribute() {
    var aria = instance.props.aria;

    if (!aria.content) {
      return;
    }

    var attr = "aria-" + aria.content;
    var id = popper.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentPress(event) {
    // Moved finger to scroll instead of an intentional tap outside
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === 'mousedown') {
        return;
      }
    } // Clicked on interactive popper


    if (instance.props.interactive && popper.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getCurrentTarget().contains(event.target)) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
        return;
      }
    } else {
      invokeHook('onClickOutside', [instance, event]);
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }

  function onTouchMove() {
    didTouchMove = true;
  }

  function onTouchStart() {
    didTouchMove = false;
  }

  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener('mousedown', onDocumentPress, true);
    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener('mousedown', onDocumentPress, true);
    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;

    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(box, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, {
        passive: true
      });
      on('touchend', onMouseLeave, {
        passive: true
      });
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(tippy_esm_isIE ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;

        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }

  function removeListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var _lastTriggerEvent;

    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
      var _instance$popperInsta;

      var instance = popper._tippy;
      var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

      if (state) {
        return {
          popperRect: popper.getBoundingClientRect(),
          popperState: state,
          props: props
        };
      }

      return null;
    }).filter(Boolean);

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

    if (shouldBail) {
      return;
    }

    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }

    scheduleHide(event);
  }

  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
  }

  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference;
    var tippyModifier = {
      name: '$$tippy',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;

          ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
            if (attr === 'placement') {
              box.setAttribute('data-placement', state.placement);
            } else {
              if (state.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, '');
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: 'flip',
      options: {
        padding: 5
      }
    }, {
      name: 'computeStyles',
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];

    if (getIsDefaultRenderFn() && arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrow,
          padding: 3
        }
      });
    }

    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = popper_createPopper(computedReference, popper, Object.assign({}, popperOptions, {
      placement: placement,
      onFirstUpdate: onFirstUpdate,
      modifiers: modifiers
    }));
  }

  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }

  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === defaultProps.appendTo || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    createPopperInstance();
    /* istanbul ignore else */

    if (false) {}
  }

  function getNestedPopperTree() {
    return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentPress();
    var delay = getDelay(true);

    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];

    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
      delay = touchDelay;
    }

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    } // For interactive tippies, scheduleHide is added to a document.body handler
    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
    // events when trigger contains mouseenter and click, and the tip is
    // currently shown as a result of a click.


    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  } // ===========================================================================
  // 🔑 Public methods
  // ===========================================================================


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    /* istanbul ignore else */
    if (false) {}

    if (instance.state.isDestroyed) {
      return;
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, Object.assign({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = tippy_esm_debounce(onMouseMove, nextProps.interactiveDebounce);
    } // Ensure stale aria-expanded attributes are removed


    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();
    handleStyles();

    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }

    if (instance.popperInstance) {
      createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
      // and the nested ones get re-rendered first.
      // https://github.com/atomiks/tippyjs-react/issues/177
      // TODO: find a cleaner / more efficient solution(!)

      getNestedPopperTree().forEach(function (nestedPopper) {
        // React (and other UI libs likely) requires a rAF wrapper as it flushes
        // its work in one
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show() {
    /* istanbul ignore else */
    if (false) {} // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    instance.state.isVisible = true;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'visible';
    }

    handleStyles();
    addDocumentPress();

    if (!instance.state.isMounted) {
      popper.style.transition = 'none';
    } // If flipping to the opposite side after hiding at least once, the
    // animation will use the wrong placement without resetting the duration


    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;

      setTransitionDuration([box, content], 0);
    }

    onFirstUpdate = function onFirstUpdate() {
      var _instance$popperInsta2;

      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }

      ignoreOnFirstUpdate = true; // reflow

      void popper.offsetHeight;
      popper.style.transition = instance.props.moveTransition;

      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;

        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], 'visible');
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
      // popper has been positioned for the first time

      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      instance.state.isMounted = true;
      invokeHook('onMount', [instance]);

      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      }
    };

    mount();
  }

  function hide() {
    /* istanbul ignore else */
    if (false) {} // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false) {
      return;
    }

    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'hidden';
    }

    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles();

    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;

      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], 'hidden');
      }
    }

    handleAriaContentAttribute();
    handleAriaExpandedAttribute();

    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }

  function hideWithInteractivity(event) {
    /* istanbul ignore else */
    if (false) {}

    getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }

  function unmount() {
    /* istanbul ignore else */
    if (false) {}

    if (instance.state.isVisible) {
      instance.hide();
    }

    if (!instance.state.isMounted) {
      return;
    }

    destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
    // tree by default. This seems mainly for interactive tippies, but we should
    // find a workaround if possible

    getNestedPopperTree().forEach(function (nestedPopper) {
      nestedPopper._tippy.unmount();
    });

    if (popper.parentNode) {
      popper.parentNode.removeChild(popper);
    }

    mountedInstances = mountedInstances.filter(function (i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook('onHidden', [instance]);
  }

  function destroy() {
    /* istanbul ignore else */
    if (false) {}

    if (instance.state.isDestroyed) {
      return;
    }

    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference._tippy;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  /* istanbul ignore else */

  if (false) {}

  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins: plugins
  });
  var elements = getArrayOfElements(targets);
  /* istanbul ignore else */

  if (false) { var isMoreThanOneReferenceElement, isSingleContentElement; }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return tippy_esm_isElement(targets) ? instances[0] : instances;
}

tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;

var hideAll = function hideAll(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;

  mountedInstances.forEach(function (instance) {
    var isExcluded = false;

    if (excludedReferenceOrInstance) {
      isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
    }

    if (!isExcluded) {
      var originalDuration = instance.props.duration;
      instance.setProps({
        duration: duration
      });
      instance.hide();

      if (!instance.state.isDestroyed) {
        instance.setProps({
          duration: originalDuration
        });
      }
    }
  });
}; // every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.


var applyStylesModifier = Object.assign({}, modifiers_applyStyles, {
  effect: function effect(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    } // intentionally return no cleanup function
    // return () => { ... }

  }
});

var createSingleton = function createSingleton(tippyInstances, optionalProps) {
  var _optionalProps$popper;

  if (optionalProps === void 0) {
    optionalProps = {};
  }
  /* istanbul ignore else */


  if (false) {}

  var individualInstances = tippyInstances;
  var references = [];
  var currentTarget;
  var overrides = optionalProps.overrides;
  var interceptSetPropsCleanups = [];
  var shownOnCreate = false;

  function setReferences() {
    references = individualInstances.map(function (instance) {
      return instance.reference;
    });
  }

  function enableInstances(isEnabled) {
    individualInstances.forEach(function (instance) {
      if (isEnabled) {
        instance.enable();
      } else {
        instance.disable();
      }
    });
  }

  function interceptSetProps(singleton) {
    return individualInstances.map(function (instance) {
      var originalSetProps = instance.setProps;

      instance.setProps = function (props) {
        originalSetProps(props);

        if (instance.reference === currentTarget) {
          singleton.setProps(props);
        }
      };

      return function () {
        instance.setProps = originalSetProps;
      };
    });
  } // have to pass singleton, as it maybe undefined on first call


  function prepareInstance(singleton, target) {
    var index = references.indexOf(target); // bail-out

    if (target === currentTarget) {
      return;
    }

    currentTarget = target;
    var overrideProps = (overrides || []).concat('content').reduce(function (acc, prop) {
      acc[prop] = individualInstances[index].props[prop];
      return acc;
    }, {});
    singleton.setProps(Object.assign({}, overrideProps, {
      getReferenceClientRect: typeof overrideProps.getReferenceClientRect === 'function' ? overrideProps.getReferenceClientRect : function () {
        return target.getBoundingClientRect();
      }
    }));
  }

  enableInstances(false);
  setReferences();
  var plugin = {
    fn: function fn() {
      return {
        onDestroy: function onDestroy() {
          enableInstances(true);
        },
        onHidden: function onHidden() {
          currentTarget = null;
        },
        onClickOutside: function onClickOutside(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            currentTarget = null;
          }
        },
        onShow: function onShow(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            prepareInstance(instance, references[0]);
          }
        },
        onTrigger: function onTrigger(instance, event) {
          prepareInstance(instance, event.currentTarget);
        }
      };
    }
  };
  var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, ['overrides']), {
    plugins: [plugin].concat(optionalProps.plugins || []),
    triggerTarget: references,
    popperOptions: Object.assign({}, optionalProps.popperOptions, {
      modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [applyStylesModifier])
    })
  }));
  var originalShow = singleton.show;

  singleton.show = function (target) {
    originalShow(); // first time, showOnCreate or programmatic call with no params
    // default to showing first instance

    if (!currentTarget && target == null) {
      return prepareInstance(singleton, references[0]);
    } // triggered from event (do nothing as prepareInstance already called by onTrigger)
    // programmatic call with no params when already visible (do nothing again)


    if (currentTarget && target == null) {
      return;
    } // target is index of instance


    if (typeof target === 'number') {
      return references[target] && prepareInstance(singleton, references[target]);
    } // target is a child tippy instance


    if (individualInstances.includes(target)) {
      var ref = target.reference;
      return prepareInstance(singleton, ref);
    } // target is a ReferenceElement


    if (references.includes(target)) {
      return prepareInstance(singleton, target);
    }
  };

  singleton.showNext = function () {
    var first = references[0];

    if (!currentTarget) {
      return singleton.show(0);
    }

    var index = references.indexOf(currentTarget);
    singleton.show(references[index + 1] || first);
  };

  singleton.showPrevious = function () {
    var last = references[references.length - 1];

    if (!currentTarget) {
      return singleton.show(last);
    }

    var index = references.indexOf(currentTarget);
    var target = references[index - 1] || last;
    singleton.show(target);
  };

  var originalSetProps = singleton.setProps;

  singleton.setProps = function (props) {
    overrides = props.overrides || overrides;
    originalSetProps(props);
  };

  singleton.setInstances = function (nextInstances) {
    enableInstances(true);
    interceptSetPropsCleanups.forEach(function (fn) {
      return fn();
    });
    individualInstances = nextInstances;
    enableInstances(false);
    setReferences();
    interceptSetProps(singleton);
    singleton.setProps({
      triggerTarget: references
    });
  };

  interceptSetPropsCleanups = interceptSetProps(singleton);
  return singleton;
};

var BUBBLING_EVENTS_MAP = {
  mouseover: 'mouseenter',
  focusin: 'focus',
  click: 'click'
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */

function delegate(targets, props) {
  /* istanbul ignore else */
  if (false) {}

  var listeners = [];
  var childTippyInstances = [];
  var disabled = false;
  var target = props.target;
  var nativeProps = removeProperties(props, ['target']);
  var parentProps = Object.assign({}, nativeProps, {
    trigger: 'manual',
    touch: false
  });
  var childProps = Object.assign({}, nativeProps, {
    showOnCreate: true
  });
  var returnValue = tippy(targets, parentProps);
  var normalizedReturnValue = normalizeToArray(returnValue);

  function onTrigger(event) {
    if (!event.target || disabled) {
      return;
    }

    var targetNode = event.target.closest(target);

    if (!targetNode) {
      return;
    } // Get relevant trigger with fallbacks:
    // 1. Check `data-tippy-trigger` attribute on target node
    // 2. Fallback to `trigger` passed to `delegate()`
    // 3. Fallback to `defaultProps.trigger`


    var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || defaultProps.trigger; // @ts-ignore

    if (targetNode._tippy) {
      return;
    }

    if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') {
      return;
    }

    if (event.type !== 'touchstart' && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) {
      return;
    }

    var instance = tippy(targetNode, childProps);

    if (instance) {
      childTippyInstances = childTippyInstances.concat(instance);
    }
  }

  function on(node, eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    node.addEventListener(eventType, handler, options);
    listeners.push({
      node: node,
      eventType: eventType,
      handler: handler,
      options: options
    });
  }

  function addEventListeners(instance) {
    var reference = instance.reference;
    on(reference, 'touchstart', onTrigger, TOUCH_OPTIONS);
    on(reference, 'mouseover', onTrigger);
    on(reference, 'focusin', onTrigger);
    on(reference, 'click', onTrigger);
  }

  function removeEventListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function applyMutations(instance) {
    var originalDestroy = instance.destroy;
    var originalEnable = instance.enable;
    var originalDisable = instance.disable;

    instance.destroy = function (shouldDestroyChildInstances) {
      if (shouldDestroyChildInstances === void 0) {
        shouldDestroyChildInstances = true;
      }

      if (shouldDestroyChildInstances) {
        childTippyInstances.forEach(function (instance) {
          instance.destroy();
        });
      }

      childTippyInstances = [];
      removeEventListeners();
      originalDestroy();
    };

    instance.enable = function () {
      originalEnable();
      childTippyInstances.forEach(function (instance) {
        return instance.enable();
      });
      disabled = false;
    };

    instance.disable = function () {
      originalDisable();
      childTippyInstances.forEach(function (instance) {
        return instance.disable();
      });
      disabled = true;
    };

    addEventListeners(instance);
  }

  normalizedReturnValue.forEach(applyMutations);
  return returnValue;
}

var animateFill = {
  name: 'animateFill',
  defaultValue: false,
  fn: function fn(instance) {
    var _instance$props$rende; // @ts-ignore


    if (!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy)) {
      if (false) {}

      return {};
    }

    var _getChildren = getChildren(instance.popper),
        box = _getChildren.box,
        content = _getChildren.content;

    var backdrop = instance.props.animateFill ? createBackdropElement() : null;
    return {
      onCreate: function onCreate() {
        if (backdrop) {
          box.insertBefore(backdrop, box.firstElementChild);
          box.setAttribute('data-animatefill', '');
          box.style.overflow = 'hidden';
          instance.setProps({
            arrow: false,
            animation: 'shift-away'
          });
        }
      },
      onMount: function onMount() {
        if (backdrop) {
          var transitionDuration = box.style.transitionDuration;
          var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
          // tooltip element. `clip-path` is the other alternative but is not
          // well-supported and is buggy on some devices.

          content.style.transitionDelay = Math.round(duration / 10) + "ms";
          backdrop.style.transitionDuration = transitionDuration;
          setVisibilityState([backdrop], 'visible');
        }
      },
      onShow: function onShow() {
        if (backdrop) {
          backdrop.style.transitionDuration = '0ms';
        }
      },
      onHide: function onHide() {
        if (backdrop) {
          setVisibilityState([backdrop], 'hidden');
        }
      }
    };
  }
};

function createBackdropElement() {
  var backdrop = div();
  backdrop.className = BACKDROP_CLASS;
  setVisibilityState([backdrop], 'hidden');
  return backdrop;
}

var mouseCoords = {
  clientX: 0,
  clientY: 0
};
var activeInstances = [];

function storeMouseCoords(_ref) {
  var clientX = _ref.clientX,
      clientY = _ref.clientY;
  mouseCoords = {
    clientX: clientX,
    clientY: clientY
  };
}

function addMouseCoordsListener(doc) {
  doc.addEventListener('mousemove', storeMouseCoords);
}

function removeMouseCoordsListener(doc) {
  doc.removeEventListener('mousemove', storeMouseCoords);
}

var followCursor = {
  name: 'followCursor',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference;
    var doc = getOwnerDocument(instance.props.triggerTarget || reference);
    var isInternalUpdate = false;
    var wasFocusEvent = false;
    var isUnmounted = true;
    var prevProps = instance.props;

    function getIsInitialBehavior() {
      return instance.props.followCursor === 'initial' && instance.state.isVisible;
    }

    function addListener() {
      doc.addEventListener('mousemove', onMouseMove);
    }

    function removeListener() {
      doc.removeEventListener('mousemove', onMouseMove);
    }

    function unsetGetReferenceClientRect() {
      isInternalUpdate = true;
      instance.setProps({
        getReferenceClientRect: null
      });
      isInternalUpdate = false;
    }

    function onMouseMove(event) {
      // If the instance is interactive, avoid updating the position unless it's
      // over the reference element
      var isCursorOverReference = event.target ? reference.contains(event.target) : true;
      var followCursor = instance.props.followCursor;
      var clientX = event.clientX,
          clientY = event.clientY;
      var rect = reference.getBoundingClientRect();
      var relativeX = clientX - rect.left;
      var relativeY = clientY - rect.top;

      if (isCursorOverReference || !instance.props.interactive) {
        instance.setProps({
          getReferenceClientRect: function getReferenceClientRect() {
            var rect = reference.getBoundingClientRect();
            var x = clientX;
            var y = clientY;

            if (followCursor === 'initial') {
              x = rect.left + relativeX;
              y = rect.top + relativeY;
            }

            var top = followCursor === 'horizontal' ? rect.top : y;
            var right = followCursor === 'vertical' ? rect.right : x;
            var bottom = followCursor === 'horizontal' ? rect.bottom : y;
            var left = followCursor === 'vertical' ? rect.left : x;
            return {
              width: right - left,
              height: bottom - top,
              top: top,
              right: right,
              bottom: bottom,
              left: left
            };
          }
        });
      }
    }

    function create() {
      if (instance.props.followCursor) {
        activeInstances.push({
          instance: instance,
          doc: doc
        });
        addMouseCoordsListener(doc);
      }
    }

    function destroy() {
      activeInstances = activeInstances.filter(function (data) {
        return data.instance !== instance;
      });

      if (activeInstances.filter(function (data) {
        return data.doc === doc;
      }).length === 0) {
        removeMouseCoordsListener(doc);
      }
    }

    return {
      onCreate: create,
      onDestroy: destroy,
      onBeforeUpdate: function onBeforeUpdate() {
        prevProps = instance.props;
      },
      onAfterUpdate: function onAfterUpdate(_, _ref2) {
        var followCursor = _ref2.followCursor;

        if (isInternalUpdate) {
          return;
        }

        if (followCursor !== undefined && prevProps.followCursor !== followCursor) {
          destroy();

          if (followCursor) {
            create();

            if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) {
              addListener();
            }
          } else {
            removeListener();
            unsetGetReferenceClientRect();
          }
        }
      },
      onMount: function onMount() {
        if (instance.props.followCursor && !wasFocusEvent) {
          if (isUnmounted) {
            onMouseMove(mouseCoords);
            isUnmounted = false;
          }

          if (!getIsInitialBehavior()) {
            addListener();
          }
        }
      },
      onTrigger: function onTrigger(_, event) {
        if (isMouseEvent(event)) {
          mouseCoords = {
            clientX: event.clientX,
            clientY: event.clientY
          };
        }

        wasFocusEvent = event.type === 'focus';
      },
      onHidden: function onHidden() {
        if (instance.props.followCursor) {
          unsetGetReferenceClientRect();
          removeListener();
          isUnmounted = true;
        }
      }
    };
  }
};

function getProps(props, modifier) {
  var _props$popperOptions;

  return {
    popperOptions: Object.assign({}, props.popperOptions, {
      modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function (_ref) {
        var name = _ref.name;
        return name !== modifier.name;
      }), [modifier])
    })
  };
}

var inlinePositioning = {
  name: 'inlinePositioning',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference;

    function isEnabled() {
      return !!instance.props.inlinePositioning;
    }

    var placement;
    var cursorRectIndex = -1;
    var isInternalUpdate = false;
    var modifier = {
      name: 'tippyInlinePositioning',
      enabled: true,
      phase: 'afterWrite',
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (isEnabled()) {
          if (placement !== state.placement) {
            instance.setProps({
              getReferenceClientRect: function getReferenceClientRect() {
                return _getReferenceClientRect(state.placement);
              }
            });
          }

          placement = state.placement;
        }
      }
    };

    function _getReferenceClientRect(placement) {
      return getInlineBoundingClientRect(tippy_esm_getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
    }

    function setInternalProps(partialProps) {
      isInternalUpdate = true;
      instance.setProps(partialProps);
      isInternalUpdate = false;
    }

    function addModifier() {
      if (!isInternalUpdate) {
        setInternalProps(getProps(instance.props, modifier));
      }
    }

    return {
      onCreate: addModifier,
      onAfterUpdate: addModifier,
      onTrigger: function onTrigger(_, event) {
        if (isMouseEvent(event)) {
          var rects = arrayFrom(instance.reference.getClientRects());
          var cursorRect = rects.find(function (rect) {
            return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
          });
          cursorRectIndex = rects.indexOf(cursorRect);
        }
      },
      onUntrigger: function onUntrigger() {
        cursorRectIndex = -1;
      }
    };
  }
};

function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
  // Not an inline element, or placement is not yet known
  if (clientRects.length < 2 || currentBasePlacement === null) {
    return boundingRect;
  } // There are two rects and they are disjoined


  if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) {
    return clientRects[cursorRectIndex] || boundingRect;
  }

  switch (currentBasePlacement) {
    case 'top':
    case 'bottom':
      {
        var firstRect = clientRects[0];
        var lastRect = clientRects[clientRects.length - 1];
        var isTop = currentBasePlacement === 'top';
        var top = firstRect.top;
        var bottom = lastRect.bottom;
        var left = isTop ? firstRect.left : lastRect.left;
        var right = isTop ? firstRect.right : lastRect.right;
        var width = right - left;
        var height = bottom - top;
        return {
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          width: width,
          height: height
        };
      }

    case 'left':
    case 'right':
      {
        var minLeft = Math.min.apply(Math, clientRects.map(function (rects) {
          return rects.left;
        }));
        var maxRight = Math.max.apply(Math, clientRects.map(function (rects) {
          return rects.right;
        }));
        var measureRects = clientRects.filter(function (rect) {
          return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
        });
        var _top = measureRects[0].top;
        var _bottom = measureRects[measureRects.length - 1].bottom;
        var _left = minLeft;
        var _right = maxRight;

        var _width = _right - _left;

        var _height = _bottom - _top;

        return {
          top: _top,
          bottom: _bottom,
          left: _left,
          right: _right,
          width: _width,
          height: _height
        };
      }

    default:
      {
        return boundingRect;
      }
  }
}

var sticky = {
  name: 'sticky',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference,
        popper = instance.popper;

    function getReference() {
      return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
    }

    function shouldCheck(value) {
      return instance.props.sticky === true || instance.props.sticky === value;
    }

    var prevRefRect = null;
    var prevPopRect = null;

    function updatePosition() {
      var currentRefRect = shouldCheck('reference') ? getReference().getBoundingClientRect() : null;
      var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;

      if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
        if (instance.popperInstance) {
          instance.popperInstance.update();
        }
      }

      prevRefRect = currentRefRect;
      prevPopRect = currentPopRect;

      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }

    return {
      onMount: function onMount() {
        if (instance.props.sticky) {
          updatePosition();
        }
      }
    };
  }
};

function areRectsDifferent(rectA, rectB) {
  if (rectA && rectB) {
    return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
  }

  return true;
}

tippy.setDefaultProps({
  render: render
});
/* harmony default export */ var tippy_esm = __webpack_exports__["b"] = (tippy);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var catalyst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var tippy_js_dist_svg_arrow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var tippy_js_dist_svg_arrow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_svg_arrow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tippy_tippy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81);
/* harmony import */ var tippy_tippy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tippy_tippy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bloch_display_component_bloch_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var bloch_display_component_bloch_display_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bloch_display_component_bloch_display_component__WEBPACK_IMPORTED_MODULE_4__);


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(78);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(49);
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".tippy-box[data-placement^=top]>.tippy-svg-arrow{\n  bottom:0\n}\n\n.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg{\n  top:16px;\n  transform:rotate(180deg)\n}\n\n.tippy-box[data-placement^=bottom]>.tippy-svg-arrow{\n  top:0\n}\n\n.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg{\n  bottom:16px\n}\n\n.tippy-box[data-placement^=left]>.tippy-svg-arrow{\n  right:0\n}\n\n.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg{\n  transform:rotate(90deg);\n  top:calc(50% - 3px);\n  left:11px\n}\n\n.tippy-box[data-placement^=right]>.tippy-svg-arrow{\n  left:0\n}\n\n.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg{\n  transform:rotate(-90deg);\n  top:calc(50% - 3px);\n  right:11px\n}\n\n.tippy-svg-arrow{\n  width:16px;\n  height:16px;\n  fill:#333;\n  text-align:left;\n  text-align:initial\n}\n\n.tippy-svg-arrow,.tippy-svg-arrow>svg{\n  position:absolute\n}", "",{"version":3,"sources":["svg-arrow.css"],"names":[],"mappings":"AAAA;EAAiD;AAAQ;;AAAC;EAA4G,QAAQ;EAAC;AAAwB;;AAAC;EAAoD;AAAK;;AAAC;EAAwD;AAAW;;AAAC;EAAkD;AAAO;;AAAC;EAA8G,uBAAuB;EAAC,mBAAmB;EAAC;AAAS;;AAAC;EAAmD;AAAM;;AAAC;EAAgH,wBAAwB;EAAC,mBAAmB;EAAC;AAAU;;AAAC;EAAiB,UAAU;EAAC,WAAW;EAAC,SAAS;EAAC,eAAiB;EAAjB;AAAkB;;AAAC;EAAsC;AAAiB","file":"svg-arrow.css","sourcesContent":[".tippy-box[data-placement^=top]>.tippy-svg-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-svg-arrow:after,.tippy-box[data-placement^=top]>.tippy-svg-arrow>svg{top:16px;transform:rotate(180deg)}.tippy-box[data-placement^=bottom]>.tippy-svg-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.tippy-box[data-placement^=left]>.tippy-svg-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-svg-arrow:after,.tippy-box[data-placement^=left]>.tippy-svg-arrow>svg{transform:rotate(90deg);top:calc(50% - 3px);left:11px}.tippy-box[data-placement^=right]>.tippy-svg-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-svg-arrow:after,.tippy-box[data-placement^=right]>.tippy-svg-arrow>svg{transform:rotate(-90deg);top:calc(50% - 3px);right:11px}.tippy-svg-arrow{width:16px;height:16px;fill:#333;text-align:initial}.tippy-svg-arrow,.tippy-svg-arrow>svg{position:absolute}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(80);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(49);
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".tippy-box[data-animation=fade][data-state=hidden]{\n  opacity:0\n}\n\n[data-tippy-root]{\n  max-width:calc(100vw - 10px)\n}\n\n.tippy-box{\n  position:relative;\n  background-color:#333;\n  color:#fff;\n  border-radius:4px;\n  font-size:14px;\n  line-height:1.4;\n  outline:0;\n  transition-property:transform,visibility,opacity\n}\n\n.tippy-box[data-placement^=top]>.tippy-arrow{\n  bottom:0\n}\n\n.tippy-box[data-placement^=top]>.tippy-arrow:before{\n  bottom:-7px;\n  left:0;\n  border-width:8px 8px 0;\n  border-top-color:currentColor;\n  border-top-color:initial;\n  transform-origin:center top\n}\n\n.tippy-box[data-placement^=bottom]>.tippy-arrow{\n  top:0\n}\n\n.tippy-box[data-placement^=bottom]>.tippy-arrow:before{\n  top:-7px;\n  left:0;\n  border-width:0 8px 8px;\n  border-bottom-color:currentColor;\n  border-bottom-color:initial;\n  transform-origin:center bottom\n}\n\n.tippy-box[data-placement^=left]>.tippy-arrow{\n  right:0\n}\n\n.tippy-box[data-placement^=left]>.tippy-arrow:before{\n  border-width:8px 0 8px 8px;\n  border-left-color:currentColor;\n  border-left-color:initial;\n  right:-7px;\n  transform-origin:center left\n}\n\n.tippy-box[data-placement^=right]>.tippy-arrow{\n  left:0\n}\n\n.tippy-box[data-placement^=right]>.tippy-arrow:before{\n  left:-7px;\n  border-width:8px 8px 8px 0;\n  border-right-color:currentColor;\n  border-right-color:initial;\n  transform-origin:center right\n}\n\n.tippy-box[data-inertia][data-state=visible]{\n  transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)\n}\n\n.tippy-arrow{\n  width:16px;\n  height:16px;\n  color:#333\n}\n\n.tippy-arrow:before{\n  content:\"\";\n  position:absolute;\n  border-color:transparent;\n  border-style:solid\n}\n\n.tippy-content{\n  position:relative;\n  padding:5px 9px;\n  z-index:1\n}", "",{"version":3,"sources":["tippy.css"],"names":[],"mappings":"AAAA;EAAmD;AAAS;;AAAC;EAAkB;AAA4B;;AAAC;EAAW,iBAAiB;EAAC,qBAAqB;EAAC,UAAU;EAAC,iBAAiB;EAAC,cAAc;EAAC,eAAe;EAAC,SAAS;EAAC;AAAgD;;AAAC;EAA6C;AAAQ;;AAAC;EAAoD,WAAW;EAAC,MAAM;EAAC,sBAAsB;EAAC,6BAAwB;EAAxB,wBAAwB;EAAC;AAA2B;;AAAC;EAAgD;AAAK;;AAAC;EAAuD,QAAQ;EAAC,MAAM;EAAC,sBAAsB;EAAC,gCAA2B;EAA3B,2BAA2B;EAAC;AAA8B;;AAAC;EAA8C;AAAO;;AAAC;EAAqD,0BAA0B;EAAC,8BAAyB;EAAzB,yBAAyB;EAAC,UAAU;EAAC;AAA4B;;AAAC;EAA+C;AAAM;;AAAC;EAAsD,SAAS;EAAC,0BAA0B;EAAC,+BAA0B;EAA1B,0BAA0B;EAAC;AAA6B;;AAAC;EAA6C;AAAyD;;AAAC;EAAa,UAAU;EAAC,WAAW;EAAC;AAAU;;AAAC;EAAoB,UAAU;EAAC,iBAAiB;EAAC,wBAAwB;EAAC;AAAkB;;AAAC;EAAe,iBAAiB;EAAC,eAAe;EAAC;AAAS","file":"tippy.css","sourcesContent":[".tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(82);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(49);
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".tippy-box[data-theme~=qni]{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  --tw-border-opacity:1;\n  border-color:rgba(75, 75, 75, var(--tw-border-opacity));\n  border-style:solid;\n  border-width:2px;\n  --tw-text-opacity:1;\n  color:rgba(119, 119, 119, var(--tw-text-opacity));\n  font-size:0.75rem;\n  line-height:1rem\n}\n\n@media (min-width: 768px){\n  .tippy-box[data-theme~=qni]{\n    font-size:0.875rem;\n    line-height:1.25rem\n  }\n}\n\n.tippy-box[data-theme~=qni] .tippy-svg-arrow>svg:first-child{\n  fill:#4B4B4B\n}\n\n.tippy-box[data-theme~=qni] .tippy-svg-arrow>svg:last-child{\n  fill:#FFFFFF\n}\n\n.tippy-box[data-theme~=qni][data-placement^=top]>.tippy-svg-arrow svg:first-child{\n  top:18px\n}\n\n.tippy-box[data-theme~=qni][data-placement^=bottom]>.tippy-svg-arrow svg:first-child{\n  bottom:18px\n}\n\n.tippy-box[data-theme~=qni][data-placement^=left]>.tippy-svg-arrow svg:first-child{\n  left:13px\n}\n\n.tippy-box[data-theme~=qni][data-placement^=right]>.tippy-svg-arrow svg:first-child{\n  right:13px\n}\n\n.tippy-box[data-theme~=qni] header h1{\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(75, 75, 75, var(--tw-text-opacity));\n  font-size:1.125rem;\n  line-height:1.75rem\n}\n\n.tippy-box[data-theme~=qni] header p{\n  line-height:1.25\n}", "",{"version":3,"sources":["/Users/yasuhito/Documents/GitHub/qni/app/components/tippy/tippy.scss","../../../node_modules/tailwindcss/lib/lib/substituteClassApplyAtRules.js"],"names":[],"mappings":"AAAA;ECEA,iBAAmB;EAAnB,0DAAmB;EAAnB,qBAAmB;EAAnB,uDAAmB;EAAnB,kBAAmB;EAAnB,gBAAmB;EAAnB,mBAAmB;EAAnB,iDAAmB;EAAnB,iBAAmB;EAAnB;ADEE;;AAEA;EANF;ICEA,kBAAmB;IAAnB;EDKI;AAAA;;AAIF;EACE;AAAA;;AAIF;EACE;AAAA;;AAGF;EACE;AAAA;;AAGF;EACE;AAAA;;AAGF;EACE;AAAA;;AAGF;EACE;AAAA;;AAIF;ECnCF,eAAmB;EAAnB,mBAAmB;EAAnB,8CAAmB;EAAnB,kBAAmB;EAAnB;ADsCI;;AAGF;ECzCF;AD0CI","file":"tippy.scss","sourcesContent":[".tippy-box[data-theme~=\"qni\"] {\n  @apply bg-snow;\n  @apply border-2 border-solid border-eel;\n  @apply text-wolf;\n  @apply text-xs;\n\n  @screen md {\n    @apply text-sm;\n  }\n\n  // The border\n  .tippy-svg-arrow > svg:first-child {\n    fill: theme(\"colors.eel\");\n  }\n\n  // The fill\n  .tippy-svg-arrow > svg:last-child {\n    fill: theme(\"colors.snow\");\n  }\n\n  &[data-placement^=\"top\"] > .tippy-svg-arrow svg:first-child {\n    top: 18px;\n  }\n\n  &[data-placement^=\"bottom\"] > .tippy-svg-arrow svg:first-child {\n    bottom: 18px;\n  }\n\n  &[data-placement^=\"left\"] > .tippy-svg-arrow svg:first-child {\n    left: 13px;\n  }\n\n  &[data-placement^=\"right\"] > .tippy-svg-arrow svg:first-child {\n    right: 13px;\n  }\n\n  // Description popup\n  header h1 {\n    @apply font-bold;\n    @apply text-eel;\n    @apply text-lg;\n  }\n\n  header p {\n    @apply leading-tight;\n  }\n}\n","@tailwind base;\n@tailwind components;\n@tailwind utilities;"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(84);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(49);
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".bloch-display__inspector{\n  display: flex;\n  flex-direction: column;\n  --tw-text-opacity: 1;\n  color: rgba(119, 119, 119, var(--tw-text-opacity))\n}\n\n.bloch-display__inspector header h1{\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgba(75, 75, 75, var(--tw-text-opacity));\n  font-size: 1.125rem;\n  line-height: 1.75rem\n}\n\n.bloch-display__inspector section{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  white-space: nowrap\n}\n\n.bloch-display__inspector-d, .bloch-display__inspector-phi, .bloch-display__inspector-theta, .bloch-display__inspector-x, .bloch-display__inspector-y, .bloch-display__inspector-z{\n  font-weight: 500\n}\n\n.bloch-display__inspector-d, .bloch-display__inspector-phi, .bloch-display__inspector-theta, .bloch-display__inspector-x, .bloch-display__inspector-y, .bloch-display__inspector-z{\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace\n}\n\n.bloch-display__inspector-d, .bloch-display__inspector-phi, .bloch-display__inspector-theta, .bloch-display__inspector-x, .bloch-display__inspector-y, .bloch-display__inspector-z{\n  --tw-text-opacity: 1;\n  color: rgba(75, 75, 75, var(--tw-text-opacity))\n}\n\n.bloch-display__inspector-d, .bloch-display__inspector-phi, .bloch-display__inspector-theta, .bloch-display__inspector-x, .bloch-display__inspector-y, .bloch-display__inspector-z{\n  font-size: 0.875rem;\n  line-height: 1.25rem\n}", "",{"version":3,"sources":["/Users/yasuhito/Documents/GitHub/qni/app/components/bloch_display_component/bloch_display_component.scss","../../../node_modules/tailwindcss/lib/lib/substituteClassApplyAtRules.js"],"names":[],"mappings":"AAGE;ECDF,aAAmB;EAAnB,sBAAmB;EAAnB,oBAAmB;EAAnB;ADGI;;AAEA;ECLJ,gBAAmB;EAAnB,oBAAmB;EAAnB,+CAAmB;EAAnB,mBAAmB;EAAnB;ADQM;;AAGF;ECXJ,mBAAmB;EAAnB,oBAAmB;EAAnB;ADaM;;ACbN;EAAA;AAAmB;;AAAnB;EAAA;AAAmB;;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB","file":"bloch_display_component.scss","sourcesContent":[".bloch-display {\n  $parent: &;\n\n  &__inspector {\n    @apply flex flex-col;\n    @apply text-wolf;\n\n    header h1 {\n      @apply font-bold;\n      @apply text-eel;\n      @apply text-lg;\n    }\n\n    section {\n      @apply text-sm;\n      @apply whitespace-nowrap;\n    }\n  }\n\n  &__inspector-d,\n  &__inspector-phi,\n  &__inspector-theta,\n  &__inspector-x,\n  &__inspector-y,\n  &__inspector-z {\n    @apply font-medium;\n    @apply font-mono;\n    @apply text-eel;\n    @apply text-sm;\n  }\n}\n","@tailwind base;\n@tailwind components;\n@tailwind utilities;"]}]);
// Exports
module.exports = exports;


/***/ })

/******/ });
//# sourceMappingURL=npm-d0d3df2d1cc0bbb3df41.js.map