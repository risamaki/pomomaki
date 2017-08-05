import React from 'react';
import Settings from '../../src/components/Settings.js'

import {Layout} from 'element-react';

import '../../src/styles/App.css';
import '../../src/styles/theme/col.css';
import '../../src/styles/theme/row.css';

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
