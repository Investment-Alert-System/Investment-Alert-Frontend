import React from 'react';
import logo from './logo.svg';
import { ScaleButton } from '@telekom/scale-components-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ScaleButton>
          test
        </ScaleButton>
      </header>
    </div>
  );
}

export default App;
