webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lessons_javascript_redux_the_single_immutable_state_tree_md__ = __webpack_require__("./lessons/javascript-redux-the-single-immutable-state-tree.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lessons_javascript_redux_describing_state_changes_with_actions_md__ = __webpack_require__("./lessons/javascript-redux-describing-state-changes-with-actions.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lessons_javascript_redux_pure_and_impure_functions_md__ = __webpack_require__("./lessons/javascript-redux-pure-and-impure-functions.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lessons_javascript_redux_the_reducer_function_md__ = __webpack_require__("./lessons/javascript-redux-the-reducer-function.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lessons_javascript_redux_writing_a_counter_reducer_with_tests_md__ = __webpack_require__("./lessons/javascript-redux-writing-a-counter-reducer-with-tests.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lessons_javascript_redux_store_methods_getstate_dispatch_and_subscribe_md__ = __webpack_require__("./lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lessons_javascript_redux_implementing_store_from_scratch_md__ = __webpack_require__("./lessons/javascript-redux-implementing-store-from-scratch.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lessons_javascript_redux_react_counter_example_md__ = __webpack_require__("./lessons/javascript-redux-react-counter-example.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lessons_javascript_redux_avoiding_array_mutations_with_concat_slice_and_spread_md__ = __webpack_require__("./lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lessons_javascript_redux_avoiding_object_mutations_with_object_assign_and_spread_md__ = __webpack_require__("./lessons/javascript-redux-avoiding-object-mutations-with-object-assign-and-spread.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lessons_javascript_redux_writing_a_todo_list_reducer_adding_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-writing-a-todo-list-reducer-adding-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lessons_javascript_redux_writing_a_todo_list_reducer_toggling_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-writing-a-todo-list-reducer-toggling-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lessons_javascript_redux_reducer_composition_with_arrays_md__ = __webpack_require__("./lessons/javascript-redux-reducer-composition-with-arrays.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lessons_javascript_redux_reducer_composition_with_objects_md__ = __webpack_require__("./lessons/javascript-redux-reducer-composition-with-objects.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lessons_javascript_redux_reducer_composition_with_combinereducers_md__ = __webpack_require__("./lessons/javascript-redux-reducer-composition-with-combinereducers.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lessons_javascript_redux_implementing_combinereducers_from_scratch_md__ = __webpack_require__("./lessons/javascript-redux-implementing-combinereducers-from-scratch.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lessons_javascript_redux_react_todo_list_example_adding_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-react-todo-list-example-adding-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lessons_javascript_redux_react_todo_list_example_toggling_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-react-todo-list-example-toggling-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lessons_javascript_redux_react_todo_list_example_filtering_todos_md__ = __webpack_require__("./lessons/javascript-redux-react-todo-list-example-filtering-todos.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lessons_javascript_redux_extracting_presentational_components_todo_todolist_md__ = __webpack_require__("./lessons/javascript-redux-extracting-presentational-components-todo-todolist.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lessons_javascript_redux_extracting_presentational_components_addtodo_footer_filterlink_md__ = __webpack_require__("./lessons/javascript-redux-extracting-presentational-components-addtodo-footer-filterlink.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lessons_javascript_redux_extracting_container_components_filterlink_md__ = __webpack_require__("./lessons/javascript-redux-extracting-container-components-filterlink.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__lessons_javascript_redux_extracting_container_components_visibletodolist_addtodo_md__ = __webpack_require__("./lessons/javascript-redux-extracting-container-components-visibletodolist-addtodo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__lessons_javascript_redux_passing_the_store_down_explicitly_via_props_md__ = __webpack_require__("./lessons/javascript-redux-passing-the-store-down-explicitly-via-props.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__lessons_javascript_redux_passing_the_store_down_implicitly_via_context_md__ = __webpack_require__("./lessons/javascript-redux-passing-the-store-down-implicitly-via-context.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__lessons_javascript_redux_passing_the_store_down_with_provider_from_react_redux_md__ = __webpack_require__("./lessons/javascript-redux-passing-the-store-down-with-provider-from-react-redux.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_visibletodolist_md__ = __webpack_require__("./lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_addtodo_md__ = __webpack_require__("./lessons/javascript-redux-generating-containers-with-connect-from-react-redux-addtodo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_footerlink_md__ = __webpack_require__("./lessons/javascript-redux-generating-containers-with-connect-from-react-redux-footerlink.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__lessons_javascript_redux_extracting_action_creators_md__ = __webpack_require__("./lessons/javascript-redux-extracting-action-creators.md");
var _jsxFileName = "/Users/joel/Code/egghead/learnreduxwithdanabramov.com/pages/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();
































var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      maxWidth: '800px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__lessons_javascript_redux_the_single_immutable_state_tree_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__lessons_javascript_redux_describing_state_changes_with_actions_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__lessons_javascript_redux_pure_and_impure_functions_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__lessons_javascript_redux_the_reducer_function_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__lessons_javascript_redux_writing_a_counter_reducer_with_tests_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__lessons_javascript_redux_store_methods_getstate_dispatch_and_subscribe_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__lessons_javascript_redux_implementing_store_from_scratch_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__lessons_javascript_redux_react_counter_example_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__lessons_javascript_redux_avoiding_array_mutations_with_concat_slice_and_spread_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__lessons_javascript_redux_avoiding_object_mutations_with_object_assign_and_spread_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__lessons_javascript_redux_writing_a_todo_list_reducer_adding_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__lessons_javascript_redux_writing_a_todo_list_reducer_toggling_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__lessons_javascript_redux_reducer_composition_with_arrays_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__lessons_javascript_redux_reducer_composition_with_objects_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__lessons_javascript_redux_reducer_composition_with_combinereducers_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__lessons_javascript_redux_implementing_combinereducers_from_scratch_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__lessons_javascript_redux_react_todo_list_example_adding_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__lessons_javascript_redux_react_todo_list_example_toggling_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__lessons_javascript_redux_react_todo_list_example_filtering_todos_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__lessons_javascript_redux_extracting_presentational_components_todo_todolist_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__lessons_javascript_redux_extracting_container_components_filterlink_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__lessons_javascript_redux_extracting_container_components_filterlink_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_23__lessons_javascript_redux_extracting_container_components_visibletodolist_addtodo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__lessons_javascript_redux_passing_the_store_down_explicitly_via_props_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25__lessons_javascript_redux_passing_the_store_down_implicitly_via_context_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__lessons_javascript_redux_passing_the_store_down_with_provider_from_react_redux_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_visibletodolist_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_28__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_addtodo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_29__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_footerlink_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__lessons_javascript_redux_extracting_action_creators_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

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
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.e58f45b4e26c9d84df90.hot-update.js.map