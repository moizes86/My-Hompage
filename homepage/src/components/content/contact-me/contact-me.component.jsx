import React from 'react';
import { connect } from 'react-redux';

import LinkExternal from '../../link-external/link-external.component';

import './contact-me.styles.scss';

// className "content-default" is in content.styles.scss

const ContactMe = ({ contacts }) => {
  return (
    <div className='content-default'>
      <div className='contact-me'>
        <h1> CONTACT ME</h1>
        <h3>Available For Hire And Cooperation :) </h3>
        <ul>
          {contacts.map((contact, idx) => (
            <li key={idx}>
              <LinkExternal
                type={contact.type}
                href={contact.href}
                icon={contact.icon}
                text={contact.text}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(ContactMe);
