import './NavBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NewsCategoriesForm } from '../NewsCategoriesForm/NewsCategoriesForm'

interface Props {
  makeFetch: (searchedCategory: string) => void;
}

export const NavBar: React.FC<Props> = ({makeFetch}) => {
  return (
    <div className="nav-bar">
      <NavLink className='go-home' to="/quick-news">
        <p className="nav-buttons">Home</p>
      </NavLink>
      <NavLink className='go-saved-news' to="/saved-news">
        <p className="nav-buttons">Saved News</p>
      </NavLink>
      <NewsCategoriesForm makeFetch={makeFetch}/>
    </div>
  );
}



