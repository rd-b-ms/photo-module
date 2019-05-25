import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PreviousArrow, NextArrow } from './svg';

const StyledImg = styled.img`
  display: table-row;
  height: 100%;
  width: 100%;
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
  }

  render() {
    const { photos } = this.props;
    return (
      <ImageContainer>
        <PreviousArrowContainer type="button">
          <PreviousArrow height="4.8em" width="4.8em" fill="rgb(255, 255, 255)" />
        </PreviousArrowContainer>
        <StyledImg src={photos[0].photo_url} />
        <NextArrowContainer type="button">
          <NextArrow height="4.8em" width="4.8em" fill="rgb(255, 255, 255)" />
        </NextArrowContainer>
      </ImageContainer>
    );
  }
}

PhotoCarouselMainSlider.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
};

export default PhotoCarouselMainSlider;
