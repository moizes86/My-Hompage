import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './navbar.styles.scss';
import { Link, withRouter } from 'react-router-dom';

function NavbarMain({ history }) {
  const [expanded, setExpanded] = useState(false);
  const linksArr = [
    // { path: '', text: 'ראשי' },
    { path: 'history', text: 'היסטוריה' },
    { path: 'settlers-names', text: 'שמות המתיישבים' },
    { path: 'photos', text: 'תמונות' },
    { path: 'articles', text: 'מאמרים' },
    { path: 'links', text: 'קישורים' },
  ];
  return (
    <Navbar expand='md' expanded={expanded}>
      <div className='container text-center'>
        <Navbar.Brand>
          <li
            onClick={() => {
              setExpanded(false);
              history.push('/tk-react');
            }}
          >
            ראשי
          </li>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        >
          <div className='hamburgerIcon '></div>
          <div className='hamburgerIcon'></div>
          <div className='hamburgerIcon'></div>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {linksArr.map((link, idx) => (
              <Nav.Item key={idx}>
                <li
                  onClick={() => {
                    setExpanded(false);
                    history.push(`/tk-react/${link.path}`);
                  }}
                >
                  {link.text}
                </li>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default withRouter(NavbarMain);
