import React from 'react';
import PDF from 'react-pdf-js';
import ResumePDF from './daniel-shelton-resume.pdf';

import './resume-viewer.scss';

class PDFViewer extends React.Component {
  state = {};
 
  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }
 
  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }
 
  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }
 
  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#"><i className="fa fa-arrow-left"></i><button className='resume-btn'>Previous</button></a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#"><i className="fa fa-arrow-left"></i> <button className='resume-btn'>Previous</button></a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#"><button className='resume-btn'>Next</button> <i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#"><button className='resume-btn'>Next</button> <i className="fa fa-arrow-right"></i></a></li>;
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          <h2>{this.state.page}</h2>
          {nextButton}
        </ul>
      </nav>
    );
  }
 
  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div className='PDF-Viewer'>
        <PDF
          file={ResumePDF}
          onDocumentComplete={this.onDocumentComplete}
          page={this.state.page}
        />
        {pagination}
      </div>
    );
  }
}

export default PDFViewer;
