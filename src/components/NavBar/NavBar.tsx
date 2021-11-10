import './NavBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NewsCategoriesForm } from '../NewsCategoriesForm/NewsCategoriesForm'


export const NavBar: React.FC = () => {
  return (
    <div className="NavBar">
      <NavLink className='go-home' to="/quick-news">
        <p className="nav-buttons">Home</p>
      </NavLink>
      <NavLink className='go-saved-news' to="/saved-news">
        <p className="nav-buttons">Saved News</p>
      </NavLink>
      <NewsCategoriesForm />
    </div>
  );
}



