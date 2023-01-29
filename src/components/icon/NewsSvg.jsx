import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const NewsSvg = ({ color, ...props }) => (
  <Svg
    width={21}
    height={19}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M17.4 18c1.1 0 2-.9 2-2v-6c0-.6-.4-1-1-1h-3v7c0 1.1.9 2 2 2ZM5.4 5h6M5.4 8.9h6M5.4 13.1h3'
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M15.4 9V2c0-.6-.4-1-1-1h-12c-.6 0-1 .4-1 1v14c0 1.1.9 2 2 2h14'
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default NewsSvg;
