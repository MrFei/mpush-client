import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

@observer
class ListPC extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    onItemClick: PropTypes.func.isRequired,
  };

  render() {
    const { data, onItemClick } = this.props;
    return (
      <Container>
        {data.map(item => (
          <Card key={item.movieId} movieInfo={item} onClick={() => onItemClick(item.movieId)} />
        ))}
      </Container>
    );
  }
}

export default ListPC;
