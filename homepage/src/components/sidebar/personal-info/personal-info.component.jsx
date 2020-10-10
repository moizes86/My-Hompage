import React from 'react';
import { withRouter } from 'react-router-dom';

import myPhoto from '../../../assets/my-photo.jpg';
import './personal-info.styles.scss';

const PersonalInfo = ({ history }) => {
  return (
    <div className='personal-info'>
      <div onClick={() => history.push(`/`)}>
        <img src={myPhoto} alt='' />
        <h1>MOSHE MANTSUR</h1>
        <h2>FRONT-END DEVELOPER</h2>
      </div>
    </div>
  );
};

export default withRouter(PersonalInfo);
