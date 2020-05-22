import React from 'react';

import { connect } from 'react-redux';

import IconLink from '../../icon-link/icon-link.component';

import './get-in-touch.styles.scss';

const GetInTouch = ({ contacts }) => {
  return (
    <div className='get-in-touch'>
      <ul>
        {contacts.map((contact, idx) => (
          <IconLink key={idx} href={contact.href} icon={contact.icon} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(GetInTouch);

