import React from 'react';
import HooksExample from '../HooksExample';
import ClassExample from '../ClassExample';
import UseReducerExaple from '../UseReducerExample';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassExample />
        <HooksExample />
        <UseReducerExaple />
      </header>
    </div>
  );
}

export default App;
