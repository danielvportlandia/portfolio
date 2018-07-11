import React from 'react';
import { Link } from 'react-router-dom';
import PDFViewer from './resume-viewer';
import PDFButton from './resume-download-button';

import ROUTES from '../../routes';
import './resume.scss';

class Resume extends React.Component {
  render() {
    return (
      <div className='resume-page'>
        <a 
        href={require('./daniel-shelton-resume.pdf')} download='daniel-shelton-resume'
        >
          <PDFButton/>
        </a>
        <PDFViewer/>
        <p>
          If you would like to know more about my qualifications, then please click below.
        </p>
        <div className='button-wrapper'>
          <Link to={ROUTES.BACKGROUND}>
            <button className='raise'>SEE MORE BACKGROUND DETAILS</button>
          </Link>
          <Link to={ROUTES.EDUCATION}>
            <button className='raise'>SEE MORE EDUCATION DETAILS</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Resume;
