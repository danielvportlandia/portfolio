import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className='topnav'>
        <nav className='nav-left'>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/'>Home</Link></button>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/about'>About</Link></button>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/resume'>Resume</Link></button>
          </div>
        </nav>
        <h1 className="title"><Link to='/'>Daniel Shelton</Link></h1>
        <nav className='nav-right'>
          <div className='dropdown'>
            <button className='dropbutton'>
              <i className='down-caret'></i>
              Projects
            </button>
            <div className='dropdown-list'>
              <Link to='/redeeming-soles-project'>Redeeming Soles</Link>
              <Link to='/bloomio-project'>Bloomio</Link>
            </div>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/qualifications'>Qualifications</Link></button>
          </div>
          <div className='nav-button-container'>
            <button className='link-button'><Link to='/contact'>Contact</Link></button>
          </div>
        </nav>
      </header>
    );
  }
}
