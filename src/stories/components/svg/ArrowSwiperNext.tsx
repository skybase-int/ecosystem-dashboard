import styled from '@emotion/styled';
import { useThemeContext } from '@ses/core/context/ThemeContext';
import * as React from 'react';

interface Props {
  width?: number;
  height?: number;
  fill?: string;
  fillCircle?: string;
  fillCircleDark?: string;
  fillDark?: string;
  onClick?: () => void;
  navigationNextRef?: React.LegacyRef<SVGSVGElement>;
  isDisable?: boolean;
}

const ArrowSwiperNext: React.FC<Props> = ({
  fillCircle = '#fff',
  height = 40,
  width = 40,
  fill = '#D4D9E1',
  fillDark = '#D2D4EF',
  fillCircleDark = '#787A9B',
  onClick,
  navigationNextRef,
  isDisable = false,
  ...props
}) => {
  const { isLight } = useThemeContext();
  return (
    <StyledSvg
      isDisable={isDisable}
      ref={navigationNextRef}
      isLight={isLight}
      cursor={isDisable ? 'default' : 'pointer'}
      onClick={onClick}
      width={width}
      height={height}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.6} filter="url(#filter0_d_17842_226007)">
        <circle
          cx={32}
          cy={32}
          r={32}
          transform="matrix(-1 0 0 1 70 0)"
          fill={isLight ? (isDisable ? '#FFFFFF' : fillCircle) : isDisable ? 'rgb(120, 122, 155,0.3)' : fillCircleDark}
        />
      </g>
      <path
        opacity={0.8}
        d="M56.336 33.73c1.333-.77 1.333-2.694 0-3.463l-26-15.011c-1.333-.77-3 .192-3 1.732V47.01c0 1.54 1.667 2.502 3 1.732l26-15.011z"
        fill={isLight ? (isDisable ? 'rgb(212, 217, 225,0.3)' : fill) : isDisable ? 'rgb(210, 212, 239,0.2)' : fillDark}
      />
      <defs>
        <filter
          id="filter0_d_17842_226007"
          x={0}
          y={0}
          width={76}
          height={76}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation={3} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.458824 0 0 0 0 0.458824 0 0 0 0 0.458824 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_17842_226007" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_17842_226007" result="shape" />
        </filter>
      </defs>
    </StyledSvg>
  );
};

export default ArrowSwiperNext;

const StyledSvg = styled.svg<{ isLight: boolean; isDisable: boolean }>(({ isLight, isDisable }) => ({
  ...(!isDisable && {
    '&:hover circle': {
      fill: isLight ? 'rgba(231, 252, 250, 0.6)' : '#139D8D',
    },
  }),
  ...(!isDisable && {
    '&:hover path': {
      fill: isLight ? '#9FAFB9' : '#2DC1B1',
    },
  }),
  ...(!isDisable && {
    ':active circle': {
      fill: isLight ? '#E7FCFA' : '#027265',
    },
  }),
  ...(!isDisable && {
    ':active path': {
      fill: isLight ? '#9FAFB9' : '#1AAB9B',
    },
  }),
}));
