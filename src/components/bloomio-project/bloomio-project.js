import React from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import bloomioDiagramImg from '../../assets/bloomio-schema-diagram.jpg';
import bloomioTestingImg from '../../assets/bloomio-testing.jpg';
import bloomioCactiImg from '../../assets/bloomio-cacti.jpg';

import IdeaSVG from '../../lib/icomoon/accessibility.svg';
import PlanningSVG from '../../lib/icomoon/pencil2.svg';
import DebugSVG from '../../lib/icomoon/bug.svg';
import UserSVG from '../../lib/icomoon/user.svg';
import PrototypeSVG from '../../lib/icomoon/joomla.svg';

import './bloomio-project.scss';

class BloomioProject extends React.Component {
  render() {
    return (
      <div className='bloomio-project-page fade-in'>
        
        <div className='banner-wrapper parallax'>
          <h2>Bloomio</h2>
        </div>

        <div className='project-opener'>
          <p className='opening-text'>
            <a className='external-link' href='https://github.com/Bloomio/Bloomio-backend/blob/master/README.md' target='_blank' rel='noopener noreferrer'>Bloomio</a> is a plant management API which users can use to store all their individual plants in their &quot;planter box&quot; where watering updates are provided based on the plant&apos;s watering schedule, season, and last watered date.
          </p>

          { /* Project Details */}
          <ul>
            <li><strong>Tools:</strong><br/>
              Travis CI, Jest, <br/>
              Artillery.io, Twilio, <br/>
              AWS&apos;s S3
            </li>
            <li><strong>Skills:</strong><br/>
              MongoDB with Mongoose, <br/>
              Node.js & Express, <br/>
              Moment.js
            </li>
            <li><strong>Roles:</strong><br/>
              Visionary <br/>
              Back-End Developer <br/>
              TDD Engineer <br/>
            </li>
            <li><strong>Timeline:</strong><br/>
              1 week (Prototype)
            </li>
          </ul>
        </div>

        <section>
          <article>
            <Fade top className='reveals'>
              <h4>Idea Origins <IdeaSVG className='icomoon-svgs'/></h4>
            </Fade>
            <div className='article-details-wrapper'>
            
              <div className='article-text-wrapper'>
                <Fade left className='reveals'>
                  <p className='article-text'>
                    Living in apartments most of my life I have always had house plants, to 
                    not only clean the air in the apartment but also to spruce them up a bit, 
                    however, I never did have much luck keeping my plants alive (<strong>except 
                    for my cacti</strong>). My plants often died from either being over watered 
                    or not watered enough. Even though I could keep track of their watering 
                    schedules with a calendar,  it was still a lot of work to manually log which 
                    plants to water and when and to figure out when their next watering date should 
                    be. <br/>
                    <br/>
                    So that&apos;s where the idea for <strong>Bloomio</strong> originated. Bloomio 
                    was the answer to helping others manage their plants and keept them happy and 
                    alive.
                  </p>
                </Fade>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <Flip top className='reveals'>
                    <img src={bloomioCactiImg}/>
                  </Flip>
                </figure>
              </div>

            </div>
          </article>
        </section>

        <section>
          <article>
            <Fade top className='reveals'>
              <h4>Planning <PlanningSVG className='icomoon-svgs'/></h4>
            </Fade>
            <div className='article-details-wrapper'>

              <div className='article-text-wrapper'>
                <Fade left className='reveals'>
                  <p className='article-text'>
                    <strong>User Stories:</strong><br/>
                    <UserSVG className='icomoon-svgs'/> I want to be able to login to my account. <br/>
                    <UserSVG className='icomoon-svgs'/> I want to be able to upload a profile pic. <br/>
                    <UserSVG className='icomoon-svgs'/> I want to be able to add, edit, and remove plants in my collection. <br/>
                    <UserSVG className='icomoon-svgs'/> I want to be notified via text if I have plants that require care. <br/>
                    <UserSVG className='icomoon-svgs'/> I want to be able to find plants in the database with care instructions. <br/>
                  </p>
                  <p className='article-text'>
                    <strong>Wireframing:</strong><br/>
                    Working off of the user stories, my team and I put together our wireframing.
                  </p>
                  <p className='article-text'>
                    <strong>MVP:</strong><br/>
                    As we scoped the project, some desired functionality such as fertilizer 
                    reminders and having a well-detailed master data base of plants were considered 
                    not attainable within our week-long sprint and thus pushed into phase 2 of this 
                    project.
                  </p>
                </Fade>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <Flip top className='reveals'>
                    <img src={bloomioDiagramImg}/>
                    <figcaption>Application architecture wireframing</figcaption>
                  </Flip>
                </figure>
              </div>

            </div>
          </article>
        </section>

           <section>
          <article>
            <Fade top className='reveals'>
              <h4>Testing <DebugSVG className='icomoon-svgs'/></h4>
            </Fade>
            <div className='article-details-wrapper'>

              <div className='article-text-wrapper'>
                <Fade left className='reveals'>
                  <p className='article-text'>
                    <strong>Back-End Testing:</strong><br/>
                    Unit testing performed via Jest with over 90% in line-coverage.
                  </p>
                </Fade>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <Flip top className='reveals'>
                    <img src={bloomioTestingImg}/>
                    <figcaption>Back-End Testing Results</figcaption>
                  </Flip>
                </figure>
              </div>

            </div>
          </article>
        </section>

        <section>
          <article>
          <Fade top className='reveals'>
            <h4>Project Details <PrototypeSVG className='icomoon-svgs'/></h4>
          </Fade>
            <div className='article-details-wrapper'>

              <div className='article-text-wrapper'>
                <Fade top cascade className='reveals'>
                  <h5>Collaboration:</h5>
                  <p>
                    After a thorough planning phase, we scaffolded the project and pair 
                    programmed to create all the necessary schemas of the project. Testing 
                    was done alongside development with a &quot;red green&quot; approach.
                  </p>
                </Fade>

                  <h5>External API Integration:</h5>
                  <p>
                    With our schemas in place, we began the process of integrating external 
                    APIs into the project. The first being AWS&apos;s S3 for image hosting, the 
                    second, was Twilio for sending daily plant notifications to the user at a 
                    preferred time.
                  </p>
              </div>

              <div className='article-text-wrapper'>
                <Fade top className='reveals'>
                  <h5>Problem Encountered:</h5>
                  <p>
                      One problem we encountered in this project was trying to manage the 
                      next water date functionality, as dates proved to be tricky to deal with, 
                      after some research, we implemented <strong> Moment.js</strong> to resolve 
                      this problem quickly.
                  </p>
                </Fade>

                <Fade top>
                  <h5>What I learned:</h5>
                  <p>
                      How to manage web pre-hooks and post-hooks with schemas <br/>
                      how to effectively test with Jest. <br/>
                      How to connect applications to <strong>AWS&apos;s S3</strong> for image 
                      hosting and <strong>Twilio</strong> for providing text-based services.
                  </p>
                </Fade>
              </div>

            </div>
          </article>
        </section>

        <a href='https://github.com/Bloomio/Bloomio-backend/blob/master/README.md' target='_blank' rel='noopener noreferrer'>
          <button className='raise'>CHECKOUT THE PROJECT ON GITHUB</button>
        </a>
      </div>
    );
  }
}

export default BloomioProject;
