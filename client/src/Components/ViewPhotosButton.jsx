import React from 'react';
import PropTypes from 'prop-types';
import { StyledViewPhotosButton, StyledViewPhotosText } from '../Styles/style';

class ViewPhotosButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewPhotosButtonClicked: false };

    this.onViewPhotosButtonClick = this.onViewPhotosButtonClick.bind(this);
  }

  onViewPhotosButtonClick(event) {
    event.preventDefault();
    const { showPhotoSlideshow } = this.props;
    showPhotoSlideshow(true);
  }

  render() {
    const { viewPhotosButtonClicked } = this.state;

    return (
      <StyledViewPhotosButton
        type="button"
        viewPhotosButtonClicked={viewPhotosButtonClicked}
        onClick={this.onViewPhotosButtonClick}
      >
        <StyledViewPhotosText>View Photos</StyledViewPhotosText>
      </StyledViewPhotosButton>
    );
  }
}

ViewPhotosButton.propTypes = {
  showPhotoSlideshow: PropTypes.func.isRequired,
};

export default ViewPhotosButton;
