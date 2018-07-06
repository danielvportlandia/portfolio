import React from 'react';
import discGolfImg from '../../assets/disc-golf.jpg';
import writingImg from '../../assets/writing.jpg';
import codingImg from '../../assets/programming.jpg';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <p className='hero-text'>
          Daniel Shelton <br/> is a 
          Full-Stack Developer in Seattle, 
          Washington. <br/>Passionate about...
        </p>
        <div className='image-container'>
          <img src={writingImg} />
          <h3 className='image-text writing-img-text'>Writing</h3>
        </div>
        <div className='image-container'>
          <img src={discGolfImg} />
          <h3 className='image-text disc-golf-text'>Disc Golf</h3>
        </div>
        <div className='image-container'>
          <img src={codingImg} />
          <h3 className='image-text programming-text'>Programming</h3>
        </div>
      </div>
    );
  }
}
