import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../routes';
import './skills.scss';

class Skills extends React.Component {
  render() {
    return (
      <div className='skills-page'>
        <h1>Skills</h1>

        <div className='button-wrapper'>
          <Link to={ROUTES.RS_PROJECT}>
            <button className='raise'>REDEEMING SOLES</button>
          </Link>
          <Link to={ROUTES.BLOOMIO_PROJECT}>
            <button className='raise'>BLOOMIO</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Skills;
