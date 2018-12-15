import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Snackbar, Button, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

class SimpleSnackbar extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    button: PropTypes.string,
    dismiss: PropTypes.bool,
    onButtonClick: PropTypes.func,
    message: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  }

  static defaultProps = {
    open: false,
    button: '',
    dismiss: false,
    onButtonClick: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.open !== prevState.open) {
      return { open: nextProps.open };
    }
    return null;
  }

  render() {
    const { classes, button, message } = this.props;
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
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }

  onButtonClick = () => {
    this.props.onButtonClick();
    this.handleClose();
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway' || (!this.props.dismiss && reason === 'timeout')) {
      return;
    }
    this.setState({ open: false });
  };
}

export default withStyles(styles)(SimpleSnackbar);
