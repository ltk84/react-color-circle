import _extends from "@babel/runtime/helpers/extends";
import React, { useCallback } from 'react';
import { useRef } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export default function Point(_ref) {
  var {
    style,
    title,
    checked,
    disabled,
    color,
    onClick,
    rectProps
  } = _ref;
  var btn = useRef(null);
  var handleMouseEnter = useCallback(evn => {
    btn.current.style['transform'] = 'scale(1.2)';
  }, []);
  var handleMouseLeave = useCallback(evn => {
    btn.current.style['transform'] = 'scale(1)';
  }, []);
  return /*#__PURE__*/_jsx("div", {
    ref: btn,
    onClick: disabled == null ? undefined : onClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    title: title,
    style: _extends({}, style, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      padding: 3,
      borderRadius: '50%',
      marginRight: 12,
      marginBottom: 12,
      boxSizing: 'border-box',
      transform: 'scale(1)',
      boxShadow: color + " 0px 0px " + (checked ? 5 : 0) + "px",
      transition: 'transform 100ms ease 0s, box-shadow 100ms ease 0s'
    }),
    children: /*#__PURE__*/_jsx("div", _extends({}, rectProps, {
      style: _extends({
        height: checked || disabled ? '100%' : 0,
        width: checked || disabled ? '100%' : 0,
        borderRadius: '50%',
        backgroundColor: disabled ? 'ffffff88' : '#fff',
        boxSizing: 'border-box',
        transition: 'height 100ms ease 0s, width 100ms ease 0s'
      }, rectProps.style)
    }))
  });
}
//# sourceMappingURL=Point.js.map