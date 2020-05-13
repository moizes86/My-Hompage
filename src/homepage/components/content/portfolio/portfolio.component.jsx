import React from 'react';

import { withRouter } from 'react-router-dom';

import './portfolio.styles.scss';

// className "content-background-color" is in content.styles.scss

const Portfolio = (props) => {
    return(
        <div className="content-background-color">
        PORTFOLIO!!!
        </div>
    )
};

export default withRouter(Portfolio);