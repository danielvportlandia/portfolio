import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

import './redeeming-soles-project.scss';

class RSProject extends React.Component {
  render() {
    return (
      <div className='rs-project-page'>
        <div className='banner-wrapper'>
          <h2>No Kids Left On The Sidelines</h2>
          <h3>A REDEEMING SOLES INITIATIVE</h3>
        </div>
        <p className='hero-text'>A Redeeming Soles Initiative</p>
        <Link to={ROUTES.BLOOMIO_PROJECT}>
          <button className='raise'>SEE NEXT PROJECT</button>
        </Link>
      </div>
    );
  }
}

export default RSProject;
