import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('goodStore')
@observer
class GoodList extends React.Component {
  static propTypes = {
    goodStore: PropTypes.object.isRequired,
  };

  render() {
    return <MovieList listStore={this.props.goodStore} />;
  }
}

export default GoodList;
