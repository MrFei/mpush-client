import { createElement } from 'react';
import { Router } from 'react-router-dom';
import history from './history';

const providers = [
  {
    component: Router,
    props: {
      history,
    },
  },
];

export default () => providers.reverse().reduce((child, { component, props }) => createElement(component, props, child), null);
