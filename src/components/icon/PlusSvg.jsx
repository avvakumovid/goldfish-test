import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlusSvg = ({ color, ...props }) => (
  <Svg
    width={26}
    height={26}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M16.688 12.728h-7.92M12.728 16.688v-7.92M6.364 19.092a8.963 8.963 0 0 1 0-12.728 8.963 8.963 0 0 1 12.728 0 8.963 8.963 0 0 1 0 12.728 8.963 8.963 0 0 1-12.728 0Z'
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default PlusSvg;
