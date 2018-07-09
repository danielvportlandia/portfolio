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

export default AuthRedirect;
