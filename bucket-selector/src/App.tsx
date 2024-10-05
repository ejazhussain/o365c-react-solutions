import React from 'react';
import logo from './logo.svg';
import './App.css';
import BucketSelector from './BucketSelector';
import MultiSelect from './MultiSelect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React App</p>            
      </header>
      <MultiSelect />
    </div>
  );
}

export default App;
