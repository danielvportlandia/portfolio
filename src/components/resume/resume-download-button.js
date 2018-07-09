import React from 'react';
import autoBind from '../../utils/auto-bind';

import './resume-download-button.scss';

class PDFButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: 'Download Resumé PDF',
    };

    autoBind.call(this, PDFButton);
  }

  handleLoading(e) {
    e.stopPropagation();
    e.persist();
    e.target.classList.add('loading');
    e.target.setAttribute('disabled', 'disabled');
    setTimeout(() => {
      e.target.classList.remove('loading');
      e.target.removeAttribute('disabled');
      this.setState({
        buttonText: 'Thank you!',
      });
    }, 1500);
  }
  
  render() {
    return (
        <button 
        className='download-button' 
        data-label={this.state.buttonText} 
        onClick={this.handleLoading}
        >{this.state.buttonText}
        </button>
    );
  }
}

export default PDFButton;
