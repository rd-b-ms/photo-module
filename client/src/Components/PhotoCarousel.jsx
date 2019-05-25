import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ClosePhotoView } from './svg';
import PhotoCarouselCaption from './PhotoCarouselCaption';
import PhotoCarouselMainSlider from './PhotoCarouselMainSlider';

const StyledCarousel = styled.section`
  display: ${props => (props.photoCarouselIsVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  background-color: #262626;  
  z-index: 1000;
  overflow-y: auto;
  font-family: Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 300;
`;

const CloseButtonContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 16px 28px 8px;
  cursor: pointer;
  background-color: transparent;
  color: buttontext;
  border-width: 0px;
  z-index: 2000;
`;

const CarouselContainer = styled.div`
  display: table;
  table-layout: fixed;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const TopPaddingContainer = styled.div`
  display: table-row;
`;

const TopPadding = styled.div`
  padding: 66px 15px 20px;
`;

const SlideshowContainer = styled.div`
  display: table-row;
`;

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
      <StyledCarousel photoCarouselIsVisible={photoCarouselIsVisible}>
        <CloseButtonContainer onClick={this.closePhotoCarousel}>
          <ClosePhotoView
            type="button"
            display="block"
            height="2em"
            width="2em"
            fill="rgb(255, 255, 255)"
          />
        </CloseButtonContainer>
        <CarouselContainer>
          <TopPaddingContainer>
            <TopPadding />
          </TopPaddingContainer>
          <SlideshowContainer>
            <PhotoCarouselMainSlider
              indexOfDisplayedPhoto={indexOfDisplayedPhoto}
              advanceToNextSlide={this.advanceToNextSlide}
              backToPreviousSlide={this.backToPreviousSlide}
              photos={photos}
            />
            <PhotoCarouselCaption
              advanceToNextSlide={this.advanceToNextSlide}
              backToPreviousSlide={this.backToPreviousSlide}
              translateValue={translateValue}
              indexOfDisplayedPhoto={indexOfDisplayedPhoto}
              photos={photos}
            />
          </SlideshowContainer>
        </CarouselContainer>
      </StyledCarousel>
    );
  }
}

PhotoCarousel.propTypes = {
  photoCarouselIsVisible: PropTypes.bool.isRequired,
  photos: PropTypes.instanceOf(Array).isRequired,
  hidePhotoCarousel: PropTypes.func.isRequired,
};

export default PhotoCarousel;
