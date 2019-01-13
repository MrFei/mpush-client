import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SentimentVeryDissatisfied } from '@material-ui/icons';

const ErrorContainer = styled.div`
  height: ${p => p.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const BadIcon = styled(SentimentVeryDissatisfied)`
  && {
    font-size: 50px;
    margin-bottom: 15px;
  }
`;

const ErrorMsg = ({ height }) => (
  <ErrorContainer height={height}>
    <BadIcon />
    <span>详情加载失败，请返回重试</span>
  </ErrorContainer>
);

ErrorMsg.propTypes = {
  height: PropTypes.string,
};

ErrorMsg.defaultProps = {
  height: '100%',
};

export default ErrorMsg;
