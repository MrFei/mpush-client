import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'context/Provider';
import App from 'pages';
import * as serviceWorker from './serviceWorker';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render((
  <Provider>
    <App />
  </Provider>
), document.getElementById('root'));

serviceWorker.register();
