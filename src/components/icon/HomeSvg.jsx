import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeSvg = ({ color, ...props }) => (
  <Svg
    width={22}
    height={20}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M3 6.6V19h16V6.6'
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='m1 8 10-7 10 7M14 19v-6c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v6'
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default HomeSvg;
