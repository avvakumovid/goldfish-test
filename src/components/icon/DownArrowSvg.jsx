import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownArrowSvg = ({ color, ...props }) => (
  <Svg
    width={10}
    height={6}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='m1 1 4 4 4-4'
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default DownArrowSvg;
