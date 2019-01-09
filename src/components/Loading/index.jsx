import React from 'react';
import styled from 'styled-components';
import { LinearProgress, CircularProgress } from '@material-ui/core';
import withLoadable from './withLoadable';

const LoadingBarContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
`;
export const LoadingBar = withLoadable(() => (
  <LoadingBarContainer>
    <LinearProgress color="primary" />
  </LoadingBarContainer>
));

const CircularContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Circular = withLoadable(() => (
  <CircularContainer>
    <CircularProgress />
  </CircularContainer>
));
