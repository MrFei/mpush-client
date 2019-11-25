import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '@/context/theme';
import { Snackbar, Button, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const CloseButton = styled(IconButton)`
  && {
    padding: ${theme.spacing.unit / 2}px;
  }
`;

class SimpleSnackbar extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    button: PropTypes.string,
    dismiss: PropTypes.bool,
    onButtonClick: PropTypes.func,
    message: PropTypes.string.isRequired,
  };

  static defaultProps = {
    open: false,
    button: '',
    dismiss: false,
    onButtonClick: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const { button, message } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            button && (
              <Button key="undo" color="secondary" size="small" onClick={this.onButtonClick}>
                {button}
              </Button>
            ),
            <CloseButton key="close" aria-label="Close" color="inherit" onClick={this.handleClose}>
              <CloseIcon />
            </CloseButton>,
          ]}
        />
      </div>
    );
  }

  onButtonClick = () => {
    this.props.onButtonClick();
    this.handleClose();
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway' || (!this.props.dismiss && reason === 'timeout')) {
      return;
    }
    this.setState({ open: false });
  };
}

export default SimpleSnackbar;
