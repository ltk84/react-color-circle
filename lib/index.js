"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _colorConvert = require("@uiw/color-convert");
var _index = _interopRequireDefault(require("@uiw/react-color-swatch/esm/index"));
var _Point = _interopRequireDefault(require("./Point"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["prefixCls", "className", "color", "colors", "rectProps", "onChange"];
var Circle = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'w-color-circle' : _props$prefixCls,
    className = props.className,
    color = props.color,
    _props$colors = props.colors,
    colors = _props$colors === void 0 ? [] : _props$colors,
    _props$rectProps = props.rectProps,
    rectProps = _props$rectProps === void 0 ? {} : _props$rectProps,
    _onChange = props.onChange,
    other = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var hsva = typeof color === 'string' && (0, _colorConvert.validHex)(color) ? (0, _colorConvert.hexToHsva)(color) : color || {};
  var hex = color ? (0, _colorConvert.hsvaToHex)(hsva) : '';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index["default"], (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
    ref: ref,
    colors: colors,
    color: hex
  }, other), {}, {
    className: [prefixCls, className].filter(Boolean).join(' '),
    rectRender: function rectRender(_ref) {
      var props = (0, _extends2["default"])({}, ((0, _objectDestructuringEmpty2["default"])(_ref), _ref));
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Point["default"], (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, props), {}, {
        rectProps: rectProps
      }));
    },
    onChange: function onChange(hsvColor) {
      _onChange && _onChange((0, _colorConvert.color)(hsvColor));
    }
  }));
});
Circle.displayName = 'Circle';
var _default = Circle;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=index.js.map