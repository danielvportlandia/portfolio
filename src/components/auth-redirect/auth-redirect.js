import React from 'react';
import { Redirect } from 'react-router-dom';
import ROUTES from '../../routes';

class AuthRedirect extends React.Component {
  render() {
    const destinationRoute = ROUTES.LANDING;
    
    return (
      <div>
        { destinationRoute ? <Redirect to={ destinationRoute }/> : undefined }
      </div>
    );
  }
}

// TODO: Fix redirect error for redirecting to same page (console log error)

export default AuthRedirect;
