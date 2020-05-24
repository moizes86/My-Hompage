import React from 'react';

import { connect } from 'react-redux';
import Project from './project/project.component';



import './portfolio.styles.scss';

// className "content-default" is in content.styles.scss


const Portfolio = ({projects}) => {
  return (
    <div className='content-default portfolio'>
      {projects.map((project, idx) => (
        <Project key={idx} project={project} />
      ))}
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Portfolio);
