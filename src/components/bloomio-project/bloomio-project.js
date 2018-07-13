import React from 'react';

import bloomioDiagramImg from '../../assets/bloomio-schema-diagram.jpg';
import bloomioTestingImg from '../../assets/bloomio-testing.jpg';
import bloomioCactiImg from '../../assets/bloomio-cacti.jpg';
import DebugSVG from '../../icomoon/SVG/bug.svg';

import './bloomio-project.scss';

class BloomioProject extends React.Component {
  render() {
    return (
      <div className='bloomio-project-page'>
        
        <div className='banner-wrapper'>
          <h2>Bloomio</h2>
        </div>

        <p className='opening-text'>
          <a className='external-link' href='https://github.com/Bloomio/Bloomio-backend/blob/master/README.md' target='_blank' rel='noopener noreferrer'>Bloomio</a> is a plant management API which users can use to store all their individual plants in their &quot;planter box&quot; where watering updates are provided based on the plant&apos;s watering schedule, season, and last watered date.
        </p>

        <section>
          <article>
            <h4>Idea Origins</h4>
            <div className='article-details-wrapper'>
            
              <div className='article-text-wrapper'>
                <p className='article-text'>
                  Living in apartments I have always had plants, not only do they clean the air but 
                  they spruce the place up, however, I never did have much luck keeping my plant 
                  collection alive (<strong>except for my cacti</strong>). My plants often died 
                  from either being over watered or not watered enough. Even though I could keep
                  track of their watering schedules via a calendar,  it was still a lot of work 
                  to manually log which plants to water and when and to figure out when their 
                  next watering date should be. <br/>
                  <br/>
                  So that&apos;s where the idea for <strong>Bloomio</strong> came from and the hope 
                  for this project is to help others keep their plants alive.
                </p>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <img src={bloomioCactiImg}/>
                </figure>
              </div>

            </div>
          </article>
        </section>

        <section>
          <article>
            <h4>Planning</h4>
            <div className='article-details-wrapper'>

              <div className='article-text-wrapper'>
                <p className='article-text'>
                  <strong>User Stories:</strong><br/>
                  overall product info.
                </p>
                <p className='article-text'>
                  <strong>Wireframing:</strong><br/>
                  wireframing process.
                </p>
                <p className='article-text'>
                  <strong>MVP:</strong><br/>
                  What is MVP and scoping the project.
                </p>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <img src={bloomioDiagramImg}/>
                  <figcaption>Application architecture wireframing</figcaption>
                </figure>
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
                  Unit testing performed via Jest.
                </p>
              </div>

              <div className='images-wrapper'>
                <figure>
                  <img src={bloomioTestingImg}/>
                  <figcaption>Back-End Testing Results</figcaption>
                </figure>
              </div>

            </div>
          </article>
        </section>

        <section>
          <article>
          <h4>Outcome</h4>
            <div className='article-details-wrapper'>

              <div className='article-text-wrapper'>
                <p className='article-text'>
                  <strong>What I learned:</strong><br/>
                    How to manage web pre and post hooks, how to effectively test with Jest. 
                    How to manage releationships between various schemas and their routes.
                </p>
              </div>

              {/* <div className='images-wrapper'>
                <figure>
                  <img src={profileFormImg}/>
                  <figcaption>Profile Form</figcaption>
                </figure>
              </div> */}

            </div>
          </article>
        </section>

        <aside>
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
        </aside>

        <a href='https://github.com/Bloomio/Bloomio-backend/blob/master/README.md' target='_blank' rel='noopener noreferrer'>
          <button className='raise'>CHECKOUT THE PROJECT ON GITHUB</button>
        </a>
      </div>
    );
  }
}

export default BloomioProject;
