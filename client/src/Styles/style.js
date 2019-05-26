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

// PhotoSlideshow Styled Components
const PhotoSlideshowModal = styled.section`
  display: ${props => (props.photoSlideshowIsVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.85);
  background-color: #262626;  
  z-index: 1000;
  overflow-y: auto;
  font-family: Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  font-weight: 300;
`;

const ClosePhotoSlideshowButtonContainer = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 16px 28px 8px;
  cursor: pointer;
  background-color: transparent;
  color: buttontext;
  border-width: 0px;
  z-index: 2000;
`;

const TableContainer = styled.div`
  display: table;
  table-layout: fixed;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

// MainSlideshow Styled Components
const MainPhoto = styled.img`
  display: table-row;
  width: 100%;
  height: 100%;
  max-width: 105vh;
  margin: 0px auto;
`;

const PreviousArrowContainer = styled.button`
  position: absolute;
  background: transparent;
  border: 0px;
  width: 75px;
  height: 100%;
  top: 0px;
  left: 0px;
  cursor: pointer;
`;

const MainSlideshowContainer = styled.div`
  position: relative;
`;

const NextArrowContainer = styled.button`
  position: absolute;
  background: transparent;
  border: 0px;
  width: 75px;
  height: 100%;
  top: 0px;
  right: 0px;
  cursor: pointer;
`;

// SlideshowFooter Styled Components
const BottomRow = styled.div`
  display: block;
  background-image: none;
  background-color: transparent;
  position: relative;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 2;
  text-align: center;
  color: rgb(255, 255, 255);
  overflow: hidden;
  border-radius: 0px;
`;

const FooterContainer = styled.div`
  max-width: 105vh;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  position: relative;
  transform: translateY(0px);
  transition: -ms-transform 0.2s ease-out 0s, -webkit-transform 0.2s ease-out 0s, transform 0.2s ease-out 0s;
`;

const PhotoDescription = styled.div`
  display: table-cell;
  padding-left: 0px;
  text-align: left;
  vertical-align: middle;
`;

const MiniSlideshowVisibilityButton = styled.div`
  display: table-cell;
  text-align: right;
  vertical-align: middle;
  cursor: pointer;
`;

// MiniSlideshow Styled Components
const MiniSlideshowContainer = styled.div`
  display: ${props => (props.photoListIsVisible ? 'block' : 'none')}
  position: relative;
  height: 67px;
  overflow: hidden;
`;

const MiniSlideshowListContainer = styled.div`
  position: absolute;
  width: 11110px;
  height: 100%;
  background-color: transparent;
`;

const MiniSlideshowUnorderedList = styled.ul`
  position: absolute;
  height: 100%;
  list-style-type: none;
  left: 0px;
  transition: -ms-transform 0.3s ease-out 0s, -webkit-transform 0.3s ease-out 0s, transform 0.3s ease-out 0s;
  transform: translateX(${props => props.translateValue}px);
  margin: 0px;
  padding: 0px;
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
  PhotoSlideshowModal,
  ClosePhotoSlideshowButtonContainer,
  TableContainer,
  MainPhoto,
  PreviousArrowContainer,
  MainSlideshowContainer,
  NextArrowContainer,
  BottomRow,
  FooterContainer,
  PhotoDescription,
  MiniSlideshowVisibilityButton,
  MiniSlideshowContainer,
  MiniSlideshowListContainer,
  MiniSlideshowUnorderedList,
};
