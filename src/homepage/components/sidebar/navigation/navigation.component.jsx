import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { onToggleNavbarDropdown } from '../../../redux/homepage.actions';

import LinkInternal from '../../link-internal/link-internal.component';
import ButtonHome from '../../../../components/button-home/button-home.component';

import './navigation.styles.scss';

const Navigation = ({
  match,
  location,
  homepageSections,
  navbarShown,
  toggleNavbarDropdown,
}) => {
  return (
    <div className={`navigation ${navbarShown ? 'show' : ''}`}>
      <ul onClick={toggleNavbarDropdown}>
        <li
          className={`link-internal ${
            match.path === location.pathname ? 'active' : ''
          }`}
        >
          <ButtonHome
            buttonClassName={`button-home-homepage ${
              match.path === location.pathname
                ? 'button-home-homepage-active'
                : ''
            }`}
          />
        </li>
        {homepageSections.map((section, idx) => (
          <LinkInternal
            key={idx}
            section={section}
            text={section.toUpperCase()}
            inHomepage={true}
            active={
              `${match.path}/${section}` === location.pathname ? true : false
            }
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  toggleNavbarDropdown: () => dispatch(onToggleNavbarDropdown()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Navigation)
);
