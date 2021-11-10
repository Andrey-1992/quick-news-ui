import './NavBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NewsCategoriesForm } from '../NewsCategoriesForm/NewsCategoriesForm'


export const NavBar: React.FC = () => {
  const newsCategory = [
    {Name:'Select a field', Value:''}, {Name:'Arts', Value:'arts'}, {Name:'Automobiles', Value:'automobiles'}, {Name:'Books', Value:'books'}, 
    {Name:'Business', Value:'business'}, {Name:'Fashion', Value:'fashion'}, {Name:'Food', Value:'food'},
    {Name:'Health', Value:'health'}, {Name:'Home', Value:'home'}, 
    {Name:'Insider', Value:'insider'}, {Name:'Magazine', Value:'magazine'},
    {Name:'Movies', Value:'movies'}, {Name:'NY Region', Value:'nyregion'},
    {Name:'Obituaries', Value:'obituaries'}, {Name:'Opinion', Value:'opinion'},{Name:'Politics', Value:'politics'},
    {Name:'Realstate', Value:'realstate'}, {Name:'Science', Values:'science'}, {Name:'Sports', Value:'sports'}, 
    {Name:'Sunday Review', Value:'sundayreview'}, {Name:'Technology', Value:'technology'}, {Name:'Theater', Values:'theater'},
    {Name:'T-Magazine', Value:'t-magazine'}, {Name:'Travel', Value:'travel'}, {Name:'Upshot', Values:'upshot'},
    {Name:'Us', Value:'us'}, {Name:'World', Value:'world'}
  ]

  
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




/*
arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, 
science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world
*/