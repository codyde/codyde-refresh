"use client"

import { TypeAnimation } from 'react-type-animation';

const HeaderText = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hello, My name is Cody 👋",
        500,
      ]}
      wrapper="span"
      speed={5}
      className='text-4xl md:text-6xl font-bold text-orange-600 pt-4 lg:pt-0'
      style={{ display: 'inline-block' }}
    //   repeat={Infinity}
    />
  );
};

export default HeaderText