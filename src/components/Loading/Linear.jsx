import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { LinearProgress } from '@material-ui/core';
import MsgBar from '@/components/MsgBar';

const linearStyles = {
  width: '100%',
  position: 'fixed',
  zIndex: 10000,
  top: 0,
  left: 0,
};
const Linear = (props) => {
  if (props.error || props.timedOut) {
    return (
      <MsgBar
        open
        message="加载出错了"
        button="重试"
        onButtonClick={props.retry}
      />
    );
  }
  if (props.pastDelay) {
    return createPortal(<LinearProgress style={linearStyles} color="primary" />, document.body);
  }
  return null;
};

Linear.propTypes = {
  error: PropTypes.object,
  timedOut: PropTypes.bool.isRequired,
  retry: PropTypes.func.isRequired,
  pastDelay: PropTypes.bool.isRequired,
};

Linear.defaultProps = {
  error: null,
};

export default Linear;
