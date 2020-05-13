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

// <li>
//         <a href='mailto:moshe.mn86@gmail.com'>
//           <i className='fa fa-envelope'></i>
//         </a>
//       </li>
//       <li>
//         <a
//           href='https://www.linkedin.com/in/moshe-mantsur-33b340146/'
//           target='_blank'
//           rel='noreferrer noopener'
//         >
//           <i className='fa fa-linkedin-square'></i>
//         </a>
//       </li>
//       <li>
//         <a
//           href='https://github.com/moizes86'
//           target='_blank'
//           rel='noreferrer noopener'
//         >
//           <i className='fa fa-github-square'></i>
//         </a>
//       </li>
//       <li>
//         <a
//           href='https://www.facebook.com/moshe.mantsur/'
//           target='_blank'
//           rel='noreferrer noopener'
//         >
//           <i className='fa fa-facebook-square'></i>
//         </a>
//       </li>
