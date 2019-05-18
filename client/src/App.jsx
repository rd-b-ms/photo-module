import React from 'react';
import axios from 'axios';
import PhotosContainer from './PhotosContainer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { photos: [] };
  }

  componentDidMount() {
    axios.get('/photos/?listingid=2')
      .then((photoList) => {
        this.setState({ photos: photoList.data });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { photos } = this.state;
    return (
      <div>
        <PhotosContainer photos={photos} />
      </div>
    );
  }
}

export default App;
