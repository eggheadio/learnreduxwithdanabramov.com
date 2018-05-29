webpackHotUpdate(4,{

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

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
    className: "jsx-4089610084"
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
    className: "jsx-4089610084"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: "jsx-4089610084"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4089610084",
    css: "body{background:#000;font:11px menlo;color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDdUIsQUFHeUIsZ0JBQ0EsZ0JBQ0wsV0FDYiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9lbC9Db2RlL2VnZ2hlYWQvbGVhcm5yZWR1eHdpdGhkYW5hYnJhbW92LmNvbSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBTaW5nbGVJbW11dGFibGVUcmVlIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC10aGUtc2luZ2xlLWltbXV0YWJsZS1zdGF0ZS10cmVlLm1kJ1xuaW1wb3J0IFN0YXRlQ2hhbmdlc1dpdGhBY3Rpb25zIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1kZXNjcmliaW5nLXN0YXRlLWNoYW5nZXMtd2l0aC1hY3Rpb25zLm1kJ1xuaW1wb3J0IFB1cmVBbmRJbXB1cmVGdW5jdGlvbnMgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXB1cmUtYW5kLWltcHVyZS1mdW5jdGlvbnMubWQnXG5pbXBvcnQgUmVkdWNlckZ1bmN0aW9uIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC10aGUtcmVkdWNlci1mdW5jdGlvbi5tZCdcbmltcG9ydCBDb3VudGVyUmVkdWNlciBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtd3JpdGluZy1hLWNvdW50ZXItcmVkdWNlci13aXRoLXRlc3RzLm1kJ1xuaW1wb3J0IERpc3BhdGNoQW5kU3Vic2NyaWJlIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1zdG9yZS1tZXRob2RzLWdldHN0YXRlLWRpc3BhdGNoLWFuZC1zdWJzY3JpYmUubWQnXG5pbXBvcnQgSW1wbGVtZW50U3RvcmUgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LWltcGxlbWVudGluZy1zdG9yZS1mcm9tLXNjcmF0Y2gubWQnXG5pbXBvcnQgQ291bnRlckV4YW1wbGUgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXJlYWN0LWNvdW50ZXItZXhhbXBsZS5tZCdcbmltcG9ydCBBdm9pZGluZ0FycmF5TXV0YXRpb25zIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1hdm9pZGluZy1hcnJheS1tdXRhdGlvbnMtd2l0aC1jb25jYXQtc2xpY2UtYW5kLXNwcmVhZC5tZCdcbmltcG9ydCBBdm9pZGluZ09iamVjdE11dGF0aW9ucyBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtYXZvaWRpbmctb2JqZWN0LW11dGF0aW9ucy13aXRoLW9iamVjdC1hc3NpZ24tYW5kLXNwcmVhZC5tZCdcbmltcG9ydCBUb2RvTGlzdFJlZHVjZXJBZGRUb2RvIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC13cml0aW5nLWEtdG9kby1saXN0LXJlZHVjZXItYWRkaW5nLWEtdG9kby5tZCdcbmltcG9ydCBUb2RvTGlzdFJlZHVjZXJUb2dnbGVUb2RvIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC13cml0aW5nLWEtdG9kby1saXN0LXJlZHVjZXItdG9nZ2xpbmctYS10b2RvLm1kJ1xuaW1wb3J0IFJlZHVjZXJDb21wb3NpdGlvbkFycmF5cyBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtcmVkdWNlci1jb21wb3NpdGlvbi13aXRoLWFycmF5cy5tZCdcbmltcG9ydCBSZWR1Y2VyQ29tcG9zaXRpb25PYmplY3RzIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1yZWR1Y2VyLWNvbXBvc2l0aW9uLXdpdGgtb2JqZWN0cy5tZCdcbmltcG9ydCBSZWR1Y2VyQ29tcG9zaXRpb25Db21iaW5lIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1yZWR1Y2VyLWNvbXBvc2l0aW9uLXdpdGgtY29tYmluZXJlZHVjZXJzLm1kJ1xuaW1wb3J0IEltcGxlbWVudENvbWJpbmVSZWR1Y2VycyBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtaW1wbGVtZW50aW5nLWNvbWJpbmVyZWR1Y2Vycy1mcm9tLXNjcmF0Y2gubWQnXG5pbXBvcnQgQWRkVG9kbyBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtcmVhY3QtdG9kby1saXN0LWV4YW1wbGUtYWRkaW5nLWEtdG9kby5tZCdcbmltcG9ydCBUb2dnbGVUb2RvIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1yZWFjdC10b2RvLWxpc3QtZXhhbXBsZS10b2dnbGluZy1hLXRvZG8ubWQnXG5pbXBvcnQgRmlsdGVyaW5nVG9kb3MgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXJlYWN0LXRvZG8tbGlzdC1leGFtcGxlLWZpbHRlcmluZy10b2Rvcy5tZCdcbmltcG9ydCBFeHRyYWN0UHJlc2VudGF0aW9uYWxUb2RvTGlzdCBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtZXh0cmFjdGluZy1wcmVzZW50YXRpb25hbC1jb21wb25lbnRzLXRvZG8tdG9kb2xpc3QubWQnXG5pbXBvcnQgRXh0cmFjdFByZXNlbnRhdGlvbmFsRmlsdGVyTGluayBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtZXh0cmFjdGluZy1wcmVzZW50YXRpb25hbC1jb21wb25lbnRzLWFkZHRvZG8tZm9vdGVyLWZpbHRlcmxpbmsubWQnXG5pbXBvcnQgRXh0cmFjdENvbnRhaW5lckZpbHRlckxpbmsgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LWV4dHJhY3RpbmctY29udGFpbmVyLWNvbXBvbmVudHMtZmlsdGVybGluay5tZCdcbmltcG9ydCBFeHRyYWN0Q29udGFpbmVyQWRkVG9kbyBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtZXh0cmFjdGluZy1jb250YWluZXItY29tcG9uZW50cy12aXNpYmxldG9kb2xpc3QtYWRkdG9kby5tZCdcbmltcG9ydCBQYXNzU3RvcmVWaWFQcm9wcyBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtcGFzc2luZy10aGUtc3RvcmUtZG93bi1leHBsaWNpdGx5LXZpYS1wcm9wcy5tZCdcbmltcG9ydCBQYXNzU3RvcmVWaWFDb250ZXh0IGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1wYXNzaW5nLXRoZS1zdG9yZS1kb3duLWltcGxpY2l0bHktdmlhLWNvbnRleHQubWQnXG5pbXBvcnQgUGFzc1N0b3JlVmlhUHJvdmlkZXIgZnJvbSAnLi4vbGVzc29ucy9qYXZhc2NyaXB0LXJlZHV4LXBhc3NpbmctdGhlLXN0b3JlLWRvd24td2l0aC1wcm92aWRlci1mcm9tLXJlYWN0LXJlZHV4Lm1kJ1xuaW1wb3J0IEdlbmVyYXRlV2l0aENvbm5lY3RUb2RvTGlzdCBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtZ2VuZXJhdGluZy1jb250YWluZXJzLXdpdGgtY29ubmVjdC1mcm9tLXJlYWN0LXJlZHV4LXZpc2libGV0b2RvbGlzdC5tZCdcbmltcG9ydCBHZW5lcmF0ZVdpdGhDb25uZWN0QWRkVG9kbyBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtZ2VuZXJhdGluZy1jb250YWluZXJzLXdpdGgtY29ubmVjdC1mcm9tLXJlYWN0LXJlZHV4LWFkZHRvZG8ubWQnXG5pbXBvcnQgR2VuZXJhdGVXaXRoQ29ubmVjdEZvb3RlciBmcm9tICcuLi9sZXNzb25zL2phdmFzY3JpcHQtcmVkdXgtZ2VuZXJhdGluZy1jb250YWluZXJzLXdpdGgtY29ubmVjdC1mcm9tLXJlYWN0LXJlZHV4LWZvb3RlcmxpbmsubWQnXG5pbXBvcnQgRXh0cmFjdEFjdGlvbkNyZWF0b3JzIGZyb20gJy4uL2xlc3NvbnMvamF2YXNjcmlwdC1yZWR1eC1leHRyYWN0aW5nLWFjdGlvbi1jcmVhdG9ycy5tZCdcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgYm9keSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgIGZvbnQ6IDExcHggbWVubG87XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8ZGl2PlxuICAgICAgPFNpbmdsZUltbXV0YWJsZVRyZWUgLz5cbiAgICAgIDxTdGF0ZUNoYW5nZXNXaXRoQWN0aW9ucyAvPlxuICAgICAgPFB1cmVBbmRJbXB1cmVGdW5jdGlvbnMgLz5cbiAgICAgIDxSZWR1Y2VyRnVuY3Rpb24gLz5cbiAgICAgIDxDb3VudGVyUmVkdWNlciAvPlxuICAgICAgPERpc3BhdGNoQW5kU3Vic2NyaWJlIC8+XG4gICAgICA8SW1wbGVtZW50U3RvcmUgLz5cbiAgICAgIDxDb3VudGVyRXhhbXBsZSAvPlxuICAgICAgPEF2b2lkaW5nQXJyYXlNdXRhdGlvbnMgLz5cbiAgICAgIDxBdm9pZGluZ09iamVjdE11dGF0aW9ucyAvPlxuICAgICAgPFRvZG9MaXN0UmVkdWNlckFkZFRvZG8gLz5cbiAgICAgIDxUb2RvTGlzdFJlZHVjZXJUb2dnbGVUb2RvIC8+XG4gICAgICA8UmVkdWNlckNvbXBvc2l0aW9uQXJyYXlzIC8+XG4gICAgICA8UmVkdWNlckNvbXBvc2l0aW9uT2JqZWN0cyAvPlxuICAgICAgPFJlZHVjZXJDb21wb3NpdGlvbkNvbWJpbmUgLz5cbiAgICAgIDxJbXBsZW1lbnRDb21iaW5lUmVkdWNlcnMgLz5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgICA8VG9nZ2xlVG9kbyAvPlxuICAgICAgPEZpbHRlcmluZ1RvZG9zIC8+XG4gICAgICA8RXh0cmFjdFByZXNlbnRhdGlvbmFsVG9kb0xpc3QgLz5cbiAgICAgIDxFeHRyYWN0Q29udGFpbmVyRmlsdGVyTGluayAvPlxuICAgICAgPEV4dHJhY3RDb250YWluZXJGaWx0ZXJMaW5rIC8+XG4gICAgICA8RXh0cmFjdENvbnRhaW5lckFkZFRvZG8gLz5cbiAgICAgIDxQYXNzU3RvcmVWaWFQcm9wcyAvPlxuICAgICAgPFBhc3NTdG9yZVZpYUNvbnRleHQgLz5cbiAgICAgIDxQYXNzU3RvcmVWaWFQcm92aWRlciAvPlxuICAgICAgPEdlbmVyYXRlV2l0aENvbm5lY3RUb2RvTGlzdCAvPlxuICAgICAgPEdlbmVyYXRlV2l0aENvbm5lY3RBZGRUb2RvIC8+XG4gICAgICA8R2VuZXJhdGVXaXRoQ29ubmVjdEZvb3RlciAvPlxuICAgICAgPEV4dHJhY3RBY3Rpb25DcmVhdG9ycyAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    className: "jsx-4089610084"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__lessons_javascript_redux_the_single_immutable_state_tree_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__lessons_javascript_redux_describing_state_changes_with_actions_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__lessons_javascript_redux_pure_and_impure_functions_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__lessons_javascript_redux_the_reducer_function_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__lessons_javascript_redux_writing_a_counter_reducer_with_tests_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__lessons_javascript_redux_store_methods_getstate_dispatch_and_subscribe_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__lessons_javascript_redux_implementing_store_from_scratch_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__lessons_javascript_redux_react_counter_example_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__lessons_javascript_redux_avoiding_array_mutations_with_concat_slice_and_spread_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__lessons_javascript_redux_avoiding_object_mutations_with_object_assign_and_spread_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__lessons_javascript_redux_writing_a_todo_list_reducer_adding_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__lessons_javascript_redux_writing_a_todo_list_reducer_toggling_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__lessons_javascript_redux_reducer_composition_with_arrays_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__lessons_javascript_redux_reducer_composition_with_objects_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__lessons_javascript_redux_reducer_composition_with_combinereducers_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__lessons_javascript_redux_implementing_combinereducers_from_scratch_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_19__lessons_javascript_redux_react_todo_list_example_adding_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_20__lessons_javascript_redux_react_todo_list_example_toggling_a_todo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__lessons_javascript_redux_react_todo_list_example_filtering_todos_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_22__lessons_javascript_redux_extracting_presentational_components_todo_todolist_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__lessons_javascript_redux_extracting_container_components_filterlink_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_24__lessons_javascript_redux_extracting_container_components_filterlink_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_25__lessons_javascript_redux_extracting_container_components_visibletodolist_addtodo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_26__lessons_javascript_redux_passing_the_store_down_explicitly_via_props_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_27__lessons_javascript_redux_passing_the_store_down_implicitly_via_context_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_28__lessons_javascript_redux_passing_the_store_down_with_provider_from_react_redux_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_29__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_visibletodolist_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_30__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_addtodo_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_31__lessons_javascript_redux_generating_containers_with_connect_from_react_redux_footerlink_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_32__lessons_javascript_redux_extracting_action_creators_md__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
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
//# sourceMappingURL=4.8f6b6fb3d46b6ccfd82f.hot-update.js.map