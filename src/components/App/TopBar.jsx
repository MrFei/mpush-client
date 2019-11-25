import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '@/context/theme';
import { observer, inject } from 'mobx-react';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';

const Container = styled.div`
  z-index: 1300;
`;

const MenuButton = styled(IconButton)`
  && {
    display: block;
    margin-left: -12px;
    margin-right: 20px;
    ${theme.breakpoints.up('sm')} {
      display: none;
    }
  }
`;

const Title = styled(Typography)`
  && {
    display: none;
    ${theme.breakpoints.up('sm')} {
      display: block;
    }
  }
`;

const Grow = styled.div`
  flex-grow: 1;
`;

const Search = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${theme.shape.borderRadius}px;
  background-color: ${fade(theme.palette.common.white, 0.15)};
  margin-left: 0;
  &:hover {
    background-color: ${fade(theme.palette.common.white, 0.25)};
  }
  ${theme.breakpoints.up('sm')} {
    margin-left: ${theme.spacing.unit}px;
    width: auto;
  }
  .input-container {
    color: inherit;
    width: 100%;
  }
  .input-box {
    width: 100%;
    padding: ${theme.spacing.unit}px;
    padding-left: ${theme.spacing.unit * 8}px;
    transition: ${theme.transitions.create('width')};
    ${theme.breakpoints.up('sm')} {
      width: 200px;
      &:focus {
        width: 280px;
      }
    }
  }
`;

const SearchIconWrapper = styled.div`
  width: ${theme.spacing.unit * 9}px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

@inject('appStore', 'searchStore')
@observer
class TopBar extends React.Component {
  static propTypes = {
    appStore: PropTypes.shape({
      topTitle: PropTypes.string,
      toggleDrawer: PropTypes.func,
    }).isRequired,
    searchStore: PropTypes.shape({
      execSearch: PropTypes.func,
    }).isRequired,
  };

  render() {
    const { topTitle, toggleDrawer } = this.props.appStore;
    return (
      <Container>
        <AppBar position="fixed">
          <Toolbar>
            <MenuButton color="inherit" aria-label="Open Drawer" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </MenuButton>
            <Title variant="h6" color="inherit" noWrap>
              {topTitle}
            </Title>
            <Grow />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <InputBase
                onKeyDown={this.onSearch}
                placeholder="Search…"
                classes={{
                  root: 'input-container',
                  input: 'input-box',
                }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Container>
    );
  }

  onSearch = evt => {
    if (evt.key === 'Enter') {
      const keyword = evt.target.value;
      if (keyword) {
        this.props.searchStore.execSearch(keyword);
      }
    }
  };
}

export default TopBar;
