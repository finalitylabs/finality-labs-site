import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'open-sans-fontface';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
