import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

import roundProfilePic from '../../assets/contact-profile.gif';
import GitHubLargeSVG from '../../lib/other-svgs/github-large.svg';
import LinkedInSVG from '../../lib/other-svgs/linkedin.svg';

import './contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact-page fade-in'>
        <img src={roundProfilePic} alt='Clean-shaven profile pic of me' title='Clean-shaven profile pic of me'/>
        <p className='hero-text'>
          Like what you&apos;ve seen so far? You can find me here.
        </p>
        <div className='contact-svg-wrapper'>
          <a href='https://github.com/danielvportlandia' target='_blank' rel='noopener noreferrer'>
            <GitHubLargeSVG className='other-svgs wiggle'/>
          </a>
          <a href='https://www.linkedin.com/in/daniel-w-shelton/' target='_blank' rel='noopener noreferrer'>
            <LinkedInSVG className='other-svgs wiggle'/>
          </a>
        </div>
        <Link to={ROUTES.LANDING}>
          <button className='raise'>RETURN TO HOME PAGE</button>
        </Link>
      </div>
    );
  }
}

export default Contact;
