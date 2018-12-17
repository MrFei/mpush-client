import React from 'react';
import { LinearProgress, CircularProgress } from '@material-ui/core';
import withLoadable from './withLoadable';
import styles from './index.module.less';

export const LoadingBar = withLoadable(() => <LinearProgress className={styles['loading-bar']} color="primary" />);

export const Circular = withLoadable(() => (
  <div className={styles['circular-container']}>
    <CircularProgress />
  </div>
));
