import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';
import DevelopmentEnv from './components/InDevelopment';

function App() {
  return (
    <div className="App">
      { process.env.IN_DEVELOPMENT ? <DevelopmentEnv /> : '' }
      <StrangerThings />
    </div>
  );
}

export default App;
