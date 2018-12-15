import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '@/context/Provider';
import App from '@/components/App';
import * as serviceWorker from '@/utils/serviceWorker';
import '@/configs/libs';
import '@/styles/global/index.less';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render((
  <Provider>
    <App />
  </Provider>
), document.getElementById('root'));

serviceWorker.register();
