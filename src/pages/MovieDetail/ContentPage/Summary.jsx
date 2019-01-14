import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const TextCard = styled(Paper)`
  && {
    margin-top: 10px;
    p {
      padding: 15px;
    }
  }
`;

const Summary = ({ summary }) => (
  <TextCard>
    <p>{summary}</p>
  </TextCard>
);

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default Summary;
