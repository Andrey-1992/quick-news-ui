import './Loading.css'
import React from 'react';

export const Loading: React.FC = () => {
  return  (
    <div className="loading-styling">
      <h5>Loading...</h5>
      <img className='error-img' src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="404-img"/>
    </div>
  )
}