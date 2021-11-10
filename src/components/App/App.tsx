import './App.css';
import React from 'react';
import { Error } from '../Error/Error';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import { SavedNewsContainer } from '../SavedNewsContainer/SavedNewsContainer';
import { fetchTopStories } from '../Util/util';
import { useState, useEffect } from 'react';

interface NewsInfoApi {
  status?: string
  copyright?: string
  section?: string
  last_updated?: string
  num_results?: number
  results?: Array<string>
}

export const App: React.FC = () => {
  const [searchedNews, setSearchedNews] = useState<NewsInfoApi>({})

  useEffect(() => {
    makeFetch('home')
  }, [])

  const makeFetch = (searchedCategory: string) => {
    fetchTopStories(searchedCategory)
    .then(data => setSearchedNews(data))
    // .then(data => console.log(data))
  }

  return (
    <div className="App">
      <Header makeFetch={makeFetch}/> 
      <main className="main-section">
        <Switch>
          <Route exact path="/quick-news" render={() => <Home searchedNews={searchedNews}/>}/>
          <Route exact path="/saved-news" render={() => <SavedNewsContainer />}/>
          <Route path="*" render={() => <Error />}/>
        </Switch>
      </main>
    </div>
  );
}

