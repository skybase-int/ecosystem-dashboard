import React from 'react';

interface ChevronLeftProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const ChevronLeft = ({ fill = '#1AAB9B', width = 16, height = 16 }: ChevronLeftProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7705 3.21999C10.4645 2.92667 9.96831 2.92667 9.66229 3.21999L5.78361 6.93776L5.22951 7.46888C4.9235 7.7622 4.9235 8.23778 5.22951 8.5311L5.78361 9.06221L9.66229 12.78C9.96831 13.0733 10.4645 13.0733 10.7705 12.78C11.0765 12.4867 11.0765 12.0111 10.7705 11.7178L6.89181 7.99999L10.7705 4.28221C11.0765 3.98889 11.0765 3.51332 10.7705 3.21999Z"
        fill={fill}
      />
    </svg>
  );
};
