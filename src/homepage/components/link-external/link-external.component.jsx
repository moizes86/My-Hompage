import React from 'react';

const LinkExternal = ({ href, icon, type, text }) => {
  return (
    
    <a href={href} target='_blank' rel='noreferrer noopener'>
    <p>{type ? `${type}:` : null} </p>
        <i className={icon}></i>
        <p>{text}</p>
      </a>
  );
};

export default LinkExternal;
