import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import loadable from 'react-loadable';
import { withRouter } from 'react-router-dom';
import { LoadingBar } from '@/components/Loading';
import PageLoading from '@/components/PageLoading';
import { SentimentVeryDissatisfied } from '@material-ui/icons';
import { Dialog } from '@material-ui/core';

const DetailPC = loadable({
  loader: () => import('./PC'),
  loading: LoadingBar,
});
const DetailMobi = loadable({
  loader: () => import('./Mobi'),
  loading: LoadingBar,
});

const BadIcon = styled(SentimentVeryDissatisfied)`
  && {
    font-size: 50px;
    margin-bottom: 15px;
  }
`;
const ErrorContainer = styled.div`
  height: ${p => p.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

@withRouter
@inject('appStore', 'detailStore')
@observer
class MovieDetail extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    appStore: PropTypes.shape({
      isMobile: PropTypes.bool,
    }).isRequired,
    detailStore: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      errorMsg: PropTypes.string,
    }).isRequired,
  }

  render() {
    const { isMobile } = this.props.appStore;
    return (
      <Dialog
        open
        fullWidth
        scroll="paper"
        onClose={this.onClose}
        fullScreen={isMobile}
      >
        {this.renderContent()}
      </Dialog>
    );
  }

  renderContent = () => {
    const { isMobile } = this.props.appStore;
    const { data, loading, errorMsg } = this.props.detailStore;
    const dialogHeight = isMobile ? '100%' : '200px';
    if (errorMsg) {
      return (
        <ErrorContainer height={dialogHeight}>
          <BadIcon />
          <span>详情加载失败，请返回重试</span>
        </ErrorContainer>
      );
    }
    if (loading) {
      return <PageLoading height={dialogHeight}>正在获取电影详情</PageLoading>;
    }
    return isMobile ? <DetailMobi data={data} onClose={this.onClose} /> : <DetailPC data={data} onClose={this.onClose} />;
  }

  onClose = () => {
    const { history, match } = this.props;
    const baseUrl = match.path.replace('/detail/:movieId', '');
    history.push(baseUrl);
  }
}

export default MovieDetail;
