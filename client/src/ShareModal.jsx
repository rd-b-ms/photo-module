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

const StyledInnerSection = styled.section`
  display: block;
  padding: 24px 0px;
  border-bottom: 1px solid rgb(235, 235, 235);
  border-top: 1px solid rgb(235, 235, 235);
  font-weight: 400;
  font-size: 16px;
  color: #008489;
`;

const ShareModal = ({ shareModalIsVisible }) => (
  <StyledSection shareModalIsVisible={shareModalIsVisible}>
    <StyledDiv>
      <StyledCloseButton>X</StyledCloseButton>
      <StyledHeader>
        <StyledTitle>Share</StyledTitle>
        <StyledListingDescription>
          Check out this awesome listing on Carebnb: (Add fake data here)
        </StyledListingDescription>
      </StyledHeader>
      <StyledInnerSection>
        <span>Facebook</span>
      </StyledInnerSection>
      <StyledInnerSection>
        <span>Twitter</span>
      </StyledInnerSection>
      <StyledInnerSection>
        <span>Email</span>
      </StyledInnerSection>
      <StyledInnerSection>
        <span>Messenger</span>
      </StyledInnerSection>
      <StyledInnerSection>
        <span>Copy Link</span>
      </StyledInnerSection>
      <StyledInnerSection>
        <span>Embed</span>
      </StyledInnerSection>
    </StyledDiv>
  </StyledSection>
);

ShareModal.propTypes = {
  shareModalIsVisible: PropTypes.bool.isRequired,
};

export default ShareModal;
