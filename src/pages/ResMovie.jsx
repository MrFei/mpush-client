import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('resListStore')
@observer
class ResMovie extends React.Component {
  static propTypes = {
    resListStore: PropTypes.object.isRequired,
  }

  render() {
    return (
      <MovieList listStore={this.props.resListStore} />
    );
  }
}

export default ResMovie;
