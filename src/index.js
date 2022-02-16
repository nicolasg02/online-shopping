import React from 'react';
import ReactDOM from 'react-dom';

import { themeChange } from 'theme-change';

import './index.css';
import App from './App';

themeChange();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
