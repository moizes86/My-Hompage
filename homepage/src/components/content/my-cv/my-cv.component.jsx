import React from 'react';

import { ReactComponent as SvgCSS } from '../../../assets/cv-skills-SVGs/css.svg';
import { ReactComponent as SvgHTML } from '../../../assets/cv-skills-SVGs/html5.svg';
import { ReactComponent as SvgJS } from '../../../assets/cv-skills-SVGs/js.svg';
import { ReactComponent as SvgNPM } from '../../../assets/cv-skills-SVGs/Npm-logo.svg';
import { ReactComponent as SvgReact } from '../../../assets/cv-skills-SVGs/react.svg';
import { ReactComponent as SvgBootstrap } from '../../../assets/cv-skills-SVGs/bootstrap.svg';

import './my-cv.styles.scss';

const MyCV = () => {
  return (
    // className "content-default" is in content.styles.scss
    <div className='content-default'>
      <div className='content-cv'>
        <div className='download'>
          <a href='/CV- Moshe Mantsur.pdf' download>
            Full Version (PDF)
          </a>
        </div>
        <div className='topic'>
        <h1>Summary</h1>
        <p>Looking for my first job as a <b>front-end developer</b>. Main stack is Javascript and React. Learned independently via online courses. </p>
          <h1>Education</h1>
          <p>
            <b>2014: </b>
            Bachelor of <u>Middle Eastern Studies</u> (major track) and{' '}
            <u>State of Israel Studies</u> at <b>Ben-Gurion University</b>, GPA
            90.6.
          </p>
        </div>

        <div className='topic'>
          <h1>Military Service</h1>
          <p>
            <b>2005-2008: </b>
            PC Technician, Head of <b>App and Hardware</b> team in the computers
            department of the <u>371 unit of communications</u> in the northern
            command.
          </p>
        </div>

        <div className='topic topic-skills'>
          <h1>Skills</h1>
          <ul>
            <li>
              <SvgHTML className='icon-svg' />
            </li>
            <li>
              <SvgCSS className='icon-svg' />
            </li>
            <li>
              <SvgJS className='icon-svg' />
            </li>
            <li>
              <SvgNPM className='icon-svg' />
            </li>
            <li>
              <SvgReact className='icon-svg' />
            </li>
            <li>
              <SvgBootstrap className='icon-svg' />
            </li>
          </ul>
        </div>

        {/*
        <div className='topic topic-list'>
          <h1>Other </h1>
          <ul>
            <li>Self-Taught</li>
            <li>Team Player</li>
          </ul>
        </div>

        <div className='topic topic-list'>
          <h1>Hobbies and Interests</h1>
          <ul>
            <li>Guitar</li>
            <li>Boxing</li>
            <li>Dog Owner</li>
            <li>History</li>
            <li>Middle East</li>
          </ul>
        </div> */}
        <div className='download'>
          <a href='/CV- Moshe Mantsur.pdf' download>
             Full Version (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyCV;
