import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
import DevelopmentEnv from './components/InDevelopment';

require('dotenv').config();

const { IN_DEVELOPMENT } = process.env;

console.log({ IN_DEVELOPMENT });
console.log(process.env);

function App() {
  return (
    <div className="App">
      { IN_DEVELOPMENT === true ? <DevelopmentEnv /> : '' }
      <StrangerThings />
    </div>
  );
}

export default App;
