import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PhotoListButtonArrow } from './svg';
import PhotoListView from './PhotoListView';


const BottomRowContainer = styled.div`
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
const BottomRow = styled.div`
  position: relative;
`;

const CaptionContainer = styled.div`
  max-width: 105vh;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

const Caption = styled.div`
  margin-left: auto;
  margin-right: auto;
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

const HidePhotoListButton = styled.div`
  display: table-cell;
  text-align: right;
  vertical-align: middle;
`;

class PhotoCarouselCaption extends React.Component {
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
    } = this.props;
    return (
      <BottomRowContainer>
        <BottomRow>
          <div style={{ marginBottom: '24px' }}>
            <CaptionContainer>
              <Caption>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'table', width: '100%' }}>
                    <PhotoDescription>{photos[0].description}</PhotoDescription>
                    <HidePhotoListButton>
                      <span>
                        Hide Photo List
                        <PhotoListButtonArrow height="10px" width="10px" fill="currentcolor" />
                      </span>
                    </HidePhotoListButton>
                  </div>
                </div>
                <PhotoListView
                  advanceToNextSlide={advanceToNextSlide}
                  backToPreviousSlide={backToPreviousSlide}
                  translateValue={translateValue}
                  indexOfDisplayedPhoto={indexOfDisplayedPhoto}
                  photos={photos}
                />
              </Caption>
            </CaptionContainer>
          </div>
        </BottomRow>
      </BottomRowContainer>
    );
  }
}

PhotoCarouselCaption.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
  indexOfDisplayedPhoto: PropTypes.number.isRequired,
  translateValue: PropTypes.number.isRequired,
  advanceToNextSlide: PropTypes.func.isRequired,
  backToPreviousSlide: PropTypes.func.isRequired,
};

export default PhotoCarouselCaption;
