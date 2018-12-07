import React from 'react';
import ReactDOM from 'react-dom';
import App from '@pages';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(React.createElement(App), document.getElementById('root'));

serviceWorker.register();
