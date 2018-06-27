import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../header/header';
import Landing from '../auth-landing/auth-landing';
import About from '../about/about';
import Contact from '../contact/contact';
import Resume from '../resume/resume';
import RedeemingSolesProject from '../redeeming-soles-project/redeeming-soles-project';
import BloomioProject from '../bloomio-project/bloomio-project';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header/>
            <Route path='*' component={Landing}/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/redeeming-soles-project" component={RedeemingSolesProject}
            />
            <Route exact path="/bloomio-project" component={BloomioProject}/>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
