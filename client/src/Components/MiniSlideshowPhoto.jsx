import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MiniSlideshowPhotoContainer = styled.li`
  display: inline-block;
  float: left;
  margin-left: ${props => (props.index === 0 ? '0px' : '10px')};
  height: 100%;
  width: auto;
`;

const ClickablePhoto = styled.button`
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  opacity: ${props => (props.indexOfDisplayedPhoto === props.index ? '1' : '0.5')};
  cursor: default;
  overflow: hidden;
  background: transparent;
  border-width: 0px;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
`;

const MiniPhoto = styled.img`
  width: 100px;
  height: 67px;
`;

class MiniSlideshowPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.goToSpecificPhoto = this.goToSpecificPhoto.bind(this);
  }

  goToSpecificPhoto(event) {
    const { advanceToNextSlide, backToPreviousSlide, indexOfDisplayedPhoto } = this.props;
    if (Number(event.target.id) > indexOfDisplayedPhoto) {
      advanceToNextSlide(Number(event.target.id));
    }
    if (Number(event.target.id) < indexOfDisplayedPhoto) {
      backToPreviousSlide(Number(event.target.id));
    }
  }

  render() {
    const { index, photo, indexOfDisplayedPhoto } = this.props;
    return (
      <MiniSlideshowPhotoContainer index={index}>
        <ClickablePhoto indexOfDisplayedPhoto={indexOfDisplayedPhoto} index={index}>
          <MiniPhoto onClick={this.goToSpecificPhoto} src={photo.photo_url} id={index} />
        </ClickablePhoto>
      </MiniSlideshowPhotoContainer>
    );
  }
}

MiniSlideshowPhoto.propTypes = {
  photo: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
  indexOfDisplayedPhoto: PropTypes.number.isRequired,
  advanceToNextSlide: PropTypes.func.isRequired,
  backToPreviousSlide: PropTypes.func.isRequired,
};

export default MiniSlideshowPhoto;
