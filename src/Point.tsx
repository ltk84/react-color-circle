import React, { useCallback } from 'react';
import { SwatchRectRenderProps, SwatchProps } from '@uiw/react-color-swatch/esm/index';
import { useRef } from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DoNotDisturbOnRoundedIcon from '@mui/icons-material/DoNotDisturbOnRounded';

interface PointProps extends SwatchRectRenderProps {
  rectProps?: SwatchProps['rectProps'];
}

export default function Point({ style, title, checked, disabled, color, onClick, rectProps }: PointProps) {
  const btn = useRef<HTMLDivElement>(null);
  const handleMouseEnter = useCallback((evn) => {
    btn.current!.style['transform'] = 'scale(1.2)';
  }, []);

  const handleMouseLeave = useCallback((evn) => {
    btn.current!.style['transform'] = 'scale(1)';
  }, []);

  return (
    <div
      ref={btn}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={title}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        padding: 2,
        borderRadius: '50%',
        marginRight: 12,
        marginBottom: 12,
        boxSizing: 'border-box',
        transform: 'scale(1)',
        boxShadow: `${color} 0px 0px ${checked ? 5 : 0}px`,
        transition: 'transform 100ms ease 0s, box-shadow 100ms ease 0s',
      }}
    >
      { disabled ? 
        <DoNotDisturbOnRoundedIcon
          {...rectProps}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: '50%',
            boxSizing: 'border-box',
            transition: 'height 100ms ease 0s, width 100ms ease 0s',
            ...rectProps!.style,
          }}
        /> :
        <CheckCircleRoundedIcon
          {...rectProps}
          style={{
            height: checked ? '100%' : 0,
            width: checked ? '100%' : 0,
            borderRadius: '50%',
            boxSizing: 'border-box',
            transition: 'height 100ms ease 0s, width 100ms ease 0s',
            ...rectProps!.style,
          }}
        />
      }
    </div>
  );
}
