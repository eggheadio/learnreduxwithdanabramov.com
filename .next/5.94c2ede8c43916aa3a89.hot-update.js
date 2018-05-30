webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_dist_lib_utils__ = __webpack_require__("./node_modules/next/dist/lib/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_dist_lib_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_dist_lib_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Lessons__ = __webpack_require__("./components/Lessons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CodeStyles__ = __webpack_require__("./components/CodeStyles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_CourseDescription_md__ = __webpack_require__("./components/CourseDescription.md");
var _jsxFileName = "/Users/joel/Code/egghead/learnreduxwithdanabramov.com/pages/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var ReactGA;

if (process.browser) {
  ReactGA = __webpack_require__("./node_modules/react-ga/dist/react-ga.js"); // eslint-disable-line global-require
}

if (typeof window !== 'undefined') {
  Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["b" /* hydrate */])(window.__NEXT_DATA__.ids);
}

Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["c" /* injectGlobal */])("html,body{padding:3rem 1rem;margin:0;background:white;min-height:100%;font-family:Helvetica,Arial,sans-serif;font-size:18px;}img{max-width:100%;}pre{background:#fafafa;padding:25px;}", __WEBPACK_IMPORTED_MODULE_6__components_CodeStyles__["a" /* default */]);

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    if (process.browser) {
      ReactGA.initialize('UA-36512724-5');
    }

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = window.location.pathname;
      ReactGA.set({
        page: page
      });
      ReactGA.pageview(page);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "google-site-verification",
        content: "IIrF63zU-1tJ9wTakA176fZd_hNrbW1QD_5oticuUv0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: "Learn how to use Redux in your React apps in the tutorial from the creator of Redux, Dan Abramov.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Learn Redux with Dan Abramov")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("display:flex;flex-direction:column;justify-content:center;align-items:center;"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Learn Redux with Dan Abramov")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Redux presents a sane and scalable way to manage complex state in your React applications.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("background:black;color:white;font-size:14px;text-decoration:none;padding:10px;"),
        href: "https://egghead.io/lessons/react-redux-the-single-immutable-state-tree?utm_source=microsite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "watch the screencasts on egghead.io")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["css"])("flex:1 1 320px;max-width:800px;padding-top:50px;"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_CourseDescription_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Lessons__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReactGA, "ReactGA", "/Users/joel/Code/egghead/learnreduxwithdanabramov.com/pages/index.js");
  reactHotLoader.register(App, "App", "/Users/joel/Code/egghead/learnreduxwithdanabramov.com/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/joel/Code/egghead/learnreduxwithdanabramov.com/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=5.94c2ede8c43916aa3a89.hot-update.js.map