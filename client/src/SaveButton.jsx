import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  position: absolute;
  margin: 2% 0% 0% 90%;
  border-radius: 4px;
  background-color: white;
  color: #484848;
  height: 36px;
  width: 91px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSvg = styled.img`
  width: 15px;
  height: 15px;
  padding: 0px 15px 0px 0px;
  display: flex;
  flex-direction: row;
`;

class SaveButton extends React.Component {
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
    return (
      <StyledButton type="button" onClick={this.onClick}>
        <StyledDiv>
          <StyledSvg src="./../icons/altlike.svg" alt="like icon" fill="#484848" />
          <div>Save</div>
        </StyledDiv>
      </StyledButton>
    );
  }
}

export default SaveButton;
