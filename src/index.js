import React from 'react';
import ReactDOM from 'react-dom';
import Provider from '@/context/Provider';
import App from '@/components/App';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '@/styles/GlobalStyle';
import * as serviceWorker from '@/utils/serviceWorker';
import { loadTrackScript } from '@/utils/baiduTrack';
import '@/configs/libs';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render((
  <React.Fragment>
    <Normalize />
    <GlobalStyle />
    <Provider>
      <App />
    </Provider>
  </React.Fragment>
), document.getElementById('root'));

if (process.env.NODE_ENV !== 'development') {
  loadTrackScript();
}

serviceWorker.register();
