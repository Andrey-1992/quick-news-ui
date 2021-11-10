import React from 'react';
import './App.css';
import { Error } from '../Error/Error';

export const App: React.FC = () => {
  return (
    <div className="App">
      <p>App</p>
      <Error />
    </div>
  );
}

