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

const Provider = ({ children }) => (
  providers.reverse().reduce((child, { component, props }) => (
    createElement(component, props, child)
  ), children)
);

export default Provider;
