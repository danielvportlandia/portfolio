import React from 'react';

import GithubSVG from '../../icomoon/SVG/github.svg';
import LinkedinSVG from '../../icomoon/SVG/linkedin.svg';

import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h3 className='footer-message'>&copy; Daniel Shelton - 2018</h3>
        <div className='SVG-container'>
          <a href='https://github.com/danielvportlandia' target='_blank' rel='noopener noreferrer'><GithubSVG/></a>
          <a href='https://www.linkedin.com/in/daniel-w-shelton/' target='_blank' rel='noopener noreferrer'><LinkedinSVG/></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
