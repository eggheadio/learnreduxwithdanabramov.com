webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lessons_javascript_redux_the_single_immutable_state_tree_md__ = __webpack_require__("./lessons/javascript-redux-the-single-immutable-state-tree.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lessons_javascript_redux_describing_state_changes_with_actions_md__ = __webpack_require__("./lessons/javascript-redux-describing-state-changes-with-actions.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lessons_javascript_redux_pure_and_impure_functions_md__ = __webpack_require__("./lessons/javascript-redux-pure-and-impure-functions.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lessons_javascript_redux_the_reducer_function_md__ = __webpack_require__("./lessons/javascript-redux-the-reducer-function.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lessons_javascript_redux_writing_a_counter_reducer_with_tests_md__ = __webpack_require__("./lessons/javascript-redux-writing-a-counter-reducer-with-tests.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lessons_javascript_redux_store_methods_getstate_dispatch_and_subscribe_md__ = __webpack_require__("./lessons/javascript-redux-store-methods-getstate-dispatch-and-subscribe.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lessons_javascript_redux_implementing_store_from_scratch_md__ = __webpack_require__("./lessons/javascript-redux-implementing-store-from-scratch.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lessons_javascript_redux_react_counter_example_md__ = __webpack_require__("./lessons/javascript-redux-react-counter-example.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lessons_javascript_redux_avoiding_array_mutations_with_concat_slice_and_spread_md__ = __webpack_require__("./lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lessons_javascript_redux_avoiding_object_mutations_with_object_assign_and_spread_md__ = __webpack_require__("./lessons/javascript-redux-avoiding-object-mutations-with-object-assign-and-spread.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lessons_javascript_redux_writing_a_todo_list_reducer_adding_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-writing-a-todo-list-reducer-adding-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lessons_javascript_redux_writing_a_todo_list_reducer_toggling_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-writing-a-todo-list-reducer-toggling-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lessons_javascript_redux_reducer_composition_with_arrays_md__ = __webpack_require__("./lessons/javascript-redux-reducer-composition-with-arrays.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lessons_javascript_redux_reducer_composition_with_objects_md__ = __webpack_require__("./lessons/javascript-redux-reducer-composition-with-objects.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lessons_javascript_redux_reducer_composition_with_combinereducers_md__ = __webpack_require__("./lessons/javascript-redux-reducer-composition-with-combinereducers.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lessons_javascript_redux_implementing_combinereducers_from_scratch_md__ = __webpack_require__("./lessons/javascript-redux-implementing-combinereducers-from-scratch.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__lessons_javascript_redux_react_todo_list_example_adding_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-react-todo-list-example-adding-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lessons_javascript_redux_react_todo_list_example_toggling_a_todo_md__ = __webpack_require__("./lessons/javascript-redux-react-todo-list-example-toggling-a-todo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__lessons_javascript_redux_react_todo_list_example_filtering_todos_md__ = __webpack_require__("./lessons/javascript-redux-react-todo-list-example-filtering-todos.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lessons_javascript_redux_extracting_presentational_components_todo_todolist_md__ = __webpack_require__("./lessons/javascript-redux-extracting-presentational-components-todo-todolist.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__lessons_javascript_redux_extracting_presentational_components_addtodo_footer_filterlink_md__ = __webpack_require__("./lessons/javascript-redux-extracting-presentational-components-addtodo-footer-filterlink.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__lessons_javascript_redux_extracting_container_components_filterlink_md__ = __webpack_require__("./lessons/javascript-redux-extracting-container-components-filterlink.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__lessons_javascript_redux_extracting_container_components_visibletodolist_addtodo_md__ = __webpack_require__("./lessons/javascript-redux-extracting-container-components-visibletodolist-addtodo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__lessons_javascript_redux_passing_the_store_down_explicitly_via_props_md__ = __webpack_require__("./lessons/javascript-redux-passing-the-store-down-explicitly-via-props.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__lessons_javascript_redux_passing_the_store_down_implicitly_via_context_md__ = __webpack_require__("./lessons/javascript-redux-passing-the-store-down-implicitly-via-context.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__lessons_javascript_redux_passing_the_store_down_with_provider_from_react_redux_md__ = __webpack_require__("./lessons/javascript-redux-passing-the-store-down-with-provider-from-react-redux.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_visibletodolist_md__ = __webpack_require__("./lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_addtodo_md__ = __webpack_require__("./lessons/javascript-redux-generating-containers-with-connect-from-react-redux-addtodo.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_footerlink_md__ = __webpack_require__("./lessons/javascript-redux-generating-containers-with-connect-from-react-redux-footerlink.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__lessons_javascript_redux_extracting_action_creators_md__ = __webpack_require__("./lessons/javascript-redux-extracting-action-creators.md");
var _jsxFileName = "/Users/joel/Code/egghead/learnreduxwithdanabramov.com/pages/index.js";



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

































var _default = function _default() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-1031074951"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    className: "jsx-1031074951"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: "jsx-1031074951"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1031074951",
    css: "img{max-width:800px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDdUIsQUFHeUIsZ0JBQ2xCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2VsL0NvZGUvZWdnaGVhZC9sZWFybnJlZHV4d2l0aGRhbmFicmFtb3YuY29tIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFNpbmdsZUltbXV0YWJsZVRyZWUgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXRoZS1zaW5nbGUtaW1tdXRhYmxlLXN0YXRlLXRyZWUubWQnXG5pbXBvcnQgU3RhdGVDaGFuZ2VzV2l0aEFjdGlvbnMgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LWRlc2NyaWJpbmctc3RhdGUtY2hhbmdlcy13aXRoLWFjdGlvbnMubWQnXG5pbXBvcnQgUHVyZUFuZEltcHVyZUZ1bmN0aW9ucyBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtcHVyZS1hbmQtaW1wdXJlLWZ1bmN0aW9ucy5tZCdcbmltcG9ydCBSZWR1Y2VyRnVuY3Rpb24gZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXRoZS1yZWR1Y2VyLWZ1bmN0aW9uLm1kJ1xuaW1wb3J0IENvdW50ZXJSZWR1Y2VyIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC13cml0aW5nLWEtY291bnRlci1yZWR1Y2VyLXdpdGgtdGVzdHMubWQnXG5pbXBvcnQgRGlzcGF0Y2hBbmRTdWJzY3JpYmUgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXN0b3JlLW1ldGhvZHMtZ2V0c3RhdGUtZGlzcGF0Y2gtYW5kLXN1YnNjcmliZS5tZCdcbmltcG9ydCBJbXBsZW1lbnRTdG9yZSBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtaW1wbGVtZW50aW5nLXN0b3JlLWZyb20tc2NyYXRjaC5tZCdcbmltcG9ydCBDb3VudGVyRXhhbXBsZSBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtcmVhY3QtY291bnRlci1leGFtcGxlLm1kJ1xuaW1wb3J0IEF2b2lkaW5nQXJyYXlNdXRhdGlvbnMgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LWF2b2lkaW5nLWFycmF5LW11dGF0aW9ucy13aXRoLWNvbmNhdC1zbGljZS1hbmQtc3ByZWFkLm1kJ1xuaW1wb3J0IEF2b2lkaW5nT2JqZWN0TXV0YXRpb25zIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1hdm9pZGluZy1vYmplY3QtbXV0YXRpb25zLXdpdGgtb2JqZWN0LWFzc2lnbi1hbmQtc3ByZWFkLm1kJ1xuaW1wb3J0IFRvZG9MaXN0UmVkdWNlckFkZFRvZG8gZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXdyaXRpbmctYS10b2RvLWxpc3QtcmVkdWNlci1hZGRpbmctYS10b2RvLm1kJ1xuaW1wb3J0IFRvZG9MaXN0UmVkdWNlclRvZ2dsZVRvZG8gZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXdyaXRpbmctYS10b2RvLWxpc3QtcmVkdWNlci10b2dnbGluZy1hLXRvZG8ubWQnXG5pbXBvcnQgUmVkdWNlckNvbXBvc2l0aW9uQXJyYXlzIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1yZWR1Y2VyLWNvbXBvc2l0aW9uLXdpdGgtYXJyYXlzLm1kJ1xuaW1wb3J0IFJlZHVjZXJDb21wb3NpdGlvbk9iamVjdHMgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXJlZHVjZXItY29tcG9zaXRpb24td2l0aC1vYmplY3RzLm1kJ1xuaW1wb3J0IFJlZHVjZXJDb21wb3NpdGlvbkNvbWJpbmUgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXJlZHVjZXItY29tcG9zaXRpb24td2l0aC1jb21iaW5lcmVkdWNlcnMubWQnXG5pbXBvcnQgSW1wbGVtZW50Q29tYmluZVJlZHVjZXJzIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1pbXBsZW1lbnRpbmctY29tYmluZXJlZHVjZXJzLWZyb20tc2NyYXRjaC5tZCdcbmltcG9ydCBBZGRUb2RvIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1yZWFjdC10b2RvLWxpc3QtZXhhbXBsZS1hZGRpbmctYS10b2RvLm1kJ1xuaW1wb3J0IFRvZ2dsZVRvZG8gZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXJlYWN0LXRvZG8tbGlzdC1leGFtcGxlLXRvZ2dsaW5nLWEtdG9kby5tZCdcbmltcG9ydCBGaWx0ZXJpbmdUb2RvcyBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtcmVhY3QtdG9kby1saXN0LWV4YW1wbGUtZmlsdGVyaW5nLXRvZG9zLm1kJ1xuaW1wb3J0IEV4dHJhY3RQcmVzZW50YXRpb25hbFRvZG9MaXN0IGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1leHRyYWN0aW5nLXByZXNlbnRhdGlvbmFsLWNvbXBvbmVudHMtdG9kby10b2RvbGlzdC5tZCdcbmltcG9ydCBFeHRyYWN0UHJlc2VudGF0aW9uYWxGaWx0ZXJMaW5rIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1leHRyYWN0aW5nLXByZXNlbnRhdGlvbmFsLWNvbXBvbmVudHMtYWRkdG9kby1mb290ZXItZmlsdGVybGluay5tZCdcbmltcG9ydCBFeHRyYWN0Q29udGFpbmVyRmlsdGVyTGluayBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtZXh0cmFjdGluZy1jb250YWluZXItY29tcG9uZW50cy1maWx0ZXJsaW5rLm1kJ1xuaW1wb3J0IEV4dHJhY3RDb250YWluZXJBZGRUb2RvIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1leHRyYWN0aW5nLWNvbnRhaW5lci1jb21wb25lbnRzLXZpc2libGV0b2RvbGlzdC1hZGR0b2RvLm1kJ1xuaW1wb3J0IFBhc3NTdG9yZVZpYVByb3BzIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1wYXNzaW5nLXRoZS1zdG9yZS1kb3duLWV4cGxpY2l0bHktdmlhLXByb3BzLm1kJ1xuaW1wb3J0IFBhc3NTdG9yZVZpYUNvbnRleHQgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXBhc3NpbmctdGhlLXN0b3JlLWRvd24taW1wbGljaXRseS12aWEtY29udGV4dC5tZCdcbmltcG9ydCBQYXNzU3RvcmVWaWFQcm92aWRlciBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtcGFzc2luZy10aGUtc3RvcmUtZG93bi13aXRoLXByb3ZpZGVyLWZyb20tcmVhY3QtcmVkdXgubWQnXG5pbXBvcnQgR2VuZXJhdGVXaXRoQ29ubmVjdFRvZG9MaXN0IGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1nZW5lcmF0aW5nLWNvbnRhaW5lcnMtd2l0aC1jb25uZWN0LWZyb20tcmVhY3QtcmVkdXgtdmlzaWJsZXRvZG9saXN0Lm1kJ1xuaW1wb3J0IEdlbmVyYXRlV2l0aENvbm5lY3RBZGRUb2RvIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1nZW5lcmF0aW5nLWNvbnRhaW5lcnMtd2l0aC1jb25uZWN0LWZyb20tcmVhY3QtcmVkdXgtYWRkdG9kby5tZCdcbmltcG9ydCBHZW5lcmF0ZVdpdGhDb25uZWN0Rm9vdGVyIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1nZW5lcmF0aW5nLWNvbnRhaW5lcnMtd2l0aC1jb25uZWN0LWZyb20tcmVhY3QtcmVkdXgtZm9vdGVybGluay5tZCdcbmltcG9ydCBFeHRyYWN0QWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LWV4dHJhY3RpbmctYWN0aW9uLWNyZWF0b3JzLm1kJ1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnODI1cHgnIH19PlxuICAgICAgPFNpbmdsZUltbXV0YWJsZVRyZWUgLz5cbiAgICAgIDxTdGF0ZUNoYW5nZXNXaXRoQWN0aW9ucyAvPlxuICAgICAgPFB1cmVBbmRJbXB1cmVGdW5jdGlvbnMgLz5cbiAgICAgIDxSZWR1Y2VyRnVuY3Rpb24gLz5cbiAgICAgIDxDb3VudGVyUmVkdWNlciAvPlxuICAgICAgPERpc3BhdGNoQW5kU3Vic2NyaWJlIC8+XG4gICAgICA8SW1wbGVtZW50U3RvcmUgLz5cbiAgICAgIDxDb3VudGVyRXhhbXBsZSAvPlxuICAgICAgPEF2b2lkaW5nQXJyYXlNdXRhdGlvbnMgLz5cbiAgICAgIDxBdm9pZGluZ09iamVjdE11dGF0aW9ucyAvPlxuICAgICAgPFRvZG9MaXN0UmVkdWNlckFkZFRvZG8gLz5cbiAgICAgIDxUb2RvTGlzdFJlZHVjZXJUb2dnbGVUb2RvIC8+XG4gICAgICA8UmVkdWNlckNvbXBvc2l0aW9uQXJyYXlzIC8+XG4gICAgICA8UmVkdWNlckNvbXBvc2l0aW9uT2JqZWN0cyAvPlxuICAgICAgPFJlZHVjZXJDb21wb3NpdGlvbkNvbWJpbmUgLz5cbiAgICAgIDxJbXBsZW1lbnRDb21iaW5lUmVkdWNlcnMgLz5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgICA8VG9nZ2xlVG9kbyAvPlxuICAgICAgPEZpbHRlcmluZ1RvZG9zIC8+XG4gICAgICA8RXh0cmFjdFByZXNlbnRhdGlvbmFsVG9kb0xpc3QgLz5cbiAgICAgIDxFeHRyYWN0Q29udGFpbmVyRmlsdGVyTGluayAvPlxuICAgICAgPEV4dHJhY3RDb250YWluZXJGaWx0ZXJMaW5rIC8+XG4gICAgICA8RXh0cmFjdENvbnRhaW5lckFkZFRvZG8gLz5cbiAgICAgIDxQYXNzU3RvcmVWaWFQcm9wcyAvPlxuICAgICAgPFBhc3NTdG9yZVZpYUNvbnRleHQgLz5cbiAgICAgIDxQYXNzU3RvcmVWaWFQcm92aWRlciAvPlxuICAgICAgPEdlbmVyYXRlV2l0aENvbm5lY3RUb2RvTGlzdCAvPlxuICAgICAgPEdlbmVyYXRlV2l0aENvbm5lY3RBZGRUb2RvIC8+XG4gICAgICA8R2VuZXJhdGVXaXRoQ29ubmVjdEZvb3RlciAvPlxuICAgICAgPEV4dHJhY3RBY3Rpb25DcmVhdG9ycyAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    style: {
      maxWidth: '825px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    className: "jsx-1031074951"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__lessons_javascript_redux_the_single_immutable_state_tree_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__lessons_javascript_redux_describing_state_changes_with_actions_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__lessons_javascript_redux_pure_and_impure_functions_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__lessons_javascript_redux_the_reducer_function_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__lessons_javascript_redux_writing_a_counter_reducer_with_tests_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__lessons_javascript_redux_store_methods_getstate_dispatch_and_subscribe_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__lessons_javascript_redux_implementing_store_from_scratch_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__lessons_javascript_redux_react_counter_example_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__lessons_javascript_redux_avoiding_array_mutations_with_concat_slice_and_spread_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__lessons_javascript_redux_avoiding_object_mutations_with_object_assign_and_spread_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__lessons_javascript_redux_writing_a_todo_list_reducer_adding_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__lessons_javascript_redux_writing_a_todo_list_reducer_toggling_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__lessons_javascript_redux_reducer_composition_with_arrays_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__lessons_javascript_redux_reducer_composition_with_objects_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__lessons_javascript_redux_reducer_composition_with_combinereducers_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__lessons_javascript_redux_implementing_combinereducers_from_scratch_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__lessons_javascript_redux_react_todo_list_example_adding_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__lessons_javascript_redux_react_todo_list_example_toggling_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__lessons_javascript_redux_react_todo_list_example_filtering_todos_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__lessons_javascript_redux_extracting_presentational_components_todo_todolist_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__lessons_javascript_redux_extracting_container_components_filterlink_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__lessons_javascript_redux_extracting_container_components_filterlink_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25__lessons_javascript_redux_extracting_container_components_visibletodolist_addtodo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__lessons_javascript_redux_passing_the_store_down_explicitly_via_props_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__lessons_javascript_redux_passing_the_store_down_implicitly_via_context_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_28__lessons_javascript_redux_passing_the_store_down_with_provider_from_react_redux_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_29__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_visibletodolist_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_addtodo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_footerlink_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_32__lessons_javascript_redux_extracting_action_creators_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
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
//# sourceMappingURL=4.efe871fdfb3da9214f5c.hot-update.js.map