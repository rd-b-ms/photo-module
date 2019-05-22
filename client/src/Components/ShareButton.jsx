import React from 'react';
import styled from 'styled-components';

const StyledShareButton = styled.button`
  position: absolute;
  margin: 2% 0% 0% 82%;
  border-radius: 4px;
  background-color: white;
  color: #484848;
  height: 36px;
  width: 91px;
`;

const StyledShareText = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

const StyledShareImage = styled.img`
  width: 15px;
  height: 15px;
  padding: 0px 15px 0px 0px;
  display: flex;
  flex-direction: row;
`;

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
