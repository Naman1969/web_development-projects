import React from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import {BsBookmarkCheck} from 'react-icons/bs'
const Info = () => {
  return (
    <div className='info section'>
      <div className='infoContainer container'>
        <div className="titleDiv flex">
          <h2>Travel to make memories all around the world</h2>
          <button className='btn'>
            view all
          </button>
        </div>
        <div className='cardDiv grid'>
          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <RxCalendar className='icon'/>
            </div>
            <span className="cardTitle">Book and relax</span>
            <p>you can book tickets from phone or call the airline</p>
          </div>
          <div className="singleCard grid">
            <div className="iconDiv flex colorTwo">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>you can book tickets from phone or call the airline</p>
          </div>
          <div className="singleCard grid">
            <div className="iconDiv flex colorOne">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className="cardTitle">Save More</span>
            <p>you can book tickets from phone or call the airline</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
