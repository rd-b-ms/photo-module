import React from 'react';
import PropTypes from 'prop-types';
import { PreviousArrow, NextArrow } from './svg';
import {
  MainPhoto,
  PreviousArrowContainer,
  MainSlideshowContainer,
  NextArrowContainer,
} from '../Styles/style';

class MainSlideshow extends React.Component {
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
      <MainSlideshowContainer>
        <PreviousArrowContainer className="ps-previous-arrow" onClick={this.previousArrowClick} type="button">
          <PreviousArrow height="4.8em" width="4.8em" fill="rgb(255, 255, 255)" />
        </PreviousArrowContainer>
        <NextArrowContainer className="ps-next-arrow" onClick={this.nextArrowClick} type="button">
          <NextArrow height="4.8em" width="4.8em" fill="rgb(255, 255, 255)" />
        </NextArrowContainer>
        <MainPhoto className="main-photo" id={`Photo-${indexOfDisplayedPhoto}`} onClick={this.nextArrowClick} src={photos[indexOfDisplayedPhoto].photo_url} />
      </MainSlideshowContainer>
    );
  }
}

MainSlideshow.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
  indexOfDisplayedPhoto: PropTypes.number.isRequired,
  backToPreviousSlide: PropTypes.func.isRequired,
  advanceToNextSlide: PropTypes.func.isRequired,
};

export default MainSlideshow;
