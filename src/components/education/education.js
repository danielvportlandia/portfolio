import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../routes';
import CFBannerImg from '../../assets/CF-logo-transparent.png';
import CFWallImg from '../../assets/CF-wall.jpg';
import './education.scss';

class Education extends React.Component {
  render() {
    return (
      <div className='education-page'>
        <p className='hero-text'>Let me tell you about my education from</p>
        <a href='https://www.codefellows.org' target='_blank' rel='noopener noreferrer'>
          <img src={CFBannerImg} target='_blank' rel='noopener noreferrer'/>
        </a>
        <div className="scrolling-wrapper-flexbox">
          <section className="card">
            <div className='article-wrapper'>
              <article className='story'>
                <div className='titles-wrapper'>
                  <h2>The Bootcamp Experience</h2>
                  <h3>Rigorous but effective</h3>
                </div>
                <p>
                  It&apos;s rigorous and takes true dedication, focus, and a whole lot of hard 
                  work, but if you can hang in there long enough, then it will become one of 
                  the most rewarding experiences of your life, just as it was for me.
                </p>
                <p>
                  The Code Fellows curriculum is based on <a href='https://www.codefellows.org/blog/how-to-accelerate-your-learning-with-stacked-modules/' target='_blank' rel='noopener noreferrer'>stacked modules</a> where a new concept is taught each day, which would build upon the previous day. This &quot;bootcamp-style&quot; way of teaching ensures that many topics can be covered in a short amount of time. When we didn&apos;t fully grasped a concept, it was fine. We moved on. By continually moving forward we were forced to grasp the concepts that we barely understood in the first place as we applied them in new ways.
                </p>
                <p>
                  I have never known a greater group of people than my fellow class mates, they 
                  came from all walks of life and had such diverse backgrounds, the one thing 
                  we all had in common though, was our passion for learning
                </p>
              </article>
              <article className='right-content'>
                <img src={CFWallImg} className='article-image'/>
                <div className='reflection'>
                  <h2 className='reflection-text'>What I learned about myself</h2>
                  <ul>
                    <li>I have an eye for design</li>
                    <li>I am good at root-cause analytical thinking</li>
                    <li>I thrive when collaborating with others</li>
                  </ul>      
                </div>
              </article>
            </div>
          </section>
          <section className="card">
            <div className='article-wrapper'>
              <article className='story'>
              <div className='titles-wrapper'>
                  <h2>201: Foundations of Software Development</h2>
                  <h3>Doing Things The Hard Way</h3>
                </div>
                <p>
                  201 fundamentals
                </p>
                <p>
                  HTML and CSS, styling
                </p>
                <p>
                  vanilla JavaScript
                </p>
              </article>
              <article className='right-content'>
                <img src={CFWallImg} className='article-image'/>
                <div className='reflection'>
                  <h2 className='reflection-text'>Skills acquired</h2>
                  <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>      
                </div>
              </article>
            </div>
          </section>
          <section className="card">
            <div className='article-wrapper'>
              <article className='story'>
                <div className='titles-wrapper'>
                  <h2>301: Intermediate Software Development</h2>
                  <h3>Collaboration is the Key</h3>
                </div>
                <p>
                  301 pair programming and Agile
                </p>
                <p>
                  jQuery
                </p>
                <p>
                  NPM
                </p>
              </article>
              <article className='right-content'>
                <img src={CFWallImg} className='article-image'/>
                <div className='reflection'>
                  <h2 className='reflection-text'>Skills acquired</h2>
                  <ul>
                    <li>Agile</li>
                    <li>jQuery</li>
                    <li>NPM</li>
                  </ul>      
                </div>
              </article>
            </div>
          </section>
          <section className="card">
            <div className='article-wrapper'>
              <article className='story'>
                <div className='titles-wrapper'>
                  <h2>401: Advanced Software Development</h2>
                  <h3>MongoDB, Express, Node.js</h3>
                </div>
                <p>
                  Node.js & Express
                </p>
                <p>
                   MongoDB & Mongoose
                </p>
                <p>
                  TDD & Jest
                </p>
              </article>
              <article className='right-content'>
                <img src={CFWallImg} className='article-image'/>
                <div className='reflection'>
                  <h2 className='reflection-text'>Skills acquired</h2>
                  <ul>
                    <li>Agile</li>
                    <li>jQuery</li>
                    <li>NPM</li>
                  </ul>      
                </div>
              </article>
            </div>
          </section>
          <section className="card">
            <div className='article-wrapper'>
              <article className='story'>
                <div className='titles-wrapper'>
                  <h2>Final Days: Birth of a Full-Stack Developer</h2>
                  <h3>Mastering React</h3>
                </div>
                <p>
                  React & Redux
                </p>
                <p>
                  Webpack
                </p>
                <p>
                  Continuous Integration
                </p>
              </article>
              <article className='right-content'>
                <img src={CFWallImg} className='article-image'/>
                <div className='reflection'>
                  <h2 className='reflection-text'>Skills acquired</h2>
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Continuous Integration</li>
                  </ul>      
                </div>
              </article>
            </div>
          </section>
        </div>
        <Link to={ROUTES.SKILLS}>
          <button className='raise'>SEE SKILLS NEXT</button>
        </Link>
      </div>
    );
  }
}

export default Education;
