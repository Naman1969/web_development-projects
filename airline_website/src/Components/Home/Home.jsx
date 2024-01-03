import React from 'react';
import video from '../../assets/video1.mp4';
import aeroplane from '../../assets/takeoff.png';

const Home = () => {
  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1>Create Ever-lasting Memories with Us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>
        <img src={aeroplane} alt="Aeroplane" className='plane' />
      </div>
    </div>
  );
};

export default Home;
