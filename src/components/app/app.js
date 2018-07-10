import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Favicon from 'react-favicon';

// -------------------------------------------------------------------------------------------------
// CONSTANT COMPONENT IMPORTS
// -------------------------------------------------------------------------------------------------
import favicon from '../../assets/my-favicon.png';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import AuthRedirect from '../auth-redirect/auth-redirect';
import Header from '../header/header';
import Footer from '../footer/footer';
import ROUTES from '../../routes';
import '../../style/main.scss';

// -------------------------------------------------------------------------------------------------
// COMPONENT IMPORTS
// -------------------------------------------------------------------------------------------------
import Landing from '../landing/landing';
import About from '../about/about';
import RSProject from '../redeeming-soles-project/redeeming-soles-project';
import BloomioProject from '../bloomio-project/bloomio-project';
import BackGround from '../background/background';
import Education from '../education/education';
import Skills from '../skills/skills';
import Resume from '../resume/resume';
import Contact from '../contact/contact';

export default class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <ScrollToTop>
            <Favicon url={favicon}/>
            <Header/>
            {/* <Route path='*' component={AuthRedirect}/> */}
            <Route exact path={ROUTES.LANDING} component={Landing}/>
            <Route exact path={ROUTES.RESUME} component={Resume}/>
            <Route exact path={ROUTES.ABOUT} component={About}/>
            <Route exact path={ROUTES.BACKGROUND} component={BackGround}/>
            <Route exact path={ROUTES.SKILLS} component={Skills}/>
            <Route exact path={ROUTES.EDUCATION} component={Education}/>
            <Route exact path={ROUTES.CONTACT} component={Contact}/>
            <Route exact path={ROUTES.RS_PROJECT} component={RSProject}/>
            <Route exact path={ROUTES.BLOOMIO_PROJECT} component={BloomioProject}/>
            <Footer/>
          </ScrollToTop>
        </BrowserRouter>
    );
  }
}
