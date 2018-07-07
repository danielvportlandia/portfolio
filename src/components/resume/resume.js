import React from 'react';
import PDFViewer from './resume-viewer';

class Resume extends React.Component {
  render() {
    return (
      <div className='resume-page'>
        <a href={require('./daniel-shelton-resume.pdf')} download='daniel-shelton-resume'>
          <button>Download Resume PDF</button>
        </a>
        <PDFViewer/>
      </div>
    );
  }
}

export default Resume;
