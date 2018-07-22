import React from 'react';
import { Redirect } from 'react-router-dom';
import ROUTES from '../../routes';

class AuthRedirect extends React.Component {
  render() {
    let destinationRoute = null;
    const { pathname } = location; //eslint-disable-line

    if (
      pathname !== ROUTES.ABOUT
      && pathname !== ROUTES.LANDING
      && pathname !== ROUTES.RS_PROJECT
      && pathname !== ROUTES.BLOOMIO_PROJECT
      && pathname !== ROUTES.BACKGROUND
      && pathname !== ROUTES.EDUCATION
      && pathname !== ROUTES.RESUME
      && pathname !== ROUTES.CONTACT
    ) {
      destinationRoute = ROUTES.LANDING;
    }
    
    return (
      <div>
        { destinationRoute ? <Redirect to={ destinationRoute }/> : undefined }
      </div>
    );
  }
}

export default AuthRedirect;
