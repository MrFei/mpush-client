import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject('detailStore')
@observer
class MobiDetail extends React.Component {
  static propTypes = {
    detailStore: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
    }).isRequired,
  }

  render() {
    const { data, loading } = this.props.detailStore;
    if (!loading) {
      return data.title;
    }
    return 'loading';
  }
}

export default MobiDetail;
