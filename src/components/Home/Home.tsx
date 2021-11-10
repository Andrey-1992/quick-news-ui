import React from 'react';
import './Home.css';

interface NewsInfoApi {
  status?: string
  copyright?: string
  section?: string
  last_updated?: string
  num_results?: number
  results?: Array<string>
}

interface Props {
  searchedNews?: NewsInfoApi
}

export const Home: React.FC<Props> = ({searchedNews}) => {
  if (searchedNews) {
    console.log(searchedNews)
    return (
      <div className="Home">
        <p>Home</p>
        <p>{searchedNews.status}</p>
      </div>
    );
  }
  return (
    <div className="Home">
      <p>Home</p>
    </div>
  );
}