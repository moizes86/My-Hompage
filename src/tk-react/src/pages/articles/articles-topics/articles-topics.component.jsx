import React from 'react';
import { withRouter } from 'react-router-dom';

const ArticlesTopics = ({ articlesArr, history, subtitle }) => {
  return (
    <ul className='ul-list-links'>
      {articlesArr.map((article, idx) => (
        <li
          key={idx}
          className='my-3 pl-3'
          onClick={() => history.push(article.linkUrl)}
        >
          {article.title}
          <br />
          <span> {article.subtitle}</span>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(ArticlesTopics);
