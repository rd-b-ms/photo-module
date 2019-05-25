import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MiniSlideshowVisibilityArrow } from './svg';
import MiniSlideshow from './MiniSlideshow';

const BottomRow = styled.div`
  display: block;
  background-image: none;
  background-color: transparent;
  position: relative;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 2;
  text-align: center;
  color: rgb(255, 255, 255);
  overflow: hidden;
  border-radius: 0px;
`;

const FooterContainer = styled.div`
  max-width: 105vh;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  position: relative;
  transform: translateY(0px);
  transition: -ms-transform 0.2s ease-out 0s, -webkit-transform 0.2s ease-out 0s, transform 0.2s ease-out 0s;
`;

const PhotoDescription = styled.div`
  display: table-cell;
  padding-left: 0px;
  text-align: left;
  vertical-align: middle;
`;

const MiniSlideshowVisibilityButton = styled.div`
  display: table-cell;
  text-align: right;
  vertical-align: middle;
  cursor: pointer;
`;

class SlideshowFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photoListIsVisible: true };

    this.togglePhotoListVisibility = this.togglePhotoListVisibility.bind(this);
  }

  togglePhotoListVisibility() {
    this.setState(prevState => ({ photoListIsVisible: !prevState.photoListIsVisible }));
  }

  render() {
    const {
      photos,
      indexOfDisplayedPhoto,
      translateValue,
      advanceToNextSlide,
      backToPreviousSlide,
    } = this.props;
    const { photoListIsVisible } = this.state;
    const photoListButtonText = (photoListIsVisible ? 'Hide Photo List' : 'Show Photo List');
    return (
      <BottomRow>
        <div style={{ position: 'relative' }}>
          <div style={{ marginBottom: '24px' }}>
            <FooterContainer>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ display: 'table', width: '100%' }}>
                  <PhotoDescription>{photos[0].description}</PhotoDescription>
                  <MiniSlideshowVisibilityButton onClick={this.togglePhotoListVisibility}>
                    <span>
                      {photoListButtonText}
                      <MiniSlideshowVisibilityArrow height="10px" width="10px" fill="currentcolor" />
                    </span>
                  </MiniSlideshowVisibilityButton>
                </div>
              </div>
              <MiniSlideshow
                photoListIsVisible={photoListIsVisible}
                advanceToNextSlide={advanceToNextSlide}
                backToPreviousSlide={backToPreviousSlide}
                translateValue={translateValue}
                indexOfDisplayedPhoto={indexOfDisplayedPhoto}
                photos={photos}
              />
            </FooterContainer>
          </div>
        </div>
      </BottomRow>
    );
  }
}

SlideshowFooter.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
  indexOfDisplayedPhoto: PropTypes.number.isRequired,
  translateValue: PropTypes.number.isRequired,
  advanceToNextSlide: PropTypes.func.isRequired,
  backToPreviousSlide: PropTypes.func.isRequired,
};

export default SlideshowFooter;
