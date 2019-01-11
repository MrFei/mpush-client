import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import loadable from 'react-loadable';
import { throttle } from 'lodash';
import { LoadingBar } from '@/components/Loading';
import { CircularProgress } from '@material-ui/core';

const ListPC = loadable({
  loader: () => import('./PC'),
  loading: LoadingBar,
});
const ListMobi = loadable({
  loader: () => import('./Mobi'),
  loading: LoadingBar,
});
const PageLoading = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    margin-top: 20px;
    font-size: 16px;
    color: #3c3c3c;
  }
`;
const MoreLoading = styled.div`
  padding: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
    listStore: PropTypes.shape({
      data: PropTypes.array,
      loadMore: PropTypes.func,
      scrollPos: PropTypes.number,
      setScrollPos: PropTypes.func,
      pageLoading: PropTypes.bool,
      moreLoading: PropTypes.bool,
      allLoaded: PropTypes.bool,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.onScroll = throttle(this.onScroll, 200).bind(this);
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    if (this.scrollRef.current) {
      this.scrollRef.current.scrollTop = this.props.listStore.scrollPos;
    }
  }

  componentWillUnmount() {
    if (this.scrollRef.current) {
      const { scrollTop } = this.scrollRef.current;
      this.props.listStore.setScrollPos(scrollTop);
    }
  }

  render() {
    const { data, pageLoading, moreLoading, allLoaded } = this.props.listStore;
    const { isMobile } = this.props.appStore;
    if (pageLoading) {
      return (
        <PageLoading>
          <CircularProgress />
          <span>正在获取电影列表</span>
        </PageLoading>
      );
    }
    return (
      <ScrollContainer onScroll={this.onScroll} ref={this.scrollRef}>
        {isMobile ? <ListMobi data={data} /> : <ListPC data={data} />}
        {moreLoading && (
          <MoreLoading>
            <CircularProgress size={20} />
          </MoreLoading>
        )}
        {allLoaded && (
          <MoreLoading>
            <span>已全部加载</span>
          </MoreLoading>
        )}
      </ScrollContainer>
    );
  }

  onScroll = () => {
    const { loadMore, moreLoading } = this.props.listStore;
    if (this.scrollRef.current && !moreLoading) {
      const { scrollHeight, scrollTop, clientHeight } = this.scrollRef.current;
      if (Math.abs(clientHeight - scrollHeight + scrollTop) < 10) {
        loadMore();
      }
    }
  }
}

export default MovieList;
