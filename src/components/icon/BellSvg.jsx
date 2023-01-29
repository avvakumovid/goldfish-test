import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BellSvg = ({ color, isInfo, ...props }) => (
  <Svg
    width={17}
    height={19}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M9.6 18H6.4M13 7c0-2.8-2.2-5-5-5S3 4.2 3 7v2.5c0 .3-.2.6-.5.8l-.5.3c-.6.3-1 1-1 1.7 0 1 .8 1.9 1.9 1.9h10.3c1 0 1.9-.8 1.9-1.9 0-.7-.4-1.3-1-1.7l-.5-.3c-.3-.1-.5-.4-.5-.8V7H13Z'
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    {isInfo && (
      <Path d='M13.5 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z' fill='#FA4D23' />
    )}
  </Svg>
);

export default BellSvg;
