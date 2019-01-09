import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '@/context/Provider';
import App from '@/components/App';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '@/styles/GlobalStyle';
import * as serviceWorker from '@/utils/serviceWorker';
import '@/configs/libs';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render((
  <Provider>
    <Normalize />
    <GlobalStyle />
    <App />
  </Provider>
), document.getElementById('root'));

serviceWorker.register();
