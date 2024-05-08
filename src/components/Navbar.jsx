import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({
  setquery,
  setCategory,
  Category,
  setSelectedField,
  selectedField,
}) => {
  let x;
  return (
    <div>
      <nav className='flex  justify-between bg-amber-100 h-20 items-center'>
        <ul className='flex'>
          <li className={`text-xl mr-5 `}>
            <Link to='/'>News</Link>
          </li>
          <li
            className={`text-xl mr-5 ${
              Category === 'general' ? 'underline decoration-black' : ''
            }`}
            onClick={() => {
              setCategory('general');
            }}
          >
            <Link to='/'>Home</Link>
          </li>
          <li
            className={`text-xl mr-5 ${
              Category === 'business' ? 'underline decoration-black' : ''
            }`}
            onClick={() => {
              setCategory('business');
            }}
          >
            <Link to='/business'>Business</Link>
          </li>
          <li
            className={`text-xl mr-5 ${
              Category === 'entertainment' ? 'underline decoration-black' : ''
            }`}
            onClick={() => {
              setCategory('entertainment');
            }}
          >
            <Link to='/entertainment'>Entertainment</Link>
          </li>

          <li
            className={`text-xl mr-5 ${
              Category === 'health' ? 'underline decoration-black' : ''
            }`}
            onClick={() => {
              setCategory('health');
            }}
          >
            <Link to='/health'>Health</Link>
          </li>
          <li
            className={`text-xl mr-5 ${
              Category === 'science' ? 'underline decoration-black' : ''
            }`}
            onClick={() => {
              setCategory('science');
            }}
          >
            <Link to='/science'>Science</Link>
          </li>
          <li
            className={`text-xl mr-5 ${
              Category === 'sports' ? 'underline decoration-black' : ''
            }`}
            onClick={() => {
              setCategory('sports');
            }}
          >
            <Link to='/sports'>Sports</Link>
          </li>
          <li
            className={`text-xl mr-5 ${
              Category === 'technology' ? 'underline decoration-black' : ''
            }`}
            onClick={() => {
              setCategory('technology');
            }}
          >
            <Link to='/technology'>Technology</Link>
          </li>
        </ul>
        <div className='mr-5 '>
          <input
            className='w-[500px] h-10 '
            type='text'
            placeholder='Search by Source'
            onChange={(e) => {
              setquery(e.target.value);
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
