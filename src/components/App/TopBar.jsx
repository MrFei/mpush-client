import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';
import styles from './TopBar.module.less';

@inject('appStore')
@observer
class TopBar extends React.Component {
  static propTypes = {
    appStore: PropTypes.shape({
      topTitle: PropTypes.string,
      toggleDrawer: PropTypes.func,
    }).isRequired,
  }

  render() {
    const { topTitle, toggleDrawer } = this.props.appStore;
    return (
      <AppBar position="fixed" className={styles.container}>
        <Toolbar>
          <IconButton
            className={styles['menu-button']}
            color="inherit"
            aria-label="Open Drawer"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={styles.title} variant="h6" color="inherit" noWrap>
            {topTitle}
          </Typography>
          <div className={styles.grow} />
          <div className={styles.search}>
            <div className={styles['search-icon']}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: styles['input-container'],
                input: styles['input-box'],
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
