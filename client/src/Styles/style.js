import styled from 'styled-components';

// App Level Styled Components
const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 25%;
  grid-template-rows: 50% 50%;
  height: 475px;
  width: 100%;
  background: #000;
  overflow: hidden;
`;

// Share Button Styled Components
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

export {
  StyledContainer,
  StyledShareButton,
  StyledShareText,
  StyledShareImage,
};
