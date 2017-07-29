import React from 'react';
import './App.css';
import PomomakiTimer from './PomomakiTimer'
import Settings from './Settings'
import {Layout} from 'element-react';
import './col.css'
import './row.css'


const App = () => {
  return (
    <div className="App">
        <Layout.Row>
            <Layout.Col offset="1" span="15">
              <Settings/>
            </Layout.Col>
        </Layout.Row>
    </div>
  );
};

export default App;
