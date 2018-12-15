import React from 'react';
import { Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Mail as MailIcon } from '@material-ui/icons';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map(text => (
            <ListItem button key={text}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map(text => (
            <ListItem button key={text}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Menu;
