import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: ${props => (props.shareModalIsVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const StyledDiv = styled.div`
  display: block;
  position:fixed;
  background: rgb(255, 255, 255);
  padding: 24px;
  font-family: Roboto, Helvetica, sans-serif;
  color: #484848;
  font-size: 14px;
  width: 23%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`;

const StyledCloseButton = styled.button`
  display: block;
  padding: 20px;
  margin: -20px;
  cursor: pointer;
  background-color: transparent;
  font-weight: 100;
  font-family: inherit;
  font-size: 24px;
  border-width: 0px;
  color: rgb(118, 118, 118);
`;

const StyledHeader = styled.div`
  display: block;
  padding: 0px 0px 24px 0px;
`;

const StyledTitle = styled.h1`
  margin: 15px 0px 0px 0px;
  padding: 2px 0px;
  font-weight: 700;
  font-family: inherit;
  font-size: 24px;
  line-height: 1.25em;
  color: #484848;
`;

const StyledListingDescription = styled.div`
  display: block;
  word-wrap: break-word;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.28em;
`;

const StyledLinkContainer = styled.section`
  display: block;
  padding: 24px 0px;
  border-bottom: 1px solid rgb(235, 235, 235);
  border-top: 1px solid rgb(235, 235, 235);
  justify-content: center;
  cursor: pointer;
`;

const StyledIcon = styled.img`
  height: 18px;
  width: 18px;
  fill: rgb(72, 72, 72);
  z-index: 10;
  margin: 0px 8px -4px 0px;
`;

const StyledTextContainer = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #008489;
`;

const StyledText = styled.span`
  ${StyledTextContainer}:hover & {
    text-decoration: underline;
  }
`;

class ShareModal extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    this.onCloseButtonClick = this.onCloseButtonClick.bind(this);
    this.handleClickOutsideModal = this.handleClickOutsideModal.bind(this);
  }

  onCloseButtonClick() {
    const { hideShareModal } = this.props;
    hideShareModal(false);
  }

  handleClickOutsideModal(event) {
    const isOutside = !this.ref.current.contains(event.target);
    const { hideShareModal } = this.props;

    if (isOutside) {
      hideShareModal(false);
    }
  }

  render() {
    const { shareModalIsVisible } = this.props;

    return (
      <StyledSection
        onClick={this.handleClickOutsideModal}
        shareModalIsVisible={shareModalIsVisible}
      >
        <StyledDiv ref={this.ref}>
          <StyledCloseButton onClick={this.onCloseButtonClick}>X</StyledCloseButton>
          <StyledHeader>
            <StyledTitle>Share</StyledTitle>
            <StyledListingDescription>
              Check out this awesome listing on Carebnb:
               Veniam voluptatem sit rerum aut sed est in suscipit.
            </StyledListingDescription>
          </StyledHeader>
          <StyledLinkContainer>
            <StyledIcon src="./../icons/facebook-app-symbol.svg" alt="facebook icon" />
            <StyledTextContainer>
              <StyledText>Facebook</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledIcon src="./../icons/twitter-logo-silhouette.svg" alt="twitter icon" />
            <StyledTextContainer>
              <StyledText>Twitter</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledIcon src="./../icons/email.svg" alt="email icon" />
            <StyledTextContainer>
              <StyledText>Email</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledIcon src="./../icons/messenger.svg" alt="facebook messenger icon" />
            <StyledTextContainer>
              <StyledText>Messenger</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledIcon src="./../icons/document.svg" alt="facebook messenger icon" />
            <StyledTextContainer>
              <StyledText>Copy Link</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledIcon src="./../icons/html-coding.svg" alt="facebook messenger icon" />
            <StyledTextContainer>
              <StyledText>Embed</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
        </StyledDiv>
      </StyledSection>
    );
  }
}

ShareModal.propTypes = {
  shareModalIsVisible: PropTypes.bool.isRequired,
  hideShareModal: PropTypes.func.isRequired,
};

export default ShareModal;
