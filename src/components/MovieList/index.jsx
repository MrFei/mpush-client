import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import loadable from 'react-loadable';
import { throttle } from 'lodash';
import { withRouter, Route } from 'react-router-dom';
import { LoadingBar } from '@/components/Loading';
import PageLoading from '@/components/PageLoading';
import MsgBar from '@/components/MsgBar';
import { CircularProgress } from '@material-ui/core';
import { openURLNewTab } from '@/utils';

const ListPC = loadable({
  loader: () => import('./PC'),
  loading: LoadingBar,
});
const ListMobi = loadable({
  loader: () => import('./Mobi'),
  loading: LoadingBar,
});
const MovieDetail = loadable({
  loader: () => import('@/pages/MovieDetail'),
  loading: LoadingBar,
});

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
  -webkit-overflow-scrolling: touch;
`;

@withRouter
@inject('appStore')
@observer
class MovieList extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
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
      errorMsg: PropTypes.string,
    }).isRequired,
  };

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
    const { data, pageLoading, moreLoading, allLoaded, errorMsg, loadMore } = this.props.listStore;
    const { isMobile } = this.props.appStore;
    return (
      <ScrollContainer onScroll={this.onScroll} ref={this.scrollRef}>
        {pageLoading ? (
          <PageLoading>正在获取电影列表</PageLoading>
        ) : isMobile ? (
          <ListMobi data={data} onItemClick={this.onItemClick} />
        ) : (
          <ListPC data={data} onItemClick={this.onItemClick} />
        )}
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
        <MsgBar open={!!errorMsg} message={errorMsg} button="重试" onButtonClick={loadMore} />
        <Route path={`${this.props.match.url}/detail/:movieId`} component={MovieDetail} />
      </ScrollContainer>
    );
  }

  onScroll = () => {
    const { loadMore, moreLoading } = this.props.listStore;
    if (this.scrollRef.current && !moreLoading) {
      const { scrollHeight, scrollTop, clientHeight } = this.scrollRef.current;
      if (scrollHeight - scrollTop - clientHeight < 200) {
        loadMore();
      }
    }
  };

  onItemClick = movieId => {
    const { history, match } = this.props;
    if (match.path === '/coming') {
      openURLNewTab(`https://m.douban.com/movie/subject/${movieId}`);
    } else {
      history.push(`${match.url}/detail/${movieId}`);
    }
  };
}

export default MovieList;
