import React from 'react';

import IconLink from '../../../icon-link/icon-link.component';


// Used styled components for passing props
import { PreviewContainer, Preview } from './project.styles';
import './project.styles.scss';

const Project = ({ project, contact }) => {
  console.log(contact);
  return (
    <div className='project-container'>
      <PreviewContainer thumbnail={project.thumbnail}>
        <Preview gif={project.gif} alt='' />
      </PreviewContainer>
      <div className='project-container-details'>
        <h1>{project.title}</h1>
        <h2>{project.stack}</h2>
        <p>{project.summery}</p>
 
      </div>
    </div>
  );
};


export default (Project);

// <ul>
// <IconLink href={contact.href} icon={contact.icon} />
// </ul>