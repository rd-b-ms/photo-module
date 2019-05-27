import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledShareModal,
  ShareModalContainer,
  StyledCloseButton,
  ShareModalTitle,
  StyledListingDescription,
  StyledLinkContainer,
  ShareLinkTextContainer,
  StyledShareLinkText,
} from '../Styles/style';
import {
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  MessengerIcon,
  CopyIcon,
  EmbedIcon,
  ShareModalCloseIcon,
} from './svg';

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
      <StyledShareModal
        className="share-modal-container"
        onClick={this.handleClickOutsideModal}
        shareModalIsVisible={shareModalIsVisible}
      >
        <ShareModalContainer ref={this.ref}>
          <StyledCloseButton className="share-modal-close-button" onClick={this.onCloseButtonClick}>
            <ShareModalCloseIcon height="16px" width="16px" display="block" fill="rgb(118, 118, 118)" />
          </StyledCloseButton>
          <div style={{ display: 'block', padding: '0px 0px 24px 0px' }}>
            <ShareModalTitle className="share-modal-title">Share</ShareModalTitle>
            <StyledListingDescription>
              Check out this awesome listing on Carebnb:
               Veniam voluptatem sit rerum aut sed est in suscipit.
            </StyledListingDescription>
          </div>
          <StyledLinkContainer>
            <FacebookIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <ShareLinkTextContainer>
              <StyledShareLinkText>Facebook</StyledShareLinkText>
            </ShareLinkTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <TwitterIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <ShareLinkTextContainer>
              <StyledShareLinkText>Twitter</StyledShareLinkText>
            </ShareLinkTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <EmailIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <ShareLinkTextContainer>
              <StyledShareLinkText>Email</StyledShareLinkText>
            </ShareLinkTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <MessengerIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <ShareLinkTextContainer>
              <StyledShareLinkText>Messenger</StyledShareLinkText>
            </ShareLinkTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <CopyIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <ShareLinkTextContainer>
              <StyledShareLinkText>Copy Link</StyledShareLinkText>
            </ShareLinkTextContainer>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <EmbedIcon marginRight="8px" height="18px" width="18px" display="inline-block" fill="rgb(72, 72, 72)" />
            <ShareLinkTextContainer>
              <StyledShareLinkText>Embed</StyledShareLinkText>
            </ShareLinkTextContainer>
          </StyledLinkContainer>
        </ShareModalContainer>
      </StyledShareModal>
    );
  }
}

ShareModal.propTypes = {
  shareModalIsVisible: PropTypes.bool.isRequired,
  hideShareModal: PropTypes.func.isRequired,
};

export default ShareModal;
