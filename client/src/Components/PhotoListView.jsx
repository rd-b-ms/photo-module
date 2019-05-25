import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotoListContainer = styled.div`
  display: block;
  position: relative;
  height: 67px;
  overflow: hidden;
`;

const PhotoListSlider = styled.div`
  position: absolute;
`;

const PhotoListUnorderedList = styled.ul`
  position: absolute;
  list-style-type: none;
  left: 0px;
  transition: -ms-transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s, transform 0.3s ease-out 0s;
  margin: 0px;
  padding: 0px;
`;

const PhotoListComponent = styled.li`
  float: left;
  background-color: black;
  margin-left: 10px;
`;

class PhotoListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { photos } = this.props;
    return (
      <PhotoListContainer>
        <PhotoListSlider>
          <PhotoListUnorderedList>
            <PhotoListComponent src={photos[0].photo_url} />
            <PhotoListComponent src={photos[0].photo_url} />
            <PhotoListComponent src={photos[0].photo_url} />
            <PhotoListComponent src={photos[0].photo_url} />
            <PhotoListComponent src={photos[0].photo_url} />
          </PhotoListUnorderedList>
        </PhotoListSlider>
      </PhotoListContainer>
    );
  }
}

PhotoListView.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
};

export default PhotoListView;
