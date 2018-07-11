import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../routes';
import profilePic from '../../assets/profile-pic.jpg';
import './about.scss';

class About extends React.Component {
  render() {
    return (
      <div className='about-page'>
        <p className='hero-text'>A little bit about me first.</p>
        <img src={profilePic} alt='My loving family and I' title='My loving family and I'/>
        <section className='bio'>
          <h2>Hello, I&apos;m Daniel!</h2>
          <p>
            I&apos;m a <strong>Full-Stack (MERN) JavaScript Developer</strong> and father to 
            one beautiful baby girl. I am passionate about both delivering an engaging and 
            intuitive UX as well as meticulously wireframing and constructing an API&apos;s 
            functionality.
          </p>
          <p>
            What really gets me excited though is <strong>being able to turn a client&apos;s 
            dream into a reality. </strong>I am always looking forward to taking on new challenges 
            and finding opportunities that let me create meaningful products that enriches the 
            lives of others.
          </p>
          <p>
            Once I had decided to pivot my career from the medical industry into the tech industry, 
            I enrolled at <a href='https://www.codefellows.org' target='_blank' rel='noopener noreferrer'>Code Fellows</a>, where I earned my certificate in advanced software 
            development with JavaScript. I learned not only how to develop applications but was 
            also taught 
            <strong> Agile methodologies, best coding practices, and how to collaborate with 
            others.</strong>
          </p>
          <p>
            My passion for coding stemmed from my love of writing; being able to leave 
            lasting impressions with others through my writing is what ultimately led me to switch 
            careers to software development, where I have been able to do the same thing, but 
            instead, through the sites I&apos;ve helped create instead.
          </p>
          <p>
            I am currently free-lancing in the Greater Seattle Area but am 
            <strong> available for FTE</strong>. If you are at all interested in hiring an 
            incredibly smart, hilarious, hard-working, but most of all <strong>humble </strong> 
            employee, then please click the link below to see my resumé.
          </p>
        </section>
        <Link to={ROUTES.RESUME} className='buttons'>
          <button className='raise'>CHECK OUT MY RESUME</button>
        </Link>
      </div>
    );
  }
}

export default About;