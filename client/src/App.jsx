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

    this.state = { photos: [] };
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

  render() {
    const { photos, index } = this.state;
    return (
      <StyledContainer>
        <PhotosContainer photos={photos} index={index} />
      </StyledContainer>
    );
  }
}

export default App;
