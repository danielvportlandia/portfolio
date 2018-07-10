import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

import './redeeming-soles-project.scss';

class RSProject extends React.Component {
  render() {
    return (
      <div className='rs-project-page'>
        <h1>Redeeming Soles</h1>
        <Link to={ROUTES.BLOOMIO_PROJECT}>
          <button className='raise'>SEE NEXT PROJECT</button>
        </Link>
      </div>
    );
  }
}

export default RSProject;
