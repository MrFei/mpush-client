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
      loadMore: PropTypes.func.isRequired,
      scrollPos: PropTypes.number.isRequired,
      setScrollPos: PropTypes.func.isRequired,
    }).isRequired,
  }

  render() {
    const { data, loadMore, scrollPos, setScrollPos } = this.props.goodListStore;
    return (
      <MovieList
        data={data}
        loadMore={loadMore}
        scrollPos={scrollPos}
        setScrollPos={setScrollPos}
      />
    );
  }
}

export default GoodMovie;
