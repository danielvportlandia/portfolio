import React from 'react';
import PDFViewer from './resume-viewer';
import PDFButton from './resume-download-button';

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
      </div>
    );
  }
}

export default Resume;
