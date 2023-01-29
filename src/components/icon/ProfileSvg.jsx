import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileSvg = ({ color, ...props }) => (
  <Svg
    width={20}
    height={20}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M17 19H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2Z'
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M10 11.4a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM15.4 16c-.2-.4-.5-.8-.8-1.2-.6-.6-1.4-.9-2.2-.9H7.6c-.8 0-1.6.3-2.2.9-.4.3-.6.7-.8 1.2'
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default ProfileSvg;
