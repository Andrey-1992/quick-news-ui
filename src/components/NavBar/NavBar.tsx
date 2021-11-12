import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { NewsCategoriesForm } from '../NewsCategoriesForm/NewsCategoriesForm'

interface Props {
  makeFetch: (searchedCategory: string) => void;
}

export const NavBar: React.FC<Props> = ({makeFetch}) => {
  return (
    <div className="nav-bar">
      <Link className='go-home' to="/">
        <p className="nav-buttons">Home</p>
      </Link>
      <Link className='go-saved-news' to="/saved-news">
        <p className="nav-buttons">Saved News</p>
      </Link>
      <NewsCategoriesForm makeFetch={makeFetch}/>
    </div>
  );
}



