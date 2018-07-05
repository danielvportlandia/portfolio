import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className='nav-left'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/redeeming-soles-project'>Redeeming Soles</Link></li>
          <li><Link to='/bloomio-project'>Bloomio</Link></li>
        </nav>
        <h1 className="title">Daniel Shelton</h1>
        <h2 className="subTitle">Full-Stack JavaScript Developer</h2>
        <nav className='nav-right'>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/qualifications'>Qualifications</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </nav>
      </header>
    );
  }
}
