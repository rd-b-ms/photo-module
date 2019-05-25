import React from 'react';
import axios from 'axios';
import { StyledContainer } from '../Styles/style';
import PhotosContainer from './PhotosContainer';
import SaveButton from './SaveButton';
import ShareButton from './ShareButton';
import ViewPhotosButton from './ViewPhotosButton';
import ShareModal from './ShareModal';
import PhotoSlideshow from './PhotoSlideshow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{
        description: 'Veniam voluptatem sit rerum aut sed est in suscipit.',
        id: 98,
        is_verified: 0,
        photo_url: 'photos/photo-6.jpg',
      }],
      isContainerHovered: false,
      shareModalIsVisible: false,
      photoSlideshowIsVisible: false,
    };

    this.onContainerMouseOver = this.onContainerMouseOver.bind(this);
    this.onContainerMouseOut = this.onContainerMouseOut.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
    this.hideShareModal = this.hideShareModal.bind(this);
    this.showPhotoSlideshow = this.showPhotoSlideshow.bind(this);
    this.hidePhotoSlideshow = this.hidePhotoSlideshow.bind(this);
  }

  componentDidMount() {
    axios.get('/photos/?listingid=7')
      .then((photoList) => {
        this.setState({ photos: photoList.data });
      })
      .catch((err) => {
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

  showPhotoSlideshow(isVisible) {
    this.setState({ photoSlideshowIsVisible: isVisible });
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
          hidePhotoSlideshow={this.hidePhotoSlideshow}
          photoSlideshowIsVisible={photoSlideshowIsVisible}
        />
        <StyledContainer
          onMouseOver={this.onContainerMouseOver}
          onFocus={this.onContainerMouseOver}
          onMouseOut={this.onContainerMouseOut}
          onBlur={this.onContainerMouseOut}
        >
          <PhotosContainer
            isContainerHovered={isContainerHovered}
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
