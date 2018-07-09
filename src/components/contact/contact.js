import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

import './contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact-page'>
        <h1>Contact page</h1>
        <Link to={ROUTES.LANDING}>
          <button className='raise'>RETURN TO HOME PAGE</button>
        </Link>
      </div>
    );
  }
}

export default Contact;
