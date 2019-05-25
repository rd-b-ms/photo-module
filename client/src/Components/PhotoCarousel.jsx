import React from 'react';
import PropTypes from 'prop-types';
import { PhotoSlideshowModal, ClosePhotoSlideshowButtonContainer, TableContainer } from '../Styles/style';
import { ClosePhotoSlideshowButton } from './svg';
import SlideshowFooter from './SlideshowFooter';
import MainSlideshow from './MainSlideshow';

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { indexOfDisplayedPhoto: 0, translateValue: 0 };

    this.advanceToNextSlide = this.advanceToNextSlide.bind(this);
    this.backToPreviousSlide = this.backToPreviousSlide.bind(this);
    this.closePhotoCarousel = this.closePhotoCarousel.bind(this);
  }

  advanceToNextSlide(nextIndex) {
    const { translateValue } = this.state;
    const { photos } = this.props;
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
        indexOfDisplayedPhoto: nextIndex,
        translateValue: prevState.translateValue - translateAmount,
      }
    ));
  }

  backToPreviousSlide(nextIndex) {
    const { photos } = this.props;
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
        indexOfDisplayedPhoto: nextIndex,
        translateValue: prevState.translateValue + translateAmount,
      }
    ));
  }

  closePhotoCarousel() {
    const { hidePhotoCarousel } = this.props;
    hidePhotoCarousel(false);
  }

  render() {
    const { photos, photoCarouselIsVisible } = this.props;
    const { indexOfDisplayedPhoto, translateValue } = this.state;
    return (
      <PhotoSlideshowModal photoCarouselIsVisible={photoCarouselIsVisible}>
        <ClosePhotoSlideshowButtonContainer onClick={this.closePhotoCarousel}>
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

PhotoCarousel.propTypes = {
  photoCarouselIsVisible: PropTypes.bool.isRequired,
  photos: PropTypes.instanceOf(Array).isRequired,
  hidePhotoCarousel: PropTypes.func.isRequired,
};

export default PhotoCarousel;
