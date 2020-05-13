import React from 'react';
import { connect } from 'react-redux';

import IconLink from '../../icon-link/icon-link.component';

import './contact-me.styles.scss';

// className "content-background-color" is in content.styles.scss

const ContactMe = ({ contacts }) => {
  return (
    <div className='contact-me content-background-color'>
      <h1> CONTACT ME</h1>
      <h3>Available For Hire And Cooperation :) </h3>
      <ul>
        {contacts.map((contact, idx) => (
          <IconLink
            key={idx}
            type={contact.type}
            href={contact.href}
            icon={contact.icon}
            username={contact.username}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(ContactMe);
