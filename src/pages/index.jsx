import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

@inject('countStore')
@observer
class App extends React.Component {
  static propTypes = {
    countStore: PropTypes.shape({
      count: PropTypes.number,
      addCount: PropTypes.func,
    }).isRequired,
  }

  render() {
    const { count } = this.props.countStore;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button type="button" onClick={this.handleAddClick}>Add</button>
      </div>
    );
  }

  handleAddClick = () => {
    const { addCount } = this.props.countStore;
    addCount();
  }
}

export default App;
