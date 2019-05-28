import React from 'react';
import PropTypes from 'prop-types';
import { StyledShareButton, StyledShareButtonContainer } from '../Styles/style';
import { ShareButtonIcon } from './svg';

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shareButtonClicked: false };

    this.onShareButtonClick = this.onShareButtonClick.bind(this);
  }

  onShareButtonClick(event) {
    event.preventDefault();
    const { showShareModal } = this.props;
    showShareModal(true);
  }

  render() {
    const { shareButtonClicked } = this.state;

    return (
      <StyledShareButton className="share-button" onClick={this.onShareButtonClick}>
        <StyledShareButtonContainer>
          <ShareButtonIcon height="15px" width="15px" display="block" fill="currentColor" padding="0px 15px 0px 0px" shareButtonClicked={shareButtonClicked} />
          <div>Share</div>
        </StyledShareButtonContainer>
      </StyledShareButton>
    );
  }
}

ShareButton.propTypes = {
  showShareModal: PropTypes.func.isRequired,
};

export default ShareButton;
