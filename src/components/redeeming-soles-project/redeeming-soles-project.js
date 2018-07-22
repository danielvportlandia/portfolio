import React from 'react';

import architectureImg from '../../assets/rs-architecture.jpg';
import backEndTestingImg from '../../assets/rs-back-end-testing.jpg';
import frontEndTestingImg from '../../assets/rs-front-end-testing.jpg';
import loadTestingImg from '../../assets/rs-load-testing.jpg';
import profileFormImg from '../../assets/rs-profile-form.jpg';
import userFormImg from '../../assets/rs-user-form.jpg';
import adminFormImg from '../../assets/rs-admin-form.jpg';

import ClientSVG from '../../icomoon/SVG/bubbles3.svg';
import PlanningSVG from '../../icomoon/SVG/pencil2.svg';
import DebugSVG from '../../icomoon/SVG/bug.svg';
import UserSVG from '../../icomoon/SVG/user.svg';
import PrototypeSVG from '../../icomoon/SVG/joomla.svg';
import './redeeming-soles-project.scss';

class RSProject extends React.Component {
  render() {
    return (
      <div className='rs-project-page fade-in'>

        <div className='banner-wrapper parallax'>
          <h2>No Kids Left On The Sidelines</h2>
          <h3>A REDEEMING SOLES INITIATIVE</h3>
        </div>

        <div className='project-opener'>
          <p className='opening-text'>
            <a className='external-link' href='https://redeemingsoles.org/' target='_blank' rel='noopener noreferrer'>Redeeming Soles</a> is a Seattle-based non-profit organization who is committed to 
            providing proper footwear to underpriviledged men, women, and children throughout 
            the Pacific Northwest. <br/>
            <br/>
            Their <a className='external-link' href='https://redeemingsoles.org/programs/no-kids-left-on-the-sidelines' target='_blank' rel='noopener noreferrer'>No Kids Left On The Sidelines</a> program helps provide a firm foundation for at-risk youths to stand on by providing shoes and athletic gear to any child in need.
          </p>

          { /* Project Details */}
          <ul>
            <li><strong>Tools:</strong><br/>
              Travis CI, Jest, Artillery.io, <br/>
              Webpack, Heroku, <br/>
              Trello
            </li>
            <li><strong>Skills:</strong><br/>
              React with Redux, <br/>
              MongoDB with Mongoose, <br/>
              Node.js & Express, <br/>
              SASS
            </li>
            <li><strong>Roles:</strong><br/>
              Lead Back-End Developer <br/>
              TDD Engineer <br/>
              UX Designer <br/>
            </li>
            <li><strong>Timeline:</strong><br/>
              1 week (Prototype)
            </li>
          </ul>
        </div>

        <section>
          <article>
            <h4>Meeting with the Client <ClientSVG className='icomoon-svgs'/></h4>
            <div className='article-text-wrapper'>
              <p className='article-text'>
                For my final project in <strong>Code Fellows</strong>, my team and I wanted 
                to make something meaningful that would give back to our community, so we made 
                our pitch to <strong>Redeeming Soles</strong> to build them an interface 
                which school districts and coaches could utilize to make requests for 
                athletic footwear for their student athletes.
              </p>
              <p>
                In addition to the interface we would also provide them with an 
                inventory management system which would cut down on the response time 
                for these requests.
              </p>
              <p className='article-text'>
                During our meeting we provided them with realistic expectations for the 
                scope of our prototype that we would be providing them after a week-long 
                sprint and how the project could be implemented in phases.
              </p>
            </div>
          </article>
        </section>

        <section>
          <article>
            <h4>Planning <PlanningSVG className='icomoon-svgs'/></h4>
            <div className='article-details-wrapper'>

              <div className='article-text-wrapper'>
                <p className='article-text'>
                  <strong>User Stories:</strong><br/>
                  <UserSVG className='icomoon-svgs'/> As a coach, I want to be able to signup for an account. <br/>
                  <UserSVG className='icomoon-svgs'/> I want to be able to submit a form requesting shoes for individual students. <br/>
                  <UserSVG className='icomoon-svgs'/> I want to be able to add, edit, and remove requests before I submit the form. <br/>
                  <br/>
                  <UserSVG className='icomoon-svgs'/> As a warehouse employee, I want a simple inventory input form for shoes. <br/>
                  <UserSVG className='icomoon-svgs'/> I want to be immediately notified if the pair of shoes I&apos;m inputting has been requested so that I may distribute them quickly. <br/>
                </p>
                <p className='article-text'>
                  <strong>MVP:</strong><br/>
                  As the time-frame for a working prototype was only 1 week, I had to appropriately 
                  scope the project and parse out what the Most Viable Product (MVP) would look 
                  like. After doing so, all other features were placed into &quot;project 
                  phases&quot; for later implementation. Now, it was time to start building the 
                  prototype.
                </p>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <img src={architectureImg}/>
                  <figcaption>Application architecture wireframing</figcaption>
                </figure>
                <div className='article-text-wrapper'>
                  <p className='article-text'>
                    <strong>Wireframing:</strong><br/>
                    I quickly got to sketching out the back-end functionality of the application 
                    while focusing on how our system can be integrated into their current warehouse 
                    distribution system.
                  </p> 
                </div>
              </div>

            </div>
          </article>
        </section>

        <section>
          <article>
            <h4>Testing <DebugSVG className='icomoon-svgs'/></h4>
            <div className='article-details-wrapper'>

              <div className='article-text-wrapper'>
                <p className='article-text'>
                  <strong>Back-End Testing:</strong><br/>
                  In addition to being the solution architect and primary back-end developer on 
                  this project, I was also the primary TDD engineer. I performed all unit testing 
                  via Jest.
                </p>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <img src={backEndTestingImg}/>
                  <figcaption>Back-End Testing Results</figcaption>
                </figure>
              </div>

            </div>
          </article>
        </section>

        <section>
          <article>
            <div className='article-details-wrapper'>

              <div className='images-wrapper'>
                <figure>
                  <img src={frontEndTestingImg}/>
                  <figcaption>Front-End Testing Results</figcaption>
                </figure>
              </div>

              <div className='article-text-wrapper'>
                <p className='article-text'>
                  <strong>Front-End Testing:</strong><br/>
                  As a UX Designer on this project I worked with <strong>React</strong> and 
                  <strong> Redux</strong> extensively including writing the majority of our 
                  front-end unit & integration testing by utilizing <strong>React-Enzyme</strong>.
                </p>
              </div>

            </div>
          </article>
        </section>

        <section>
          <article>
            <div className='article-details-wrapper'>

              <div className='article-text-wrapper'>
                <p className='article-text'>
                  <strong>Load Testing:</strong><br/>
                  Performed via Artillery.io.
                </p>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <img src={loadTestingImg}/>
                  <figcaption>Load Testing Results</figcaption>
                </figure>
              </div>

            </div>
          </article>
        </section>

        <section>
          <article>
          <h4>Prototype Specs <PrototypeSVG className='icomoon-svgs'/></h4>
            <div className='article-details-wrapper'>

              <div className='article-text-wrapper'>
                <p className='article-text'>
                  <strong>Users:</strong><br/>
                  Can sign up for an account and input their profile information for 
                  auto-populating request forms and request tracking.
                </p>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <img src={profileFormImg}/>
                  <figcaption>Profile Form</figcaption>
                </figure>
              </div>

            </div>
          </article>
        </section>

        <section>
          <article>
            <div className='article-details-wrapper'>

              <div className='images-wrapper'>
                <figure>
                  <img src={userFormImg}/>
                  <figcaption>Request Form</figcaption>
                </figure>
              </div>

              <div className='article-text-wrapper'>
                <p className='article-text'>
                  <strong>Requests:</strong><br/>
                  The request form allows for multiple requests to be added, edited, 
                  and removed before form submission. Once submitted the order is 
                  tracked as a whole as well as the status of the individual request items.
                </p>
              </div>

            </div>
          </article>
        </section>

        <section>
          <article>
            <div className='article-details-wrapper'>

              <div className='article-text-wrapper'>
                <p className='article-text'>
                  <strong>Admin:</strong><br/>
                  By creating an admin view, warehouse workers are able to input each shoe 
                  by type as they are sorting the donations. 
                </p>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <img src={adminFormImg}/>
                  <figcaption>Administrative Inventory Form</figcaption>
                </figure>
              </div>

            </div>
          </article>
        </section>
        <a href='https://redeeming-soles-front.herokuapp.com/login' target='_blank' rel='noopener noreferrer'>
          <button className='raise'>CHECK OUT THE PROTOTYPE</button>
        </a>
      </div>
    );
  }
}

export default RSProject;
