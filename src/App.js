import React from 'react';
import './App.css';
import Main from './component/Main'

function App() {
  return (
    <div className="App">
      <Main name="facebook" button="facebook" />
      <Main name="gmail" button="gmail"/>
      <Main />
    </div>
  );
}

export default App;
