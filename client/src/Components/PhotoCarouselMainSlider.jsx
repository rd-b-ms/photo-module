import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PreviousArrow, NextArrow } from './svg';

const StyledImg = styled.img`
  display: table-row;
  width: 100%;
  height: 100%;
  max-width: 105vh;
  margin: 0px auto;
`;

const PreviousArrowContainer = styled.button`
  position: absolute;
  background: transparent;
  border: 0px;
  width: 75px;
  height: 100%;
  top: 0px;
  left: 0px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const NextArrowContainer = styled.button`
  position: absolute;
  background: transparent;
  border: 0px;
  width: 75px;
  height: 100%;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;

class PhotoCarouselMainSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.nextArrowClick = this.nextArrowClick.bind(this);
    this.previousArrowClick = this.previousArrowClick.bind(this);
  }

  nextArrowClick() {
    const { photos, indexOfDisplayedPhoto, advanceToNextSlide } = this.props;
    if (indexOfDisplayedPhoto < photos.length - 1) {
      advanceToNextSlide(indexOfDisplayedPhoto + 1);
    } else {
      advanceToNextSlide(0);
    }
  }

  previousArrowClick() {
    const { photos, indexOfDisplayedPhoto, backToPreviousSlide } = this.props;
    if (indexOfDisplayedPhoto > 0) {
      backToPreviousSlide(indexOfDisplayedPhoto - 1);
    } else {
      backToPreviousSlide(photos.length - 1);
    }
  }

  render() {
    const { photos, indexOfDisplayedPhoto } = this.props;
    return (
      <ImageContainer>
        <PreviousArrowContainer onClick={this.previousArrowClick} type="button">
          <PreviousArrow height="4.8em" width="4.8em" fill="rgb(255, 255, 255)" />
        </PreviousArrowContainer>
        <NextArrowContainer onClick={this.nextArrowClick} type="button">
          <NextArrow height="4.8em" width="4.8em" fill="rgb(255, 255, 255)" />
        </NextArrowContainer>
        <StyledImg onClick={this.nextArrowClick} src={photos[indexOfDisplayedPhoto].photo_url} />
      </ImageContainer>
    );
  }
}

PhotoCarouselMainSlider.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
  indexOfDisplayedPhoto: PropTypes.number.isRequired,
  backToPreviousSlide: PropTypes.func.isRequired,
  advanceToNextSlide: PropTypes.func.isRequired,
};

export default PhotoCarouselMainSlider;
