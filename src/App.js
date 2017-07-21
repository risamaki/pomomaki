import React from 'react';
import './App.css';
import PomomakiTimer from './PomomakiTimer'
import {Layout} from 'element-react';

const App = () => {
  return (
    <div className="App">
      <Layout.Row gutter="20">
        <Layout.Col offset="12" span="12"><PomomakiTimer/></Layout.Col>
      </Layout.Row>
    </div>
  );
};

export default App;
