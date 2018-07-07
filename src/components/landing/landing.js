import React from 'react';
import { Link } from 'react-router-dom';
import discGolfImg from '../../assets/disc-golf.jpg';
import writingImg from '../../assets/writing.jpg';
import codingImg from '../../assets/programming.jpg';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='landing-page'>
        <p className='hero-text'>
          Daniel Shelton <br/> 
          is a Full-Stack JavaScript Developer in Seattle, Washington. <br/>
          He is most passionate about...
        </p>
        <div className='image-container'>
          <img className='writing-image' src={writingImg} />
          <h3 className='image-text writing-img-text'>Writing</h3>
          <p className='writing-details'>Testing</p>
        </div>
        <div className='image-container'>
          <img src={discGolfImg} />
          <h3 className='image-text disc-golf-text'>Disc Golf</h3>
        </div>
        <div className='image-container'>
          <img src={codingImg} />
          <h3 className='image-text programming-text'>Programming</h3>
        </div>
        <button type='button'><Link to='/about'>Learn More</Link></button>
      </div>
    );
  }
}
