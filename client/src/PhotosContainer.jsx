import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

class PhotosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { photos } = this.props;
    return (
      photos.map(photo => (
        <Photo photo={photo} key={photo.id} />
      ))
    );
  }
}

PhotosContainer.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
};

export default PhotosContainer;
