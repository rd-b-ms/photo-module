import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FacebookIcon, TwitterIcon, EmailIcon, MessengerIcon, CopyIcon, EmbedIcon } from './svg';

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
  vertical-align: top;
  padding: 24px 0px;
  border-bottom: 1px solid rgb(235, 235, 235);
  border-top: 1px solid rgb(235, 235, 235);
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
  display: table-cell;
  vertical-align: top;
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
        className="share-modal-container"
        onClick={this.handleClickOutsideModal}
        shareModalIsVisible={shareModalIsVisible}
      >
        <StyledDiv ref={this.ref}>
          <StyledCloseButton className="share-modal-close-button" onClick={this.onCloseButtonClick}>X</StyledCloseButton>
          <StyledHeader>
            <StyledTitle className="share-modal-title">Share</StyledTitle>
            <StyledListingDescription>
              Check out this awesome listing on Carebnb:
               Veniam voluptatem sit rerum aut sed est in suscipit.
            </StyledListingDescription>
          </StyledHeader>
          <StyledLinkContainer>
            <FacebookIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <StyledTextContainer>
              <StyledText>Facebook</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <TwitterIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <StyledTextContainer>
              <StyledText>Twitter</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <EmailIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <StyledTextContainer>
              <StyledText>Email</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <MessengerIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <StyledTextContainer>
              <StyledText>Messenger</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <CopyIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <StyledTextContainer>
              <StyledText>Copy Link</StyledText>
            </StyledTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <EmbedIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
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
