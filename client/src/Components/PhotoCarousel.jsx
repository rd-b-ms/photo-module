import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PreviousArrow, NextArrow, PhotoListButtonArrow } from './svg';

const StyledCarousel = styled.section`
  display: ${props => (props.photoCarouselIsVisible ? 'table' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  background-color: #262626;  
  z-index: 1000;
  overflow-y: auto;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 300;
`;

const TopPaddingContainer = styled.div`
  display: table-row;
`;

const TopPadding = styled.div`
  padding: 66px 15px 20px;
`;

const SlideshowContainer = styled.div`
  display: table-row;
  height: 100%;
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

const StyledImg = styled.img`
  display: table-row;
  height: 100%;
  width: 100%;
  max-width: 105vh;
  margin: 0px auto;
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

const BottomRow = styled.div`
  position: relative;
`;

const BottomRowContainer = styled.div`
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

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { photos, photoCarouselIsVisible } = this.props;
    return (
      <StyledCarousel photoCarouselIsVisible={photoCarouselIsVisible}>
        <TopPaddingContainer>
          <TopPadding />
        </TopPaddingContainer>
        <SlideshowContainer>
          <ImageContainer>
            <PreviousArrowContainer type="button">
              <PreviousArrow height="4.8em" width="4.8em" fill="rgb(255, 255, 255)" />
            </PreviousArrowContainer>
            <StyledImg src={photos[0].photo_url} />
            <NextArrowContainer type="button">
              <NextArrow height="4.8em" width="4.8em" fill="rgb(255, 255, 255)" />
            </NextArrowContainer>
          </ImageContainer>
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
                  </Caption>
                </CaptionContainer>
              </div>
            </BottomRow>
          </BottomRowContainer>
        </SlideshowContainer>
      </StyledCarousel>
    );
  }
}

PhotoCarousel.propTypes = {
  photoCarouselIsVisible: PropTypes.bool.isRequired,
};

export default PhotoCarousel;
