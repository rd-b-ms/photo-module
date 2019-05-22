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
    position:fixed;
    background: #fff;
    width: 80%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`;

const ShareModal = ({ shareModalIsVisible }) => {
  // constructor({ shareModalIsVisible }) {
  //   super({ shareModalIsVisible });
  //   this.state = { isVisible: false };
  // }

  return (
    <StyledSection shareModalIsVisible={shareModalIsVisible}>
      <StyledDiv>Test Modal</StyledDiv>
    </StyledSection>
  );
};

ShareModal.propTypes = {
  shareModalIsVisible: PropTypes.bool.isRequired,
};

export default ShareModal;
