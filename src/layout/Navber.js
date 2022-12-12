import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className='flex bg-white mx-auto h-8  max-w-lg  rounded-full pr-3'>
              <input
                className='h-8 rounded-full  text-sm border-0 focus:ring-0 outline-none'
                type='text'
                name='search'
                id='search'
              />
              <button>
              <i className="fa-brands fa-searchengin"></i>
              </button>
            </li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topRated'>Top Rated</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Moon Tech</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        <li className='flex bg-white mx-auto h-8  max-w-lg  rounded-full pr-3'>
          <input
            className='h-8 rounded-full  text-sm border-0 focus:ring-0 outline-none'
            type='text'
            name='search'
            id='search'
          />
          <button>
          <i className="fa-brands fa-searchengin"></i>
          </button>
        </li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/top-rated'>Top Rated</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/dashboard'>Dashboard</Link></li>

        </ul>
      </div>
      <div className="navbar-end text-2xl px-3">
        <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
        <i className="fa-regular fa-square-check mx-3"></i>

      </div>
    </div>
  );
};

export default Navber;