import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ShareButtonIcon } from './svg';

const StyledButton = styled.button`
  position: absolute;
  margin: 2% 0% 0% 82%;
  border-radius: 4px;
  background-color: white;
  color: #484848;
  height: 36px;
  width: 91px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

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
      <StyledButton className="share-button" onClick={this.onShareButtonClick}>
        <StyledDiv>
          <ShareButtonIcon height="15px" width="15px" display="block" fill="currentColor" padding="0px 15px 0px 0px" shareButtonClicked={shareButtonClicked} />
          <div>Share</div>
        </StyledDiv>
      </StyledButton>
    );
  }
}

ShareButton.propTypes = {
  showShareModal: PropTypes.func.isRequired,
};

export default ShareButton;
