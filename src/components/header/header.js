import React from 'react';
import { Link } from 'react-router-dom';

import HomeSVG from '../../icomoon/SVG/home.svg';
import AboutMeSVG from '../../icomoon/SVG/user-tie.svg';
import CaretSVG from '../../icomoon/SVG/play3.svg';
import ResumeSVG from '../../icomoon/SVG/profile.svg';
import ContactSVG from '../../icomoon/SVG/address-book.svg';
import RS_SVG from '../../icomoon/SVG/gift.svg';
import LeafSVG from '../../icomoon/SVG/leaf.svg';
import MedicalSVG from '../../icomoon/SVG/aid-kit.svg';
import EducationSVG from '../../icomoon/SVG/embed2.svg';
import SkillsTreeSVG from '../../icomoon/SVG/tree.svg';

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className='topnav'>
        <nav className='nav-left'>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/'>Home <HomeSVG/></Link></button>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/about'>About <AboutMeSVG/></Link></button>
          </div>
          <div className='dropdown'>
            <button className='dropbutton'>
              Projects <CaretSVG className='caret'/>
            </button>
            <div className='dropdown-list'>
              <Link to='/redeeming-soles-project'>Redeeming Soles <RS_SVG/></Link>
              <Link to='/bloomio-project'>Bloomio <LeafSVG/></Link>
            </div>
          </div>
        </nav>

        <h1 className="title"><Link to='/'>Daniel Shelton</Link></h1>

        <nav className='nav-right'>
          <div className='dropdown'>
            <button className='dropbutton'>
              Qualifications <CaretSVG className='caret'/>
            </button>
            <div className='dropdown-list'>
              <Link to='/background'>Background <MedicalSVG/></Link>
              <Link to='/education'>Education <EducationSVG/></Link>
              <Link to='/skills'>Skills <SkillsTreeSVG/></Link>
            </div>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/resume'>Resume <ResumeSVG/></Link></button>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/contact'>Contact <ContactSVG/></Link></button>
          </div>
        </nav>
      </header>
    );
  }
}
