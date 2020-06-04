import  { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Moving bewtween routes keeps windows.scrollTo(x,y) at last position.
// We want every route to start at windows.scrollTo(0,0).

const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    }); // end unlisten

    return () => unlisten();
  }, []); // end useEffect

  return null;
};

export default withRouter(ScrollToTop);
