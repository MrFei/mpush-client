import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('comingListStore')
@observer
class ComingMovie extends React.Component {
  static propTypes = {
    comingListStore: PropTypes.object.isRequired,
  }

  render() {
    return (
      <MovieList listStore={this.props.comingListStore} />
    );
  }
}

export default ComingMovie;
