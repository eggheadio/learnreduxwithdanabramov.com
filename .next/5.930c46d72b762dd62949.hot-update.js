webpackHotUpdate(5,{

/***/ "./node_modules/react-emotion/dist/index.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_create_emotion_styled__ = __webpack_require__("./node_modules/create-emotion-styled/dist/index.es.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["hydrate"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1_emotion__["injectGlobal"]; });




var index = Object(__WEBPACK_IMPORTED_MODULE_2_create_emotion_styled__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_emotion__, __WEBPACK_IMPORTED_MODULE_0_react___default.a);

/* unused harmony default export */ var _unused_webpack_default_export = (index);

//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module, process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_dist_lib_utils__ = __webpack_require__("./node_modules/next/dist/lib/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_dist_lib_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_dist_lib_utils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lessons_javascript_redux_the_single_immutable_state_tree_md__ = __webpack_require__("./lessons/javascript-redux-the-single-immutable-state-tree.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lessons_javascript_redux_describing_state_changes_with_actions_md__ = __webpack_require__("./lessons/javascript-redux-describing-state-changes-with-actions.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lessons_javascript_redux_pure_and_impure_functions_md__ = __webpack_require__("./lessons/javascript-redux-pure-and-impure-functions.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lessons_javascript_redux_the_reducer_function_md__ = __webpack_require__("./lessons/javascript-redux-the-reducer-function.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lessons_javascript_redux_writing_a_counter_reducer_with_tests_md__ = __webpack_require__("./lessons/javascript-redux-writing-a-counter-reducer-with-tests.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lessons_javascript_redux_store_methods_getstate_dispatch_and_subscribe_md__ = __webpack_require__("./lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lessons_javascript_redux_implementing_store_from_scratch_md__ = __webpack_require__("./lessons/javascript-redux-implementing-store-from-scratch.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lessons_javascript_redux_react_counter_example_md__ = __webpack_require__("./lessons/javascript-redux-react-counter-example.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lessons_javascript_redux_avoiding_array_mutations_with_concat_slice_and_spread_md__ = __webpack_require__("./lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lessons_javascript_redux_avoiding_object_mutations_with_object_assign_and_spread_md__ = __webpack_require__("./lessons/javascript-redux-avoiding-object-mutations-with-object-assign-and-spread.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lessons_javascript_redux_writing_a_todo_list_reducer_adding_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-writing-a-todo-list-reducer-adding-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lessons_javascript_redux_writing_a_todo_list_reducer_toggling_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-writing-a-todo-list-reducer-toggling-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lessons_javascript_redux_reducer_composition_with_arrays_md__ = __webpack_require__("./lessons/javascript-redux-reducer-composition-with-arrays.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lessons_javascript_redux_reducer_composition_with_objects_md__ = __webpack_require__("./lessons/javascript-redux-reducer-composition-with-objects.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lessons_javascript_redux_reducer_composition_with_combinereducers_md__ = __webpack_require__("./lessons/javascript-redux-reducer-composition-with-combinereducers.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lessons_javascript_redux_implementing_combinereducers_from_scratch_md__ = __webpack_require__("./lessons/javascript-redux-implementing-combinereducers-from-scratch.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lessons_javascript_redux_react_todo_list_example_adding_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-react-todo-list-example-adding-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lessons_javascript_redux_react_todo_list_example_toggling_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-react-todo-list-example-toggling-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lessons_javascript_redux_react_todo_list_example_filtering_todos_md__ = __webpack_require__("./lessons/javascript-redux-react-todo-list-example-filtering-todos.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__lessons_javascript_redux_extracting_presentational_components_todo_todolist_md__ = __webpack_require__("./lessons/javascript-redux-extracting-presentational-components-todo-todolist.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__lessons_javascript_redux_extracting_presentational_components_addtodo_footer_filterlink_md__ = __webpack_require__("./lessons/javascript-redux-extracting-presentational-components-addtodo-footer-filterlink.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__lessons_javascript_redux_extracting_container_components_filterlink_md__ = __webpack_require__("./lessons/javascript-redux-extracting-container-components-filterlink.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__lessons_javascript_redux_extracting_container_components_visibletodolist_addtodo_md__ = __webpack_require__("./lessons/javascript-redux-extracting-container-components-visibletodolist-addtodo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__lessons_javascript_redux_passing_the_store_down_explicitly_via_props_md__ = __webpack_require__("./lessons/javascript-redux-passing-the-store-down-explicitly-via-props.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__lessons_javascript_redux_passing_the_store_down_implicitly_via_context_md__ = __webpack_require__("./lessons/javascript-redux-passing-the-store-down-implicitly-via-context.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__lessons_javascript_redux_passing_the_store_down_with_provider_from_react_redux_md__ = __webpack_require__("./lessons/javascript-redux-passing-the-store-down-with-provider-from-react-redux.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_visibletodolist_md__ = __webpack_require__("./lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_addtodo_md__ = __webpack_require__("./lessons/javascript-redux-generating-containers-with-connect-from-react-redux-addtodo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_footerlink_md__ = __webpack_require__("./lessons/javascript-redux-generating-containers-with-connect-from-react-redux-footerlink.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__lessons_javascript_redux_extracting_action_creators_md__ = __webpack_require__("./lessons/javascript-redux-extracting-action-creators.md");
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
  Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* hydrate */])(window.__NEXT_DATA__.ids);
}

Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["b" /* injectGlobal */])("html,body{padding:3rem 1rem;margin:0;background:papayawhip;min-height:100%;font-family:Helvetica,Arial,sans-serif;font-size:24px;}");

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
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        "http-equiv": "Content-Type",
        content: "text/html; charset=utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "google-site-verification",
        content: "IIrF63zU-1tJ9wTakA176fZd_hNrbW1QD_5oticuUv0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: "Learn how to use Redux in your React apps in the tutorial from the creator of Redux, Dan Abramov.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "Learn Redux with Dan Abramov")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Learn Redux with Dan Abramov"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://egghead.io/lessons/react-redux-the-single-immutable-state-tree?utm_source=microsite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "watch the ecreencasts on egghead.io")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          maxWidth: '825px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__lessons_javascript_redux_the_single_immutable_state_tree_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__lessons_javascript_redux_describing_state_changes_with_actions_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__lessons_javascript_redux_pure_and_impure_functions_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__lessons_javascript_redux_the_reducer_function_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__lessons_javascript_redux_writing_a_counter_reducer_with_tests_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__lessons_javascript_redux_store_methods_getstate_dispatch_and_subscribe_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__lessons_javascript_redux_implementing_store_from_scratch_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__lessons_javascript_redux_react_counter_example_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__lessons_javascript_redux_avoiding_array_mutations_with_concat_slice_and_spread_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__lessons_javascript_redux_avoiding_object_mutations_with_object_assign_and_spread_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__lessons_javascript_redux_writing_a_todo_list_reducer_adding_a_todo_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__lessons_javascript_redux_writing_a_todo_list_reducer_toggling_a_todo_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__lessons_javascript_redux_reducer_composition_with_arrays_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__lessons_javascript_redux_reducer_composition_with_objects_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__lessons_javascript_redux_reducer_composition_with_combinereducers_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__lessons_javascript_redux_implementing_combinereducers_from_scratch_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__lessons_javascript_redux_react_todo_list_example_adding_a_todo_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__lessons_javascript_redux_react_todo_list_example_toggling_a_todo_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__lessons_javascript_redux_react_todo_list_example_filtering_todos_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23__lessons_javascript_redux_extracting_presentational_components_todo_todolist_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25__lessons_javascript_redux_extracting_container_components_filterlink_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25__lessons_javascript_redux_extracting_container_components_filterlink_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__lessons_javascript_redux_extracting_container_components_visibletodolist_addtodo_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__lessons_javascript_redux_passing_the_store_down_explicitly_via_props_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_28__lessons_javascript_redux_passing_the_store_down_implicitly_via_context_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_29__lessons_javascript_redux_passing_the_store_down_with_provider_from_react_redux_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_visibletodolist_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_addtodo_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_32__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_footerlink_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_33__lessons_javascript_redux_extracting_action_creators_md__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      })));
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
//# sourceMappingURL=5.930c46d72b762dd62949.hot-update.js.map