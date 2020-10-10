import React from 'react';
import { withRouter } from 'react-router-dom';
import './link-internal.styles.scss';

const Linkinternal = ({
  section,
  history,
  match,
  active,
  inHomepage,
  text,
}) => {
  return (
    <li
      onClick={() =>
        // inHomepage
        //   ? history.push(`${match.url}/${section}`)
        //   : history.push(`/${section}`)
        history.push(`${section}`)
      }
      className={active ? 'link-internal active' : 'link-internal'}
    >
      {text}
    </li>
  );
};

export default withRouter(Linkinternal);
