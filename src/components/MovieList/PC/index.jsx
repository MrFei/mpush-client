import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

@observer
class ListPC extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>PC</h1>
        <ul>
          {data.map(d => <li key={d.movieId}>{d.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default ListPC;
