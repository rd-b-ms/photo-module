import React from 'react';
import PropTypes from 'prop-types';
import { MiniSlideshowPhotoContainer, ClickablePhoto, MiniPhoto } from '../Styles/style';

class MiniSlideshowPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.goToSpecificPhoto = this.goToSpecificPhoto.bind(this);
  }

  goToSpecificPhoto(event) {
    const { advanceToNextSlide, backToPreviousSlide, indexOfDisplayedPhoto } = this.props;
    if (Number(event.target.id) > indexOfDisplayedPhoto) {
      advanceToNextSlide(Number(event.target.id));
    }
    if (Number(event.target.id) < indexOfDisplayedPhoto) {
      backToPreviousSlide(Number(event.target.id));
    }
  }

  render() {
    const { index, photo, indexOfDisplayedPhoto } = this.props;
    return (
      <MiniSlideshowPhotoContainer index={index}>
        <ClickablePhoto indexOfDisplayedPhoto={indexOfDisplayedPhoto} index={index}>
          <MiniPhoto onClick={this.goToSpecificPhoto} src={photo.photo_url} id={index} />
        </ClickablePhoto>
      </MiniSlideshowPhotoContainer>
    );
  }
}

MiniSlideshowPhoto.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  indexOfDisplayedPhoto: PropTypes.number.isRequired,
  advanceToNextSlide: PropTypes.func.isRequired,
  backToPreviousSlide: PropTypes.func.isRequired,
};

export default MiniSlideshowPhoto;
