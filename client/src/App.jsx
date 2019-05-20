import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PhotosContainer from './PhotosContainer';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: 50% 50%;
  height: 475px;
  width: 100%;
  background: #000;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { photos: [], isContainerHovered: false };

    this.onContainerMouseOver = this.onContainerMouseOver.bind(this);
    this.onContainerMouseOut = this.onContainerMouseOut.bind(this);
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

  render() {
    const { photos, index } = this.state;
    return (
      <StyledContainer>
        <PhotosContainer
          onMouseOver={this.onContainerMouseOver}
          onFocus={this.onContainerMouseOver}
          onMouseOut={this.onContainerMouseOut}
          onBlur={this.onContainerMouseOut}
          photos={photos}
          index={index}
        />
      </StyledContainer>
    );
  }
}

export default App;
