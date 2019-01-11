import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Item from './Item';

@observer
class ListMobi extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map(item => <Item key={item.movieId} movieInfo={item} />)}
      </div>
    );
  }
}

export default ListMobi;
