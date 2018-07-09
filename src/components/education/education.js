import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../routes';
import './education.scss';

class Education extends React.Component {
  render() {
    return (
      <div className='education-page'>
        <h1>Education</h1>
        <h2>Code Fellows</h2>
        {/* TODO: download CF logo */}
        <Link to={ROUTES.SKILLS}>
          <button className='raise'>SEE SKILLS NEXT</button>
        </Link>
      </div>
    );
  }
}

export default Education;
