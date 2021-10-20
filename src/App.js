import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
import DevelopmentEnv from './components/InDevelopment';

const { href } = document.location;

console.log({ IN_DEVELOPMENT });
console.log(process.env);

function App() {
  return (
    <div className="App">
      { href === 'https://igmriegel-ft.herokuapp.com/' ? <DevelopmentEnv /> : '' }
      <StrangerThings />
    </div>
  );
}

export default App;
