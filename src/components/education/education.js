import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import ROUTES from '../../routes';

// -------------------------------------------------------------------------------------------------
// IMAGE IMPORTS
// -------------------------------------------------------------------------------------------------
import CFBannerImg from '../../assets/CF-logo.png';
import CFWallImg from '../../assets/CF-wall.jpg';
import vanillaJSImg from '../../assets/vanilla-javascript.jpg';
import agileImg from '../../assets/agile-development.jpg';
import backendDevImg from '../../assets/backend-development.jpg';
import graduationImg from '../../assets/js-401-graduating-class.jpg';

// -------------------------------------------------------------------------------------------------
// IMAGE IMPORTS
// -------------------------------------------------------------------------------------------------
import HTML5SVG from '../../lib/devicon/html5.svg';
import CSS3SVG from '../../lib/devicon/css3.svg';
import JavaScriptSVG from '../../lib/devicon/javascript.svg';
import GitHubSVG from '../../lib/devicon/github.svg';
import GitSVG from '../../lib/devicon/git.svg';
import JQuerySVG from '../../lib/devicon/jquery.svg';
import PostgreSQLSVG from '../../lib/devicon/postgresql.svg';
import HerokuSVG from '../../lib/devicon/heroku.svg';
import SlackSVG from '../../lib/other-svgs/slack.svg';
import TrelloSVG from '../../lib/devicon/trello.svg';
import NodeJSSVG from '../../lib/devicon/nodejs.svg';
import ExpressSVG from '../../lib/devicon/express.svg';
import MongoDBSVG from '../../lib/devicon/mongodb.svg';
import AWSSVG from '../../lib/devicon/aws.svg';
import JestSVG from '../../lib/other-svgs/jest.svg';
import ReactSVG from '../../lib/other-svgs/react.svg';
import ReduxSVG from '../../lib/other-svgs/redux.svg';
import SassSVG from '../../lib/devicon/sass.svg';
import WebpackSVG from '../../lib/other-svgs/webpack.svg';
import TravisSVG from '../../lib/other-svgs/travis.svg';

import './education.scss';

class Education extends React.Component {
  render() {
    return (
      <div className='education-page fade-in'>
        <p className='hero-text'>Let me tell you about my education from</p>
        <a href='https://www.codefellows.org' target='_blank' rel='noopener noreferrer'>
          <img src={CFBannerImg} className='hero-image' alt='Check out Code Fellows' title='Check out Code Fellows' target='_blank' rel='noopener noreferrer'/>
        </a>
        <Fade>
          <div className="scrolling-wrapper-flexbox">
            <section className="card">
              <div className='article-wrapper'>
                <article className='story'>
                  <div className='titles-wrapper'>
                    <h2>The Bootcamp Experience</h2>
                    <h3>Rigorous but effective</h3>
                  </div>
                  <p>
                    It takes true dedication, focus, and a whole lot of hard 
                    work, but if you can hang in there long enough, then it will become one of 
                    the most rewarding experiences of your life, just as it was for me.
                  </p>
                  <p>
                    The Code Fellows curriculum is based on <a className='external-link' href='https://www.codefellows.org/blog/how-to-accelerate-your-learning-with-stacked-modules/' target='_blank' rel='noopener noreferrer'>stacked modules</a> where a new concept is taught each day, which would build upon the previous day. This &quot;bootcamp-style&quot; way of teaching ensures that many topics can be covered in a short amount of time. When we didn&apos;t fully grasp a concept, it was fine. We moved on. By continually moving forward we were forced to grasp the concepts that we barely understood in the first place as we applied them in new ways.
                  </p>
                  <p>
                    I have never known a greater group of people than my fellow class mates who 
                    came from all walks of life, the one thing we all had in common though, was 
                    our passion for learning.
                  </p>
                </article>
                <article className='right-content'>
                  <img src={CFWallImg} className='article-image' alt='Code Fellows wall art' title='Code Fellows wall art'/>
                  <div className='reflection'>
                    <h2 className='reflection-text'>Overall I learned</h2>
                    <ul>
                      <li>
                        How to design intuitive and engaging user interfaces with 
                        <strong> React</strong>
                      </li>
                      <li>
                        How to construct Schemas and manipulate them with <strong>MongoDB </strong>
                        and <strong>Mongoose</strong>
                      </li>
                      <li>
                        How to develop the back-end of applications with <strong>Node.js</strong> and
                        <strong> Express</strong>
                      </li>
                      <li>
                        How to debug applications by applying critical thinking skills towards
                        root-cause analysis
                      </li>
                      <li>
                        And most importantly of all, how to adopt 
                        <strong> Agile methodologies</strong> to effectively collaborate with others
                      </li>
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
                    This was my introduction to many CS concepts such as <strong>Object-Oriented 
                    Programming (OOP), Document Object Model (DOM) Manipulation & Traversal</strong>, 
                    and utilizing Version Control workflows with <strong>GitHub </strong>
                    and <strong>Git</strong> to bring projects together.
                  </p>
                  <p>
                    As this was the introductory course to web development, we extensively 
                    covered <strong>HTML5</strong> and best practices with structuring web 
                    pages. Beyond this structuring aspect to the web, we also focused on gathering 
                    a solid understanding of <strong>CSS3</strong> and how it&apos;s used to style 
                    web pages.
                  </p>
                  <p>
                    Now, about doing things the hard way. In the beginning, we were taught how 
                    to create an application solely by using <strong>vanilla JavaScript</strong>, 
                    no libraries, no dependencies, just good ol&apos; fashion plain JavaScript. 
                    There was a good reason behind us learning vanilla JavaScript, it was because 
                    we were laying down a foundation of how the language worked at it&apos;s core 
                    from which our knowledge could expand upon.
                  </p>
                </article>
                <article className='right-content'>
                  <img src={vanillaJSImg} className='article-image' alt='Learning the fundamentals' title='Learning the fundamentals'/>
                  <div className='reflection'>
                    <h2 className='reflection-text'>Skills acquired</h2>
                    <div className='svg-wrapper'>
                      <HTML5SVG className='devicon-svg wiggle'/>
                      <CSS3SVG className='devicon-svg wiggle'/>
                      <JavaScriptSVG className='devicon-svg wiggle'/>
                      <GitHubSVG className='devicon-svg wiggle'/>
                      <GitSVG className='devicon-svg wiggle'/>
                    </div>
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
                    In the 301 course, we got our first taste of server-side code. In addition to 
                    cementing our understanding of the fundamentals, we also focused on the 
                    collaborative aspect of software development by regularly pair-programming with 
                    classmates and adopting <strong>Agile methodologies</strong> into our 
                    project&apos;s workflow while using services like <strong>Slack </strong> 
                    and <strong>Trello</strong> to keep in constant contact with teammates.
                  </p>
                  <p>
                    At this point in our education we were introduced to <strong>NPM</strong> and the 
                    concept of installing and managing dependencies in our code, and from there 
                    things really picked up. The first library we were introduced to was
                    <strong> jQuery</strong> where we focused on DOM manipulation and 
                    making <strong>AJAX</strong> calls to external APIs.
                  </p>
                  <p>
                    Working with server-side routing, we learned how to construct data bases
                    with <strong>PostgreSQL</strong> and make <strong>SQL</strong> queries. 
                    After constructing our first full-stack application (in a week-long sprint) 
                    we deployed our sites via <strong>Heroku</strong>.
                  </p>
                </article>
                <article className='right-content'>
                  <img src={agileImg} className='article-image' alt='Experience with Agile and SCRUM methodologies' title='Experience with Agile and SCRUM methodologies'/>
                  <div className='reflection'>
                    <h2 className='reflection-text'>Skills acquired</h2>
                    <div className='svg-wrapper'>
                      <JQuerySVG className='devicon-svg wiggle'/>
                      <PostgreSQLSVG className='devicon-svg wiggle'/>
                      <HerokuSVG className='devicon-svg wiggle'/>
                      <SlackSVG className='other-svgs wiggle'/>
                    <TrelloSVG className='devicon-svg wiggle'/>
                    </div>
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
                    Th advanced JavaScript course started off by diving deep into working with
                    <strong> Node.js</strong> & <strong>Express</strong>. Before we could rely on 
                    Express for all of our server-side routing needs, we had to build our own TCP 
                    server from scratch and fully understand concepts such as <strong>REST, CRUD, 
                    and asynchronous programming</strong>.
                  </p>
                  <p>
                    I utilized <strong>MongoDB</strong> & <strong>Mongoose</strong> to create 
                    cross-platform and open-source document-oriented NoSQL databases, complete 
                    with Schemas and full-CRUD functionality, this rounded out my knowledge working 
                    with data bases as I had previously learned how to work with SQL databases.
                  </p>
                  <p>
                    A major focus of the curriculum was in <strong>Test Driven Development (TDD)
                    </strong> and how to take the &quot;red light green light&quot; approach to 
                    software development. By writing unit tests via Facebook&apos;s 
                    <strong> Jest</strong>, I gained a broader perspective of data 
                    flow and management as I continually identified more and more &quot;edge 
                    cases&quot; to account for in my code which helped to prevent future bugs.
                  </p>
                </article>
                <article className='right-content'>
                  <img src={backendDevImg} className='article-image' alt='Back-end development in Node.js' title='Back-end development in Node.js'/>
                  <div className='reflection'>
                    <h2 className='reflection-text'>Skills acquired</h2>
                    <div className='svg-wrapper'>
                      <NodeJSSVG className='devicon-svg wiggle'/>
                      <ExpressSVG className='devicon-svg wiggle'/>
                      <MongoDBSVG className='devicon-svg wiggle'/>
                      <AWSSVG className='devicon-svg wiggle'/>
                      <JestSVG className='other-svgs wiggle'/>
                    </div>
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
                    I chose the 401 Full-Stack JavaScript track due to JavaScript&apos;s versatility 
                    and close relationship with the browser, it was definitely the right call 
                    for me as I fell in love with coding in <strong>React</strong> (with
                    <strong> Redux</strong>) to quickly and efficiently develop user interfaces 
                    and reusable components.
                  </p>
                  <p>
                    I learned how to best utilize tools such as <strong>Webpack</strong> and 
                    <strong> Babel</strong> to transpile and bundle my code. My design skills 
                    received a complete overhaul as I took on 
                    <strong> SASS&apos;s</strong> OOP design approach for styling my full-stack 
                    applications.
                  </p>
                  <p>
                    I implemented <strong>Travis CI</strong> for continuous integration into 
                    my projects, coupled together with my <strong>TDD experience</strong> and 
                    <strong> AirBnB&apos;s ESLint </strong> configuration, my code is kept 
                    immaculately clean and up to industry set standards.
                  </p>
                </article>
                <article className='right-content'>
                  <img src={graduationImg} className='article-image' alt='Graduation day' title='Graduation day'/>
                  <div className='reflection'>
                    <h2 className='reflection-text'>Skills acquired</h2>
                    <div className='svg-wrapper'>
                      <ReactSVG className='other-svgs wiggle'/>
                      <ReduxSVG className='other-svgs wiggle'/>
                      <SassSVG className='devicon-svg wiggle'/>
                      <WebpackSVG className='other-svgs wiggle'/>
                      <TravisSVG className='other-svgs wiggle'/>
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
          <div className='mobile-story-view'>
            <article className='story'>
              <div className='titles-wrapper'>
                <h2>The Bootcamp Experience</h2>
                <h3>Rigorous but effective</h3>
              </div>
              <img src={CFWallImg} className='mobile-image' alt='Code Fellows wall art' title='Code Fellows wall art'/>
              <p>
                It takes true dedication, focus, and a whole lot of hard 
                work, but if you can hang in there long enough, then it will become one of 
                the most rewarding experiences of your life, just as it was for me.
              </p>
              <p>
                The Code Fellows curriculum is based on <a className='external-link' href='https://www.codefellows.org/blog/how-to-accelerate-your-learning-with-stacked-modules/' target='_blank' rel='noopener noreferrer'>stacked modules</a> where a new concept is taught each day, which would build upon the previous day. This &quot;bootcamp-style&quot; way of teaching ensures that many topics can be covered in a short amount of time. When we didn&apos;t fully grasped a concept, it was fine. We moved on. By continually moving forward we were forced to grasp the concepts that we barely understood in the first place as we applied them in new ways.
              </p>
              <p>
                I have never known a greater group of people than my fellow class mates, they 
                came from all walks of life and had such diverse backgrounds, the one thing 
                we all had in common though, was our passion for learning
              </p>
            </article>
            <article className='story'>
              <div className='titles-wrapper'>
                <h2>201: Foundations of Software Development</h2>
                <h3>Doing Things The Hard Way</h3>
              </div>
              <img src={vanillaJSImg} className='mobile-image' alt='Learning the fundamentals' title='Learning the fundamentals'/>
              <p>
                This was my introduction to many CS concepts such as <strong>Object-Oriented 
                Programming (OOP), Document Object Model (DOM) Manipulation & Traversal</strong>, 
                and utilizing Version Control workflows with <strong>GitHub </strong>
                and <strong>Git</strong> to bring projects together.
              </p>
              <p>
                As this was the introductory course to web development, we extensively 
                covered <strong>HTML5</strong> and best practices with structuring web 
                pages. Beyond this structuring aspect to the web, we also focused on gathering 
                a solid understanding of <strong>CSS3</strong> and how it&apos;s used to style 
                web pages.
              </p>
              <p>
                Now, about doing things the hard way. In the beginning, we were taught how 
                to create an application solely by using <strong>vanilla JavaScript</strong>, 
                no libraries, no dependencies, just good ol&apos; fashion plain JavaScript. 
                There was a good reason behind us learning vanilla JavaScript, it was because 
                we were laying down a foundation of how the language worked at it&apos;s core 
                from which our knowledge could expand upon.
              </p>
            </article>
            <article className='story'>
              <div className='titles-wrapper'>
                <h2>301: Intermediate Software Development</h2>
                <h3>Collaboration is the Key</h3>
              </div>
              <img src={agileImg} className='mobile-image' alt='Experience with Agile and SCRUM methodologies' title='Experience with Agile and SCRUM methodologies'/>
              <p>
                In the 301 course, we got our first taste of server-side code. In addition to 
                cementing our understanding of the fundamentals, we also focused on the 
                collaborative aspect of software development by regularly pair-programming with 
                classmates and adopting <strong>Agile methodologies</strong> into our 
                project&apos;s workflow while using services like <strong>Slack </strong> 
                and <strong>Trello</strong> to keep in constant contact with teammates.
              </p>
              <p>
                At this point in our education we were introduced to <strong>NPM</strong> and the 
                concept of installing and managing dependencies in our code, and from there 
                things really picked up. The first library we were introduced to was
                <strong> jQuery</strong> where we focused on DOM manipulation and 
                making <strong>AJAX</strong> calls to external APIs.
              </p>
              <p>
                Working with server-side routing, we learned how to construct data bases
                with <strong>PostgreSQL</strong> and make <strong>SQL</strong> queries. 
                After constructing our first full-stack application (in a week-long sprint) 
                we deployed our sites via <strong>Heroku</strong>.
              </p>
            </article>
            <article className='story'>
              <div className='titles-wrapper'>
                <h2>401: Advanced Software Development</h2>
                <h3>MongoDB, Express, Node.js</h3>
              </div>
              <img src={backendDevImg} className='mobile-image' alt='Back-end development in Node.js' title='Back-end development in Node.js'/>
              <p>
                Th advanced JavaScript course started off by diving deep into working with
                <strong> Node.js</strong> & <strong>Express</strong>. Before we could rely on 
                Express for all of our server-side routing needs, we had to build our own TCP 
                server from scratch and fully understand concepts such as <strong>REST, CRUD, 
                and asynchronous programming</strong>.
              </p>
              <p>
                  I utilized <strong>MongoDB</strong> & <strong>Mongoose</strong> to create 
                  cross-platform and open-source document-oriented NoSQL databases, complete 
                  with Schemas and full-CRUD functionality, this rounded out my knowledge working 
                  with data bases as I had previously learned how to work with SQL databases.
              </p>
              <p>
                A major focus of the curriculum was in <strong>Test Driven Development (TDD)
                </strong> and how to take the &quot;red light green light&quot; approach to 
                software development. By writing unit tests via Facebook&apos;s 
                <strong> Jest</strong>, I gained a broader perspective of data 
                flow and management as I continually identified more and more &quot;edge 
                cases&quot; to account for in my code which helped to prevent future bugs.
              </p>
            </article>
            <article className='story'>
              <div className='titles-wrapper'>
                <h2>Final Days: Birth of a Full-Stack Developer</h2>
                <h3>Mastering React</h3>
              </div>
              <img src={graduationImg} className='mobile-image' alt='Graduation day' title='Graduation day'/>
              <p>
                I chose the 401 Full-Stack JavaScript track due to JavaScript&apos;s versatility 
                and close relationship with the browser, it was definitely the right call 
                for me as I fell in love with coding in <strong>React</strong> (with
                <strong> Redux</strong>) to quickly and efficiently develop user interfaces 
                and reusable components.
              </p>
              <p>
                I learned how to best utilize tools such as <strong>Webpack</strong> and 
                <strong> Babel</strong> to transpile and bundle my code. My design skills 
                received a complete overhaul as I took on 
                <strong> SASS&apos;s</strong> OOP design approach for styling my full-stack 
                applications.
              </p>
              <p>
                I implemented <strong>Travis CI</strong> for continuous integration into 
                my projects, coupled together with my <strong>TDD experience</strong> and 
                <strong> AirBnB&apos;s ESLint </strong> configuration, my code is kept 
                immaculately clean and up to industry set standards.
              </p>
            </article>
          </div>
        <p className='bottom-text'>
          If you&apos;d like to see how I applied these skills, please see one of my 
          projects below.
        </p>
        </Fade>
        <div className='button-wrapper'>
          <Link to={ROUTES.RS_PROJECT}>
            <button className='raise'>REDEEMING SOLES</button>
          </Link>
          <Link to={ROUTES.BLOOMIO_PROJECT}>
            <button className='raise'>BLOOMIO</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Education;
