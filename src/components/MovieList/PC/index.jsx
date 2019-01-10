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

const StyledCard = styled(Card)`
  margin: 5px;
`;

@observer
class ListPC extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props;
    return (
      <Container>
        {data.map(item => <StyledCard key={item.movieId} movieInfo={item} />)}
      </Container>
    );
  }
}

export default ListPC;
