import React from 'react';
import discGolfImg from '../../assets/disc-golf.jpg';
import writingImg from '../../assets/writing.jpg';
import codingImg from '../../assets/programming.jpg';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <p>
          Daniel Shelton is a full stack developer in Seattle, Washington. Passionate about...
        </p>
        <div className='image-container'>
          <img src={writingImg} />
          <h2 className='image-text'>Writing</h2>
        </div>
        <div className='image-container'>
          <img src={discGolfImg} />
          <h2 className='image-text'>Disc Golf</h2>
        </div>
        <div className='image-container'>
          <img src={codingImg} />
          <h2 className='image-text'>Programming</h2>
        </div>
      </div>
    );
  }
}
