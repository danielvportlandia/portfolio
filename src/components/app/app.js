import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Favicon from 'react-favicon';

// -------------------------------------------------------------------------------------------------
// CONSTANT COMPONENT IMPORTS
// -------------------------------------------------------------------------------------------------
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Header from '../header/header';
import Footer from '../footer/footer';

// -------------------------------------------------------------------------------------------------
// COMPONENT IMPORTS
// -------------------------------------------------------------------------------------------------
import Landing from '../landing/landing';
import Resume from '../resume/resume';
import ROUTES from '../../routes';
import About from '../about/about';
import BackGround from '../background/background';
import Education from '../education/education';
import Skills from '../skills/skills';
// import Contact from '../contact/contact';
// import RedeemingSolesProject from '../redeeming-soles-project/redeeming-soles-project';
// import BloomioProject from '../bloomio-project/bloomio-project';

import favicon from '../../assets/my-favicon.png';
import '../../style/main.scss';

export default class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <ScrollToTop>
            <div>
              <Favicon url={favicon}/>
              <Header/>
              {/* <Route path='*' component={Landing}/> */}
              <Route exact path={ROUTES.LANDING} component={Landing}/>
              <Route exact path={ROUTES.RESUME} component={Resume}/>
              <Route exact path={ROUTES.ABOUT} component={About}/>
              <Route exact path={ROUTES.BACKGROUND} component={BackGround}/>
              <Route exact path={ROUTES.SKILLS} component={Skills}/>
              <Route exact path={ROUTES.EDUCATION} component={Education}/>
              {/* <Route exact path="/contact" component={Contact}/>
              <Route exact path="/redeeming-soles-project" component={RedeemingSolesProject}
              />
              <Route exact path="/bloomio-project" component={BloomioProject}/> */}
              <Footer/>
            </div>
          </ScrollToTop>
        </BrowserRouter>
    );
  }
}
