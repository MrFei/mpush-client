import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('searchListStore')
@observer
class Search extends React.Component {
  static propTypes = {
    searchListStore: PropTypes.object.isRequired,
  }

  render() {
    return (
      <MovieList listStore={this.props.searchListStore} />
    );
  }
}

export default Search;
