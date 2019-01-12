import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import PageLoading from '@/components/PageLoading';
import ErrorMsg from '../ErrorMsg';
import ContentPage from '../ContentPage';

const CloseBtn = styled(IconButton)`
  && {
    position: absolute;
    right: 0;
  }
`;
const Content = styled.div`
  height: 500px;
  overflow-y: auto;
`;

@inject('detailStore')
@observer
class PCDetail extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    detailStore: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      errorMsg: PropTypes.string,
    }).isRequired,
  }

  render() {
    const { onClose } = this.props;
    const { loading, data } = this.props.detailStore;
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              {!loading && data ? data.title : ''}
            </Typography>
            <CloseBtn color="inherit" onClick={onClose}>
              <CloseIcon />
            </CloseBtn>
          </Toolbar>
        </AppBar>
        <Content>
          {this.renderContent()}
        </Content>
      </div>
    );
  }

  renderContent = () => {
    const { loading, errorMsg, data } = this.props.detailStore;
    if (errorMsg) {
      return <ErrorMsg />;
    }
    if (loading) {
      return <PageLoading>正在获取电影详情</PageLoading>;
    }
    return <ContentPage data={data} />;
  }
}

export default PCDetail;
