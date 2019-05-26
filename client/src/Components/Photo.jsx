import React from 'react';
import PropTypes from 'prop-types';
import { StyledPhotoContainer, StyledPhoto } from '../Styles/style';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.openSlideshowToPhoto = this.openSlideshowToPhoto.bind(this);
  }

  onMouseOver() {
    this.setState({
      hover: true,
    });
  }

  onMouseOut() {
    this.setState({
      hover: false,
    });
  }

  openSlideshowToPhoto(index) {
    const { showPhotoSlideshow } = this.props;
    showPhotoSlideshow(true, index);
  }

  render() {
    const {
      photo,
      index,
      isContainerHovered,
      id,
    } = this.props;
    const { hover } = this.state;
    return (
      <StyledPhotoContainer index={index}>
        <StyledPhoto
          src={photo.photo_url}
          alt="home interior"
          className="photo"
          id={id}
          index={index}
          hover={hover}
          isContainerHovered={isContainerHovered}
          onMouseOver={this.onMouseOver}
          onFocus={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onBlur={this.onMouseOut}
          onClick={() => this.openSlideshowToPhoto(index)}
        />
      </StyledPhotoContainer>
    );
  }
}

Photo.propTypes = {
  photo: PropTypes.shape({ photo_url: '' }).isRequired,
  index: PropTypes.number.isRequired,
  isContainerHovered: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  showPhotoSlideshow: PropTypes.func.isRequired,
};

export default Photo;

// const url = `https://s3-us-west-1.amazonaws.com/fec-carebnb/${photo.photo_url}`;
// The above url will replace the direct url once deployed
// This is commented for development to reduce num of get requests to AWS
