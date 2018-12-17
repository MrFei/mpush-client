import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';

@withRouter
@inject('appStore')
@observer
class Routes extends React.Component {
  static propTypes = {
    appStore: PropTypes.shape({
      menus: PropTypes.array,
      defaultPath: PropTypes.string,
    }).isRequired,
  }

  render() {
    const { menus, defaultPath } = this.props.appStore;
    return (
      <Switch>
        <Route exact path="/" render={() => (<Redirect to={defaultPath} />)} />
        {menus.map(menu => <Route key={menu.path} path={menu.path} component={menu.component} />)}
        <Route render={() => <h1>404</h1>} />
      </Switch>
    );
  }
}

export default Routes;
