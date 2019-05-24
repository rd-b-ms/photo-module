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
  background: rgba(0, 0, 0, 0.85);
  background-color: #262626;  
  z-index: 1000;
`;

const StyledImg = styled.img`
  display: block;
  position:fixed;
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
        <StyledImg src="./../photos/photo-1.jpg"></StyledImg>
      </StyledCarousel>
    );
  }
}

PhotoCarousel.propTypes = {
  photoCarouselIsVisible: PropTypes.bool.isRequired,
};

export default PhotoCarousel;
