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
      photos.map((photo, index) => {
        if (index < 5) {
          return (
            <Photo photo={photo} key={photo.id} index={index} />
          );
        }
      })
    );
  }
}

PhotosContainer.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
};

export default PhotosContainer;
