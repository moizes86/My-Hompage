import React from 'react';

const IconLink = ({ href, icon, type, username }) => {
  return (
    <li>
      <p>
        {type ? `${type}:` : null}{' '}
        <a href={href} target='_blank' rel='noreferrer noopener'>
          <i className={icon}></i>
          { username}
        </a>
      </p>
    </li>
  );
};

export default IconLink;
