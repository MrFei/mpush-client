import React from 'react';
import PropTypes from 'prop-types';

class MobiDetail extends React.Component {
  static propTypes = {
    movieId: PropTypes.string.isRequired,
  }

  render() {
    const { movieId } = this.props;
    return (
      <h1>Mobile: {movieId}</h1>
    );
  }
}

export default MobiDetail;
