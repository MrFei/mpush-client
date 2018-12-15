import React from 'react';
import PropTypes from 'prop-types';
import loadable from 'react-loadable';
import { observer, inject } from 'mobx-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline, Toolbar } from '@material-ui/core';
import { LoadingBar } from '@/components/Loading';
import styles from './index.module.less';
import TopBar from './TopBar';
import Menu from './Menu';

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
      toggleDrawer: PropTypes.func,
      showNav: PropTypes.bool,
      menus: PropTypes.array,
      defaultPath: PropTypes.string,
    }).isRequired,
  }

  render() {
    const { isMobile, menus, defaultPath, showNav, toggleDrawer } = this.props.appStore;
    return (
      <div className={styles.container}>
        <CssBaseline />
        <TopBar />
        <nav className={styles.drawer}>
          {isMobile ? (
            <SwipeableDrawer
              disableBackdropTransition
              open={showNav}
              onClose={() => toggleDrawer(false)}
              onOpen={() => toggleDrawer(true)}
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
          <Switch>
            <Route exact path="/" render={() => (<Redirect to={defaultPath} />)} />
            {menus.map(menu => <Route key={menu.path} path={menu.path} component={menu.component} />)}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
