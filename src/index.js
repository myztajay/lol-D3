import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from './components/MainContainer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainContainer />, document.getElementById('root'));
registerServiceWorker();
