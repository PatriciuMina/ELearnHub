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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/controllers/application.js":
/*!***************************************************!*\
  !*** ./app/javascript/controllers/application.js ***!
  \***************************************************/
/*! exports provided: application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "application", function() { return application; });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

var application = _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start(); // Configure Stimulus development experience

application.debug = false;
window.Stimulus = application;


/***/ }),

/***/ "./app/javascript/controllers/hello_controller.js":
/*!********************************************************!*\
  !*** ./app/javascript/controllers/hello_controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = "Hello World!";
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);



/***/ }),

/***/ "./app/javascript/controllers/index.js":
/*!*********************************************!*\
  !*** ./app/javascript/controllers/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application */ "./app/javascript/controllers/application.js");
/* harmony import */ var _hello_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello_controller */ "./app/javascript/controllers/hello_controller.js");
// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName


_application__WEBPACK_IMPORTED_MODULE_0__["application"].register("hello", _hello_controller__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers */ "./app/javascript/controllers/index.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.





 //=require jquery3
//=require jquery_ujs
//=require_tree .

_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();

__webpack_require__(/*! trix */ "./node_modules/trix/dist/trix.js");

__webpack_require__(/*! @rails/actiontext */ "./node_modules/@rails/actiontext/app/javascript/actiontext/index.js");

/***/ }),

/***/ "./node_modules/@hotwired/stimulus/dist/stimulus.js":
/*!**********************************************************!*\
  !*** ./node_modules/@hotwired/stimulus/dist/stimulus.js ***!
  \**********************************************************/
/*! exports provided: Application, AttributeObserver, Context, Controller, ElementObserver, IndexedMultimap, Multimap, StringMapObserver, TokenListObserver, ValueListObserver, add, defaultSchema, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringMapObserver", function() { return StringMapObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Stimulus 3.1.0
Copyright © 2022 Basecamp, LLC
 */
class EventListener {
  constructor(eventTarget, eventName, eventOptions) {
    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.eventOptions = eventOptions;
    this.unorderedBindings = new Set();
  }

  connect() {
    this.eventTarget.addEventListener(this.eventName, this, this.eventOptions);
  }

  disconnect() {
    this.eventTarget.removeEventListener(this.eventName, this, this.eventOptions);
  }

  bindingConnected(binding) {
    this.unorderedBindings.add(binding);
  }

  bindingDisconnected(binding) {
    this.unorderedBindings.delete(binding);
  }

  handleEvent(event) {
    const extendedEvent = extendEvent(event);

    for (const binding of this.bindings) {
      if (extendedEvent.immediatePropagationStopped) {
        break;
      } else {
        binding.handleEvent(extendedEvent);
      }
    }
  }

  get bindings() {
    return Array.from(this.unorderedBindings).sort((left, right) => {
      const leftIndex = left.index,
            rightIndex = right.index;
      return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
    });
  }

}

function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    const stopImmediatePropagation = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,

      stopImmediatePropagation() {
        this.immediatePropagationStopped = true;
        stopImmediatePropagation.call(this);
      }

    });
  }
}

class Dispatcher {
  constructor(application) {
    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }

  start() {
    if (!this.started) {
      this.started = true;
      this.eventListeners.forEach(eventListener => eventListener.connect());
    }
  }

  stop() {
    if (this.started) {
      this.started = false;
      this.eventListeners.forEach(eventListener => eventListener.disconnect());
    }
  }

  get eventListeners() {
    return Array.from(this.eventListenerMaps.values()).reduce((listeners, map) => listeners.concat(Array.from(map.values())), []);
  }

  bindingConnected(binding) {
    this.fetchEventListenerForBinding(binding).bindingConnected(binding);
  }

  bindingDisconnected(binding) {
    this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
  }

  handleError(error, message) {
    let detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.application.handleError(error, "Error ".concat(message), detail);
  }

  fetchEventListenerForBinding(binding) {
    const eventTarget = binding.eventTarget,
          eventName = binding.eventName,
          eventOptions = binding.eventOptions;
    return this.fetchEventListener(eventTarget, eventName, eventOptions);
  }

  fetchEventListener(eventTarget, eventName, eventOptions) {
    const eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
    const cacheKey = this.cacheKey(eventName, eventOptions);
    let eventListener = eventListenerMap.get(cacheKey);

    if (!eventListener) {
      eventListener = this.createEventListener(eventTarget, eventName, eventOptions);
      eventListenerMap.set(cacheKey, eventListener);
    }

    return eventListener;
  }

  createEventListener(eventTarget, eventName, eventOptions) {
    const eventListener = new EventListener(eventTarget, eventName, eventOptions);

    if (this.started) {
      eventListener.connect();
    }

    return eventListener;
  }

  fetchEventListenerMapForEventTarget(eventTarget) {
    let eventListenerMap = this.eventListenerMaps.get(eventTarget);

    if (!eventListenerMap) {
      eventListenerMap = new Map();
      this.eventListenerMaps.set(eventTarget, eventListenerMap);
    }

    return eventListenerMap;
  }

  cacheKey(eventName, eventOptions) {
    const parts = [eventName];
    Object.keys(eventOptions).sort().forEach(key => {
      parts.push("".concat(eventOptions[key] ? "" : "!").concat(key));
    });
    return parts.join(":");
  }

}

const descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#([^:]+?))(:(.+))?$/;

function parseActionDescriptorString(descriptorString) {
  const source = descriptorString.trim();
  const matches = source.match(descriptorPattern) || [];
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: matches[2],
    eventOptions: matches[9] ? parseEventOptions(matches[9]) : {},
    identifier: matches[5],
    methodName: matches[7]
  };
}

function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}

function parseEventOptions(eventOptions) {
  return eventOptions.split(":").reduce((options, token) => Object.assign(options, {
    [token.replace(/^!/, "")]: !/^!/.test(token)
  }), {});
}

function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}

function camelize(value) {
  return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function dasherize(value) {
  return value.replace(/([A-Z])/g, (_, char) => "-".concat(char.toLowerCase()));
}

function tokenize(value) {
  return value.match(/[^\s]+/g) || [];
}

class Action {
  constructor(element, index, descriptor) {
    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.eventOptions = descriptor.eventOptions || {};
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
  }

  static forToken(token) {
    return new this(token.element, token.index, parseActionDescriptorString(token.content));
  }

  toString() {
    const eventNameSuffix = this.eventTargetName ? "@".concat(this.eventTargetName) : "";
    return "".concat(this.eventName).concat(eventNameSuffix, "->").concat(this.identifier, "#").concat(this.methodName);
  }

  get params() {
    const params = {};
    const pattern = new RegExp("^data-".concat(this.identifier, "-(.+)-param$"));

    for (const _ref of Array.from(this.element.attributes)) {
      const name = _ref.name;
      const value = _ref.value;
      const match = name.match(pattern);
      const key = match && match[1];

      if (key) {
        params[camelize(key)] = typecast(value);
      }
    }

    return params;
  }

  get eventTargetName() {
    return stringifyEventTarget(this.eventTarget);
  }

}

const defaultEventNames = {
  "a": e => "click",
  "button": e => "click",
  "form": e => "submit",
  "details": e => "toggle",
  "input": e => e.getAttribute("type") == "submit" ? "click" : "input",
  "select": e => "change",
  "textarea": e => "input"
};

function getDefaultEventNameForElement(element) {
  const tagName = element.tagName.toLowerCase();

  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}

function error(message) {
  throw new Error(message);
}

function typecast(value) {
  try {
    return JSON.parse(value);
  } catch (o_O) {
    return value;
  }
}

class Binding {
  constructor(context, action) {
    this.context = context;
    this.action = action;
  }

  get index() {
    return this.action.index;
  }

  get eventTarget() {
    return this.action.eventTarget;
  }

  get eventOptions() {
    return this.action.eventOptions;
  }

  get identifier() {
    return this.context.identifier;
  }

  handleEvent(event) {
    if (this.willBeInvokedByEvent(event) && this.shouldBeInvokedPerSelf(event)) {
      this.processStopPropagation(event);
      this.processPreventDefault(event);
      this.invokeWithEvent(event);
    }
  }

  get eventName() {
    return this.action.eventName;
  }

  get method() {
    const method = this.controller[this.methodName];

    if (typeof method == "function") {
      return method;
    }

    throw new Error("Action \"".concat(this.action, "\" references undefined method \"").concat(this.methodName, "\""));
  }

  processStopPropagation(event) {
    if (this.eventOptions.stop) {
      event.stopPropagation();
    }
  }

  processPreventDefault(event) {
    if (this.eventOptions.prevent) {
      event.preventDefault();
    }
  }

  invokeWithEvent(event) {
    const target = event.target,
          currentTarget = event.currentTarget;

    try {
      const params = this.action.params;
      const actionEvent = Object.assign(event, {
        params
      });
      this.method.call(this.controller, actionEvent);
      this.context.logDebugActivity(this.methodName, {
        event,
        target,
        currentTarget,
        action: this.methodName
      });
    } catch (error) {
      const identifier = this.identifier,
            controller = this.controller,
            element = this.element,
            index = this.index;
      const detail = {
        identifier,
        controller,
        element,
        index,
        event
      };
      this.context.handleError(error, "invoking action \"".concat(this.action, "\""), detail);
    }
  }

  shouldBeInvokedPerSelf(event) {
    if (this.action.eventOptions.self === true) {
      return this.action.element === event.target;
    } else {
      return true;
    }
  }

  willBeInvokedByEvent(event) {
    const eventTarget = event.target;

    if (this.element === eventTarget) {
      return true;
    } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
      return this.scope.containsElement(eventTarget);
    } else {
      return this.scope.containsElement(this.action.element);
    }
  }

  get controller() {
    return this.context.controller;
  }

  get methodName() {
    return this.action.methodName;
  }

  get element() {
    return this.scope.element;
  }

  get scope() {
    return this.context.scope;
  }

}

class ElementObserver {
  constructor(element, delegate) {
    this.mutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true
    };
    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(mutations => this.processMutations(mutations));
  }

  start() {
    if (!this.started) {
      this.started = true;
      this.mutationObserver.observe(this.element, this.mutationObserverInit);
      this.refresh();
    }
  }

  pause(callback) {
    if (this.started) {
      this.mutationObserver.disconnect();
      this.started = false;
    }

    callback();

    if (!this.started) {
      this.mutationObserver.observe(this.element, this.mutationObserverInit);
      this.started = true;
    }
  }

  stop() {
    if (this.started) {
      this.mutationObserver.takeRecords();
      this.mutationObserver.disconnect();
      this.started = false;
    }
  }

  refresh() {
    if (this.started) {
      const matches = new Set(this.matchElementsInTree());

      for (const element of Array.from(this.elements)) {
        if (!matches.has(element)) {
          this.removeElement(element);
        }
      }

      for (const element of Array.from(matches)) {
        this.addElement(element);
      }
    }
  }

  processMutations(mutations) {
    if (this.started) {
      for (const mutation of mutations) {
        this.processMutation(mutation);
      }
    }
  }

  processMutation(mutation) {
    if (mutation.type == "attributes") {
      this.processAttributeChange(mutation.target, mutation.attributeName);
    } else if (mutation.type == "childList") {
      this.processRemovedNodes(mutation.removedNodes);
      this.processAddedNodes(mutation.addedNodes);
    }
  }

  processAttributeChange(node, attributeName) {
    const element = node;

    if (this.elements.has(element)) {
      if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
        this.delegate.elementAttributeChanged(element, attributeName);
      } else {
        this.removeElement(element);
      }
    } else if (this.matchElement(element)) {
      this.addElement(element);
    }
  }

  processRemovedNodes(nodes) {
    for (const node of Array.from(nodes)) {
      const element = this.elementFromNode(node);

      if (element) {
        this.processTree(element, this.removeElement);
      }
    }
  }

  processAddedNodes(nodes) {
    for (const node of Array.from(nodes)) {
      const element = this.elementFromNode(node);

      if (element && this.elementIsActive(element)) {
        this.processTree(element, this.addElement);
      }
    }
  }

  matchElement(element) {
    return this.delegate.matchElement(element);
  }

  matchElementsInTree() {
    let tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;
    return this.delegate.matchElementsInTree(tree);
  }

  processTree(tree, processor) {
    for (const element of this.matchElementsInTree(tree)) {
      processor.call(this, element);
    }
  }

  elementFromNode(node) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      return node;
    }
  }

  elementIsActive(element) {
    if (element.isConnected != this.element.isConnected) {
      return false;
    } else {
      return this.element.contains(element);
    }
  }

  addElement(element) {
    if (!this.elements.has(element)) {
      if (this.elementIsActive(element)) {
        this.elements.add(element);

        if (this.delegate.elementMatched) {
          this.delegate.elementMatched(element);
        }
      }
    }
  }

  removeElement(element) {
    if (this.elements.has(element)) {
      this.elements.delete(element);

      if (this.delegate.elementUnmatched) {
        this.delegate.elementUnmatched(element);
      }
    }
  }

}

class AttributeObserver {
  constructor(element, attributeName, delegate) {
    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new ElementObserver(element, this);
  }

  get element() {
    return this.elementObserver.element;
  }

  get selector() {
    return "[".concat(this.attributeName, "]");
  }

  start() {
    this.elementObserver.start();
  }

  pause(callback) {
    this.elementObserver.pause(callback);
  }

  stop() {
    this.elementObserver.stop();
  }

  refresh() {
    this.elementObserver.refresh();
  }

  get started() {
    return this.elementObserver.started;
  }

  matchElement(element) {
    return element.hasAttribute(this.attributeName);
  }

  matchElementsInTree(tree) {
    const match = this.matchElement(tree) ? [tree] : [];
    const matches = Array.from(tree.querySelectorAll(this.selector));
    return match.concat(matches);
  }

  elementMatched(element) {
    if (this.delegate.elementMatchedAttribute) {
      this.delegate.elementMatchedAttribute(element, this.attributeName);
    }
  }

  elementUnmatched(element) {
    if (this.delegate.elementUnmatchedAttribute) {
      this.delegate.elementUnmatchedAttribute(element, this.attributeName);
    }
  }

  elementAttributeChanged(element, attributeName) {
    if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
      this.delegate.elementAttributeValueChanged(element, attributeName);
    }
  }

}

class StringMapObserver {
  constructor(element, delegate) {
    this.element = element;
    this.delegate = delegate;
    this.started = false;
    this.stringMap = new Map();
    this.mutationObserver = new MutationObserver(mutations => this.processMutations(mutations));
  }

  start() {
    if (!this.started) {
      this.started = true;
      this.mutationObserver.observe(this.element, {
        attributes: true,
        attributeOldValue: true
      });
      this.refresh();
    }
  }

  stop() {
    if (this.started) {
      this.mutationObserver.takeRecords();
      this.mutationObserver.disconnect();
      this.started = false;
    }
  }

  refresh() {
    if (this.started) {
      for (const attributeName of this.knownAttributeNames) {
        this.refreshAttribute(attributeName, null);
      }
    }
  }

  processMutations(mutations) {
    if (this.started) {
      for (const mutation of mutations) {
        this.processMutation(mutation);
      }
    }
  }

  processMutation(mutation) {
    const attributeName = mutation.attributeName;

    if (attributeName) {
      this.refreshAttribute(attributeName, mutation.oldValue);
    }
  }

  refreshAttribute(attributeName, oldValue) {
    const key = this.delegate.getStringMapKeyForAttribute(attributeName);

    if (key != null) {
      if (!this.stringMap.has(attributeName)) {
        this.stringMapKeyAdded(key, attributeName);
      }

      const value = this.element.getAttribute(attributeName);

      if (this.stringMap.get(attributeName) != value) {
        this.stringMapValueChanged(value, key, oldValue);
      }

      if (value == null) {
        const oldValue = this.stringMap.get(attributeName);
        this.stringMap.delete(attributeName);
        if (oldValue) this.stringMapKeyRemoved(key, attributeName, oldValue);
      } else {
        this.stringMap.set(attributeName, value);
      }
    }
  }

  stringMapKeyAdded(key, attributeName) {
    if (this.delegate.stringMapKeyAdded) {
      this.delegate.stringMapKeyAdded(key, attributeName);
    }
  }

  stringMapValueChanged(value, key, oldValue) {
    if (this.delegate.stringMapValueChanged) {
      this.delegate.stringMapValueChanged(value, key, oldValue);
    }
  }

  stringMapKeyRemoved(key, attributeName, oldValue) {
    if (this.delegate.stringMapKeyRemoved) {
      this.delegate.stringMapKeyRemoved(key, attributeName, oldValue);
    }
  }

  get knownAttributeNames() {
    return Array.from(new Set(this.currentAttributeNames.concat(this.recordedAttributeNames)));
  }

  get currentAttributeNames() {
    return Array.from(this.element.attributes).map(attribute => attribute.name);
  }

  get recordedAttributeNames() {
    return Array.from(this.stringMap.keys());
  }

}

function add(map, key, value) {
  fetch(map, key).add(value);
}

function del(map, key, value) {
  fetch(map, key).delete(value);
  prune(map, key);
}

function fetch(map, key) {
  let values = map.get(key);

  if (!values) {
    values = new Set();
    map.set(key, values);
  }

  return values;
}

function prune(map, key) {
  const values = map.get(key);

  if (values != null && values.size == 0) {
    map.delete(key);
  }
}

class Multimap {
  constructor() {
    this.valuesByKey = new Map();
  }

  get keys() {
    return Array.from(this.valuesByKey.keys());
  }

  get values() {
    const sets = Array.from(this.valuesByKey.values());
    return sets.reduce((values, set) => values.concat(Array.from(set)), []);
  }

  get size() {
    const sets = Array.from(this.valuesByKey.values());
    return sets.reduce((size, set) => size + set.size, 0);
  }

  add(key, value) {
    add(this.valuesByKey, key, value);
  }

  delete(key, value) {
    del(this.valuesByKey, key, value);
  }

  has(key, value) {
    const values = this.valuesByKey.get(key);
    return values != null && values.has(value);
  }

  hasKey(key) {
    return this.valuesByKey.has(key);
  }

  hasValue(value) {
    const sets = Array.from(this.valuesByKey.values());
    return sets.some(set => set.has(value));
  }

  getValuesForKey(key) {
    const values = this.valuesByKey.get(key);
    return values ? Array.from(values) : [];
  }

  getKeysForValue(value) {
    return Array.from(this.valuesByKey).filter(_ref2 => {
      let _ref3 = _slicedToArray(_ref2, 2),
          key = _ref3[0],
          values = _ref3[1];

      return values.has(value);
    }).map(_ref4 => {
      let _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          values = _ref5[1];

      return key;
    });
  }

}

class IndexedMultimap extends Multimap {
  constructor() {
    super();
    this.keysByValue = new Map();
  }

  get values() {
    return Array.from(this.keysByValue.keys());
  }

  add(key, value) {
    super.add(key, value);
    add(this.keysByValue, value, key);
  }

  delete(key, value) {
    super.delete(key, value);
    del(this.keysByValue, value, key);
  }

  hasValue(value) {
    return this.keysByValue.has(value);
  }

  getKeysForValue(value) {
    const set = this.keysByValue.get(value);
    return set ? Array.from(set) : [];
  }

}

class TokenListObserver {
  constructor(element, attributeName, delegate) {
    this.attributeObserver = new AttributeObserver(element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new Multimap();
  }

  get started() {
    return this.attributeObserver.started;
  }

  start() {
    this.attributeObserver.start();
  }

  pause(callback) {
    this.attributeObserver.pause(callback);
  }

  stop() {
    this.attributeObserver.stop();
  }

  refresh() {
    this.attributeObserver.refresh();
  }

  get element() {
    return this.attributeObserver.element;
  }

  get attributeName() {
    return this.attributeObserver.attributeName;
  }

  elementMatchedAttribute(element) {
    this.tokensMatched(this.readTokensForElement(element));
  }

  elementAttributeValueChanged(element) {
    const _this$refreshTokensFo = this.refreshTokensForElement(element),
          _this$refreshTokensFo2 = _slicedToArray(_this$refreshTokensFo, 2),
          unmatchedTokens = _this$refreshTokensFo2[0],
          matchedTokens = _this$refreshTokensFo2[1];

    this.tokensUnmatched(unmatchedTokens);
    this.tokensMatched(matchedTokens);
  }

  elementUnmatchedAttribute(element) {
    this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
  }

  tokensMatched(tokens) {
    tokens.forEach(token => this.tokenMatched(token));
  }

  tokensUnmatched(tokens) {
    tokens.forEach(token => this.tokenUnmatched(token));
  }

  tokenMatched(token) {
    this.delegate.tokenMatched(token);
    this.tokensByElement.add(token.element, token);
  }

  tokenUnmatched(token) {
    this.delegate.tokenUnmatched(token);
    this.tokensByElement.delete(token.element, token);
  }

  refreshTokensForElement(element) {
    const previousTokens = this.tokensByElement.getValuesForKey(element);
    const currentTokens = this.readTokensForElement(element);
    const firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(_ref6 => {
      let _ref7 = _slicedToArray(_ref6, 2),
          previousToken = _ref7[0],
          currentToken = _ref7[1];

      return !tokensAreEqual(previousToken, currentToken);
    });

    if (firstDifferingIndex == -1) {
      return [[], []];
    } else {
      return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
    }
  }

  readTokensForElement(element) {
    const attributeName = this.attributeName;
    const tokenString = element.getAttribute(attributeName) || "";
    return parseTokenString(tokenString, element, attributeName);
  }

}

function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(content => content.length).map((content, index) => ({
    element,
    attributeName,
    content,
    index
  }));
}

function zip(left, right) {
  const length = Math.max(left.length, right.length);
  return Array.from({
    length
  }, (_, index) => [left[index], right[index]]);
}

function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}

class ValueListObserver {
  constructor(element, attributeName, delegate) {
    this.tokenListObserver = new TokenListObserver(element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }

  get started() {
    return this.tokenListObserver.started;
  }

  start() {
    this.tokenListObserver.start();
  }

  stop() {
    this.tokenListObserver.stop();
  }

  refresh() {
    this.tokenListObserver.refresh();
  }

  get element() {
    return this.tokenListObserver.element;
  }

  get attributeName() {
    return this.tokenListObserver.attributeName;
  }

  tokenMatched(token) {
    const element = token.element;

    const _this$fetchParseResul = this.fetchParseResultForToken(token),
          value = _this$fetchParseResul.value;

    if (value) {
      this.fetchValuesByTokenForElement(element).set(token, value);
      this.delegate.elementMatchedValue(element, value);
    }
  }

  tokenUnmatched(token) {
    const element = token.element;

    const _this$fetchParseResul2 = this.fetchParseResultForToken(token),
          value = _this$fetchParseResul2.value;

    if (value) {
      this.fetchValuesByTokenForElement(element).delete(token);
      this.delegate.elementUnmatchedValue(element, value);
    }
  }

  fetchParseResultForToken(token) {
    let parseResult = this.parseResultsByToken.get(token);

    if (!parseResult) {
      parseResult = this.parseToken(token);
      this.parseResultsByToken.set(token, parseResult);
    }

    return parseResult;
  }

  fetchValuesByTokenForElement(element) {
    let valuesByToken = this.valuesByTokenByElement.get(element);

    if (!valuesByToken) {
      valuesByToken = new Map();
      this.valuesByTokenByElement.set(element, valuesByToken);
    }

    return valuesByToken;
  }

  parseToken(token) {
    try {
      const value = this.delegate.parseValueForToken(token);
      return {
        value
      };
    } catch (error) {
      return {
        error
      };
    }
  }

}

class BindingObserver {
  constructor(context, delegate) {
    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }

  start() {
    if (!this.valueListObserver) {
      this.valueListObserver = new ValueListObserver(this.element, this.actionAttribute, this);
      this.valueListObserver.start();
    }
  }

  stop() {
    if (this.valueListObserver) {
      this.valueListObserver.stop();
      delete this.valueListObserver;
      this.disconnectAllActions();
    }
  }

  get element() {
    return this.context.element;
  }

  get identifier() {
    return this.context.identifier;
  }

  get actionAttribute() {
    return this.schema.actionAttribute;
  }

  get schema() {
    return this.context.schema;
  }

  get bindings() {
    return Array.from(this.bindingsByAction.values());
  }

  connectAction(action) {
    const binding = new Binding(this.context, action);
    this.bindingsByAction.set(action, binding);
    this.delegate.bindingConnected(binding);
  }

  disconnectAction(action) {
    const binding = this.bindingsByAction.get(action);

    if (binding) {
      this.bindingsByAction.delete(action);
      this.delegate.bindingDisconnected(binding);
    }
  }

  disconnectAllActions() {
    this.bindings.forEach(binding => this.delegate.bindingDisconnected(binding));
    this.bindingsByAction.clear();
  }

  parseValueForToken(token) {
    const action = Action.forToken(token);

    if (action.identifier == this.identifier) {
      return action;
    }
  }

  elementMatchedValue(element, action) {
    this.connectAction(action);
  }

  elementUnmatchedValue(element, action) {
    this.disconnectAction(action);
  }

}

class ValueObserver {
  constructor(context, receiver) {
    this.context = context;
    this.receiver = receiver;
    this.stringMapObserver = new StringMapObserver(this.element, this);
    this.valueDescriptorMap = this.controller.valueDescriptorMap;
  }

  start() {
    this.stringMapObserver.start();
    this.invokeChangedCallbacksForDefaultValues();
  }

  stop() {
    this.stringMapObserver.stop();
  }

  get element() {
    return this.context.element;
  }

  get controller() {
    return this.context.controller;
  }

  getStringMapKeyForAttribute(attributeName) {
    if (attributeName in this.valueDescriptorMap) {
      return this.valueDescriptorMap[attributeName].name;
    }
  }

  stringMapKeyAdded(key, attributeName) {
    const descriptor = this.valueDescriptorMap[attributeName];

    if (!this.hasValue(key)) {
      this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), descriptor.writer(descriptor.defaultValue));
    }
  }

  stringMapValueChanged(value, name, oldValue) {
    const descriptor = this.valueDescriptorNameMap[name];
    if (value === null) return;

    if (oldValue === null) {
      oldValue = descriptor.writer(descriptor.defaultValue);
    }

    this.invokeChangedCallback(name, value, oldValue);
  }

  stringMapKeyRemoved(key, attributeName, oldValue) {
    const descriptor = this.valueDescriptorNameMap[key];

    if (this.hasValue(key)) {
      this.invokeChangedCallback(key, descriptor.writer(this.receiver[key]), oldValue);
    } else {
      this.invokeChangedCallback(key, descriptor.writer(descriptor.defaultValue), oldValue);
    }
  }

  invokeChangedCallbacksForDefaultValues() {
    for (const _ref8 of this.valueDescriptors) {
      const key = _ref8.key;
      const name = _ref8.name;
      const defaultValue = _ref8.defaultValue;
      const writer = _ref8.writer;

      if (defaultValue != undefined && !this.controller.data.has(key)) {
        this.invokeChangedCallback(name, writer(defaultValue), undefined);
      }
    }
  }

  invokeChangedCallback(name, rawValue, rawOldValue) {
    const changedMethodName = "".concat(name, "Changed");
    const changedMethod = this.receiver[changedMethodName];

    if (typeof changedMethod == "function") {
      const descriptor = this.valueDescriptorNameMap[name];

      try {
        const value = descriptor.reader(rawValue);
        let oldValue = rawOldValue;

        if (rawOldValue) {
          oldValue = descriptor.reader(rawOldValue);
        }

        changedMethod.call(this.receiver, value, oldValue);
      } catch (error) {
        if (!(error instanceof TypeError)) throw error;
        throw new TypeError("Stimulus Value \"".concat(this.context.identifier, ".").concat(descriptor.name, "\" - ").concat(error.message));
      }
    }
  }

  get valueDescriptors() {
    const valueDescriptorMap = this.valueDescriptorMap;
    return Object.keys(valueDescriptorMap).map(key => valueDescriptorMap[key]);
  }

  get valueDescriptorNameMap() {
    const descriptors = {};
    Object.keys(this.valueDescriptorMap).forEach(key => {
      const descriptor = this.valueDescriptorMap[key];
      descriptors[descriptor.name] = descriptor;
    });
    return descriptors;
  }

  hasValue(attributeName) {
    const descriptor = this.valueDescriptorNameMap[attributeName];
    const hasMethodName = "has".concat(capitalize(descriptor.name));
    return this.receiver[hasMethodName];
  }

}

class TargetObserver {
  constructor(context, delegate) {
    this.context = context;
    this.delegate = delegate;
    this.targetsByName = new Multimap();
  }

  start() {
    if (!this.tokenListObserver) {
      this.tokenListObserver = new TokenListObserver(this.element, this.attributeName, this);
      this.tokenListObserver.start();
    }
  }

  stop() {
    if (this.tokenListObserver) {
      this.disconnectAllTargets();
      this.tokenListObserver.stop();
      delete this.tokenListObserver;
    }
  }

  tokenMatched(_ref9) {
    let element = _ref9.element,
        name = _ref9.content;

    if (this.scope.containsElement(element)) {
      this.connectTarget(element, name);
    }
  }

  tokenUnmatched(_ref10) {
    let element = _ref10.element,
        name = _ref10.content;
    this.disconnectTarget(element, name);
  }

  connectTarget(element, name) {
    var _a;

    if (!this.targetsByName.has(name, element)) {
      this.targetsByName.add(name, element);
      (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetConnected(element, name));
    }
  }

  disconnectTarget(element, name) {
    var _a;

    if (this.targetsByName.has(name, element)) {
      this.targetsByName.delete(name, element);
      (_a = this.tokenListObserver) === null || _a === void 0 ? void 0 : _a.pause(() => this.delegate.targetDisconnected(element, name));
    }
  }

  disconnectAllTargets() {
    for (const name of this.targetsByName.keys) {
      for (const element of this.targetsByName.getValuesForKey(name)) {
        this.disconnectTarget(element, name);
      }
    }
  }

  get attributeName() {
    return "data-".concat(this.context.identifier, "-target");
  }

  get element() {
    return this.context.element;
  }

  get scope() {
    return this.context.scope;
  }

}

class Context {
  constructor(module, scope) {
    var _this = this;

    this.logDebugActivity = function (functionName) {
      let detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const identifier = _this.identifier,
            controller = _this.controller,
            element = _this.element;
      detail = Object.assign({
        identifier,
        controller,
        element
      }, detail);

      _this.application.logDebugActivity(_this.identifier, functionName, detail);
    };

    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new BindingObserver(this, this.dispatcher);
    this.valueObserver = new ValueObserver(this, this.controller);
    this.targetObserver = new TargetObserver(this, this);

    try {
      this.controller.initialize();
      this.logDebugActivity("initialize");
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }

  connect() {
    this.bindingObserver.start();
    this.valueObserver.start();
    this.targetObserver.start();

    try {
      this.controller.connect();
      this.logDebugActivity("connect");
    } catch (error) {
      this.handleError(error, "connecting controller");
    }
  }

  disconnect() {
    try {
      this.controller.disconnect();
      this.logDebugActivity("disconnect");
    } catch (error) {
      this.handleError(error, "disconnecting controller");
    }

    this.targetObserver.stop();
    this.valueObserver.stop();
    this.bindingObserver.stop();
  }

  get application() {
    return this.module.application;
  }

  get identifier() {
    return this.module.identifier;
  }

  get schema() {
    return this.application.schema;
  }

  get dispatcher() {
    return this.application.dispatcher;
  }

  get element() {
    return this.scope.element;
  }

  get parentElement() {
    return this.element.parentElement;
  }

  handleError(error, message) {
    let detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const identifier = this.identifier,
          controller = this.controller,
          element = this.element;
    detail = Object.assign({
      identifier,
      controller,
      element
    }, detail);
    this.application.handleError(error, "Error ".concat(message), detail);
  }

  targetConnected(element, name) {
    this.invokeControllerMethod("".concat(name, "TargetConnected"), element);
  }

  targetDisconnected(element, name) {
    this.invokeControllerMethod("".concat(name, "TargetDisconnected"), element);
  }

  invokeControllerMethod(methodName) {
    const controller = this.controller;

    if (typeof controller[methodName] == "function") {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      controller[methodName](...args);
    }
  }

}

function readInheritableStaticArrayValues(constructor, propertyName) {
  const ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce((values, constructor) => {
    getOwnStaticArrayValues(constructor, propertyName).forEach(name => values.add(name));
    return values;
  }, new Set()));
}

function readInheritableStaticObjectPairs(constructor, propertyName) {
  const ancestors = getAncestorsForConstructor(constructor);
  return ancestors.reduce((pairs, constructor) => {
    pairs.push(...getOwnStaticObjectPairs(constructor, propertyName));
    return pairs;
  }, []);
}

function getAncestorsForConstructor(constructor) {
  const ancestors = [];

  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }

  return ancestors.reverse();
}

function getOwnStaticArrayValues(constructor, propertyName) {
  const definition = constructor[propertyName];
  return Array.isArray(definition) ? definition : [];
}

function getOwnStaticObjectPairs(constructor, propertyName) {
  const definition = constructor[propertyName];
  return definition ? Object.keys(definition).map(key => [key, definition[key]]) : [];
}

function bless(constructor) {
  return shadow(constructor, getBlessedProperties(constructor));
}

function shadow(constructor, properties) {
  const shadowConstructor = extend(constructor);
  const shadowProperties = getShadowProperties(constructor.prototype, properties);
  Object.defineProperties(shadowConstructor.prototype, shadowProperties);
  return shadowConstructor;
}

function getBlessedProperties(constructor) {
  const blessings = readInheritableStaticArrayValues(constructor, "blessings");
  return blessings.reduce((blessedProperties, blessing) => {
    const properties = blessing(constructor);

    for (const key in properties) {
      const descriptor = blessedProperties[key] || {};
      blessedProperties[key] = Object.assign(descriptor, properties[key]);
    }

    return blessedProperties;
  }, {});
}

function getShadowProperties(prototype, properties) {
  return getOwnKeys(properties).reduce((shadowProperties, key) => {
    const descriptor = getShadowedDescriptor(prototype, properties, key);

    if (descriptor) {
      Object.assign(shadowProperties, {
        [key]: descriptor
      });
    }

    return shadowProperties;
  }, {});
}

function getShadowedDescriptor(prototype, properties, key) {
  const shadowingDescriptor = Object.getOwnPropertyDescriptor(prototype, key);
  const shadowedByValue = shadowingDescriptor && "value" in shadowingDescriptor;

  if (!shadowedByValue) {
    const descriptor = Object.getOwnPropertyDescriptor(properties, key).value;

    if (shadowingDescriptor) {
      descriptor.get = shadowingDescriptor.get || descriptor.get;
      descriptor.set = shadowingDescriptor.set || descriptor.set;
    }

    return descriptor;
  }
}

const getOwnKeys = (() => {
  if (typeof Object.getOwnPropertySymbols == "function") {
    return object => [...Object.getOwnPropertyNames(object), ...Object.getOwnPropertySymbols(object)];
  } else {
    return Object.getOwnPropertyNames;
  }
})();

const extend = (() => {
  function extendWithReflect(constructor) {
    function extended() {
      return Reflect.construct(constructor, arguments, new.target);
    }

    extended.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: extended
      }
    });
    Reflect.setPrototypeOf(extended, constructor);
    return extended;
  }

  function testReflectExtension() {
    const a = function () {
      this.a.call(this);
    };

    const b = extendWithReflect(a);

    b.prototype.a = function () {};

    return new b();
  }

  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return constructor => class extended extends constructor {};
  }
})();

function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: bless(definition.controllerConstructor)
  };
}

class Module {
  constructor(application, definition) {
    this.application = application;
    this.definition = blessDefinition(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }

  get identifier() {
    return this.definition.identifier;
  }

  get controllerConstructor() {
    return this.definition.controllerConstructor;
  }

  get contexts() {
    return Array.from(this.connectedContexts);
  }

  connectContextForScope(scope) {
    const context = this.fetchContextForScope(scope);
    this.connectedContexts.add(context);
    context.connect();
  }

  disconnectContextForScope(scope) {
    const context = this.contextsByScope.get(scope);

    if (context) {
      this.connectedContexts.delete(context);
      context.disconnect();
    }
  }

  fetchContextForScope(scope) {
    let context = this.contextsByScope.get(scope);

    if (!context) {
      context = new Context(this, scope);
      this.contextsByScope.set(scope, context);
    }

    return context;
  }

}

class ClassMap {
  constructor(scope) {
    this.scope = scope;
  }

  has(name) {
    return this.data.has(this.getDataKey(name));
  }

  get(name) {
    return this.getAll(name)[0];
  }

  getAll(name) {
    const tokenString = this.data.get(this.getDataKey(name)) || "";
    return tokenize(tokenString);
  }

  getAttributeName(name) {
    return this.data.getAttributeNameForKey(this.getDataKey(name));
  }

  getDataKey(name) {
    return "".concat(name, "-class");
  }

  get data() {
    return this.scope.data;
  }

}

class DataMap {
  constructor(scope) {
    this.scope = scope;
  }

  get element() {
    return this.scope.element;
  }

  get identifier() {
    return this.scope.identifier;
  }

  get(key) {
    const name = this.getAttributeNameForKey(key);
    return this.element.getAttribute(name);
  }

  set(key, value) {
    const name = this.getAttributeNameForKey(key);
    this.element.setAttribute(name, value);
    return this.get(key);
  }

  has(key) {
    const name = this.getAttributeNameForKey(key);
    return this.element.hasAttribute(name);
  }

  delete(key) {
    if (this.has(key)) {
      const name = this.getAttributeNameForKey(key);
      this.element.removeAttribute(name);
      return true;
    } else {
      return false;
    }
  }

  getAttributeNameForKey(key) {
    return "data-".concat(this.identifier, "-").concat(dasherize(key));
  }

}

class Guide {
  constructor(logger) {
    this.warnedKeysByObject = new WeakMap();
    this.logger = logger;
  }

  warn(object, key, message) {
    let warnedKeys = this.warnedKeysByObject.get(object);

    if (!warnedKeys) {
      warnedKeys = new Set();
      this.warnedKeysByObject.set(object, warnedKeys);
    }

    if (!warnedKeys.has(key)) {
      warnedKeys.add(key);
      this.logger.warn(message, object);
    }
  }

}

function attributeValueContainsToken(attributeName, token) {
  return "[".concat(attributeName, "~=\"").concat(token, "\"]");
}

class TargetSet {
  constructor(scope) {
    this.scope = scope;
  }

  get element() {
    return this.scope.element;
  }

  get identifier() {
    return this.scope.identifier;
  }

  get schema() {
    return this.scope.schema;
  }

  has(targetName) {
    return this.find(targetName) != null;
  }

  find() {
    for (var _len2 = arguments.length, targetNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      targetNames[_key2] = arguments[_key2];
    }

    return targetNames.reduce((target, targetName) => target || this.findTarget(targetName) || this.findLegacyTarget(targetName), undefined);
  }

  findAll() {
    for (var _len3 = arguments.length, targetNames = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      targetNames[_key3] = arguments[_key3];
    }

    return targetNames.reduce((targets, targetName) => [...targets, ...this.findAllTargets(targetName), ...this.findAllLegacyTargets(targetName)], []);
  }

  findTarget(targetName) {
    const selector = this.getSelectorForTargetName(targetName);
    return this.scope.findElement(selector);
  }

  findAllTargets(targetName) {
    const selector = this.getSelectorForTargetName(targetName);
    return this.scope.findAllElements(selector);
  }

  getSelectorForTargetName(targetName) {
    const attributeName = this.schema.targetAttributeForScope(this.identifier);
    return attributeValueContainsToken(attributeName, targetName);
  }

  findLegacyTarget(targetName) {
    const selector = this.getLegacySelectorForTargetName(targetName);
    return this.deprecate(this.scope.findElement(selector), targetName);
  }

  findAllLegacyTargets(targetName) {
    const selector = this.getLegacySelectorForTargetName(targetName);
    return this.scope.findAllElements(selector).map(element => this.deprecate(element, targetName));
  }

  getLegacySelectorForTargetName(targetName) {
    const targetDescriptor = "".concat(this.identifier, ".").concat(targetName);
    return attributeValueContainsToken(this.schema.targetAttribute, targetDescriptor);
  }

  deprecate(element, targetName) {
    if (element) {
      const identifier = this.identifier;
      const attributeName = this.schema.targetAttribute;
      const revisedAttributeName = this.schema.targetAttributeForScope(identifier);
      this.guide.warn(element, "target:".concat(targetName), "Please replace ".concat(attributeName, "=\"").concat(identifier, ".").concat(targetName, "\" with ").concat(revisedAttributeName, "=\"").concat(targetName, "\". ") + "The ".concat(attributeName, " attribute is deprecated and will be removed in a future version of Stimulus."));
    }

    return element;
  }

  get guide() {
    return this.scope.guide;
  }

}

class Scope {
  constructor(schema, element, identifier, logger) {
    this.targets = new TargetSet(this);
    this.classes = new ClassMap(this);
    this.data = new DataMap(this);

    this.containsElement = element => {
      return element.closest(this.controllerSelector) === this.element;
    };

    this.schema = schema;
    this.element = element;
    this.identifier = identifier;
    this.guide = new Guide(logger);
  }

  findElement(selector) {
    return this.element.matches(selector) ? this.element : this.queryElements(selector).find(this.containsElement);
  }

  findAllElements(selector) {
    return [...(this.element.matches(selector) ? [this.element] : []), ...this.queryElements(selector).filter(this.containsElement)];
  }

  queryElements(selector) {
    return Array.from(this.element.querySelectorAll(selector));
  }

  get controllerSelector() {
    return attributeValueContainsToken(this.schema.controllerAttribute, this.identifier);
  }

}

class ScopeObserver {
  constructor(element, schema, delegate) {
    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new ValueListObserver(this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }

  start() {
    this.valueListObserver.start();
  }

  stop() {
    this.valueListObserver.stop();
  }

  get controllerAttribute() {
    return this.schema.controllerAttribute;
  }

  parseValueForToken(token) {
    const element = token.element,
          identifier = token.content;
    const scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
    let scope = scopesByIdentifier.get(identifier);

    if (!scope) {
      scope = this.delegate.createScopeForElementAndIdentifier(element, identifier);
      scopesByIdentifier.set(identifier, scope);
    }

    return scope;
  }

  elementMatchedValue(element, value) {
    const referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
    this.scopeReferenceCounts.set(value, referenceCount);

    if (referenceCount == 1) {
      this.delegate.scopeConnected(value);
    }
  }

  elementUnmatchedValue(element, value) {
    const referenceCount = this.scopeReferenceCounts.get(value);

    if (referenceCount) {
      this.scopeReferenceCounts.set(value, referenceCount - 1);

      if (referenceCount == 1) {
        this.delegate.scopeDisconnected(value);
      }
    }
  }

  fetchScopesByIdentifierForElement(element) {
    let scopesByIdentifier = this.scopesByIdentifierByElement.get(element);

    if (!scopesByIdentifier) {
      scopesByIdentifier = new Map();
      this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
    }

    return scopesByIdentifier;
  }

}

class Router {
  constructor(application) {
    this.application = application;
    this.scopeObserver = new ScopeObserver(this.element, this.schema, this);
    this.scopesByIdentifier = new Multimap();
    this.modulesByIdentifier = new Map();
  }

  get element() {
    return this.application.element;
  }

  get schema() {
    return this.application.schema;
  }

  get logger() {
    return this.application.logger;
  }

  get controllerAttribute() {
    return this.schema.controllerAttribute;
  }

  get modules() {
    return Array.from(this.modulesByIdentifier.values());
  }

  get contexts() {
    return this.modules.reduce((contexts, module) => contexts.concat(module.contexts), []);
  }

  start() {
    this.scopeObserver.start();
  }

  stop() {
    this.scopeObserver.stop();
  }

  loadDefinition(definition) {
    this.unloadIdentifier(definition.identifier);
    const module = new Module(this.application, definition);
    this.connectModule(module);
  }

  unloadIdentifier(identifier) {
    const module = this.modulesByIdentifier.get(identifier);

    if (module) {
      this.disconnectModule(module);
    }
  }

  getContextForElementAndIdentifier(element, identifier) {
    const module = this.modulesByIdentifier.get(identifier);

    if (module) {
      return module.contexts.find(context => context.element == element);
    }
  }

  handleError(error, message, detail) {
    this.application.handleError(error, message, detail);
  }

  createScopeForElementAndIdentifier(element, identifier) {
    return new Scope(this.schema, element, identifier, this.logger);
  }

  scopeConnected(scope) {
    this.scopesByIdentifier.add(scope.identifier, scope);
    const module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.connectContextForScope(scope);
    }
  }

  scopeDisconnected(scope) {
    this.scopesByIdentifier.delete(scope.identifier, scope);
    const module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.disconnectContextForScope(scope);
    }
  }

  connectModule(module) {
    this.modulesByIdentifier.set(module.identifier, module);
    const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(scope => module.connectContextForScope(scope));
  }

  disconnectModule(module) {
    this.modulesByIdentifier.delete(module.identifier);
    const scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(scope => module.disconnectContextForScope(scope));
  }

}

const defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target",
  targetAttributeForScope: identifier => "data-".concat(identifier, "-target")
};

class Application {
  constructor() {
    var _this2 = this;

    let element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
    let schema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSchema;
    this.logger = console;
    this.debug = false;

    this.logDebugActivity = function (identifier, functionName) {
      let detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (_this2.debug) {
        _this2.logFormattedMessage(identifier, functionName, detail);
      }
    };

    this.element = element;
    this.schema = schema;
    this.dispatcher = new Dispatcher(this);
    this.router = new Router(this);
  }

  static start(element, schema) {
    const application = new Application(element, schema);
    application.start();
    return application;
  }

  async start() {
    await domReady();
    this.logDebugActivity("application", "starting");
    this.dispatcher.start();
    this.router.start();
    this.logDebugActivity("application", "start");
  }

  stop() {
    this.logDebugActivity("application", "stopping");
    this.dispatcher.stop();
    this.router.stop();
    this.logDebugActivity("application", "stop");
  }

  register(identifier, controllerConstructor) {
    this.load({
      identifier,
      controllerConstructor
    });
  }

  load(head) {
    for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      rest[_key4 - 1] = arguments[_key4];
    }

    const definitions = Array.isArray(head) ? head : [head, ...rest];
    definitions.forEach(definition => {
      if (definition.controllerConstructor.shouldLoad) {
        this.router.loadDefinition(definition);
      }
    });
  }

  unload(head) {
    for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      rest[_key5 - 1] = arguments[_key5];
    }

    const identifiers = Array.isArray(head) ? head : [head, ...rest];
    identifiers.forEach(identifier => this.router.unloadIdentifier(identifier));
  }

  get controllers() {
    return this.router.contexts.map(context => context.controller);
  }

  getControllerForElementAndIdentifier(element, identifier) {
    const context = this.router.getContextForElementAndIdentifier(element, identifier);
    return context ? context.controller : null;
  }

  handleError(error, message, detail) {
    var _a;

    this.logger.error("%s\n\n%o\n\n%o", message, error, detail);
    (_a = window.onerror) === null || _a === void 0 ? void 0 : _a.call(window, message, "", 0, 0, error);
  }

  logFormattedMessage(identifier, functionName) {
    let detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    detail = Object.assign({
      application: this
    }, detail);
    this.logger.groupCollapsed("".concat(identifier, " #").concat(functionName));
    this.logger.log("details:", Object.assign({}, detail));
    this.logger.groupEnd();
  }

}

function domReady() {
  return new Promise(resolve => {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", () => resolve());
    } else {
      resolve();
    }
  });
}

function ClassPropertiesBlessing(constructor) {
  const classes = readInheritableStaticArrayValues(constructor, "classes");
  return classes.reduce((properties, classDefinition) => {
    return Object.assign(properties, propertiesForClassDefinition(classDefinition));
  }, {});
}

function propertiesForClassDefinition(key) {
  return {
    ["".concat(key, "Class")]: {
      get() {
        const classes = this.classes;

        if (classes.has(key)) {
          return classes.get(key);
        } else {
          const attribute = classes.getAttributeName(key);
          throw new Error("Missing attribute \"".concat(attribute, "\""));
        }
      }

    },
    ["".concat(key, "Classes")]: {
      get() {
        return this.classes.getAll(key);
      }

    },
    ["has".concat(capitalize(key), "Class")]: {
      get() {
        return this.classes.has(key);
      }

    }
  };
}

function TargetPropertiesBlessing(constructor) {
  const targets = readInheritableStaticArrayValues(constructor, "targets");
  return targets.reduce((properties, targetDefinition) => {
    return Object.assign(properties, propertiesForTargetDefinition(targetDefinition));
  }, {});
}

function propertiesForTargetDefinition(name) {
  return {
    ["".concat(name, "Target")]: {
      get() {
        const target = this.targets.find(name);

        if (target) {
          return target;
        } else {
          throw new Error("Missing target element \"".concat(name, "\" for \"").concat(this.identifier, "\" controller"));
        }
      }

    },
    ["".concat(name, "Targets")]: {
      get() {
        return this.targets.findAll(name);
      }

    },
    ["has".concat(capitalize(name), "Target")]: {
      get() {
        return this.targets.has(name);
      }

    }
  };
}

function ValuePropertiesBlessing(constructor) {
  const valueDefinitionPairs = readInheritableStaticObjectPairs(constructor, "values");
  const propertyDescriptorMap = {
    valueDescriptorMap: {
      get() {
        return valueDefinitionPairs.reduce((result, valueDefinitionPair) => {
          const valueDescriptor = parseValueDefinitionPair(valueDefinitionPair, this.identifier);
          const attributeName = this.data.getAttributeNameForKey(valueDescriptor.key);
          return Object.assign(result, {
            [attributeName]: valueDescriptor
          });
        }, {});
      }

    }
  };
  return valueDefinitionPairs.reduce((properties, valueDefinitionPair) => {
    return Object.assign(properties, propertiesForValueDefinitionPair(valueDefinitionPair));
  }, propertyDescriptorMap);
}

function propertiesForValueDefinitionPair(valueDefinitionPair, controller) {
  const definition = parseValueDefinitionPair(valueDefinitionPair, controller);
  const key = definition.key,
        name = definition.name,
        read = definition.reader,
        write = definition.writer;
  return {
    [name]: {
      get() {
        const value = this.data.get(key);

        if (value !== null) {
          return read(value);
        } else {
          return definition.defaultValue;
        }
      },

      set(value) {
        if (value === undefined) {
          this.data.delete(key);
        } else {
          this.data.set(key, write(value));
        }
      }

    },
    ["has".concat(capitalize(name))]: {
      get() {
        return this.data.has(key) || definition.hasCustomDefaultValue;
      }

    }
  };
}

function parseValueDefinitionPair(_ref11, controller) {
  let _ref12 = _slicedToArray(_ref11, 2),
      token = _ref12[0],
      typeDefinition = _ref12[1];

  return valueDescriptorForTokenAndTypeDefinition({
    controller,
    token,
    typeDefinition
  });
}

function parseValueTypeConstant(constant) {
  switch (constant) {
    case Array:
      return "array";

    case Boolean:
      return "boolean";

    case Number:
      return "number";

    case Object:
      return "object";

    case String:
      return "string";
  }
}

function parseValueTypeDefault(defaultValue) {
  switch (typeof defaultValue) {
    case "boolean":
      return "boolean";

    case "number":
      return "number";

    case "string":
      return "string";
  }

  if (Array.isArray(defaultValue)) return "array";
  if (Object.prototype.toString.call(defaultValue) === "[object Object]") return "object";
}

function parseValueTypeObject(payload) {
  const typeFromObject = parseValueTypeConstant(payload.typeObject.type);
  if (!typeFromObject) return;
  const defaultValueType = parseValueTypeDefault(payload.typeObject.default);

  if (typeFromObject !== defaultValueType) {
    const propertyPath = payload.controller ? "".concat(payload.controller, ".").concat(payload.token) : payload.token;
    throw new Error("The specified default value for the Stimulus Value \"".concat(propertyPath, "\" must match the defined type \"").concat(typeFromObject, "\". The provided default value of \"").concat(payload.typeObject.default, "\" is of type \"").concat(defaultValueType, "\"."));
  }

  return typeFromObject;
}

function parseValueTypeDefinition(payload) {
  const typeFromObject = parseValueTypeObject({
    controller: payload.controller,
    token: payload.token,
    typeObject: payload.typeDefinition
  });
  const typeFromDefaultValue = parseValueTypeDefault(payload.typeDefinition);
  const typeFromConstant = parseValueTypeConstant(payload.typeDefinition);
  const type = typeFromObject || typeFromDefaultValue || typeFromConstant;
  if (type) return type;
  const propertyPath = payload.controller ? "".concat(payload.controller, ".").concat(payload.typeDefinition) : payload.token;
  throw new Error("Unknown value type \"".concat(propertyPath, "\" for \"").concat(payload.token, "\" value"));
}

function defaultValueForDefinition(typeDefinition) {
  const constant = parseValueTypeConstant(typeDefinition);
  if (constant) return defaultValuesByType[constant];
  const defaultValue = typeDefinition.default;
  if (defaultValue !== undefined) return defaultValue;
  return typeDefinition;
}

function valueDescriptorForTokenAndTypeDefinition(payload) {
  const key = "".concat(dasherize(payload.token), "-value");
  const type = parseValueTypeDefinition(payload);
  return {
    type,
    key,
    name: camelize(key),

    get defaultValue() {
      return defaultValueForDefinition(payload.typeDefinition);
    },

    get hasCustomDefaultValue() {
      return parseValueTypeDefault(payload.typeDefinition) !== undefined;
    },

    reader: readers[type],
    writer: writers[type] || writers.default
  };
}

const defaultValuesByType = {
  get array() {
    return [];
  },

  boolean: false,
  number: 0,

  get object() {
    return {};
  },

  string: ""
};
const readers = {
  array(value) {
    const array = JSON.parse(value);

    if (!Array.isArray(array)) {
      throw new TypeError("expected value of type \"array\" but instead got value \"".concat(value, "\" of type \"").concat(parseValueTypeDefault(array), "\""));
    }

    return array;
  },

  boolean(value) {
    return !(value == "0" || String(value).toLowerCase() == "false");
  },

  number(value) {
    return Number(value);
  },

  object(value) {
    const object = JSON.parse(value);

    if (object === null || typeof object != "object" || Array.isArray(object)) {
      throw new TypeError("expected value of type \"object\" but instead got value \"".concat(value, "\" of type \"").concat(parseValueTypeDefault(object), "\""));
    }

    return object;
  },

  string(value) {
    return value;
  }

};
const writers = {
  default: writeString,
  array: writeJSON,
  object: writeJSON
};

function writeJSON(value) {
  return JSON.stringify(value);
}

function writeString(value) {
  return "".concat(value);
}

class Controller {
  constructor(context) {
    this.context = context;
  }

  static get shouldLoad() {
    return true;
  }

  get application() {
    return this.context.application;
  }

  get scope() {
    return this.context.scope;
  }

  get element() {
    return this.scope.element;
  }

  get identifier() {
    return this.scope.identifier;
  }

  get targets() {
    return this.scope.targets;
  }

  get classes() {
    return this.scope.classes;
  }

  get data() {
    return this.scope.data;
  }

  initialize() {}

  connect() {}

  disconnect() {}

  dispatch(eventName) {
    let _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref13$target = _ref13.target,
        target = _ref13$target === void 0 ? this.element : _ref13$target,
        _ref13$detail = _ref13.detail,
        detail = _ref13$detail === void 0 ? {} : _ref13$detail,
        _ref13$prefix = _ref13.prefix,
        prefix = _ref13$prefix === void 0 ? this.identifier : _ref13$prefix,
        _ref13$bubbles = _ref13.bubbles,
        bubbles = _ref13$bubbles === void 0 ? true : _ref13$bubbles,
        _ref13$cancelable = _ref13.cancelable,
        cancelable = _ref13$cancelable === void 0 ? true : _ref13$cancelable;

    const type = prefix ? "".concat(prefix, ":").concat(eventName) : eventName;
    const event = new CustomEvent(type, {
      detail,
      bubbles,
      cancelable
    });
    target.dispatchEvent(event);
    return event;
  }

}

Controller.blessings = [ClassPropertiesBlessing, TargetPropertiesBlessing, ValuePropertiesBlessing];
Controller.targets = [];
Controller.values = {};


/***/ }),

/***/ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js ***!
  \***************************************************************/
/*! exports provided: PageRenderer, PageSnapshot, clearCache, connectStreamSource, disconnectStreamSource, navigator, registerAdapter, renderStreamMessage, session, setConfirmMethod, setProgressBarDelay, start, visit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return PageRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSnapshot", function() { return PageSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCache", function() { return clearCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectStreamSource", function() { return connectStreamSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectStreamSource", function() { return disconnectStreamSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAdapter", function() { return registerAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderStreamMessage", function() { return renderStreamMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "session", function() { return session; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConfirmMethod", function() { return setConfirmMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgressBarDelay", function() { return setProgressBarDelay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
Turbo 7.1.0
Copyright © 2021 Basecamp, LLC
 */
(function () {
  if (window.Reflect === undefined || window.customElements === undefined || window.customElements.polyfillWrapFlushCallback) {
    return;
  }

  const BuiltInHTMLElement = HTMLElement;
  const wrapperForTheName = {
    'HTMLElement': function HTMLElement() {
      return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
    }
  };
  window.HTMLElement = wrapperForTheName['HTMLElement'];
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();
/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2019 Javan Makhmali
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


(function (prototype) {
  if (typeof prototype.requestSubmit == "function") return;

  prototype.requestSubmit = function (submitter) {
    if (submitter) {
      validateSubmitter(submitter, this);
      submitter.click();
    } else {
      submitter = document.createElement("input");
      submitter.type = "submit";
      submitter.hidden = true;
      this.appendChild(submitter);
      submitter.click();
      this.removeChild(submitter);
    }
  };

  function validateSubmitter(submitter, form) {
    submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'");
    submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button");
    submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError");
  }

  function raise(errorConstructor, message, name) {
    throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name);
  }
})(HTMLFormElement.prototype);

const submittersByForm = new WeakMap();

function findSubmitterFromClickTarget(target) {
  const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
  const candidate = element ? element.closest("input, button") : null;
  return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
}

function clickCaptured(event) {
  const submitter = findSubmitterFromClickTarget(event.target);

  if (submitter && submitter.form) {
    submittersByForm.set(submitter.form, submitter);
  }
}

(function () {
  if ("submitter" in Event.prototype) return;
  let prototype;

  if ("SubmitEvent" in window && /Apple Computer/.test(navigator.vendor)) {
    prototype = window.SubmitEvent.prototype;
  } else if ("SubmitEvent" in window) {
    return;
  } else {
    prototype = window.Event.prototype;
  }

  addEventListener("click", clickCaptured, true);
  Object.defineProperty(prototype, "submitter", {
    get() {
      if (this.type == "submit" && this.target instanceof HTMLFormElement) {
        return submittersByForm.get(this.target);
      }
    }

  });
})();

var FrameLoadingStyle;

(function (FrameLoadingStyle) {
  FrameLoadingStyle["eager"] = "eager";
  FrameLoadingStyle["lazy"] = "lazy";
})(FrameLoadingStyle || (FrameLoadingStyle = {}));

class FrameElement extends HTMLElement {
  constructor() {
    super();
    this.loaded = Promise.resolve();
    this.delegate = new FrameElement.delegateConstructor(this);
  }

  static get observedAttributes() {
    return ["disabled", "loading", "src"];
  }

  connectedCallback() {
    this.delegate.connect();
  }

  disconnectedCallback() {
    this.delegate.disconnect();
  }

  reload() {
    const src = this.src;
    this.src = null;
    this.src = src;
  }

  attributeChangedCallback(name) {
    if (name == "loading") {
      this.delegate.loadingStyleChanged();
    } else if (name == "src") {
      this.delegate.sourceURLChanged();
    } else {
      this.delegate.disabledChanged();
    }
  }

  get src() {
    return this.getAttribute("src");
  }

  set src(value) {
    if (value) {
      this.setAttribute("src", value);
    } else {
      this.removeAttribute("src");
    }
  }

  get loading() {
    return frameLoadingStyleFromString(this.getAttribute("loading") || "");
  }

  set loading(value) {
    if (value) {
      this.setAttribute("loading", value);
    } else {
      this.removeAttribute("loading");
    }
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(value) {
    if (value) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  get autoscroll() {
    return this.hasAttribute("autoscroll");
  }

  set autoscroll(value) {
    if (value) {
      this.setAttribute("autoscroll", "");
    } else {
      this.removeAttribute("autoscroll");
    }
  }

  get complete() {
    return !this.delegate.isLoading;
  }

  get isActive() {
    return this.ownerDocument === document && !this.isPreview;
  }

  get isPreview() {
    var _a, _b;

    return (_b = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("data-turbo-preview");
  }

}

function frameLoadingStyleFromString(style) {
  switch (style.toLowerCase()) {
    case "lazy":
      return FrameLoadingStyle.lazy;

    default:
      return FrameLoadingStyle.eager;
  }
}

function expandURL(locatable) {
  return new URL(locatable.toString(), document.baseURI);
}

function getAnchor(url) {
  let anchorMatch;

  if (url.hash) {
    return url.hash.slice(1);
  } else if (anchorMatch = url.href.match(/#(.*)$/)) {
    return anchorMatch[1];
  }
}

function getAction(form, submitter) {
  const action = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formaction")) || form.getAttribute("action") || form.action;
  return expandURL(action);
}

function getExtension(url) {
  return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
}

function isHTML(url) {
  return !!getExtension(url).match(/^(?:|\.(?:htm|html|xhtml))$/);
}

function isPrefixedBy(baseURL, url) {
  const prefix = getPrefix(url);
  return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
}

function locationIsVisitable(location, rootLocation) {
  return isPrefixedBy(location, rootLocation) && isHTML(location);
}

function getRequestURL(url) {
  const anchor = getAnchor(url);
  return anchor != null ? url.href.slice(0, -(anchor.length + 1)) : url.href;
}

function toCacheKey(url) {
  return getRequestURL(url);
}

function urlsAreEqual(left, right) {
  return expandURL(left).href == expandURL(right).href;
}

function getPathComponents(url) {
  return url.pathname.split("/").slice(1);
}

function getLastPathComponent(url) {
  return getPathComponents(url).slice(-1)[0];
}

function getPrefix(url) {
  return addTrailingSlash(url.origin + url.pathname);
}

function addTrailingSlash(value) {
  return value.endsWith("/") ? value : value + "/";
}

class FetchResponse {
  constructor(response) {
    this.response = response;
  }

  get succeeded() {
    return this.response.ok;
  }

  get failed() {
    return !this.succeeded;
  }

  get clientError() {
    return this.statusCode >= 400 && this.statusCode <= 499;
  }

  get serverError() {
    return this.statusCode >= 500 && this.statusCode <= 599;
  }

  get redirected() {
    return this.response.redirected;
  }

  get location() {
    return expandURL(this.response.url);
  }

  get isHTML() {
    return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
  }

  get statusCode() {
    return this.response.status;
  }

  get contentType() {
    return this.header("Content-Type");
  }

  get responseText() {
    return this.response.clone().text();
  }

  get responseHTML() {
    if (this.isHTML) {
      return this.response.clone().text();
    } else {
      return Promise.resolve(undefined);
    }
  }

  header(name) {
    return this.response.headers.get(name);
  }

}

function dispatch(eventName) {
  let _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      target = _ref.target,
      cancelable = _ref.cancelable,
      detail = _ref.detail;

  const event = new CustomEvent(eventName, {
    cancelable,
    bubbles: true,
    detail
  });

  if (target && target.isConnected) {
    target.dispatchEvent(event);
  } else {
    document.documentElement.dispatchEvent(event);
  }

  return event;
}

function nextAnimationFrame() {
  return new Promise(resolve => requestAnimationFrame(() => resolve()));
}

function nextEventLoopTick() {
  return new Promise(resolve => setTimeout(() => resolve(), 0));
}

function nextMicrotask() {
  return Promise.resolve();
}

function parseHTMLDocument() {
  let html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return new DOMParser().parseFromString(html, "text/html");
}

function unindent(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  const lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
  const match = lines[0].match(/^\s+/);
  const indent = match ? match[0].length : 0;
  return lines.map(line => line.slice(indent)).join("\n");
}

function interpolate(strings, values) {
  return strings.reduce((result, string, i) => {
    const value = values[i] == undefined ? "" : values[i];
    return result + string + value;
  }, "");
}

function uuid() {
  return Array.apply(null, {
    length: 36
  }).map((_, i) => {
    if (i == 8 || i == 13 || i == 18 || i == 23) {
      return "-";
    } else if (i == 14) {
      return "4";
    } else if (i == 19) {
      return (Math.floor(Math.random() * 4) + 8).toString(16);
    } else {
      return Math.floor(Math.random() * 15).toString(16);
    }
  }).join("");
}

function getAttribute(attributeName) {
  for (var _len2 = arguments.length, elements = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    elements[_key2 - 1] = arguments[_key2];
  }

  for (const value of elements.map(element => element === null || element === void 0 ? void 0 : element.getAttribute(attributeName))) {
    if (typeof value == "string") return value;
  }

  return null;
}

function markAsBusy() {
  for (var _len3 = arguments.length, elements = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    elements[_key3] = arguments[_key3];
  }

  for (const element of elements) {
    if (element.localName == "turbo-frame") {
      element.setAttribute("busy", "");
    }

    element.setAttribute("aria-busy", "true");
  }
}

function clearBusyState() {
  for (var _len4 = arguments.length, elements = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    elements[_key4] = arguments[_key4];
  }

  for (const element of elements) {
    if (element.localName == "turbo-frame") {
      element.removeAttribute("busy");
    }

    element.removeAttribute("aria-busy");
  }
}

var FetchMethod;

(function (FetchMethod) {
  FetchMethod[FetchMethod["get"] = 0] = "get";
  FetchMethod[FetchMethod["post"] = 1] = "post";
  FetchMethod[FetchMethod["put"] = 2] = "put";
  FetchMethod[FetchMethod["patch"] = 3] = "patch";
  FetchMethod[FetchMethod["delete"] = 4] = "delete";
})(FetchMethod || (FetchMethod = {}));

function fetchMethodFromString(method) {
  switch (method.toLowerCase()) {
    case "get":
      return FetchMethod.get;

    case "post":
      return FetchMethod.post;

    case "put":
      return FetchMethod.put;

    case "patch":
      return FetchMethod.patch;

    case "delete":
      return FetchMethod.delete;
  }
}

class FetchRequest {
  constructor(delegate, method, location) {
    let body = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new URLSearchParams();
    let target = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    this.abortController = new AbortController();

    this.resolveRequestPromise = value => {};

    this.delegate = delegate;
    this.method = method;
    this.headers = this.defaultHeaders;
    this.body = body;
    this.url = location;
    this.target = target;
  }

  get location() {
    return this.url;
  }

  get params() {
    return this.url.searchParams;
  }

  get entries() {
    return this.body ? Array.from(this.body.entries()) : [];
  }

  cancel() {
    this.abortController.abort();
  }

  async perform() {
    var _a, _b;

    const fetchOptions = this.fetchOptions;
    (_b = (_a = this.delegate).prepareHeadersForRequest) === null || _b === void 0 ? void 0 : _b.call(_a, this.headers, this);
    await this.allowRequestToBeIntercepted(fetchOptions);

    try {
      this.delegate.requestStarted(this);
      const response = await fetch(this.url.href, fetchOptions);
      return await this.receive(response);
    } catch (error) {
      if (error.name !== 'AbortError') {
        this.delegate.requestErrored(this, error);
        throw error;
      }
    } finally {
      this.delegate.requestFinished(this);
    }
  }

  async receive(response) {
    const fetchResponse = new FetchResponse(response);
    const event = dispatch("turbo:before-fetch-response", {
      cancelable: true,
      detail: {
        fetchResponse
      },
      target: this.target
    });

    if (event.defaultPrevented) {
      this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
    } else if (fetchResponse.succeeded) {
      this.delegate.requestSucceededWithResponse(this, fetchResponse);
    } else {
      this.delegate.requestFailedWithResponse(this, fetchResponse);
    }

    return fetchResponse;
  }

  get fetchOptions() {
    var _a;

    return {
      method: FetchMethod[this.method].toUpperCase(),
      credentials: "same-origin",
      headers: this.headers,
      redirect: "follow",
      body: this.isIdempotent ? null : this.body,
      signal: this.abortSignal,
      referrer: (_a = this.delegate.referrer) === null || _a === void 0 ? void 0 : _a.href
    };
  }

  get defaultHeaders() {
    return {
      "Accept": "text/html, application/xhtml+xml"
    };
  }

  get isIdempotent() {
    return this.method == FetchMethod.get;
  }

  get abortSignal() {
    return this.abortController.signal;
  }

  async allowRequestToBeIntercepted(fetchOptions) {
    const requestInterception = new Promise(resolve => this.resolveRequestPromise = resolve);
    const event = dispatch("turbo:before-fetch-request", {
      cancelable: true,
      detail: {
        fetchOptions,
        url: this.url,
        resume: this.resolveRequestPromise
      },
      target: this.target
    });
    if (event.defaultPrevented) await requestInterception;
  }

}

class AppearanceObserver {
  constructor(delegate, element) {
    this.started = false;

    this.intersect = entries => {
      const lastEntry = entries.slice(-1)[0];

      if (lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.isIntersecting) {
        this.delegate.elementAppearedInViewport(this.element);
      }
    };

    this.delegate = delegate;
    this.element = element;
    this.intersectionObserver = new IntersectionObserver(this.intersect);
  }

  start() {
    if (!this.started) {
      this.started = true;
      this.intersectionObserver.observe(this.element);
    }
  }

  stop() {
    if (this.started) {
      this.started = false;
      this.intersectionObserver.unobserve(this.element);
    }
  }

}

class StreamMessage {
  constructor(html) {
    this.templateElement = document.createElement("template");
    this.templateElement.innerHTML = html;
  }

  static wrap(message) {
    if (typeof message == "string") {
      return new this(message);
    } else {
      return message;
    }
  }

  get fragment() {
    const fragment = document.createDocumentFragment();

    for (const element of this.foreignElements) {
      fragment.appendChild(document.importNode(element, true));
    }

    return fragment;
  }

  get foreignElements() {
    return this.templateChildren.reduce((streamElements, child) => {
      if (child.tagName.toLowerCase() == "turbo-stream") {
        return [...streamElements, child];
      } else {
        return streamElements;
      }
    }, []);
  }

  get templateChildren() {
    return Array.from(this.templateElement.content.children);
  }

}

StreamMessage.contentType = "text/vnd.turbo-stream.html";
var FormSubmissionState;

(function (FormSubmissionState) {
  FormSubmissionState[FormSubmissionState["initialized"] = 0] = "initialized";
  FormSubmissionState[FormSubmissionState["requesting"] = 1] = "requesting";
  FormSubmissionState[FormSubmissionState["waiting"] = 2] = "waiting";
  FormSubmissionState[FormSubmissionState["receiving"] = 3] = "receiving";
  FormSubmissionState[FormSubmissionState["stopping"] = 4] = "stopping";
  FormSubmissionState[FormSubmissionState["stopped"] = 5] = "stopped";
})(FormSubmissionState || (FormSubmissionState = {}));

var FormEnctype;

(function (FormEnctype) {
  FormEnctype["urlEncoded"] = "application/x-www-form-urlencoded";
  FormEnctype["multipart"] = "multipart/form-data";
  FormEnctype["plain"] = "text/plain";
})(FormEnctype || (FormEnctype = {}));

function formEnctypeFromString(encoding) {
  switch (encoding.toLowerCase()) {
    case FormEnctype.multipart:
      return FormEnctype.multipart;

    case FormEnctype.plain:
      return FormEnctype.plain;

    default:
      return FormEnctype.urlEncoded;
  }
}

class FormSubmission {
  constructor(delegate, formElement, submitter) {
    let mustRedirect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    this.state = FormSubmissionState.initialized;
    this.delegate = delegate;
    this.formElement = formElement;
    this.submitter = submitter;
    this.formData = buildFormData(formElement, submitter);
    this.location = expandURL(this.action);

    if (this.method == FetchMethod.get) {
      mergeFormDataEntries(this.location, [...this.body.entries()]);
    }

    this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body, this.formElement);
    this.mustRedirect = mustRedirect;
  }

  static confirmMethod(message, element) {
    return confirm(message);
  }

  get method() {
    var _a;

    const method = ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "";
    return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
  }

  get action() {
    var _a;

    const formElementAction = typeof this.formElement.action === 'string' ? this.formElement.action : null;
    return ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formaction")) || this.formElement.getAttribute("action") || formElementAction || "";
  }

  get body() {
    if (this.enctype == FormEnctype.urlEncoded || this.method == FetchMethod.get) {
      return new URLSearchParams(this.stringFormData);
    } else {
      return this.formData;
    }
  }

  get enctype() {
    var _a;

    return formEnctypeFromString(((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formenctype")) || this.formElement.enctype);
  }

  get isIdempotent() {
    return this.fetchRequest.isIdempotent;
  }

  get stringFormData() {
    return [...this.formData].reduce((entries, _ref2) => {
      let _ref3 = _slicedToArray(_ref2, 2),
          name = _ref3[0],
          value = _ref3[1];

      return entries.concat(typeof value == "string" ? [[name, value]] : []);
    }, []);
  }

  get confirmationMessage() {
    return this.formElement.getAttribute("data-turbo-confirm");
  }

  get needsConfirmation() {
    return this.confirmationMessage !== null;
  }

  async start() {
    const _FormSubmissionState = FormSubmissionState,
          initialized = _FormSubmissionState.initialized,
          requesting = _FormSubmissionState.requesting;

    if (this.needsConfirmation) {
      const answer = FormSubmission.confirmMethod(this.confirmationMessage, this.formElement);

      if (!answer) {
        return;
      }
    }

    if (this.state == initialized) {
      this.state = requesting;
      return this.fetchRequest.perform();
    }
  }

  stop() {
    const _FormSubmissionState2 = FormSubmissionState,
          stopping = _FormSubmissionState2.stopping,
          stopped = _FormSubmissionState2.stopped;

    if (this.state != stopping && this.state != stopped) {
      this.state = stopping;
      this.fetchRequest.cancel();
      return true;
    }
  }

  prepareHeadersForRequest(headers, request) {
    if (!request.isIdempotent) {
      const token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");

      if (token) {
        headers["X-CSRF-Token"] = token;
      }

      headers["Accept"] = [StreamMessage.contentType, headers["Accept"]].join(", ");
    }
  }

  requestStarted(request) {
    var _a;

    this.state = FormSubmissionState.waiting;
    (_a = this.submitter) === null || _a === void 0 ? void 0 : _a.setAttribute("disabled", "");
    dispatch("turbo:submit-start", {
      target: this.formElement,
      detail: {
        formSubmission: this
      }
    });
    this.delegate.formSubmissionStarted(this);
  }

  requestPreventedHandlingResponse(request, response) {
    this.result = {
      success: response.succeeded,
      fetchResponse: response
    };
  }

  requestSucceededWithResponse(request, response) {
    if (response.clientError || response.serverError) {
      this.delegate.formSubmissionFailedWithResponse(this, response);
    } else if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
      const error = new Error("Form responses must redirect to another location");
      this.delegate.formSubmissionErrored(this, error);
    } else {
      this.state = FormSubmissionState.receiving;
      this.result = {
        success: true,
        fetchResponse: response
      };
      this.delegate.formSubmissionSucceededWithResponse(this, response);
    }
  }

  requestFailedWithResponse(request, response) {
    this.result = {
      success: false,
      fetchResponse: response
    };
    this.delegate.formSubmissionFailedWithResponse(this, response);
  }

  requestErrored(request, error) {
    this.result = {
      success: false,
      error
    };
    this.delegate.formSubmissionErrored(this, error);
  }

  requestFinished(request) {
    var _a;

    this.state = FormSubmissionState.stopped;
    (_a = this.submitter) === null || _a === void 0 ? void 0 : _a.removeAttribute("disabled");
    dispatch("turbo:submit-end", {
      target: this.formElement,
      detail: Object.assign({
        formSubmission: this
      }, this.result)
    });
    this.delegate.formSubmissionFinished(this);
  }

  requestMustRedirect(request) {
    return !request.isIdempotent && this.mustRedirect;
  }

}

function buildFormData(formElement, submitter) {
  const formData = new FormData(formElement);
  const name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
  const value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");

  if (name && value != null && formData.get(name) != value) {
    formData.append(name, value);
  }

  return formData;
}

function getCookieValue(cookieName) {
  if (cookieName != null) {
    const cookies = document.cookie ? document.cookie.split("; ") : [];
    const cookie = cookies.find(cookie => cookie.startsWith(cookieName));

    if (cookie) {
      const value = cookie.split("=").slice(1).join("=");
      return value ? decodeURIComponent(value) : undefined;
    }
  }
}

function getMetaContent(name) {
  const element = document.querySelector("meta[name=\"".concat(name, "\"]"));
  return element && element.content;
}

function responseSucceededWithoutRedirect(response) {
  return response.statusCode == 200 && !response.redirected;
}

function mergeFormDataEntries(url, entries) {
  const searchParams = new URLSearchParams();

  for (const _ref4 of entries) {
    var _ref5 = _slicedToArray(_ref4, 2);

    const name = _ref5[0];
    const value = _ref5[1];
    if (value instanceof File) continue;
    searchParams.append(name, value);
  }

  url.search = searchParams.toString();
  return url;
}

class Snapshot {
  constructor(element) {
    this.element = element;
  }

  get children() {
    return [...this.element.children];
  }

  hasAnchor(anchor) {
    return this.getElementForAnchor(anchor) != null;
  }

  getElementForAnchor(anchor) {
    return anchor ? this.element.querySelector("[id='".concat(anchor, "'], a[name='").concat(anchor, "']")) : null;
  }

  get isConnected() {
    return this.element.isConnected;
  }

  get firstAutofocusableElement() {
    return this.element.querySelector("[autofocus]");
  }

  get permanentElements() {
    return [...this.element.querySelectorAll("[id][data-turbo-permanent]")];
  }

  getPermanentElementById(id) {
    return this.element.querySelector("#".concat(id, "[data-turbo-permanent]"));
  }

  getPermanentElementMapForSnapshot(snapshot) {
    const permanentElementMap = {};

    for (const currentPermanentElement of this.permanentElements) {
      const id = currentPermanentElement.id;
      const newPermanentElement = snapshot.getPermanentElementById(id);

      if (newPermanentElement) {
        permanentElementMap[id] = [currentPermanentElement, newPermanentElement];
      }
    }

    return permanentElementMap;
  }

}

class FormInterceptor {
  constructor(delegate, element) {
    this.submitBubbled = event => {
      const form = event.target;

      if (!event.defaultPrevented && form instanceof HTMLFormElement && form.closest("turbo-frame, html") == this.element) {
        const submitter = event.submitter || undefined;
        const method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.method;

        if (method != "dialog" && this.delegate.shouldInterceptFormSubmission(form, submitter)) {
          event.preventDefault();
          event.stopImmediatePropagation();
          this.delegate.formSubmissionIntercepted(form, submitter);
        }
      }
    };

    this.delegate = delegate;
    this.element = element;
  }

  start() {
    this.element.addEventListener("submit", this.submitBubbled);
  }

  stop() {
    this.element.removeEventListener("submit", this.submitBubbled);
  }

}

class View {
  constructor(delegate, element) {
    this.resolveRenderPromise = value => {};

    this.resolveInterceptionPromise = value => {};

    this.delegate = delegate;
    this.element = element;
  }

  scrollToAnchor(anchor) {
    const element = this.snapshot.getElementForAnchor(anchor);

    if (element) {
      this.scrollToElement(element);
      this.focusElement(element);
    } else {
      this.scrollToPosition({
        x: 0,
        y: 0
      });
    }
  }

  scrollToAnchorFromLocation(location) {
    this.scrollToAnchor(getAnchor(location));
  }

  scrollToElement(element) {
    element.scrollIntoView();
  }

  focusElement(element) {
    if (element instanceof HTMLElement) {
      if (element.hasAttribute("tabindex")) {
        element.focus();
      } else {
        element.setAttribute("tabindex", "-1");
        element.focus();
        element.removeAttribute("tabindex");
      }
    }
  }

  scrollToPosition(_ref6) {
    let x = _ref6.x,
        y = _ref6.y;
    this.scrollRoot.scrollTo(x, y);
  }

  scrollToTop() {
    this.scrollToPosition({
      x: 0,
      y: 0
    });
  }

  get scrollRoot() {
    return window;
  }

  async render(renderer) {
    const isPreview = renderer.isPreview,
          shouldRender = renderer.shouldRender,
          snapshot = renderer.newSnapshot;

    if (shouldRender) {
      try {
        this.renderPromise = new Promise(resolve => this.resolveRenderPromise = resolve);
        this.renderer = renderer;
        this.prepareToRenderSnapshot(renderer);
        const renderInterception = new Promise(resolve => this.resolveInterceptionPromise = resolve);
        const immediateRender = this.delegate.allowsImmediateRender(snapshot, this.resolveInterceptionPromise);
        if (!immediateRender) await renderInterception;
        await this.renderSnapshot(renderer);
        this.delegate.viewRenderedSnapshot(snapshot, isPreview);
        this.finishRenderingSnapshot(renderer);
      } finally {
        delete this.renderer;
        this.resolveRenderPromise(undefined);
        delete this.renderPromise;
      }
    } else {
      this.invalidate();
    }
  }

  invalidate() {
    this.delegate.viewInvalidated();
  }

  prepareToRenderSnapshot(renderer) {
    this.markAsPreview(renderer.isPreview);
    renderer.prepareToRender();
  }

  markAsPreview(isPreview) {
    if (isPreview) {
      this.element.setAttribute("data-turbo-preview", "");
    } else {
      this.element.removeAttribute("data-turbo-preview");
    }
  }

  async renderSnapshot(renderer) {
    await renderer.render();
  }

  finishRenderingSnapshot(renderer) {
    renderer.finishRendering();
  }

}

class FrameView extends View {
  invalidate() {
    this.element.innerHTML = "";
  }

  get snapshot() {
    return new Snapshot(this.element);
  }

}

class LinkInterceptor {
  constructor(delegate, element) {
    this.clickBubbled = event => {
      if (this.respondsToEventTarget(event.target)) {
        this.clickEvent = event;
      } else {
        delete this.clickEvent;
      }
    };

    this.linkClicked = event => {
      if (this.clickEvent && this.respondsToEventTarget(event.target) && event.target instanceof Element) {
        if (this.delegate.shouldInterceptLinkClick(event.target, event.detail.url)) {
          this.clickEvent.preventDefault();
          event.preventDefault();
          this.delegate.linkClickIntercepted(event.target, event.detail.url);
        }
      }

      delete this.clickEvent;
    };

    this.willVisit = () => {
      delete this.clickEvent;
    };

    this.delegate = delegate;
    this.element = element;
  }

  start() {
    this.element.addEventListener("click", this.clickBubbled);
    document.addEventListener("turbo:click", this.linkClicked);
    document.addEventListener("turbo:before-visit", this.willVisit);
  }

  stop() {
    this.element.removeEventListener("click", this.clickBubbled);
    document.removeEventListener("turbo:click", this.linkClicked);
    document.removeEventListener("turbo:before-visit", this.willVisit);
  }

  respondsToEventTarget(target) {
    const element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
    return element && element.closest("turbo-frame, html") == this.element;
  }

}

class Bardo {
  constructor(permanentElementMap) {
    this.permanentElementMap = permanentElementMap;
  }

  static preservingPermanentElements(permanentElementMap, callback) {
    const bardo = new this(permanentElementMap);
    bardo.enter();
    callback();
    bardo.leave();
  }

  enter() {
    for (const id in this.permanentElementMap) {
      const _this$permanentElemen = _slicedToArray(this.permanentElementMap[id], 2),
            newPermanentElement = _this$permanentElemen[1];

      this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
    }
  }

  leave() {
    for (const id in this.permanentElementMap) {
      const _this$permanentElemen2 = _slicedToArray(this.permanentElementMap[id], 1),
            currentPermanentElement = _this$permanentElemen2[0];

      this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
      this.replacePlaceholderWithPermanentElement(currentPermanentElement);
    }
  }

  replaceNewPermanentElementWithPlaceholder(permanentElement) {
    const placeholder = createPlaceholderForPermanentElement(permanentElement);
    permanentElement.replaceWith(placeholder);
  }

  replaceCurrentPermanentElementWithClone(permanentElement) {
    const clone = permanentElement.cloneNode(true);
    permanentElement.replaceWith(clone);
  }

  replacePlaceholderWithPermanentElement(permanentElement) {
    const placeholder = this.getPlaceholderById(permanentElement.id);
    placeholder === null || placeholder === void 0 ? void 0 : placeholder.replaceWith(permanentElement);
  }

  getPlaceholderById(id) {
    return this.placeholders.find(element => element.content == id);
  }

  get placeholders() {
    return [...document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]")];
  }

}

function createPlaceholderForPermanentElement(permanentElement) {
  const element = document.createElement("meta");
  element.setAttribute("name", "turbo-permanent-placeholder");
  element.setAttribute("content", permanentElement.id);
  return element;
}

class Renderer {
  constructor(currentSnapshot, newSnapshot, isPreview) {
    let willRender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    this.currentSnapshot = currentSnapshot;
    this.newSnapshot = newSnapshot;
    this.isPreview = isPreview;
    this.willRender = willRender;
    this.promise = new Promise((resolve, reject) => this.resolvingFunctions = {
      resolve,
      reject
    });
  }

  get shouldRender() {
    return true;
  }

  prepareToRender() {
    return;
  }

  finishRendering() {
    if (this.resolvingFunctions) {
      this.resolvingFunctions.resolve();
      delete this.resolvingFunctions;
    }
  }

  createScriptElement(element) {
    if (element.getAttribute("data-turbo-eval") == "false") {
      return element;
    } else {
      const createdScriptElement = document.createElement("script");

      if (this.cspNonce) {
        createdScriptElement.nonce = this.cspNonce;
      }

      createdScriptElement.textContent = element.textContent;
      createdScriptElement.async = false;
      copyElementAttributes(createdScriptElement, element);
      return createdScriptElement;
    }
  }

  preservingPermanentElements(callback) {
    Bardo.preservingPermanentElements(this.permanentElementMap, callback);
  }

  focusFirstAutofocusableElement() {
    const element = this.connectedSnapshot.firstAutofocusableElement;

    if (elementIsFocusable(element)) {
      element.focus();
    }
  }

  get connectedSnapshot() {
    return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
  }

  get currentElement() {
    return this.currentSnapshot.element;
  }

  get newElement() {
    return this.newSnapshot.element;
  }

  get permanentElementMap() {
    return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
  }

  get cspNonce() {
    var _a;

    return (_a = document.head.querySelector('meta[name="csp-nonce"]')) === null || _a === void 0 ? void 0 : _a.getAttribute("content");
  }

}

function copyElementAttributes(destinationElement, sourceElement) {
  for (const _ref7 of [...sourceElement.attributes]) {
    const name = _ref7.name;
    const value = _ref7.value;
    destinationElement.setAttribute(name, value);
  }
}

function elementIsFocusable(element) {
  return element && typeof element.focus == "function";
}

class FrameRenderer extends Renderer {
  get shouldRender() {
    return true;
  }

  async render() {
    await nextAnimationFrame();
    this.preservingPermanentElements(() => {
      this.loadFrameElement();
    });
    this.scrollFrameIntoView();
    await nextAnimationFrame();
    this.focusFirstAutofocusableElement();
    await nextAnimationFrame();
    this.activateScriptElements();
  }

  loadFrameElement() {
    var _a;

    const destinationRange = document.createRange();
    destinationRange.selectNodeContents(this.currentElement);
    destinationRange.deleteContents();
    const frameElement = this.newElement;
    const sourceRange = (_a = frameElement.ownerDocument) === null || _a === void 0 ? void 0 : _a.createRange();

    if (sourceRange) {
      sourceRange.selectNodeContents(frameElement);
      this.currentElement.appendChild(sourceRange.extractContents());
    }
  }

  scrollFrameIntoView() {
    if (this.currentElement.autoscroll || this.newElement.autoscroll) {
      const element = this.currentElement.firstElementChild;
      const block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");

      if (element) {
        element.scrollIntoView({
          block
        });
        return true;
      }
    }

    return false;
  }

  activateScriptElements() {
    for (const inertScriptElement of this.newScriptElements) {
      const activatedScriptElement = this.createScriptElement(inertScriptElement);
      inertScriptElement.replaceWith(activatedScriptElement);
    }
  }

  get newScriptElements() {
    return this.currentElement.querySelectorAll("script");
  }

}

function readScrollLogicalPosition(value, defaultValue) {
  if (value == "end" || value == "start" || value == "center" || value == "nearest") {
    return value;
  } else {
    return defaultValue;
  }
}

class ProgressBar {
  constructor() {
    this.hiding = false;
    this.value = 0;
    this.visible = false;

    this.trickle = () => {
      this.setValue(this.value + Math.random() / 100);
    };

    this.stylesheetElement = this.createStylesheetElement();
    this.progressElement = this.createProgressElement();
    this.installStylesheetElement();
    this.setValue(0);
  }

  static get defaultCSS() {
    return unindent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      .turbo-progress-bar {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background: #0076ff;\n        z-index: 9999;\n        transition:\n          width ", "ms ease-out,\n          opacity ", "ms ", "ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    "])), ProgressBar.animationDuration, ProgressBar.animationDuration / 2, ProgressBar.animationDuration / 2);
  }

  show() {
    if (!this.visible) {
      this.visible = true;
      this.installProgressElement();
      this.startTrickling();
    }
  }

  hide() {
    if (this.visible && !this.hiding) {
      this.hiding = true;
      this.fadeProgressElement(() => {
        this.uninstallProgressElement();
        this.stopTrickling();
        this.visible = false;
        this.hiding = false;
      });
    }
  }

  setValue(value) {
    this.value = value;
    this.refresh();
  }

  installStylesheetElement() {
    document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
  }

  installProgressElement() {
    this.progressElement.style.width = "0";
    this.progressElement.style.opacity = "1";
    document.documentElement.insertBefore(this.progressElement, document.body);
    this.refresh();
  }

  fadeProgressElement(callback) {
    this.progressElement.style.opacity = "0";
    setTimeout(callback, ProgressBar.animationDuration * 1.5);
  }

  uninstallProgressElement() {
    if (this.progressElement.parentNode) {
      document.documentElement.removeChild(this.progressElement);
    }
  }

  startTrickling() {
    if (!this.trickleInterval) {
      this.trickleInterval = window.setInterval(this.trickle, ProgressBar.animationDuration);
    }
  }

  stopTrickling() {
    window.clearInterval(this.trickleInterval);
    delete this.trickleInterval;
  }

  refresh() {
    requestAnimationFrame(() => {
      this.progressElement.style.width = "".concat(10 + this.value * 90, "%");
    });
  }

  createStylesheetElement() {
    const element = document.createElement("style");
    element.type = "text/css";
    element.textContent = ProgressBar.defaultCSS;
    return element;
  }

  createProgressElement() {
    const element = document.createElement("div");
    element.className = "turbo-progress-bar";
    return element;
  }

}

ProgressBar.animationDuration = 300;

class HeadSnapshot extends Snapshot {
  constructor() {
    super(...arguments);
    this.detailsByOuterHTML = this.children.filter(element => !elementIsNoscript(element)).map(element => elementWithoutNonce(element)).reduce((result, element) => {
      const outerHTML = element.outerHTML;
      const details = outerHTML in result ? result[outerHTML] : {
        type: elementType(element),
        tracked: elementIsTracked(element),
        elements: []
      };
      return Object.assign(Object.assign({}, result), {
        [outerHTML]: Object.assign(Object.assign({}, details), {
          elements: [...details.elements, element]
        })
      });
    }, {});
  }

  get trackedElementSignature() {
    return Object.keys(this.detailsByOuterHTML).filter(outerHTML => this.detailsByOuterHTML[outerHTML].tracked).join("");
  }

  getScriptElementsNotInSnapshot(snapshot) {
    return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
  }

  getStylesheetElementsNotInSnapshot(snapshot) {
    return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
  }

  getElementsMatchingTypeNotInSnapshot(matchedType, snapshot) {
    return Object.keys(this.detailsByOuterHTML).filter(outerHTML => !(outerHTML in snapshot.detailsByOuterHTML)).map(outerHTML => this.detailsByOuterHTML[outerHTML]).filter(_ref8 => {
      let type = _ref8.type;
      return type == matchedType;
    }).map(_ref9 => {
      let _ref9$elements = _slicedToArray(_ref9.elements, 1),
          element = _ref9$elements[0];

      return element;
    });
  }

  get provisionalElements() {
    return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML) => {
      const _this$detailsByOuterH = this.detailsByOuterHTML[outerHTML],
            type = _this$detailsByOuterH.type,
            tracked = _this$detailsByOuterH.tracked,
            elements = _this$detailsByOuterH.elements;

      if (type == null && !tracked) {
        return [...result, ...elements];
      } else if (elements.length > 1) {
        return [...result, ...elements.slice(1)];
      } else {
        return result;
      }
    }, []);
  }

  getMetaValue(name) {
    const element = this.findMetaElementByName(name);
    return element ? element.getAttribute("content") : null;
  }

  findMetaElementByName(name) {
    return Object.keys(this.detailsByOuterHTML).reduce((result, outerHTML) => {
      const _this$detailsByOuterH2 = _slicedToArray(this.detailsByOuterHTML[outerHTML].elements, 1),
            element = _this$detailsByOuterH2[0];

      return elementIsMetaElementWithName(element, name) ? element : result;
    }, undefined);
  }

}

function elementType(element) {
  if (elementIsScript(element)) {
    return "script";
  } else if (elementIsStylesheet(element)) {
    return "stylesheet";
  }
}

function elementIsTracked(element) {
  return element.getAttribute("data-turbo-track") == "reload";
}

function elementIsScript(element) {
  const tagName = element.tagName.toLowerCase();
  return tagName == "script";
}

function elementIsNoscript(element) {
  const tagName = element.tagName.toLowerCase();
  return tagName == "noscript";
}

function elementIsStylesheet(element) {
  const tagName = element.tagName.toLowerCase();
  return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
}

function elementIsMetaElementWithName(element, name) {
  const tagName = element.tagName.toLowerCase();
  return tagName == "meta" && element.getAttribute("name") == name;
}

function elementWithoutNonce(element) {
  if (element.hasAttribute("nonce")) {
    element.setAttribute("nonce", "");
  }

  return element;
}

class PageSnapshot extends Snapshot {
  constructor(element, headSnapshot) {
    super(element);
    this.headSnapshot = headSnapshot;
  }

  static fromHTMLString() {
    let html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return this.fromDocument(parseHTMLDocument(html));
  }

  static fromElement(element) {
    return this.fromDocument(element.ownerDocument);
  }

  static fromDocument(_ref10) {
    let head = _ref10.head,
        body = _ref10.body;
    return new this(body, new HeadSnapshot(head));
  }

  clone() {
    return new PageSnapshot(this.element.cloneNode(true), this.headSnapshot);
  }

  get headElement() {
    return this.headSnapshot.element;
  }

  get rootLocation() {
    var _a;

    const root = (_a = this.getSetting("root")) !== null && _a !== void 0 ? _a : "/";
    return expandURL(root);
  }

  get cacheControlValue() {
    return this.getSetting("cache-control");
  }

  get isPreviewable() {
    return this.cacheControlValue != "no-preview";
  }

  get isCacheable() {
    return this.cacheControlValue != "no-cache";
  }

  get isVisitable() {
    return this.getSetting("visit-control") != "reload";
  }

  getSetting(name) {
    return this.headSnapshot.getMetaValue("turbo-".concat(name));
  }

}

var TimingMetric;

(function (TimingMetric) {
  TimingMetric["visitStart"] = "visitStart";
  TimingMetric["requestStart"] = "requestStart";
  TimingMetric["requestEnd"] = "requestEnd";
  TimingMetric["visitEnd"] = "visitEnd";
})(TimingMetric || (TimingMetric = {}));

var VisitState;

(function (VisitState) {
  VisitState["initialized"] = "initialized";
  VisitState["started"] = "started";
  VisitState["canceled"] = "canceled";
  VisitState["failed"] = "failed";
  VisitState["completed"] = "completed";
})(VisitState || (VisitState = {}));

const defaultOptions = {
  action: "advance",
  historyChanged: false,
  visitCachedSnapshot: () => {},
  willRender: true
};
var SystemStatusCode;

(function (SystemStatusCode) {
  SystemStatusCode[SystemStatusCode["networkFailure"] = 0] = "networkFailure";
  SystemStatusCode[SystemStatusCode["timeoutFailure"] = -1] = "timeoutFailure";
  SystemStatusCode[SystemStatusCode["contentTypeMismatch"] = -2] = "contentTypeMismatch";
})(SystemStatusCode || (SystemStatusCode = {}));

class Visit {
  constructor(delegate, location, restorationIdentifier) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    this.identifier = uuid();
    this.timingMetrics = {};
    this.followedRedirect = false;
    this.historyChanged = false;
    this.scrolled = false;
    this.snapshotCached = false;
    this.state = VisitState.initialized;
    this.delegate = delegate;
    this.location = location;
    this.restorationIdentifier = restorationIdentifier || uuid();

    const _Object$assign = Object.assign(Object.assign({}, defaultOptions), options),
          action = _Object$assign.action,
          historyChanged = _Object$assign.historyChanged,
          referrer = _Object$assign.referrer,
          snapshotHTML = _Object$assign.snapshotHTML,
          response = _Object$assign.response,
          visitCachedSnapshot = _Object$assign.visitCachedSnapshot,
          willRender = _Object$assign.willRender;

    this.action = action;
    this.historyChanged = historyChanged;
    this.referrer = referrer;
    this.snapshotHTML = snapshotHTML;
    this.response = response;
    this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action);
    this.visitCachedSnapshot = visitCachedSnapshot;
    this.willRender = willRender;
    this.scrolled = !willRender;
  }

  get adapter() {
    return this.delegate.adapter;
  }

  get view() {
    return this.delegate.view;
  }

  get history() {
    return this.delegate.history;
  }

  get restorationData() {
    return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
  }

  get silent() {
    return this.isSamePage;
  }

  start() {
    if (this.state == VisitState.initialized) {
      this.recordTimingMetric(TimingMetric.visitStart);
      this.state = VisitState.started;
      this.adapter.visitStarted(this);
      this.delegate.visitStarted(this);
    }
  }

  cancel() {
    if (this.state == VisitState.started) {
      if (this.request) {
        this.request.cancel();
      }

      this.cancelRender();
      this.state = VisitState.canceled;
    }
  }

  complete() {
    if (this.state == VisitState.started) {
      this.recordTimingMetric(TimingMetric.visitEnd);
      this.state = VisitState.completed;
      this.adapter.visitCompleted(this);
      this.delegate.visitCompleted(this);
      this.followRedirect();
    }
  }

  fail() {
    if (this.state == VisitState.started) {
      this.state = VisitState.failed;
      this.adapter.visitFailed(this);
    }
  }

  changeHistory() {
    var _a;

    if (!this.historyChanged) {
      const actionForHistory = this.location.href === ((_a = this.referrer) === null || _a === void 0 ? void 0 : _a.href) ? "replace" : this.action;
      const method = this.getHistoryMethodForAction(actionForHistory);
      this.history.update(method, this.location, this.restorationIdentifier);
      this.historyChanged = true;
    }
  }

  issueRequest() {
    if (this.hasPreloadedResponse()) {
      this.simulateRequest();
    } else if (this.shouldIssueRequest() && !this.request) {
      this.request = new FetchRequest(this, FetchMethod.get, this.location);
      this.request.perform();
    }
  }

  simulateRequest() {
    if (this.response) {
      this.startRequest();
      this.recordResponse();
      this.finishRequest();
    }
  }

  startRequest() {
    this.recordTimingMetric(TimingMetric.requestStart);
    this.adapter.visitRequestStarted(this);
  }

  recordResponse() {
    let response = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.response;
    this.response = response;

    if (response) {
      const statusCode = response.statusCode;

      if (isSuccessful(statusCode)) {
        this.adapter.visitRequestCompleted(this);
      } else {
        this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
      }
    }
  }

  finishRequest() {
    this.recordTimingMetric(TimingMetric.requestEnd);
    this.adapter.visitRequestFinished(this);
  }

  loadResponse() {
    if (this.response) {
      const _this$response = this.response,
            statusCode = _this$response.statusCode,
            responseHTML = _this$response.responseHTML;
      this.render(async () => {
        this.cacheSnapshot();
        if (this.view.renderPromise) await this.view.renderPromise;

        if (isSuccessful(statusCode) && responseHTML != null) {
          await this.view.renderPage(PageSnapshot.fromHTMLString(responseHTML), false, this.willRender);
          this.adapter.visitRendered(this);
          this.complete();
        } else {
          await this.view.renderError(PageSnapshot.fromHTMLString(responseHTML));
          this.adapter.visitRendered(this);
          this.fail();
        }
      });
    }
  }

  getCachedSnapshot() {
    const snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();

    if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
      if (this.action == "restore" || snapshot.isPreviewable) {
        return snapshot;
      }
    }
  }

  getPreloadedSnapshot() {
    if (this.snapshotHTML) {
      return PageSnapshot.fromHTMLString(this.snapshotHTML);
    }
  }

  hasCachedSnapshot() {
    return this.getCachedSnapshot() != null;
  }

  loadCachedSnapshot() {
    const snapshot = this.getCachedSnapshot();

    if (snapshot) {
      const isPreview = this.shouldIssueRequest();
      this.render(async () => {
        this.cacheSnapshot();

        if (this.isSamePage) {
          this.adapter.visitRendered(this);
        } else {
          if (this.view.renderPromise) await this.view.renderPromise;
          await this.view.renderPage(snapshot, isPreview, this.willRender);
          this.adapter.visitRendered(this);

          if (!isPreview) {
            this.complete();
          }
        }
      });
    }
  }

  followRedirect() {
    var _a;

    if (this.redirectedToLocation && !this.followedRedirect && ((_a = this.response) === null || _a === void 0 ? void 0 : _a.redirected)) {
      this.adapter.visitProposedToLocation(this.redirectedToLocation, {
        action: 'replace',
        response: this.response
      });
      this.followedRedirect = true;
    }
  }

  goToSamePageAnchor() {
    if (this.isSamePage) {
      this.render(async () => {
        this.cacheSnapshot();
        this.adapter.visitRendered(this);
      });
    }
  }

  requestStarted() {
    this.startRequest();
  }

  requestPreventedHandlingResponse(request, response) {}

  async requestSucceededWithResponse(request, response) {
    const responseHTML = await response.responseHTML;
    const redirected = response.redirected,
          statusCode = response.statusCode;

    if (responseHTML == undefined) {
      this.recordResponse({
        statusCode: SystemStatusCode.contentTypeMismatch,
        redirected
      });
    } else {
      this.redirectedToLocation = response.redirected ? response.location : undefined;
      this.recordResponse({
        statusCode: statusCode,
        responseHTML,
        redirected
      });
    }
  }

  async requestFailedWithResponse(request, response) {
    const responseHTML = await response.responseHTML;
    const redirected = response.redirected,
          statusCode = response.statusCode;

    if (responseHTML == undefined) {
      this.recordResponse({
        statusCode: SystemStatusCode.contentTypeMismatch,
        redirected
      });
    } else {
      this.recordResponse({
        statusCode: statusCode,
        responseHTML,
        redirected
      });
    }
  }

  requestErrored(request, error) {
    this.recordResponse({
      statusCode: SystemStatusCode.networkFailure,
      redirected: false
    });
  }

  requestFinished() {
    this.finishRequest();
  }

  performScroll() {
    if (!this.scrolled) {
      if (this.action == "restore") {
        this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop();
      } else {
        this.scrollToAnchor() || this.view.scrollToTop();
      }

      if (this.isSamePage) {
        this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location);
      }

      this.scrolled = true;
    }
  }

  scrollToRestoredPosition() {
    const scrollPosition = this.restorationData.scrollPosition;

    if (scrollPosition) {
      this.view.scrollToPosition(scrollPosition);
      return true;
    }
  }

  scrollToAnchor() {
    const anchor = getAnchor(this.location);

    if (anchor != null) {
      this.view.scrollToAnchor(anchor);
      return true;
    }
  }

  recordTimingMetric(metric) {
    this.timingMetrics[metric] = new Date().getTime();
  }

  getTimingMetrics() {
    return Object.assign({}, this.timingMetrics);
  }

  getHistoryMethodForAction(action) {
    switch (action) {
      case "replace":
        return history.replaceState;

      case "advance":
      case "restore":
        return history.pushState;
    }
  }

  hasPreloadedResponse() {
    return typeof this.response == "object";
  }

  shouldIssueRequest() {
    if (this.isSamePage) {
      return false;
    } else if (this.action == "restore") {
      return !this.hasCachedSnapshot();
    } else {
      return this.willRender;
    }
  }

  cacheSnapshot() {
    if (!this.snapshotCached) {
      this.view.cacheSnapshot().then(snapshot => snapshot && this.visitCachedSnapshot(snapshot));
      this.snapshotCached = true;
    }
  }

  async render(callback) {
    this.cancelRender();
    await new Promise(resolve => {
      this.frame = requestAnimationFrame(() => resolve());
    });
    await callback();
    delete this.frame;
    this.performScroll();
  }

  cancelRender() {
    if (this.frame) {
      cancelAnimationFrame(this.frame);
      delete this.frame;
    }
  }

}

function isSuccessful(statusCode) {
  return statusCode >= 200 && statusCode < 300;
}

class BrowserAdapter {
  constructor(session) {
    this.progressBar = new ProgressBar();

    this.showProgressBar = () => {
      this.progressBar.show();
    };

    this.session = session;
  }

  visitProposedToLocation(location, options) {
    this.navigator.startVisit(location, uuid(), options);
  }

  visitStarted(visit) {
    visit.loadCachedSnapshot();
    visit.issueRequest();
    visit.changeHistory();
    visit.goToSamePageAnchor();
  }

  visitRequestStarted(visit) {
    this.progressBar.setValue(0);

    if (visit.hasCachedSnapshot() || visit.action != "restore") {
      this.showVisitProgressBarAfterDelay();
    } else {
      this.showProgressBar();
    }
  }

  visitRequestCompleted(visit) {
    visit.loadResponse();
  }

  visitRequestFailedWithStatusCode(visit, statusCode) {
    switch (statusCode) {
      case SystemStatusCode.networkFailure:
      case SystemStatusCode.timeoutFailure:
      case SystemStatusCode.contentTypeMismatch:
        return this.reload();

      default:
        return visit.loadResponse();
    }
  }

  visitRequestFinished(visit) {
    this.progressBar.setValue(1);
    this.hideVisitProgressBar();
  }

  visitCompleted(visit) {}

  pageInvalidated() {
    this.reload();
  }

  visitFailed(visit) {}

  visitRendered(visit) {}

  formSubmissionStarted(formSubmission) {
    this.progressBar.setValue(0);
    this.showFormProgressBarAfterDelay();
  }

  formSubmissionFinished(formSubmission) {
    this.progressBar.setValue(1);
    this.hideFormProgressBar();
  }

  showVisitProgressBarAfterDelay() {
    this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
  }

  hideVisitProgressBar() {
    this.progressBar.hide();

    if (this.visitProgressBarTimeout != null) {
      window.clearTimeout(this.visitProgressBarTimeout);
      delete this.visitProgressBarTimeout;
    }
  }

  showFormProgressBarAfterDelay() {
    if (this.formProgressBarTimeout == null) {
      this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
    }
  }

  hideFormProgressBar() {
    this.progressBar.hide();

    if (this.formProgressBarTimeout != null) {
      window.clearTimeout(this.formProgressBarTimeout);
      delete this.formProgressBarTimeout;
    }
  }

  reload() {
    window.location.reload();
  }

  get navigator() {
    return this.session.navigator;
  }

}

class CacheObserver {
  constructor() {
    this.started = false;
  }

  start() {
    if (!this.started) {
      this.started = true;
      addEventListener("turbo:before-cache", this.removeStaleElements, false);
    }
  }

  stop() {
    if (this.started) {
      this.started = false;
      removeEventListener("turbo:before-cache", this.removeStaleElements, false);
    }
  }

  removeStaleElements() {
    const staleElements = [...document.querySelectorAll('[data-turbo-cache="false"]')];

    for (const element of staleElements) {
      element.remove();
    }
  }

}

class FormSubmitObserver {
  constructor(delegate) {
    this.started = false;

    this.submitCaptured = () => {
      removeEventListener("submit", this.submitBubbled, false);
      addEventListener("submit", this.submitBubbled, false);
    };

    this.submitBubbled = event => {
      if (!event.defaultPrevented) {
        const form = event.target instanceof HTMLFormElement ? event.target : undefined;
        const submitter = event.submitter || undefined;

        if (form) {
          const method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.getAttribute("method");

          if (method != "dialog" && this.delegate.willSubmitForm(form, submitter)) {
            event.preventDefault();
            this.delegate.formSubmitted(form, submitter);
          }
        }
      }
    };

    this.delegate = delegate;
  }

  start() {
    if (!this.started) {
      addEventListener("submit", this.submitCaptured, true);
      this.started = true;
    }
  }

  stop() {
    if (this.started) {
      removeEventListener("submit", this.submitCaptured, true);
      this.started = false;
    }
  }

}

class FrameRedirector {
  constructor(element) {
    this.element = element;
    this.linkInterceptor = new LinkInterceptor(this, element);
    this.formInterceptor = new FormInterceptor(this, element);
  }

  start() {
    this.linkInterceptor.start();
    this.formInterceptor.start();
  }

  stop() {
    this.linkInterceptor.stop();
    this.formInterceptor.stop();
  }

  shouldInterceptLinkClick(element, url) {
    return this.shouldRedirect(element);
  }

  linkClickIntercepted(element, url) {
    const frame = this.findFrameElement(element);

    if (frame) {
      frame.delegate.linkClickIntercepted(element, url);
    }
  }

  shouldInterceptFormSubmission(element, submitter) {
    return this.shouldSubmit(element, submitter);
  }

  formSubmissionIntercepted(element, submitter) {
    const frame = this.findFrameElement(element, submitter);

    if (frame) {
      frame.removeAttribute("reloadable");
      frame.delegate.formSubmissionIntercepted(element, submitter);
    }
  }

  shouldSubmit(form, submitter) {
    var _a;

    const action = getAction(form, submitter);
    const meta = this.element.ownerDocument.querySelector("meta[name=\"turbo-root\"]");
    const rootLocation = expandURL((_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/");
    return this.shouldRedirect(form, submitter) && locationIsVisitable(action, rootLocation);
  }

  shouldRedirect(element, submitter) {
    const frame = this.findFrameElement(element, submitter);
    return frame ? frame != element.closest("turbo-frame") : false;
  }

  findFrameElement(element, submitter) {
    const id = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("data-turbo-frame")) || element.getAttribute("data-turbo-frame");

    if (id && id != "_top") {
      const frame = this.element.querySelector("#".concat(id, ":not([disabled])"));

      if (frame instanceof FrameElement) {
        return frame;
      }
    }
  }

}

class History {
  constructor(delegate) {
    this.restorationIdentifier = uuid();
    this.restorationData = {};
    this.started = false;
    this.pageLoaded = false;

    this.onPopState = event => {
      if (this.shouldHandlePopState()) {
        const _ref11 = event.state || {},
              turbo = _ref11.turbo;

        if (turbo) {
          this.location = new URL(window.location.href);
          const restorationIdentifier = turbo.restorationIdentifier;
          this.restorationIdentifier = restorationIdentifier;
          this.delegate.historyPoppedToLocationWithRestorationIdentifier(this.location, restorationIdentifier);
        }
      }
    };

    this.onPageLoad = async event => {
      await nextMicrotask();
      this.pageLoaded = true;
    };

    this.delegate = delegate;
  }

  start() {
    if (!this.started) {
      addEventListener("popstate", this.onPopState, false);
      addEventListener("load", this.onPageLoad, false);
      this.started = true;
      this.replace(new URL(window.location.href));
    }
  }

  stop() {
    if (this.started) {
      removeEventListener("popstate", this.onPopState, false);
      removeEventListener("load", this.onPageLoad, false);
      this.started = false;
    }
  }

  push(location, restorationIdentifier) {
    this.update(history.pushState, location, restorationIdentifier);
  }

  replace(location, restorationIdentifier) {
    this.update(history.replaceState, location, restorationIdentifier);
  }

  update(method, location) {
    let restorationIdentifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : uuid();
    const state = {
      turbo: {
        restorationIdentifier
      }
    };
    method.call(history, state, "", location.href);
    this.location = location;
    this.restorationIdentifier = restorationIdentifier;
  }

  getRestorationDataForIdentifier(restorationIdentifier) {
    return this.restorationData[restorationIdentifier] || {};
  }

  updateRestorationData(additionalData) {
    const restorationIdentifier = this.restorationIdentifier;
    const restorationData = this.restorationData[restorationIdentifier];
    this.restorationData[restorationIdentifier] = Object.assign(Object.assign({}, restorationData), additionalData);
  }

  assumeControlOfScrollRestoration() {
    var _a;

    if (!this.previousScrollRestoration) {
      this.previousScrollRestoration = (_a = history.scrollRestoration) !== null && _a !== void 0 ? _a : "auto";
      history.scrollRestoration = "manual";
    }
  }

  relinquishControlOfScrollRestoration() {
    if (this.previousScrollRestoration) {
      history.scrollRestoration = this.previousScrollRestoration;
      delete this.previousScrollRestoration;
    }
  }

  shouldHandlePopState() {
    return this.pageIsLoaded();
  }

  pageIsLoaded() {
    return this.pageLoaded || document.readyState == "complete";
  }

}

class LinkClickObserver {
  constructor(delegate) {
    this.started = false;

    this.clickCaptured = () => {
      removeEventListener("click", this.clickBubbled, false);
      addEventListener("click", this.clickBubbled, false);
    };

    this.clickBubbled = event => {
      if (this.clickEventIsSignificant(event)) {
        const target = event.composedPath && event.composedPath()[0] || event.target;
        const link = this.findLinkFromClickTarget(target);

        if (link) {
          const location = this.getLocationForLink(link);

          if (this.delegate.willFollowLinkToLocation(link, location)) {
            event.preventDefault();
            this.delegate.followedLinkToLocation(link, location);
          }
        }
      }
    };

    this.delegate = delegate;
  }

  start() {
    if (!this.started) {
      addEventListener("click", this.clickCaptured, true);
      this.started = true;
    }
  }

  stop() {
    if (this.started) {
      removeEventListener("click", this.clickCaptured, true);
      this.started = false;
    }
  }

  clickEventIsSignificant(event) {
    return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
  }

  findLinkFromClickTarget(target) {
    if (target instanceof Element) {
      return target.closest("a[href]:not([target^=_]):not([download])");
    }
  }

  getLocationForLink(link) {
    return expandURL(link.getAttribute("href") || "");
  }

}

function isAction(action) {
  return action == "advance" || action == "replace" || action == "restore";
}

class Navigator {
  constructor(delegate) {
    this.delegate = delegate;
  }

  proposeVisit(location) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.delegate.allowsVisitingLocationWithAction(location, options.action)) {
      if (locationIsVisitable(location, this.view.snapshot.rootLocation)) {
        this.delegate.visitProposedToLocation(location, options);
      } else {
        window.location.href = location.toString();
      }
    }
  }

  startVisit(locatable, restorationIdentifier) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.stop();
    this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, Object.assign({
      referrer: this.location
    }, options));
    this.currentVisit.start();
  }

  submitForm(form, submitter) {
    this.stop();
    this.formSubmission = new FormSubmission(this, form, submitter, true);
    this.formSubmission.start();
  }

  stop() {
    if (this.formSubmission) {
      this.formSubmission.stop();
      delete this.formSubmission;
    }

    if (this.currentVisit) {
      this.currentVisit.cancel();
      delete this.currentVisit;
    }
  }

  get adapter() {
    return this.delegate.adapter;
  }

  get view() {
    return this.delegate.view;
  }

  get history() {
    return this.delegate.history;
  }

  formSubmissionStarted(formSubmission) {
    if (typeof this.adapter.formSubmissionStarted === 'function') {
      this.adapter.formSubmissionStarted(formSubmission);
    }
  }

  async formSubmissionSucceededWithResponse(formSubmission, fetchResponse) {
    if (formSubmission == this.formSubmission) {
      const responseHTML = await fetchResponse.responseHTML;

      if (responseHTML) {
        if (formSubmission.method != FetchMethod.get) {
          this.view.clearSnapshotCache();
        }

        const statusCode = fetchResponse.statusCode,
              redirected = fetchResponse.redirected;
        const action = this.getActionForFormSubmission(formSubmission);
        const visitOptions = {
          action,
          response: {
            statusCode,
            responseHTML,
            redirected
          }
        };
        this.proposeVisit(fetchResponse.location, visitOptions);
      }
    }
  }

  async formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
    const responseHTML = await fetchResponse.responseHTML;

    if (responseHTML) {
      const snapshot = PageSnapshot.fromHTMLString(responseHTML);

      if (fetchResponse.serverError) {
        await this.view.renderError(snapshot);
      } else {
        await this.view.renderPage(snapshot);
      }

      this.view.scrollToTop();
      this.view.clearSnapshotCache();
    }
  }

  formSubmissionErrored(formSubmission, error) {
    console.error(error);
  }

  formSubmissionFinished(formSubmission) {
    if (typeof this.adapter.formSubmissionFinished === 'function') {
      this.adapter.formSubmissionFinished(formSubmission);
    }
  }

  visitStarted(visit) {
    this.delegate.visitStarted(visit);
  }

  visitCompleted(visit) {
    this.delegate.visitCompleted(visit);
  }

  locationWithActionIsSamePage(location, action) {
    const anchor = getAnchor(location);
    const currentAnchor = getAnchor(this.view.lastRenderedLocation);
    const isRestorationToTop = action === 'restore' && typeof anchor === 'undefined';
    return action !== "replace" && getRequestURL(location) === getRequestURL(this.view.lastRenderedLocation) && (isRestorationToTop || anchor != null && anchor !== currentAnchor);
  }

  visitScrolledToSamePageLocation(oldURL, newURL) {
    this.delegate.visitScrolledToSamePageLocation(oldURL, newURL);
  }

  get location() {
    return this.history.location;
  }

  get restorationIdentifier() {
    return this.history.restorationIdentifier;
  }

  getActionForFormSubmission(formSubmission) {
    const formElement = formSubmission.formElement,
          submitter = formSubmission.submitter;
    const action = getAttribute("data-turbo-action", submitter, formElement);
    return isAction(action) ? action : "advance";
  }

}

var PageStage;

(function (PageStage) {
  PageStage[PageStage["initial"] = 0] = "initial";
  PageStage[PageStage["loading"] = 1] = "loading";
  PageStage[PageStage["interactive"] = 2] = "interactive";
  PageStage[PageStage["complete"] = 3] = "complete";
})(PageStage || (PageStage = {}));

class PageObserver {
  constructor(delegate) {
    this.stage = PageStage.initial;
    this.started = false;

    this.interpretReadyState = () => {
      const readyState = this.readyState;

      if (readyState == "interactive") {
        this.pageIsInteractive();
      } else if (readyState == "complete") {
        this.pageIsComplete();
      }
    };

    this.pageWillUnload = () => {
      this.delegate.pageWillUnload();
    };

    this.delegate = delegate;
  }

  start() {
    if (!this.started) {
      if (this.stage == PageStage.initial) {
        this.stage = PageStage.loading;
      }

      document.addEventListener("readystatechange", this.interpretReadyState, false);
      addEventListener("pagehide", this.pageWillUnload, false);
      this.started = true;
    }
  }

  stop() {
    if (this.started) {
      document.removeEventListener("readystatechange", this.interpretReadyState, false);
      removeEventListener("pagehide", this.pageWillUnload, false);
      this.started = false;
    }
  }

  pageIsInteractive() {
    if (this.stage == PageStage.loading) {
      this.stage = PageStage.interactive;
      this.delegate.pageBecameInteractive();
    }
  }

  pageIsComplete() {
    this.pageIsInteractive();

    if (this.stage == PageStage.interactive) {
      this.stage = PageStage.complete;
      this.delegate.pageLoaded();
    }
  }

  get readyState() {
    return document.readyState;
  }

}

class ScrollObserver {
  constructor(delegate) {
    this.started = false;

    this.onScroll = () => {
      this.updatePosition({
        x: window.pageXOffset,
        y: window.pageYOffset
      });
    };

    this.delegate = delegate;
  }

  start() {
    if (!this.started) {
      addEventListener("scroll", this.onScroll, false);
      this.onScroll();
      this.started = true;
    }
  }

  stop() {
    if (this.started) {
      removeEventListener("scroll", this.onScroll, false);
      this.started = false;
    }
  }

  updatePosition(position) {
    this.delegate.scrollPositionChanged(position);
  }

}

class StreamObserver {
  constructor(delegate) {
    this.sources = new Set();
    this.started = false;

    this.inspectFetchResponse = event => {
      const response = fetchResponseFromEvent(event);

      if (response && fetchResponseIsStream(response)) {
        event.preventDefault();
        this.receiveMessageResponse(response);
      }
    };

    this.receiveMessageEvent = event => {
      if (this.started && typeof event.data == "string") {
        this.receiveMessageHTML(event.data);
      }
    };

    this.delegate = delegate;
  }

  start() {
    if (!this.started) {
      this.started = true;
      addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
    }
  }

  stop() {
    if (this.started) {
      this.started = false;
      removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
    }
  }

  connectStreamSource(source) {
    if (!this.streamSourceIsConnected(source)) {
      this.sources.add(source);
      source.addEventListener("message", this.receiveMessageEvent, false);
    }
  }

  disconnectStreamSource(source) {
    if (this.streamSourceIsConnected(source)) {
      this.sources.delete(source);
      source.removeEventListener("message", this.receiveMessageEvent, false);
    }
  }

  streamSourceIsConnected(source) {
    return this.sources.has(source);
  }

  async receiveMessageResponse(response) {
    const html = await response.responseHTML;

    if (html) {
      this.receiveMessageHTML(html);
    }
  }

  receiveMessageHTML(html) {
    this.delegate.receivedMessageFromStream(new StreamMessage(html));
  }

}

function fetchResponseFromEvent(event) {
  var _a;

  const fetchResponse = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.fetchResponse;

  if (fetchResponse instanceof FetchResponse) {
    return fetchResponse;
  }
}

function fetchResponseIsStream(response) {
  var _a;

  const contentType = (_a = response.contentType) !== null && _a !== void 0 ? _a : "";
  return contentType.startsWith(StreamMessage.contentType);
}

class ErrorRenderer extends Renderer {
  async render() {
    this.replaceHeadAndBody();
    this.activateScriptElements();
  }

  replaceHeadAndBody() {
    const _document = document,
          documentElement = _document.documentElement,
          head = _document.head,
          body = _document.body;
    documentElement.replaceChild(this.newHead, head);
    documentElement.replaceChild(this.newElement, body);
  }

  activateScriptElements() {
    for (const replaceableElement of this.scriptElements) {
      const parentNode = replaceableElement.parentNode;

      if (parentNode) {
        const element = this.createScriptElement(replaceableElement);
        parentNode.replaceChild(element, replaceableElement);
      }
    }
  }

  get newHead() {
    return this.newSnapshot.headSnapshot.element;
  }

  get scriptElements() {
    return [...document.documentElement.querySelectorAll("script")];
  }

}

class PageRenderer extends Renderer {
  get shouldRender() {
    return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
  }

  prepareToRender() {
    this.mergeHead();
  }

  async render() {
    if (this.willRender) {
      this.replaceBody();
    }
  }

  finishRendering() {
    super.finishRendering();

    if (!this.isPreview) {
      this.focusFirstAutofocusableElement();
    }
  }

  get currentHeadSnapshot() {
    return this.currentSnapshot.headSnapshot;
  }

  get newHeadSnapshot() {
    return this.newSnapshot.headSnapshot;
  }

  get newElement() {
    return this.newSnapshot.element;
  }

  mergeHead() {
    this.copyNewHeadStylesheetElements();
    this.copyNewHeadScriptElements();
    this.removeCurrentHeadProvisionalElements();
    this.copyNewHeadProvisionalElements();
  }

  replaceBody() {
    this.preservingPermanentElements(() => {
      this.activateNewBody();
      this.assignNewBody();
    });
  }

  get trackedElementsAreIdentical() {
    return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
  }

  copyNewHeadStylesheetElements() {
    for (const element of this.newHeadStylesheetElements) {
      document.head.appendChild(element);
    }
  }

  copyNewHeadScriptElements() {
    for (const element of this.newHeadScriptElements) {
      document.head.appendChild(this.createScriptElement(element));
    }
  }

  removeCurrentHeadProvisionalElements() {
    for (const element of this.currentHeadProvisionalElements) {
      document.head.removeChild(element);
    }
  }

  copyNewHeadProvisionalElements() {
    for (const element of this.newHeadProvisionalElements) {
      document.head.appendChild(element);
    }
  }

  activateNewBody() {
    document.adoptNode(this.newElement);
    this.activateNewBodyScriptElements();
  }

  activateNewBodyScriptElements() {
    for (const inertScriptElement of this.newBodyScriptElements) {
      const activatedScriptElement = this.createScriptElement(inertScriptElement);
      inertScriptElement.replaceWith(activatedScriptElement);
    }
  }

  assignNewBody() {
    if (document.body && this.newElement instanceof HTMLBodyElement) {
      document.body.replaceWith(this.newElement);
    } else {
      document.documentElement.appendChild(this.newElement);
    }
  }

  get newHeadStylesheetElements() {
    return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
  }

  get newHeadScriptElements() {
    return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
  }

  get currentHeadProvisionalElements() {
    return this.currentHeadSnapshot.provisionalElements;
  }

  get newHeadProvisionalElements() {
    return this.newHeadSnapshot.provisionalElements;
  }

  get newBodyScriptElements() {
    return this.newElement.querySelectorAll("script");
  }

}

class SnapshotCache {
  constructor(size) {
    this.keys = [];
    this.snapshots = {};
    this.size = size;
  }

  has(location) {
    return toCacheKey(location) in this.snapshots;
  }

  get(location) {
    if (this.has(location)) {
      const snapshot = this.read(location);
      this.touch(location);
      return snapshot;
    }
  }

  put(location, snapshot) {
    this.write(location, snapshot);
    this.touch(location);
    return snapshot;
  }

  clear() {
    this.snapshots = {};
  }

  read(location) {
    return this.snapshots[toCacheKey(location)];
  }

  write(location, snapshot) {
    this.snapshots[toCacheKey(location)] = snapshot;
  }

  touch(location) {
    const key = toCacheKey(location);
    const index = this.keys.indexOf(key);
    if (index > -1) this.keys.splice(index, 1);
    this.keys.unshift(key);
    this.trim();
  }

  trim() {
    for (const key of this.keys.splice(this.size)) {
      delete this.snapshots[key];
    }
  }

}

class PageView extends View {
  constructor() {
    super(...arguments);
    this.snapshotCache = new SnapshotCache(10);
    this.lastRenderedLocation = new URL(location.href);
  }

  renderPage(snapshot) {
    let isPreview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let willRender = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    const renderer = new PageRenderer(this.snapshot, snapshot, isPreview, willRender);
    return this.render(renderer);
  }

  renderError(snapshot) {
    const renderer = new ErrorRenderer(this.snapshot, snapshot, false);
    return this.render(renderer);
  }

  clearSnapshotCache() {
    this.snapshotCache.clear();
  }

  async cacheSnapshot() {
    if (this.shouldCacheSnapshot) {
      this.delegate.viewWillCacheSnapshot();
      const snapshot = this.snapshot,
            location = this.lastRenderedLocation;
      await nextEventLoopTick();
      const cachedSnapshot = snapshot.clone();
      this.snapshotCache.put(location, cachedSnapshot);
      return cachedSnapshot;
    }
  }

  getCachedSnapshotForLocation(location) {
    return this.snapshotCache.get(location);
  }

  get snapshot() {
    return PageSnapshot.fromElement(this.element);
  }

  get shouldCacheSnapshot() {
    return this.snapshot.isCacheable;
  }

}

class Session {
  constructor() {
    this.navigator = new Navigator(this);
    this.history = new History(this);
    this.view = new PageView(this, document.documentElement);
    this.adapter = new BrowserAdapter(this);
    this.pageObserver = new PageObserver(this);
    this.cacheObserver = new CacheObserver();
    this.linkClickObserver = new LinkClickObserver(this);
    this.formSubmitObserver = new FormSubmitObserver(this);
    this.scrollObserver = new ScrollObserver(this);
    this.streamObserver = new StreamObserver(this);
    this.frameRedirector = new FrameRedirector(document.documentElement);
    this.drive = true;
    this.enabled = true;
    this.progressBarDelay = 500;
    this.started = false;
  }

  start() {
    if (!this.started) {
      this.pageObserver.start();
      this.cacheObserver.start();
      this.linkClickObserver.start();
      this.formSubmitObserver.start();
      this.scrollObserver.start();
      this.streamObserver.start();
      this.frameRedirector.start();
      this.history.start();
      this.started = true;
      this.enabled = true;
    }
  }

  disable() {
    this.enabled = false;
  }

  stop() {
    if (this.started) {
      this.pageObserver.stop();
      this.cacheObserver.stop();
      this.linkClickObserver.stop();
      this.formSubmitObserver.stop();
      this.scrollObserver.stop();
      this.streamObserver.stop();
      this.frameRedirector.stop();
      this.history.stop();
      this.started = false;
    }
  }

  registerAdapter(adapter) {
    this.adapter = adapter;
  }

  visit(location) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.navigator.proposeVisit(expandURL(location), options);
  }

  connectStreamSource(source) {
    this.streamObserver.connectStreamSource(source);
  }

  disconnectStreamSource(source) {
    this.streamObserver.disconnectStreamSource(source);
  }

  renderStreamMessage(message) {
    document.documentElement.appendChild(StreamMessage.wrap(message).fragment);
  }

  clearCache() {
    this.view.clearSnapshotCache();
  }

  setProgressBarDelay(delay) {
    this.progressBarDelay = delay;
  }

  get location() {
    return this.history.location;
  }

  get restorationIdentifier() {
    return this.history.restorationIdentifier;
  }

  historyPoppedToLocationWithRestorationIdentifier(location, restorationIdentifier) {
    if (this.enabled) {
      this.navigator.startVisit(location, restorationIdentifier, {
        action: "restore",
        historyChanged: true
      });
    } else {
      this.adapter.pageInvalidated();
    }
  }

  scrollPositionChanged(position) {
    this.history.updateRestorationData({
      scrollPosition: position
    });
  }

  willFollowLinkToLocation(link, location) {
    return this.elementDriveEnabled(link) && locationIsVisitable(location, this.snapshot.rootLocation) && this.applicationAllowsFollowingLinkToLocation(link, location);
  }

  followedLinkToLocation(link, location) {
    const action = this.getActionForLink(link);
    this.convertLinkWithMethodClickToFormSubmission(link) || this.visit(location.href, {
      action
    });
  }

  convertLinkWithMethodClickToFormSubmission(link) {
    const linkMethod = link.getAttribute("data-turbo-method");

    if (linkMethod) {
      const form = document.createElement("form");
      form.method = linkMethod;
      form.action = link.getAttribute("href") || "undefined";
      form.hidden = true;

      if (link.hasAttribute("data-turbo-confirm")) {
        form.setAttribute("data-turbo-confirm", link.getAttribute("data-turbo-confirm"));
      }

      const frame = this.getTargetFrameForLink(link);

      if (frame) {
        form.setAttribute("data-turbo-frame", frame);
        form.addEventListener("turbo:submit-start", () => form.remove());
      } else {
        form.addEventListener("submit", () => form.remove());
      }

      document.body.appendChild(form);
      return dispatch("submit", {
        cancelable: true,
        target: form
      });
    } else {
      return false;
    }
  }

  allowsVisitingLocationWithAction(location, action) {
    return this.locationWithActionIsSamePage(location, action) || this.applicationAllowsVisitingLocation(location);
  }

  visitProposedToLocation(location, options) {
    extendURLWithDeprecatedProperties(location);
    this.adapter.visitProposedToLocation(location, options);
  }

  visitStarted(visit) {
    extendURLWithDeprecatedProperties(visit.location);

    if (!visit.silent) {
      this.notifyApplicationAfterVisitingLocation(visit.location, visit.action);
    }
  }

  visitCompleted(visit) {
    this.notifyApplicationAfterPageLoad(visit.getTimingMetrics());
  }

  locationWithActionIsSamePage(location, action) {
    return this.navigator.locationWithActionIsSamePage(location, action);
  }

  visitScrolledToSamePageLocation(oldURL, newURL) {
    this.notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL);
  }

  willSubmitForm(form, submitter) {
    const action = getAction(form, submitter);
    return this.elementDriveEnabled(form) && (!submitter || this.elementDriveEnabled(submitter)) && locationIsVisitable(expandURL(action), this.snapshot.rootLocation);
  }

  formSubmitted(form, submitter) {
    this.navigator.submitForm(form, submitter);
  }

  pageBecameInteractive() {
    this.view.lastRenderedLocation = this.location;
    this.notifyApplicationAfterPageLoad();
  }

  pageLoaded() {
    this.history.assumeControlOfScrollRestoration();
  }

  pageWillUnload() {
    this.history.relinquishControlOfScrollRestoration();
  }

  receivedMessageFromStream(message) {
    this.renderStreamMessage(message);
  }

  viewWillCacheSnapshot() {
    var _a;

    if (!((_a = this.navigator.currentVisit) === null || _a === void 0 ? void 0 : _a.silent)) {
      this.notifyApplicationBeforeCachingSnapshot();
    }
  }

  allowsImmediateRender(_ref12, resume) {
    let element = _ref12.element;
    const event = this.notifyApplicationBeforeRender(element, resume);
    return !event.defaultPrevented;
  }

  viewRenderedSnapshot(snapshot, isPreview) {
    this.view.lastRenderedLocation = this.history.location;
    this.notifyApplicationAfterRender();
  }

  viewInvalidated() {
    this.adapter.pageInvalidated();
  }

  frameLoaded(frame) {
    this.notifyApplicationAfterFrameLoad(frame);
  }

  frameRendered(fetchResponse, frame) {
    this.notifyApplicationAfterFrameRender(fetchResponse, frame);
  }

  applicationAllowsFollowingLinkToLocation(link, location) {
    const event = this.notifyApplicationAfterClickingLinkToLocation(link, location);
    return !event.defaultPrevented;
  }

  applicationAllowsVisitingLocation(location) {
    const event = this.notifyApplicationBeforeVisitingLocation(location);
    return !event.defaultPrevented;
  }

  notifyApplicationAfterClickingLinkToLocation(link, location) {
    return dispatch("turbo:click", {
      target: link,
      detail: {
        url: location.href
      },
      cancelable: true
    });
  }

  notifyApplicationBeforeVisitingLocation(location) {
    return dispatch("turbo:before-visit", {
      detail: {
        url: location.href
      },
      cancelable: true
    });
  }

  notifyApplicationAfterVisitingLocation(location, action) {
    markAsBusy(document.documentElement);
    return dispatch("turbo:visit", {
      detail: {
        url: location.href,
        action
      }
    });
  }

  notifyApplicationBeforeCachingSnapshot() {
    return dispatch("turbo:before-cache");
  }

  notifyApplicationBeforeRender(newBody, resume) {
    return dispatch("turbo:before-render", {
      detail: {
        newBody,
        resume
      },
      cancelable: true
    });
  }

  notifyApplicationAfterRender() {
    return dispatch("turbo:render");
  }

  notifyApplicationAfterPageLoad() {
    let timing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    clearBusyState(document.documentElement);
    return dispatch("turbo:load", {
      detail: {
        url: this.location.href,
        timing
      }
    });
  }

  notifyApplicationAfterVisitingSamePageLocation(oldURL, newURL) {
    dispatchEvent(new HashChangeEvent("hashchange", {
      oldURL: oldURL.toString(),
      newURL: newURL.toString()
    }));
  }

  notifyApplicationAfterFrameLoad(frame) {
    return dispatch("turbo:frame-load", {
      target: frame
    });
  }

  notifyApplicationAfterFrameRender(fetchResponse, frame) {
    return dispatch("turbo:frame-render", {
      detail: {
        fetchResponse
      },
      target: frame,
      cancelable: true
    });
  }

  elementDriveEnabled(element) {
    const container = element === null || element === void 0 ? void 0 : element.closest("[data-turbo]");

    if (this.drive) {
      if (container) {
        return container.getAttribute("data-turbo") != "false";
      } else {
        return true;
      }
    } else {
      if (container) {
        return container.getAttribute("data-turbo") == "true";
      } else {
        return false;
      }
    }
  }

  getActionForLink(link) {
    const action = link.getAttribute("data-turbo-action");
    return isAction(action) ? action : "advance";
  }

  getTargetFrameForLink(link) {
    const frame = link.getAttribute("data-turbo-frame");

    if (frame) {
      return frame;
    } else {
      const container = link.closest("turbo-frame");

      if (container) {
        return container.id;
      }
    }
  }

  get snapshot() {
    return this.view.snapshot;
  }

}

function extendURLWithDeprecatedProperties(url) {
  Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
}

const deprecatedLocationPropertyDescriptors = {
  absoluteURL: {
    get() {
      return this.toString();
    }

  }
};
const session = new Session();
const navigator$1 = session.navigator;

function start() {
  session.start();
}

function registerAdapter(adapter) {
  session.registerAdapter(adapter);
}

function visit(location, options) {
  session.visit(location, options);
}

function connectStreamSource(source) {
  session.connectStreamSource(source);
}

function disconnectStreamSource(source) {
  session.disconnectStreamSource(source);
}

function renderStreamMessage(message) {
  session.renderStreamMessage(message);
}

function clearCache() {
  session.clearCache();
}

function setProgressBarDelay(delay) {
  session.setProgressBarDelay(delay);
}

function setConfirmMethod(confirmMethod) {
  FormSubmission.confirmMethod = confirmMethod;
}

var Turbo = /*#__PURE__*/Object.freeze({
  __proto__: null,
  navigator: navigator$1,
  session: session,
  PageRenderer: PageRenderer,
  PageSnapshot: PageSnapshot,
  start: start,
  registerAdapter: registerAdapter,
  visit: visit,
  connectStreamSource: connectStreamSource,
  disconnectStreamSource: disconnectStreamSource,
  renderStreamMessage: renderStreamMessage,
  clearCache: clearCache,
  setProgressBarDelay: setProgressBarDelay,
  setConfirmMethod: setConfirmMethod
});

class FrameController {
  constructor(element) {
    this.fetchResponseLoaded = fetchResponse => {};

    this.currentFetchRequest = null;

    this.resolveVisitPromise = () => {};

    this.connected = false;
    this.hasBeenLoaded = false;
    this.settingSourceURL = false;
    this.element = element;
    this.view = new FrameView(this, this.element);
    this.appearanceObserver = new AppearanceObserver(this, this.element);
    this.linkInterceptor = new LinkInterceptor(this, this.element);
    this.formInterceptor = new FormInterceptor(this, this.element);
  }

  connect() {
    if (!this.connected) {
      this.connected = true;
      this.reloadable = false;

      if (this.loadingStyle == FrameLoadingStyle.lazy) {
        this.appearanceObserver.start();
      }

      this.linkInterceptor.start();
      this.formInterceptor.start();
      this.sourceURLChanged();
    }
  }

  disconnect() {
    if (this.connected) {
      this.connected = false;
      this.appearanceObserver.stop();
      this.linkInterceptor.stop();
      this.formInterceptor.stop();
    }
  }

  disabledChanged() {
    if (this.loadingStyle == FrameLoadingStyle.eager) {
      this.loadSourceURL();
    }
  }

  sourceURLChanged() {
    if (this.loadingStyle == FrameLoadingStyle.eager || this.hasBeenLoaded) {
      this.loadSourceURL();
    }
  }

  loadingStyleChanged() {
    if (this.loadingStyle == FrameLoadingStyle.lazy) {
      this.appearanceObserver.start();
    } else {
      this.appearanceObserver.stop();
      this.loadSourceURL();
    }
  }

  async loadSourceURL() {
    if (!this.settingSourceURL && this.enabled && this.isActive && (this.reloadable || this.sourceURL != this.currentURL)) {
      const previousURL = this.currentURL;
      this.currentURL = this.sourceURL;

      if (this.sourceURL) {
        try {
          this.element.loaded = this.visit(expandURL(this.sourceURL));
          this.appearanceObserver.stop();
          await this.element.loaded;
          this.hasBeenLoaded = true;
        } catch (error) {
          this.currentURL = previousURL;
          throw error;
        }
      }
    }
  }

  async loadResponse(fetchResponse) {
    if (fetchResponse.redirected || fetchResponse.succeeded && fetchResponse.isHTML) {
      this.sourceURL = fetchResponse.response.url;
    }

    try {
      const html = await fetchResponse.responseHTML;

      if (html) {
        const _parseHTMLDocument = parseHTMLDocument(html),
              body = _parseHTMLDocument.body;

        const snapshot = new Snapshot(await this.extractForeignFrameElement(body));
        const renderer = new FrameRenderer(this.view.snapshot, snapshot, false, false);
        if (this.view.renderPromise) await this.view.renderPromise;
        await this.view.render(renderer);
        session.frameRendered(fetchResponse, this.element);
        session.frameLoaded(this.element);
        this.fetchResponseLoaded(fetchResponse);
      }
    } catch (error) {
      console.error(error);
      this.view.invalidate();
    } finally {
      this.fetchResponseLoaded = () => {};
    }
  }

  elementAppearedInViewport(element) {
    this.loadSourceURL();
  }

  shouldInterceptLinkClick(element, url) {
    if (element.hasAttribute("data-turbo-method")) {
      return false;
    } else {
      return this.shouldInterceptNavigation(element);
    }
  }

  linkClickIntercepted(element, url) {
    this.reloadable = true;
    this.navigateFrame(element, url);
  }

  shouldInterceptFormSubmission(element, submitter) {
    return this.shouldInterceptNavigation(element, submitter);
  }

  formSubmissionIntercepted(element, submitter) {
    if (this.formSubmission) {
      this.formSubmission.stop();
    }

    this.reloadable = false;
    this.formSubmission = new FormSubmission(this, element, submitter);
    const fetchRequest = this.formSubmission.fetchRequest;
    this.prepareHeadersForRequest(fetchRequest.headers, fetchRequest);
    this.formSubmission.start();
  }

  prepareHeadersForRequest(headers, request) {
    headers["Turbo-Frame"] = this.id;
  }

  requestStarted(request) {
    markAsBusy(this.element);
  }

  requestPreventedHandlingResponse(request, response) {
    this.resolveVisitPromise();
  }

  async requestSucceededWithResponse(request, response) {
    await this.loadResponse(response);
    this.resolveVisitPromise();
  }

  requestFailedWithResponse(request, response) {
    console.error(response);
    this.resolveVisitPromise();
  }

  requestErrored(request, error) {
    console.error(error);
    this.resolveVisitPromise();
  }

  requestFinished(request) {
    clearBusyState(this.element);
  }

  formSubmissionStarted(_ref13) {
    let formElement = _ref13.formElement;
    markAsBusy(formElement, this.findFrameElement(formElement));
  }

  formSubmissionSucceededWithResponse(formSubmission, response) {
    const frame = this.findFrameElement(formSubmission.formElement, formSubmission.submitter);
    this.proposeVisitIfNavigatedWithAction(frame, formSubmission.formElement, formSubmission.submitter);
    frame.delegate.loadResponse(response);
  }

  formSubmissionFailedWithResponse(formSubmission, fetchResponse) {
    this.element.delegate.loadResponse(fetchResponse);
  }

  formSubmissionErrored(formSubmission, error) {
    console.error(error);
  }

  formSubmissionFinished(_ref14) {
    let formElement = _ref14.formElement;
    clearBusyState(formElement, this.findFrameElement(formElement));
  }

  allowsImmediateRender(snapshot, resume) {
    return true;
  }

  viewRenderedSnapshot(snapshot, isPreview) {}

  viewInvalidated() {}

  async visit(url) {
    var _a;

    const request = new FetchRequest(this, FetchMethod.get, url, new URLSearchParams(), this.element);
    (_a = this.currentFetchRequest) === null || _a === void 0 ? void 0 : _a.cancel();
    this.currentFetchRequest = request;
    return new Promise(resolve => {
      this.resolveVisitPromise = () => {
        this.resolveVisitPromise = () => {};

        this.currentFetchRequest = null;
        resolve();
      };

      request.perform();
    });
  }

  navigateFrame(element, url, submitter) {
    const frame = this.findFrameElement(element, submitter);
    this.proposeVisitIfNavigatedWithAction(frame, element, submitter);
    frame.setAttribute("reloadable", "");
    frame.src = url;
  }

  proposeVisitIfNavigatedWithAction(frame, element, submitter) {
    const action = getAttribute("data-turbo-action", submitter, element, frame);

    if (isAction(action)) {
      const _SnapshotSubstitution = new SnapshotSubstitution(frame),
            visitCachedSnapshot = _SnapshotSubstitution.visitCachedSnapshot;

      frame.delegate.fetchResponseLoaded = fetchResponse => {
        if (frame.src) {
          const statusCode = fetchResponse.statusCode,
                redirected = fetchResponse.redirected;
          const responseHTML = frame.ownerDocument.documentElement.outerHTML;
          const response = {
            statusCode,
            redirected,
            responseHTML
          };
          session.visit(frame.src, {
            action,
            response,
            visitCachedSnapshot,
            willRender: false
          });
        }
      };
    }
  }

  findFrameElement(element, submitter) {
    var _a;

    const id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");
    return (_a = getFrameElementById(id)) !== null && _a !== void 0 ? _a : this.element;
  }

  async extractForeignFrameElement(container) {
    let element;
    const id = CSS.escape(this.id);

    try {
      if (element = activateElement(container.querySelector("turbo-frame#".concat(id)), this.currentURL)) {
        return element;
      }

      if (element = activateElement(container.querySelector("turbo-frame[src][recurse~=".concat(id, "]")), this.currentURL)) {
        await element.loaded;
        return await this.extractForeignFrameElement(element);
      }

      console.error("Response has no matching <turbo-frame id=\"".concat(id, "\"> element"));
    } catch (error) {
      console.error(error);
    }

    return new FrameElement();
  }

  formActionIsVisitable(form, submitter) {
    const action = getAction(form, submitter);
    return locationIsVisitable(expandURL(action), this.rootLocation);
  }

  shouldInterceptNavigation(element, submitter) {
    const id = getAttribute("data-turbo-frame", submitter, element) || this.element.getAttribute("target");

    if (element instanceof HTMLFormElement && !this.formActionIsVisitable(element, submitter)) {
      return false;
    }

    if (!this.enabled || id == "_top") {
      return false;
    }

    if (id) {
      const frameElement = getFrameElementById(id);

      if (frameElement) {
        return !frameElement.disabled;
      }
    }

    if (!session.elementDriveEnabled(element)) {
      return false;
    }

    if (submitter && !session.elementDriveEnabled(submitter)) {
      return false;
    }

    return true;
  }

  get id() {
    return this.element.id;
  }

  get enabled() {
    return !this.element.disabled;
  }

  get sourceURL() {
    if (this.element.src) {
      return this.element.src;
    }
  }

  get reloadable() {
    const frame = this.findFrameElement(this.element);
    return frame.hasAttribute("reloadable");
  }

  set reloadable(value) {
    const frame = this.findFrameElement(this.element);

    if (value) {
      frame.setAttribute("reloadable", "");
    } else {
      frame.removeAttribute("reloadable");
    }
  }

  set sourceURL(sourceURL) {
    this.settingSourceURL = true;
    this.element.src = sourceURL !== null && sourceURL !== void 0 ? sourceURL : null;
    this.currentURL = this.element.src;
    this.settingSourceURL = false;
  }

  get loadingStyle() {
    return this.element.loading;
  }

  get isLoading() {
    return this.formSubmission !== undefined || this.resolveVisitPromise() !== undefined;
  }

  get isActive() {
    return this.element.isActive && this.connected;
  }

  get rootLocation() {
    var _a;

    const meta = this.element.ownerDocument.querySelector("meta[name=\"turbo-root\"]");
    const root = (_a = meta === null || meta === void 0 ? void 0 : meta.content) !== null && _a !== void 0 ? _a : "/";
    return expandURL(root);
  }

}

class SnapshotSubstitution {
  constructor(element) {
    this.visitCachedSnapshot = _ref15 => {
      let element = _ref15.element;

      var _a;

      const id = this.id,
            clone = this.clone;
      (_a = element.querySelector("#" + id)) === null || _a === void 0 ? void 0 : _a.replaceWith(clone);
    };

    this.clone = element.cloneNode(true);
    this.id = element.id;
  }

}

function getFrameElementById(id) {
  if (id != null) {
    const element = document.getElementById(id);

    if (element instanceof FrameElement) {
      return element;
    }
  }
}

function activateElement(element, currentURL) {
  if (element) {
    const src = element.getAttribute("src");

    if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) {
      throw new Error("Matching <turbo-frame id=\"".concat(element.id, "\"> element has a source URL which references itself"));
    }

    if (element.ownerDocument !== document) {
      element = document.importNode(element, true);
    }

    if (element instanceof FrameElement) {
      element.connectedCallback();
      element.disconnectedCallback();
      return element;
    }
  }
}

const StreamActions = {
  after() {
    this.targetElements.forEach(e => {
      var _a;

      return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(this.templateContent, e.nextSibling);
    });
  },

  append() {
    this.removeDuplicateTargetChildren();
    this.targetElements.forEach(e => e.append(this.templateContent));
  },

  before() {
    this.targetElements.forEach(e => {
      var _a;

      return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(this.templateContent, e);
    });
  },

  prepend() {
    this.removeDuplicateTargetChildren();
    this.targetElements.forEach(e => e.prepend(this.templateContent));
  },

  remove() {
    this.targetElements.forEach(e => e.remove());
  },

  replace() {
    this.targetElements.forEach(e => e.replaceWith(this.templateContent));
  },

  update() {
    this.targetElements.forEach(e => {
      e.innerHTML = "";
      e.append(this.templateContent);
    });
  }

};

class StreamElement extends HTMLElement {
  async connectedCallback() {
    try {
      await this.render();
    } catch (error) {
      console.error(error);
    } finally {
      this.disconnect();
    }
  }

  async render() {
    var _a;

    return (_a = this.renderPromise) !== null && _a !== void 0 ? _a : this.renderPromise = (async () => {
      if (this.dispatchEvent(this.beforeRenderEvent)) {
        await nextAnimationFrame();
        this.performAction();
      }
    })();
  }

  disconnect() {
    try {
      this.remove();
    } catch (_a) {}
  }

  removeDuplicateTargetChildren() {
    this.duplicateChildren.forEach(c => c.remove());
  }

  get duplicateChildren() {
    var _a;

    const existingChildren = this.targetElements.flatMap(e => [...e.children]).filter(c => !!c.id);
    const newChildrenIds = [...((_a = this.templateContent) === null || _a === void 0 ? void 0 : _a.children)].filter(c => !!c.id).map(c => c.id);
    return existingChildren.filter(c => newChildrenIds.includes(c.id));
  }

  get performAction() {
    if (this.action) {
      const actionFunction = StreamActions[this.action];

      if (actionFunction) {
        return actionFunction;
      }

      this.raise("unknown action");
    }

    this.raise("action attribute is missing");
  }

  get targetElements() {
    if (this.target) {
      return this.targetElementsById;
    } else if (this.targets) {
      return this.targetElementsByQuery;
    } else {
      this.raise("target or targets attribute is missing");
    }
  }

  get templateContent() {
    return this.templateElement.content.cloneNode(true);
  }

  get templateElement() {
    if (this.firstElementChild instanceof HTMLTemplateElement) {
      return this.firstElementChild;
    }

    this.raise("first child element must be a <template> element");
  }

  get action() {
    return this.getAttribute("action");
  }

  get target() {
    return this.getAttribute("target");
  }

  get targets() {
    return this.getAttribute("targets");
  }

  raise(message) {
    throw new Error("".concat(this.description, ": ").concat(message));
  }

  get description() {
    var _a, _b;

    return (_b = ((_a = this.outerHTML.match(/<[^>]+>/)) !== null && _a !== void 0 ? _a : [])[0]) !== null && _b !== void 0 ? _b : "<turbo-stream>";
  }

  get beforeRenderEvent() {
    return new CustomEvent("turbo:before-stream-render", {
      bubbles: true,
      cancelable: true
    });
  }

  get targetElementsById() {
    var _a;

    const element = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.getElementById(this.target);

    if (element !== null) {
      return [element];
    } else {
      return [];
    }
  }

  get targetElementsByQuery() {
    var _a;

    const elements = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.targets);

    if (elements.length !== 0) {
      return Array.prototype.slice.call(elements);
    } else {
      return [];
    }
  }

}

FrameElement.delegateConstructor = FrameController;
customElements.define("turbo-frame", FrameElement);
customElements.define("turbo-stream", StreamElement);

(() => {
  let element = document.currentScript;
  if (!element) return;
  if (element.hasAttribute("data-turbo-suppress-warning")) return;

  while (element = element.parentElement) {
    if (element == document.body) {
      return console.warn(unindent(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!\n\n        Load your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\n        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements\n\n        \u2014\u2014\n        Suppress this warning by adding a \"data-turbo-suppress-warning\" attribute to: %s\n      "]))), element.outerHTML);
    }
  }
})();

window.Turbo = Turbo;
start();


/***/ }),

/***/ "./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js ***!
  \***************************************************************************************/
/*! exports provided: AttachmentUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentUpload", function() { return AttachmentUpload; });
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_0__);

class AttachmentUpload {
  constructor(attachment, element) {
    this.attachment = attachment;
    this.element = element;
    this.directUpload = new _rails_activestorage__WEBPACK_IMPORTED_MODULE_0__["DirectUpload"](attachment.file, this.directUploadUrl, this);
  }

  start() {
    this.directUpload.create(this.directUploadDidComplete.bind(this));
  }

  directUploadWillStoreFileWithXHR(xhr) {
    xhr.upload.addEventListener("progress", event => {
      const progress = event.loaded / event.total * 100;
      this.attachment.setUploadProgress(progress);
    });
  }

  directUploadDidComplete(error, attributes) {
    if (error) {
      throw new Error("Direct upload failed: ".concat(error));
    }

    this.attachment.setAttributes({
      sgid: attributes.attachable_sgid,
      url: this.createBlobUrl(attributes.signed_id, attributes.filename)
    });
  }

  createBlobUrl(signedId, filename) {
    return this.blobUrlTemplate.replace(":signed_id", signedId).replace(":filename", encodeURIComponent(filename));
  }

  get directUploadUrl() {
    return this.element.dataset.directUploadUrl;
  }

  get blobUrlTemplate() {
    return this.element.dataset.blobUrlTemplate;
  }

}

/***/ }),

/***/ "./node_modules/@rails/actiontext/app/javascript/actiontext/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@rails/actiontext/app/javascript/actiontext/index.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attachment_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachment_upload */ "./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js");

addEventListener("trix-attachment-add", event => {
  const attachment = event.attachment,
        target = event.target;

  if (attachment.file) {
    const upload = new _attachment_upload__WEBPACK_IMPORTED_MODULE_0__["AttachmentUpload"](attachment, target);
    upload.start();
  }
});

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function (event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function () {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function (options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function (options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function (response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function (e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function (element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function (element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function (element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function (form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function (element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function (form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function (element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function (event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function (element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function (xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if ( true && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/trix/dist/trix.js":
/*!****************************************!*\
  !*** ./node_modules/trix/dist/trix.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Trix 1.3.1
Copyright © 2020 Basecamp, LLC
http://trix-editor.org/
 */
(function () {}).call(this), function () {
  var t;
  null == window.Set && (window.Set = t = function () {
    function t() {
      this.clear();
    }

    return t.prototype.clear = function () {
      return this.values = [];
    }, t.prototype.has = function (t) {
      return -1 !== this.values.indexOf(t);
    }, t.prototype.add = function (t) {
      return this.has(t) || this.values.push(t), this;
    }, t.prototype["delete"] = function (t) {
      var e;
      return -1 === (e = this.values.indexOf(t)) ? !1 : (this.values.splice(e, 1), !0);
    }, t.prototype.forEach = function () {
      var t;
      return (t = this.values).forEach.apply(t, arguments);
    }, t;
  }());
}.call(this), function (t) {
  function e() {}

  function n(t, e) {
    return function () {
      t.apply(e, arguments);
    };
  }

  function i(t) {
    if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof t) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(t, this);
  }

  function o(t, e) {
    for (; 3 === t._state;) t = t._value;

    return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void h(function () {
      var n = 1 === t._state ? e.onFulfilled : e.onRejected;
      if (null === n) return void (1 === t._state ? r : s)(e.promise, t._value);
      var i;

      try {
        i = n(t._value);
      } catch (o) {
        return void s(e.promise, o);
      }

      r(e.promise, i);
    }));
  }

  function r(t, e) {
    try {
      if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

      if (e && ("object" == typeof e || "function" == typeof e)) {
        var o = e.then;
        if (e instanceof i) return t._state = 3, t._value = e, void a(t);
        if ("function" == typeof o) return void c(n(o, e), t);
      }

      t._state = 1, t._value = e, a(t);
    } catch (r) {
      s(t, r);
    }
  }

  function s(t, e) {
    t._state = 2, t._value = e, a(t);
  }

  function a(t) {
    2 === t._state && 0 === t._deferreds.length && setTimeout(function () {
      t._handled || p(t._value);
    }, 1);

    for (var e = 0, n = t._deferreds.length; n > e; e++) o(t, t._deferreds[e]);

    t._deferreds = null;
  }

  function u(t, e, n) {
    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
  }

  function c(t, e) {
    var n = !1;

    try {
      t(function (t) {
        n || (n = !0, r(e, t));
      }, function (t) {
        n || (n = !0, s(e, t));
      });
    } catch (i) {
      if (n) return;
      n = !0, s(e, i);
    }
  }

  var l = setTimeout,
      h = "function" == typeof setImmediate && setImmediate || function (t) {
    l(t, 1);
  },
      p = function (t) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
  };

  i.prototype["catch"] = function (t) {
    return this.then(null, t);
  }, i.prototype.then = function (t, n) {
    var r = new i(e);
    return o(this, new u(t, n, r)), r;
  }, i.all = function (t) {
    var e = Array.prototype.slice.call(t);
    return new i(function (t, n) {
      function i(r, s) {
        try {
          if (s && ("object" == typeof s || "function" == typeof s)) {
            var a = s.then;
            if ("function" == typeof a) return void a.call(s, function (t) {
              i(r, t);
            }, n);
          }

          e[r] = s, 0 === --o && t(e);
        } catch (u) {
          n(u);
        }
      }

      if (0 === e.length) return t([]);

      for (var o = e.length, r = 0; r < e.length; r++) i(r, e[r]);
    });
  }, i.resolve = function (t) {
    return t && "object" == typeof t && t.constructor === i ? t : new i(function (e) {
      e(t);
    });
  }, i.reject = function (t) {
    return new i(function (e, n) {
      n(t);
    });
  }, i.race = function (t) {
    return new i(function (e, n) {
      for (var i = 0, o = t.length; o > i; i++) t[i].then(e, n);
    });
  }, i._setImmediateFn = function (t) {
    h = t;
  }, i._setUnhandledRejectionFn = function (t) {
    p = t;
  },  true && module.exports ? module.exports = i : t.Promise || (t.Promise = i);
}(this), function () {
  var t = "object" == typeof window.customElements,
      e = "function" == typeof document.registerElement,
      n = t || e;
  n || (
  /**
  * @license
  * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  * Code distributed by Google as part of the polymer project is also
  * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  "undefined" == typeof WeakMap && !function () {
    var t = Object.defineProperty,
        e = Date.now() % 1e9,
        n = function () {
      this.name = "__st" + (1e9 * Math.random() >>> 0) + (e++ + "__");
    };

    n.prototype = {
      set: function (e, n) {
        var i = e[this.name];
        return i && i[0] === e ? i[1] = n : t(e, this.name, {
          value: [e, n],
          writable: !0
        }), this;
      },
      get: function (t) {
        var e;
        return (e = t[this.name]) && e[0] === t ? e[1] : void 0;
      },
      "delete": function (t) {
        var e = t[this.name];
        return e && e[0] === t ? (e[0] = e[1] = void 0, !0) : !1;
      },
      has: function (t) {
        var e = t[this.name];
        return e ? e[0] === t : !1;
      }
    }, window.WeakMap = n;
  }(), function (t) {
    function e(t) {
      A.push(t), b || (b = !0, g(i));
    }

    function n(t) {
      return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(t) || t;
    }

    function i() {
      b = !1;
      var t = A;
      A = [], t.sort(function (t, e) {
        return t.uid_ - e.uid_;
      });
      var e = !1;
      t.forEach(function (t) {
        var n = t.takeRecords();
        o(t), n.length && (t.callback_(n, t), e = !0);
      }), e && i();
    }

    function o(t) {
      t.nodes_.forEach(function (e) {
        var n = m.get(e);
        n && n.forEach(function (e) {
          e.observer === t && e.removeTransientObservers();
        });
      });
    }

    function r(t, e) {
      for (var n = t; n; n = n.parentNode) {
        var i = m.get(n);
        if (i) for (var o = 0; o < i.length; o++) {
          var r = i[o],
              s = r.options;

          if (n === t || s.subtree) {
            var a = e(s);
            a && r.enqueue(a);
          }
        }
      }
    }

    function s(t) {
      this.callback_ = t, this.nodes_ = [], this.records_ = [], this.uid_ = ++C;
    }

    function a(t, e) {
      this.type = t, this.target = e, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null;
    }

    function u(t) {
      var e = new a(t.type, t.target);
      return e.addedNodes = t.addedNodes.slice(), e.removedNodes = t.removedNodes.slice(), e.previousSibling = t.previousSibling, e.nextSibling = t.nextSibling, e.attributeName = t.attributeName, e.attributeNamespace = t.attributeNamespace, e.oldValue = t.oldValue, e;
    }

    function c(t, e) {
      return x = new a(t, e);
    }

    function l(t) {
      return w ? w : (w = u(x), w.oldValue = t, w);
    }

    function h() {
      x = w = void 0;
    }

    function p(t) {
      return t === w || t === x;
    }

    function d(t, e) {
      return t === e ? t : w && p(t) ? w : null;
    }

    function f(t, e, n) {
      this.observer = t, this.target = e, this.options = n, this.transientObservedNodes = [];
    }

    if (!t.JsMutationObserver) {
      var g,
          m = new WeakMap();
      if (/Trident|Edge/.test(navigator.userAgent)) g = setTimeout;else if (window.setImmediate) g = window.setImmediate;else {
        var v = [],
            y = String(Math.random());
        window.addEventListener("message", function (t) {
          if (t.data === y) {
            var e = v;
            v = [], e.forEach(function (t) {
              t();
            });
          }
        }), g = function (t) {
          v.push(t), window.postMessage(y, "*");
        };
      }
      var b = !1,
          A = [],
          C = 0;
      s.prototype = {
        observe: function (t, e) {
          if (t = n(t), !e.childList && !e.attributes && !e.characterData || e.attributeOldValue && !e.attributes || e.attributeFilter && e.attributeFilter.length && !e.attributes || e.characterDataOldValue && !e.characterData) throw new SyntaxError();
          var i = m.get(t);
          i || m.set(t, i = []);

          for (var o, r = 0; r < i.length; r++) if (i[r].observer === this) {
            o = i[r], o.removeListeners(), o.options = e;
            break;
          }

          o || (o = new f(this, t, e), i.push(o), this.nodes_.push(t)), o.addListeners();
        },
        disconnect: function () {
          this.nodes_.forEach(function (t) {
            for (var e = m.get(t), n = 0; n < e.length; n++) {
              var i = e[n];

              if (i.observer === this) {
                i.removeListeners(), e.splice(n, 1);
                break;
              }
            }
          }, this), this.records_ = [];
        },
        takeRecords: function () {
          var t = this.records_;
          return this.records_ = [], t;
        }
      };
      var x, w;
      f.prototype = {
        enqueue: function (t) {
          var n = this.observer.records_,
              i = n.length;

          if (n.length > 0) {
            var o = n[i - 1],
                r = d(o, t);
            if (r) return void (n[i - 1] = r);
          } else e(this.observer);

          n[i] = t;
        },
        addListeners: function () {
          this.addListeners_(this.target);
        },
        addListeners_: function (t) {
          var e = this.options;
          e.attributes && t.addEventListener("DOMAttrModified", this, !0), e.characterData && t.addEventListener("DOMCharacterDataModified", this, !0), e.childList && t.addEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.addEventListener("DOMNodeRemoved", this, !0);
        },
        removeListeners: function () {
          this.removeListeners_(this.target);
        },
        removeListeners_: function (t) {
          var e = this.options;
          e.attributes && t.removeEventListener("DOMAttrModified", this, !0), e.characterData && t.removeEventListener("DOMCharacterDataModified", this, !0), e.childList && t.removeEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.removeEventListener("DOMNodeRemoved", this, !0);
        },
        addTransientObserver: function (t) {
          if (t !== this.target) {
            this.addListeners_(t), this.transientObservedNodes.push(t);
            var e = m.get(t);
            e || m.set(t, e = []), e.push(this);
          }
        },
        removeTransientObservers: function () {
          var t = this.transientObservedNodes;
          this.transientObservedNodes = [], t.forEach(function (t) {
            this.removeListeners_(t);

            for (var e = m.get(t), n = 0; n < e.length; n++) if (e[n] === this) {
              e.splice(n, 1);
              break;
            }
          }, this);
        },
        handleEvent: function (t) {
          switch (t.stopImmediatePropagation(), t.type) {
            case "DOMAttrModified":
              var e = t.attrName,
                  n = t.relatedNode.namespaceURI,
                  i = t.target,
                  o = new c("attributes", i);
              o.attributeName = e, o.attributeNamespace = n;
              var s = t.attrChange === MutationEvent.ADDITION ? null : t.prevValue;
              r(i, function (t) {
                return !t.attributes || t.attributeFilter && t.attributeFilter.length && -1 === t.attributeFilter.indexOf(e) && -1 === t.attributeFilter.indexOf(n) ? void 0 : t.attributeOldValue ? l(s) : o;
              });
              break;

            case "DOMCharacterDataModified":
              var i = t.target,
                  o = c("characterData", i),
                  s = t.prevValue;
              r(i, function (t) {
                return t.characterData ? t.characterDataOldValue ? l(s) : o : void 0;
              });
              break;

            case "DOMNodeRemoved":
              this.addTransientObserver(t.target);

            case "DOMNodeInserted":
              var a,
                  u,
                  p = t.target;
              "DOMNodeInserted" === t.type ? (a = [p], u = []) : (a = [], u = [p]);
              var d = p.previousSibling,
                  f = p.nextSibling,
                  o = c("childList", t.target.parentNode);
              o.addedNodes = a, o.removedNodes = u, o.previousSibling = d, o.nextSibling = f, r(t.relatedNode, function (t) {
                return t.childList ? o : void 0;
              });
          }

          h();
        }
      }, t.JsMutationObserver = s, t.MutationObserver || (t.MutationObserver = s, s._isPolyfilled = !0);
    }
  }(self), function () {
    "use strict";

    if (!window.performance || !window.performance.now) {
      var t = Date.now();
      window.performance = {
        now: function () {
          return Date.now() - t;
        }
      };
    }

    window.requestAnimationFrame || (window.requestAnimationFrame = function () {
      var t = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      return t ? function (e) {
        return t(function () {
          e(performance.now());
        });
      } : function (t) {
        return window.setTimeout(t, 1e3 / 60);
      };
    }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function () {
      return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (t) {
        clearTimeout(t);
      };
    }());

    var e = function () {
      var t = document.createEvent("Event");
      return t.initEvent("foo", !0, !0), t.preventDefault(), t.defaultPrevented;
    }();

    if (!e) {
      var n = Event.prototype.preventDefault;

      Event.prototype.preventDefault = function () {
        this.cancelable && (n.call(this), Object.defineProperty(this, "defaultPrevented", {
          get: function () {
            return !0;
          },
          configurable: !0
        }));
      };
    }

    var i = /Trident/.test(navigator.userAgent);

    if ((!window.CustomEvent || i && "function" != typeof window.CustomEvent) && (window.CustomEvent = function (t, e) {
      e = e || {};
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, Boolean(e.bubbles), Boolean(e.cancelable), e.detail), n;
    }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || i && "function" != typeof window.Event) {
      var o = window.Event;
      window.Event = function (t, e) {
        e = e || {};
        var n = document.createEvent("Event");
        return n.initEvent(t, Boolean(e.bubbles), Boolean(e.cancelable)), n;
      }, window.Event.prototype = o.prototype;
    }
  }(window.WebComponents), window.CustomElements = window.CustomElements || {
    flags: {}
  }, function (t) {
    var e = t.flags,
        n = [],
        i = function (t) {
      n.push(t);
    },
        o = function () {
      n.forEach(function (e) {
        e(t);
      });
    };

    t.addModule = i, t.initializeModules = o, t.hasNative = Boolean(document.registerElement), t.isIE = /Trident/.test(navigator.userAgent), t.useNative = !e.register && t.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
  }(window.CustomElements), window.CustomElements.addModule(function (t) {
    function e(t, e) {
      n(t, function (t) {
        return e(t) ? !0 : void i(t, e);
      }), i(t, e);
    }

    function n(t, e, i) {
      var o = t.firstElementChild;
      if (!o) for (o = t.firstChild; o && o.nodeType !== Node.ELEMENT_NODE;) o = o.nextSibling;

      for (; o;) e(o, i) !== !0 && n(o, e, i), o = o.nextElementSibling;

      return null;
    }

    function i(t, n) {
      for (var i = t.shadowRoot; i;) e(i, n), i = i.olderShadowRoot;
    }

    function o(t, e) {
      r(t, e, []);
    }

    function r(t, e, n) {
      if (t = window.wrap(t), !(n.indexOf(t) >= 0)) {
        n.push(t);

        for (var i, o = t.querySelectorAll("link[rel=" + s + "]"), a = 0, u = o.length; u > a && (i = o[a]); a++) i.import && r(i.import, e, n);

        e(t);
      }
    }

    var s = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
    t.forDocumentTree = o, t.forSubtree = e;
  }), window.CustomElements.addModule(function (t) {
    function e(t, e) {
      return n(t, e) || i(t, e);
    }

    function n(e, n) {
      return t.upgrade(e, n) ? !0 : void (n && s(e));
    }

    function i(t, e) {
      b(t, function (t) {
        return n(t, e) ? !0 : void 0;
      });
    }

    function o(t) {
      w.push(t), x || (x = !0, setTimeout(r));
    }

    function r() {
      x = !1;

      for (var t, e = w, n = 0, i = e.length; i > n && (t = e[n]); n++) t();

      w = [];
    }

    function s(t) {
      C ? o(function () {
        a(t);
      }) : a(t);
    }

    function a(t) {
      t.__upgraded__ && !t.__attached && (t.__attached = !0, t.attachedCallback && t.attachedCallback());
    }

    function u(t) {
      c(t), b(t, function (t) {
        c(t);
      });
    }

    function c(t) {
      C ? o(function () {
        l(t);
      }) : l(t);
    }

    function l(t) {
      t.__upgraded__ && t.__attached && (t.__attached = !1, t.detachedCallback && t.detachedCallback());
    }

    function h(t) {
      for (var e = t, n = window.wrap(document); e;) {
        if (e == n) return !0;
        e = e.parentNode || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host;
      }
    }

    function p(t) {
      if (t.shadowRoot && !t.shadowRoot.__watched) {
        y.dom && console.log("watching shadow-root for: ", t.localName);

        for (var e = t.shadowRoot; e;) g(e), e = e.olderShadowRoot;
      }
    }

    function d(t, n) {
      if (y.dom) {
        var i = n[0];

        if (i && "childList" === i.type && i.addedNodes && i.addedNodes) {
          for (var o = i.addedNodes[0]; o && o !== document && !o.host;) o = o.parentNode;

          var r = o && (o.URL || o._URL || o.host && o.host.localName) || "";
          r = r.split("/?").shift().split("/").pop();
        }

        console.group("mutations (%d) [%s]", n.length, r || "");
      }

      var s = h(t);
      n.forEach(function (t) {
        "childList" === t.type && (E(t.addedNodes, function (t) {
          t.localName && e(t, s);
        }), E(t.removedNodes, function (t) {
          t.localName && u(t);
        }));
      }), y.dom && console.groupEnd();
    }

    function f(t) {
      for (t = window.wrap(t), t || (t = window.wrap(document)); t.parentNode;) t = t.parentNode;

      var e = t.__observer;
      e && (d(t, e.takeRecords()), r());
    }

    function g(t) {
      if (!t.__observer) {
        var e = new MutationObserver(d.bind(this, t));
        e.observe(t, {
          childList: !0,
          subtree: !0
        }), t.__observer = e;
      }
    }

    function m(t) {
      t = window.wrap(t), y.dom && console.group("upgradeDocument: ", t.baseURI.split("/").pop());
      var n = t === window.wrap(document);
      e(t, n), g(t), y.dom && console.groupEnd();
    }

    function v(t) {
      A(t, m);
    }

    var y = t.flags,
        b = t.forSubtree,
        A = t.forDocumentTree,
        C = window.MutationObserver._isPolyfilled && y["throttle-attached"];
    t.hasPolyfillMutations = C, t.hasThrottledAttached = C;
    var x = !1,
        w = [],
        E = Array.prototype.forEach.call.bind(Array.prototype.forEach),
        S = Element.prototype.createShadowRoot;
    S && (Element.prototype.createShadowRoot = function () {
      var t = S.call(this);
      return window.CustomElements.watchShadow(this), t;
    }), t.watchShadow = p, t.upgradeDocumentTree = v, t.upgradeDocument = m, t.upgradeSubtree = i, t.upgradeAll = e, t.attached = s, t.takeRecords = f;
  }), window.CustomElements.addModule(function (t) {
    function e(e, i) {
      if ("template" === e.localName && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(e), !e.__upgraded__ && e.nodeType === Node.ELEMENT_NODE) {
        var o = e.getAttribute("is"),
            r = t.getRegisteredDefinition(e.localName) || t.getRegisteredDefinition(o);
        if (r && (o && r.tag == e.localName || !o && !r.extends)) return n(e, r, i);
      }
    }

    function n(e, n, o) {
      return s.upgrade && console.group("upgrade:", e.localName), n.is && e.setAttribute("is", n.is), i(e, n), e.__upgraded__ = !0, r(e), o && t.attached(e), t.upgradeSubtree(e, o), s.upgrade && console.groupEnd(), e;
    }

    function i(t, e) {
      Object.__proto__ ? t.__proto__ = e.prototype : (o(t, e.prototype, e.native), t.__proto__ = e.prototype);
    }

    function o(t, e, n) {
      for (var i = {}, o = e; o !== n && o !== HTMLElement.prototype;) {
        for (var r, s = Object.getOwnPropertyNames(o), a = 0; r = s[a]; a++) i[r] || (Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(o, r)), i[r] = 1);

        o = Object.getPrototypeOf(o);
      }
    }

    function r(t) {
      t.createdCallback && t.createdCallback();
    }

    var s = t.flags;
    t.upgrade = e, t.upgradeWithDefinition = n, t.implementPrototype = i;
  }), window.CustomElements.addModule(function (t) {
    function e(e, i) {
      var u = i || {};
      if (!e) throw new Error("document.registerElement: first argument `name` must not be empty");
      if (e.indexOf("-") < 0) throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(e) + "'.");
      if (o(e)) throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(e) + "'. The type name is invalid.");
      if (c(e)) throw new Error("DuplicateDefinitionError: a type with name '" + String(e) + "' is already registered");
      return u.prototype || (u.prototype = Object.create(HTMLElement.prototype)), u.__name = e.toLowerCase(), u.extends && (u.extends = u.extends.toLowerCase()), u.lifecycle = u.lifecycle || {}, u.ancestry = r(u.extends), s(u), a(u), n(u.prototype), l(u.__name, u), u.ctor = h(u), u.ctor.prototype = u.prototype, u.prototype.constructor = u.ctor, t.ready && m(document), u.ctor;
    }

    function n(t) {
      if (!t.setAttribute._polyfilled) {
        var e = t.setAttribute;

        t.setAttribute = function (t, n) {
          i.call(this, t, n, e);
        };

        var n = t.removeAttribute;
        t.removeAttribute = function (t) {
          i.call(this, t, null, n);
        }, t.setAttribute._polyfilled = !0;
      }
    }

    function i(t, e, n) {
      t = t.toLowerCase();
      var i = this.getAttribute(t);
      n.apply(this, arguments);
      var o = this.getAttribute(t);
      this.attributeChangedCallback && o !== i && this.attributeChangedCallback(t, i, o);
    }

    function o(t) {
      for (var e = 0; e < C.length; e++) if (t === C[e]) return !0;
    }

    function r(t) {
      var e = c(t);
      return e ? r(e.extends).concat([e]) : [];
    }

    function s(t) {
      for (var e, n = t.extends, i = 0; e = t.ancestry[i]; i++) n = e.is && e.tag;

      t.tag = n || t.__name, n && (t.is = t.__name);
    }

    function a(t) {
      if (!Object.__proto__) {
        var e = HTMLElement.prototype;

        if (t.is) {
          var n = document.createElement(t.tag);
          e = Object.getPrototypeOf(n);
        }

        for (var i, o = t.prototype, r = !1; o;) o == e && (r = !0), i = Object.getPrototypeOf(o), i && (o.__proto__ = i), o = i;

        r || console.warn(t.tag + " prototype not found in prototype chain for " + t.is), t.native = e;
      }
    }

    function u(t) {
      return y(E(t.tag), t);
    }

    function c(t) {
      return t ? x[t.toLowerCase()] : void 0;
    }

    function l(t, e) {
      x[t] = e;
    }

    function h(t) {
      return function () {
        return u(t);
      };
    }

    function p(t, e, n) {
      return t === w ? d(e, n) : S(t, e);
    }

    function d(t, e) {
      t && (t = t.toLowerCase()), e && (e = e.toLowerCase());
      var n = c(e || t);

      if (n) {
        if (t == n.tag && e == n.is) return new n.ctor();
        if (!e && !n.is) return new n.ctor();
      }

      var i;
      return e ? (i = d(t), i.setAttribute("is", e), i) : (i = E(t), t.indexOf("-") >= 0 && b(i, HTMLElement), i);
    }

    function f(t, e) {
      var n = t[e];

      t[e] = function () {
        var t = n.apply(this, arguments);
        return v(t), t;
      };
    }

    var g,
        m = (t.isIE, t.upgradeDocumentTree),
        v = t.upgradeAll,
        y = t.upgradeWithDefinition,
        b = t.implementPrototype,
        A = t.useNative,
        C = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"],
        x = {},
        w = "http://www.w3.org/1999/xhtml",
        E = document.createElement.bind(document),
        S = document.createElementNS.bind(document);
    g = Object.__proto__ || A ? function (t, e) {
      return t instanceof e;
    } : function (t, e) {
      if (t instanceof e) return !0;

      for (var n = t; n;) {
        if (n === e.prototype) return !0;
        n = n.__proto__;
      }

      return !1;
    }, f(Node.prototype, "cloneNode"), f(document, "importNode"), document.registerElement = e, document.createElement = d, document.createElementNS = p, t.registry = x, t.instanceof = g, t.reservedTagList = C, t.getRegisteredDefinition = c, document.register = document.registerElement;
  }), function (t) {
    function e() {
      r(window.wrap(document)), window.CustomElements.ready = !0;

      var t = window.requestAnimationFrame || function (t) {
        setTimeout(t, 16);
      };

      t(function () {
        setTimeout(function () {
          window.CustomElements.readyTime = Date.now(), window.HTMLImports && (window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime), document.dispatchEvent(new CustomEvent("WebComponentsReady", {
            bubbles: !0
          }));
        });
      });
    }

    var n = t.useNative,
        i = t.initializeModules;

    if (t.isIE, n) {
      var o = function () {};

      t.watchShadow = o, t.upgrade = o, t.upgradeAll = o, t.upgradeDocumentTree = o, t.upgradeSubtree = o, t.takeRecords = o, t.instanceof = function (t, e) {
        return t instanceof e;
      };
    } else i();

    var r = t.upgradeDocumentTree,
        s = t.upgradeDocument;
    if (window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function (t) {
      return t;
    }), window.HTMLImports && (window.HTMLImports.__importsParsingHook = function (t) {
      t.import && s(wrap(t.import));
    }), "complete" === document.readyState || t.flags.eager) e();else if ("interactive" !== document.readyState || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
      var a = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
      window.addEventListener(a, e);
    } else e();
  }(window.CustomElements));
}.call(this), function () {}.call(this), function () {
  var t = this;
  (function () {
    (function () {
      this.Trix = {
        VERSION: "1.3.1",
        ZERO_WIDTH_SPACE: "\ufeff",
        NON_BREAKING_SPACE: "\xa0",
        OBJECT_REPLACEMENT_CHARACTER: "\ufffc",
        browser: {
          composesExistingText: /Android.*Chrome/.test(navigator.userAgent),
          forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent),
          supportsInputEvents: function () {
            var t, e, n, i;
            if ("undefined" == typeof InputEvent) return !1;

            for (i = ["data", "getTargetRanges", "inputType"], t = 0, e = i.length; e > t; t++) if (n = i[t], !(n in InputEvent.prototype)) return !1;

            return !0;
          }()
        },
        config: {}
      };
    }).call(this);
  }).call(t);
  var e = t.Trix;
  (function () {
    (function () {
      e.BasicObject = function () {
        function t() {}

        var e, n, i;
        return t.proxyMethod = function (t) {
          var i, o, r, s, a;
          return r = n(t), i = r.name, s = r.toMethod, a = r.toProperty, o = r.optional, this.prototype[i] = function () {
            var t, n;
            return t = null != s ? o ? "function" == typeof this[s] ? this[s]() : void 0 : this[s]() : null != a ? this[a] : void 0, o ? (n = null != t ? t[i] : void 0, null != n ? e.call(n, t, arguments) : void 0) : (n = t[i], e.call(n, t, arguments));
          };
        }, n = function (t) {
          var e, n;
          if (!(n = t.match(i))) throw new Error("can't parse @proxyMethod expression: " + t);
          return e = {
            name: n[4]
          }, null != n[2] ? e.toMethod = n[1] : e.toProperty = n[1], null != n[3] && (e.optional = !0), e;
        }, e = Function.prototype.apply, i = /^(.+?)(\(\))?(\?)?\.(.+?)$/, t;
      }();
    }).call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.Object = function (n) {
        function i() {
          this.id = ++o;
        }

        var o;
        return t(i, n), o = 0, i.fromJSONString = function (t) {
          return this.fromJSON(JSON.parse(t));
        }, i.prototype.hasSameConstructorAs = function (t) {
          return this.constructor === (null != t ? t.constructor : void 0);
        }, i.prototype.isEqualTo = function (t) {
          return this === t;
        }, i.prototype.inspect = function () {
          var t, e, n;
          return t = function () {
            var t, i, o;
            i = null != (t = this.contentsForInspection()) ? t : {}, o = [];

            for (e in i) n = i[e], o.push(e + "=" + n);

            return o;
          }.call(this), "#<" + this.constructor.name + ":" + this.id + (t.length ? " " + t.join(", ") : "") + ">";
        }, i.prototype.contentsForInspection = function () {}, i.prototype.toJSONString = function () {
          return JSON.stringify(this);
        }, i.prototype.toUTF16String = function () {
          return e.UTF16String.box(this);
        }, i.prototype.getCacheKey = function () {
          return this.id.toString();
        }, i;
      }(e.BasicObject);
    }.call(this), function () {
      e.extend = function (t) {
        var e, n;

        for (e in t) n = t[e], this[e] = n;

        return this;
      };
    }.call(this), function () {
      e.extend({
        defer: function (t) {
          return setTimeout(t, 1);
        }
      });
    }.call(this), function () {
      var t, n;
      e.extend({
        normalizeSpaces: function (t) {
          return t.replace(RegExp("" + e.ZERO_WIDTH_SPACE, "g"), "").replace(RegExp("" + e.NON_BREAKING_SPACE, "g"), " ");
        },
        normalizeNewlines: function (t) {
          return t.replace(/\r\n/g, "\n");
        },
        breakableWhitespacePattern: RegExp("[^\\S" + e.NON_BREAKING_SPACE + "]"),
        squishBreakableWhitespace: function (t) {
          return t.replace(RegExp("" + e.breakableWhitespacePattern.source, "g"), " ").replace(/\ {2,}/g, " ");
        },
        summarizeStringChange: function (t, i) {
          var o, r, s, a;
          return t = e.UTF16String.box(t), i = e.UTF16String.box(i), i.length < t.length ? (r = n(t, i), a = r[0], o = r[1]) : (s = n(i, t), o = s[0], a = s[1]), {
            added: o,
            removed: a
          };
        }
      }), n = function (n, i) {
        var o, r, s, a, u;
        return n.isEqualTo(i) ? ["", ""] : (r = t(n, i), a = r.utf16String.length, s = a ? (u = r.offset, r, o = n.codepoints.slice(0, u).concat(n.codepoints.slice(u + a)), t(i, e.UTF16String.fromCodepoints(o))) : t(i, n), [r.utf16String.toString(), s.utf16String.toString()]);
      }, t = function (t, e) {
        var n, i, o;

        for (n = 0, i = t.length, o = e.length; i > n && t.charAt(n).isEqualTo(e.charAt(n));) n++;

        for (; i > n + 1 && t.charAt(i - 1).isEqualTo(e.charAt(o - 1));) i--, o--;

        return {
          utf16String: t.slice(n, i),
          offset: n
        };
      };
    }.call(this), function () {
      e.extend({
        copyObject: function (t) {
          var e, n, i;
          null == t && (t = {}), n = {};

          for (e in t) i = t[e], n[e] = i;

          return n;
        },
        objectsAreEqual: function (t, e) {
          var n, i;
          if (null == t && (t = {}), null == e && (e = {}), Object.keys(t).length !== Object.keys(e).length) return !1;

          for (n in t) if (i = t[n], i !== e[n]) return !1;

          return !0;
        }
      });
    }.call(this), function () {
      var t = [].slice;
      e.extend({
        arraysAreEqual: function (t, e) {
          var n, i, o, r;
          if (null == t && (t = []), null == e && (e = []), t.length !== e.length) return !1;

          for (i = n = 0, o = t.length; o > n; i = ++n) if (r = t[i], r !== e[i]) return !1;

          return !0;
        },
        arrayStartsWith: function (t, n) {
          return null == t && (t = []), null == n && (n = []), e.arraysAreEqual(t.slice(0, n.length), n);
        },
        spliceArray: function () {
          var e, n, i;
          return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], i = n.slice(0), i.splice.apply(i, e), i;
        },
        summarizeArrayChange: function (t, e) {
          var n, i, o, r, s, a, u, c, l, h, p;

          for (null == t && (t = []), null == e && (e = []), n = [], h = [], o = new Set(), r = 0, u = t.length; u > r; r++) p = t[r], o.add(p);

          for (i = new Set(), s = 0, c = e.length; c > s; s++) p = e[s], i.add(p), o.has(p) || n.push(p);

          for (a = 0, l = t.length; l > a; a++) p = t[a], i.has(p) || h.push(p);

          return {
            added: n,
            removed: h
          };
        }
      });
    }.call(this), function () {
      var t, n, i, o;
      t = null, n = null, o = null, i = null, e.extend({
        getAllAttributeNames: function () {
          return null != t ? t : t = e.getTextAttributeNames().concat(e.getBlockAttributeNames());
        },
        getBlockConfig: function (t) {
          return e.config.blockAttributes[t];
        },
        getBlockAttributeNames: function () {
          return null != n ? n : n = Object.keys(e.config.blockAttributes);
        },
        getTextConfig: function (t) {
          return e.config.textAttributes[t];
        },
        getTextAttributeNames: function () {
          return null != o ? o : o = Object.keys(e.config.textAttributes);
        },
        getListAttributeNames: function () {
          var t, n;
          return null != i ? i : i = function () {
            var i, o;
            i = e.config.blockAttributes, o = [];

            for (t in i) n = i[t].listAttribute, null != n && o.push(n);

            return o;
          }();
        }
      });
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      };

      t = document.documentElement, n = null != (i = null != (o = null != (r = t.matchesSelector) ? r : t.webkitMatchesSelector) ? o : t.msMatchesSelector) ? i : t.mozMatchesSelector, e.extend({
        handleEvent: function (n, i) {
          var o, r, s, a, u, c, l, h, p, d, f, g;
          return h = null != i ? i : {}, c = h.onElement, u = h.matchingSelector, g = h.withCallback, a = h.inPhase, l = h.preventDefault, d = h.times, r = null != c ? c : t, p = u, o = g, f = "capturing" === a, s = function (t) {
            var n;
            return null != d && 0 === --d && s.destroy(), n = e.findClosestElementFromNode(t.target, {
              matchingSelector: p
            }), null != n && (null != g && g.call(n, t, n), l) ? t.preventDefault() : void 0;
          }, s.destroy = function () {
            return r.removeEventListener(n, s, f);
          }, r.addEventListener(n, s, f), s;
        },
        handleEventOnce: function (t, n) {
          return null == n && (n = {}), n.times = 1, e.handleEvent(t, n);
        },
        triggerEvent: function (n, i) {
          var o, r, s, a, u, c, l;
          return l = null != i ? i : {}, c = l.onElement, r = l.bubbles, s = l.cancelable, o = l.attributes, a = null != c ? c : t, r = r !== !1, s = s !== !1, u = document.createEvent("Events"), u.initEvent(n, r, s), null != o && e.extend.call(u, o), a.dispatchEvent(u);
        },
        elementMatchesSelector: function (t, e) {
          return 1 === (null != t ? t.nodeType : void 0) ? n.call(t, e) : void 0;
        },
        findClosestElementFromNode: function (t, n) {
          var i, o, r;

          for (o = null != n ? n : {}, i = o.matchingSelector, r = o.untilNode; null != t && t.nodeType !== Node.ELEMENT_NODE;) t = t.parentNode;

          if (null != t) {
            if (null == i) return t;
            if (t.closest && null == r) return t.closest(i);

            for (; t && t !== r;) {
              if (e.elementMatchesSelector(t, i)) return t;
              t = t.parentNode;
            }
          }
        },
        findInnerElement: function (t) {
          for (; null != t ? t.firstElementChild : void 0;) t = t.firstElementChild;

          return t;
        },
        innerElementIsActive: function (t) {
          return document.activeElement !== t && e.elementContainsNode(t, document.activeElement);
        },
        elementContainsNode: function (t, e) {
          if (t && e) for (; e;) {
            if (e === t) return !0;
            e = e.parentNode;
          }
        },
        findNodeFromContainerAndOffset: function (t, e) {
          var n;
          if (t) return t.nodeType === Node.TEXT_NODE ? t : 0 === e ? null != (n = t.firstChild) ? n : t : t.childNodes.item(e - 1);
        },
        findElementFromContainerAndOffset: function (t, n) {
          var i;
          return i = e.findNodeFromContainerAndOffset(t, n), e.findClosestElementFromNode(i);
        },
        findChildIndexOfNode: function (t) {
          var e;

          if (null != t ? t.parentNode : void 0) {
            for (e = 0; t = t.previousSibling;) e++;

            return e;
          }
        },
        removeNode: function (t) {
          var e;
          return null != t && null != (e = t.parentNode) ? e.removeChild(t) : void 0;
        },
        walkTree: function (t, e) {
          var n, i, o, r, s;
          return o = null != e ? e : {}, i = o.onlyNodesOfType, r = o.usingFilter, n = o.expandEntityReferences, s = function () {
            switch (i) {
              case "element":
                return NodeFilter.SHOW_ELEMENT;

              case "text":
                return NodeFilter.SHOW_TEXT;

              case "comment":
                return NodeFilter.SHOW_COMMENT;

              default:
                return NodeFilter.SHOW_ALL;
            }
          }(), document.createTreeWalker(t, s, null != r ? r : null, n === !0);
        },
        tagName: function (t) {
          var e;
          return null != t && null != (e = t.tagName) ? e.toLowerCase() : void 0;
        },
        makeElement: function (t, e) {
          var n, i, o, r, s, a, u, c, l, h, p, d, f, g;

          if (null == e && (e = {}), "object" == typeof t ? (e = t, t = e.tagName) : e = {
            attributes: e
          }, o = document.createElement(t), null != e.editable && (null == e.attributes && (e.attributes = {}), e.attributes.contenteditable = e.editable), e.attributes) {
            l = e.attributes;

            for (a in l) g = l[a], o.setAttribute(a, g);
          }

          if (e.style) {
            h = e.style;

            for (a in h) g = h[a], o.style[a] = g;
          }

          if (e.data) {
            p = e.data;

            for (a in p) g = p[a], o.dataset[a] = g;
          }

          if (e.className) for (d = e.className.split(" "), r = 0, u = d.length; u > r; r++) i = d[r], o.classList.add(i);
          if (e.textContent && (o.textContent = e.textContent), e.childNodes) for (f = [].concat(e.childNodes), s = 0, c = f.length; c > s; s++) n = f[s], o.appendChild(n);
          return o;
        },
        getBlockTagNames: function () {
          var t, n;
          return null != e.blockTagNames ? e.blockTagNames : e.blockTagNames = function () {
            var i, o;
            i = e.config.blockAttributes, o = [];

            for (t in i) n = i[t].tagName, n && o.push(n);

            return o;
          }();
        },
        nodeIsBlockContainer: function (t) {
          return e.nodeIsBlockStartComment(null != t ? t.firstChild : void 0);
        },
        nodeProbablyIsBlockContainer: function (t) {
          var n, i;
          return n = e.tagName(t), s.call(e.getBlockTagNames(), n) >= 0 && (i = e.tagName(t.firstChild), s.call(e.getBlockTagNames(), i) < 0);
        },
        nodeIsBlockStart: function (t, n) {
          var i;
          return i = (null != n ? n : {
            strict: !0
          }).strict, i ? e.nodeIsBlockStartComment(t) : e.nodeIsBlockStartComment(t) || !e.nodeIsBlockStartComment(t.firstChild) && e.nodeProbablyIsBlockContainer(t);
        },
        nodeIsBlockStartComment: function (t) {
          return e.nodeIsCommentNode(t) && "block" === (null != t ? t.data : void 0);
        },
        nodeIsCommentNode: function (t) {
          return (null != t ? t.nodeType : void 0) === Node.COMMENT_NODE;
        },
        nodeIsCursorTarget: function (t, n) {
          var i;
          return i = (null != n ? n : {}).name, t ? e.nodeIsTextNode(t) ? t.data === e.ZERO_WIDTH_SPACE ? i ? t.parentNode.dataset.trixCursorTarget === i : !0 : void 0 : e.nodeIsCursorTarget(t.firstChild) : void 0;
        },
        nodeIsAttachmentElement: function (t) {
          return e.elementMatchesSelector(t, e.AttachmentView.attachmentSelector);
        },
        nodeIsEmptyTextNode: function (t) {
          return e.nodeIsTextNode(t) && "" === (null != t ? t.data : void 0);
        },
        nodeIsTextNode: function (t) {
          return (null != t ? t.nodeType : void 0) === Node.TEXT_NODE;
        }
      });
    }.call(this), function () {
      var t, n, i, o, r;
      t = e.copyObject, o = e.objectsAreEqual, e.extend({
        normalizeRange: i = function (t) {
          var e;
          if (null != t) return Array.isArray(t) || (t = [t, t]), [n(t[0]), n(null != (e = t[1]) ? e : t[0])];
        },
        rangeIsCollapsed: function (t) {
          var e, n, o;
          if (null != t) return n = i(t), o = n[0], e = n[1], r(o, e);
        },
        rangesAreEqual: function (t, e) {
          var n, o, s, a, u, c;
          if (null != t && null != e) return s = i(t), o = s[0], n = s[1], a = i(e), c = a[0], u = a[1], r(o, c) && r(n, u);
        }
      }), n = function (e) {
        return "number" == typeof e ? e : t(e);
      }, r = function (t, e) {
        return "number" == typeof t ? t === e : o(t, e);
      };
    }.call(this), function () {
      var t, n, i, o, r, s, a;
      e.registerElement = function (t, e) {
        var n, i;
        return null == e && (e = {}), t = t.toLowerCase(), e = a(e), i = s(e), (n = i.defaultCSS) && (delete i.defaultCSS, o(n, t)), r(t, i);
      }, o = function (t, e) {
        var n;
        return n = i(e), n.textContent = t.replace(/%t/g, e);
      }, i = function (e) {
        var n, i;
        return n = document.createElement("style"), n.setAttribute("type", "text/css"), n.setAttribute("data-tag-name", e.toLowerCase()), (i = t()) && n.setAttribute("nonce", i), document.head.insertBefore(n, document.head.firstChild), n;
      }, t = function () {
        var t;
        return (t = n("trix-csp-nonce") || n("csp-nonce")) ? t.getAttribute("content") : void 0;
      }, n = function (t) {
        return document.head.querySelector("meta[name=" + t + "]");
      }, s = function (t) {
        var e, n, i;
        n = {};

        for (e in t) i = t[e], n[e] = "function" == typeof i ? {
          value: i
        } : i;

        return n;
      }, a = function () {
        var t;
        return t = function (t) {
          var e, n, i, o, r;

          for (e = {}, r = ["initialize", "connect", "disconnect"], n = 0, o = r.length; o > n; n++) i = r[n], e[i] = t[i], delete t[i];

          return e;
        }, window.customElements ? function (e) {
          var n, i, o, r, s;
          return s = t(e), o = s.initialize, n = s.connect, i = s.disconnect, o && (r = n, n = function () {
            return this.initialized || (this.initialized = !0, o.call(this)), null != r ? r.call(this) : void 0;
          }), n && (e.connectedCallback = n), i && (e.disconnectedCallback = i), e;
        } : function (e) {
          var n, i, o, r;
          return r = t(e), o = r.initialize, n = r.connect, i = r.disconnect, o && (e.createdCallback = o), n && (e.attachedCallback = n), i && (e.detachedCallback = i), e;
        };
      }(), r = function () {
        return window.customElements ? function (t, e) {
          var n;
          return n = function () {
            return "object" == typeof Reflect ? Reflect.construct(HTMLElement, [], n) : HTMLElement.apply(this);
          }, Object.setPrototypeOf(n.prototype, HTMLElement.prototype), Object.setPrototypeOf(n, HTMLElement), Object.defineProperties(n.prototype, e), window.customElements.define(t, n), n;
        } : function (t, e) {
          var n, i;
          return i = Object.create(HTMLElement.prototype, e), n = document.registerElement(t, {
            prototype: i
          }), Object.defineProperty(i, "constructor", {
            value: n
          }), n;
        };
      }();
    }.call(this), function () {
      var t, n;
      e.extend({
        getDOMSelection: function () {
          var t;
          return t = window.getSelection(), t.rangeCount > 0 ? t : void 0;
        },
        getDOMRange: function () {
          var n, i;
          return (n = null != (i = e.getDOMSelection()) ? i.getRangeAt(0) : void 0) && !t(n) ? n : void 0;
        },
        setDOMRange: function (t) {
          var n;
          return n = window.getSelection(), n.removeAllRanges(), n.addRange(t), e.selectionChangeObserver.update();
        }
      }), t = function (t) {
        return n(t.startContainer) || n(t.endContainer);
      }, n = function (t) {
        return !Object.getPrototypeOf(t);
      };
    }.call(this), function () {
      var t;
      t = {
        "application/x-trix-feature-detection": "test"
      }, e.extend({
        dataTransferIsPlainText: function (t) {
          var e, n, i;
          return i = t.getData("text/plain"), n = t.getData("text/html"), i && n ? (e = new DOMParser().parseFromString(n, "text/html").body, e.textContent === i ? !e.querySelector("*") : void 0) : null != i ? i.length : void 0;
        },
        dataTransferIsWritable: function (e) {
          var n, i;

          if (null != (null != e ? e.setData : void 0)) {
            for (n in t) if (i = t[n], !function () {
              try {
                return e.setData(n, i), e.getData(n) === i;
              } catch (t) {}
            }()) return;

            return !0;
          }
        },
        keyEventIsKeyboardCommand: function () {
          return /Mac|^iP/.test(navigator.platform) ? function (t) {
            return t.metaKey;
          } : function (t) {
            return t.ctrlKey;
          };
        }()
      });
    }.call(this), function () {
      e.extend({
        RTL_PATTERN: /[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,
        getDirection: function () {
          var t, n, i, o;
          return n = e.makeElement("input", {
            dir: "auto",
            name: "x",
            dirName: "x.dir"
          }), t = e.makeElement("form"), t.appendChild(n), i = function () {
            try {
              return new FormData(t).has(n.dirName);
            } catch (e) {}
          }(), o = function () {
            try {
              return n.matches(":dir(ltr),:dir(rtl)");
            } catch (t) {}
          }(), i ? function (e) {
            return n.value = e, new FormData(t).get(n.dirName);
          } : o ? function (t) {
            return n.value = t, n.matches(":dir(rtl)") ? "rtl" : "ltr";
          } : function (t) {
            var n;
            return n = t.trim().charAt(0), e.RTL_PATTERN.test(n) ? "rtl" : "ltr";
          };
        }()
      });
    }.call(this), function () {}.call(this), function () {
      var t,
          n = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) i.call(e, o) && (t[o] = e[o]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.arraysAreEqual, e.Hash = function (i) {
        function o(t) {
          null == t && (t = {}), this.values = s(t), o.__super__.constructor.apply(this, arguments);
        }

        var r, s, a, u, c;
        return n(o, i), o.fromCommonAttributesOfObjects = function (t) {
          var e, n, i, o, s, a;
          if (null == t && (t = []), !t.length) return new this();

          for (e = r(t[0]), i = e.getKeys(), a = t.slice(1), n = 0, o = a.length; o > n; n++) s = a[n], i = e.getKeysCommonToHash(r(s)), e = e.slice(i);

          return e;
        }, o.box = function (t) {
          return r(t);
        }, o.prototype.add = function (t, e) {
          return this.merge(u(t, e));
        }, o.prototype.remove = function (t) {
          return new e.Hash(s(this.values, t));
        }, o.prototype.get = function (t) {
          return this.values[t];
        }, o.prototype.has = function (t) {
          return t in this.values;
        }, o.prototype.merge = function (t) {
          return new e.Hash(a(this.values, c(t)));
        }, o.prototype.slice = function (t) {
          var n, i, o, r;

          for (r = {}, n = 0, o = t.length; o > n; n++) i = t[n], this.has(i) && (r[i] = this.values[i]);

          return new e.Hash(r);
        }, o.prototype.getKeys = function () {
          return Object.keys(this.values);
        }, o.prototype.getKeysCommonToHash = function (t) {
          var e, n, i, o, s;

          for (t = r(t), o = this.getKeys(), s = [], e = 0, i = o.length; i > e; e++) n = o[e], this.values[n] === t.values[n] && s.push(n);

          return s;
        }, o.prototype.isEqualTo = function (e) {
          return t(this.toArray(), r(e).toArray());
        }, o.prototype.isEmpty = function () {
          return 0 === this.getKeys().length;
        }, o.prototype.toArray = function () {
          var t, e, n;
          return (null != this.array ? this.array : this.array = function () {
            var i;
            e = [], i = this.values;

            for (t in i) n = i[t], e.push(t, n);

            return e;
          }.call(this)).slice(0);
        }, o.prototype.toObject = function () {
          return s(this.values);
        }, o.prototype.toJSON = function () {
          return this.toObject();
        }, o.prototype.contentsForInspection = function () {
          return {
            values: JSON.stringify(this.values)
          };
        }, u = function (t, e) {
          var n;
          return n = {}, n[t] = e, n;
        }, a = function (t, e) {
          var n, i, o;
          i = s(t);

          for (n in e) o = e[n], i[n] = o;

          return i;
        }, s = function (t, e) {
          var n, i, o, r, s;

          for (r = {}, s = Object.keys(t).sort(), n = 0, o = s.length; o > n; n++) i = s[n], i !== e && (r[i] = t[i]);

          return r;
        }, r = function (t) {
          return t instanceof e.Hash ? t : new e.Hash(t);
        }, c = function (t) {
          return t instanceof e.Hash ? t.values : t;
        }, o;
      }(e.Object);
    }.call(this), function () {
      e.ObjectGroup = function () {
        function t(t, e) {
          var n, i;
          this.objects = null != t ? t : [], i = e.depth, n = e.asTree, n && (this.depth = i, this.objects = this.constructor.groupObjects(this.objects, {
            asTree: n,
            depth: this.depth + 1
          }));
        }

        return t.groupObjects = function (t, e) {
          var n, i, o, r, s, a, u, c, l;

          for (null == t && (t = []), l = null != e ? e : {}, o = l.depth, n = l.asTree, n && null == o && (o = 0), c = [], s = 0, a = t.length; a > s; s++) {
            if (u = t[s], r) {
              if (("function" == typeof u.canBeGrouped ? u.canBeGrouped(o) : void 0) && ("function" == typeof (i = r[r.length - 1]).canBeGroupedWith ? i.canBeGroupedWith(u, o) : void 0)) {
                r.push(u);
                continue;
              }

              c.push(new this(r, {
                depth: o,
                asTree: n
              })), r = null;
            }

            ("function" == typeof u.canBeGrouped ? u.canBeGrouped(o) : void 0) ? r = [u] : c.push(u);
          }

          return r && c.push(new this(r, {
            depth: o,
            asTree: n
          })), c;
        }, t.prototype.getObjects = function () {
          return this.objects;
        }, t.prototype.getDepth = function () {
          return this.depth;
        }, t.prototype.getCacheKey = function () {
          var t, e, n, i, o;

          for (e = ["objectGroup"], o = this.getObjects(), t = 0, n = o.length; n > t; t++) i = o[t], e.push(i.getCacheKey());

          return e.join("/");
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.ObjectMap = function (e) {
        function n(t) {
          var e, n, i, o, r;

          for (null == t && (t = []), this.objects = {}, i = 0, o = t.length; o > i; i++) r = t[i], n = JSON.stringify(r), null == (e = this.objects)[n] && (e[n] = r);
        }

        return t(n, e), n.prototype.find = function (t) {
          var e;
          return e = JSON.stringify(t), this.objects[e];
        }, n;
      }(e.BasicObject);
    }.call(this), function () {
      e.ElementStore = function () {
        function t(t) {
          this.reset(t);
        }

        var e;
        return t.prototype.add = function (t) {
          var n;
          return n = e(t), this.elements[n] = t;
        }, t.prototype.remove = function (t) {
          var n, i;
          return n = e(t), (i = this.elements[n]) ? (delete this.elements[n], i) : void 0;
        }, t.prototype.reset = function (t) {
          var e, n, i;

          for (null == t && (t = []), this.elements = {}, n = 0, i = t.length; i > n; n++) e = t[n], this.add(e);

          return t;
        }, e = function (t) {
          return t.dataset.trixStoreKey;
        }, t;
      }();
    }.call(this), function () {}.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.Operation = function (e) {
        function n() {
          return n.__super__.constructor.apply(this, arguments);
        }

        return t(n, e), n.prototype.isPerforming = function () {
          return this.performing === !0;
        }, n.prototype.hasPerformed = function () {
          return this.performed === !0;
        }, n.prototype.hasSucceeded = function () {
          return this.performed && this.succeeded;
        }, n.prototype.hasFailed = function () {
          return this.performed && !this.succeeded;
        }, n.prototype.getPromise = function () {
          return null != this.promise ? this.promise : this.promise = new Promise(function (t) {
            return function (e, n) {
              return t.performing = !0, t.perform(function (i, o) {
                return t.succeeded = i, t.performing = !1, t.performed = !0, t.succeeded ? e(o) : n(o);
              });
            };
          }(this));
        }, n.prototype.perform = function (t) {
          return t(!1);
        }, n.prototype.release = function () {
          var t;
          return null != (t = this.promise) && "function" == typeof t.cancel && t.cancel(), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
        }, n.proxyMethod("getPromise().then"), n.proxyMethod("getPromise().catch"), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) a.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          a = {}.hasOwnProperty;

      e.UTF16String = function (t) {
        function e(t, e) {
          this.ucs2String = t, this.codepoints = e, this.length = this.codepoints.length, this.ucs2Length = this.ucs2String.length;
        }

        return s(e, t), e.box = function (t) {
          return null == t && (t = ""), t instanceof this ? t : this.fromUCS2String(null != t ? t.toString() : void 0);
        }, e.fromUCS2String = function (t) {
          return new this(t, o(t));
        }, e.fromCodepoints = function (t) {
          return new this(r(t), t);
        }, e.prototype.offsetToUCS2Offset = function (t) {
          return r(this.codepoints.slice(0, Math.max(0, t))).length;
        }, e.prototype.offsetFromUCS2Offset = function (t) {
          return o(this.ucs2String.slice(0, Math.max(0, t))).length;
        }, e.prototype.slice = function () {
          var t;
          return this.constructor.fromCodepoints((t = this.codepoints).slice.apply(t, arguments));
        }, e.prototype.charAt = function (t) {
          return this.slice(t, t + 1);
        }, e.prototype.isEqualTo = function (t) {
          return this.constructor.box(t).ucs2String === this.ucs2String;
        }, e.prototype.toJSON = function () {
          return this.ucs2String;
        }, e.prototype.getCacheKey = function () {
          return this.ucs2String;
        }, e.prototype.toString = function () {
          return this.ucs2String;
        }, e;
      }(e.BasicObject), t = 1 === ("function" == typeof Array.from ? Array.from("\ud83d\udc7c").length : void 0), n = null != ("function" == typeof " ".codePointAt ? " ".codePointAt(0) : void 0), i = " \ud83d\udc7c" === ("function" == typeof String.fromCodePoint ? String.fromCodePoint(32, 128124) : void 0), o = t && n ? function (t) {
        return Array.from(t).map(function (t) {
          return t.codePointAt(0);
        });
      } : function (t) {
        var e, n, i, o, r;

        for (o = [], e = 0, i = t.length; i > e;) r = t.charCodeAt(e++), r >= 55296 && 56319 >= r && i > e && (n = t.charCodeAt(e++), 56320 === (64512 & n) ? r = ((1023 & r) << 10) + (1023 & n) + 65536 : e--), o.push(r);

        return o;
      }, r = i ? function (t) {
        return String.fromCodePoint.apply(String, t);
      } : function (t) {
        var e, n, i;
        return e = function () {
          var e, o, r;

          for (r = [], e = 0, o = t.length; o > e; e++) i = t[e], n = "", i > 65535 && (i -= 65536, n += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), r.push(n + String.fromCharCode(i));

          return r;
        }(), e.join("");
      };
    }.call(this), function () {}.call(this), function () {}.call(this), function () {
      e.config.lang = {
        attachFiles: "Attach Files",
        bold: "Bold",
        bullets: "Bullets",
        "byte": "Byte",
        bytes: "Bytes",
        captionPlaceholder: "Add a caption\u2026",
        code: "Code",
        heading1: "Heading",
        indent: "Increase Level",
        italic: "Italic",
        link: "Link",
        numbers: "Numbers",
        outdent: "Decrease Level",
        quote: "Quote",
        redo: "Redo",
        remove: "Remove",
        strike: "Strikethrough",
        undo: "Undo",
        unlink: "Unlink",
        url: "URL",
        urlPlaceholder: "Enter a URL\u2026",
        GB: "GB",
        KB: "KB",
        MB: "MB",
        PB: "PB",
        TB: "TB"
      };
    }.call(this), function () {
      e.config.css = {
        attachment: "attachment",
        attachmentCaption: "attachment__caption",
        attachmentCaptionEditor: "attachment__caption-editor",
        attachmentMetadata: "attachment__metadata",
        attachmentMetadataContainer: "attachment__metadata-container",
        attachmentName: "attachment__name",
        attachmentProgress: "attachment__progress",
        attachmentSize: "attachment__size",
        attachmentToolbar: "attachment__toolbar",
        attachmentGallery: "attachment-gallery"
      };
    }.call(this), function () {
      var t;
      e.config.blockAttributes = t = {
        "default": {
          tagName: "div",
          parse: !1
        },
        quote: {
          tagName: "blockquote",
          nestable: !0
        },
        heading1: {
          tagName: "h1",
          terminal: !0,
          breakOnReturn: !0,
          group: !1
        },
        code: {
          tagName: "pre",
          terminal: !0,
          text: {
            plaintext: !0
          }
        },
        bulletList: {
          tagName: "ul",
          parse: !1
        },
        bullet: {
          tagName: "li",
          listAttribute: "bulletList",
          group: !1,
          nestable: !0,
          test: function (n) {
            return e.tagName(n.parentNode) === t[this.listAttribute].tagName;
          }
        },
        numberList: {
          tagName: "ol",
          parse: !1
        },
        number: {
          tagName: "li",
          listAttribute: "numberList",
          group: !1,
          nestable: !0,
          test: function (n) {
            return e.tagName(n.parentNode) === t[this.listAttribute].tagName;
          }
        },
        attachmentGallery: {
          tagName: "div",
          exclusive: !0,
          terminal: !0,
          parse: !1,
          group: !1
        }
      };
    }.call(this), function () {
      var t, n;
      t = e.config.lang, n = [t.bytes, t.KB, t.MB, t.GB, t.TB, t.PB], e.config.fileSize = {
        prefix: "IEC",
        precision: 2,
        formatter: function (e) {
          var i, o, r, s, a;

          switch (e) {
            case 0:
              return "0 " + t.bytes;

            case 1:
              return "1 " + t.byte;

            default:
              return i = function () {
                switch (this.prefix) {
                  case "SI":
                    return 1e3;

                  case "IEC":
                    return 1024;
                }
              }.call(this), o = Math.floor(Math.log(e) / Math.log(i)), r = e / Math.pow(i, o), s = r.toFixed(this.precision), a = s.replace(/0*$/, "").replace(/\.$/, ""), a + " " + n[o];
          }
        }
      };
    }.call(this), function () {
      e.config.textAttributes = {
        bold: {
          tagName: "strong",
          inheritable: !0,
          parser: function (t) {
            var e;
            return e = window.getComputedStyle(t), "bold" === e.fontWeight || e.fontWeight >= 600;
          }
        },
        italic: {
          tagName: "em",
          inheritable: !0,
          parser: function (t) {
            var e;
            return e = window.getComputedStyle(t), "italic" === e.fontStyle;
          }
        },
        href: {
          groupTagName: "a",
          parser: function (t) {
            var n, i, o;
            return n = e.AttachmentView.attachmentSelector, o = "a:not(" + n + ")", (i = e.findClosestElementFromNode(t, {
              matchingSelector: o
            })) ? i.getAttribute("href") : void 0;
          }
        },
        strike: {
          tagName: "del",
          inheritable: !0
        },
        frozen: {
          style: {
            backgroundColor: "highlight"
          }
        }
      };
    }.call(this), function () {
      var t, n, i, o, r;
      r = "[data-trix-serialize=false]", o = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"], n = "data-trix-serialized-attributes", i = "[" + n + "]", t = new RegExp("<!--block-->", "g"), e.extend({
        serializers: {
          "application/json": function (t) {
            var n;
            if (t instanceof e.Document) n = t;else {
              if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
              n = e.Document.fromHTML(t.innerHTML);
            }
            return n.toSerializableDocument().toJSONString();
          },
          "text/html": function (s) {
            var a, u, c, l, h, p, d, f, g, m, v, y, b, A, C, x, w;
            if (s instanceof e.Document) l = e.DocumentView.render(s);else {
              if (!(s instanceof HTMLElement)) throw new Error("unserializable object");
              l = s.cloneNode(!0);
            }

            for (A = l.querySelectorAll(r), h = 0, g = A.length; g > h; h++) c = A[h], e.removeNode(c);

            for (p = 0, m = o.length; m > p; p++) for (a = o[p], C = l.querySelectorAll("[" + a + "]"), d = 0, v = C.length; v > d; d++) c = C[d], c.removeAttribute(a);

            for (x = l.querySelectorAll(i), f = 0, y = x.length; y > f; f++) {
              c = x[f];

              try {
                u = JSON.parse(c.getAttribute(n)), c.removeAttribute(n);

                for (b in u) w = u[b], c.setAttribute(b, w);
              } catch (E) {}
            }

            return l.innerHTML.replace(t, "");
          }
        },
        deserializers: {
          "application/json": function (t) {
            return e.Document.fromJSONString(t);
          },
          "text/html": function (t) {
            return e.Document.fromHTML(t);
          }
        },
        serializeToContentType: function (t, n) {
          var i;
          if (i = e.serializers[n]) return i(t);
          throw new Error("unknown content type: " + n);
        },
        deserializeFromContentType: function (t, n) {
          var i;
          if (i = e.deserializers[n]) return i(t);
          throw new Error("unknown content type: " + n);
        }
      });
    }.call(this), function () {
      var t;
      t = e.config.lang, e.config.toolbar = {
        getDefaultHTML: function () {
          return '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="' + t.bold + '" tabindex="-1">' + t.bold + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="' + t.italic + '" tabindex="-1">' + t.italic + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="' + t.strike + '" tabindex="-1">' + t.strike + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="' + t.link + '" tabindex="-1">' + t.link + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="' + t.heading1 + '" tabindex="-1">' + t.heading1 + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="' + t.quote + '" tabindex="-1">' + t.quote + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="' + t.code + '" tabindex="-1">' + t.code + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="' + t.bullets + '" tabindex="-1">' + t.bullets + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="' + t.numbers + '" tabindex="-1">' + t.numbers + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="' + t.outdent + '" tabindex="-1">' + t.outdent + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="' + t.indent + '" tabindex="-1">' + t.indent + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="' + t.attachFiles + '" tabindex="-1">' + t.attachFiles + '</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="' + t.undo + '" tabindex="-1">' + t.undo + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="' + t.redo + '" tabindex="-1">' + t.redo + '</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="' + t.urlPlaceholder + '" aria-label="' + t.url + '" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t.link + '" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t.unlink + '" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>';
        }
      };
    }.call(this), function () {
      e.config.undoInterval = 5e3;
    }.call(this), function () {
      e.config.attachments = {
        preview: {
          presentation: "gallery",
          caption: {
            name: !0,
            size: !0
          }
        },
        file: {
          caption: {
            size: !0
          }
        }
      };
    }.call(this), function () {
      e.config.keyNames = {
        8: "backspace",
        9: "tab",
        13: "return",
        27: "escape",
        37: "left",
        39: "right",
        46: "delete",
        68: "d",
        72: "h",
        79: "o"
      };
    }.call(this), function () {
      e.config.input = {
        level2Enabled: !0,
        getLevel: function () {
          return this.level2Enabled && e.browser.supportsInputEvents ? 2 : 0;
        },
        pickFiles: function (t) {
          var n;
          return n = e.makeElement("input", {
            type: "file",
            multiple: !0,
            hidden: !0,
            id: this.fileInputId
          }), n.addEventListener("change", function () {
            return t(n.files), e.removeNode(n);
          }), e.removeNode(document.getElementById(this.fileInputId)), document.body.appendChild(n), n.click();
        },
        fileInputId: "trix-file-input-" + Date.now().toString(16)
      };
    }.call(this), function () {}.call(this), function () {
      e.registerElement("trix-toolbar", {
        defaultCSS: "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",
        initialize: function () {
          return "" === this.innerHTML ? this.innerHTML = e.config.toolbar.getDefaultHTML() : void 0;
        }
      });
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty,
          i = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      };

      e.ObjectView = function (n) {
        function o(t, e) {
          this.object = t, this.options = null != e ? e : {}, this.childViews = [], this.rootView = this;
        }

        return t(o, n), o.prototype.getNodes = function () {
          var t, e, n, i, o;

          for (null == this.nodes && (this.nodes = this.createNodes()), i = this.nodes, o = [], t = 0, e = i.length; e > t; t++) n = i[t], o.push(n.cloneNode(!0));

          return o;
        }, o.prototype.invalidate = function () {
          var t;
          return this.nodes = null, this.childViews = [], null != (t = this.parentView) ? t.invalidate() : void 0;
        }, o.prototype.invalidateViewForObject = function (t) {
          var e;
          return null != (e = this.findViewForObject(t)) ? e.invalidate() : void 0;
        }, o.prototype.findOrCreateCachedChildView = function (t, e) {
          var n;
          return (n = this.getCachedViewForObject(e)) ? this.recordChildView(n) : (n = this.createChildView.apply(this, arguments), this.cacheViewForObject(n, e)), n;
        }, o.prototype.createChildView = function (t, n, i) {
          var o;
          return null == i && (i = {}), n instanceof e.ObjectGroup && (i.viewClass = t, t = e.ObjectGroupView), o = new t(n, i), this.recordChildView(o);
        }, o.prototype.recordChildView = function (t) {
          return t.parentView = this, t.rootView = this.rootView, this.childViews.push(t), t;
        }, o.prototype.getAllChildViews = function () {
          var t, e, n, i, o;

          for (o = [], i = this.childViews, e = 0, n = i.length; n > e; e++) t = i[e], o.push(t), o = o.concat(t.getAllChildViews());

          return o;
        }, o.prototype.findElement = function () {
          return this.findElementForObject(this.object);
        }, o.prototype.findElementForObject = function (t) {
          var e;
          return (e = null != t ? t.id : void 0) ? this.rootView.element.querySelector("[data-trix-id='" + e + "']") : void 0;
        }, o.prototype.findViewForObject = function (t) {
          var e, n, i, o;

          for (i = this.getAllChildViews(), e = 0, n = i.length; n > e; e++) if (o = i[e], o.object === t) return o;
        }, o.prototype.getViewCache = function () {
          return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? null != this.viewCache ? this.viewCache : this.viewCache = {} : void 0;
        }, o.prototype.isViewCachingEnabled = function () {
          return this.shouldCacheViews !== !1;
        }, o.prototype.enableViewCaching = function () {
          return this.shouldCacheViews = !0;
        }, o.prototype.disableViewCaching = function () {
          return this.shouldCacheViews = !1;
        }, o.prototype.getCachedViewForObject = function (t) {
          var e;
          return null != (e = this.getViewCache()) ? e[t.getCacheKey()] : void 0;
        }, o.prototype.cacheViewForObject = function (t, e) {
          var n;
          return null != (n = this.getViewCache()) ? n[e.getCacheKey()] = t : void 0;
        }, o.prototype.garbageCollectCachedViews = function () {
          var t, e, n, o, r, s;

          if (t = this.getViewCache()) {
            s = this.getAllChildViews().concat(this), n = function () {
              var t, e, n;

              for (n = [], t = 0, e = s.length; e > t; t++) r = s[t], n.push(r.object.getCacheKey());

              return n;
            }(), o = [];

            for (e in t) i.call(n, e) < 0 && o.push(delete t[e]);

            return o;
          }
        }, o;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.ObjectGroupView = function (e) {
        function n() {
          n.__super__.constructor.apply(this, arguments), this.objectGroup = this.object, this.viewClass = this.options.viewClass, delete this.options.viewClass;
        }

        return t(n, e), n.prototype.getChildViews = function () {
          var t, e, n, i;
          if (!this.childViews.length) for (i = this.objectGroup.getObjects(), t = 0, e = i.length; e > t; t++) n = i[t], this.findOrCreateCachedChildView(this.viewClass, n, this.options);
          return this.childViews;
        }, n.prototype.createNodes = function () {
          var t, e, n, i, o, r, s, a, u;

          for (t = this.createContainerElement(), s = this.getChildViews(), e = 0, i = s.length; i > e; e++) for (u = s[e], a = u.getNodes(), n = 0, o = a.length; o > n; n++) r = a[n], t.appendChild(r);

          return [t];
        }, n.prototype.createContainerElement = function (t) {
          return null == t && (t = this.objectGroup.getDepth()), this.getChildViews()[0].createContainerElement(t);
        }, n;
      }(e.ObjectView);
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.Controller = function (e) {
        function n() {
          return n.__super__.constructor.apply(this, arguments);
        }

        return t(n, e), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          u = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) c.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          c = {}.hasOwnProperty,
          l = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      };

      t = e.findClosestElementFromNode, i = e.nodeIsEmptyTextNode, n = e.nodeIsBlockStartComment, o = e.normalizeSpaces, r = e.summarizeStringChange, s = e.tagName, e.MutationObserver = function (e) {
        function c(t) {
          this.element = t, this.didMutate = a(this.didMutate, this), this.observer = new window.MutationObserver(this.didMutate), this.start();
        }

        var h, p, d, f;
        return u(c, e), p = "data-trix-mutable", d = "[" + p + "]", f = {
          attributes: !0,
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          subtree: !0
        }, c.prototype.start = function () {
          return this.reset(), this.observer.observe(this.element, f);
        }, c.prototype.stop = function () {
          return this.observer.disconnect();
        }, c.prototype.didMutate = function (t) {
          var e, n;
          return (e = this.mutations).push.apply(e, this.findSignificantMutations(t)), this.mutations.length ? (null != (n = this.delegate) && "function" == typeof n.elementDidMutate && n.elementDidMutate(this.getMutationSummary()), this.reset()) : void 0;
        }, c.prototype.reset = function () {
          return this.mutations = [];
        }, c.prototype.findSignificantMutations = function (t) {
          var e, n, i, o;

          for (o = [], e = 0, n = t.length; n > e; e++) i = t[e], this.mutationIsSignificant(i) && o.push(i);

          return o;
        }, c.prototype.mutationIsSignificant = function (t) {
          var e, n, i, o;
          if (this.nodeIsMutable(t.target)) return !1;

          for (o = this.nodesModifiedByMutation(t), e = 0, n = o.length; n > e; e++) if (i = o[e], this.nodeIsSignificant(i)) return !0;

          return !1;
        }, c.prototype.nodeIsSignificant = function (t) {
          return t !== this.element && !this.nodeIsMutable(t) && !i(t);
        }, c.prototype.nodeIsMutable = function (e) {
          return t(e, {
            matchingSelector: d
          });
        }, c.prototype.nodesModifiedByMutation = function (t) {
          var e;

          switch (e = [], t.type) {
            case "attributes":
              t.attributeName !== p && e.push(t.target);
              break;

            case "characterData":
              e.push(t.target.parentNode), e.push(t.target);
              break;

            case "childList":
              e.push.apply(e, t.addedNodes), e.push.apply(e, t.removedNodes);
          }

          return e;
        }, c.prototype.getMutationSummary = function () {
          return this.getTextMutationSummary();
        }, c.prototype.getTextMutationSummary = function () {
          var t, e, n, i, o, r, s, a, u, c, h;

          for (a = this.getTextChangesFromCharacterData(), n = a.additions, o = a.deletions, h = this.getTextChangesFromChildList(), u = h.additions, r = 0, s = u.length; s > r; r++) e = u[r], l.call(n, e) < 0 && n.push(e);

          return o.push.apply(o, h.deletions), c = {}, (t = n.join("")) && (c.textAdded = t), (i = o.join("")) && (c.textDeleted = i), c;
        }, c.prototype.getMutationsByType = function (t) {
          var e, n, i, o, r;

          for (o = this.mutations, r = [], e = 0, n = o.length; n > e; e++) i = o[e], i.type === t && r.push(i);

          return r;
        }, c.prototype.getTextChangesFromChildList = function () {
          var t, e, i, r, s, a, u, c, l, p, d;

          for (t = [], u = [], a = this.getMutationsByType("childList"), e = 0, r = a.length; r > e; e++) s = a[e], t.push.apply(t, s.addedNodes), u.push.apply(u, s.removedNodes);

          return c = 0 === t.length && 1 === u.length && n(u[0]), c ? (p = [], d = ["\n"]) : (p = h(t), d = h(u)), {
            additions: function () {
              var t, e, n;

              for (n = [], i = t = 0, e = p.length; e > t; i = ++t) l = p[i], l !== d[i] && n.push(o(l));

              return n;
            }(),
            deletions: function () {
              var t, e, n;

              for (n = [], i = t = 0, e = d.length; e > t; i = ++t) l = d[i], l !== p[i] && n.push(o(l));

              return n;
            }()
          };
        }, c.prototype.getTextChangesFromCharacterData = function () {
          var t, e, n, i, s, a, u, c;
          return e = this.getMutationsByType("characterData"), e.length && (c = e[0], n = e[e.length - 1], s = o(c.oldValue), i = o(n.target.data), a = r(s, i), t = a.added, u = a.removed), {
            additions: t ? [t] : [],
            deletions: u ? [u] : []
          };
        }, h = function (t) {
          var e, n, i, o;

          for (null == t && (t = []), o = [], e = 0, n = t.length; n > e; e++) switch (i = t[e], i.nodeType) {
            case Node.TEXT_NODE:
              o.push(i.data);
              break;

            case Node.ELEMENT_NODE:
              "br" === s(i) ? o.push("\n") : o.push.apply(o, h(i.childNodes));
          }

          return o;
        }, c;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.FileVerificationOperation = function (e) {
        function n(t) {
          this.file = t;
        }

        return t(n, e), n.prototype.perform = function (t) {
          var e;
          return e = new FileReader(), e.onerror = function () {
            return t(!1);
          }, e.onload = function (n) {
            return function () {
              e.onerror = null;

              try {
                e.abort();
              } catch (i) {}

              return t(!0, n.file);
            };
          }(this), e.readAsArrayBuffer(this.file);
        }, n;
      }(e.Operation);
    }.call(this), function () {
      var t,
          n,
          i = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) o.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      t = e.handleEvent, n = e.innerElementIsActive, e.InputController = function (o) {
        function r(n) {
          var i;
          this.element = n, this.mutationObserver = new e.MutationObserver(this.element), this.mutationObserver.delegate = this;

          for (i in this.events) t(i, {
            onElement: this.element,
            withCallback: this.handlerFor(i)
          });
        }

        return i(r, o), r.prototype.events = {}, r.prototype.elementDidMutate = function () {}, r.prototype.editorWillSyncDocumentView = function () {
          return this.mutationObserver.stop();
        }, r.prototype.editorDidSyncDocumentView = function () {
          return this.mutationObserver.start();
        }, r.prototype.requestRender = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.inputControllerDidRequestRender ? t.inputControllerDidRequestRender() : void 0;
        }, r.prototype.requestReparse = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.inputControllerDidRequestReparse && t.inputControllerDidRequestReparse(), this.requestRender();
        }, r.prototype.attachFiles = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) n = t[i], r.push(new e.FileVerificationOperation(n));

            return r;
          }(), Promise.all(i).then(function (t) {
            return function (e) {
              return t.handleInput(function () {
                var t, n;
                return null != (t = this.delegate) && t.inputControllerWillAttachFiles(), null != (n = this.responder) && n.insertFiles(e), this.requestRender();
              });
            };
          }(this));
        }, r.prototype.handlerFor = function (t) {
          return function (e) {
            return function (i) {
              return i.defaultPrevented ? void 0 : e.handleInput(function () {
                return n(this.element) ? void 0 : (this.eventName = t, this.events[t].call(this, i));
              });
            };
          }(this);
        }, r.prototype.handleInput = function (t) {
          var e, n;

          try {
            return null != (e = this.delegate) && e.inputControllerWillHandleInput(), t.call(this);
          } finally {
            null != (n = this.delegate) && n.inputControllerDidHandleInput();
          }
        }, r.prototype.createLinkHTML = function (t, e) {
          var n;
          return n = document.createElement("a"), n.href = t, n.textContent = null != e ? e : t, n.outerHTML;
        }, r;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h,
          p,
          d,
          f = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) g.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          g = {}.hasOwnProperty,
          m = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      };

      c = e.makeElement, l = e.objectsAreEqual, d = e.tagName, n = e.browser, a = e.keyEventIsKeyboardCommand, o = e.dataTransferIsWritable, i = e.dataTransferIsPlainText, u = e.config.keyNames, e.Level0InputController = function (n) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.resetInputSummary();
        }

        var d;
        return f(s, n), d = 0, s.prototype.setInputSummary = function (t) {
          var e, n;
          null == t && (t = {}), this.inputSummary.eventName = this.eventName;

          for (e in t) n = t[e], this.inputSummary[e] = n;

          return this.inputSummary;
        }, s.prototype.resetInputSummary = function () {
          return this.inputSummary = {};
        }, s.prototype.reset = function () {
          return this.resetInputSummary(), e.selectionChangeObserver.reset();
        }, s.prototype.elementDidMutate = function (t) {
          var e;
          return this.isComposing() ? null != (e = this.delegate) && "function" == typeof e.inputControllerDidAllowUnhandledInput ? e.inputControllerDidAllowUnhandledInput() : void 0 : this.handleInput(function () {
            return this.mutationIsSignificant(t) && (this.mutationIsExpected(t) ? this.requestRender() : this.requestReparse()), this.reset();
          });
        }, s.prototype.mutationIsExpected = function (t) {
          var e, n, i, o, r, s, a, u, c, l;
          return a = t.textAdded, u = t.textDeleted, this.inputSummary.preferDocument ? !0 : (e = null != a ? a === this.inputSummary.textAdded : !this.inputSummary.textAdded, n = null != u ? this.inputSummary.didDelete : !this.inputSummary.didDelete, c = ("\n" === a || " \n" === a) && !e, l = "\n" === u && !n, s = c && !l || l && !c, s && (o = this.getSelectedRange()) && (i = c ? a.replace(/\n$/, "").length || -1 : (null != a ? a.length : void 0) || 1, null != (r = this.responder) ? r.positionIsBlockBreak(o[1] + i) : void 0) ? !0 : e && n);
        }, s.prototype.mutationIsSignificant = function (t) {
          var e, n, i;
          return i = Object.keys(t).length > 0, e = "" === (null != (n = this.compositionInput) ? n.getEndData() : void 0), i || !e;
        }, s.prototype.events = {
          keydown: function (t) {
            var n, i, o, r, s, c, l, h, p;

            if (this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = !0, r = u[t.keyCode]) {
              for (i = this.keys, h = ["ctrl", "alt", "shift", "meta"], o = 0, c = h.length; c > o; o++) l = h[o], t[l + "Key"] && ("ctrl" === l && (l = "control"), i = null != i ? i[l] : void 0);

              null != (null != i ? i[r] : void 0) && (this.setInputSummary({
                keyName: r
              }), e.selectionChangeObserver.reset(), i[r].call(this, t));
            }

            return a(t) && (n = String.fromCharCode(t.keyCode).toLowerCase()) && (s = function () {
              var e, n, i, o;

              for (i = ["alt", "shift"], o = [], e = 0, n = i.length; n > e; e++) l = i[e], t[l + "Key"] && o.push(l);

              return o;
            }(), s.push(n), null != (p = this.delegate) ? p.inputControllerDidReceiveKeyboardCommand(s) : void 0) ? t.preventDefault() : void 0;
          },
          keypress: function (t) {
            var e, n, i;
            if (null == this.inputSummary.eventName && !t.metaKey && (!t.ctrlKey || t.altKey)) return (i = p(t)) ? (null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString(i), this.setInputSummary({
              textAdded: i,
              didDelete: this.selectionIsExpanded()
            })) : void 0;
          },
          textInput: function (t) {
            var e, n, i, o;
            return e = t.data, o = this.inputSummary.textAdded, o && o !== e && o.toUpperCase() === e ? (n = this.getSelectedRange(), this.setSelectedRange([n[0], n[1] + o.length]), null != (i = this.responder) && i.insertString(e), this.setInputSummary({
              textAdded: e
            }), this.setSelectedRange(n)) : void 0;
          },
          dragenter: function (t) {
            return t.preventDefault();
          },
          dragstart: function (t) {
            var e, n;
            return n = t.target, this.serializeSelectionToDataTransfer(t.dataTransfer), this.draggedRange = this.getSelectedRange(), null != (e = this.delegate) && "function" == typeof e.inputControllerDidStartDrag ? e.inputControllerDidStartDrag() : void 0;
          },
          dragover: function (t) {
            var e, n;
            return !this.draggedRange && !this.canAcceptDataTransfer(t.dataTransfer) || (t.preventDefault(), e = {
              x: t.clientX,
              y: t.clientY
            }, l(e, this.draggingPoint)) ? void 0 : (this.draggingPoint = e, null != (n = this.delegate) && "function" == typeof n.inputControllerDidReceiveDragOverPoint ? n.inputControllerDidReceiveDragOverPoint(this.draggingPoint) : void 0);
          },
          dragend: function () {
            var t;
            return null != (t = this.delegate) && "function" == typeof t.inputControllerDidCancelDrag && t.inputControllerDidCancelDrag(), this.draggedRange = null, this.draggingPoint = null;
          },
          drop: function (t) {
            var n, i, o, r, s, a, u, c, l;
            return t.preventDefault(), o = null != (s = t.dataTransfer) ? s.files : void 0, r = {
              x: t.clientX,
              y: t.clientY
            }, null != (a = this.responder) && a.setLocationRangeFromPointRange(r), (null != o ? o.length : void 0) ? this.attachFiles(o) : this.draggedRange ? (null != (u = this.delegate) && u.inputControllerWillMoveText(), null != (c = this.responder) && c.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender()) : (i = t.dataTransfer.getData("application/x-trix-document")) && (n = e.Document.fromJSONString(i), null != (l = this.responder) && l.insertDocument(n), this.requestRender()), this.draggedRange = null, this.draggingPoint = null;
          },
          cut: function (t) {
            var e, n;
            return (null != (e = this.responder) ? e.selectionIsExpanded() : void 0) && (this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault(), null != (n = this.delegate) && n.inputControllerWillCutText(), this.deleteInDirection("backward"), t.defaultPrevented) ? this.requestRender() : void 0;
          },
          copy: function (t) {
            var e;
            return (null != (e = this.responder) ? e.selectionIsExpanded() : void 0) && this.serializeSelectionToDataTransfer(t.clipboardData) ? t.preventDefault() : void 0;
          },
          paste: function (t) {
            var n, o, s, a, u, c, l, p, f, g, v, y, b, A, C, x, w, E, S, R, k, D, L;
            return n = null != (p = t.clipboardData) ? p : t.testClipboardData, l = {
              clipboard: n
            }, null == n || h(t) ? void this.getPastedHTMLUsingHiddenElement(function (t) {
              return function (e) {
                var n, i, o;
                return l.type = "text/html", l.html = e, null != (n = t.delegate) && n.inputControllerWillPaste(l), null != (i = t.responder) && i.insertHTML(l.html), t.requestRender(), null != (o = t.delegate) ? o.inputControllerDidPaste(l) : void 0;
              };
            }(this)) : ((a = n.getData("URL")) ? (l.type = "text/html", L = (c = n.getData("public.url-name")) ? e.squishBreakableWhitespace(c).trim() : a, l.html = this.createLinkHTML(a, L), null != (f = this.delegate) && f.inputControllerWillPaste(l), this.setInputSummary({
              textAdded: L,
              didDelete: this.selectionIsExpanded()
            }), null != (C = this.responder) && C.insertHTML(l.html), this.requestRender(), null != (x = this.delegate) && x.inputControllerDidPaste(l)) : i(n) ? (l.type = "text/plain", l.string = n.getData("text/plain"), null != (w = this.delegate) && w.inputControllerWillPaste(l), this.setInputSummary({
              textAdded: l.string,
              didDelete: this.selectionIsExpanded()
            }), null != (E = this.responder) && E.insertString(l.string), this.requestRender(), null != (S = this.delegate) && S.inputControllerDidPaste(l)) : (u = n.getData("text/html")) ? (l.type = "text/html", l.html = u, null != (R = this.delegate) && R.inputControllerWillPaste(l), null != (k = this.responder) && k.insertHTML(l.html), this.requestRender(), null != (D = this.delegate) && D.inputControllerDidPaste(l)) : m.call(n.types, "Files") >= 0 && (s = null != (g = n.items) && null != (v = g[0]) && "function" == typeof v.getAsFile ? v.getAsFile() : void 0) && (!s.name && (o = r(s)) && (s.name = "pasted-file-" + ++d + "." + o), l.type = "File", l.file = s, null != (y = this.delegate) && y.inputControllerWillAttachFiles(), null != (b = this.responder) && b.insertFile(l.file), this.requestRender(), null != (A = this.delegate) && A.inputControllerDidPaste(l)), t.preventDefault());
          },
          compositionstart: function (t) {
            return this.getCompositionInput().start(t.data);
          },
          compositionupdate: function (t) {
            return this.getCompositionInput().update(t.data);
          },
          compositionend: function (t) {
            return this.getCompositionInput().end(t.data);
          },
          beforeinput: function () {
            return this.inputSummary.didInput = !0;
          },
          input: function (t) {
            return this.inputSummary.didInput = !0, t.stopPropagation();
          }
        }, s.prototype.keys = {
          backspace: function (t) {
            var e;
            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
          },
          "delete": function (t) {
            var e;
            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
          },
          "return": function () {
            var t, e;
            return this.setInputSummary({
              preferDocument: !0
            }), null != (t = this.delegate) && t.inputControllerWillPerformTyping(), null != (e = this.responder) ? e.insertLineBreak() : void 0;
          },
          tab: function (t) {
            var e, n;
            return (null != (e = this.responder) ? e.canIncreaseNestingLevel() : void 0) ? (null != (n = this.responder) && n.increaseNestingLevel(), this.requestRender(), t.preventDefault()) : void 0;
          },
          left: function (t) {
            var e;
            return this.selectionIsInCursorTarget() ? (t.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("backward") : void 0) : void 0;
          },
          right: function (t) {
            var e;
            return this.selectionIsInCursorTarget() ? (t.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("forward") : void 0) : void 0;
          },
          control: {
            d: function (t) {
              var e;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
            },
            h: function (t) {
              var e;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
            },
            o: function (t) {
              var e, n;
              return t.preventDefault(), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString("\n", {
                updatePosition: !1
              }), this.requestRender();
            }
          },
          shift: {
            "return": function (t) {
              var e, n;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString("\n"), this.requestRender(), t.preventDefault();
            },
            tab: function (t) {
              var e, n;
              return (null != (e = this.responder) ? e.canDecreaseNestingLevel() : void 0) ? (null != (n = this.responder) && n.decreaseNestingLevel(), this.requestRender(), t.preventDefault()) : void 0;
            },
            left: function (t) {
              return this.selectionIsInCursorTarget() ? (t.preventDefault(), this.expandSelectionInDirection("backward")) : void 0;
            },
            right: function (t) {
              return this.selectionIsInCursorTarget() ? (t.preventDefault(), this.expandSelectionInDirection("forward")) : void 0;
            }
          },
          alt: {
            backspace: function () {
              var t;
              return this.setInputSummary({
                preferDocument: !1
              }), null != (t = this.delegate) ? t.inputControllerWillPerformTyping() : void 0;
            }
          },
          meta: {
            backspace: function () {
              var t;
              return this.setInputSummary({
                preferDocument: !1
              }), null != (t = this.delegate) ? t.inputControllerWillPerformTyping() : void 0;
            }
          }
        }, s.prototype.getCompositionInput = function () {
          return this.isComposing() ? this.compositionInput : this.compositionInput = new t(this);
        }, s.prototype.isComposing = function () {
          return null != this.compositionInput && !this.compositionInput.isEnded();
        }, s.prototype.deleteInDirection = function (t, e) {
          var n;
          return (null != (n = this.responder) ? n.deleteInDirection(t) : void 0) !== !1 ? this.setInputSummary({
            didDelete: !0
          }) : e ? (e.preventDefault(), this.requestRender()) : void 0;
        }, s.prototype.serializeSelectionToDataTransfer = function (t) {
          var n, i;
          if (o(t)) return n = null != (i = this.responder) ? i.getSelectedDocument().toSerializableDocument() : void 0, t.setData("application/x-trix-document", JSON.stringify(n)), t.setData("text/html", e.DocumentView.render(n).innerHTML), t.setData("text/plain", n.toString().replace(/\n$/, "")), !0;
        }, s.prototype.canAcceptDataTransfer = function (t) {
          var e, n, i, o, r, s;

          for (s = {}, o = null != (i = null != t ? t.types : void 0) ? i : [], e = 0, n = o.length; n > e; e++) r = o[e], s[r] = !0;

          return s.Files || s["application/x-trix-document"] || s["text/html"] || s["text/plain"];
        }, s.prototype.getPastedHTMLUsingHiddenElement = function (t) {
          var n, i, o;
          return i = this.getSelectedRange(), o = {
            position: "absolute",
            left: window.pageXOffset + "px",
            top: window.pageYOffset + "px",
            opacity: 0
          }, n = c({
            style: o,
            tagName: "div",
            editable: !0
          }), document.body.appendChild(n), n.focus(), requestAnimationFrame(function (o) {
            return function () {
              var r;
              return r = n.innerHTML, e.removeNode(n), o.setSelectedRange(i), t(r);
            };
          }(this));
        }, s.proxyMethod("responder?.getSelectedRange"), s.proxyMethod("responder?.setSelectedRange"), s.proxyMethod("responder?.expandSelectionInDirection"), s.proxyMethod("responder?.selectionIsInCursorTarget"), s.proxyMethod("responder?.selectionIsExpanded"), s;
      }(e.InputController), r = function (t) {
        var e, n;
        return null != (e = t.type) && null != (n = e.match(/\/(\w+)$/)) ? n[1] : void 0;
      }, s = null != ("function" == typeof " ".codePointAt ? " ".codePointAt(0) : void 0), p = function (t) {
        var n;
        return t.key && s && t.key.codePointAt(0) === t.keyCode ? t.key : (null === t.which ? n = t.keyCode : 0 !== t.which && 0 !== t.charCode && (n = t.charCode), null != n && "escape" !== u[n] ? e.UTF16String.fromCodepoints([n]).toString() : void 0);
      }, h = function (t) {
        var e, n, i, o, r, s, a, u, c, l;

        if (u = t.clipboardData) {
          if (m.call(u.types, "text/html") >= 0) {
            for (c = u.types, i = 0, s = c.length; s > i; i++) if (l = c[i], e = /^CorePasteboardFlavorType/.test(l), n = /^dyn\./.test(l) && u.getData(l), a = e || n) return !0;

            return !1;
          }

          return o = m.call(u.types, "com.apple.webarchive") >= 0, r = m.call(u.types, "com.apple.flat-rtfd") >= 0, o || r;
        }
      }, t = function (t) {
        function e(t) {
          var e;
          this.inputController = t, e = this.inputController, this.responder = e.responder, this.delegate = e.delegate, this.inputSummary = e.inputSummary, this.data = {};
        }

        return f(e, t), e.prototype.start = function (t) {
          var e, n;
          return this.data.start = t, this.isSignificant() ? ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded && null != (e = this.responder) && e.deleteInDirection("left"), this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null != (n = this.responder) ? n.getSelectedRange() : void 0) : void 0;
        }, e.prototype.update = function (t) {
          var e;
          return this.data.update = t, this.isSignificant() && (e = this.selectPlaceholder()) ? (this.forgetPlaceholder(), this.range = e) : void 0;
        }, e.prototype.end = function (t) {
          var e, n, i, o;
          return this.data.end = t, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({
            preferDocument: !0,
            didInput: !1
          }), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.setSelectedRange(this.range), null != (i = this.responder) && i.insertString(this.data.end), null != (o = this.responder) ? o.setSelectedRange(this.range[0] + this.data.end.length) : void 0) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
        }, e.prototype.getEndData = function () {
          return this.data.end;
        }, e.prototype.isEnded = function () {
          return null != this.getEndData();
        }, e.prototype.isSignificant = function () {
          return n.composesExistingText ? this.inputSummary.didInput : !0;
        }, e.prototype.canApplyToDocument = function () {
          var t, e;
          return 0 === (null != (t = this.data.start) ? t.length : void 0) && (null != (e = this.data.end) ? e.length : void 0) > 0 && null != this.range;
        }, e.proxyMethod("inputController.setInputSummary"), e.proxyMethod("inputController.requestRender"), e.proxyMethod("inputController.requestReparse"), e.proxyMethod("responder?.selectionIsExpanded"), e.proxyMethod("responder?.insertPlaceholder"), e.proxyMethod("responder?.selectPlaceholder"), e.proxyMethod("responder?.forgetPlaceholder"), e;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          r = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) s.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      };

      t = e.dataTransferIsPlainText, n = e.keyEventIsKeyboardCommand, i = e.objectsAreEqual, e.Level2InputController = function (s) {
        function u() {
          return this.render = o(this.render, this), u.__super__.constructor.apply(this, arguments);
        }

        var c, l, h, p, d, f;
        return r(u, s), u.prototype.elementDidMutate = function () {
          var t;
          return this.scheduledRender ? this.composing && null != (t = this.delegate) && "function" == typeof t.inputControllerDidAllowUnhandledInput ? t.inputControllerDidAllowUnhandledInput() : void 0 : this.reparse();
        }, u.prototype.scheduleRender = function () {
          return null != this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
        }, u.prototype.render = function () {
          var t;
          return cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing || null != (t = this.delegate) && t.render(), "function" == typeof this.afterRender && this.afterRender(), this.afterRender = null;
        }, u.prototype.reparse = function () {
          var t;
          return null != (t = this.delegate) ? t.reparse() : void 0;
        }, u.prototype.events = {
          keydown: function (t) {
            var e, i, o, r;

            if (n(t)) {
              if (e = l(t), null != (r = this.delegate) ? r.inputControllerDidReceiveKeyboardCommand(e) : void 0) return t.preventDefault();
            } else if (o = t.key, t.altKey && (o += "+Alt"), t.shiftKey && (o += "+Shift"), i = this.keys[o]) return this.withEvent(t, i);
          },
          paste: function (t) {
            var e, n, i, o, r, s, a, u, c;
            return h(t) ? (t.preventDefault(), this.attachFiles(t.clipboardData.files)) : p(t) ? (t.preventDefault(), n = {
              type: "text/plain",
              string: t.clipboardData.getData("text/plain")
            }, null != (i = this.delegate) && i.inputControllerWillPaste(n), null != (o = this.responder) && o.insertString(n.string), this.render(), null != (r = this.delegate) ? r.inputControllerDidPaste(n) : void 0) : (e = null != (s = t.clipboardData) ? s.getData("URL") : void 0) ? (t.preventDefault(), n = {
              type: "text/html",
              html: this.createLinkHTML(e)
            }, null != (a = this.delegate) && a.inputControllerWillPaste(n), null != (u = this.responder) && u.insertHTML(n.html), this.render(), null != (c = this.delegate) ? c.inputControllerDidPaste(n) : void 0) : void 0;
          },
          beforeinput: function (t) {
            var e;
            return (e = this.inputTypes[t.inputType]) ? (this.withEvent(t, e), this.scheduleRender()) : void 0;
          },
          input: function () {
            return e.selectionChangeObserver.reset();
          },
          dragstart: function (t) {
            var e, n;
            return (null != (e = this.responder) ? e.selectionContainsAttachments() : void 0) ? (t.dataTransfer.setData("application/x-trix-dragging", !0), this.dragging = {
              range: null != (n = this.responder) ? n.getSelectedRange() : void 0,
              point: d(t)
            }) : void 0;
          },
          dragenter: function (t) {
            return c(t) ? t.preventDefault() : void 0;
          },
          dragover: function (t) {
            var e, n;

            if (this.dragging) {
              if (t.preventDefault(), e = d(t), !i(e, this.dragging.point)) return this.dragging.point = e, null != (n = this.responder) ? n.setLocationRangeFromPointRange(e) : void 0;
            } else if (c(t)) return t.preventDefault();
          },
          drop: function (t) {
            var e, n, i, o;
            return this.dragging ? (t.preventDefault(), null != (n = this.delegate) && n.inputControllerWillMoveText(), null != (i = this.responder) && i.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender()) : c(t) ? (t.preventDefault(), e = d(t), null != (o = this.responder) && o.setLocationRangeFromPointRange(e), this.attachFiles(t.dataTransfer.files)) : void 0;
          },
          dragend: function () {
            var t;
            return this.dragging ? (null != (t = this.responder) && t.setSelectedRange(this.dragging.range), this.dragging = null) : void 0;
          },
          compositionend: function () {
            return this.composing ? (this.composing = !1, this.scheduleRender()) : void 0;
          }
        }, u.prototype.keys = {
          ArrowLeft: function () {
            var t, e;
            return (null != (t = this.responder) ? t.shouldManageMovingCursorInDirection("backward") : void 0) ? (this.event.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("backward") : void 0) : void 0;
          },
          ArrowRight: function () {
            var t, e;
            return (null != (t = this.responder) ? t.shouldManageMovingCursorInDirection("forward") : void 0) ? (this.event.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("forward") : void 0) : void 0;
          },
          Backspace: function () {
            var t, e, n;
            return (null != (t = this.responder) ? t.shouldManageDeletingInDirection("backward") : void 0) ? (this.event.preventDefault(), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.deleteInDirection("backward"), this.render()) : void 0;
          },
          Tab: function () {
            var t, e;
            return (null != (t = this.responder) ? t.canIncreaseNestingLevel() : void 0) ? (this.event.preventDefault(), null != (e = this.responder) && e.increaseNestingLevel(), this.render()) : void 0;
          },
          "Tab+Shift": function () {
            var t, e;
            return (null != (t = this.responder) ? t.canDecreaseNestingLevel() : void 0) ? (this.event.preventDefault(), null != (e = this.responder) && e.decreaseNestingLevel(), this.render()) : void 0;
          }
        }, u.prototype.inputTypes = {
          deleteByComposition: function () {
            return this.deleteInDirection("backward", {
              recordUndoEntry: !1
            });
          },
          deleteByCut: function () {
            return this.deleteInDirection("backward");
          },
          deleteByDrag: function () {
            return this.event.preventDefault(), this.withTargetDOMRange(function () {
              var t;
              return this.deleteByDragRange = null != (t = this.responder) ? t.getSelectedRange() : void 0;
            });
          },
          deleteCompositionText: function () {
            return this.deleteInDirection("backward", {
              recordUndoEntry: !1
            });
          },
          deleteContent: function () {
            return this.deleteInDirection("backward");
          },
          deleteContentBackward: function () {
            return this.deleteInDirection("backward");
          },
          deleteContentForward: function () {
            return this.deleteInDirection("forward");
          },
          deleteEntireSoftLine: function () {
            return this.deleteInDirection("forward");
          },
          deleteHardLineBackward: function () {
            return this.deleteInDirection("backward");
          },
          deleteHardLineForward: function () {
            return this.deleteInDirection("forward");
          },
          deleteSoftLineBackward: function () {
            return this.deleteInDirection("backward");
          },
          deleteSoftLineForward: function () {
            return this.deleteInDirection("forward");
          },
          deleteWordBackward: function () {
            return this.deleteInDirection("backward");
          },
          deleteWordForward: function () {
            return this.deleteInDirection("forward");
          },
          formatBackColor: function () {
            return this.activateAttributeIfSupported("backgroundColor", this.event.data);
          },
          formatBold: function () {
            return this.toggleAttributeIfSupported("bold");
          },
          formatFontColor: function () {
            return this.activateAttributeIfSupported("color", this.event.data);
          },
          formatFontName: function () {
            return this.activateAttributeIfSupported("font", this.event.data);
          },
          formatIndent: function () {
            var t;
            return (null != (t = this.responder) ? t.canIncreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.increaseNestingLevel() : void 0;
            }) : void 0;
          },
          formatItalic: function () {
            return this.toggleAttributeIfSupported("italic");
          },
          formatJustifyCenter: function () {
            return this.toggleAttributeIfSupported("justifyCenter");
          },
          formatJustifyFull: function () {
            return this.toggleAttributeIfSupported("justifyFull");
          },
          formatJustifyLeft: function () {
            return this.toggleAttributeIfSupported("justifyLeft");
          },
          formatJustifyRight: function () {
            return this.toggleAttributeIfSupported("justifyRight");
          },
          formatOutdent: function () {
            var t;
            return (null != (t = this.responder) ? t.canDecreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.decreaseNestingLevel() : void 0;
            }) : void 0;
          },
          formatRemove: function () {
            return this.withTargetDOMRange(function () {
              var t, e, n, i;
              i = [];

              for (t in null != (e = this.responder) ? e.getCurrentAttributes() : void 0) i.push(null != (n = this.responder) ? n.removeCurrentAttribute(t) : void 0);

              return i;
            });
          },
          formatSetBlockTextDirection: function () {
            return this.activateAttributeIfSupported("blockDir", this.event.data);
          },
          formatSetInlineTextDirection: function () {
            return this.activateAttributeIfSupported("textDir", this.event.data);
          },
          formatStrikeThrough: function () {
            return this.toggleAttributeIfSupported("strike");
          },
          formatSubscript: function () {
            return this.toggleAttributeIfSupported("sub");
          },
          formatSuperscript: function () {
            return this.toggleAttributeIfSupported("sup");
          },
          formatUnderline: function () {
            return this.toggleAttributeIfSupported("underline");
          },
          historyRedo: function () {
            var t;
            return null != (t = this.delegate) ? t.inputControllerWillPerformRedo() : void 0;
          },
          historyUndo: function () {
            var t;
            return null != (t = this.delegate) ? t.inputControllerWillPerformUndo() : void 0;
          },
          insertCompositionText: function () {
            return this.composing = !0, this.insertString(this.event.data);
          },
          insertFromComposition: function () {
            return this.composing = !1, this.insertString(this.event.data);
          },
          insertFromDrop: function () {
            var t, e;
            return (t = this.deleteByDragRange) ? (this.deleteByDragRange = null, null != (e = this.delegate) && e.inputControllerWillMoveText(), this.withTargetDOMRange(function () {
              var e;
              return null != (e = this.responder) ? e.moveTextFromRange(t) : void 0;
            })) : void 0;
          },
          insertFromPaste: function () {
            var n, i, o, r, s, a, u, c, l, h, p;
            return n = this.event.dataTransfer, s = {
              dataTransfer: n
            }, (i = n.getData("URL")) ? (this.event.preventDefault(), s.type = "text/html", p = (r = n.getData("public.url-name")) ? e.squishBreakableWhitespace(r).trim() : i, s.html = this.createLinkHTML(i, p), null != (a = this.delegate) && a.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertHTML(s.html) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : t(n) ? (s.type = "text/plain", s.string = n.getData("text/plain"), null != (u = this.delegate) && u.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertString(s.string) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : (o = n.getData("text/html")) ? (this.event.preventDefault(), s.type = "text/html", s.html = o, null != (c = this.delegate) && c.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertHTML(s.html) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : (null != (l = n.files) ? l.length : void 0) ? (s.type = "File", s.file = n.files[0], null != (h = this.delegate) && h.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertFile(s.file) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : void 0;
          },
          insertFromYank: function () {
            return this.insertString(this.event.data);
          },
          insertLineBreak: function () {
            return this.insertString("\n");
          },
          insertLink: function () {
            return this.activateAttributeIfSupported("href", this.event.data);
          },
          insertOrderedList: function () {
            return this.toggleAttributeIfSupported("number");
          },
          insertParagraph: function () {
            var t;
            return null != (t = this.delegate) && t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertLineBreak() : void 0;
            });
          },
          insertReplacementText: function () {
            return this.insertString(this.event.dataTransfer.getData("text/plain"), {
              updatePosition: !1
            });
          },
          insertText: function () {
            var t, e;
            return this.insertString(null != (t = this.event.data) ? t : null != (e = this.event.dataTransfer) ? e.getData("text/plain") : void 0);
          },
          insertTranspose: function () {
            return this.insertString(this.event.data);
          },
          insertUnorderedList: function () {
            return this.toggleAttributeIfSupported("bullet");
          }
        }, u.prototype.insertString = function (t, e) {
          var n;
          return null == t && (t = ""), null != (n = this.delegate) && n.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
            var n;
            return null != (n = this.responder) ? n.insertString(t, e) : void 0;
          });
        }, u.prototype.toggleAttributeIfSupported = function (t) {
          var n;
          return a.call(e.getAllAttributeNames(), t) >= 0 ? (null != (n = this.delegate) && n.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
            var e;
            return null != (e = this.responder) ? e.toggleCurrentAttribute(t) : void 0;
          })) : void 0;
        }, u.prototype.activateAttributeIfSupported = function (t, n) {
          var i;
          return a.call(e.getAllAttributeNames(), t) >= 0 ? (null != (i = this.delegate) && i.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
            var e;
            return null != (e = this.responder) ? e.setCurrentAttribute(t, n) : void 0;
          })) : void 0;
        }, u.prototype.deleteInDirection = function (t, e) {
          var n, i, o, r;
          return o = (null != e ? e : {
            recordUndoEntry: !0
          }).recordUndoEntry, o && null != (r = this.delegate) && r.inputControllerWillPerformTyping(), i = function (e) {
            return function () {
              var n;
              return null != (n = e.responder) ? n.deleteInDirection(t) : void 0;
            };
          }(this), (n = this.getTargetDOMRange({
            minLength: 2
          })) ? this.withTargetDOMRange(n, i) : i();
        }, u.prototype.withTargetDOMRange = function (t, n) {
          var i;
          return "function" == typeof t && (n = t, t = this.getTargetDOMRange()), t ? null != (i = this.responder) ? i.withTargetDOMRange(t, n.bind(this)) : void 0 : (e.selectionChangeObserver.reset(), n.call(this));
        }, u.prototype.getTargetDOMRange = function (t) {
          var e, n, i, o;
          return i = (null != t ? t : {
            minLength: 0
          }).minLength, (o = "function" == typeof (e = this.event).getTargetRanges ? e.getTargetRanges() : void 0) && o.length && (n = f(o[0]), 0 === i || n.toString().length >= i) ? n : void 0;
        }, f = function (t) {
          var e;
          return e = document.createRange(), e.setStart(t.startContainer, t.startOffset), e.setEnd(t.endContainer, t.endOffset), e;
        }, u.prototype.withEvent = function (t, e) {
          var n;
          this.event = t;

          try {
            n = e.call(this);
          } finally {
            this.event = null;
          }

          return n;
        }, c = function (t) {
          var e, n;
          return a.call(null != (e = null != (n = t.dataTransfer) ? n.types : void 0) ? e : [], "Files") >= 0;
        }, h = function (t) {
          var e;
          return (e = t.clipboardData) ? a.call(e.types, "Files") >= 0 && 1 === e.types.length && e.files.length >= 1 : void 0;
        }, p = function (t) {
          var e;
          return (e = t.clipboardData) ? a.call(e.types, "text/plain") >= 0 && 1 === e.types.length : void 0;
        }, l = function (t) {
          var e;
          return e = [], t.altKey && e.push("alt"), t.shiftKey && e.push("shift"), e.push(t.key), e;
        }, d = function (t) {
          return {
            x: t.clientX,
            y: t.clientY
          };
        }, u;
      }(e.InputController);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          l = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) h.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          h = {}.hasOwnProperty;

      n = e.defer, i = e.handleEvent, s = e.makeElement, u = e.tagName, a = e.config, r = a.lang, t = a.css, o = a.keyNames, e.AttachmentEditorController = function (a) {
        function h(t, e, n, i) {
          this.attachmentPiece = t, this.element = e, this.container = n, this.options = null != i ? i : {}, this.didBlurCaption = c(this.didBlurCaption, this), this.didChangeCaption = c(this.didChangeCaption, this), this.didInputCaption = c(this.didInputCaption, this), this.didKeyDownCaption = c(this.didKeyDownCaption, this), this.didClickActionButton = c(this.didClickActionButton, this), this.didClickToolbar = c(this.didClickToolbar, this), this.attachment = this.attachmentPiece.attachment, "a" === u(this.element) && (this.element = this.element.firstChild), this.install();
        }

        var p;
        return l(h, a), p = function (t) {
          return function () {
            var e;
            return e = t.apply(this, arguments), e["do"](), null == this.undos && (this.undos = []), this.undos.push(e.undo);
          };
        }, h.prototype.install = function () {
          return this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() ? this.installCaptionEditor() : void 0;
        }, h.prototype.uninstall = function () {
          var t, e;

          for (this.savePendingCaption(); e = this.undos.pop();) e();

          return null != (t = this.delegate) ? t.didUninstallAttachmentEditor(this) : void 0;
        }, h.prototype.savePendingCaption = function () {
          var t, e, n;
          return null != this.pendingCaption ? (t = this.pendingCaption, this.pendingCaption = null, t ? null != (e = this.delegate) && "function" == typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment ? e.attachmentEditorDidRequestUpdatingAttributesForAttachment({
            caption: t
          }, this.attachment) : void 0 : null != (n = this.delegate) && "function" == typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment ? n.attachmentEditorDidRequestRemovingAttributeForAttachment("caption", this.attachment) : void 0) : void 0;
        }, h.prototype.makeElementMutable = p(function () {
          return {
            "do": function (t) {
              return function () {
                return t.element.dataset.trixMutable = !0;
              };
            }(this),
            undo: function (t) {
              return function () {
                return delete t.element.dataset.trixMutable;
              };
            }(this)
          };
        }), h.prototype.addToolbar = p(function () {
          var n;
          return n = s({
            tagName: "div",
            className: t.attachmentToolbar,
            data: {
              trixMutable: !0
            },
            childNodes: s({
              tagName: "div",
              className: "trix-button-row",
              childNodes: s({
                tagName: "span",
                className: "trix-button-group trix-button-group--actions",
                childNodes: s({
                  tagName: "button",
                  className: "trix-button trix-button--remove",
                  textContent: r.remove,
                  attributes: {
                    title: r.remove
                  },
                  data: {
                    trixAction: "remove"
                  }
                })
              })
            })
          }), this.attachment.isPreviewable() && n.appendChild(s({
            tagName: "div",
            className: t.attachmentMetadataContainer,
            childNodes: s({
              tagName: "span",
              className: t.attachmentMetadata,
              childNodes: [s({
                tagName: "span",
                className: t.attachmentName,
                textContent: this.attachment.getFilename(),
                attributes: {
                  title: this.attachment.getFilename()
                }
              }), s({
                tagName: "span",
                className: t.attachmentSize,
                textContent: this.attachment.getFormattedFilesize()
              })]
            })
          })), i("click", {
            onElement: n,
            withCallback: this.didClickToolbar
          }), i("click", {
            onElement: n,
            matchingSelector: "[data-trix-action]",
            withCallback: this.didClickActionButton
          }), {
            "do": function (t) {
              return function () {
                return t.element.appendChild(n);
              };
            }(this),
            undo: function () {
              return function () {
                return e.removeNode(n);
              };
            }(this)
          };
        }), h.prototype.installCaptionEditor = p(function () {
          var o, a, u, c, l;
          return c = s({
            tagName: "textarea",
            className: t.attachmentCaptionEditor,
            attributes: {
              placeholder: r.captionPlaceholder
            },
            data: {
              trixMutable: !0
            }
          }), c.value = this.attachmentPiece.getCaption(), l = c.cloneNode(), l.classList.add("trix-autoresize-clone"), l.tabIndex = -1, o = function () {
            return l.value = c.value, c.style.height = l.scrollHeight + "px";
          }, i("input", {
            onElement: c,
            withCallback: o
          }), i("input", {
            onElement: c,
            withCallback: this.didInputCaption
          }), i("keydown", {
            onElement: c,
            withCallback: this.didKeyDownCaption
          }), i("change", {
            onElement: c,
            withCallback: this.didChangeCaption
          }), i("blur", {
            onElement: c,
            withCallback: this.didBlurCaption
          }), u = this.element.querySelector("figcaption"), a = u.cloneNode(), {
            "do": function (e) {
              return function () {
                return u.style.display = "none", a.appendChild(c), a.appendChild(l), a.classList.add(t.attachmentCaption + "--editing"), u.parentElement.insertBefore(a, u), o(), e.options.editCaption ? n(function () {
                  return c.focus();
                }) : void 0;
              };
            }(this),
            undo: function () {
              return e.removeNode(a), u.style.display = null;
            }
          };
        }), h.prototype.didClickToolbar = function (t) {
          return t.preventDefault(), t.stopPropagation();
        }, h.prototype.didClickActionButton = function (t) {
          var e, n;

          switch (e = t.target.getAttribute("data-trix-action")) {
            case "remove":
              return null != (n = this.delegate) ? n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment) : void 0;
          }
        }, h.prototype.didKeyDownCaption = function (t) {
          var e;
          return "return" === o[t.keyCode] ? (t.preventDefault(), this.savePendingCaption(), null != (e = this.delegate) && "function" == typeof e.attachmentEditorDidRequestDeselectingAttachment ? e.attachmentEditorDidRequestDeselectingAttachment(this.attachment) : void 0) : void 0;
        }, h.prototype.didInputCaption = function (t) {
          return this.pendingCaption = t.target.value.replace(/\s/g, " ").trim();
        }, h.prototype.didChangeCaption = function () {
          return this.savePendingCaption();
        }, h.prototype.didBlurCaption = function () {
          return this.savePendingCaption();
        }, h;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) r.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, t = e.config.css, e.AttachmentView = function (r) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.attachment = this.object, this.attachment.uploadProgressDelegate = this, this.attachmentPiece = this.options.piece;
        }

        var a;
        return o(s, r), s.attachmentSelector = "[data-trix-attachment]", s.prototype.createContentNodes = function () {
          return [];
        }, s.prototype.createNodes = function () {
          var e, n, o, r, s, u, c;
          if (e = r = i({
            tagName: "figure",
            className: this.getClassName(),
            data: this.getData(),
            editable: !1
          }), (n = this.getHref()) && (r = i({
            tagName: "a",
            editable: !1,
            attributes: {
              href: n,
              tabindex: -1
            }
          }), e.appendChild(r)), this.attachment.hasContent()) r.innerHTML = this.attachment.getContent();else for (c = this.createContentNodes(), o = 0, s = c.length; s > o; o++) u = c[o], r.appendChild(u);
          return r.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = i({
            tagName: "progress",
            attributes: {
              "class": t.attachmentProgress,
              value: this.attachment.getUploadProgress(),
              max: 100
            },
            data: {
              trixMutable: !0,
              trixStoreKey: ["progressElement", this.attachment.id].join("/")
            }
          }), e.appendChild(this.progressElement)), [a("left"), e, a("right")];
        }, s.prototype.createCaptionElement = function () {
          var e, n, o, r, s, a, u;
          return o = i({
            tagName: "figcaption",
            className: t.attachmentCaption
          }), (e = this.attachmentPiece.getCaption()) ? (o.classList.add(t.attachmentCaption + "--edited"), o.textContent = e) : (n = this.getCaptionConfig(), n.name && (r = this.attachment.getFilename()), n.size && (a = this.attachment.getFormattedFilesize()), r && (s = i({
            tagName: "span",
            className: t.attachmentName,
            textContent: r
          }), o.appendChild(s)), a && (r && o.appendChild(document.createTextNode(" ")), u = i({
            tagName: "span",
            className: t.attachmentSize,
            textContent: a
          }), o.appendChild(u))), o;
        }, s.prototype.getClassName = function () {
          var e, n;
          return n = [t.attachment, t.attachment + "--" + this.attachment.getType()], (e = this.attachment.getExtension()) && n.push(t.attachment + "--" + e), n.join(" ");
        }, s.prototype.getData = function () {
          var t, e;
          return e = {
            trixAttachment: JSON.stringify(this.attachment),
            trixContentType: this.attachment.getContentType(),
            trixId: this.attachment.id
          }, t = this.attachmentPiece.attributes, t.isEmpty() || (e.trixAttributes = JSON.stringify(t)), this.attachment.isPending() && (e.trixSerialize = !1), e;
        }, s.prototype.getHref = function () {
          return n(this.attachment.getContent(), "a") ? void 0 : this.attachment.getHref();
        }, s.prototype.getCaptionConfig = function () {
          var t, n, i;
          return i = this.attachment.getType(), t = e.copyObject(null != (n = e.config.attachments[i]) ? n.caption : void 0), "file" === i && (t.name = !0), t;
        }, s.prototype.findProgressElement = function () {
          var t;
          return null != (t = this.findElement()) ? t.querySelector("progress") : void 0;
        }, a = function (t) {
          return i({
            tagName: "span",
            textContent: e.ZERO_WIDTH_SPACE,
            data: {
              trixCursorTarget: t,
              trixSerialize: !1
            }
          });
        }, s.prototype.attachmentDidChangeUploadProgress = function () {
          var t, e;
          return e = this.attachment.getUploadProgress(), null != (t = this.findProgressElement()) ? t.value = e : void 0;
        }, s;
      }(e.ObjectView), n = function (t, e) {
        var n;
        return n = i("div"), n.innerHTML = null != t ? t : "", n.querySelector(e);
      };
    }.call(this), function () {
      var t,
          n = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) i.call(e, o) && (t[o] = e[o]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.makeElement, e.PreviewableAttachmentView = function (i) {
        function o() {
          o.__super__.constructor.apply(this, arguments), this.attachment.previewDelegate = this;
        }

        return n(o, i), o.prototype.createContentNodes = function () {
          return this.image = t({
            tagName: "img",
            attributes: {
              src: ""
            },
            data: {
              trixMutable: !0
            }
          }), this.refresh(this.image), [this.image];
        }, o.prototype.createCaptionElement = function () {
          var t;
          return t = o.__super__.createCaptionElement.apply(this, arguments), t.textContent || t.setAttribute("data-trix-placeholder", e.config.lang.captionPlaceholder), t;
        }, o.prototype.refresh = function (t) {
          var e;
          return null == t && (t = null != (e = this.findElement()) ? e.querySelector("img") : void 0), t ? this.updateAttributesForImage(t) : void 0;
        }, o.prototype.updateAttributesForImage = function (t) {
          var e, n, i, o, r, s;
          return r = this.attachment.getURL(), n = this.attachment.getPreviewURL(), t.src = n || r, n === r ? t.removeAttribute("data-trix-serialized-attributes") : (i = JSON.stringify({
            src: r
          }), t.setAttribute("data-trix-serialized-attributes", i)), s = this.attachment.getWidth(), e = this.attachment.getHeight(), null != s && (t.width = s), null != e && (t.height = e), o = ["imageElement", this.attachment.id, t.src, t.width, t.height].join("/"), t.dataset.trixStoreKey = o;
        }, o.prototype.attachmentDidChangeAttributes = function () {
          return this.refresh(this.image), this.refresh();
        }, o;
      }(e.AttachmentView);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) r.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, t = e.findInnerElement, n = e.getTextConfig, e.PieceView = function (r) {
        function s() {
          var t;
          s.__super__.constructor.apply(this, arguments), this.piece = this.object, this.attributes = this.piece.getAttributes(), t = this.options, this.textConfig = t.textConfig, this.context = t.context, this.piece.attachment ? this.attachment = this.piece.attachment : this.string = this.piece.toString();
        }

        var a;
        return o(s, r), s.prototype.createNodes = function () {
          var e, n, i, o, r, s;

          if (s = this.attachment ? this.createAttachmentNodes() : this.createStringNodes(), e = this.createElement()) {
            for (i = t(e), n = 0, o = s.length; o > n; n++) r = s[n], i.appendChild(r);

            s = [e];
          }

          return s;
        }, s.prototype.createAttachmentNodes = function () {
          var t, n;
          return t = this.attachment.isPreviewable() ? e.PreviewableAttachmentView : e.AttachmentView, n = this.createChildView(t, this.piece.attachment, {
            piece: this.piece
          }), n.getNodes();
        }, s.prototype.createStringNodes = function () {
          var t, e, n, o, r, s, a, u, c, l;
          if (null != (u = this.textConfig) ? u.plaintext : void 0) return [document.createTextNode(this.string)];

          for (a = [], c = this.string.split("\n"), n = e = 0, o = c.length; o > e; n = ++e) l = c[n], n > 0 && (t = i("br"), a.push(t)), (r = l.length) && (s = document.createTextNode(this.preserveSpaces(l)), a.push(s));

          return a;
        }, s.prototype.createElement = function () {
          var t, e, o, r, s, a, u, c, l;
          c = {}, a = this.attributes;

          for (r in a) if (l = a[r], (t = n(r)) && (t.tagName && (s = i(t.tagName), o ? (o.appendChild(s), o = s) : e = o = s), t.styleProperty && (c[t.styleProperty] = l), t.style)) {
            u = t.style;

            for (r in u) l = u[r], c[r] = l;
          }

          if (Object.keys(c).length) {
            null == e && (e = i("span"));

            for (r in c) l = c[r], e.style[r] = l;
          }

          return e;
        }, s.prototype.createContainerElement = function () {
          var t, e, o, r, s;
          r = this.attributes;

          for (o in r) if (s = r[o], (e = n(o)) && e.groupTagName) return t = {}, t[o] = s, i(e.groupTagName, t);
        }, a = e.NON_BREAKING_SPACE, s.prototype.preserveSpaces = function (t) {
          return this.context.isLast && (t = t.replace(/\ $/, a)), t = t.replace(/(\S)\ {3}(\S)/g, "$1 " + a + " $2").replace(/\ {2}/g, a + " ").replace(/\ {2}/g, " " + a), (this.context.isFirst || this.context.followsWhitespace) && (t = t.replace(/^\ /, a)), t;
        }, s;
      }(e.ObjectView);
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.TextView = function (n) {
        function i() {
          i.__super__.constructor.apply(this, arguments), this.text = this.object, this.textConfig = this.options.textConfig;
        }

        var o;
        return t(i, n), i.prototype.createNodes = function () {
          var t, n, i, r, s, a, u, c, l, h;

          for (a = [], c = e.ObjectGroup.groupObjects(this.getPieces()), r = c.length - 1, i = n = 0, s = c.length; s > n; i = ++n) u = c[i], t = {}, 0 === i && (t.isFirst = !0), i === r && (t.isLast = !0), o(l) && (t.followsWhitespace = !0), h = this.findOrCreateCachedChildView(e.PieceView, u, {
            textConfig: this.textConfig,
            context: t
          }), a.push.apply(a, h.getNodes()), l = u;

          return a;
        }, i.prototype.getPieces = function () {
          var t, e, n, i, o;

          for (i = this.text.getPieces(), o = [], t = 0, e = i.length; e > t; t++) n = i[t], n.hasAttribute("blockBreak") || o.push(n);

          return o;
        }, o = function (t) {
          return /\s$/.test(null != t ? t.toString() : void 0);
        }, i;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) r.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, n = e.getBlockConfig, t = e.config.css, e.BlockView = function (r) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.block = this.object, this.attributes = this.block.getAttributes();
        }

        return o(s, r), s.prototype.createNodes = function () {
          var t, o, r, s, a, u, c, l, h, p, d;
          if (o = document.createComment("block"), c = [o], this.block.isEmpty() ? c.push(i("br")) : (p = null != (l = n(this.block.getLastAttribute())) ? l.text : void 0, d = this.findOrCreateCachedChildView(e.TextView, this.block.text, {
            textConfig: p
          }), c.push.apply(c, d.getNodes()), this.shouldAddExtraNewlineElement() && c.push(i("br"))), this.attributes.length) return c;

          for (h = e.config.blockAttributes["default"].tagName, this.block.isRTL() && (t = {
            dir: "rtl"
          }), r = i({
            tagName: h,
            attributes: t
          }), s = 0, a = c.length; a > s; s++) u = c[s], r.appendChild(u);

          return [r];
        }, s.prototype.createContainerElement = function (e) {
          var o, r, s, a, u;
          return o = this.attributes[e], u = n(o).tagName, 0 === e && this.block.isRTL() && (r = {
            dir: "rtl"
          }), "attachmentGallery" === o && (a = this.block.getBlockBreakPosition(), s = t.attachmentGallery + " " + t.attachmentGallery + "--" + a), i({
            tagName: u,
            className: s,
            attributes: r
          });
        }, s.prototype.shouldAddExtraNewlineElement = function () {
          return /\n\n$/.test(this.block.toString());
        }, s;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) o.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      t = e.defer, n = e.makeElement, e.DocumentView = function (o) {
        function r() {
          r.__super__.constructor.apply(this, arguments), this.element = this.options.element, this.elementStore = new e.ElementStore(), this.setDocument(this.object);
        }

        var s, a, u;
        return i(r, o), r.render = function (t) {
          var e, i;
          return e = n("div"), i = new this(t, {
            element: e
          }), i.render(), i.sync(), e;
        }, r.prototype.setDocument = function (t) {
          return t.isEqualTo(this.document) ? void 0 : this.document = this.object = t;
        }, r.prototype.render = function () {
          var t, i, o, r, s, a, u;

          if (this.childViews = [], this.shadowElement = n("div"), !this.document.isEmpty()) {
            for (s = e.ObjectGroup.groupObjects(this.document.getBlocks(), {
              asTree: !0
            }), a = [], t = 0, i = s.length; i > t; t++) r = s[t], u = this.findOrCreateCachedChildView(e.BlockView, r), a.push(function () {
              var t, e, n, i;

              for (n = u.getNodes(), i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(this.shadowElement.appendChild(o));

              return i;
            }.call(this));

            return a;
          }
        }, r.prototype.isSynced = function () {
          return s(this.shadowElement, this.element);
        }, r.prototype.sync = function () {
          var t;

          for (t = this.createDocumentFragmentForSync(); this.element.lastChild;) this.element.removeChild(this.element.lastChild);

          return this.element.appendChild(t), this.didSync();
        }, r.prototype.didSync = function () {
          return this.elementStore.reset(a(this.element)), t(function (t) {
            return function () {
              return t.garbageCollectCachedViews();
            };
          }(this));
        }, r.prototype.createDocumentFragmentForSync = function () {
          var t, e, n, i, o, r, s, u, c, l;

          for (e = document.createDocumentFragment(), u = this.shadowElement.childNodes, n = 0, o = u.length; o > n; n++) s = u[n], e.appendChild(s.cloneNode(!0));

          for (c = a(e), i = 0, r = c.length; r > i; i++) t = c[i], (l = this.elementStore.remove(t)) && t.parentNode.replaceChild(l, t);

          return e;
        }, a = function (t) {
          return t.querySelectorAll("[data-trix-store-key]");
        }, s = function (t, e) {
          return u(t.innerHTML) === u(e.innerHTML);
        }, u = function (t) {
          return t.replace(/&nbsp;/g, " ");
        }, r;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          a = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) u.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          u = {}.hasOwnProperty;

      i = e.findClosestElementFromNode, o = e.handleEvent, r = e.innerElementIsActive, n = e.defer, t = e.AttachmentView.attachmentSelector, e.CompositionController = function (u) {
        function c(n, i) {
          this.element = n, this.composition = i, this.didClickAttachment = s(this.didClickAttachment, this), this.didBlur = s(this.didBlur, this), this.didFocus = s(this.didFocus, this), this.documentView = new e.DocumentView(this.composition.document, {
            element: this.element
          }), o("focus", {
            onElement: this.element,
            withCallback: this.didFocus
          }), o("blur", {
            onElement: this.element,
            withCallback: this.didBlur
          }), o("click", {
            onElement: this.element,
            matchingSelector: "a[contenteditable=false]",
            preventDefault: !0
          }), o("mousedown", {
            onElement: this.element,
            matchingSelector: t,
            withCallback: this.didClickAttachment
          }), o("click", {
            onElement: this.element,
            matchingSelector: "a" + t,
            preventDefault: !0
          });
        }

        return a(c, u), c.prototype.didFocus = function () {
          var t, e, n;
          return t = function (t) {
            return function () {
              var e;
              return t.focused ? void 0 : (t.focused = !0, null != (e = t.delegate) && "function" == typeof e.compositionControllerDidFocus ? e.compositionControllerDidFocus() : void 0);
            };
          }(this), null != (e = null != (n = this.blurPromise) ? n.then(t) : void 0) ? e : t();
        }, c.prototype.didBlur = function () {
          return this.blurPromise = new Promise(function (t) {
            return function (e) {
              return n(function () {
                var n;
                return r(t.element) || (t.focused = null, null != (n = t.delegate) && "function" == typeof n.compositionControllerDidBlur && n.compositionControllerDidBlur()), t.blurPromise = null, e();
              });
            };
          }(this));
        }, c.prototype.didClickAttachment = function (t, e) {
          var n, o, r;
          return n = this.findAttachmentForElement(e), o = null != i(t.target, {
            matchingSelector: "figcaption"
          }), null != (r = this.delegate) && "function" == typeof r.compositionControllerDidSelectAttachment ? r.compositionControllerDidSelectAttachment(n, {
            editCaption: o
          }) : void 0;
        }, c.prototype.getSerializableElement = function () {
          return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
        }, c.prototype.render = function () {
          var t, e, n;
          return this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced() && (null != (t = this.delegate) && "function" == typeof t.compositionControllerWillSyncDocumentView && t.compositionControllerWillSyncDocumentView(), this.documentView.sync(), null != (e = this.delegate) && "function" == typeof e.compositionControllerDidSyncDocumentView && e.compositionControllerDidSyncDocumentView()), null != (n = this.delegate) && "function" == typeof n.compositionControllerDidRender ? n.compositionControllerDidRender() : void 0;
        }, c.prototype.rerenderViewForObject = function (t) {
          return this.invalidateViewForObject(t), this.render();
        }, c.prototype.invalidateViewForObject = function (t) {
          return this.documentView.invalidateViewForObject(t);
        }, c.prototype.isViewCachingEnabled = function () {
          return this.documentView.isViewCachingEnabled();
        }, c.prototype.enableViewCaching = function () {
          return this.documentView.enableViewCaching();
        }, c.prototype.disableViewCaching = function () {
          return this.documentView.disableViewCaching();
        }, c.prototype.refreshViewCache = function () {
          return this.documentView.garbageCollectCachedViews();
        }, c.prototype.isEditingAttachment = function () {
          return null != this.attachmentEditor;
        }, c.prototype.installAttachmentEditorForAttachment = function (t, n) {
          var i, o, r;
          if ((null != (r = this.attachmentEditor) ? r.attachment : void 0) !== t && (o = this.documentView.findElementForObject(t))) return this.uninstallAttachmentEditor(), i = this.composition.document.getAttachmentPieceForAttachment(t), this.attachmentEditor = new e.AttachmentEditorController(i, o, this.element, n), this.attachmentEditor.delegate = this;
        }, c.prototype.uninstallAttachmentEditor = function () {
          var t;
          return null != (t = this.attachmentEditor) ? t.uninstall() : void 0;
        }, c.prototype.didUninstallAttachmentEditor = function () {
          return this.attachmentEditor = null, this.render();
        }, c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment = function (t, e) {
          var n;
          return null != (n = this.delegate) && "function" == typeof n.compositionControllerWillUpdateAttachment && n.compositionControllerWillUpdateAttachment(e), this.composition.updateAttributesForAttachment(t, e);
        }, c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment = function (t, e) {
          var n;
          return null != (n = this.delegate) && "function" == typeof n.compositionControllerWillUpdateAttachment && n.compositionControllerWillUpdateAttachment(e), this.composition.removeAttributeForAttachment(t, e);
        }, c.prototype.attachmentEditorDidRequestRemovalOfAttachment = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionControllerDidRequestRemovalOfAttachment ? e.compositionControllerDidRequestRemovalOfAttachment(t) : void 0;
        }, c.prototype.attachmentEditorDidRequestDeselectingAttachment = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionControllerDidRequestDeselectingAttachment ? e.compositionControllerDidRequestDeselectingAttachment(t) : void 0;
        }, c.prototype.canSyncDocumentView = function () {
          return !this.isEditingAttachment();
        }, c.prototype.findAttachmentForElement = function (t) {
          return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId, 10));
        }, c;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          r = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) s.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty;

      n = e.handleEvent, i = e.triggerEvent, t = e.findClosestElementFromNode, e.ToolbarController = function (e) {
        function s(t) {
          this.element = t, this.didKeyDownDialogInput = o(this.didKeyDownDialogInput, this), this.didClickDialogButton = o(this.didClickDialogButton, this), this.didClickAttributeButton = o(this.didClickAttributeButton, this), this.didClickActionButton = o(this.didClickActionButton, this), this.attributes = {}, this.actions = {}, this.resetDialogInputs(), n("mousedown", {
            onElement: this.element,
            matchingSelector: a,
            withCallback: this.didClickActionButton
          }), n("mousedown", {
            onElement: this.element,
            matchingSelector: c,
            withCallback: this.didClickAttributeButton
          }), n("click", {
            onElement: this.element,
            matchingSelector: v,
            preventDefault: !0
          }), n("click", {
            onElement: this.element,
            matchingSelector: l,
            withCallback: this.didClickDialogButton
          }), n("keydown", {
            onElement: this.element,
            matchingSelector: h,
            withCallback: this.didKeyDownDialogInput
          });
        }

        var a, u, c, l, h, p, d, f, g, m, v;
        return r(s, e), c = "[data-trix-attribute]", a = "[data-trix-action]", v = c + ", " + a, p = "[data-trix-dialog]", u = p + "[data-trix-active]", l = p + " [data-trix-method]", h = p + " [data-trix-input]", s.prototype.didClickActionButton = function (t, e) {
          var n, i, o;
          return null != (i = this.delegate) && i.toolbarDidClickButton(), t.preventDefault(), n = d(e), this.getDialog(n) ? this.toggleDialog(n) : null != (o = this.delegate) ? o.toolbarDidInvokeAction(n) : void 0;
        }, s.prototype.didClickAttributeButton = function (t, e) {
          var n, i, o;
          return null != (i = this.delegate) && i.toolbarDidClickButton(), t.preventDefault(), n = f(e), this.getDialog(n) ? this.toggleDialog(n) : null != (o = this.delegate) && o.toolbarDidToggleAttribute(n), this.refreshAttributeButtons();
        }, s.prototype.didClickDialogButton = function (e, n) {
          var i, o;
          return i = t(n, {
            matchingSelector: p
          }), o = n.getAttribute("data-trix-method"), this[o].call(this, i);
        }, s.prototype.didKeyDownDialogInput = function (t, e) {
          var n, i;
          return 13 === t.keyCode && (t.preventDefault(), n = e.getAttribute("name"), i = this.getDialog(n), this.setAttribute(i)), 27 === t.keyCode ? (t.preventDefault(), this.hideDialog()) : void 0;
        }, s.prototype.updateActions = function (t) {
          return this.actions = t, this.refreshActionButtons();
        }, s.prototype.refreshActionButtons = function () {
          return this.eachActionButton(function (t) {
            return function (e, n) {
              return e.disabled = t.actions[n] === !1;
            };
          }(this));
        }, s.prototype.eachActionButton = function (t) {
          var e, n, i, o, r;

          for (o = this.element.querySelectorAll(a), r = [], n = 0, i = o.length; i > n; n++) e = o[n], r.push(t(e, d(e)));

          return r;
        }, s.prototype.updateAttributes = function (t) {
          return this.attributes = t, this.refreshAttributeButtons();
        }, s.prototype.refreshAttributeButtons = function () {
          return this.eachAttributeButton(function (t) {
            return function (e, n) {
              return e.disabled = t.attributes[n] === !1, t.attributes[n] || t.dialogIsVisible(n) ? (e.setAttribute("data-trix-active", ""), e.classList.add("trix-active")) : (e.removeAttribute("data-trix-active"), e.classList.remove("trix-active"));
            };
          }(this));
        }, s.prototype.eachAttributeButton = function (t) {
          var e, n, i, o, r;

          for (o = this.element.querySelectorAll(c), r = [], n = 0, i = o.length; i > n; n++) e = o[n], r.push(t(e, f(e)));

          return r;
        }, s.prototype.applyKeyboardCommand = function (t) {
          var e, n, o, r, s, a, u;

          for (s = JSON.stringify(t.sort()), u = this.element.querySelectorAll("[data-trix-key]"), r = 0, a = u.length; a > r; r++) if (e = u[r], o = e.getAttribute("data-trix-key").split("+"), n = JSON.stringify(o.sort()), n === s) return i("mousedown", {
            onElement: e
          }), !0;

          return !1;
        }, s.prototype.dialogIsVisible = function (t) {
          var e;
          return (e = this.getDialog(t)) ? e.hasAttribute("data-trix-active") : void 0;
        }, s.prototype.toggleDialog = function (t) {
          return this.dialogIsVisible(t) ? this.hideDialog() : this.showDialog(t);
        }, s.prototype.showDialog = function (t) {
          var e, n, i, o, r, s, a, u, c, l;

          for (this.hideDialog(), null != (a = this.delegate) && a.toolbarWillShowDialog(), i = this.getDialog(t), i.setAttribute("data-trix-active", ""), i.classList.add("trix-active"), u = i.querySelectorAll("input[disabled]"), o = 0, s = u.length; s > o; o++) n = u[o], n.removeAttribute("disabled");

          return (e = f(i)) && (r = m(i, t)) && (r.value = null != (c = this.attributes[e]) ? c : "", r.select()), null != (l = this.delegate) ? l.toolbarDidShowDialog(t) : void 0;
        }, s.prototype.setAttribute = function (t) {
          var e, n, i;
          return e = f(t), n = m(t, e), n.willValidate && !n.checkValidity() ? (n.setAttribute("data-trix-validate", ""), n.classList.add("trix-validate"), n.focus()) : (null != (i = this.delegate) && i.toolbarDidUpdateAttribute(e, n.value), this.hideDialog());
        }, s.prototype.removeAttribute = function (t) {
          var e, n;
          return e = f(t), null != (n = this.delegate) && n.toolbarDidRemoveAttribute(e), this.hideDialog();
        }, s.prototype.hideDialog = function () {
          var t, e;
          return (t = this.element.querySelector(u)) ? (t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"), this.resetDialogInputs(), null != (e = this.delegate) ? e.toolbarDidHideDialog(g(t)) : void 0) : void 0;
        }, s.prototype.resetDialogInputs = function () {
          var t, e, n, i, o;

          for (i = this.element.querySelectorAll(h), o = [], t = 0, n = i.length; n > t; t++) e = i[t], e.setAttribute("disabled", "disabled"), e.removeAttribute("data-trix-validate"), o.push(e.classList.remove("trix-validate"));

          return o;
        }, s.prototype.getDialog = function (t) {
          return this.element.querySelector("[data-trix-dialog=" + t + "]");
        }, m = function (t, e) {
          return null == e && (e = f(t)), t.querySelector("[data-trix-input][name='" + e + "']");
        }, d = function (t) {
          return t.getAttribute("data-trix-action");
        }, f = function (t) {
          var e;
          return null != (e = t.getAttribute("data-trix-attribute")) ? e : t.getAttribute("data-trix-dialog-attribute");
        }, g = function (t) {
          return t.getAttribute("data-trix-dialog");
        }, s;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.ImagePreloadOperation = function (e) {
        function n(t) {
          this.url = t;
        }

        return t(n, e), n.prototype.perform = function (t) {
          var e;
          return e = new Image(), e.onload = function (n) {
            return function () {
              return e.width = n.width = e.naturalWidth, e.height = n.height = e.naturalHeight, t(!0, e);
            };
          }(this), e.onerror = function () {
            return t(!1);
          }, e.src = this.url;
        }, n;
      }(e.Operation);
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          n = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) i.call(e, o) && (t[o] = e[o]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      e.Attachment = function (i) {
        function o(n) {
          null == n && (n = {}), this.releaseFile = t(this.releaseFile, this), o.__super__.constructor.apply(this, arguments), this.attributes = e.Hash.box(n), this.didChangeAttributes();
        }

        return n(o, i), o.previewablePattern = /^image(\/(gif|png|jpe?g)|$)/, o.attachmentForFile = function (t) {
          var e, n;
          return n = this.attributesForFile(t), e = new this(n), e.setFile(t), e;
        }, o.attributesForFile = function (t) {
          return new e.Hash({
            filename: t.name,
            filesize: t.size,
            contentType: t.type
          });
        }, o.fromJSON = function (t) {
          return new this(t);
        }, o.prototype.getAttribute = function (t) {
          return this.attributes.get(t);
        }, o.prototype.hasAttribute = function (t) {
          return this.attributes.has(t);
        }, o.prototype.getAttributes = function () {
          return this.attributes.toObject();
        }, o.prototype.setAttributes = function (t) {
          var e, n, i;
          return null == t && (t = {}), e = this.attributes.merge(t), this.attributes.isEqualTo(e) ? void 0 : (this.attributes = e, this.didChangeAttributes(), null != (n = this.previewDelegate) && "function" == typeof n.attachmentDidChangeAttributes && n.attachmentDidChangeAttributes(this), null != (i = this.delegate) && "function" == typeof i.attachmentDidChangeAttributes ? i.attachmentDidChangeAttributes(this) : void 0);
        }, o.prototype.didChangeAttributes = function () {
          return this.isPreviewable() ? this.preloadURL() : void 0;
        }, o.prototype.isPending = function () {
          return null != this.file && !(this.getURL() || this.getHref());
        }, o.prototype.isPreviewable = function () {
          return this.attributes.has("previewable") ? this.attributes.get("previewable") : this.constructor.previewablePattern.test(this.getContentType());
        }, o.prototype.getType = function () {
          return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
        }, o.prototype.getURL = function () {
          return this.attributes.get("url");
        }, o.prototype.getHref = function () {
          return this.attributes.get("href");
        }, o.prototype.getFilename = function () {
          var t;
          return null != (t = this.attributes.get("filename")) ? t : "";
        }, o.prototype.getFilesize = function () {
          return this.attributes.get("filesize");
        }, o.prototype.getFormattedFilesize = function () {
          var t;
          return t = this.attributes.get("filesize"), "number" == typeof t ? e.config.fileSize.formatter(t) : "";
        }, o.prototype.getExtension = function () {
          var t;
          return null != (t = this.getFilename().match(/\.(\w+)$/)) ? t[1].toLowerCase() : void 0;
        }, o.prototype.getContentType = function () {
          return this.attributes.get("contentType");
        }, o.prototype.hasContent = function () {
          return this.attributes.has("content");
        }, o.prototype.getContent = function () {
          return this.attributes.get("content");
        }, o.prototype.getWidth = function () {
          return this.attributes.get("width");
        }, o.prototype.getHeight = function () {
          return this.attributes.get("height");
        }, o.prototype.getFile = function () {
          return this.file;
        }, o.prototype.setFile = function (t) {
          return this.file = t, this.isPreviewable() ? this.preloadFile() : void 0;
        }, o.prototype.releaseFile = function () {
          return this.releasePreloadedFile(), this.file = null;
        }, o.prototype.getUploadProgress = function () {
          var t;
          return null != (t = this.uploadProgress) ? t : 0;
        }, o.prototype.setUploadProgress = function (t) {
          var e;
          return this.uploadProgress !== t ? (this.uploadProgress = t, null != (e = this.uploadProgressDelegate) && "function" == typeof e.attachmentDidChangeUploadProgress ? e.attachmentDidChangeUploadProgress(this) : void 0) : void 0;
        }, o.prototype.toJSON = function () {
          return this.getAttributes();
        }, o.prototype.getCacheKey = function () {
          return [o.__super__.getCacheKey.apply(this, arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
        }, o.prototype.getPreviewURL = function () {
          return this.previewURL || this.preloadingURL;
        }, o.prototype.setPreviewURL = function (t) {
          var e, n;
          return t !== this.getPreviewURL() ? (this.previewURL = t, null != (e = this.previewDelegate) && "function" == typeof e.attachmentDidChangeAttributes && e.attachmentDidChangeAttributes(this), null != (n = this.delegate) && "function" == typeof n.attachmentDidChangePreviewURL ? n.attachmentDidChangePreviewURL(this) : void 0) : void 0;
        }, o.prototype.preloadURL = function () {
          return this.preload(this.getURL(), this.releaseFile);
        }, o.prototype.preloadFile = function () {
          return this.file ? (this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL)) : void 0;
        }, o.prototype.releasePreloadedFile = function () {
          return this.fileObjectURL ? (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null) : void 0;
        }, o.prototype.preload = function (t, n) {
          var i;
          return t && t !== this.getPreviewURL() ? (this.preloadingURL = t, i = new e.ImagePreloadOperation(t), i.then(function (e) {
            return function (i) {
              var o, r;
              return r = i.width, o = i.height, e.getWidth() && e.getHeight() || e.setAttributes({
                width: r,
                height: o
              }), e.preloadingURL = null, e.setPreviewURL(t), "function" == typeof n ? n() : void 0;
            };
          }(this))["catch"](function (t) {
            return function () {
              return t.preloadingURL = null, "function" == typeof n ? n() : void 0;
            };
          }(this))) : void 0;
        }, o;
      }(e.Object);
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.Piece = function (n) {
        function i(t, n) {
          null == n && (n = {}), i.__super__.constructor.apply(this, arguments), this.attributes = e.Hash.box(n);
        }

        return t(i, n), i.types = {}, i.registerType = function (t, e) {
          return e.type = t, this.types[t] = e;
        }, i.fromJSON = function (t) {
          var e;
          return (e = this.types[t.type]) ? e.fromJSON(t) : void 0;
        }, i.prototype.copyWithAttributes = function (t) {
          return new this.constructor(this.getValue(), t);
        }, i.prototype.copyWithAdditionalAttributes = function (t) {
          return this.copyWithAttributes(this.attributes.merge(t));
        }, i.prototype.copyWithoutAttribute = function (t) {
          return this.copyWithAttributes(this.attributes.remove(t));
        }, i.prototype.copy = function () {
          return this.copyWithAttributes(this.attributes);
        }, i.prototype.getAttribute = function (t) {
          return this.attributes.get(t);
        }, i.prototype.getAttributesHash = function () {
          return this.attributes;
        }, i.prototype.getAttributes = function () {
          return this.attributes.toObject();
        }, i.prototype.getCommonAttributes = function () {
          var t, e, n;
          return (n = pieceList.getPieceAtIndex(0)) ? (t = n.attributes, e = t.getKeys(), pieceList.eachPiece(function (n) {
            return e = t.getKeysCommonToHash(n.attributes), t = t.slice(e);
          }), t.toObject()) : {};
        }, i.prototype.hasAttribute = function (t) {
          return this.attributes.has(t);
        }, i.prototype.hasSameStringValueAsPiece = function (t) {
          return null != t && this.toString() === t.toString();
        }, i.prototype.hasSameAttributesAsPiece = function (t) {
          return null != t && (this.attributes === t.attributes || this.attributes.isEqualTo(t.attributes));
        }, i.prototype.isBlockBreak = function () {
          return !1;
        }, i.prototype.isEqualTo = function (t) {
          return i.__super__.isEqualTo.apply(this, arguments) || this.hasSameConstructorAs(t) && this.hasSameStringValueAsPiece(t) && this.hasSameAttributesAsPiece(t);
        }, i.prototype.isEmpty = function () {
          return 0 === this.length;
        }, i.prototype.isSerializable = function () {
          return !0;
        }, i.prototype.toJSON = function () {
          return {
            type: this.constructor.type,
            attributes: this.getAttributes()
          };
        }, i.prototype.contentsForInspection = function () {
          return {
            type: this.constructor.type,
            attributes: this.attributes.inspect()
          };
        }, i.prototype.canBeGrouped = function () {
          return this.hasAttribute("href");
        }, i.prototype.canBeGroupedWith = function (t) {
          return this.getAttribute("href") === t.getAttribute("href");
        }, i.prototype.getLength = function () {
          return this.length;
        }, i.prototype.canBeConsolidatedWith = function () {
          return !1;
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.Piece.registerType("attachment", e.AttachmentPiece = function (n) {
        function i(t) {
          this.attachment = t, i.__super__.constructor.apply(this, arguments), this.length = 1, this.ensureAttachmentExclusivelyHasAttribute("href"), this.attachment.hasContent() || this.removeProhibitedAttributes();
        }

        return t(i, n), i.fromJSON = function (t) {
          return new this(e.Attachment.fromJSON(t.attachment), t.attributes);
        }, i.permittedAttributes = ["caption", "presentation"], i.prototype.ensureAttachmentExclusivelyHasAttribute = function (t) {
          return this.hasAttribute(t) ? (this.attachment.hasAttribute(t) || this.attachment.setAttributes(this.attributes.slice(t)), this.attributes = this.attributes.remove(t)) : void 0;
        }, i.prototype.removeProhibitedAttributes = function () {
          var t;
          return t = this.attributes.slice(this.constructor.permittedAttributes), t.isEqualTo(this.attributes) ? void 0 : this.attributes = t;
        }, i.prototype.getValue = function () {
          return this.attachment;
        }, i.prototype.isSerializable = function () {
          return !this.attachment.isPending();
        }, i.prototype.getCaption = function () {
          var t;
          return null != (t = this.attributes.get("caption")) ? t : "";
        }, i.prototype.isEqualTo = function (t) {
          var e;
          return i.__super__.isEqualTo.apply(this, arguments) && this.attachment.id === (null != t && null != (e = t.attachment) ? e.id : void 0);
        }, i.prototype.toString = function () {
          return e.OBJECT_REPLACEMENT_CHARACTER;
        }, i.prototype.toJSON = function () {
          var t;
          return t = i.__super__.toJSON.apply(this, arguments), t.attachment = this.attachment, t;
        }, i.prototype.getCacheKey = function () {
          return [i.__super__.getCacheKey.apply(this, arguments), this.attachment.getCacheKey()].join("/");
        }, i.prototype.toConsole = function () {
          return JSON.stringify(this.toString());
        }, i;
      }(e.Piece));
    }.call(this), function () {
      var t,
          n = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) i.call(e, o) && (t[o] = e[o]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.normalizeNewlines, e.Piece.registerType("string", e.StringPiece = function (e) {
        function i(e) {
          i.__super__.constructor.apply(this, arguments), this.string = t(e), this.length = this.string.length;
        }

        return n(i, e), i.fromJSON = function (t) {
          return new this(t.string, t.attributes);
        }, i.prototype.getValue = function () {
          return this.string;
        }, i.prototype.toString = function () {
          return this.string.toString();
        }, i.prototype.isBlockBreak = function () {
          return "\n" === this.toString() && this.getAttribute("blockBreak") === !0;
        }, i.prototype.toJSON = function () {
          var t;
          return t = i.__super__.toJSON.apply(this, arguments), t.string = this.string, t;
        }, i.prototype.canBeConsolidatedWith = function (t) {
          return null != t && this.hasSameConstructorAs(t) && this.hasSameAttributesAsPiece(t);
        }, i.prototype.consolidateWith = function (t) {
          return new this.constructor(this.toString() + t.toString(), this.attributes);
        }, i.prototype.splitAtOffset = function (t) {
          var e, n;
          return 0 === t ? (e = null, n = this) : t === this.length ? (e = this, n = null) : (e = new this.constructor(this.string.slice(0, t), this.attributes), n = new this.constructor(this.string.slice(t), this.attributes)), [e, n];
        }, i.prototype.toConsole = function () {
          var t;
          return t = this.string, t.length > 15 && (t = t.slice(0, 14) + "\u2026"), JSON.stringify(t.toString());
        }, i;
      }(e.Piece));
    }.call(this), function () {
      var t,
          n = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) i.call(e, o) && (t[o] = e[o]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty,
          o = [].slice;

      t = e.spliceArray, e.SplittableList = function (e) {
        function i(t) {
          null == t && (t = []), i.__super__.constructor.apply(this, arguments), this.objects = t.slice(0), this.length = this.objects.length;
        }

        var r, s, a;
        return n(i, e), i.box = function (t) {
          return t instanceof this ? t : new this(t);
        }, i.prototype.indexOf = function (t) {
          return this.objects.indexOf(t);
        }, i.prototype.splice = function () {
          var e;
          return e = 1 <= arguments.length ? o.call(arguments, 0) : [], new this.constructor(t.apply(null, [this.objects].concat(o.call(e))));
        }, i.prototype.eachObject = function (t) {
          var e, n, i, o, r, s;

          for (r = this.objects, s = [], n = e = 0, i = r.length; i > e; n = ++e) o = r[n], s.push(t(o, n));

          return s;
        }, i.prototype.insertObjectAtIndex = function (t, e) {
          return this.splice(e, 0, t);
        }, i.prototype.insertSplittableListAtIndex = function (t, e) {
          return this.splice.apply(this, [e, 0].concat(o.call(t.objects)));
        }, i.prototype.insertSplittableListAtPosition = function (t, e) {
          var n, i, o;
          return o = this.splitObjectAtPosition(e), i = o[0], n = o[1], new this.constructor(i).insertSplittableListAtIndex(t, n);
        }, i.prototype.editObjectAtIndex = function (t, e) {
          return this.replaceObjectAtIndex(e(this.objects[t]), t);
        }, i.prototype.replaceObjectAtIndex = function (t, e) {
          return this.splice(e, 1, t);
        }, i.prototype.removeObjectAtIndex = function (t) {
          return this.splice(t, 1);
        }, i.prototype.getObjectAtIndex = function (t) {
          return this.objects[t];
        }, i.prototype.getSplittableListInRange = function (t) {
          var e, n, i, o;
          return i = this.splitObjectsAtRange(t), n = i[0], e = i[1], o = i[2], new this.constructor(n.slice(e, o + 1));
        }, i.prototype.selectSplittableList = function (t) {
          var e, n;
          return n = function () {
            var n, i, o, r;

            for (o = this.objects, r = [], n = 0, i = o.length; i > n; n++) e = o[n], t(e) && r.push(e);

            return r;
          }.call(this), new this.constructor(n);
        }, i.prototype.removeObjectsInRange = function (t) {
          var e, n, i, o;
          return i = this.splitObjectsAtRange(t), n = i[0], e = i[1], o = i[2], new this.constructor(n).splice(e, o - e + 1);
        }, i.prototype.transformObjectsInRange = function (t, e) {
          var n, i, o, r, s, a, u;
          return s = this.splitObjectsAtRange(t), r = s[0], i = s[1], a = s[2], u = function () {
            var t, s, u;

            for (u = [], n = t = 0, s = r.length; s > t; n = ++t) o = r[n], u.push(n >= i && a >= n ? e(o) : o);

            return u;
          }(), new this.constructor(u);
        }, i.prototype.splitObjectsAtRange = function (t) {
          var e, n, i, o, s, u;
          return o = this.splitObjectAtPosition(a(t)), n = o[0], e = o[1], i = o[2], s = new this.constructor(n).splitObjectAtPosition(r(t) + i), n = s[0], u = s[1], [n, e, u - 1];
        }, i.prototype.getObjectAtPosition = function (t) {
          var e, n, i;
          return i = this.findIndexAndOffsetAtPosition(t), e = i.index, n = i.offset, this.objects[e];
        }, i.prototype.splitObjectAtPosition = function (t) {
          var e, n, i, o, r, s, a, u, c, l;
          return s = this.findIndexAndOffsetAtPosition(t), e = s.index, r = s.offset, o = this.objects.slice(0), null != e ? 0 === r ? (c = e, l = 0) : (i = this.getObjectAtIndex(e), a = i.splitAtOffset(r), n = a[0], u = a[1], o.splice(e, 1, n, u), c = e + 1, l = n.getLength() - r) : (c = o.length, l = 0), [o, c, l];
        }, i.prototype.consolidate = function () {
          var t, e, n, i, o, r;

          for (i = [], o = this.objects[0], r = this.objects.slice(1), t = 0, e = r.length; e > t; t++) n = r[t], ("function" == typeof o.canBeConsolidatedWith ? o.canBeConsolidatedWith(n) : void 0) ? o = o.consolidateWith(n) : (i.push(o), o = n);

          return null != o && i.push(o), new this.constructor(i);
        }, i.prototype.consolidateFromIndexToIndex = function (t, e) {
          var n, i, r;
          return i = this.objects.slice(0), r = i.slice(t, e + 1), n = new this.constructor(r).consolidate().toArray(), this.splice.apply(this, [t, r.length].concat(o.call(n)));
        }, i.prototype.findIndexAndOffsetAtPosition = function (t) {
          var e, n, i, o, r, s, a;

          for (e = 0, a = this.objects, i = n = 0, o = a.length; o > n; i = ++n) {
            if (s = a[i], r = e + s.getLength(), t >= e && r > t) return {
              index: i,
              offset: t - e
            };
            e = r;
          }

          return {
            index: null,
            offset: null
          };
        }, i.prototype.findPositionAtIndexAndOffset = function (t, e) {
          var n, i, o, r, s, a;

          for (s = 0, a = this.objects, n = i = 0, o = a.length; o > i; n = ++i) if (r = a[n], t > n) s += r.getLength();else if (n === t) {
            s += e;
            break;
          }

          return s;
        }, i.prototype.getEndPosition = function () {
          var t, e;
          return null != this.endPosition ? this.endPosition : this.endPosition = function () {
            var n, i, o;

            for (e = 0, o = this.objects, n = 0, i = o.length; i > n; n++) t = o[n], e += t.getLength();

            return e;
          }.call(this);
        }, i.prototype.toString = function () {
          return this.objects.join("");
        }, i.prototype.toArray = function () {
          return this.objects.slice(0);
        }, i.prototype.toJSON = function () {
          return this.toArray();
        }, i.prototype.isEqualTo = function (t) {
          return i.__super__.isEqualTo.apply(this, arguments) || s(this.objects, null != t ? t.objects : void 0);
        }, s = function (t, e) {
          var n, i, o, r, s;
          if (null == e && (e = []), t.length !== e.length) return !1;

          for (s = !0, i = n = 0, o = t.length; o > n; i = ++n) r = t[i], s && !r.isEqualTo(e[i]) && (s = !1);

          return s;
        }, i.prototype.contentsForInspection = function () {
          var t;
          return {
            objects: "[" + function () {
              var e, n, i, o;

              for (i = this.objects, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.inspect());

              return o;
            }.call(this).join(", ") + "]"
          };
        }, a = function (t) {
          return t[0];
        }, r = function (t) {
          return t[1];
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.Text = function (n) {
        function i(t) {
          var n;
          null == t && (t = []), i.__super__.constructor.apply(this, arguments), this.pieceList = new e.SplittableList(function () {
            var e, i, o;

            for (o = [], e = 0, i = t.length; i > e; e++) n = t[e], n.isEmpty() || o.push(n);

            return o;
          }());
        }

        return t(i, n), i.textForAttachmentWithAttributes = function (t, n) {
          var i;
          return i = new e.AttachmentPiece(t, n), new this([i]);
        }, i.textForStringWithAttributes = function (t, n) {
          var i;
          return i = new e.StringPiece(t, n), new this([i]);
        }, i.fromJSON = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) n = t[i], r.push(e.Piece.fromJSON(n));

            return r;
          }(), new this(i);
        }, i.prototype.copy = function () {
          return this.copyWithPieceList(this.pieceList);
        }, i.prototype.copyWithPieceList = function (t) {
          return new this.constructor(t.consolidate().toArray());
        }, i.prototype.copyUsingObjectMap = function (t) {
          var e, n;
          return n = function () {
            var n, i, o, r, s;

            for (o = this.getPieces(), s = [], n = 0, i = o.length; i > n; n++) e = o[n], s.push(null != (r = t.find(e)) ? r : e);

            return s;
          }.call(this), new this.constructor(n);
        }, i.prototype.appendText = function (t) {
          return this.insertTextAtPosition(t, this.getLength());
        }, i.prototype.insertTextAtPosition = function (t, e) {
          return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList, e));
        }, i.prototype.removeTextAtRange = function (t) {
          return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t));
        }, i.prototype.replaceTextAtRange = function (t, e) {
          return this.removeTextAtRange(e).insertTextAtPosition(t, e[0]);
        }, i.prototype.moveTextFromRangeToPosition = function (t, e) {
          var n, i;
          if (!(t[0] <= e && e <= t[1])) return i = this.getTextAtRange(t), n = i.getLength(), t[0] < e && (e -= n), this.removeTextAtRange(t).insertTextAtPosition(i, e);
        }, i.prototype.addAttributeAtRange = function (t, e, n) {
          var i;
          return i = {}, i[t] = e, this.addAttributesAtRange(i, n);
        }, i.prototype.addAttributesAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithAdditionalAttributes(t);
          }));
        }, i.prototype.removeAttributeAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithoutAttribute(t);
          }));
        }, i.prototype.setAttributesAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithAttributes(t);
          }));
        }, i.prototype.getAttributesAtPosition = function (t) {
          var e, n;
          return null != (e = null != (n = this.pieceList.getObjectAtPosition(t)) ? n.getAttributes() : void 0) ? e : {};
        }, i.prototype.getCommonAttributes = function () {
          var t, n;
          return t = function () {
            var t, e, i, o;

            for (i = this.pieceList.toArray(), o = [], t = 0, e = i.length; e > t; t++) n = i[t], o.push(n.getAttributes());

            return o;
          }.call(this), e.Hash.fromCommonAttributesOfObjects(t).toObject();
        }, i.prototype.getCommonAttributesAtRange = function (t) {
          var e;
          return null != (e = this.getTextAtRange(t).getCommonAttributes()) ? e : {};
        }, i.prototype.getExpandedRangeForAttributeAtOffset = function (t, e) {
          var n, i, o;

          for (n = o = e, i = this.getLength(); n > 0 && this.getCommonAttributesAtRange([n - 1, o])[t];) n--;

          for (; i > o && this.getCommonAttributesAtRange([e, o + 1])[t];) o++;

          return [n, o];
        }, i.prototype.getTextAtRange = function (t) {
          return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t));
        }, i.prototype.getStringAtRange = function (t) {
          return this.pieceList.getSplittableListInRange(t).toString();
        }, i.prototype.getStringAtPosition = function (t) {
          return this.getStringAtRange([t, t + 1]);
        }, i.prototype.startsWithString = function (t) {
          return this.getStringAtRange([0, t.length]) === t;
        }, i.prototype.endsWithString = function (t) {
          var e;
          return e = this.getLength(), this.getStringAtRange([e - t.length, e]) === t;
        }, i.prototype.getAttachmentPieces = function () {
          var t, e, n, i, o;

          for (i = this.pieceList.toArray(), o = [], t = 0, e = i.length; e > t; t++) n = i[t], null != n.attachment && o.push(n);

          return o;
        }, i.prototype.getAttachments = function () {
          var t, e, n, i, o;

          for (i = this.getAttachmentPieces(), o = [], t = 0, e = i.length; e > t; t++) n = i[t], o.push(n.attachment);

          return o;
        }, i.prototype.getAttachmentAndPositionById = function (t) {
          var e, n, i, o, r, s;

          for (o = 0, r = this.pieceList.toArray(), e = 0, n = r.length; n > e; e++) {
            if (i = r[e], (null != (s = i.attachment) ? s.id : void 0) === t) return {
              attachment: i.attachment,
              position: o
            };
            o += i.length;
          }

          return {
            attachment: null,
            position: null
          };
        }, i.prototype.getAttachmentById = function (t) {
          var e, n, i;
          return i = this.getAttachmentAndPositionById(t), e = i.attachment, n = i.position, e;
        }, i.prototype.getRangeOfAttachment = function (t) {
          var e, n;
          return n = this.getAttachmentAndPositionById(t.id), t = n.attachment, e = n.position, null != t ? [e, e + 1] : void 0;
        }, i.prototype.updateAttributesForAttachment = function (t, e) {
          var n;
          return (n = this.getRangeOfAttachment(e)) ? this.addAttributesAtRange(t, n) : this;
        }, i.prototype.getLength = function () {
          return this.pieceList.getEndPosition();
        }, i.prototype.isEmpty = function () {
          return 0 === this.getLength();
        }, i.prototype.isEqualTo = function (t) {
          var e;
          return i.__super__.isEqualTo.apply(this, arguments) || (null != t && null != (e = t.pieceList) ? e.isEqualTo(this.pieceList) : void 0);
        }, i.prototype.isBlockBreak = function () {
          return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
        }, i.prototype.eachPiece = function (t) {
          return this.pieceList.eachObject(t);
        }, i.prototype.getPieces = function () {
          return this.pieceList.toArray();
        }, i.prototype.getPieceAtPosition = function (t) {
          return this.pieceList.getObjectAtPosition(t);
        }, i.prototype.contentsForInspection = function () {
          return {
            pieceList: this.pieceList.inspect()
          };
        }, i.prototype.toSerializableText = function () {
          var t;
          return t = this.pieceList.selectSplittableList(function (t) {
            return t.isSerializable();
          }), this.copyWithPieceList(t);
        }, i.prototype.toString = function () {
          return this.pieceList.toString();
        }, i.prototype.toJSON = function () {
          return this.pieceList.toJSON();
        }, i.prototype.toConsole = function () {
          var t;
          return JSON.stringify(function () {
            var e, n, i, o;

            for (i = this.pieceList.toArray(), o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(JSON.parse(t.toConsole()));

            return o;
          }.call(this));
        }, i.prototype.getDirection = function () {
          return e.getDirection(this.toString());
        }, i.prototype.isRTL = function () {
          return "rtl" === this.getDirection();
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) a.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          a = {}.hasOwnProperty,
          u = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      },
          c = [].slice;

      t = e.arraysAreEqual, r = e.spliceArray, i = e.getBlockConfig, n = e.getBlockAttributeNames, o = e.getListAttributeNames, e.Block = function (n) {
        function a(t, n) {
          null == t && (t = new e.Text()), null == n && (n = []), a.__super__.constructor.apply(this, arguments), this.text = h(t), this.attributes = n;
        }

        var l, h, p, d, f, g, m, v, y;
        return s(a, n), a.fromJSON = function (t) {
          var n;
          return n = e.Text.fromJSON(t.text), new this(n, t.attributes);
        }, a.prototype.isEmpty = function () {
          return this.text.isBlockBreak();
        }, a.prototype.isEqualTo = function (e) {
          return a.__super__.isEqualTo.apply(this, arguments) || this.text.isEqualTo(null != e ? e.text : void 0) && t(this.attributes, null != e ? e.attributes : void 0);
        }, a.prototype.copyWithText = function (t) {
          return new this.constructor(t, this.attributes);
        }, a.prototype.copyWithoutText = function () {
          return this.copyWithText(null);
        }, a.prototype.copyWithAttributes = function (t) {
          return new this.constructor(this.text, t);
        }, a.prototype.copyWithoutAttributes = function () {
          return this.copyWithAttributes(null);
        }, a.prototype.copyUsingObjectMap = function (t) {
          var e;
          return this.copyWithText((e = t.find(this.text)) ? e : this.text.copyUsingObjectMap(t));
        }, a.prototype.addAttribute = function (t) {
          var e;
          return e = this.attributes.concat(d(t)), this.copyWithAttributes(e);
        }, a.prototype.removeAttribute = function (t) {
          var e, n;
          return n = i(t).listAttribute, e = g(g(this.attributes, t), n), this.copyWithAttributes(e);
        }, a.prototype.removeLastAttribute = function () {
          return this.removeAttribute(this.getLastAttribute());
        }, a.prototype.getLastAttribute = function () {
          return f(this.attributes);
        }, a.prototype.getAttributes = function () {
          return this.attributes.slice(0);
        }, a.prototype.getAttributeLevel = function () {
          return this.attributes.length;
        }, a.prototype.getAttributeAtLevel = function (t) {
          return this.attributes[t - 1];
        }, a.prototype.hasAttribute = function (t) {
          return u.call(this.attributes, t) >= 0;
        }, a.prototype.hasAttributes = function () {
          return this.getAttributeLevel() > 0;
        }, a.prototype.getLastNestableAttribute = function () {
          return f(this.getNestableAttributes());
        }, a.prototype.getNestableAttributes = function () {
          var t, e, n, o, r;

          for (o = this.attributes, r = [], e = 0, n = o.length; n > e; e++) t = o[e], i(t).nestable && r.push(t);

          return r;
        }, a.prototype.getNestingLevel = function () {
          return this.getNestableAttributes().length;
        }, a.prototype.decreaseNestingLevel = function () {
          var t;
          return (t = this.getLastNestableAttribute()) ? this.removeAttribute(t) : this;
        }, a.prototype.increaseNestingLevel = function () {
          var t, e, n;
          return (t = this.getLastNestableAttribute()) ? (n = this.attributes.lastIndexOf(t), e = r.apply(null, [this.attributes, n + 1, 0].concat(c.call(d(t)))), this.copyWithAttributes(e)) : this;
        }, a.prototype.getListItemAttributes = function () {
          var t, e, n, o, r;

          for (o = this.attributes, r = [], e = 0, n = o.length; n > e; e++) t = o[e], i(t).listAttribute && r.push(t);

          return r;
        }, a.prototype.isListItem = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.listAttribute : void 0;
        }, a.prototype.isTerminalBlock = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.terminal : void 0;
        }, a.prototype.breaksOnReturn = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.breakOnReturn : void 0;
        }, a.prototype.findLineBreakInDirectionFromPosition = function (t, e) {
          var n, i;
          return i = this.toString(), n = function () {
            switch (t) {
              case "forward":
                return i.indexOf("\n", e);

              case "backward":
                return i.slice(0, e).lastIndexOf("\n");
            }
          }(), -1 !== n ? n : void 0;
        }, a.prototype.contentsForInspection = function () {
          return {
            text: this.text.inspect(),
            attributes: this.attributes
          };
        }, a.prototype.toString = function () {
          return this.text.toString();
        }, a.prototype.toJSON = function () {
          return {
            text: this.text,
            attributes: this.attributes
          };
        }, a.prototype.getDirection = function () {
          return this.text.getDirection();
        }, a.prototype.isRTL = function () {
          return this.text.isRTL();
        }, a.prototype.getLength = function () {
          return this.text.getLength();
        }, a.prototype.canBeConsolidatedWith = function (t) {
          return !this.hasAttributes() && !t.hasAttributes() && this.getDirection() === t.getDirection();
        }, a.prototype.consolidateWith = function (t) {
          var n, i;
          return n = e.Text.textForStringWithAttributes("\n"), i = this.getTextWithoutBlockBreak().appendText(n), this.copyWithText(i.appendText(t.text));
        }, a.prototype.splitAtOffset = function (t) {
          var e, n;
          return 0 === t ? (e = null, n = this) : t === this.getLength() ? (e = this, n = null) : (e = this.copyWithText(this.text.getTextAtRange([0, t])), n = this.copyWithText(this.text.getTextAtRange([t, this.getLength()]))), [e, n];
        }, a.prototype.getBlockBreakPosition = function () {
          return this.text.getLength() - 1;
        }, a.prototype.getTextWithoutBlockBreak = function () {
          return m(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
        }, a.prototype.canBeGrouped = function (t) {
          return this.attributes[t];
        }, a.prototype.canBeGroupedWith = function (t, e) {
          var n, r, s, a;
          return s = t.getAttributes(), r = s[e], n = this.attributes[e], !(n !== r || i(n).group === !1 && (a = s[e + 1], u.call(o(), a) < 0) || this.getDirection() !== t.getDirection() && !t.isEmpty());
        }, h = function (t) {
          return t = y(t), t = l(t);
        }, y = function (t) {
          var n, i, o, r, s, a;
          return r = !1, a = t.getPieces(), i = 2 <= a.length ? c.call(a, 0, n = a.length - 1) : (n = 0, []), o = a[n++], null == o ? t : (i = function () {
            var t, e, n;

            for (n = [], t = 0, e = i.length; e > t; t++) s = i[t], s.isBlockBreak() ? (r = !0, n.push(v(s))) : n.push(s);

            return n;
          }(), r ? new e.Text(c.call(i).concat([o])) : t);
        }, p = e.Text.textForStringWithAttributes("\n", {
          blockBreak: !0
        }), l = function (t) {
          return m(t) ? t : t.appendText(p);
        }, m = function (t) {
          var e, n;
          return n = t.getLength(), 0 === n ? !1 : (e = t.getTextAtRange([n - 1, n]), e.isBlockBreak());
        }, v = function (t) {
          return t.copyWithoutAttribute("blockBreak");
        }, d = function (t) {
          var e;
          return e = i(t).listAttribute, null != e ? [e, t] : [t];
        }, f = function (t) {
          return t.slice(-1)[0];
        }, g = function (t, e) {
          var n;
          return n = t.lastIndexOf(e), -1 === n ? t : r(t, n, 1);
        }, a;
      }(e.Object);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) r.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty,
          s = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      },
          a = [].slice;

      n = e.tagName, i = e.walkTree, t = e.nodeIsAttachmentElement, e.HTMLSanitizer = function (r) {
        function u(t, e) {
          var n;
          n = null != e ? e : {}, this.allowedAttributes = n.allowedAttributes, this.forbiddenProtocols = n.forbiddenProtocols, this.forbiddenElements = n.forbiddenElements, null == this.allowedAttributes && (this.allowedAttributes = c), null == this.forbiddenProtocols && (this.forbiddenProtocols = h), null == this.forbiddenElements && (this.forbiddenElements = l), this.body = p(t);
        }

        var c, l, h, p;
        return o(u, r), c = "style href src width height class".split(" "), h = "javascript:".split(" "), l = "script iframe".split(" "), u.sanitize = function (t, e) {
          var n;
          return n = new this(t, e), n.sanitize(), n;
        }, u.prototype.sanitize = function () {
          return this.sanitizeElements(), this.normalizeListElementNesting();
        }, u.prototype.getHTML = function () {
          return this.body.innerHTML;
        }, u.prototype.getBody = function () {
          return this.body;
        }, u.prototype.sanitizeElements = function () {
          var t, n, o, r, s;

          for (s = i(this.body), r = []; s.nextNode();) switch (o = s.currentNode, o.nodeType) {
            case Node.ELEMENT_NODE:
              this.elementIsRemovable(o) ? r.push(o) : this.sanitizeElement(o);
              break;

            case Node.COMMENT_NODE:
              r.push(o);
          }

          for (t = 0, n = r.length; n > t; t++) o = r[t], e.removeNode(o);

          return this.body;
        }, u.prototype.sanitizeElement = function (t) {
          var e, n, i, o, r;

          for (t.hasAttribute("href") && (o = t.protocol, s.call(this.forbiddenProtocols, o) >= 0 && t.removeAttribute("href")), r = a.call(t.attributes), e = 0, n = r.length; n > e; e++) i = r[e].name, s.call(this.allowedAttributes, i) >= 0 || 0 === i.indexOf("data-trix") || t.removeAttribute(i);

          return t;
        }, u.prototype.normalizeListElementNesting = function () {
          var t, e, i, o, r;

          for (r = a.call(this.body.querySelectorAll("ul,ol")), t = 0, e = r.length; e > t; t++) i = r[t], (o = i.previousElementSibling) && "li" === n(o) && o.appendChild(i);

          return this.body;
        }, u.prototype.elementIsRemovable = function (t) {
          return (null != t ? t.nodeType : void 0) === Node.ELEMENT_NODE ? this.elementIsForbidden(t) || this.elementIsntSerializable(t) : void 0;
        }, u.prototype.elementIsForbidden = function (t) {
          var e;
          return e = n(t), s.call(this.forbiddenElements, e) >= 0;
        }, u.prototype.elementIsntSerializable = function (e) {
          return "false" === e.getAttribute("data-trix-serialize") && !t(e);
        }, p = function (t) {
          var e, n, i, o, r;

          for (null == t && (t = ""), t = t.replace(/<\/html[^>]*>[^]*$/i, "</html>"), e = document.implementation.createHTMLDocument(""), e.documentElement.innerHTML = t, r = e.head.querySelectorAll("style"), i = 0, o = r.length; o > i; i++) n = r[i], e.body.appendChild(n);

          return e.body;
        }, u;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h,
          p = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) d.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          d = {}.hasOwnProperty,
          f = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      };

      t = e.arraysAreEqual, s = e.makeElement, l = e.tagName, r = e.getBlockTagNames, h = e.walkTree, o = e.findClosestElementFromNode, i = e.elementContainsNode, a = e.nodeIsAttachmentElement, u = e.normalizeSpaces, n = e.breakableWhitespacePattern, c = e.squishBreakableWhitespace, e.HTMLParser = function (d) {
        function g(t, e) {
          this.html = t, this.referenceElement = (null != e ? e : {}).referenceElement, this.blocks = [], this.blockElements = [], this.processedElements = [];
        }

        var m, v, y, b, A, C, x, w, E, S, R, k;
        return p(g, d), g.parse = function (t, e) {
          var n;
          return n = new this(t, e), n.parse(), n;
        }, g.prototype.getDocument = function () {
          return e.Document.fromJSON(this.blocks);
        }, g.prototype.parse = function () {
          var t, n;

          try {
            for (this.createHiddenContainer(), t = e.HTMLSanitizer.sanitize(this.html).getHTML(), this.containerElement.innerHTML = t, n = h(this.containerElement, {
              usingFilter: x
            }); n.nextNode();) this.processNode(n.currentNode);

            return this.translateBlockElementMarginsToNewlines();
          } finally {
            this.removeHiddenContainer();
          }
        }, g.prototype.createHiddenContainer = function () {
          return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(!1), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = s({
            tagName: "div",
            style: {
              display: "none"
            }
          }), document.body.appendChild(this.containerElement));
        }, g.prototype.removeHiddenContainer = function () {
          return e.removeNode(this.containerElement);
        }, x = function (t) {
          return "style" === l(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, g.prototype.processNode = function (t) {
          switch (t.nodeType) {
            case Node.TEXT_NODE:
              if (!this.isInsignificantTextNode(t)) return this.appendBlockForTextNode(t), this.processTextNode(t);
              break;

            case Node.ELEMENT_NODE:
              return this.appendBlockForElement(t), this.processElement(t);
          }
        }, g.prototype.appendBlockForTextNode = function (e) {
          var n, i, o;
          return i = e.parentNode, i === this.currentBlockElement && this.isBlockElement(e.previousSibling) ? this.appendStringWithAttributes("\n") : i !== this.containerElement && !this.isBlockElement(i) || (n = this.getBlockAttributes(i), t(n, null != (o = this.currentBlock) ? o.attributes : void 0)) ? void 0 : (this.currentBlock = this.appendBlockForAttributesWithElement(n, i), this.currentBlockElement = i);
        }, g.prototype.appendBlockForElement = function (e) {
          var n, o, r, s;

          if (r = this.isBlockElement(e), o = i(this.currentBlockElement, e), r && !this.isBlockElement(e.firstChild)) {
            if ((!this.isInsignificantTextNode(e.firstChild) || !this.isBlockElement(e.firstElementChild)) && (n = this.getBlockAttributes(e), e.firstChild)) return o && t(n, this.currentBlock.attributes) ? this.appendStringWithAttributes("\n") : (this.currentBlock = this.appendBlockForAttributesWithElement(n, e), this.currentBlockElement = e);
          } else if (this.currentBlockElement && !o && !r) return (s = this.findParentBlockElement(e)) ? this.appendBlockForElement(s) : (this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null);
        }, g.prototype.findParentBlockElement = function (t) {
          var e;

          for (e = t.parentElement; e && e !== this.containerElement;) {
            if (this.isBlockElement(e) && f.call(this.blockElements, e) >= 0) return e;
            e = e.parentElement;
          }

          return null;
        }, g.prototype.processTextNode = function (t) {
          var e, n;
          return n = t.data, v(t.parentNode) || (n = c(n), R(null != (e = t.previousSibling) ? e.textContent : void 0) && (n = A(n))), this.appendStringWithAttributes(n, this.getTextAttributes(t.parentNode));
        }, g.prototype.processElement = function (t) {
          var e, n, i, o, r;
          if (a(t)) return e = w(t, "attachment"), Object.keys(e).length && (o = this.getTextAttributes(t), this.appendAttachmentWithAttributes(e, o), t.innerHTML = ""), this.processedElements.push(t);

          switch (l(t)) {
            case "br":
              return this.isExtraBR(t) || this.isBlockElement(t.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t)), this.processedElements.push(t);

            case "img":
              e = {
                url: t.getAttribute("src"),
                contentType: "image"
              }, i = b(t);

              for (n in i) r = i[n], e[n] = r;

              return this.appendAttachmentWithAttributes(e, this.getTextAttributes(t)), this.processedElements.push(t);

            case "tr":
              if (t.parentNode.firstChild !== t) return this.appendStringWithAttributes("\n");
              break;

            case "td":
              if (t.parentNode.firstChild !== t) return this.appendStringWithAttributes(" | ");
          }
        }, g.prototype.appendBlockForAttributesWithElement = function (t, e) {
          var n;
          return this.blockElements.push(e), n = m(t), this.blocks.push(n), n;
        }, g.prototype.appendEmptyBlock = function () {
          return this.appendBlockForAttributesWithElement([], null);
        }, g.prototype.appendStringWithAttributes = function (t, e) {
          return this.appendPiece(S(t, e));
        }, g.prototype.appendAttachmentWithAttributes = function (t, e) {
          return this.appendPiece(E(t, e));
        }, g.prototype.appendPiece = function (t) {
          return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t);
        }, g.prototype.appendStringToTextAtIndex = function (t, e) {
          var n, i;
          return i = this.blocks[e].text, n = i[i.length - 1], "string" === (null != n ? n.type : void 0) ? n.string += t : i.push(S(t));
        }, g.prototype.prependStringToTextAtIndex = function (t, e) {
          var n, i;
          return i = this.blocks[e].text, n = i[0], "string" === (null != n ? n.type : void 0) ? n.string = t + n.string : i.unshift(S(t));
        }, S = function (t, e) {
          var n;
          return null == e && (e = {}), n = "string", t = u(t), {
            string: t,
            attributes: e,
            type: n
          };
        }, E = function (t, e) {
          var n;
          return null == e && (e = {}), n = "attachment", {
            attachment: t,
            attributes: e,
            type: n
          };
        }, m = function (t) {
          var e;
          return null == t && (t = {}), e = [], {
            text: e,
            attributes: t
          };
        }, g.prototype.getTextAttributes = function (t) {
          var n, i, r, s, u, c, l, h, p, d, f, g;
          r = {}, p = e.config.textAttributes;

          for (n in p) if (u = p[n], u.tagName && o(t, {
            matchingSelector: u.tagName,
            untilNode: this.containerElement
          })) r[n] = !0;else if (u.parser) {
            if (g = u.parser(t)) {
              for (i = !1, d = this.findBlockElementAncestors(t), c = 0, h = d.length; h > c; c++) if (s = d[c], u.parser(s) === g) {
                i = !0;
                break;
              }

              i || (r[n] = g);
            }
          } else u.styleProperty && (g = t.style[u.styleProperty]) && (r[n] = g);

          if (a(t)) {
            f = w(t, "attributes");

            for (l in f) g = f[l], r[l] = g;
          }

          return r;
        }, g.prototype.getBlockAttributes = function (t) {
          var n, i, o, r;

          for (i = []; t && t !== this.containerElement;) {
            r = e.config.blockAttributes;

            for (n in r) o = r[n], o.parse !== !1 && l(t) === o.tagName && (("function" == typeof o.test ? o.test(t) : void 0) || !o.test) && (i.push(n), o.listAttribute && i.push(o.listAttribute));

            t = t.parentNode;
          }

          return i.reverse();
        }, g.prototype.findBlockElementAncestors = function (t) {
          var e, n;

          for (e = []; t && t !== this.containerElement;) n = l(t), f.call(r(), n) >= 0 && e.push(t), t = t.parentNode;

          return e;
        }, w = function (t, e) {
          try {
            return JSON.parse(t.getAttribute("data-trix-" + e));
          } catch (n) {
            return {};
          }
        }, b = function (t) {
          var e, n, i;
          return i = t.getAttribute("width"), n = t.getAttribute("height"), e = {}, i && (e.width = parseInt(i, 10)), n && (e.height = parseInt(n, 10)), e;
        }, g.prototype.isBlockElement = function (t) {
          var e;
          if ((null != t ? t.nodeType : void 0) === Node.ELEMENT_NODE && !a(t) && !o(t, {
            matchingSelector: "td",
            untilNode: this.containerElement
          })) return e = l(t), f.call(r(), e) >= 0 || "block" === window.getComputedStyle(t).display;
        }, g.prototype.isInsignificantTextNode = function (t) {
          var e, n, i;
          if ((null != t ? t.nodeType : void 0) === Node.TEXT_NODE && k(t.data) && (n = t.parentNode, i = t.previousSibling, e = t.nextSibling, (!C(n.previousSibling) || this.isBlockElement(n.previousSibling)) && !v(n))) return !i || this.isBlockElement(i) || !e || this.isBlockElement(e);
        }, g.prototype.isExtraBR = function (t) {
          return "br" === l(t) && this.isBlockElement(t.parentNode) && t.parentNode.lastChild === t;
        }, v = function (t) {
          var e;
          return e = window.getComputedStyle(t).whiteSpace, "pre" === e || "pre-wrap" === e || "pre-line" === e;
        }, C = function (t) {
          return t && !R(t.textContent);
        }, g.prototype.translateBlockElementMarginsToNewlines = function () {
          var t, e, n, i, o, r, s, a;

          for (e = this.getMarginOfDefaultBlockElement(), s = this.blocks, a = [], i = n = 0, o = s.length; o > n; i = ++n) t = s[i], (r = this.getMarginOfBlockElementAtIndex(i)) && (r.top > 2 * e.top && this.prependStringToTextAtIndex("\n", i), a.push(r.bottom > 2 * e.bottom ? this.appendStringToTextAtIndex("\n", i) : void 0));

          return a;
        }, g.prototype.getMarginOfBlockElementAtIndex = function (t) {
          var e, n;
          return !(e = this.blockElements[t]) || !e.textContent || (n = l(e), f.call(r(), n) >= 0 || f.call(this.processedElements, e) >= 0) ? void 0 : y(e);
        }, g.prototype.getMarginOfDefaultBlockElement = function () {
          var t;
          return t = s(e.config.blockAttributes["default"].tagName), this.containerElement.appendChild(t), y(t);
        }, y = function (t) {
          var e;
          return e = window.getComputedStyle(t), "block" === e.display ? {
            top: parseInt(e.marginTop),
            bottom: parseInt(e.marginBottom)
          } : void 0;
        }, A = function (t) {
          return t.replace(RegExp("^" + n.source + "+"), "");
        }, k = function (t) {
          return RegExp("^" + n.source + "*$").test(t);
        }, R = function (t) {
          return /\s$/.test(t);
        }, g;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) s.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].slice,
          u = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      };

      t = e.arraysAreEqual, i = e.normalizeRange, o = e.rangeIsCollapsed, n = e.getBlockConfig, e.Document = function (s) {
        function c(t) {
          null == t && (t = []), c.__super__.constructor.apply(this, arguments), 0 === t.length && (t = [new e.Block()]), this.blockList = e.SplittableList.box(t);
        }

        var l;
        return r(c, s), c.fromJSON = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) n = t[i], r.push(e.Block.fromJSON(n));

            return r;
          }(), new this(i);
        }, c.fromHTML = function (t, n) {
          return e.HTMLParser.parse(t, n).getDocument();
        }, c.fromString = function (t, n) {
          var i;
          return i = e.Text.textForStringWithAttributes(t, n), new this([new e.Block(i)]);
        }, c.prototype.isEmpty = function () {
          var t;
          return 1 === this.blockList.length && (t = this.getBlockAtIndex(0), t.isEmpty() && !t.hasAttributes());
        }, c.prototype.copy = function (t) {
          var e;
          return null == t && (t = {}), e = t.consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray(), new this.constructor(e);
        }, c.prototype.copyUsingObjectsFromDocument = function (t) {
          var n;
          return n = new e.ObjectMap(t.getObjects()), this.copyUsingObjectMap(n);
        }, c.prototype.copyUsingObjectMap = function (t) {
          var e, n, i;
          return n = function () {
            var n, o, r, s;

            for (r = this.getBlocks(), s = [], n = 0, o = r.length; o > n; n++) e = r[n], s.push((i = t.find(e)) ? i : e.copyUsingObjectMap(t));

            return s;
          }.call(this), new this.constructor(n);
        }, c.prototype.copyWithBaseBlockAttributes = function (t) {
          var e, n, i;
          return null == t && (t = []), i = function () {
            var i, o, r, s;

            for (r = this.getBlocks(), s = [], i = 0, o = r.length; o > i; i++) n = r[i], e = t.concat(n.getAttributes()), s.push(n.copyWithAttributes(e));

            return s;
          }.call(this), new this.constructor(i);
        }, c.prototype.replaceBlock = function (t, e) {
          var n;
          return n = this.blockList.indexOf(t), -1 === n ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e, n));
        }, c.prototype.insertDocumentAtRange = function (t, e) {
          var n, r, s, a, u, c, l;
          return r = t.blockList, u = (e = i(e))[0], c = this.locationFromPosition(u), s = c.index, a = c.offset, l = this, n = this.getBlockAtPosition(u), o(e) && n.isEmpty() && !n.hasAttributes() ? l = new this.constructor(l.blockList.removeObjectAtIndex(s)) : n.getBlockBreakPosition() === a && u++, l = l.removeTextAtRange(e), new this.constructor(l.blockList.insertSplittableListAtPosition(r, u));
        }, c.prototype.mergeDocumentAtRange = function (e, n) {
          var o, r, s, a, u, c, l, h, p, d, f, g;
          return f = (n = i(n))[0], d = this.locationFromPosition(f), r = this.getBlockAtIndex(d.index).getAttributes(), o = e.getBaseBlockAttributes(), g = r.slice(-o.length), t(o, g) ? (l = r.slice(0, -o.length), c = e.copyWithBaseBlockAttributes(l)) : c = e.copy({
            consolidateBlocks: !0
          }).copyWithBaseBlockAttributes(r), s = c.getBlockCount(), a = c.getBlockAtIndex(0), t(r, a.getAttributes()) ? (u = a.getTextWithoutBlockBreak(), p = this.insertTextAtRange(u, n), s > 1 && (c = new this.constructor(c.getBlocks().slice(1)), h = f + u.getLength(), p = p.insertDocumentAtRange(c, h))) : p = this.insertDocumentAtRange(c, n), p;
        }, c.prototype.insertTextAtRange = function (t, e) {
          var n, o, r, s, a;
          return a = (e = i(e))[0], s = this.locationFromPosition(a), o = s.index, r = s.offset, n = this.removeTextAtRange(e), new this.constructor(n.blockList.editObjectAtIndex(o, function (e) {
            return e.copyWithText(e.text.insertTextAtPosition(t, r));
          }));
        }, c.prototype.removeTextAtRange = function (t) {
          var e, n, r, s, a, u, c, l, h, p, d, f, g, m, v, y, b, A, C, x, w;
          return p = t = i(t), l = p[0], A = p[1], o(t) ? this : (d = this.locationRangeFromRange(t), u = d[0], y = d[1], a = u.index, c = u.offset, s = this.getBlockAtIndex(a), v = y.index, b = y.offset, m = this.getBlockAtIndex(v), f = A - l === 1 && s.getBlockBreakPosition() === c && m.getBlockBreakPosition() !== b && "\n" === m.text.getStringAtPosition(b), f ? r = this.blockList.editObjectAtIndex(v, function (t) {
            return t.copyWithText(t.text.removeTextAtRange([b, b + 1]));
          }) : (h = s.text.getTextAtRange([0, c]), C = m.text.getTextAtRange([b, m.getLength()]), x = h.appendText(C), g = a !== v && 0 === c, w = g && s.getAttributeLevel() >= m.getAttributeLevel(), n = w ? m.copyWithText(x) : s.copyWithText(x), e = v + 1 - a, r = this.blockList.splice(a, e, n)), new this.constructor(r));
        }, c.prototype.moveTextFromRangeToPosition = function (t, e) {
          var n, o, r, s, u, c, l, h, p, d;
          return c = t = i(t), p = c[0], r = c[1], e >= p && r >= e ? this : (o = this.getDocumentAtRange(t), h = this.removeTextAtRange(t), u = e > p, u && (e -= o.getLength()), l = o.getBlocks(), s = l[0], n = 2 <= l.length ? a.call(l, 1) : [], 0 === n.length ? (d = s.getTextWithoutBlockBreak(), u && (e += 1)) : d = s.text, h = h.insertTextAtRange(d, e), 0 === n.length ? h : (o = new this.constructor(n), e += d.getLength(), h.insertDocumentAtRange(o, e)));
        }, c.prototype.addAttributeAtRange = function (t, e, i) {
          var o;
          return o = this.blockList, this.eachBlockAtRange(i, function (i, r, s) {
            return o = o.editObjectAtIndex(s, function () {
              return n(t) ? i.addAttribute(t, e) : r[0] === r[1] ? i : i.copyWithText(i.text.addAttributeAtRange(t, e, r));
            });
          }), new this.constructor(o);
        }, c.prototype.addAttribute = function (t, e) {
          var n;
          return n = this.blockList, this.eachBlock(function (i, o) {
            return n = n.editObjectAtIndex(o, function () {
              return i.addAttribute(t, e);
            });
          }), new this.constructor(n);
        }, c.prototype.removeAttributeAtRange = function (t, e) {
          var i;
          return i = this.blockList, this.eachBlockAtRange(e, function (e, o, r) {
            return n(t) ? i = i.editObjectAtIndex(r, function () {
              return e.removeAttribute(t);
            }) : o[0] !== o[1] ? i = i.editObjectAtIndex(r, function () {
              return e.copyWithText(e.text.removeAttributeAtRange(t, o));
            }) : void 0;
          }), new this.constructor(i);
        }, c.prototype.updateAttributesForAttachment = function (t, e) {
          var n, i, o, r;
          return o = (i = this.getRangeOfAttachment(e))[0], n = this.locationFromPosition(o).index, r = this.getTextAtIndex(n), new this.constructor(this.blockList.editObjectAtIndex(n, function (n) {
            return n.copyWithText(r.updateAttributesForAttachment(t, e));
          }));
        }, c.prototype.removeAttributeForAttachment = function (t, e) {
          var n;
          return n = this.getRangeOfAttachment(e), this.removeAttributeAtRange(t, n);
        }, c.prototype.insertBlockBreakAtRange = function (t) {
          var n, o, r, s;
          return s = (t = i(t))[0], r = this.locationFromPosition(s).offset, o = this.removeTextAtRange(t), 0 === r && (n = [new e.Block()]), new this.constructor(o.blockList.insertSplittableListAtPosition(new e.SplittableList(n), s));
        }, c.prototype.applyBlockAttributeAtRange = function (t, e, i) {
          var o, r, s, a;
          return s = this.expandRangeToLineBreaksAndSplitBlocks(i), r = s.document, i = s.range, o = n(t), o.listAttribute ? (r = r.removeLastListAttributeAtRange(i, {
            exceptAttributeName: t
          }), a = r.convertLineBreaksToBlockBreaksInRange(i), r = a.document, i = a.range) : r = o.exclusive ? r.removeBlockAttributesAtRange(i) : o.terminal ? r.removeLastTerminalAttributeAtRange(i) : r.consolidateBlocksAtRange(i), r.addAttributeAtRange(t, e, i);
        }, c.prototype.removeLastListAttributeAtRange = function (t, e) {
          var i;
          return null == e && (e = {}), i = this.blockList, this.eachBlockAtRange(t, function (t, o, r) {
            var s;
            if ((s = t.getLastAttribute()) && n(s).listAttribute && s !== e.exceptAttributeName) return i = i.editObjectAtIndex(r, function () {
              return t.removeAttribute(s);
            });
          }), new this.constructor(i);
        }, c.prototype.removeLastTerminalAttributeAtRange = function (t) {
          var e;
          return e = this.blockList, this.eachBlockAtRange(t, function (t, i, o) {
            var r;
            if ((r = t.getLastAttribute()) && n(r).terminal) return e = e.editObjectAtIndex(o, function () {
              return t.removeAttribute(r);
            });
          }), new this.constructor(e);
        }, c.prototype.removeBlockAttributesAtRange = function (t) {
          var e;
          return e = this.blockList, this.eachBlockAtRange(t, function (t, n, i) {
            return t.hasAttributes() ? e = e.editObjectAtIndex(i, function () {
              return t.copyWithoutAttributes();
            }) : void 0;
          }), new this.constructor(e);
        }, c.prototype.expandRangeToLineBreaksAndSplitBlocks = function (t) {
          var e, n, o, r, s, a, u, c, l;
          return a = t = i(t), l = a[0], r = a[1], c = this.locationFromPosition(l), o = this.locationFromPosition(r), e = this, u = e.getBlockAtIndex(c.index), null != (c.offset = u.findLineBreakInDirectionFromPosition("backward", c.offset)) && (s = e.positionFromLocation(c), e = e.insertBlockBreakAtRange([s, s + 1]), o.index += 1, o.offset -= e.getBlockAtIndex(c.index).getLength(), c.index += 1), c.offset = 0, 0 === o.offset && o.index > c.index ? (o.index -= 1, o.offset = e.getBlockAtIndex(o.index).getBlockBreakPosition()) : (n = e.getBlockAtIndex(o.index), "\n" === n.text.getStringAtRange([o.offset - 1, o.offset]) ? o.offset -= 1 : o.offset = n.findLineBreakInDirectionFromPosition("forward", o.offset), o.offset !== n.getBlockBreakPosition() && (s = e.positionFromLocation(o), e = e.insertBlockBreakAtRange([s, s + 1]))), l = e.positionFromLocation(c), r = e.positionFromLocation(o), t = i([l, r]), {
            document: e,
            range: t
          };
        }, c.prototype.convertLineBreaksToBlockBreaksInRange = function (t) {
          var e, n, o;
          return n = (t = i(t))[0], o = this.getStringAtRange(t).slice(0, -1), e = this, o.replace(/.*?\n/g, function (t) {
            return n += t.length, e = e.insertBlockBreakAtRange([n - 1, n]);
          }), {
            document: e,
            range: t
          };
        }, c.prototype.consolidateBlocksAtRange = function (t) {
          var e, n, o, r, s;
          return o = t = i(t), s = o[0], n = o[1], r = this.locationFromPosition(s).index, e = this.locationFromPosition(n).index, new this.constructor(this.blockList.consolidateFromIndexToIndex(r, e));
        }, c.prototype.getDocumentAtRange = function (t) {
          var e;
          return t = i(t), e = this.blockList.getSplittableListInRange(t).toArray(), new this.constructor(e);
        }, c.prototype.getStringAtRange = function (t) {
          var e, n, o;
          return o = t = i(t), n = o[o.length - 1], n !== this.getLength() && (e = -1), this.getDocumentAtRange(t).toString().slice(0, e);
        }, c.prototype.getBlockAtIndex = function (t) {
          return this.blockList.getObjectAtIndex(t);
        }, c.prototype.getBlockAtPosition = function (t) {
          var e;
          return e = this.locationFromPosition(t).index, this.getBlockAtIndex(e);
        }, c.prototype.getTextAtIndex = function (t) {
          var e;
          return null != (e = this.getBlockAtIndex(t)) ? e.text : void 0;
        }, c.prototype.getTextAtPosition = function (t) {
          var e;
          return e = this.locationFromPosition(t).index, this.getTextAtIndex(e);
        }, c.prototype.getPieceAtPosition = function (t) {
          var e, n, i;
          return i = this.locationFromPosition(t), e = i.index, n = i.offset, this.getTextAtIndex(e).getPieceAtPosition(n);
        }, c.prototype.getCharacterAtPosition = function (t) {
          var e, n, i;
          return i = this.locationFromPosition(t), e = i.index, n = i.offset, this.getTextAtIndex(e).getStringAtRange([n, n + 1]);
        }, c.prototype.getLength = function () {
          return this.blockList.getEndPosition();
        }, c.prototype.getBlocks = function () {
          return this.blockList.toArray();
        }, c.prototype.getBlockCount = function () {
          return this.blockList.length;
        }, c.prototype.getEditCount = function () {
          return this.editCount;
        }, c.prototype.eachBlock = function (t) {
          return this.blockList.eachObject(t);
        }, c.prototype.eachBlockAtRange = function (t, e) {
          var n, o, r, s, a, u, c, l, h, p, d, f;
          if (u = t = i(t), d = u[0], r = u[1], p = this.locationFromPosition(d), o = this.locationFromPosition(r), p.index === o.index) return n = this.getBlockAtIndex(p.index), f = [p.offset, o.offset], e(n, f, p.index);

          for (h = [], a = s = c = p.index, l = o.index; l >= c ? l >= s : s >= l; a = l >= c ? ++s : --s) (n = this.getBlockAtIndex(a)) ? (f = function () {
            switch (a) {
              case p.index:
                return [p.offset, n.text.getLength()];

              case o.index:
                return [0, o.offset];

              default:
                return [0, n.text.getLength()];
            }
          }(), h.push(e(n, f, a))) : h.push(void 0);

          return h;
        }, c.prototype.getCommonAttributesAtRange = function (t) {
          var n, r, s;
          return r = (t = i(t))[0], o(t) ? this.getCommonAttributesAtPosition(r) : (s = [], n = [], this.eachBlockAtRange(t, function (t, e) {
            return e[0] !== e[1] ? (s.push(t.text.getCommonAttributesAtRange(e)), n.push(l(t))) : void 0;
          }), e.Hash.fromCommonAttributesOfObjects(s).merge(e.Hash.fromCommonAttributesOfObjects(n)).toObject());
        }, c.prototype.getCommonAttributesAtPosition = function (t) {
          var n, i, o, r, s, a, c, h, p, d;
          if (p = this.locationFromPosition(t), s = p.index, h = p.offset, o = this.getBlockAtIndex(s), !o) return {};
          r = l(o), n = o.text.getAttributesAtPosition(h), i = o.text.getAttributesAtPosition(h - 1), a = function () {
            var t, n;
            t = e.config.textAttributes, n = [];

            for (c in t) d = t[c], d.inheritable && n.push(c);

            return n;
          }();

          for (c in i) d = i[c], (d === n[c] || u.call(a, c) >= 0) && (r[c] = d);

          return r;
        }, c.prototype.getRangeOfCommonAttributeAtPosition = function (t, e) {
          var n, o, r, s, a, u, c, l, h;
          return a = this.locationFromPosition(e), r = a.index, s = a.offset, h = this.getTextAtIndex(r), u = h.getExpandedRangeForAttributeAtOffset(t, s), l = u[0], o = u[1], c = this.positionFromLocation({
            index: r,
            offset: l
          }), n = this.positionFromLocation({
            index: r,
            offset: o
          }), i([c, n]);
        }, c.prototype.getBaseBlockAttributes = function () {
          var t, e, n, i, o, r, s;

          for (t = this.getBlockAtIndex(0).getAttributes(), n = i = 1, s = this.getBlockCount(); s >= 1 ? s > i : i > s; n = s >= 1 ? ++i : --i) e = this.getBlockAtIndex(n).getAttributes(), r = Math.min(t.length, e.length), t = function () {
            var n, i, s;

            for (s = [], o = n = 0, i = r; (i >= 0 ? i > n : n > i) && e[o] === t[o]; o = i >= 0 ? ++n : --n) s.push(e[o]);

            return s;
          }();

          return t;
        }, l = function (t) {
          var e, n;
          return n = {}, (e = t.getLastAttribute()) && (n[e] = !0), n;
        }, c.prototype.getAttachmentById = function (t) {
          var e, n, i, o;

          for (o = this.getAttachments(), n = 0, i = o.length; i > n; n++) if (e = o[n], e.id === t) return e;
        }, c.prototype.getAttachmentPieces = function () {
          var t;
          return t = [], this.blockList.eachObject(function (e) {
            var n;
            return n = e.text, t = t.concat(n.getAttachmentPieces());
          }), t;
        }, c.prototype.getAttachments = function () {
          var t, e, n, i, o;

          for (i = this.getAttachmentPieces(), o = [], t = 0, e = i.length; e > t; t++) n = i[t], o.push(n.attachment);

          return o;
        }, c.prototype.getRangeOfAttachment = function (t) {
          var e, n, o, r, s, a, u;

          for (r = 0, s = this.blockList.toArray(), n = e = 0, o = s.length; o > e; n = ++e) {
            if (a = s[n].text, u = a.getRangeOfAttachment(t)) return i([r + u[0], r + u[1]]);
            r += a.getLength();
          }
        }, c.prototype.getLocationRangeOfAttachment = function (t) {
          var e;
          return e = this.getRangeOfAttachment(t), this.locationRangeFromRange(e);
        }, c.prototype.getAttachmentPieceForAttachment = function (t) {
          var e, n, i, o;

          for (o = this.getAttachmentPieces(), e = 0, n = o.length; n > e; e++) if (i = o[e], i.attachment === t) return i;
        }, c.prototype.findRangesForBlockAttribute = function (t) {
          var e, n, i, o, r, s, a;

          for (r = 0, s = [], a = this.getBlocks(), n = 0, i = a.length; i > n; n++) e = a[n], o = e.getLength(), e.hasAttribute(t) && s.push([r, r + o]), r += o;

          return s;
        }, c.prototype.findRangesForTextAttribute = function (t, e) {
          var n, i, o, r, s, a, u, c, l, h;

          for (h = (null != e ? e : {}).withValue, a = 0, u = [], c = [], r = function (e) {
            return null != h ? e.getAttribute(t) === h : e.hasAttribute(t);
          }, l = this.getPieces(), n = 0, i = l.length; i > n; n++) s = l[n], o = s.getLength(), r(s) && (u[1] === a ? u[1] = a + o : c.push(u = [a, a + o])), a += o;

          return c;
        }, c.prototype.locationFromPosition = function (t) {
          var e, n;
          return n = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t)), null != n.index ? n : (e = this.getBlocks(), {
            index: e.length - 1,
            offset: e[e.length - 1].getLength()
          });
        }, c.prototype.positionFromLocation = function (t) {
          return this.blockList.findPositionAtIndexAndOffset(t.index, t.offset);
        }, c.prototype.locationRangeFromPosition = function (t) {
          return i(this.locationFromPosition(t));
        }, c.prototype.locationRangeFromRange = function (t) {
          var e, n, o, r;
          if (t = i(t)) return r = t[0], n = t[1], o = this.locationFromPosition(r), e = this.locationFromPosition(n), i([o, e]);
        }, c.prototype.rangeFromLocationRange = function (t) {
          var e, n;
          return t = i(t), e = this.positionFromLocation(t[0]), o(t) || (n = this.positionFromLocation(t[1])), i([e, n]);
        }, c.prototype.isEqualTo = function (t) {
          return this.blockList.isEqualTo(null != t ? t.blockList : void 0);
        }, c.prototype.getTexts = function () {
          var t, e, n, i, o;

          for (i = this.getBlocks(), o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.text);

          return o;
        }, c.prototype.getPieces = function () {
          var t, e, n, i, o;

          for (n = [], i = this.getTexts(), t = 0, e = i.length; e > t; t++) o = i[t], n.push.apply(n, o.getPieces());

          return n;
        }, c.prototype.getObjects = function () {
          return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
        }, c.prototype.toSerializableDocument = function () {
          var t;
          return t = [], this.blockList.eachObject(function (e) {
            return t.push(e.copyWithText(e.text.toSerializableText()));
          }), new this.constructor(t);
        }, c.prototype.toString = function () {
          return this.blockList.toString();
        }, c.prototype.toJSON = function () {
          return this.blockList.toJSON();
        }, c.prototype.toConsole = function () {
          var t;
          return JSON.stringify(function () {
            var e, n, i, o;

            for (i = this.blockList.toArray(), o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(JSON.parse(t.text.toConsole()));

            return o;
          }.call(this));
        }, c;
      }(e.Object);
    }.call(this), function () {
      e.LineBreakInsertion = function () {
        function t(t) {
          var e;
          this.composition = t, this.document = this.composition.document, e = this.composition.getSelectedRange(), this.startPosition = e[0], this.endPosition = e[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
        }

        return t.prototype.shouldInsertBlockBreak = function () {
          return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
        }, t.prototype.shouldBreakFormattedBlock = function () {
          return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
        }, t.prototype.shouldDecreaseListLevel = function () {
          return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
        }, t.prototype.shouldPrependListItem = function () {
          return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
        }, t.prototype.shouldRemoveLastBlockAttribute = function () {
          return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
        }, t;
      }();
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) p.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          p = {}.hasOwnProperty;

      s = e.normalizeRange, c = e.rangesAreEqual, u = e.rangeIsCollapsed, a = e.objectsAreEqual, t = e.arrayStartsWith, l = e.summarizeArrayChange, i = e.getAllAttributeNames, o = e.getBlockConfig, r = e.getTextConfig, n = e.extend, e.Composition = function (p) {
        function d() {
          this.document = new e.Document(), this.attachments = [], this.currentAttributes = {}, this.revision = 0;
        }

        var f;
        return h(d, p), d.prototype.setDocument = function (t) {
          var e;
          return t.isEqualTo(this.document) ? void 0 : (this.document = t, this.refreshAttachments(), this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidChangeDocument ? e.compositionDidChangeDocument(t) : void 0);
        }, d.prototype.getSnapshot = function () {
          return {
            document: this.document,
            selectedRange: this.getSelectedRange()
          };
        }, d.prototype.loadSnapshot = function (t) {
          var n, i, o, r;
          return n = t.document, r = t.selectedRange, null != (i = this.delegate) && "function" == typeof i.compositionWillLoadSnapshot && i.compositionWillLoadSnapshot(), this.setDocument(null != n ? n : new e.Document()), this.setSelection(null != r ? r : [0, 0]), null != (o = this.delegate) && "function" == typeof o.compositionDidLoadSnapshot ? o.compositionDidLoadSnapshot() : void 0;
        }, d.prototype.insertText = function (t, e) {
          var n, i, o, r;
          return r = (null != e ? e : {
            updatePosition: !0
          }).updatePosition, i = this.getSelectedRange(), this.setDocument(this.document.insertTextAtRange(t, i)), o = i[0], n = o + t.getLength(), r && this.setSelection(n), this.notifyDelegateOfInsertionAtRange([o, n]);
        }, d.prototype.insertBlock = function (t) {
          var n;
          return null == t && (t = new e.Block()), n = new e.Document([t]), this.insertDocument(n);
        }, d.prototype.insertDocument = function (t) {
          var n, i, o;
          return null == t && (t = new e.Document()), i = this.getSelectedRange(), this.setDocument(this.document.insertDocumentAtRange(t, i)), o = i[0], n = o + t.getLength(), this.setSelection(n), this.notifyDelegateOfInsertionAtRange([o, n]);
        }, d.prototype.insertString = function (t, n) {
          var i, o;
          return i = this.getCurrentTextAttributes(), o = e.Text.textForStringWithAttributes(t, i), this.insertText(o, n);
        }, d.prototype.insertBlockBreak = function () {
          var t, e, n;
          return e = this.getSelectedRange(), this.setDocument(this.document.insertBlockBreakAtRange(e)), n = e[0], t = n + 1, this.setSelection(t), this.notifyDelegateOfInsertionAtRange([n, t]);
        }, d.prototype.insertLineBreak = function () {
          var t, n;
          return n = new e.LineBreakInsertion(this), n.shouldDecreaseListLevel() ? (this.decreaseListLevel(), this.setSelection(n.startPosition)) : n.shouldPrependListItem() ? (t = new e.Document([n.block.copyWithoutText()]), this.insertDocument(t)) : n.shouldInsertBlockBreak() ? this.insertBlockBreak() : n.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : n.shouldBreakFormattedBlock() ? this.breakFormattedBlock(n) : this.insertString("\n");
        }, d.prototype.insertHTML = function (t) {
          var n, i, o, r;
          return n = e.Document.fromHTML(t), o = this.getSelectedRange(), this.setDocument(this.document.mergeDocumentAtRange(n, o)), r = o[0], i = r + n.getLength() - 1, this.setSelection(i), this.notifyDelegateOfInsertionAtRange([r, i]);
        }, d.prototype.replaceHTML = function (t) {
          var n, i, o;
          return n = e.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document), i = this.getLocationRange({
            strict: !1
          }), o = this.document.rangeFromLocationRange(i), this.setDocument(n), this.setSelection(o);
        }, d.prototype.insertFile = function (t) {
          return this.insertFiles([t]);
        }, d.prototype.insertFiles = function (t) {
          var n, i, o, r, s, a;

          for (i = [], r = 0, s = t.length; s > r; r++) o = t[r], (null != (a = this.delegate) ? a.compositionShouldAcceptFile(o) : void 0) && (n = e.Attachment.attachmentForFile(o), i.push(n));

          return this.insertAttachments(i);
        }, d.prototype.insertAttachment = function (t) {
          return this.insertAttachments([t]);
        }, d.prototype.insertAttachments = function (t) {
          var n, i, o, r, s, a, u, c, l;

          for (c = new e.Text(), r = 0, s = t.length; s > r; r++) n = t[r], l = n.getType(), a = null != (u = e.config.attachments[l]) ? u.presentation : void 0, o = this.getCurrentTextAttributes(), a && (o.presentation = a), i = e.Text.textForAttachmentWithAttributes(n, o), c = c.appendText(i);

          return this.insertText(c);
        }, d.prototype.shouldManageDeletingInDirection = function (t) {
          var e;

          if (e = this.getLocationRange(), u(e)) {
            if ("backward" === t && 0 === e[0].offset) return !0;
            if (this.shouldManageMovingCursorInDirection(t)) return !0;
          } else if (e[0].index !== e[1].index) return !0;

          return !1;
        }, d.prototype.deleteInDirection = function (t, e) {
          var n, i, o, r, s, a, c, l;
          return r = (null != e ? e : {}).length, s = this.getLocationRange(), a = this.getSelectedRange(), c = u(a), c ? o = "backward" === t && 0 === s[0].offset : l = s[0].index !== s[1].index, o && this.canDecreaseBlockAttributeLevel() && (i = this.getBlock(), i.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(a[0]), i.isEmpty()) ? !1 : (c && (a = this.getExpandedRangeInDirection(t, {
            length: r
          }), "backward" === t && (n = this.getAttachmentAtRange(a))), n ? (this.editAttachment(n), !1) : (this.setDocument(this.document.removeTextAtRange(a)), this.setSelection(a[0]), o || l ? !1 : void 0));
        }, d.prototype.moveTextFromRange = function (t) {
          var e;
          return e = this.getSelectedRange()[0], this.setDocument(this.document.moveTextFromRangeToPosition(t, e)), this.setSelection(e);
        }, d.prototype.removeAttachment = function (t) {
          var e;
          return (e = this.document.getRangeOfAttachment(t)) ? (this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e)), this.setSelection(e[0])) : void 0;
        }, d.prototype.removeLastBlockAttribute = function () {
          var t, e, n, i;
          return n = this.getSelectedRange(), i = n[0], e = n[1], t = this.document.getBlockAtPosition(e), this.removeCurrentAttribute(t.getLastAttribute()), this.setSelection(i);
        }, f = " ", d.prototype.insertPlaceholder = function () {
          return this.placeholderPosition = this.getPosition(), this.insertString(f);
        }, d.prototype.selectPlaceholder = function () {
          return null != this.placeholderPosition ? (this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + f.length]), this.getSelectedRange()) : void 0;
        }, d.prototype.forgetPlaceholder = function () {
          return this.placeholderPosition = null;
        }, d.prototype.hasCurrentAttribute = function (t) {
          var e;
          return e = this.currentAttributes[t], null != e && e !== !1;
        }, d.prototype.toggleCurrentAttribute = function (t) {
          var e;
          return (e = !this.currentAttributes[t]) ? this.setCurrentAttribute(t, e) : this.removeCurrentAttribute(t);
        }, d.prototype.canSetCurrentAttribute = function (t) {
          return o(t) ? this.canSetCurrentBlockAttribute(t) : this.canSetCurrentTextAttribute(t);
        }, d.prototype.canSetCurrentTextAttribute = function () {
          var t, e, n, i, o;

          if (e = this.getSelectedDocument()) {
            for (o = e.getAttachments(), n = 0, i = o.length; i > n; n++) if (t = o[n], !t.hasContent()) return !1;

            return !0;
          }
        }, d.prototype.canSetCurrentBlockAttribute = function () {
          var t;
          if (t = this.getBlock()) return !t.isTerminalBlock();
        }, d.prototype.setCurrentAttribute = function (t, e) {
          return o(t) ? this.setBlockAttribute(t, e) : (this.setTextAttribute(t, e), this.currentAttributes[t] = e, this.notifyDelegateOfCurrentAttributesChange());
        }, d.prototype.setTextAttribute = function (t, n) {
          var i, o, r, s;
          if (o = this.getSelectedRange()) return r = o[0], i = o[1], r !== i ? this.setDocument(this.document.addAttributeAtRange(t, n, o)) : "href" === t ? (s = e.Text.textForStringWithAttributes(n, {
            href: n
          }), this.insertText(s)) : void 0;
        }, d.prototype.setBlockAttribute = function (t, e) {
          var n, i;
          if (i = this.getSelectedRange()) return this.canSetCurrentAttribute(t) ? (n = this.getBlock(), this.setDocument(this.document.applyBlockAttributeAtRange(t, e, i)), this.setSelection(i)) : void 0;
        }, d.prototype.removeCurrentAttribute = function (t) {
          return o(t) ? (this.removeBlockAttribute(t), this.updateCurrentAttributes()) : (this.removeTextAttribute(t), delete this.currentAttributes[t], this.notifyDelegateOfCurrentAttributesChange());
        }, d.prototype.removeTextAttribute = function (t) {
          var e;
          if (e = this.getSelectedRange()) return this.setDocument(this.document.removeAttributeAtRange(t, e));
        }, d.prototype.removeBlockAttribute = function (t) {
          var e;
          if (e = this.getSelectedRange()) return this.setDocument(this.document.removeAttributeAtRange(t, e));
        }, d.prototype.canDecreaseNestingLevel = function () {
          var t;
          return (null != (t = this.getBlock()) ? t.getNestingLevel() : void 0) > 0;
        }, d.prototype.canIncreaseNestingLevel = function () {
          var e, n, i;
          if (e = this.getBlock()) return (null != (i = o(e.getLastNestableAttribute())) ? i.listAttribute : 0) ? (n = this.getPreviousBlock()) ? t(n.getListItemAttributes(), e.getListItemAttributes()) : void 0 : e.getNestingLevel() > 0;
        }, d.prototype.decreaseNestingLevel = function () {
          var t;
          if (t = this.getBlock()) return this.setDocument(this.document.replaceBlock(t, t.decreaseNestingLevel()));
        }, d.prototype.increaseNestingLevel = function () {
          var t;
          if (t = this.getBlock()) return this.setDocument(this.document.replaceBlock(t, t.increaseNestingLevel()));
        }, d.prototype.canDecreaseBlockAttributeLevel = function () {
          var t;
          return (null != (t = this.getBlock()) ? t.getAttributeLevel() : void 0) > 0;
        }, d.prototype.decreaseBlockAttributeLevel = function () {
          var t, e;
          return (t = null != (e = this.getBlock()) ? e.getLastAttribute() : void 0) ? this.removeCurrentAttribute(t) : void 0;
        }, d.prototype.decreaseListLevel = function () {
          var t, e, n, i, o, r;

          for (r = this.getSelectedRange()[0], o = this.document.locationFromPosition(r).index, n = o, t = this.getBlock().getAttributeLevel(); (e = this.document.getBlockAtIndex(n + 1)) && e.isListItem() && e.getAttributeLevel() > t;) n++;

          return r = this.document.positionFromLocation({
            index: o,
            offset: 0
          }), i = this.document.positionFromLocation({
            index: n,
            offset: 0
          }), this.setDocument(this.document.removeLastListAttributeAtRange([r, i]));
        }, d.prototype.updateCurrentAttributes = function () {
          var t, e, n, o, r, s;

          if (s = this.getSelectedRange({
            ignoreLock: !0
          })) {
            for (e = this.document.getCommonAttributesAtRange(s), r = i(), n = 0, o = r.length; o > n; n++) t = r[n], e[t] || this.canSetCurrentAttribute(t) || (e[t] = !1);

            if (!a(e, this.currentAttributes)) return this.currentAttributes = e, this.notifyDelegateOfCurrentAttributesChange();
          }
        }, d.prototype.getCurrentAttributes = function () {
          return n.call({}, this.currentAttributes);
        }, d.prototype.getCurrentTextAttributes = function () {
          var t, e, n, i;
          t = {}, n = this.currentAttributes;

          for (e in n) i = n[e], i !== !1 && r(e) && (t[e] = i);

          return t;
        }, d.prototype.freezeSelection = function () {
          return this.setCurrentAttribute("frozen", !0);
        }, d.prototype.thawSelection = function () {
          return this.removeCurrentAttribute("frozen");
        }, d.prototype.hasFrozenSelection = function () {
          return this.hasCurrentAttribute("frozen");
        }, d.proxyMethod("getSelectionManager().getPointRange"), d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), d.proxyMethod("getSelectionManager().locationIsCursorTarget"), d.proxyMethod("getSelectionManager().selectionIsExpanded"), d.proxyMethod("delegate?.getSelectionManager"), d.prototype.setSelection = function (t) {
          var e, n;
          return e = this.document.locationRangeFromRange(t), null != (n = this.delegate) ? n.compositionDidRequestChangingSelectionToLocationRange(e) : void 0;
        }, d.prototype.getSelectedRange = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.rangeFromLocationRange(t) : void 0;
        }, d.prototype.setSelectedRange = function (t) {
          var e;
          return e = this.document.locationRangeFromRange(t), this.getSelectionManager().setLocationRange(e);
        }, d.prototype.getPosition = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.positionFromLocation(t[0]) : void 0;
        }, d.prototype.getLocationRange = function (t) {
          var e, n;
          return null != (e = null != (n = this.targetLocationRange) ? n : this.getSelectionManager().getLocationRange(t)) ? e : s({
            index: 0,
            offset: 0
          });
        }, d.prototype.withTargetLocationRange = function (t, e) {
          var n;
          this.targetLocationRange = t;

          try {
            n = e();
          } finally {
            this.targetLocationRange = null;
          }

          return n;
        }, d.prototype.withTargetRange = function (t, e) {
          var n;
          return n = this.document.locationRangeFromRange(t), this.withTargetLocationRange(n, e);
        }, d.prototype.withTargetDOMRange = function (t, e) {
          var n;
          return n = this.createLocationRangeFromDOMRange(t, {
            strict: !1
          }), this.withTargetLocationRange(n, e);
        }, d.prototype.getExpandedRangeInDirection = function (t, e) {
          var n, i, o, r;
          return i = (null != e ? e : {}).length, o = this.getSelectedRange(), r = o[0], n = o[1], "backward" === t ? i ? r -= i : r = this.translateUTF16PositionFromOffset(r, -1) : i ? n += i : n = this.translateUTF16PositionFromOffset(n, 1), s([r, n]);
        }, d.prototype.shouldManageMovingCursorInDirection = function (t) {
          var e;
          return this.editingAttachment ? !0 : (e = this.getExpandedRangeInDirection(t), null != this.getAttachmentAtRange(e));
        }, d.prototype.moveCursorInDirection = function (t) {
          var e, n, i, o;
          return this.editingAttachment ? i = this.document.getRangeOfAttachment(this.editingAttachment) : (o = this.getSelectedRange(), i = this.getExpandedRangeInDirection(t), n = !c(o, i)), this.setSelectedRange("backward" === t ? i[0] : i[1]), n && (e = this.getAttachmentAtRange(i)) ? this.editAttachment(e) : void 0;
        }, d.prototype.expandSelectionInDirection = function (t, e) {
          var n, i;
          return n = (null != e ? e : {}).length, i = this.getExpandedRangeInDirection(t, {
            length: n
          }), this.setSelectedRange(i);
        }, d.prototype.expandSelectionForEditing = function () {
          return this.hasCurrentAttribute("href") ? this.expandSelectionAroundCommonAttribute("href") : void 0;
        }, d.prototype.expandSelectionAroundCommonAttribute = function (t) {
          var e, n;
          return e = this.getPosition(), n = this.document.getRangeOfCommonAttributeAtPosition(t, e), this.setSelectedRange(n);
        }, d.prototype.selectionContainsAttachments = function () {
          var t;
          return (null != (t = this.getSelectedAttachments()) ? t.length : void 0) > 0;
        }, d.prototype.selectionIsInCursorTarget = function () {
          return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
        }, d.prototype.positionIsCursorTarget = function (t) {
          var e;
          return (e = this.document.locationFromPosition(t)) ? this.locationIsCursorTarget(e) : void 0;
        }, d.prototype.positionIsBlockBreak = function (t) {
          var e;
          return null != (e = this.document.getPieceAtPosition(t)) ? e.isBlockBreak() : void 0;
        }, d.prototype.getSelectedDocument = function () {
          var t;
          return (t = this.getSelectedRange()) ? this.document.getDocumentAtRange(t) : void 0;
        }, d.prototype.getSelectedAttachments = function () {
          var t;
          return null != (t = this.getSelectedDocument()) ? t.getAttachments() : void 0;
        }, d.prototype.getAttachments = function () {
          return this.attachments.slice(0);
        }, d.prototype.refreshAttachments = function () {
          var t, e, n, i, o, r, s, a, u, c, h, p;

          for (n = this.document.getAttachments(), a = l(this.attachments, n), t = a.added, h = a.removed, this.attachments = n, i = 0, r = h.length; r > i; i++) e = h[i], e.delegate = null, null != (u = this.delegate) && "function" == typeof u.compositionDidRemoveAttachment && u.compositionDidRemoveAttachment(e);

          for (p = [], o = 0, s = t.length; s > o; o++) e = t[o], e.delegate = this, p.push(null != (c = this.delegate) && "function" == typeof c.compositionDidAddAttachment ? c.compositionDidAddAttachment(e) : void 0);

          return p;
        }, d.prototype.attachmentDidChangeAttributes = function (t) {
          var e;
          return this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidEditAttachment ? e.compositionDidEditAttachment(t) : void 0;
        }, d.prototype.attachmentDidChangePreviewURL = function (t) {
          var e;
          return this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidChangeAttachmentPreviewURL ? e.compositionDidChangeAttachmentPreviewURL(t) : void 0;
        }, d.prototype.editAttachment = function (t, e) {
          var n;
          if (t !== this.editingAttachment) return this.stopEditingAttachment(), this.editingAttachment = t, null != (n = this.delegate) && "function" == typeof n.compositionDidStartEditingAttachment ? n.compositionDidStartEditingAttachment(this.editingAttachment, e) : void 0;
        }, d.prototype.stopEditingAttachment = function () {
          var t;
          if (this.editingAttachment) return null != (t = this.delegate) && "function" == typeof t.compositionDidStopEditingAttachment && t.compositionDidStopEditingAttachment(this.editingAttachment), this.editingAttachment = null;
        }, d.prototype.updateAttributesForAttachment = function (t, e) {
          return this.setDocument(this.document.updateAttributesForAttachment(t, e));
        }, d.prototype.removeAttributeForAttachment = function (t, e) {
          return this.setDocument(this.document.removeAttributeForAttachment(t, e));
        }, d.prototype.breakFormattedBlock = function (t) {
          var n, i, o, r, s;
          return i = t.document, n = t.block, r = t.startPosition, s = [r - 1, r], n.getBlockBreakPosition() === t.startLocation.offset ? (n.breaksOnReturn() && "\n" === t.nextCharacter ? r += 1 : i = i.removeTextAtRange(s), s = [r, r]) : "\n" === t.nextCharacter ? "\n" === t.previousCharacter ? s = [r - 1, r + 1] : (s = [r, r + 1], r += 1) : t.startLocation.offset - 1 !== 0 && (r += 1), o = new e.Document([n.removeLastAttribute().copyWithoutText()]), this.setDocument(i.insertDocumentAtRange(o, s)), this.setSelection(r);
        }, d.prototype.getPreviousBlock = function () {
          var t, e;
          return (e = this.getLocationRange()) && (t = e[0].index, t > 0) ? this.document.getBlockAtIndex(t - 1) : void 0;
        }, d.prototype.getBlock = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.getBlockAtIndex(t[0].index) : void 0;
        }, d.prototype.getAttachmentAtRange = function (t) {
          var n;
          return n = this.document.getDocumentAtRange(t), n.toString() === e.OBJECT_REPLACEMENT_CHARACTER + "\n" ? n.getAttachments()[0] : void 0;
        }, d.prototype.notifyDelegateOfCurrentAttributesChange = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.compositionDidChangeCurrentAttributes ? t.compositionDidChangeCurrentAttributes(this.currentAttributes) : void 0;
        }, d.prototype.notifyDelegateOfInsertionAtRange = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionDidPerformInsertionAtRange ? e.compositionDidPerformInsertionAtRange(t) : void 0;
        }, d.prototype.translateUTF16PositionFromOffset = function (t, e) {
          var n, i;
          return i = this.document.toUTF16String(), n = i.offsetFromUCS2Offset(t), i.offsetToUCS2Offset(n + e);
        }, d;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.UndoManager = function (e) {
        function n(t) {
          this.composition = t, this.undoEntries = [], this.redoEntries = [];
        }

        var i;
        return t(n, e), n.prototype.recordUndoEntry = function (t, e) {
          var n, o, r, s, a;
          return s = null != e ? e : {}, o = s.context, n = s.consolidatable, r = this.undoEntries.slice(-1)[0], n && i(r, t, o) ? void 0 : (a = this.createEntry({
            description: t,
            context: o
          }), this.undoEntries.push(a), this.redoEntries = []);
        }, n.prototype.undo = function () {
          var t, e;
          return (e = this.undoEntries.pop()) ? (t = this.createEntry(e), this.redoEntries.push(t), this.composition.loadSnapshot(e.snapshot)) : void 0;
        }, n.prototype.redo = function () {
          var t, e;
          return (t = this.redoEntries.pop()) ? (e = this.createEntry(t), this.undoEntries.push(e), this.composition.loadSnapshot(t.snapshot)) : void 0;
        }, n.prototype.canUndo = function () {
          return this.undoEntries.length > 0;
        }, n.prototype.canRedo = function () {
          return this.redoEntries.length > 0;
        }, n.prototype.createEntry = function (t) {
          var e, n, i;
          return i = null != t ? t : {}, n = i.description, e = i.context, {
            description: null != n ? n.toString() : void 0,
            context: JSON.stringify(e),
            snapshot: this.composition.getSnapshot()
          };
        }, i = function (t, e, n) {
          return (null != t ? t.description : void 0) === (null != e ? e.toString() : void 0) && (null != t ? t.context : void 0) === JSON.stringify(n);
        }, n;
      }(e.BasicObject);
    }.call(this), function () {
      var t;
      e.attachmentGalleryFilter = function (e) {
        var n;
        return n = new t(e), n.perform(), n.getSnapshot();
      }, t = function () {
        function t(t) {
          this.document = t.document, this.selectedRange = t.selectedRange;
        }

        var e, n, i;
        return e = "attachmentGallery", n = "presentation", i = "gallery", t.prototype.perform = function () {
          return this.removeBlockAttribute(), this.applyBlockAttribute();
        }, t.prototype.getSnapshot = function () {
          return {
            document: this.document,
            selectedRange: this.selectedRange
          };
        }, t.prototype.removeBlockAttribute = function () {
          var t, n, i, o, r;

          for (o = this.findRangesOfBlocks(), r = [], t = 0, n = o.length; n > t; t++) i = o[t], r.push(this.document = this.document.removeAttributeAtRange(e, i));

          return r;
        }, t.prototype.applyBlockAttribute = function () {
          var t, n, i, o, r, s;

          for (i = 0, r = this.findRangesOfPieces(), s = [], t = 0, n = r.length; n > t; t++) o = r[t], o[1] - o[0] > 1 && (o[0] += i, o[1] += i, "\n" !== this.document.getCharacterAtPosition(o[1]) && (this.document = this.document.insertBlockBreakAtRange(o[1]), o[1] < this.selectedRange[1] && this.moveSelectedRangeForward(), o[1]++, i++), 0 !== o[0] && "\n" !== this.document.getCharacterAtPosition(o[0] - 1) && (this.document = this.document.insertBlockBreakAtRange(o[0]), o[0] < this.selectedRange[0] && this.moveSelectedRangeForward(), o[0]++, i++), s.push(this.document = this.document.applyBlockAttributeAtRange(e, !0, o)));

          return s;
        }, t.prototype.findRangesOfBlocks = function () {
          return this.document.findRangesForBlockAttribute(e);
        }, t.prototype.findRangesOfPieces = function () {
          return this.document.findRangesForTextAttribute(n, {
            withValue: i
          });
        }, t.prototype.moveSelectedRangeForward = function () {
          return this.selectedRange[0] += 1, this.selectedRange[1] += 1;
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.Editor = function () {
        function n(n, o, r) {
          this.composition = n, this.selectionManager = o, this.element = r, this.insertFiles = t(this.insertFiles, this), this.undoManager = new e.UndoManager(this.composition), this.filters = i.slice(0);
        }

        var i;
        return i = [e.attachmentGalleryFilter], n.prototype.loadDocument = function (t) {
          return this.loadSnapshot({
            document: t,
            selectedRange: [0, 0]
          });
        }, n.prototype.loadHTML = function (t) {
          return null == t && (t = ""), this.loadDocument(e.Document.fromHTML(t, {
            referenceElement: this.element
          }));
        }, n.prototype.loadJSON = function (t) {
          var n, i;
          return n = t.document, i = t.selectedRange, n = e.Document.fromJSON(n), this.loadSnapshot({
            document: n,
            selectedRange: i
          });
        }, n.prototype.loadSnapshot = function (t) {
          return this.undoManager = new e.UndoManager(this.composition), this.composition.loadSnapshot(t);
        }, n.prototype.getDocument = function () {
          return this.composition.document;
        }, n.prototype.getSelectedDocument = function () {
          return this.composition.getSelectedDocument();
        }, n.prototype.getSnapshot = function () {
          return this.composition.getSnapshot();
        }, n.prototype.toJSON = function () {
          return this.getSnapshot();
        }, n.prototype.deleteInDirection = function (t) {
          return this.composition.deleteInDirection(t);
        }, n.prototype.insertAttachment = function (t) {
          return this.composition.insertAttachment(t);
        }, n.prototype.insertAttachments = function (t) {
          return this.composition.insertAttachments(t);
        }, n.prototype.insertDocument = function (t) {
          return this.composition.insertDocument(t);
        }, n.prototype.insertFile = function (t) {
          return this.composition.insertFile(t);
        }, n.prototype.insertFiles = function (t) {
          return this.composition.insertFiles(t);
        }, n.prototype.insertHTML = function (t) {
          return this.composition.insertHTML(t);
        }, n.prototype.insertString = function (t) {
          return this.composition.insertString(t);
        }, n.prototype.insertText = function (t) {
          return this.composition.insertText(t);
        }, n.prototype.insertLineBreak = function () {
          return this.composition.insertLineBreak();
        }, n.prototype.getSelectedRange = function () {
          return this.composition.getSelectedRange();
        }, n.prototype.getPosition = function () {
          return this.composition.getPosition();
        }, n.prototype.getClientRectAtPosition = function (t) {
          var e;
          return e = this.getDocument().locationRangeFromRange([t, t + 1]), this.selectionManager.getClientRectAtLocationRange(e);
        }, n.prototype.expandSelectionInDirection = function (t) {
          return this.composition.expandSelectionInDirection(t);
        }, n.prototype.moveCursorInDirection = function (t) {
          return this.composition.moveCursorInDirection(t);
        }, n.prototype.setSelectedRange = function (t) {
          return this.composition.setSelectedRange(t);
        }, n.prototype.activateAttribute = function (t, e) {
          return null == e && (e = !0), this.composition.setCurrentAttribute(t, e);
        }, n.prototype.attributeIsActive = function (t) {
          return this.composition.hasCurrentAttribute(t);
        }, n.prototype.canActivateAttribute = function (t) {
          return this.composition.canSetCurrentAttribute(t);
        }, n.prototype.deactivateAttribute = function (t) {
          return this.composition.removeCurrentAttribute(t);
        }, n.prototype.canDecreaseNestingLevel = function () {
          return this.composition.canDecreaseNestingLevel();
        }, n.prototype.canIncreaseNestingLevel = function () {
          return this.composition.canIncreaseNestingLevel();
        }, n.prototype.decreaseNestingLevel = function () {
          return this.canDecreaseNestingLevel() ? this.composition.decreaseNestingLevel() : void 0;
        }, n.prototype.increaseNestingLevel = function () {
          return this.canIncreaseNestingLevel() ? this.composition.increaseNestingLevel() : void 0;
        }, n.prototype.canRedo = function () {
          return this.undoManager.canRedo();
        }, n.prototype.canUndo = function () {
          return this.undoManager.canUndo();
        }, n.prototype.recordUndoEntry = function (t, e) {
          var n, i, o;
          return o = null != e ? e : {}, i = o.context, n = o.consolidatable, this.undoManager.recordUndoEntry(t, {
            context: i,
            consolidatable: n
          });
        }, n.prototype.redo = function () {
          return this.canRedo() ? this.undoManager.redo() : void 0;
        }, n.prototype.undo = function () {
          return this.canUndo() ? this.undoManager.undo() : void 0;
        }, n;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.ManagedAttachment = function (e) {
        function n(t, e) {
          var n;
          this.attachmentManager = t, this.attachment = e, n = this.attachment, this.id = n.id, this.file = n.file;
        }

        return t(n, e), n.prototype.remove = function () {
          return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
        }, n.proxyMethod("attachment.getAttribute"), n.proxyMethod("attachment.hasAttribute"), n.proxyMethod("attachment.setAttribute"), n.proxyMethod("attachment.getAttributes"), n.proxyMethod("attachment.setAttributes"), n.proxyMethod("attachment.isPending"), n.proxyMethod("attachment.isPreviewable"), n.proxyMethod("attachment.getURL"), n.proxyMethod("attachment.getHref"), n.proxyMethod("attachment.getFilename"), n.proxyMethod("attachment.getFilesize"), n.proxyMethod("attachment.getFormattedFilesize"), n.proxyMethod("attachment.getExtension"), n.proxyMethod("attachment.getContentType"), n.proxyMethod("attachment.getFile"), n.proxyMethod("attachment.setFile"), n.proxyMethod("attachment.releaseFile"), n.proxyMethod("attachment.getUploadProgress"), n.proxyMethod("attachment.setUploadProgress"), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function (t, e) {
        function i() {
          this.constructor = t;
        }

        for (var o in e) n.call(e, o) && (t[o] = e[o]);

        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, t;
      },
          n = {}.hasOwnProperty;

      e.AttachmentManager = function (n) {
        function i(t) {
          var e, n, i;

          for (null == t && (t = []), this.managedAttachments = {}, n = 0, i = t.length; i > n; n++) e = t[n], this.manageAttachment(e);
        }

        return t(i, n), i.prototype.getAttachments = function () {
          var t, e, n, i;
          n = this.managedAttachments, i = [];

          for (e in n) t = n[e], i.push(t);

          return i;
        }, i.prototype.manageAttachment = function (t) {
          var n, i;
          return null != (n = this.managedAttachments)[i = t.id] ? n[i] : n[i] = new e.ManagedAttachment(this, t);
        }, i.prototype.attachmentIsManaged = function (t) {
          return t.id in this.managedAttachments;
        }, i.prototype.requestRemovalOfAttachment = function (t) {
          var e;
          return this.attachmentIsManaged(t) && null != (e = this.delegate) && "function" == typeof e.attachmentManagerDidRequestRemovalOfAttachment ? e.attachmentManagerDidRequestRemovalOfAttachment(t) : void 0;
        }, i.prototype.unmanageAttachment = function (t) {
          var e;
          return e = this.managedAttachments[t.id], delete this.managedAttachments[t.id], e;
        }, i;
      }(e.BasicObject);
    }.call(this), function () {
      var t, n, i, o, r, s, a, u, c, l, h;
      t = e.elementContainsNode, n = e.findChildIndexOfNode, r = e.nodeIsBlockStart, s = e.nodeIsBlockStartComment, o = e.nodeIsBlockContainer, a = e.nodeIsCursorTarget, u = e.nodeIsEmptyTextNode, c = e.nodeIsTextNode, i = e.nodeIsAttachmentElement, l = e.tagName, h = e.walkTree, e.LocationMapper = function () {
        function e(t) {
          this.element = t;
        }

        var p, d, f, g;
        return e.prototype.findLocationFromContainerAndOffset = function (e, i, o) {
          var s, u, l, p, g, m, v;

          for (m = (null != o ? o : {
            strict: !0
          }).strict, u = 0, l = !1, p = {
            index: 0,
            offset: 0
          }, (s = this.findAttachmentElementParentForNode(e)) && (e = s.parentNode, i = n(s)), v = h(this.element, {
            usingFilter: f
          }); v.nextNode();) {
            if (g = v.currentNode, g === e && c(e)) {
              a(g) || (p.offset += i);
              break;
            }

            if (g.parentNode === e) {
              if (u++ === i) break;
            } else if (!t(e, g) && u > 0) break;

            r(g, {
              strict: m
            }) ? (l && p.index++, p.offset = 0, l = !0) : p.offset += d(g);
          }

          return p;
        }, e.prototype.findContainerAndOffsetFromLocation = function (t) {
          var e, i, s, u, l;

          if (0 === t.index && 0 === t.offset) {
            for (e = this.element, u = 0; e.firstChild;) if (e = e.firstChild, o(e)) {
              u = 1;
              break;
            }

            return [e, u];
          }

          if (l = this.findNodeAndOffsetFromLocation(t), i = l[0], s = l[1], i) {
            if (c(i)) 0 === d(i) ? (e = i.parentNode.parentNode, u = n(i.parentNode), a(i, {
              name: "right"
            }) && u++) : (e = i, u = t.offset - s);else {
              if (e = i.parentNode, !r(i.previousSibling) && !o(e)) for (; i === e.lastChild && (i = e, e = e.parentNode, !o(e)););
              u = n(i), 0 !== t.offset && u++;
            }
            return [e, u];
          }
        }, e.prototype.findNodeAndOffsetFromLocation = function (t) {
          var e, n, i, o, r, s, u, l;

          for (u = 0, l = this.getSignificantNodesForIndex(t.index), n = 0, i = l.length; i > n; n++) {
            if (e = l[n], o = d(e), t.offset <= u + o) if (c(e)) {
              if (r = e, s = u, t.offset === s && a(r)) break;
            } else r || (r = e, s = u);
            if (u += o, u > t.offset) break;
          }

          return [r, s];
        }, e.prototype.findAttachmentElementParentForNode = function (t) {
          for (; t && t !== this.element;) {
            if (i(t)) return t;
            t = t.parentNode;
          }
        }, e.prototype.getSignificantNodesForIndex = function (t) {
          var e, n, i, o, r;

          for (i = [], r = h(this.element, {
            usingFilter: p
          }), o = !1; r.nextNode();) if (n = r.currentNode, s(n)) {
            if ("undefined" != typeof e && null !== e ? e++ : e = 0, e === t) o = !0;else if (o) break;
          } else o && i.push(n);

          return i;
        }, d = function (t) {
          var e;
          return t.nodeType === Node.TEXT_NODE ? a(t) ? 0 : (e = t.textContent, e.length) : "br" === l(t) || i(t) ? 1 : 0;
        }, p = function (t) {
          return g(t) === NodeFilter.FILTER_ACCEPT ? f(t) : NodeFilter.FILTER_REJECT;
        }, g = function (t) {
          return u(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, f = function (t) {
          return i(t.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, e;
      }();
    }.call(this), function () {
      var t,
          n,
          i = [].slice;
      t = e.getDOMRange, n = e.setDOMRange, e.PointMapper = function () {
        function e() {}

        return e.prototype.createDOMRangeFromPoint = function (e) {
          var i, o, r, s, a, u, c, l;
          if (c = e.x, l = e.y, document.caretPositionFromPoint) return a = document.caretPositionFromPoint(c, l), r = a.offsetNode, o = a.offset, i = document.createRange(), i.setStart(r, o), i;
          if (document.caretRangeFromPoint) return document.caretRangeFromPoint(c, l);

          if (document.body.createTextRange) {
            s = t();

            try {
              u = document.body.createTextRange(), u.moveToPoint(c, l), u.select();
            } catch (h) {}

            return i = t(), n(s), i;
          }
        }, e.prototype.getClientRectsForDOMRange = function (t) {
          var e, n, o;
          return n = i.call(t.getClientRects()), o = n[0], e = n[n.length - 1], [o, e];
        }, e;
      }();
    }.call(this), function () {
      var t,
          n = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          i = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) o.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty,
          r = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      };

      t = e.getDOMRange, e.SelectionChangeObserver = function (e) {
        function o() {
          this.run = n(this.run, this), this.update = n(this.update, this), this.selectionManagers = [];
        }

        var s;
        return i(o, e), o.prototype.start = function () {
          return this.started ? void 0 : (this.started = !0, "onselectionchange" in document ? document.addEventListener("selectionchange", this.update, !0) : this.run());
        }, o.prototype.stop = function () {
          return this.started ? (this.started = !1, document.removeEventListener("selectionchange", this.update, !0)) : void 0;
        }, o.prototype.registerSelectionManager = function (t) {
          return r.call(this.selectionManagers, t) < 0 ? (this.selectionManagers.push(t), this.start()) : void 0;
        }, o.prototype.unregisterSelectionManager = function (t) {
          var e;
          return this.selectionManagers = function () {
            var n, i, o, r;

            for (o = this.selectionManagers, r = [], n = 0, i = o.length; i > n; n++) e = o[n], e !== t && r.push(e);

            return r;
          }.call(this), 0 === this.selectionManagers.length ? this.stop() : void 0;
        }, o.prototype.notifySelectionManagersOfSelectionChange = function () {
          var t, e, n, i, o;

          for (n = this.selectionManagers, i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(o.selectionDidChange());

          return i;
        }, o.prototype.update = function () {
          var e;
          return e = t(), s(e, this.domRange) ? void 0 : (this.domRange = e, this.notifySelectionManagersOfSelectionChange());
        }, o.prototype.reset = function () {
          return this.domRange = null, this.update();
        }, o.prototype.run = function () {
          return this.started ? (this.update(), requestAnimationFrame(this.run)) : void 0;
        }, s = function (t, e) {
          return (null != t ? t.startContainer : void 0) === (null != e ? e.startContainer : void 0) && (null != t ? t.startOffset : void 0) === (null != e ? e.startOffset : void 0) && (null != t ? t.endContainer : void 0) === (null != e ? e.endContainer : void 0) && (null != t ? t.endOffset : void 0) === (null != e ? e.endOffset : void 0);
        }, o;
      }(e.BasicObject), null == e.selectionChangeObserver && (e.selectionChangeObserver = new e.SelectionChangeObserver());
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          p = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) d.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          d = {}.hasOwnProperty;

      i = e.getDOMSelection, n = e.getDOMRange, l = e.setDOMRange, t = e.elementContainsNode, s = e.nodeIsCursorTarget, r = e.innerElementIsActive, o = e.handleEvent, a = e.normalizeRange, u = e.rangeIsCollapsed, c = e.rangesAreEqual, e.SelectionManager = function (d) {
        function f(t) {
          this.element = t, this.selectionDidChange = h(this.selectionDidChange, this), this.didMouseDown = h(this.didMouseDown, this), this.locationMapper = new e.LocationMapper(this.element), this.pointMapper = new e.PointMapper(), this.lockCount = 0, o("mousedown", {
            onElement: this.element,
            withCallback: this.didMouseDown
          });
        }

        return p(f, d), f.prototype.getLocationRange = function (t) {
          var e, i;
          return null == t && (t = {}), e = t.strict === !1 ? this.createLocationRangeFromDOMRange(n(), {
            strict: !1
          }) : t.ignoreLock ? this.currentLocationRange : null != (i = this.lockedLocationRange) ? i : this.currentLocationRange;
        }, f.prototype.setLocationRange = function (t) {
          var e;
          if (!this.lockedLocationRange) return t = a(t), (e = this.createDOMRangeFromLocationRange(t)) ? (l(e), this.updateCurrentLocationRange(t)) : void 0;
        }, f.prototype.setLocationRangeFromPointRange = function (t) {
          var e, n;
          return t = a(t), n = this.getLocationAtPoint(t[0]), e = this.getLocationAtPoint(t[1]), this.setLocationRange([n, e]);
        }, f.prototype.getClientRectAtLocationRange = function (t) {
          var e;
          return (e = this.createDOMRangeFromLocationRange(t)) ? this.getClientRectsForDOMRange(e)[1] : void 0;
        }, f.prototype.locationIsCursorTarget = function (t) {
          var e, n, i;
          return i = this.findNodeAndOffsetFromLocation(t), e = i[0], n = i[1], s(e);
        }, f.prototype.lock = function () {
          return 0 === this.lockCount++ ? (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange()) : void 0;
        }, f.prototype.unlock = function () {
          var t;
          return 0 === --this.lockCount && (t = this.lockedLocationRange, this.lockedLocationRange = null, null != t) ? this.setLocationRange(t) : void 0;
        }, f.prototype.clearSelection = function () {
          var t;
          return null != (t = i()) ? t.removeAllRanges() : void 0;
        }, f.prototype.selectionIsCollapsed = function () {
          var t;
          return (null != (t = n()) ? t.collapsed : void 0) === !0;
        }, f.prototype.selectionIsExpanded = function () {
          return !this.selectionIsCollapsed();
        }, f.prototype.createLocationRangeFromDOMRange = function (t, e) {
          var n, i;
          if (null != t && this.domRangeWithinElement(t) && (i = this.findLocationFromContainerAndOffset(t.startContainer, t.startOffset, e))) return t.collapsed || (n = this.findLocationFromContainerAndOffset(t.endContainer, t.endOffset, e)), a([i, n]);
        }, f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), f.proxyMethod("pointMapper.createDOMRangeFromPoint"), f.proxyMethod("pointMapper.getClientRectsForDOMRange"), f.prototype.didMouseDown = function () {
          return this.pauseTemporarily();
        }, f.prototype.pauseTemporarily = function () {
          var e, n, i, r;
          return this.paused = !0, n = function (e) {
            return function () {
              var n, o, s;

              for (e.paused = !1, clearTimeout(r), o = 0, s = i.length; s > o; o++) n = i[o], n.destroy();

              return t(document, e.element) ? e.selectionDidChange() : void 0;
            };
          }(this), r = setTimeout(n, 200), i = function () {
            var t, i, r, s;

            for (r = ["mousemove", "keydown"], s = [], t = 0, i = r.length; i > t; t++) e = r[t], s.push(o(e, {
              onElement: document,
              withCallback: n
            }));

            return s;
          }();
        }, f.prototype.selectionDidChange = function () {
          return this.paused || r(this.element) ? void 0 : this.updateCurrentLocationRange();
        }, f.prototype.updateCurrentLocationRange = function (t) {
          var e;
          return (null != t ? t : t = this.createLocationRangeFromDOMRange(n())) && !c(t, this.currentLocationRange) ? (this.currentLocationRange = t, null != (e = this.delegate) && "function" == typeof e.locationRangeDidChange ? e.locationRangeDidChange(this.currentLocationRange.slice(0)) : void 0) : void 0;
        }, f.prototype.createDOMRangeFromLocationRange = function (t) {
          var e, n, i, o;
          return i = this.findContainerAndOffsetFromLocation(t[0]), n = u(t) ? i : null != (o = this.findContainerAndOffsetFromLocation(t[1])) ? o : i, null != i && null != n ? (e = document.createRange(), e.setStart.apply(e, i), e.setEnd.apply(e, n), e) : void 0;
        }, f.prototype.getLocationAtPoint = function (t) {
          var e, n;
          return (e = this.createDOMRangeFromPoint(t)) && null != (n = this.createLocationRangeFromDOMRange(e)) ? n[0] : void 0;
        }, f.prototype.domRangeWithinElement = function (e) {
          return e.collapsed ? t(this.element, e.startContainer) : t(this.element, e.startContainer) && t(this.element, e.endContainer);
        }, f;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) s.call(e, i) && (t[i] = e[i]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].slice;

      i = e.rangeIsCollapsed, o = e.rangesAreEqual, n = e.objectsAreEqual, t = e.getBlockConfig, e.EditorController = function (s) {
        function u(t) {
          var n, i;
          this.editorElement = t.editorElement, n = t.document, i = t.html, this.selectionManager = new e.SelectionManager(this.editorElement), this.selectionManager.delegate = this, this.composition = new e.Composition(), this.composition.delegate = this, this.attachmentManager = new e.AttachmentManager(this.composition.getAttachments()), this.attachmentManager.delegate = this, this.inputController = new e["Level" + e.config.input.getLevel() + "InputController"](this.editorElement), this.inputController.delegate = this, this.inputController.responder = this.composition, this.compositionController = new e.CompositionController(this.editorElement, this.composition), this.compositionController.delegate = this, this.toolbarController = new e.ToolbarController(this.editorElement.toolbarElement), this.toolbarController.delegate = this, this.editor = new e.Editor(this.composition, this.selectionManager, this.editorElement), null != n ? this.editor.loadDocument(n) : this.editor.loadHTML(i);
        }

        var c;
        return r(u, s), u.prototype.registerSelectionManager = function () {
          return e.selectionChangeObserver.registerSelectionManager(this.selectionManager);
        }, u.prototype.unregisterSelectionManager = function () {
          return e.selectionChangeObserver.unregisterSelectionManager(this.selectionManager);
        }, u.prototype.render = function () {
          return this.compositionController.render();
        }, u.prototype.reparse = function () {
          return this.composition.replaceHTML(this.editorElement.innerHTML);
        }, u.prototype.compositionDidChangeDocument = function () {
          return this.notifyEditorElement("document-change"), this.handlingInput ? void 0 : this.render();
        }, u.prototype.compositionDidChangeCurrentAttributes = function (t) {
          return this.currentAttributes = t, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", {
            attributes: this.currentAttributes
          });
        }, u.prototype.compositionDidPerformInsertionAtRange = function (t) {
          return this.pasting ? this.pastedRange = t : void 0;
        }, u.prototype.compositionShouldAcceptFile = function (t) {
          return this.notifyEditorElement("file-accept", {
            file: t
          });
        }, u.prototype.compositionDidAddAttachment = function (t) {
          var e;
          return e = this.attachmentManager.manageAttachment(t), this.notifyEditorElement("attachment-add", {
            attachment: e
          });
        }, u.prototype.compositionDidEditAttachment = function (t) {
          var e;
          return this.compositionController.rerenderViewForObject(t), e = this.attachmentManager.manageAttachment(t), this.notifyEditorElement("attachment-edit", {
            attachment: e
          }), this.notifyEditorElement("change");
        }, u.prototype.compositionDidChangeAttachmentPreviewURL = function (t) {
          return this.compositionController.invalidateViewForObject(t), this.notifyEditorElement("change");
        }, u.prototype.compositionDidRemoveAttachment = function (t) {
          var e;
          return e = this.attachmentManager.unmanageAttachment(t), this.notifyEditorElement("attachment-remove", {
            attachment: e
          });
        }, u.prototype.compositionDidStartEditingAttachment = function (t, e) {
          return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t), this.compositionController.installAttachmentEditorForAttachment(t, e), this.selectionManager.setLocationRange(this.attachmentLocationRange);
        }, u.prototype.compositionDidStopEditingAttachment = function () {
          return this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
        }, u.prototype.compositionDidRequestChangingSelectionToLocationRange = function (t) {
          return !this.loadingSnapshot || this.isFocused() ? (this.requestedLocationRange = t, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render()) : void 0;
        }, u.prototype.compositionWillLoadSnapshot = function () {
          return this.loadingSnapshot = !0;
        }, u.prototype.compositionDidLoadSnapshot = function () {
          return this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = !1;
        }, u.prototype.getSelectionManager = function () {
          return this.selectionManager;
        }, u.proxyMethod("getSelectionManager().setLocationRange"), u.proxyMethod("getSelectionManager().getLocationRange"), u.prototype.attachmentManagerDidRequestRemovalOfAttachment = function (t) {
          return this.removeAttachment(t);
        }, u.prototype.compositionControllerWillSyncDocumentView = function () {
          return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
        }, u.prototype.compositionControllerDidSyncDocumentView = function () {
          return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
        }, u.prototype.compositionControllerDidRender = function () {
          return null != this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
        }, u.prototype.compositionControllerDidFocus = function () {
          return this.isFocusedInvisibly() && this.setLocationRange({
            index: 0,
            offset: 0
          }), this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
        }, u.prototype.compositionControllerDidBlur = function () {
          return this.notifyEditorElement("blur");
        }, u.prototype.compositionControllerDidSelectAttachment = function (t, e) {
          return this.toolbarController.hideDialog(), this.composition.editAttachment(t, e);
        }, u.prototype.compositionControllerDidRequestDeselectingAttachment = function (t) {
          var e, n;
          return e = null != (n = this.attachmentLocationRange) ? n : this.composition.document.getLocationRangeOfAttachment(t), this.selectionManager.setLocationRange(e[1]);
        }, u.prototype.compositionControllerWillUpdateAttachment = function (t) {
          return this.editor.recordUndoEntry("Edit Attachment", {
            context: t.id,
            consolidatable: !0
          });
        }, u.prototype.compositionControllerDidRequestRemovalOfAttachment = function (t) {
          return this.removeAttachment(t);
        }, u.prototype.inputControllerWillHandleInput = function () {
          return this.handlingInput = !0, this.requestedRender = !1;
        }, u.prototype.inputControllerDidRequestRender = function () {
          return this.requestedRender = !0;
        }, u.prototype.inputControllerDidHandleInput = function () {
          return this.handlingInput = !1, this.requestedRender ? (this.requestedRender = !1, this.render()) : void 0;
        }, u.prototype.inputControllerDidAllowUnhandledInput = function () {
          return this.notifyEditorElement("change");
        }, u.prototype.inputControllerDidRequestReparse = function () {
          return this.reparse();
        }, u.prototype.inputControllerWillPerformTyping = function () {
          return this.recordTypingUndoEntry();
        }, u.prototype.inputControllerWillPerformFormatting = function (t) {
          return this.recordFormattingUndoEntry(t);
        }, u.prototype.inputControllerWillCutText = function () {
          return this.editor.recordUndoEntry("Cut");
        }, u.prototype.inputControllerWillPaste = function (t) {
          return this.editor.recordUndoEntry("Paste"), this.pasting = !0, this.notifyEditorElement("before-paste", {
            paste: t
          });
        }, u.prototype.inputControllerDidPaste = function (t) {
          return t.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", {
            paste: t
          });
        }, u.prototype.inputControllerWillMoveText = function () {
          return this.editor.recordUndoEntry("Move");
        }, u.prototype.inputControllerWillAttachFiles = function () {
          return this.editor.recordUndoEntry("Drop Files");
        }, u.prototype.inputControllerWillPerformUndo = function () {
          return this.editor.undo();
        }, u.prototype.inputControllerWillPerformRedo = function () {
          return this.editor.redo();
        }, u.prototype.inputControllerDidReceiveKeyboardCommand = function (t) {
          return this.toolbarController.applyKeyboardCommand(t);
        }, u.prototype.inputControllerDidStartDrag = function () {
          return this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
        }, u.prototype.inputControllerDidReceiveDragOverPoint = function (t) {
          return this.selectionManager.setLocationRangeFromPointRange(t);
        }, u.prototype.inputControllerDidCancelDrag = function () {
          return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
        }, u.prototype.locationRangeDidChange = function (t) {
          return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !o(this.attachmentLocationRange, t) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
        }, u.prototype.toolbarDidClickButton = function () {
          return this.getLocationRange() ? void 0 : this.setLocationRange({
            index: 0,
            offset: 0
          });
        }, u.prototype.toolbarDidInvokeAction = function (t) {
          return this.invokeAction(t);
        }, u.prototype.toolbarDidToggleAttribute = function (t) {
          return this.recordFormattingUndoEntry(t), this.composition.toggleCurrentAttribute(t), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarDidUpdateAttribute = function (t, e) {
          return this.recordFormattingUndoEntry(t), this.composition.setCurrentAttribute(t, e), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarDidRemoveAttribute = function (t) {
          return this.recordFormattingUndoEntry(t), this.composition.removeCurrentAttribute(t), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarWillShowDialog = function () {
          return this.composition.expandSelectionForEditing(), this.freezeSelection();
        }, u.prototype.toolbarDidShowDialog = function (t) {
          return this.notifyEditorElement("toolbar-dialog-show", {
            dialogName: t
          });
        }, u.prototype.toolbarDidHideDialog = function (t) {
          return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", {
            dialogName: t
          });
        }, u.prototype.freezeSelection = function () {
          return this.selectionFrozen ? void 0 : (this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = !0, this.render());
        }, u.prototype.thawSelection = function () {
          return this.selectionFrozen ? (this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = !1, this.render()) : void 0;
        }, u.prototype.actions = {
          undo: {
            test: function () {
              return this.editor.canUndo();
            },
            perform: function () {
              return this.editor.undo();
            }
          },
          redo: {
            test: function () {
              return this.editor.canRedo();
            },
            perform: function () {
              return this.editor.redo();
            }
          },
          link: {
            test: function () {
              return this.editor.canActivateAttribute("href");
            }
          },
          increaseNestingLevel: {
            test: function () {
              return this.editor.canIncreaseNestingLevel();
            },
            perform: function () {
              return this.editor.increaseNestingLevel() && this.render();
            }
          },
          decreaseNestingLevel: {
            test: function () {
              return this.editor.canDecreaseNestingLevel();
            },
            perform: function () {
              return this.editor.decreaseNestingLevel() && this.render();
            }
          },
          attachFiles: {
            test: function () {
              return !0;
            },
            perform: function () {
              return e.config.input.pickFiles(this.editor.insertFiles);
            }
          }
        }, u.prototype.canInvokeAction = function (t) {
          var e, n;
          return this.actionIsExternal(t) ? !0 : !!(null != (e = this.actions[t]) && null != (n = e.test) ? n.call(this) : void 0);
        }, u.prototype.invokeAction = function (t) {
          var e, n;
          return this.actionIsExternal(t) ? this.notifyEditorElement("action-invoke", {
            actionName: t
          }) : null != (e = this.actions[t]) && null != (n = e.perform) ? n.call(this) : void 0;
        }, u.prototype.actionIsExternal = function (t) {
          return /^x-./.test(t);
        }, u.prototype.getCurrentActions = function () {
          var t, e;
          e = {};

          for (t in this.actions) e[t] = this.canInvokeAction(t);

          return e;
        }, u.prototype.updateCurrentActions = function () {
          var t;
          return t = this.getCurrentActions(), n(t, this.currentActions) ? void 0 : (this.currentActions = t, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", {
            actions: this.currentActions
          }));
        }, u.prototype.runEditorFilters = function () {
          var t, e, n, i, o, r, s, a;

          for (a = this.composition.getSnapshot(), o = this.editor.filters, n = 0, i = o.length; i > n; n++) e = o[n], t = a.document, s = a.selectedRange, a = null != (r = e.call(this.editor, a)) ? r : {}, null == a.document && (a.document = t), null == a.selectedRange && (a.selectedRange = s);

          return c(a, this.composition.getSnapshot()) ? void 0 : this.composition.loadSnapshot(a);
        }, c = function (t, e) {
          return o(t.selectedRange, e.selectedRange) && t.document.isEqualTo(e.document);
        }, u.prototype.updateInputElement = function () {
          var t, n;
          return t = this.compositionController.getSerializableElement(), n = e.serializeToContentType(t, "text/html"), this.editorElement.setInputElementValue(n);
        }, u.prototype.notifyEditorElement = function (t, e) {
          switch (t) {
            case "document-change":
              this.documentChangedSinceLastRender = !0;
              break;

            case "render":
              this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = !1, this.notifyEditorElement("change"));
              break;

            case "change":
            case "attachment-add":
            case "attachment-edit":
            case "attachment-remove":
              this.updateInputElement();
          }

          return this.editorElement.notify(t, e);
        }, u.prototype.removeAttachment = function (t) {
          return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t), this.render();
        }, u.prototype.recordFormattingUndoEntry = function (e) {
          var n, o;
          return n = t(e), o = this.selectionManager.getLocationRange(), n || !i(o) ? this.editor.recordUndoEntry("Formatting", {
            context: this.getUndoContext(),
            consolidatable: !0
          }) : void 0;
        }, u.prototype.recordTypingUndoEntry = function () {
          return this.editor.recordUndoEntry("Typing", {
            context: this.getUndoContext(this.currentAttributes),
            consolidatable: !0
          });
        }, u.prototype.getUndoContext = function () {
          var t;
          return t = 1 <= arguments.length ? a.call(arguments, 0) : [], [this.getLocationContext(), this.getTimeContext()].concat(a.call(t));
        }, u.prototype.getLocationContext = function () {
          var t;
          return t = this.selectionManager.getLocationRange(), i(t) ? t[0].index : t;
        }, u.prototype.getTimeContext = function () {
          return e.config.undoInterval > 0 ? Math.floor(new Date().getTime() / e.config.undoInterval) : 0;
        }, u.prototype.isFocused = function () {
          var t;
          return this.editorElement === (null != (t = this.editorElement.ownerDocument) ? t.activeElement : void 0);
        }, u.prototype.isFocusedInvisibly = function () {
          return this.isFocused() && !this.getLocationRange();
        }, u;
      }(e.Controller);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;

        return -1;
      };

      n = e.browser, s = e.makeElement, a = e.triggerEvent, o = e.handleEvent, r = e.handleEventOnce, i = e.findClosestElementFromNode, t = e.AttachmentView.attachmentSelector, e.registerElement("trix-editor", function () {
        var c, l, h, p, d, f, g, m, v;
        return g = 0, l = function (t) {
          return !document.querySelector(":focus") && t.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t ? t.focus() : void 0;
        }, m = function (t) {
          return t.hasAttribute("contenteditable") ? void 0 : (t.setAttribute("contenteditable", ""), r("focus", {
            onElement: t,
            withCallback: function () {
              return h(t);
            }
          }));
        }, h = function (t) {
          return d(t), v(t);
        }, d = function (t) {
          return ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("enableObjectResizing") : void 0) ? (document.execCommand("enableObjectResizing", !1, !1), o("mscontrolselect", {
            onElement: t,
            preventDefault: !0
          })) : void 0;
        }, v = function () {
          var t;
          return ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("DefaultParagraphSeparator") : void 0) && (t = e.config.blockAttributes["default"].tagName, "div" === t || "p" === t) ? document.execCommand("DefaultParagraphSeparator", !1, t) : void 0;
        }, c = function (t) {
          return t.hasAttribute("role") ? void 0 : t.setAttribute("role", "textbox");
        }, f = function (t) {
          var e;
          if (!t.hasAttribute("aria-label") && !t.hasAttribute("aria-labelledby")) return (e = function () {
            var e, n, i;
            return i = function () {
              var n, i, o, r;

              for (o = t.labels, r = [], n = 0, i = o.length; i > n; n++) e = o[n], e.contains(t) || r.push(e.textContent);

              return r;
            }(), (n = i.join(" ")) ? t.setAttribute("aria-label", n) : t.removeAttribute("aria-label");
          })(), o("focus", {
            onElement: t,
            withCallback: e
          });
        }, p = function () {
          return n.forcesObjectResizing ? {
            display: "inline",
            width: "auto"
          } : {
            display: "inline-block",
            width: "1px"
          };
        }(), {
          defaultCSS: "%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n  pointer-events: none;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t " + t + " figcaption textarea {\n  resize: none;\n}\n\n%t " + t + " figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t " + t + " figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: " + p.display + " !important;\n  width: " + p.width + " !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",
          trixId: {
            get: function () {
              return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++g), this.trixId);
            }
          },
          labels: {
            get: function () {
              var t, e, n;
              return e = [], this.id && this.ownerDocument && e.push.apply(e, this.ownerDocument.querySelectorAll("label[for='" + this.id + "']")), (t = i(this, {
                matchingSelector: "label"
              })) && ((n = t.control) === this || null === n) && e.push(t), e;
            }
          },
          toolbarElement: {
            get: function () {
              var t, e, n;
              return this.hasAttribute("toolbar") ? null != (e = this.ownerDocument) ? e.getElementById(this.getAttribute("toolbar")) : void 0 : this.parentNode ? (n = "trix-toolbar-" + this.trixId, this.setAttribute("toolbar", n), t = s("trix-toolbar", {
                id: n
              }), this.parentNode.insertBefore(t, this), t) : void 0;
            }
          },
          inputElement: {
            get: function () {
              var t, e, n;
              return this.hasAttribute("input") ? null != (n = this.ownerDocument) ? n.getElementById(this.getAttribute("input")) : void 0 : this.parentNode ? (e = "trix-input-" + this.trixId, this.setAttribute("input", e), t = s("input", {
                type: "hidden",
                id: e
              }), this.parentNode.insertBefore(t, this.nextElementSibling), t) : void 0;
            }
          },
          editor: {
            get: function () {
              var t;
              return null != (t = this.editorController) ? t.editor : void 0;
            }
          },
          name: {
            get: function () {
              var t;
              return null != (t = this.inputElement) ? t.name : void 0;
            }
          },
          value: {
            get: function () {
              var t;
              return null != (t = this.inputElement) ? t.value : void 0;
            },
            set: function (t) {
              var e;
              return this.defaultValue = t, null != (e = this.editor) ? e.loadHTML(this.defaultValue) : void 0;
            }
          },
          notify: function (t, e) {
            return this.editorController ? a("trix-" + t, {
              onElement: this,
              attributes: e
            }) : void 0;
          },
          setInputElementValue: function (t) {
            var e;
            return null != (e = this.inputElement) ? e.value = t : void 0;
          },
          initialize: function () {
            return this.hasAttribute("data-trix-internal") ? void 0 : (m(this), c(this), f(this));
          },
          connect: function () {
            return this.hasAttribute("data-trix-internal") ? void 0 : (this.editorController || (a("trix-before-initialize", {
              onElement: this
            }), this.editorController = new e.EditorController({
              editorElement: this,
              html: this.defaultValue = this.value
            }), requestAnimationFrame(function (t) {
              return function () {
                return a("trix-initialize", {
                  onElement: t
                });
              };
            }(this))), this.editorController.registerSelectionManager(), this.registerResetListener(), this.registerClickListener(), l(this));
          },
          disconnect: function () {
            var t;
            return null != (t = this.editorController) && t.unregisterSelectionManager(), this.unregisterResetListener(), this.unregisterClickListener();
          },
          registerResetListener: function () {
            return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, !1);
          },
          unregisterResetListener: function () {
            return window.removeEventListener("reset", this.resetListener, !1);
          },
          registerClickListener: function () {
            return this.clickListener = this.clickBubbled.bind(this), window.addEventListener("click", this.clickListener, !1);
          },
          unregisterClickListener: function () {
            return window.removeEventListener("click", this.clickListener, !1);
          },
          resetBubbled: function (t) {
            var e;
            if (!t.defaultPrevented && t.target === (null != (e = this.inputElement) ? e.form : void 0)) return this.reset();
          },
          clickBubbled: function (t) {
            var e;
            if (!(t.defaultPrevented || this.contains(t.target) || !(e = i(t.target, {
              matchingSelector: "label"
            })) || u.call(this.labels, e) < 0)) return this.focus();
          },
          reset: function () {
            return this.value = this.defaultValue;
          }
        };
      }());
    }.call(this), function () {}.call(this);
  }).call(this),  true && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}.call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function (t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function () {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function (t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) n = t[e], r[e] = n;

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function (t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function (t) {
          return n(t, "/") ? t : t + "/";
        }, o = function (t, e) {
          return t.slice(0, e.length) === e;
        }, n = function (t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
            type: i(u),
            tracked: o(u),
            elements: []
          }, r.elements.push(u));
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) e = r[t].tracked, e && n.push(t);

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) n = i[o].elements, e(n[0], t) && (r = n[0]);

          return r;
        }, i = function (t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function (t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function (t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function (t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function (t, e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) e = o[r], t.getPermanentElementById(e.id) && i.push(e);

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function (t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function (t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) o.call(e, n) && (t[n] = e[n]);

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.removeChild(t));

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) t = n[e], o.push(document.head.appendChild(t));

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) n = i[e], t = this.createScriptElement(n), s.push(r(n, t));

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function (t) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", t.id), {
          element: e,
          permanentElement: t
        };
      }, r = function (t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function (t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) r.call(e, o) && (t[o] = e[o]);

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) e = n[t], o.push(delete this.snapshots[e]);

          return o;
        }, r = function (t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function (t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function () {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function () {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function () {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this),  true && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=application-419b1b16206ac5086895.js.map