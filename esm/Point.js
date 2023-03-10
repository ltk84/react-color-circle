import _extends from "@babel/runtime/helpers/extends";
import React, { useCallback } from 'react';
import { useRef } from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';
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
    if (!disabled) {
      btn.current.style['transform'] = 'scale(1.2)';
    }
  }, []);
  var handleMouseLeave = useCallback(evn => {
    if (!disabled) {
      btn.current.style['transform'] = 'scale(1)';
    }
  }, []);
  return /*#__PURE__*/_jsx("div", {
    ref: btn,
    onClick: onClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    title: title,
    style: _extends({}, style, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      padding: 1.5,
      borderRadius: '50%',
      marginRight: 12,
      marginBottom: 12,
      boxSizing: 'border-box',
      transform: 'scale(1)',
      boxShadow: color + " 0px 0px " + (checked ? 5 : 0) + "px",
      transition: 'transform 100ms ease 0s, box-shadow 100ms ease 0s'
    }),
    children: disabled ? /*#__PURE__*/_jsx(DoNotDisturbOnRoundedIcon, _extends({}, rectProps, {
      color: "#dedede",
      style: _extends({
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        boxSizing: 'border-box',
        transition: 'height 100ms ease 0s, width 100ms ease 0s'
      }, rectProps.style)
    })) : /*#__PURE__*/_jsx(CheckCircleRoundedIcon, _extends({}, rectProps, {
      color: "#fff",
      style: _extends({
        height: checked ? '100%' : 0,
        width: checked ? '100%' : 0,
        borderRadius: '50%',
        boxSizing: 'border-box',
        transition: 'height 100ms ease 0s, width 100ms ease 0s'
      }, rectProps.style)
    }))
  });
}
//# sourceMappingURL=Point.js.map