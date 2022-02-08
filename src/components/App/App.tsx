import './App.css';
import React from 'react';
import { Error } from '../Error/Error';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header/Header';
import { NewsCardContainer } from '../NewsCardContainer/NewsCardContainer';
import { SavedNewsContainer } from '../SavedNewsContainer/SavedNewsContainer';
import { fetchTopStories, postSavedNews } from '../Util/util';
import { useState, useEffect } from 'react';
interface Body {
  abstract?: string
  byline?: string
  title?: string
  multimediaurl?: string
  multimediacaption?: string
  urlink?: string
  section?: string
}

export const App: React.FC = () => {
  const [searchedNews, setSearchedNews] = useState<any>()

  useEffect(() => {
    makeFetch('world')
  }, [])

  const makeFetch = (searchedCategory: string): void => {
    fetchTopStories(searchedCategory)
    .then(data => setSearchedNews(data))
    .catch(error => console.log(error))
  }

  const saveToStorage = (objBody: Body) => {
    postSavedNews(objBody)
  }

  return (
    <div className="App">
      <Header makeFetch={makeFetch}/> 
      <main className="main-section">
        <Switch>
          <Route exact path="/" render={() => <NewsCardContainer searchedNews={searchedNews} saveToStorage={saveToStorage} />}/>
          <Route exact path="/saved-news" render={() => <SavedNewsContainer />}/>
          <Route path="*" render={() => <Error />}/>
        </Switch>
      </main>
    </div>
  );
}

