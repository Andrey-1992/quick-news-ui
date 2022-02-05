import './Error.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Error: React.FC = () => {
  return (
    <div className='error'>
      <NavLink to='/'>
        <img className='error-img' src="https://i.pinimg.com/736x/1b/c0/cd/1bc0cd2ef1a060eebb3deb5d55ecf2d6.jpg" alt="404-img"/>
      </NavLink>
    </div>
  )
}