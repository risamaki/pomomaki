import React from 'react';
import './App.css';
import Pomomaki from './Pomomaki'

// App Component should remain a littlel more specialized and exist really
// only to contain our application itself 

const App = () => {
  return (
    <div className="App">
      <Pomomaki name="maki"/>
    </div>
  );
};

export default App;
