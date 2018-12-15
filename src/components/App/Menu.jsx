import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import menuConfig from '@/configs/menu';

@inject('appStore')
@observer
class Menu extends React.Component {
  static propTypes = {
    appStore: PropTypes.shape({
      currMenu: PropTypes.object,
    }).isRequired,
  }

  render() {
    const { currMenu } = this.props.appStore;
    return (
      <div>
        <Toolbar />
        <Divider />
        <List>
          {menuConfig.map(menu => (
            <ListItem
              button
              key={menu.name}
              component={Link}
              to={menu.path}
              selected={menu.name === currMenu.name}
            >
              <ListItemIcon>{React.createElement(menu.icon)}</ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Menu;
