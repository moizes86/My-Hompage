import React from 'react';
import { withRouter } from 'react-router-dom';
import './list-item-link.styles.scss';

const ListItemLink = ({ section, history, match }) => {
  return (
    <li
      onClick={() => history.push(`${match.path}/${section}`)}
      className={`list-item-link ${section}-link`}
    >
      {section.toUpperCase()}
    </li>
  );
};

export default withRouter(ListItemLink);
