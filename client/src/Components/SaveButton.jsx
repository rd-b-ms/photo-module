import React from 'react';
import { StyledSaveButton, StyledSaveText, StyledHeartDiv } from '../Styles/style';
import { SaveButtonHeart } from './svg';

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
    const { isClicked } = this.state;
    let saveText;
    if (isClicked) {
      saveText = 'Saved';
    } else {
      saveText = 'Save';
    }
    return (
      <StyledSaveButton onClick={this.onClick}>
        <StyledSaveText>
          <StyledHeartDiv>
            <SaveButtonHeart
              display="block"
              height="15px"
              width="15px"
              fill={isClicked ? '#FF5A5F' : '#484848'}
              overflow="visible"
              fillOpacity={isClicked ? '1' : '0'}
              stroke={isClicked ? '#FF5A5F' : '#484848'}
              strokeWidth="1"
            />
          </StyledHeartDiv>
          <div>{saveText}</div>
        </StyledSaveText>
      </StyledSaveButton>
    );
  }
}

export default SaveButton;
