import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  margin: 0px;
  padding: 0px;
`;

const PhotoListComponent = styled.li`
  display: inline-block;
  float: left;
  margin-left: 10px;
  height: 100%;
  width: auto;
`;

const ClickablePhoto = styled.button`
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  opacity: 1;
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
            <PhotoListComponent style={{ marginLeft: '0px' }} src={photos[0].photo_url}>
              <ClickablePhoto>
                <MiniPhoto src={photos[0].photo_url} />
              </ClickablePhoto>
            </PhotoListComponent>
            <PhotoListComponent src={photos[0].photo_url}>
              <ClickablePhoto>
                <MiniPhoto src={photos[0].photo_url} />
              </ClickablePhoto>
            </PhotoListComponent>
            <PhotoListComponent src={photos[0].photo_url}>
              <ClickablePhoto>
                <MiniPhoto src={photos[0].photo_url} />
              </ClickablePhoto>
            </PhotoListComponent>
            <PhotoListComponent src={photos[0].photo_url}>
              <ClickablePhoto>
                <MiniPhoto src={photos[0].photo_url} />
              </ClickablePhoto>
            </PhotoListComponent>
            <PhotoListComponent src={photos[0].photo_url}>
              <ClickablePhoto>
                <MiniPhoto src={photos[0].photo_url} />
              </ClickablePhoto>
            </PhotoListComponent>
            <PhotoListComponent src={photos[0].photo_url}>
              <ClickablePhoto>
                <MiniPhoto src={photos[0].photo_url} />
              </ClickablePhoto>
            </PhotoListComponent>
            <PhotoListComponent src={photos[0].photo_url}>
              <ClickablePhoto>
                <MiniPhoto src={photos[0].photo_url} />
              </ClickablePhoto>
            </PhotoListComponent>
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
