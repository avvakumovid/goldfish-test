import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DotsSvg = ({ color, ...props }) => (
  <Svg
    width={20}
    height={6}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M15 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM8 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z'
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default DotsSvg;
