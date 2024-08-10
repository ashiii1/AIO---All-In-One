import React from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <a href='https://codiest.co' target={'_blank'} rel={'noreferrer'}>
        <h1 className='text-3xl lg:text-[28px] font-semibold leading-none'>
            <span className='text-violet-700'>CODIEST</span> ESTATE
        </h1>
      </a>
        {/* <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
