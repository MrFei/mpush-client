import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import loadable from 'react-loadable';
import { LoadingBar } from '@/components/Loading';

const ListPC = loadable({
  loader: () => import('./PC'),
  loading: LoadingBar,
});
const ListMobi = loadable({
  loader: () => import('./Mobi'),
  loading: LoadingBar,
});

@inject('appStore')
@observer
class MovieList extends React.Component {
  static propTypes = {
    appStore: PropTypes.shape({
      isMobile: PropTypes.bool,
    }).isRequired,
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props;
    const { isMobile } = this.props.appStore;
    if (isMobile) {
      return <ListMobi data={data} />;
    }
    return <ListPC data={data} />;
  }
}

export default MovieList;
