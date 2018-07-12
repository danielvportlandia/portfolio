import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

import './redeeming-soles-project.scss';

class RSProject extends React.Component {
  render() {
    return (
      <div className='rs-project-page'>
        <div className='banner-wrapper'>
          <h2>No Kids Left On The Sidelines</h2>
          <h3>A REDEEMING SOLES INITIATIVE</h3>
        </div>
        <p>
          <a className='external-link' href='https://redeemingsoles.org/' target='_blank' rel='noopener noreferrer'>Redeeming Soles</a> is a Seattle-based non-profit organization who is committed to 
          providing proper footwear to underpriviledged men, women, and children throughout 
          the Pacific Northwest. <br/>
          <br/>
          Their No <a className='external-link' href='' target='_blank' rel='noopener noreferrer'>Kids Left On The Sidelines</a> program helps provide a firm foundation for at-risk youths to stand on by providing shoes and athletic gear to any child in need.
        </p>
        <section>
          <article>
            <h2>Meeting with the Client</h2>
            <p>Discuss the meeting</p>
            <ul>
              <li>setting expectations</li>
              <li>establishing phases</li>   
            </ul>
          </article>
        </section>
        <aside>
          <ul>
            <li><strong>Tools:</strong><br/>
            Travis CI, Jest, Artillery.io, <br/>
            Webpack, SASS, Heroku, <br/>
            Trello
            </li>
            <li><strong>Skills:</strong><br/>
            React with Redux, <br/>
            MongoDB with Mongoose, <br/>
            Node.js & Express
            </li>
            <li><strong>Roles:</strong><br/>
            Solution Architect <br/>
            TDD Engineer <br/>
            UX Designer <br/>
            </li>
            <li><strong>Timeline:</strong><br/>
            1 week (Prototype)
            </li>
          </ul>
        </aside>
        <Link to={ROUTES.BLOOMIO_PROJECT}>
          <button className='raise'>SEE NEXT PROJECT</button>
        </Link>
      </div>
    );
  }
}

export default RSProject;
