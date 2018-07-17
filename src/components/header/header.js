import React from 'react';
import { Link } from 'react-router-dom';

// -------------------------------------------------------------------------------------------------
// SVG IMPORTS
// -------------------------------------------------------------------------------------------------
import HomeSVG from '../../icomoon/SVG/home.svg';
import AboutMeSVG from '../../icomoon/SVG/user-tie.svg';
import CaretSVG from '../../icomoon/SVG/play3.svg';
import ResumeSVG from '../../icomoon/SVG/profile.svg';
import ContactSVG from '../../icomoon/SVG/address-book.svg';
import RS_SVG from '../../icomoon/SVG/gift.svg';
import LeafSVG from '../../icomoon/SVG/leaf.svg';
import MedicalSVG from '../../icomoon/SVG/aid-kit.svg';
import EducationSVG from '../../icomoon/SVG/embed2.svg';
import HamburgerMenuSVG from '../../icomoon/SVG/menu.svg';

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className='topnav'>
        <nav className='nav-left'>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/'>Home <HomeSVG className='icomoon-svgs'/></Link></button>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/about'>About <AboutMeSVG className='icomoon-svgs'/></Link></button>
          </div>
          <div className='dropdown'>
            <button className='dropbutton'>
              Projects <CaretSVG className='icomoon-svgs caret'/>
            </button>
            <div className='dropdown-list'>
              <Link to='/redeeming-soles-project'>Redeeming Soles <RS_SVG className='icomoon-svgs'/></Link>
              <Link to='/bloomio-project'>Bloomio <LeafSVG className='icomoon-svgs'/></Link>
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
              <Link to='/background'>Background <MedicalSVG className='icomoon-svgs'/></Link>
              <Link to='/education'>Education <EducationSVG className='icomoon-svgs'/></Link>
            </div>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/resume'>Resume <ResumeSVG className='icomoon-svgs'/></Link></button>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/contact'>Contact <ContactSVG className='icomoon-svgs'/></Link></button>
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
