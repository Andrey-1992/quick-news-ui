import './Header.css';
import React from 'react';
import { NavBar } from '../NavBar/NavBar'

interface Props {
  makeFetch: (searchedCategory: string) => void;
}

export const Header: React.FC<Props> = ({makeFetch}) => {
  let currentTime = new Date();
  console.log(currentTime)

  return (
    <div className="Header">
      <div className="project-tittle">
        <h1>Quick News</h1>
        {/* <p>{currentTime}</p> */}
      </div>
      <NavBar />
    </div>
  );
}