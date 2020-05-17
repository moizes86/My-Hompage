import React from 'react';

// Used styled components for passing props
import { PreviewContainer ,Preview } from './project.styles';
import './project.styles.scss';

const Project = ({ project }) => {
  console.log(project);
  return (
    <div className='project-container'>
      <PreviewContainer thumbnail={project.thumbnail}>
        <Preview  gif={project.gif} alt='' />
      </PreviewContainer>
      <div className='project-container-details'>
        <h1>{project.title}</h1>
        <h2>{project.stack}</h2>
        <p>{project.summery}</p>
      </div>
    </div>
  );
};

export default Project;

// <img src={project.preview} alt='' />
