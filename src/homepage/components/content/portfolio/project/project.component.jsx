import React from 'react';

import './project.styles.scss';

const Project = ({ project }) => {
  console.log(project);
  return (
    <div className='project-container'>
      <div className='project-container-preview'>PREVIEW</div>
      <div className='project-container-details'>
        <h1>{project.title}</h1>
        <h2>{project.stack}</h2>
        <p>{project.summery}</p>
      </div>
    </div>
  );
};

export default Project;
