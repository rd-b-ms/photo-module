import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCarousel = styled.section`
  display: ${props => (props.photoCarouselIsVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const StyledDiv = styled.div`
  display: block;
  position:fixed;
  background: rgb(255, 255, 255);
  padding: 24px;
  font-family: Roboto, Helvetica, sans-serif;
  color: #484848;
  font-size: 14px;
  width: 23%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
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
        <StyledDiv>Test Photo Carousel</StyledDiv>
      </StyledCarousel>
    );
  }
}

PhotoCarousel.propTypes = {
  photoCarouselIsVisible: PropTypes.bool.isRequired,
};

export default PhotoCarousel;
