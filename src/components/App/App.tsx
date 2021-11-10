import './App.css';
import React from 'react';
import { Error } from '../Error/Error';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import { SavedNewsContainer } from '../SavedNewsContainer/SavedNewsContainer';
import { fetchTopStories } from '../Util/util';
import { useState, useEffect } from 'react';


export const App = () => {
  return (
    <div className="App">
      <Header /> 
      <main className="main-section">
        <Switch>
          <Route exact path="/quick-news" render={() => <Home />}/>
          <Route exact path="/saved-news" render={() => <SavedNewsContainer />}/>
          <Route path="*" render={() => <Error />}/>
        </Switch>
      </main>
    </div>
  );
}

