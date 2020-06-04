import React from 'react';
import './upcoming-tours.styles.scss';

const UpcomingTours = () => {
  return (
    <div className='section upcoming-tours' id='upcoming-tours'>
      <h1>Upcoming Tours</h1>
      <p>
        Global Trekking guides tours in Israel's beautiful Judea Desert and in
        many special and unique places around the world. The tours, guided by
        Jan Shai Deniz, includes high class equipment, food and sleeping
        arrangements.
      </p>
      <hr />
      <ul>
        <li>
          <span>20.6</span>
          <h4>Ramon Crater</h4>
          <p>
            Three Nights in the world's largest crater where we will see unique
            landspaces, animals and creeks. At night we will camp under the
            amazing desert sky and have fun group introduction games.
          </p>
        </li>
        <li>
          <span>1.7</span>
          <h4>Eagle Road</h4>
          <p>
            Enjoy an eagle's perspective of Tirol’s most beautiful Alpine
            scenery. As the eagle flies, the Eagle Walk runs through Tirol – the
            whole length of the country, from east to west.
          </p>
        </li>
        <li>
          <span>15.9</span>
          <h4>Appalachian Trail</h4>
          <p>
            The Appalachian National Scenic Trail, generally known as the
            Appalachian Trail or simply the AT, is a marked hiking trail in the
            Eastern United States extending between Springer Mountain in Georgia
            and Mount Katahdin in Maine.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default UpcomingTours;
