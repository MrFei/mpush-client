import { createElement } from 'react';
import { Router } from 'react-router-dom';
import { Provider as Mobx } from 'mobx-react';
import * as stores from '@/models/stores';
import history from './history';

const providers = [
  {
    component: Router,
    props: {
      history,
    },
  },
  {
    component: Mobx,
    props: stores,
  },
];

const Provider = ({ children }) => (
  providers.reverse().reduce((child, { component, props }) => (
    createElement(component, props, child)
  ), children)
);

export default Provider;
