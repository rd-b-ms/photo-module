import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MiniSlideshowPhoto from './MiniSlideshowPhoto';

const MiniSlideshowContainer = styled.div`
  display: ${props => (props.photoListIsVisible ? 'block' : 'none')}
  position: relative;
  height: 67px;
  overflow: hidden;
`;

const MiniSlideshowListContainer = styled.div`
  position: absolute;
  width: 11110px;
  height: 100%;
  background-color: transparent;
`;

const MiniSlideshowUnorderedList = styled.ul`
  position: absolute;
  height: 100%;
  list-style-type: none;
  left: 0px;
  transition: -ms-transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s, transform 0.3s ease-out 0s;
  transform: translateX(${props => props.translateValue}px);
  margin: 0px;
  padding: 0px;
`;

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
          <MiniSlideshowUnorderedList translateValue={translateValue}>
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
