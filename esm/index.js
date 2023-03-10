import _objectDestructuringEmpty from "@babel/runtime/helpers/objectDestructuringEmpty";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["prefixCls", "className", "color", "colors", "rectProps", "onChange"];
import React from 'react';
import { validHex, hsvaToHex, hexToHsva, color as handleColor } from '@uiw/color-convert';
import Swatch from '@uiw/react-color-swatch/esm/index';
import Point from './Point';
import { jsx as _jsx } from "react/jsx-runtime";
var Circle = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-circle',
      className,
      color,
      colors = [],
      rectProps = {},
      onChange: _onChange
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  var hsva = typeof color === 'string' && validHex(color) ? hexToHsva(color) : color || {};
  var hex = color ? hsvaToHex(hsva) : '';
  return /*#__PURE__*/_jsx(Swatch, _extends({
    ref: ref,
    colors: colors,
    color: hex
  }, other, {
    className: [prefixCls, className].filter(Boolean).join(' '),
    rectRender: _ref => {
      var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
      return /*#__PURE__*/_jsx(Point, _extends({}, props, {
        rectProps: rectProps
      }));
    },
    onChange: hsvColor => {
      _onChange && _onChange(handleColor(hsvColor));
    }
  }));
});
Circle.displayName = 'Circle';
export default Circle;
//# sourceMappingURL=index.js.map