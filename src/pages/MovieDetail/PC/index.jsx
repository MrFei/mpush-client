import React from 'react';
import PropTypes from 'prop-types';

class PCDetail extends React.Component {
  static propTypes = {
    movieId: PropTypes.string.isRequired,
  }

  render() {
    const { movieId } = this.props;
    return (
      <h1>PC: {movieId}</h1>
    );
  }
}

export default PCDetail;
