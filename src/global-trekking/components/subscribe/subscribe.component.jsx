import React from 'react';
import './subscribe.styles.scss';

const Subscribe = () => {
    return(
        <div className='section subscribe' id='subscribe'>
        <h1>Updates And Offers </h1>
        <p>Sign here for updates and special offers for our upcoming tours!</p>
        <hr />
        <div className='subscribe'>
          <input type='text' placeholder='Email' />
          <button>SUBSCRIBE NOW</button>
        </div>
        </div>
    )
}

export default Subscribe;