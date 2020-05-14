import React from 'react';

const IconLink = ({ href, icon, type, username }) => {
  return (
    <li>
    
    <a href={href} target='_blank' rel='noreferrer noopener'>
    <p>{type ? `${type}:` : null} </p>
        <i className={icon}></i>
        <p>{username}</p>
      </a>
    </li>
  );
};

export default IconLink;
