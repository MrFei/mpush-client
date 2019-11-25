import React from 'react';
import PropTypes from 'prop-types';
import MsgBar from '@/components/MsgBar';

export default Component =>
  class WithLoadable extends React.Component {
    static propTypes = {
      error: PropTypes.object,
      timedOut: PropTypes.bool.isRequired,
      retry: PropTypes.func.isRequired,
      pastDelay: PropTypes.bool.isRequired,
    };

    static defaultProps = {
      error: null,
    };

    render() {
      const { error, retry, timedOut, pastDelay, ...props } = this.props;
      if (error || timedOut) {
        return <MsgBar open message="加载出错了" button="重试" onButtonClick={retry} />;
      }
      if (pastDelay) {
        return <Component {...props} />;
      }
      return null;
    }
  };
