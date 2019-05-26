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
    const widthOfDiv = document.getElementById('main-photo').offsetWidth;
    const leftOverSpace = widthOfDiv % 110;
    const numOfFullPhotos = Math.floor(widthOfDiv / 110);
    const subtractMargin = leftOverSpace - 20;
    let translateAmount;
    if (nextIndex > numOfFullPhotos / 2 && nextIndex < photos.length - (numOfFullPhotos / 2)) {
      translateAmount = 110;
    } else if (nextIndex === 0) {
      translateAmount = translateValue;
    } else if (nextIndex < numOfFullPhotos / 2 || nextIndex > photos.length - (numOfFullPhotos / 2)) {
      translateAmount = 0;
    } else {
      translateAmount = subtractMargin / 2;
    }
    this.setState(prevState => (
      {
        translateValue: prevState.translateValue - translateAmount,
      }
    ));
    showPhotoSlideshow(true, nextIndex);
  }

  backToPreviousSlide(nextIndex) {
    const { photos, showPhotoSlideshow } = this.props;
    const widthOfDiv = document.getElementById('main-photo').offsetWidth;
    const widthOfUl = document.getElementById('ul').offsetWidth;
    const leftOverSpace = widthOfDiv % 110;
    const numOfFullPhotos = Math.floor(widthOfDiv / 110);
    const subtractMargin = leftOverSpace - 20;
    const hiddenSpace = widthOfUl - widthOfDiv;
    let translateAmount;
    if (nextIndex > numOfFullPhotos / 2 && nextIndex < photos.length - (numOfFullPhotos / 2)) {
      translateAmount = 110;
    } else if (nextIndex === photos.length - 1) {
      translateAmount = -hiddenSpace;
    } else if (nextIndex < numOfFullPhotos / 2 || nextIndex > photos.length - (numOfFullPhotos / 2)) {
      translateAmount = 0;
    } else {
      translateAmount = subtractMargin / 2;
    }
    this.setState(prevState => (
      {
        translateValue: prevState.translateValue + translateAmount,
      }
    ));
    showPhotoSlideshow(true, nextIndex);
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
