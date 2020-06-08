import React from 'react';
import './global-trekking.styles.scss';

import HomeScreen from './components/home-screen/home-screen.component';
import UpcomingTours from './components/upcoming-tours/upcoming-tours.component.';
import Footer from './components/footer/footer.component';
import Subscribe from './components/subscribe/subscribe.component';
import AboutUs from './components/about-us/about-us.component';
import Reviews from './components/reviews/reviews.component';

const navbarBackgroundColor = () => {
  const nodeElNavbar = document.querySelector('.global-trekking nav');
  window.pageYOffset > 100
    ? nodeElNavbar.classList.add('navbar-bckgrnd-show')
    : nodeElNavbar.classList.remove('navbar-bckgrnd-show');
};

class GlobalTrekking extends React.Component {

  
  componentDidMount() {
    document.querySelector('html').style.scrollBehavior = "smooth"; // Use smooth scroll in the page only after initial scroll to (0,0);
    window.addEventListener('scroll', navbarBackgroundColor);
  }

  componentWillUnmount() {
    document.querySelector('html').style.scrollBehavior = "auto";
    window.removeEventListener('scroll', navbarBackgroundColor);
  }

  render() {
    return (
      <div className='global-trekking'>
        <HomeScreen />
        <AboutUs />
        <UpcomingTours />
        <Reviews />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default GlobalTrekking;
