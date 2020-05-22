import React, {useState} from 'react';

import img_balloon from './img/balloon.jpg';
import img_island from './img/island.jpg';
import img_mountain from './img/mountain.jpg';
import img_coast from './img/coast.jpg';
import './styles.css';


// function toggleNavbar() {
//     let responsiveMenu = document.querySelector('.li-items').classNameList;
//     console.log(responsiveMenu);
//   //   responsiveMenu.contains('show')
//   //     ? responsiveMenu.remove('show')
//   //     : responsiveMenu.add('show');
//   }

  
const MountainTravel = () => {
    const [navbarShown, setNavbarShown] = useState(false);

  return (
    <div className='mountain-travel'>
      <section className='home-screen'>
        <nav>
          <ul>
            <div className='website-logo'>
              <li>Website Logo</li>
            </div>
            <div className={`li-items ${navbarShown? 'show' : ''}`}>
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </div>
            <div className='hamburger' onClick={()=>setNavbarShown(!navbarShown)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </ul>
        </nav>
        <div className='content'>
          <h1>My Cool Website</h1>
          <h3>
            Just a template for practicing flexbox and some styling
            <a
              href='https://demo.tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox/'
              target='_blank'
              rel='noreferrer noopener'
            >
              here
            </a>
          </h3>

          <a
            href='https://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox'
            target='_blank'
            rel='noreferrer noopener'
          >
            DOWNLOAD IT HERE
          </a>
        </div>
      </section>
      <section className='some-of-our-work'>
        <h1>Some Of Our Work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
          cupiditate voluptates officiis doloremque esse suscipit amet quae
          inventore dolorem nisi animi nesciunt accusantium dignissimos, libero
          praesentium sunt minima deleniti quisquam.
        </p>
        <hr />
        <div className='img-container'>
          <div style={{backgroundImage: `url(${img_balloon})`}}></div>
          <div
            className='large'
            style={{ backgroundImage: `url(${img_island})` }}
          ></div>
          <div
            className='large'
            style={{ backgroundImage: `url(${img_mountain})` }}
          ></div>
          <div
            style={{ backgroundImage: `url(${img_coast})` }}
          ></div>
        </div>
      </section>
      <section className='features-and-services'>
        <h1>Features And Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed
          aliquam dictum sapien, id sagittis augue malesuada eu.
        </p>
        <hr />
        <ul>
          <li>
            <i className='fa fa-camera-retro'></i>
            <h4>Photography</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              felis et ipsum bibendum ultrices vitae pulvinar velit.
            </p>
          </li>
          <li>
            <i className='fa fa-cubes'></i>
            <h4>Photography</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              felis et ipsum bibendum ultrices vitae pulvinar velit.
            </p>
          </li>
          <li>
            <i className='fa fa-newspaper-o'></i>
            <h4>Photography</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              felis et ipsum bibendum ultrices vitae pulvinar velit.
            </p>
          </li>
        </ul>
      </section>
      <section className='what-others-say'>
        <h1>What Others Say:</h1>
        <p>
          Mauris sit amet mauris a arcu eleifend ultricies eget ut dolor. ClassName
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <p>— Patrick Farrell</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed
          aliquam dictum sapien, id sagittis augue malesuada eu.
        </p>
        <p>— George Smith</p>
        <p>
          Donec commodo dolor augue, vitae faucibus tortor tincidunt in. Aliquam
          vitae leo quis mi pulvinar ornare. Integer eu iaculis metus.
        </p>
        <p>— Kevin Blake</p>
      </section>
      <section className='join-our-newsletter'>
        <h1>Join Our Newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
          felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed
          aliquam dictum sapien, id sagittis augue malesuada eu.
        </p>
        <hr />
        <div className='subscribe'>
          <input type='text' placeholder='Email' />
          <button>SUBSCRIBE NOW</button>
        </div>
      </section>
      <section className='footer'>
        <ul>
          <li>
            <a
              href='https://www.facebook.com/moshe.mantsur/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <i className='fa fa-facebook-square'></i>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <i className='fa fa-github-square'></i>
            </a>
          </li>
        </ul>
        <p>made for practicing flexbox</p>
      </section>
    </div>
  );
};

export default MountainTravel;
