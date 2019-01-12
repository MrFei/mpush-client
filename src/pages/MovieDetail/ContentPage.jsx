import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;

class Content extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props;
    return (
      <Container>
        {JSON.stringify(data)}
      </Container>
    );
  }
}

export default Content;
