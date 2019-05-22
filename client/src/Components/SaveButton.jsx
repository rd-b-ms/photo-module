import React from 'react';
import { StyledSaveButton, StyledSaveText, StyledHeartImg } from '../Styles/style';

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
    let imgSource;
    let saveText;
    if (isClicked) {
      imgSource = './../icons/altlike.svg';
      saveText = 'Saved';
    } else {
      imgSource = './../icons/like.svg';
      saveText = 'Save';
    }
    return (
      <StyledSaveButton type="button" onClick={this.onClick}>
        <StyledSaveText>
          <StyledHeartImg src={imgSource} alt="like icon" isClicked={isClicked} />
          <div>{saveText}</div>
        </StyledSaveText>
      </StyledSaveButton>
    );
  }
}

export default SaveButton;
