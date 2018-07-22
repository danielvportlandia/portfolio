import React from 'react';
import { Link } from 'react-router-dom';

// -------------------------------------------------------------------------------------------------
// SVG IMPORTS
// -------------------------------------------------------------------------------------------------
import HomeSVG from '../../lib/icomoon/home.svg';
import AboutMeSVG from '../../lib/icomoon/user-tie.svg';
import CaretSVG from '../../lib/icomoon/play3.svg';
import ResumeSVG from '../../lib/icomoon/profile.svg';
import ContactSVG from '../../lib/icomoon/address-book.svg';
import RS_SVG from '../../lib/icomoon/gift.svg';
import LeafSVG from '../../lib/icomoon/leaf.svg';
import MedicalSVG from '../../lib/icomoon/aid-kit.svg';
import EducationSVG from '../../lib/icomoon/embed2.svg';
import HamburgerMenuSVG from '../../lib/icomoon/menu.svg';

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className='topnav'>
        <nav className='nav-left'>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/'>Home <HomeSVG className='icomoon-svgs wiggle'/></Link></button>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/about'>About <AboutMeSVG className='icomoon-svgs wiggle'/></Link></button>
          </div>
          <div className='dropdown'>
            <button className='dropbutton'>
              Projects <CaretSVG className='icomoon-svgs caret'/>
            </button>
            <div className='dropdown-list'>
              <Link to='/redeeming-soles-project'>Redeeming Soles <RS_SVG className='icomoon-svgs wiggle'/></Link>
              <Link to='/bloomio-project'>Bloomio <LeafSVG className='icomoon-svgs wiggle'/></Link>
            </div>
          </div>
        </nav>

        <h1 className="title"><Link to='/'>Daniel Shelton</Link></h1>

        <nav className='nav-right'>
          <div className='dropdown'>
            <button className='dropbutton'>
              Qualifications <CaretSVG className='icomoon-svgs caret'/>
            </button>
            <div className='dropdown-list'>
              <Link to='/background'>Background <MedicalSVG className='icomoon-svgs wiggle'/></Link>
              <Link to='/education'>Education <EducationSVG className='icomoon-svgs wiggle'/></Link>
            </div>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/resume'>Resume <ResumeSVG className='icomoon-svgs wiggle'/></Link></button>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/contact'>Contact <ContactSVG className='icomoon-svgs wiggle'/></Link></button>
          </div>
        </nav>

        <HamburgerMenuSVG className='icomoon-svgs menu-icon'/>
        <ul className='menu-list'>
          <li><Link to='/'>Home <HomeSVG className='icomoon-svgs'/></Link></li>
          <li><Link to='/about'>About <AboutMeSVG className='icomoon-svgs'/></Link></li>
          <li>
            <Link to='/redeeming-soles-project'>Redeeming Soles <RS_SVG className='icomoon-svgs'/>
            </Link>
          </li>
          <li><Link to='/bloomio-project'>Bloomio <LeafSVG className='icomoon-svgs'/></Link></li>
          <li><Link to='/background'>Background <MedicalSVG className='icomoon-svgs'/></Link></li>
          <li><Link to='/education'>Education <EducationSVG className='icomoon-svgs'/></Link></li>
          <li><Link to='/resume'>Resume <ResumeSVG className='icomoon-svgs'/></Link></li>
          <li><Link to='/contact'>Contact <ContactSVG className='icomoon-svgs'/></Link></li>
        </ul>

      </header>
    );
  }
}
