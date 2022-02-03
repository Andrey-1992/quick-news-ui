import './NewsCategoriesForm.css';
import React from 'react';
import { useState } from 'react';
interface Props {
  makeFetch: (searchedCategory: string) => void;
}

export const NewsCategoriesForm: React.FC<Props> = ({makeFetch}) => {
  const newsCategory = [
    {Name:'Select a field', Value:''}, {Name:'Arts', Value:'arts'}, {Name:'Automobiles', Value:'automobiles'}, {Name:'Books', Value:'books'}, 
    {Name:'Business', Value:'business'}, {Name:'Fashion', Value:'fashion'}, {Name:'Food', Value:'food'},
    {Name:'Health', Value:'health'}, {Name:'Home', Value:'home'}, 
    {Name:'Insider', Value:'insider'}, {Name:'Magazine', Value:'magazine'},
    {Name:'Movies', Value:'movies'}, {Name:'NY Region', Value:'nyregion'},
    {Name:'Obituaries', Value:'obituaries'}, {Name:'Opinion', Value:'opinion'},{Name:'Politics', Value:'politics'},
    {Name:'Real State', Value:'realstate'}, {Name:'Science', Values:'science'}, {Name:'Sports', Value:'sports'}, 
    {Name:'Sunday Review', Value:'sundayreview'}, {Name:'Technology', Value:'technology'}, {Name:'Theater', Values:'theater'},
    {Name:'T-Magazine', Value:'t-magazine'}, {Name:'Travel', Value:'travel'}, {Name:'Upshot', Values:'upshot'},
    {Name:'Us', Value:'us'}, {Name:'World', Value:'world'}
  ]

  const [ selectedCategory, setSelectedCategory ] = useState<string>('home');

  const sendCategory = (event: { preventDefault: () => void; }): void => {
    event.preventDefault()
    makeFetch(selectedCategory);
  }

  
  return (
    <div className="news-categories-form">
      <form className="categories-form">
        <select className="option-style" onChange={(event) => setSelectedCategory(event.target.value)}>
          {newsCategory.map(list => (
            <option className="option-choice-style" value={list.Value}>
              {list.Name}
            </option>
          ))}
        </select>
          <button className="form-btn" onClick={sendCategory}>Search 🔎</button>
      </form>
    </div>
  );
}
