import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loadable from 'react-loadable';
import { observer, inject } from 'mobx-react';
import { CssBaseline, Toolbar } from '@material-ui/core';
import { LoadingBar } from '@/components/Loading';
import theme from '@/context/theme';
import TopBar from './TopBar';
import Menu from './Menu';
import Routes from './Routes';

const Drawer = loadable({
  loader: () => import('@material-ui/core/Drawer'),
  loading: LoadingBar,
});
const SwipeableDrawer = loadable({
  loader: () => import('@material-ui/core/SwipeableDrawer'),
  loading: LoadingBar,
});

const DRAWER_WIDTH = 150;

const Container = styled.div`
  display: flex;
`;

const DrawerWrapper = styled.nav`
  ${theme.breakpoints.up('sm')} {
    width: ${DRAWER_WIDTH}px;
    flex-shrink: 0;
  }
`;

const PCDrawer = styled(Drawer)`
  .drawer-paper {
    width: ${DRAWER_WIDTH}px;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

@inject('appStore')
@observer
class App extends React.Component {
  static propTypes = {
    appStore: PropTypes.shape({
      isMobile: PropTypes.bool,
      toggleDrawer: PropTypes.func,
      showNav: PropTypes.bool,
    }).isRequired,
  }

  render() {
    const { isMobile, showNav, toggleDrawer } = this.props.appStore;
    return (
      <Container>
        <CssBaseline />
        <TopBar />
        <DrawerWrapper>
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
            <PCDrawer
              open
              variant="permanent"
              classes={{ paper: 'drawer-paper' }}
            >
              <Menu />
            </PCDrawer>
          )}
        </DrawerWrapper>
        <Main>
          <Toolbar />
          <Routes />
        </Main>
      </Container>
    );
  }
}

export default App;
