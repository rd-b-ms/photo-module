import React from 'react';
import PropTypes from 'prop-types';
import { MiniSlideshowContainer, MiniSlideshowListContainer, MiniSlideshowUnorderedList } from '../Styles/style';
import MiniSlideshowPhoto from './MiniSlideshowPhoto';

class MiniSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      photos,
      indexOfDisplayedPhoto,
      translateValue,
      advanceToNextSlide,
      backToPreviousSlide,
      photoListIsVisible,
    } = this.props;
    return (
      <MiniSlideshowContainer photoListIsVisible={photoListIsVisible}>
        <MiniSlideshowListContainer>
          <MiniSlideshowUnorderedList id="ul" translateValue={translateValue}>
            {photos.map((photo, index) => (
              <MiniSlideshowPhoto
                advanceToNextSlide={advanceToNextSlide}
                backToPreviousSlide={backToPreviousSlide}
                photo={photo}
                key={photo.id}
                index={index}
                indexOfDisplayedPhoto={indexOfDisplayedPhoto}
              />
            ))}
          </MiniSlideshowUnorderedList>
        </MiniSlideshowListContainer>
      </MiniSlideshowContainer>
    );
  }
}

MiniSlideshow.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
  indexOfDisplayedPhoto: PropTypes.number.isRequired,
  translateValue: PropTypes.number.isRequired,
  advanceToNextSlide: PropTypes.func.isRequired,
  backToPreviousSlide: PropTypes.func.isRequired,
  photoListIsVisible: PropTypes.bool.isRequired,
};

export default MiniSlideshow;
