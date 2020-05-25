import React from 'react';

import { withRouter } from 'react-router-dom';

import './button-home.styles.scss';

const ButtonHome = ({ history, buttonClassName }) => {
  return (
    <button
      id='button-home'
      className={!buttonClassName? 'button-home-default' : buttonClassName}
      onClick={() => history.push('/homepage')}
    >
      Homepage
    </button>
  );
};

export default withRouter(ButtonHome);
