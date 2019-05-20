import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

class PhotosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { photos, isContainerHovered } = this.props;
    return (
      photos.map((photo, index) => {
        if (index < 5) {
          return (
            <Photo
              isContainerHovered={isContainerHovered}
              photo={photo}
              key={photo.id}
              index={index}
            />
          );
        }
      })
    );
  }
}

PhotosContainer.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
  isContainerHovered: PropTypes.bool.isRequired,
};

export default PhotosContainer;
