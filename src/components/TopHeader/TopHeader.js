import React from 'react';
import './TopHeader.css';

const TopHeader = () => (
  <header className='top_header'>
    <a className='nav_logo' href='#'>
      Nav Logo
    </a>

    <div className='nav_links'>
      <ul className='nav' role='menu'>
        <li className='nav_link' role='menuitem'>
          <a href='/blog/'>Blog</a>
        </li>

        <li className='nav_link' role='menuitem'>
          <a href='/projects/'>Projects</a>
        </li>

        <li className='nav_link' role='menuitem'>
          <a href='/speaking/'>Speaking</a>
        </li>

        <li className='nav_link' role='menuitem'>
          <a href='/about/'>About</a>
        </li>

        <li className='nav_link' role='menuitem'>
          <a href='/contact/'>Contact</a>
        </li>
      </ul>
    </div>
  </header>
);

export default TopHeader;
