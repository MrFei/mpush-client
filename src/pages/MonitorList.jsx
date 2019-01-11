import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('monitorStore')
@observer
class MonitorList extends React.Component {
  static propTypes = {
    monitorStore: PropTypes.object.isRequired,
  }

  render() {
    return (
      <MovieList listStore={this.props.monitorStore} />
    );
  }
}

export default MonitorList;
