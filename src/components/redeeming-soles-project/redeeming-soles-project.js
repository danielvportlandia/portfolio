import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

// import RSBannerImg from '../../assets/rs-banner.jpg';
import './redeeming-soles-project.scss';

class RSProject extends React.Component {
  render() {
    return (
      <div className='rs-project-page'>
        <p className='hero-text'>Redeeming Soles</p>
        <div className='banner-wrapper'>
          <h2>No KIDS LEFT ON THE SIDELINES</h2>
          {/* <img src={RSBannerImg}/> */}
        </div>
        <Link to={ROUTES.BLOOMIO_PROJECT}>
          <button className='raise'>SEE NEXT PROJECT</button>
        </Link>
      </div>
    );
  }
}

export default RSProject;
