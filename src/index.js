import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/index.css';
import App from './App';
import registerServiceWorker from '../src/utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
