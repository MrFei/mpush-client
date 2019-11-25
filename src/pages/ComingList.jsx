import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('comingStore')
@observer
class ComingList extends React.Component {
  static propTypes = {
    comingStore: PropTypes.object.isRequired,
  };

  render() {
    return <MovieList listStore={this.props.comingStore} />;
  }
}

export default ComingList;
