import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('goodListStore')
@observer
class GoodMovie extends React.Component {
  static propTypes = {
    goodListStore: PropTypes.shape({
      data: PropTypes.array.isRequired,
    }).isRequired,
  }

  render() {
    const { data } = this.props.goodListStore;
    return (
      <MovieList data={data} />
    );
  }
}

export default GoodMovie;
