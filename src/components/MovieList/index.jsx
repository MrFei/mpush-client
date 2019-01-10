import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const ScrollContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;

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
    return (
      <ScrollContainer>
        {isMobile ? <ListMobi data={data} /> : <ListPC data={data} />}
      </ScrollContainer>
    );
  }
}

export default MovieList;
