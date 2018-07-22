import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../routes';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='landing-page fade-in'>
        <p className='hero-text'>
          Daniel Shelton <br/> 
          is a Full-Stack JavaScript Developer in Seattle, Washington. <br/>
          Passionate about UX design, data management, and delivering quality content.
        </p>
        <Link to={ROUTES.ABOUT}>
          <button className='raise'>CLICK HERE TO GET TO KNOW ME</button>
        </Link>
      </div>
    );
  }
}
