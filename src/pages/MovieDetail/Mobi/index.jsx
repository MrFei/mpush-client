import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ArrowBackIos as BackIcon } from '@material-ui/icons';
import PageLoading from '@/components/PageLoading';
import ErrorMsg from '../ErrorMsg';
import ContentPage from '../ContentPage';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;

@inject('detailStore')
@observer
class MobiDetail extends React.Component {
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
      <Container>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={onClose}>
              <BackIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              {!loading && data ? data.title : ''}
            </Typography>
          </Toolbar>
        </AppBar>
        <Content>
          {this.renderContent()}
        </Content>
      </Container>
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

export default MobiDetail;
