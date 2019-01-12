import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Container = styled.div`
  height: ${p => p.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  margin-top: 20px;
  font-size: 16px;
  color: #3c3c3c;
`;

const PageLoading = ({ children, height }) => (
  <Container height={height}>
    <CircularProgress />
    {children && <Text>{children}</Text>}
  </Container>
);

PageLoading.propTypes = {
  children: PropTypes.string,
  height: PropTypes.string,
};

PageLoading.defaultProps = {
  children: '',
  height: '100%',
};

export default PageLoading;
