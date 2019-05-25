import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotoListComponent from './PhotoListComponent';

const PhotoListContainer = styled.div`
  position: relative;
  height: 67px;
  overflow: hidden;
`;

const PhotoListSlider = styled.div`
  position: absolute;
  width: 11110px;
  height: 100%;
  background-color: transparent;
`;

const PhotoListUnorderedList = styled.ul`
  position: absolute;
  height: 100%;
  list-style-type: none;
  left: 0px;
  transition: -ms-transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s, transform 0.3s ease-out 0s;
  transform: translateX(${props => props.translateValue}px);
  margin: 0px;
  padding: 0px;
`;

class PhotoListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { photos, indexOfDisplayedPhoto, translateValue, advanceToNextSlide, backToPreviousSlide } = this.props;
    return (
      <PhotoListContainer>
        <PhotoListSlider>
          <PhotoListUnorderedList translateValue={translateValue}>
            {photos.map((photo, index) => (
              <PhotoListComponent
                advanceToNextSlide={advanceToNextSlide}
                backToPreviousSlide={backToPreviousSlide}
                photo={photo}
                key={photo.id}
                index={index}
                indexOfDisplayedPhoto={indexOfDisplayedPhoto}
              />
            ))}
          </PhotoListUnorderedList>
        </PhotoListSlider>
      </PhotoListContainer>
    );
  }
}

PhotoListView.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
  indexOfDisplayedPhoto: PropTypes.number.isRequired,
  translateValue: PropTypes.number.isRequired,
  advanceToNextSlide: PropTypes.func.isRequired,
  backToPreviousSlide: PropTypes.func.isRequired,
};

export default PhotoListView;
