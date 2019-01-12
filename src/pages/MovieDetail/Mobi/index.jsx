import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class MobiDetail extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props;
    return data.title;
  }
}

export default MobiDetail;
