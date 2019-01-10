import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('spiderListStore')
@observer
class SpiderMovie extends React.Component {
  static propTypes = {
    spiderListStore: PropTypes.object.isRequired,
  }

  render() {
    return (
      <MovieList listStore={this.props.spiderListStore} />
    );
  }
}

export default SpiderMovie;
