import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('searchStore')
@observer
class SearchList extends React.Component {
  static propTypes = {
    searchStore: PropTypes.object.isRequired,
  }

  render() {
    return (
      <MovieList listStore={this.props.searchStore} />
    );
  }
}

export default SearchList;
