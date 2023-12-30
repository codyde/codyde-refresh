
import Link from 'next/link';
import { FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <div 
    
    className="flex absolute top-10 w-full text-white justify-between">
        <Link href="/">
          <div className="flex items-center ml-16 text-white">
            <FaLaptopCode size={30} />
            <p className="text-2xl font-semibold ml-2 uppercas">
              Cody De Arkland
            </p>
           
          </div>
          </Link>
          <div className="flex flex-row mr-16 text-2xl space-x-4 text-white">
            <p>About</p>
            <Link className="text-white" href='/blog'>Blog</Link>
            <p>BBQ</p>
            <a className="text-white" href="https://github.com/codyde">GitHub</a>
          </div>
        </div>
  );
};

export default Nav;
