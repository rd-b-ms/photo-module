import React from 'react';
import axios from 'axios';
import { StyledContainer } from '../Styles/style';
import PhotosContainer from './PhotosContainer';
import SaveButton from './SaveButton';
import ShareButton from './ShareButton';
import ViewPhotosButton from './ViewPhotosButton';
import ShareModal from './ShareModal';
import PhotoSlideshow from './PhotoSlideshow';

const path = require('path');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{
        description: 'Veniam voluptatem sit rerum aut sed est in suscipit.',
        id: 98,
        is_verified: 0,
        photo_url: 'https://sdc-photos-rdbms.s3-us-west-1.amazonaws.com/404.jpeg',
      }],
      isContainerHovered: false,
      shareModalIsVisible: false,
      photoSlideshowIsVisible: false,
      indexOfDisplayedPhoto: 0,
    };

    this.onContainerMouseOver = this.onContainerMouseOver.bind(this);
    this.onContainerMouseOut = this.onContainerMouseOut.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
    this.hideShareModal = this.hideShareModal.bind(this);
    this.showPhotoSlideshow = this.showPhotoSlideshow.bind(this);
    this.hidePhotoSlideshow = this.hidePhotoSlideshow.bind(this);
    this.showPhotoSlideshow = this.showPhotoSlideshow.bind(this);
  }

  componentDidMount() {
    const pathName = window.location.pathname.split('/');
    const listingId = pathName[2];
    const url = `/photos/get/${listingId}`;
    // const params = new URLSearchParams(window.location.search);
    // let url;
    // if (!params.has('listingid')) {
    //   url = '/photos/get/1';
    // } else {
    //   url = `/photos/get/?listingid=${params.get('listingid')}`;
    // }
    axios.get(url)
      .then((photoList) => {
        this.setState({ photos: photoList.data.rows });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  onContainerMouseOver() {
    this.setState({
      isContainerHovered: true,
    });
  }

  onContainerMouseOut() {
    this.setState({
      isContainerHovered: false,
    });
  }

  showShareModal(isVisible) {
    this.setState({ shareModalIsVisible: isVisible });
  }

  hideShareModal(isNotVisible) {
    this.setState({ shareModalIsVisible: isNotVisible });
  }

  showPhotoSlideshow(isVisible, newIndex = 0) {
    this.setState({ photoSlideshowIsVisible: isVisible, indexOfDisplayedPhoto: newIndex });
  }

  hidePhotoSlideshow(isNotVisible) {
    this.setState({ photoSlideshowIsVisible: isNotVisible });
  }

  render() {
    const {
      photos,
      index,
      isContainerHovered,
      shareModalIsVisible,
      photoSlideshowIsVisible,
      indexOfDisplayedPhoto,
    } = this.state;
    return (
      <div>
        <ShareModal
          className="share-modal"
          hideShareModal={this.hideShareModal}
          shareModalIsVisible={shareModalIsVisible}
        />
        <PhotoSlideshow
          photos={photos}
          indexOfDisplayedPhoto={indexOfDisplayedPhoto}
          hidePhotoSlideshow={this.hidePhotoSlideshow}
          photoSlideshowIsVisible={photoSlideshowIsVisible}
          showPhotoSlideshow={this.showPhotoSlideshow}
        />
        <StyledContainer
          onMouseOver={this.onContainerMouseOver}
          onFocus={this.onContainerMouseOver}
          onMouseOut={this.onContainerMouseOut}
          onBlur={this.onContainerMouseOut}
        >
          <PhotosContainer
            isContainerHovered={isContainerHovered}
            showPhotoSlideshow={this.showPhotoSlideshow}
            photos={photos}
            index={index}
          />
          <ShareButton showShareModal={this.showShareModal} />
          <SaveButton />
          <ViewPhotosButton
            showPhotoSlideshow={this.showPhotoSlideshow}
            hidePhotoSlideshow={this.hidePhotoSlideshow}
          />
        </StyledContainer>
      </div>
    );
  }
}

export default App;
