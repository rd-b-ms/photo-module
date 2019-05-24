import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PreviousArrow, NextArrow } from './svg';

const StyledCarousel = styled.section`
  display: ${props => (props.photoCarouselIsVisible ? 'table' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  background-color: #262626;  
  z-index: 1000;
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

const SlideshowContainer = styled.div`
  display: table;
  height: 100%;
`;

const TopPadding = styled.div`
  display: table-row;
  padding: 66px 15px 20px;
`;

const Caption = styled.div`
  display: table-row;
  position: relative;
`;

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { photoCarouselIsVisible } = this.props;
    return (
      <StyledCarousel photoCarouselIsVisible={photoCarouselIsVisible}>
        <SlideshowContainer>
          <TopPadding />
          <ImageContainer>
            <PreviousArrow height="4.8em" width="4.8em" fill="rgb(255, 255, 255)" />
            <StyledImg src="./../photos/photo-1.jpg" />
            <NextArrow height="4.8em" width="4.8em" fill="rgb(255, 255, 255)" />
          </ImageContainer>
          <Caption />
        </SlideshowContainer>
      </StyledCarousel>
    );
  }
}

PhotoCarousel.propTypes = {
  photoCarouselIsVisible: PropTypes.bool.isRequired,
};

export default PhotoCarousel;
