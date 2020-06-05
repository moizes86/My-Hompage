import React, { useState } from 'react';
import './navbar.styles.scss';

const Navbar = ({ imgLogoURL }) => {
  const [navbarShown, setNavbarShown] = useState(false);

  return (
    <nav>
      <ul className='global-trekking-navbar'>
        <div className='website-logo'>
          <li>
            {' '}
            <a href='#/'>
            <img src={imgLogoURL} alt='' />{' '}
            </a>
          </li>
        </div>
        <div className={`li-items ${navbarShown ? 'show' : ''}`}>
          <li>
            <a href='#about-us'>
              About Us
            </a>
          </li>
          <li>
            <a href='#upcoming-tours'>
              Upcoming Tours
            </a>
          </li>
          <li>
            <a href='#reviews' >
              Reviews
            </a>
          </li>
          <li>
            <a href='#subscribe' >
              Updates And Offers
            </a>
          </li>
        </div>
        <div className='hamburger' onClick={() => setNavbarShown(!navbarShown)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
