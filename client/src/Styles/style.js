import styled from 'styled-components';

// Styled Components for App.jsx
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: 50% 50%;
  height: 475px;
  width: 100%;
  background: #000;
  overflow: hidden;
`;

// Styled Components for ShareButton.jsx
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

// Styled Components for Photo.jsx
const StyledPhotoContainer = styled.div`
  grid-column-start: ${(props) => {
    if (props.index === 0) {
      return '1';
    }
    if (props.index === 1 || props.index === 3) {
      return '2';
    }
    return '3';
  }};
  grid-column-end: ${(props) => {
    if (props.index === 0) {
      return '2';
    }
    if (props.index === 1 || props.index === 3) {
      return '3';
    }
    return '4';
  }};
  grid-row-start: ${(props) => {
    if (props.index <= 2) {
      return '1';
    }
    return '2';
  }};
  grid-row-end:${(props) => {
    if (props.index === 0 || props.index === 3 || props.index === 4) {
      return '3';
    }
    return '2';
  }};
  border: 1px solid #484848;
  overflow: hidden;
`;

const StyledPhoto = styled.img`
  height: 100%;
  width: 100%;
  opacity: ${props => ((!props.hover && props.isContainerHovered) ? '0.7' : '1')};
  transform: ${props => (props.hover ? 'scale(1.05)' : 'scale(1)')};
  -webkit-transition: 0.5s ease-out;
  -moz-transition: 0.5s ease-out;
  -o-transition: 0.5s ease-out;
  -ms-transition: 0.5s ease-out;
`;

// Styled Components for SaveButton.jsx
const StyledSaveButton = styled.button`
  position: absolute;
  margin: 2% 0% 0% 90%;
  border-radius: 4px;
  background-color: white;
  color: #484848;
  height: 36px;
  width: 91px;
`;

const StyledSaveText = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

const StyledHeartImg = styled.img`
  width: 15px;
  height: 15px;
  padding: 0px 15px 0px 0px;
  display: flex;
  flex-direction: row;
`;

export {
  StyledContainer,
  StyledShareButton,
  StyledShareText,
  StyledShareImage,
  StyledPhotoContainer,
  StyledPhoto,
  StyledSaveButton,
  StyledSaveText,
  StyledHeartImg,
};
