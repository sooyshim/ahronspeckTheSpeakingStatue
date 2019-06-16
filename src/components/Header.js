import React from 'react';
import MessageGenerator from './MessageGenerator.js';
import ErrorMessage from "./ErrorMessage.js";
import small from './images/small.png';
import large from './images/large.png';

class Header extends React.Component {
  render() {

    return (
      <header className="headerContainer">
        <div className="wrapper">
          <picture>
            <source
              media="(min-width: 900px)"
              srcSet={large}
              type="image/png"
              className="largeImg"
            />
            <img
              src={small}
              alt="A bust of a statue, presumably called Ahornspeck"
              className="statueImg"
            />
          </picture>
          <div className="headerContent">
            <h1>
              Ahornspeck:
              The Speaking Statue
            </h1>
            <p className="explanation explanationOne">
              During the Italian Renaissance, people anonymously expressed
              their discontentment towards their governing institutions
              through speaking statues. 
            </p>
            <p className="explanation explanationTwo">
              Pretending to be a statue, people wrote their opinions and posted them on the statue. 
              This tradition continues today in Italy, especially in Rome, and in social media.
            </p>
            <p className="explanation explanationThree">
              Inspired by the Talking Statues of Rome, this virtual space
              provides a room for public opinion. Post your opinions as if you are Ahornspeck, the speaking
              statue!
            </p>
            <MessageGenerator
              addNewInput={this.props.addNewInput}
              handlePostClick={this.props.handlePostClick}
              value={this.props.value}
              disableButton={this.props.disableButton}
            />
          </div>
          <ErrorMessage
            showError={this.props.showError}
            toggleErrorMessage={this.props.toggleErrorMessage}
          />
        </div>
      </header>
    );
  }
}

export default Header;