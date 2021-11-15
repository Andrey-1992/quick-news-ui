import './Header.css';
import React from 'react';
import { NavBar } from '../NavBar/NavBar'

interface Props {
  makeFetch: (searchedCategory: string) => void;
}

export const Header: React.FC<Props> = ({makeFetch}) => {
  const dateObj = new Date();
  const dateArray = dateObj.toString().split(' ');
  const todaysDate = dateArray.splice(1, 3).join(' / ')

  return (
    <div className="header">
      <div className="project-tittle">
        <h1>Quick News</h1>
        <p className="today-date-text">{todaysDate}</p>
      </div>
      <NavBar makeFetch={makeFetch}/>
    </div>
  );
}