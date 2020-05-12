import React from 'react';
import { withRouter } from 'react-router-dom';
import './list-item-link.styles.scss';

const ListItemLink = ({ section, history, match, active }) => {
  return (
    <li
      onClick={() => history.push(`${match.url}/${section}`)}
      className={active? 'list-item-link active': 'list-item-link'}
    >
      {section.toUpperCase()}
    </li>
  );
};

export default withRouter(ListItemLink);
