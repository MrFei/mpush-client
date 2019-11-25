import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { SentimentVeryDissatisfied } from '@material-ui/icons';

const BadIcon = styled(SentimentVeryDissatisfied)`
  && {
    font-size: 60px;
    margin-bottom: 15px;
  }
`;
const Message = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => (
  <Message>
    <BadIcon />
    <Typography component="h4" variant="h4">
      404 Not Found
    </Typography>
  </Message>
);

export default NotFound;
