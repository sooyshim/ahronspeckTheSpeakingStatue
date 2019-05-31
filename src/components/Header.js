import React from 'react';
import small from '../styles/image/small.png';
import large from '../styles/image/large.png';
import MessageGenerator from './MessageGenerator';
import ErrorMessage from "./ErrorMessage.js";

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
              className="smallImg"
            />
          </picture>
          <div className="headerContent">
            <h1>
              Ahornspeck <br />
              The Speaking Statue
            </h1>
            <p className="subTitle">  
              Inspired by the Talking Statues of Rome, this virtual space
              provides a room for public opinion.
            </p>
            <p>Speak as if you are Ahornspeck, the speaking statue!</p>
            <MessageGenerator
              addNewInput={this.props.addNewInput}
              updateDB={this.props.updateDB}
              value={this.props.value}
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