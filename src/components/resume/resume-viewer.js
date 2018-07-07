import React from 'react';
import PDF from 'react-pdf-js';
import ResumePDF from './daniel-shelton-resume.pdf';

import './resume-viewer.scss';

class PDFViewer extends React.Component { 
  render() {
    return (
      <div className='PDF-Viewer'>
        <PDF file={ResumePDF}/>
      </div>
    );
  }
}

export default PDFViewer;
