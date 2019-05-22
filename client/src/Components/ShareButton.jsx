import React from 'react';
import { StyledShareButton, StyledShareImage, StyledShareText } from '../Styles/style';

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shareButtonClicked: false };

    this.onShareButtonClick = this.onShareButtonClick.bind(this);
  }

  onShareButtonClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ shareButtonClicked: !prevState.shareButtonClicked }));
  }

  render() {
    const { shareButtonClicked } = this.state;

    return (
      <StyledShareButton type="button" onClick={this.onShareButtonClick}>
        <StyledShareText>
          <StyledShareImage src="./../icons/share-icon-svg-5.jpg" alt="like icon" shareButtonClicked={shareButtonClicked} />
          <div>Share</div>
        </StyledShareText>
      </StyledShareButton>
    );
  }
}

export default ShareButton;
