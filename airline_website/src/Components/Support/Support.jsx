import React from 'react'
import gridImage from '../../assets/col-.png'

const Support = () => {
  return (
    <div className='support container section'>
      <div className='sectionContainer'>
        <div className='titleDiv'>
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans,see what to expect along the journey!</p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className='number colorOne'>01</span>
              <h4>Travel Requirement for Dubai</h4>
              <p>
                Find help with booking and Travel plans,see what to expect along the journey to your favourite destinations.
              </p>
            </div>
            <div className="singleInfo">
              <span className='number colorTwo'>02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and Travel plans,see what to expect along the journey to your favourite destinations.
              </p>
            </div>
            <div className="singleInfo">
              <span className='number colorOne'>03</span>
              <h4>Multiple risk travel insurance</h4>
              <p>
                Find help with booking and Travel plans,see what to expect along the journey to your favourite destinations.
              </p>
            </div>

          </div>

          <div className="imgDiv">
            <img src={gridImage} alt="" />
          </div>

        </div>

      </div>
    </div>
  )
}

export default Support
