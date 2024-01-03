import React from 'react';
import bali from '../../assets/Bali.jpg';
import Alaska from '../../assets/Alaska.jpg';
import london from '../../assets/london.jpg';
import london_2 from '../../assets/london_2.jpg';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';
import person4 from '../../assets/person4.jpg';
const travelers = [{
  id: 1,
  destinationImage: bali,
  travelerImage: person1,
  travelerName: 'Naman Sogani',
  socialLink: '@namansog'
},
{
  id: 2,
  destinationImage: Alaska,
  travelerImage: person2,
  travelerName: 'scarley',
  socialLink: '@scarleyjohn'
},
{
  id: 3,
  destinationImage: london,
  travelerImage: person3,
  travelerName: 'harry',
  socialLink: '@harrypotter'
},
{
  id: 4,
  destinationImage: london_2,
  travelerImage: person4,
  travelerName: 'lily',
  socialLink: '@lilypotter'
}
];

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>Top travelers of this month</h2>
        <div className="travelersContainer grid">
          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => (
              <div key={id} className="singleTraveler">
                <img src={destinationImage} className='destinationImage' alt="Bali" />
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} className='travelerImage' alt="Traveler" />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Travelers;
