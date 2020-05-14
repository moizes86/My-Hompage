import React from 'react';

import { withRouter } from 'react-router-dom';

import './portfolio.styles.scss';

// className "content-default" is in content.styles.scss

const Portfolio = (props) => {
    return(
        <div className="content-default">
        PORTFOLIO!!!
        </div>
    )
};

export default withRouter(Portfolio);