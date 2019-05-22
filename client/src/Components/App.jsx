import React from 'react';
import axios from 'axios';
import { StyledContainer } from '../Styles/style';
import PhotosContainer from './PhotosContainer';
import SaveButton from './SaveButton';
import ShareButton from './ShareButton';
import ViewPhotosButton from '../ViewPhotosButton';
import ShareModal from '../ShareModal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: [], isContainerHovered: false };

    this.onContainerMouseOver = this.onContainerMouseOver.bind(this);
    this.onContainerMouseOut = this.onContainerMouseOut.bind(this);
    this.showShareModal = this.showShareModal.bind(this);
  }

  componentDidMount() {
    axios.get('/photos/?listingid=7')
      .then((photoList) => {
        this.setState({ photos: photoList.data, shareModalIsVisible: false });
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

  render() {
    const {
      photos,
      index,
      isContainerHovered,
      shareModalIsVisible,
    } = this.state;
    return (
      <div>
        <ShareModal shareModalIsVisible={shareModalIsVisible} />
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
        </StyledContainer>
      </div>
    );
  }
}

export default App;
