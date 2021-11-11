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
  results: Array<Article>
}

interface Article {
  section?: string
  subsection?: string
  title?: string
  abstract?: string
  url?: string
  uri?: string
  byline?: string
  item_type?: string
  updated_date?: string 
  created_date?: string
  published_date?: string
  material_type_facet?: string
  kicker?: string
  des_facet?: Array<string>
  org_facet?: Array<string>
  per_facet?: Array<string>
  geo_facet?: Array<string>
  multimedia: Array<MultimediaInfo>
  short_url?: string
}

interface MultimediaInfo {
  caption: string
  copyright: string
  format: string
  height: number
  subtype: string
  type: string
  url: string
  width: number
}

export const App: React.FC = () => {
  const [searchedNews, setSearchedNews] = useState<NewsInfoApi>()

  useEffect(() => {
    makeFetch('home')
  }, [])

  const makeFetch = (searchedCategory: string): void => {
    fetchTopStories(searchedCategory)
    .then(data => setSearchedNews(data))
    // .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <Header makeFetch={makeFetch}/> 
      <main className="main-section">
        <Switch>
          <Route exact path="/quick-news" render={() => <Home searchedNews={searchedNews} />}/>
          <Route exact path="/saved-news" render={() => <SavedNewsContainer />}/>
          <Route path="*" render={() => <Error />}/>
        </Switch>
      </main>
    </div>
  );
}

