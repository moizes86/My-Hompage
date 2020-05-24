import React from 'react';

import { connect } from 'react-redux';

import LinkExternal from '../../link-external/link-external.component';

import './get-in-touch.styles.scss';

const GetInTouch = ({ contacts }) => {
  return (
    <div className='get-in-touch'>
      <ul>
        {contacts.map((contact, idx) => (
          <li key={idx}>
            <LinkExternal  href={contact.href} icon={contact.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(GetInTouch);
