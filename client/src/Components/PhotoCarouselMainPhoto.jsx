import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImg = styled.img`
  display: table-row;
  height: 100%;
  width: 100%;
  max-width: 105vh;
  margin: 0px auto;
`;

class PhotoCarouselMainPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { photos } = this.props;
    return (
      <StyledImg src={photos[0].photo_url} />
    );
  }
}

PhotoCarouselMainPhoto.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
};

export default PhotoCarouselMainPhoto;
