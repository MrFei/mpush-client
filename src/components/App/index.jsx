import React from 'react';
import PropTypes from 'prop-types';
import loadable from 'react-loadable';
import { observer, inject } from 'mobx-react';
import { CssBaseline, Toolbar } from '@material-ui/core';
import { LoadingBar } from '@/components/Loading';
import TopBar from './TopBar';
import Menu from './Menu';
import styles from './index.module.less';

const Drawer = loadable({
  loader: () => import('@material-ui/core/Drawer'),
  loading: LoadingBar,
});
const SwipeableDrawer = loadable({
  loader: () => import('@material-ui/core/SwipeableDrawer'),
  loading: LoadingBar,
});

@inject('appStore')
@observer
class App extends React.Component {
  static propTypes = {
    appStore: PropTypes.shape({
      isMobile: PropTypes.bool,
    }).isRequired,
  }

  state = {
    showNav: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.appStore.isMobile && prevState.showNav) {
      return {
        showNav: false,
      };
    }
    return null;
  }

  render() {
    const { isMobile } = this.props.appStore;
    return (
      <div className={styles.container}>
        <CssBaseline />
        <TopBar onMenuClick={this.toggleDrawer(true)} />
        <nav className={styles.drawer}>
          {isMobile ? (
            <SwipeableDrawer
              disableBackdropTransition
              open={this.state.showNav}
              onClose={this.toggleDrawer(false)}
              onOpen={this.toggleDrawer(true)}
            >
              <Menu />
            </SwipeableDrawer>
          ) : (
            <Drawer
              open
              variant="permanent"
              classes={{ paper: styles['drawer-paper'] }}
            >
              <Menu />
            </Drawer>
          )}
        </nav>
        <main className={styles.content}>
          <Toolbar />
          <h1>Content</h1>
        </main>
      </div>
    );
  }

  toggleDrawer = open => () => {
    this.setState({ showNav: open });
  }
}

export default App;
