import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Summary from './Summary';
import MovieInfo from './MovieInfo';
import ResInfo from './ResInfo';

const Container = styled.div`
  padding: 10px;
`;

const Content = ({ data }) => (
  <Container>
    <Header data={data} />
    <Summary summary={data.summary} />
    <MovieInfo data={data} />
    <ResInfo resInfo={data.resLink} />
  </Container>
);

Content.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Content;
