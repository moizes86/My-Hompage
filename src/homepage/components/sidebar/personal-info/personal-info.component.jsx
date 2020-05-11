import React from 'react';
import myPhoto from '../../../assets/my-photo.jpg';
import { withRouter } from 'react-router-dom';
import './personal-info.styles.scss';

const PersonalInfo = ({history, match}) => {
  // console.log(props);
  return (
    <div className='personal-info'>
      <div className="sidebar-link" onClick={()=> history.push(`${match.url}/introduction`)}>
        <img src={myPhoto} alt='' />
        <h1>MOSHE MANTSUR</h1>
        <h2>JUNIOR FRONT-END DEVELOPER</h2>
      </div>
    </div>
  );
};

export default withRouter(PersonalInfo);
