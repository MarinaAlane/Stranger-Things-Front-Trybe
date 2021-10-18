import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

const developmentEnv = () => {
  const inDevelopment = process.env.REACT_DEVELOPMENT_ENV;
  if (inDevelopment === true) {
    return <h1>Em desenvolvimento</h1>;
  }

  return '';
};

function App() {
  return (
    <div className="App">
      <developmentEnv />
      <StrangerThings />
    </div>
  );
}

export default App;
