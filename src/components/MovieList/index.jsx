import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import loadable from 'react-loadable';
import { throttle } from 'lodash';
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
    listStore: PropTypes.shape({
      data: PropTypes.array,
      loadMore: PropTypes.func,
      scrollPos: PropTypes.number,
      setScrollPos: PropTypes.func,
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
    const { data } = this.props.listStore;
    const { isMobile } = this.props.appStore;
    return (
      <ScrollContainer onScroll={this.onScroll} ref={this.scrollRef}>
        {isMobile ? <ListMobi data={data} /> : <ListPC data={data} />}
      </ScrollContainer>
    );
  }

  onScroll = () => {
    if (this.scrollRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = this.scrollRef.current;
      if (Math.abs(clientHeight - scrollHeight + scrollTop) < 10) {
        this.props.listStore.loadMore();
      }
    }
  }
}

export default MovieList;