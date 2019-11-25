import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import MovieList from '@/components/MovieList';

@inject('resourceStore')
@observer
class ResourceList extends React.Component {
  static propTypes = {
    resourceStore: PropTypes.object.isRequired,
  };

  render() {
    return <MovieList listStore={this.props.resourceStore} />;
  }
}

export default ResourceList;
