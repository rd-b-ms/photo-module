import React from 'react';
import PropTypes from 'prop-types';
import { MiniSlideshowVisibilityArrow } from './svg';
import {
  BottomRow,
  FooterContainer,
  PhotoDescription,
  MiniSlideshowVisibilityButton,
} from '../Styles/style';
import MiniSlideshow from './MiniSlideshow';

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
