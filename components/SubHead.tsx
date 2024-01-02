"use client"

import { TypeAnimation } from 'react-type-animation';

const SubHead = () => {
  return (
    <TypeAnimation
      sequence={[
        "I'm a builder, marketer, husband, father, friend, and frequent BBQ cooker",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
      ]}
      wrapper="span"
      speed={25}
      className='text-lg md:text-2xl font-semilight  pt-4  pb-8'
      style={{ display: 'inline-block' }}
    //   repeat={Infinity}
    />
  );
};

export default SubHead