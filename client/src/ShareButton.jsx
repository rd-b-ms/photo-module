import React from 'react';
import styled from 'styled-components';

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

const StyledImg = styled.img`
  width: 15px;
  height: 15px;
  padding: 0px 15px 0px 0px;
  display: flex;
  flex-direction: row;
`;

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.setState(prevState => ({ isClicked: !prevState.isClicked }));
  }

  render() {
    const { isClicked } = this.state;

    return (
      <StyledButton type="button" onClick={this.onClick}>
        <StyledDiv>
          <StyledImg src="./../icons/share-icon-svg-5.jpg" alt="like icon" isClicked={isClicked} />
          <div>Share</div>
        </StyledDiv>
      </StyledButton>
    );
  }
}

export default ShareButton;
