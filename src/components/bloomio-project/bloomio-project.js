import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

import './bloomio-project.scss';

class BloomioProject extends React.Component {
  render() {
    return (
      <div className='bloomio-project-page'>
        <h1>Bloomio</h1>
        <Link to={ROUTES.RS_PROJECT}>
          <button className='raise'>SEE PREVIOUS PROJECT</button>
        </Link>
      </div>
    );
  }
}

export default BloomioProject;
