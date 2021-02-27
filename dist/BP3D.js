(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("BinPacking", [], factory);
	else if(typeof exports === 'object')
		exports["BinPacking"] = factory();
	else
		root["BinPacking"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Packer = exports.Item = exports.Bin = undefined;var _Bin = __webpack_require__(4);var _Bin2 = _interopRequireDefault(_Bin);
var _Item = __webpack_require__(6);var _Item2 = _interopRequireDefault(_Item);
var _Packer = __webpack_require__(19);var _Packer2 = _interopRequireDefault(_Packer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.

Bin = _Bin2.default;exports.Item = _Item2.default;exports.Packer = _Packer2.default;

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _Bin = __webpack_require__(4);var _Bin2 = _interopRequireDefault(_Bin);
var _Item = __webpack_require__(6);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var







Packer = function () {function Packer() {_classCallCheck(this, Packer);this.

    bins = [];this.
    items = [];this.
    unfitItems = [];}_createClass(Packer, [{ key: 'addBin', value: function addBin(

    bin) {
      this.bins.push(bin);
    } }, { key: 'addItem', value: function addItem(

    item) {
      this.items.push(item);
    } }, { key: 'findFittedBin', value: function findFittedBin(

    i) {
      for (var _i = 0; _i < this.bins.length; _i++) {
        var b = this.bins[_i];

        if (!b.weighItem(i) || !b.putItem(i, _Item.StartPosition)) {
          continue;
        }

        if (b.items.length === 1 && b.items[0] === i) {
          b.items = [];
        }

        return b;
      }
      return null;
    } }, { key: 'getBiggerBinThan', value: function getBiggerBinThan(

    b) {
      var v = b.getVolume();
      for (var _i = 0; _i < this.bins; _i++) {
        var b2 = this.bins[_i];
        if (b2.getVolume() > v) {
          return b2;
        }
      }
      return null;
    } }, { key: 'unfitItem', value: function unfitItem()

    {
      if (this.items.length === 0) {
        return;
      }
      this.unfitItems.push(this.items[0]);
      this.items.splice(0, 1);
    } }, { key: 'packToBin', value: function packToBin(

    b, items) {
      var b2 = null;
      var unpacked = [];
      var fit = b.weighItem(items[0]) && b.putItem(items[0], _Item.StartPosition);

      if (!fit) {
        var _b = this.getBiggerBinThan(b);
        if (_b) {
          return this.packToBin(_b, items);
        }
        return this.items;
      }

      // Pack unpacked items.
      for (var _i = 1; _i < this.items.length; _i++) {
        var fitted = false;
        var item = this.items[_i];

        if (b.weighItem(item)) {
          // Try available pivots in current bin that are not intersect with
          // existing items in current bin.
          lookup:
          for (var _pt = 0; _pt < 3; _pt++) {
            for (var _j = 0; _j < b.items.length; _j++) {
              var pv = void 0;
              var ib = b.items[_j];
              var d = ib.getDimension();
              switch (_pt) {
                case _Item.WidthAxis:
                  pv = [ib.position[0] + d[0], ib.position[1], ib.position[2]];
                  break;
                case _Item.HeightAxis:
                  pv = [ib.position[0], ib.position[1] + d[1], ib.position[2]];
                  break;
                case _Item.DepthAxis:
                  pv = [ib.position[0], ib.position[1], ib.position[2] + d[2]];
                  break;}


              if (b.putItem(item, pv)) {
                fitted = true;
                break lookup;
              }
            }
          }
        }

        if (!fitted) {
          while (b2 !== null) {
            b2 = this.getBiggerBinThan(b);
            if (b2) {
              b2.items.push(item);
              var left = this.packToBin(b2, b2.items);
              if (left.length === 0) {
                b = b2;
                fitted = true;
                break;
              }
            }
          }

          if (!fitted) {
            unpacked.push(item);
          }
        }
      }

      return unpacked;
    } }, { key: 'pack', value: function pack()

    {
      // Sort bins smallest to largest.
      this.bins.sort(function (a, b) {
        return a.getVolume() - b.getVolume();
      });

      // Sort items largest to smallest.
      this.items.sort(function (a, b) {
        return b.getVolume() - a.getVolume();
      });

      while (this.items.length > 0) {
        var bin = this.findFittedBin(this.items[0]);

        if (bin === null) {
          this.unfitItem();
          continue;
        }

        this.items = this.packToBin(bin, this.items);
      }

      return null;
    } }]);return Packer;}();exports.default = Packer;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _util = __webpack_require__(5);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var

Bin = function () {









  function Bin(name, w, h, d, mw) {_classCallCheck(this, Bin);this.name = '';this.width = 0;this.height = 0;this.depth = 0;this.maxWeight = 0;this.items = [];
    this.name = name;
    this.width = (0, _util.factoredInteger)(w);
    this.height = (0, _util.factoredInteger)(h);
    this.depth = (0, _util.factoredInteger)(d);
    this.maxWeight = (0, _util.factoredInteger)(mw);
  }_createClass(Bin, [{ key: 'getName', value: function getName()

    {
      return this.name;
    } }, { key: 'getWidth', value: function getWidth()

    {
      return this.width;
    } }, { key: 'getHeight', value: function getHeight()

    {
      return this.height;
    } }, { key: 'getDepth', value: function getDepth()

    {
      return this.depth;
    } }, { key: 'getMaxWeight', value: function getMaxWeight()

    {
      return this.maxWeight;
    } }, { key: 'getItems', value: function getItems()

    {
      return this.items;
    } }, { key: 'getVolume', value: function getVolume()

    {
      return this.getWidth() * this.getHeight() * this.getDepth();
    } }, { key: 'getPackedWeight', value: function getPackedWeight()

    {
      return this.items.reduce(function (weight, item) {return weight + item.getWeight();}, 0);
    } }, { key: 'weighItem', value: function weighItem(

    item) {
      var maxWeight = this.getMaxWeight();
      return !maxWeight || item.getWeight() + this.getPackedWeight() <= maxWeight;
    }

    /**
       * Calculate a score for a given item and rotation type.
       *
       * Scores are higher for rotations that closest match item dimensions to Bin dimensions.
       * For example, rotating the item so the longest side is aligned with the longest Bin side.
       *
       * Example (Bin is 11 x 8.5 x 5.5, Item is 8.1 x 5.2 x 5.2):
       *  Rotation 0:
       *    8.1 / 11  = 0.736
       *    5.2 / 8.5 = 0.612
       *    5.2 / 5.5 = 0.945
       *    -----------------
       *    0.736 ** 2 + 0.612 ** 2 + 0.945 ** 2 = 1.809
       *
       *  Rotation 1:
       *    8.1 / 8.5 = 0.953
       *    5.2 / 11 = 0.473
       *    5.2 / 5.5 = 0.945
       *    -----------------
       *    0.953 ** 2 + 0.473 ** 2 + 0.945 ** 2 = 2.025
       *
       * @param {Item} item
       * @param {int} rotationType
       * @return {float} score
       */ }, { key: 'scoreRotation', value: function scoreRotation(
    item, rotationType) {
      item.rotationType = rotationType;
      var d = item.getDimension();

      // If the item doesn't fit in the Bin
      if (this.getWidth() < d[0] || this.getHeight() < d[1] || this.getDepth() < d[2]) {
        return 0;
      }

      // Square the results to increase the impact of high values (e.g. > 0.8)
      var widthScore = Math.pow(d[0] / this.getWidth(), 2);
      var heightScore = Math.pow(d[1] / this.getHeight(), 2);
      var depthScore = Math.pow(d[2] / this.getDepth(), 2);

      return widthScore + heightScore + depthScore;
    }

    /**
       * Calculate the best rotation order for a given Item based on scoreRotation().
       *
       * @param {Item} item
       * @return {Array} Rotation types sorted by their score, DESC
       */ }, { key: 'getBestRotationOrder', value: function getBestRotationOrder(
    item) {
      var rotationScores = {};

      // Score all rotation types
      for (var i = 0; i < 6; i++) {
        rotationScores[i] = this.scoreRotation(item, i);
      }

      // Sort the rotation types (index of scores object) DESC
      // and ensure Int values (Object.keys returns strings)
      var sortedRotations = Object.keys(rotationScores).sort(function (a, b) {
        return rotationScores[b] - rotationScores[a];
      }).map(Number);

      return sortedRotations;
    } }, { key: 'putItem', value: function putItem(

    item, p) {
      var box = this;
      var fit = false;
      var rotations = this.getBestRotationOrder(item);
      item.position = p;

      for (var i = 0; i < rotations.length; i++) {
        item.rotationType = rotations[i];
        var d = item.getDimension();

        if (box.getWidth() < p[0] + d[0] || box.getHeight() < p[1] + d[1] || box.getDepth() < p[2] + d[2]) {
          continue;
        }

        fit = true;

        for (var j = 0; j < box.items.length; j++) {
          var _j = box.items[j];
          if (_j.intersect(item)) {
            fit = false;
            break;
          }
        }

        if (fit) {
          box.items.push(item);
          return fit;
        }
      }

      return fit;
    } }]);return Bin;}();exports.default = Bin;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true }); /**
                                                                             * Precision to retain in factoredInteger()
                                                                             */
var FACTOR = 5;

/**
                 * Factor a number by FACTOR and round to the nearest whole number
                 */
var factoredInteger = exports.factoredInteger = function factoredInteger(value) {return (
    Math.round(value * 10 ** FACTOR));};

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.rectIntersect = exports.RotationTypeStrings = exports.StartPosition = exports.DepthAxis = exports.HeightAxis = exports.WidthAxis = exports.RotationType_WDH = exports.RotationType_DWH = exports.RotationType_DHW = exports.RotationType_HDW = exports.RotationType_HWD = exports.RotationType_WHD = undefined;var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _RotationTypeStrings;var _util = __webpack_require__(5);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var RotationType_WHD = exports.RotationType_WHD = 0;
var RotationType_HWD = exports.RotationType_HWD = 1;
var RotationType_HDW = exports.RotationType_HDW = 2;
var RotationType_DHW = exports.RotationType_DHW = 3;
var RotationType_DWH = exports.RotationType_DWH = 4;
var RotationType_WDH = exports.RotationType_WDH = 5;

var WidthAxis = exports.WidthAxis = 0;
var HeightAxis = exports.HeightAxis = 1;
var DepthAxis = exports.DepthAxis = 2;

var StartPosition = exports.StartPosition = [0, 0, 0];

var RotationTypeStrings = exports.RotationTypeStrings = (_RotationTypeStrings = {}, _defineProperty(_RotationTypeStrings,
RotationType_WHD, 'RotationType_WHD (w,h,d)'), _defineProperty(_RotationTypeStrings,
RotationType_HWD, 'RotationType_HWD (h,w,d)'), _defineProperty(_RotationTypeStrings,
RotationType_HDW, 'RotationType_HDW (h,d,w)'), _defineProperty(_RotationTypeStrings,
RotationType_DHW, 'RotationType_DHW (d,h,w)'), _defineProperty(_RotationTypeStrings,
RotationType_DWH, 'RotationType_DWH (d,w,h)'), _defineProperty(_RotationTypeStrings,
RotationType_WDH, 'RotationType_WDH (w,d,h)'), _RotationTypeStrings);var


Item = function () {








  // x, y, z

  function Item(name, w, h, d, wg) {_classCallCheck(this, Item);this.name = '';this.width = 0;this.height = 0;this.depth = 0;this.weight = 0;this.rotationType = RotationType_WHD;this.position = [];
    this.name = name;
    this.width = (0, _util.factoredInteger)(w);
    this.height = (0, _util.factoredInteger)(h);
    this.depth = (0, _util.factoredInteger)(d);
    this.weight = (0, _util.factoredInteger)(wg);
  }_createClass(Item, [{ key: 'getWidth', value: function getWidth()

    {
      return this.width;
    } }, { key: 'getHeight', value: function getHeight()

    {
      return this.height;
    } }, { key: 'getDepth', value: function getDepth()

    {
      return this.depth;
    } }, { key: 'getWeight', value: function getWeight()

    {
      return this.weight;
    } }, { key: 'getRotationType', value: function getRotationType()

    {
      return this.rotationType;
    } }, { key: 'getRotationTypeString', value: function getRotationTypeString()

    {
      return RotationTypeStrings[this.getRotationType()];
    } }, { key: 'getDimension', value: function getDimension()

    {
      var d = void 0;
      switch (this.rotationType) {
        case RotationType_WHD:
          d = [this.getWidth(), this.getHeight(), this.getDepth()];
          break;
        case RotationType_HWD:
          d = [this.getHeight(), this.getWidth(), this.getDepth()];
          break;
        case RotationType_HDW:
          d = [this.getHeight(), this.getDepth(), this.getWidth()];
          break;
        case RotationType_DHW:
          d = [this.getDepth(), this.getHeight(), this.getWidth()];
          break;
        case RotationType_DWH:
          d = [this.getDepth(), this.getWidth(), this.getHeight()];
          break;
        case RotationType_WDH:
          d = [this.getWidth(), this.getDepth(), this.getHeight()];
          break;}

      return d;
    } }, { key: 'intersect', value: function intersect(

    i2) {
      return rectIntersect(this, i2, WidthAxis, HeightAxis) &&
      rectIntersect(this, i2, HeightAxis, DepthAxis) &&
      rectIntersect(this, i2, WidthAxis, DepthAxis);
    } }, { key: 'getVolume', value: function getVolume()

    {
      return this.getWidth() * this.getHeight() * this.getDepth();
    } }]);return Item;}();exports.default = Item;


var rectIntersect = exports.rectIntersect = function rectIntersect(i1, i2, x, y) {
  var d1 = void 0,d2 = void 0,cx1 = void 0,cy1 = void 0,cx2 = void 0,cy2 = void 0,ix = void 0,iy = void 0;

  d1 = i1.getDimension();
  d2 = i2.getDimension();

  cx1 = i1.position[x] + d1[x] / 2;
  cy1 = i1.position[y] + d1[y] / 2;
  cx2 = i2.position[x] + d2[x] / 2;
  cy2 = i2.position[y] + d2[y] / 2;

  ix = Math.max(cx1, cx2) - Math.min(cx1, cx2);
  iy = Math.max(cy1, cy2) - Math.min(cy1, cy2);

  return ix < (d1[x] + d2[x]) / 2 && iy < (d1[y] + d2[y]) / 2;
};

/***/ })

/******/ });
});