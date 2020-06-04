import React from 'react';
import ButtonHome from '../../../components/button-home/button-home.component';

import './home-screen.styles.scss';
import Navbar from '../navbar/navbar.component';

const HomeScreen = () => {

    const imgLogoURL =
      'https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/47310699_10155630051007035_3933344600298618880_n.jpg?_nc_cat=104&_nc_sid=174925&_nc_ohc=c_yze6280-EAX-aaVEx&_nc_ht=scontent.fsdv1-2.fna&oh=ae28274b012c3ec85a43b1102dbe59de&oe=5EF7378F';

    return(
        <div className='section home-screen'>
        <ButtonHome />
        <Navbar imgLogoURL={imgLogoURL} />
        <div className='content'>
          <h1>Jan-Shai Deniz </h1>
          <h2>Global Trekking</h2>
          <img src={imgLogoURL} alt='' />
          <h3>Tours in Swiss German, German, Turkish, Hebrew and Arabic</h3>
        </div></div>
    )
}

export default HomeScreen;