import React from 'react';

// import { withRouter } from 'react-router-dom';

import Project from './project/project.component';

import TK_Gif from '../../../assets/preview-gifs/tk.gif';
import TK_Thumbnail from '../../../assets/preview-thumbnails/tk.jpg';
import TK_React_Gif from '../../../assets/preview-gifs/tk-react.gif';
import TMDb_Gif from '../../../assets/preview-gifs/tmdb-movies-search.gif';
import TMDb_Thumbnail from '../../../assets/preview-thumbnails/tmdb.PNG';

import './portfolio.styles.scss';

// className "content-default" is in content.styles.scss

const projectsArr = [
    {
        title: 'TMDb-movie-search',
        stack: 'React, Redux, Styled-Components',
        summery: 'Search movies by title. React and Redux hands-on.',
        gif: TMDb_Gif,
        thumbnail: TMDb_Thumbnail
    },
    {
        title: 'Mountain-Travel',
        stack: 'HTML, CSS',
        summery: 'Imitating a template for flexbox hands-on.',
        gif: '',
        thumbnail:' ',
    },
    {
        title: 'Temanei-Kineret',
        stack: 'Javascript, HTML, CSS, Bootstrap, ExpressJS',
        summery: 'Rebuilt an old website for better styling and made it responsive.',
        gif: TK_Gif,
        thumbnail:TK_Thumbnail,
    },
    {
        title: 'Temanei-Kineret (React)',
        stack: 'React, Sass',
        summery: 'Early React project for practicing components and routing, and also for better perfomance.',
        gif: TK_React_Gif,
        thumbnail: TK_Thumbnail,
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