import React from 'react';
import './about-us.styles.scss';

const AboutUs = () => {
  const img_sunrise =
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/91354624_10156784116587035_5523999984778739712_o.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=g7oER99MZe8AX-O74ZW&_nc_ht=scontent.fsdv1-2.fna&oh=50b32a537bd49b7bcc3155dd6c4756e1&oe=5EF8F5B0';

  const img_rock =
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/90680011_2781079261967971_8270537716945387520_o.jpg?_nc_cat=100&_nc_sid=8bfeb9&_nc_ohc=nE6Gk583QC4AX8ulTca&_nc_ht=scontent.fsdv1-2.fna&oh=3e6b9515a0e650eb8307c46e7eca7c50&oe=5EF5FF08';

  const img_pool =
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/90741697_10156746221132035_6985295962235207680_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_ohc=e35k1oYx8uAAX8wuLXw&_nc_ht=scontent.fsdv1-2.fna&oh=f7e0fc102f4de9708f7e094dd133e27b&oe=5EF7D0B8';

  const img_flowers =
    'https://scontent.fsdv1-2.fna.fbcdn.net/v/t1.0-9/89951225_10156727451342035_676259948128108544_n.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=E4rlb2q8_jUAX-04xae&_nc_ht=scontent.fsdv1-2.fna&oh=28b253f3d8b55ae24ea4000eb2494b5d&oe=5EF8E060';

  return (
    <div className='section about-us' name='about-us' >
    
    <h1>Hiking In Israel And Around The World <a href=' ' name='about-us'> </a></h1>
      <p>
        Global Trekking guides tours in Israel's beautiful Judea Desert and in
        many special and unique places around the world. The tours, guided by
        Jan Shai Deniz, includes high class equipment, food and sleeping
        arrangements.
      </p>
      <hr />
      <div className='img-container'>
        <div style={{ backgroundImage: `url(${img_rock})` }}></div>
        <div
          className='large'
          style={{ backgroundImage: `url(${img_sunrise})` }}
        ></div>
        <div
          className='large'
          style={{ backgroundImage: `url(${img_flowers})` }}
        ></div>
        <div style={{ backgroundImage: `url(${img_pool})` }}></div>
      </div>
    </div>
  );
};

export default AboutUs;
