import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { AppBar, Toolbar, Typography, IconButton, DialogTitle, DialogContent } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import PageLoading from '@/components/PageLoading';
import ErrorMsg from '../ErrorMsg';
import ContentPage from '../ContentPage';

const Title = styled(DialogTitle)`
  && {
    padding: 0;
  }
`;
const Content = styled(DialogContent)`
  && {
    padding: 0;
  }
`;
const CloseBtn = styled(IconButton)`
  && {
    position: absolute;
    right: 0;
  }
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
      <Fragment>
        <Title id="dialog-title">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                {!loading && data ? data.title : ''}
              </Typography>
              <CloseBtn color="inherit" onClick={onClose}>
                <CloseIcon />
              </CloseBtn>
            </Toolbar>
          </AppBar>
        </Title>
        <Content>
          {this.renderContent()}
        </Content>
      </Fragment>
    );
  }

  renderContent = () => {
    const { loading, errorMsg, data } = this.props.detailStore;
    if (errorMsg) {
      return <ErrorMsg height="300px" />;
    }
    if (loading) {
      return <PageLoading height="300px">正在获取电影详情</PageLoading>;
    }
    return <ContentPage data={data} />;
  }
}

export default PCDetail;
