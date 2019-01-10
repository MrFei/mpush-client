import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('goodListStore')
@observer
class GoodMovie extends React.Component {
  static propTypes = {
    goodListStore: PropTypes.object.isRequired,
  }

  render() {
    return (
      <MovieList listStore={this.props.goodListStore} />
    );
  }
}

export default GoodMovie;
