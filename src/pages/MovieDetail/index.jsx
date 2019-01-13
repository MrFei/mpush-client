import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import loadable from 'react-loadable';
import { withRouter } from 'react-router-dom';
import { LoadingBar } from '@/components/Loading';
import { Dialog } from '@material-ui/core';

const DetailPC = loadable({
  loader: () => import('./PC'),
  loading: LoadingBar,
});
const DetailMobi = loadable({
  loader: () => import('./Mobi'),
  loading: LoadingBar,
});

@withRouter
@inject('appStore')
@observer
class MovieDetail extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    appStore: PropTypes.shape({
      isMobile: PropTypes.bool,
    }).isRequired,
  }

  render() {
    const { isMobile } = this.props.appStore;
    return (
      <Dialog
        open
        fullWidth
        scroll="paper"
        fullScreen={isMobile}
        aria-labelledby="dialog-title"
      >
        {isMobile ? <DetailMobi onClose={this.onClose} /> : <DetailPC onClose={this.onClose} />}
      </Dialog>
    );
  }

  onClose = () => {
    const { history, match } = this.props;
    const baseUrl = match.path.replace('/detail/:movieId', '');
    history.push(baseUrl);
  }
}

export default MovieDetail;
