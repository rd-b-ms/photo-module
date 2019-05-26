import React from 'react';
import PropTypes from 'prop-types';
import { PhotoSlideshowModal, ClosePhotoSlideshowButtonContainer, TableContainer } from '../Styles/style';
import { ClosePhotoSlideshowButton } from './svg';
import SlideshowFooter from './SlideshowFooter';
import MainSlideshow from './MainSlideshow';

class PhotoSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { translateValue: 0 };

    this.advanceToNextSlide = this.advanceToNextSlide.bind(this);
    this.backToPreviousSlide = this.backToPreviousSlide.bind(this);
    this.closePhotoSlideshow = this.closePhotoSlideshow.bind(this);
  }

  advanceToNextSlide(nextIndex) {
    const { translateValue } = this.state;
    const { photos, showPhotoSlideshow } = this.props;
    let translateAmount;
    if (nextIndex === 0) {
      translateAmount = translateValue;
    } else if (nextIndex === 2 || nextIndex === photos.length - 2) {
      translateAmount = 18;
    } else if (nextIndex === 1 || nextIndex === photos.length - 1) {
      translateAmount = 0;
    } else {
      translateAmount = 110;
    }
    this.setState(prevState => (
      {
        translateValue: prevState.translateValue - translateAmount,
      }
    ));
    showPhotoSlideshow(nextIndex);
  }

  backToPreviousSlide(nextIndex) {
    const { photos, showPhotoSlideshow } = this.props;
    let translateAmount;
    if (nextIndex === photos.length - 1) {
      translateAmount = -((photos.length - 4) * 110) - 36;
    } else if (nextIndex === 1 || nextIndex === photos.length - 2) {
      translateAmount = 18;
    } else if (nextIndex === 0) {
      translateAmount = 0;
    } else {
      translateAmount = 110;
    }
    this.setState(prevState => (
      {
        translateValue: prevState.translateValue + translateAmount,
      }
    ));
    showPhotoSlideshow(nextIndex);
  }

  closePhotoSlideshow() {
    const { hidePhotoSlideshow } = this.props;
    hidePhotoSlideshow(false);
  }

  render() {
    const { photos, photoSlideshowIsVisible, indexOfDisplayedPhoto } = this.props;
    const { translateValue } = this.state;
    return (
      <PhotoSlideshowModal photoSlideshowIsVisible={photoSlideshowIsVisible}>
        <ClosePhotoSlideshowButtonContainer onClick={this.closePhotoSlideshow}>
          <ClosePhotoSlideshowButton
            type="button"
            display="block"
            height="2em"
            width="2em"
            fill="rgb(255, 255, 255)"
          />
        </ClosePhotoSlideshowButtonContainer>
        <TableContainer>
          <div style={{ display: 'table-row' }}>
            <div style={{ padding: '66px 15px 20px' }} />
          </div>
          <div style={{ display: 'table-row' }}>
            <MainSlideshow
              indexOfDisplayedPhoto={indexOfDisplayedPhoto}
              advanceToNextSlide={this.advanceToNextSlide}
              backToPreviousSlide={this.backToPreviousSlide}
              photos={photos}
            />
            <SlideshowFooter
              advanceToNextSlide={this.advanceToNextSlide}
              backToPreviousSlide={this.backToPreviousSlide}
              translateValue={translateValue}
              indexOfDisplayedPhoto={indexOfDisplayedPhoto}
              photos={photos}
            />
          </div>
        </TableContainer>
      </PhotoSlideshowModal>
    );
  }
}

PhotoSlideshow.propTypes = {
  photoSlideshowIsVisible: PropTypes.bool.isRequired,
  photos: PropTypes.instanceOf(Array).isRequired,
  hidePhotoSlideshow: PropTypes.func.isRequired,
  indexOfDisplayedPhoto: PropTypes.number.isRequired,
  showPhotoSlideshow: PropTypes.func.isRequired,
};

export default PhotoSlideshow;
