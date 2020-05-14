import React from 'react';

// import { withRouter } from 'react-router-dom';

import Project from './project/project.component';

import './portfolio.styles.scss';

// className "content-default" is in content.styles.scss

const projectsArr = [
    {
        title: 'TMDb-movie-search',
        stack: 'React, Redux, Styled-Components',
        summery: 'Search movies by title. React and Redux hands-on.',
        preview: ''
    },
    {
        title: 'Mountain-Travel',
        stack: 'HTML, CSS',
        summery: 'Imitating a template for flexbox hands-on.',
        preview: ''
    },
    {
        title: 'Temanei-Kineret',
        stack: 'Javascript, HTML, CSS, Bootstrap, ExpressJS',
        summery: 'Rebuilt an old website for better styling and made it responsive.',
        preview: ''
    },
    {
        title: 'Temanei-Kineret (React)',
        stack: 'React, Sass',
        summery: 'Early React project for practicing components and routing, and also for better perfomance.',
        preview: ''
    }

]

const Portfolio = (props) => {
    return(
        <div className="content-default">
        {projectsArr.map((project, idx) => <Project key={idx} project={project} />)}
        
        </div>
    )
};

export default (Portfolio);