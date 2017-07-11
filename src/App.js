import React from 'react';
import './App.css';
import Pomomaki from './Pomomaki'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       </div>
//     );
//   }
// }

// App Component should remain a littlel more specialized and exist really
// only to contain our application itself 

const App = () => {
  return (
    <div className="App">
      <Pomomaki name="maki"/>
      <Pomomaki name="marinu"/>
    </div>
  );
};

export default App;
