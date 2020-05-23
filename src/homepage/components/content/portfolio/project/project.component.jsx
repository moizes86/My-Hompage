import React from 'react';

import LinkInternal from '../../../link-internal/link-internal.component';
import LinkExternal from '../../../link-external/link-external.component';

// Used styled components for passing props
import { PreviewContainer, Preview } from './project.styles';
import './project.styles.scss';

const Project = ({ project }) => {
  return (
    <div className='project-container'>
      <PreviewContainer thumbnail={project.thumbnail}>
        <Preview gif={project.gif} alt='' />
        {project.external ? (
          <LinkExternal href={project.linkURL} text={project.title} />
        ) : (
          <LinkInternal section={project.linkURL} text={project.title} />
        )}
      </PreviewContainer>
      <div className='project-container-details'>
        <h1>
          {project.external ? (
            <LinkExternal href={project.linkURL} text={project.title} />
          ) : (
            <LinkInternal section={project.linkURL} text={project.title} />
          )}
        </h1>
        <h2>{project.stack}</h2>
        <p>{project.summary}</p>
      </div>
    </div>
  );
};

export default Project;
