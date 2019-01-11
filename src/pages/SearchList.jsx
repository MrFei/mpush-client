import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';
import BadIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const Message = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    margin-top: 20px;
    font-size: 16px;
    color: #3c3c3c;
  }
`;

@inject('searchStore')
@observer
class SearchList extends React.Component {
  static propTypes = {
    searchStore: PropTypes.object.isRequired,
  }

  render() {
    const { searchStore } = this.props;
    if (!searchStore.data.length) {
      return (
        <Message>
          <BadIcon fontSize="large" />
          <span>未找到搜索结果，试试页面顶部的搜索框...</span>
        </Message>
      );
    }
    return (
      <MovieList listStore={searchStore} />
    );
  }
}

export default SearchList;
