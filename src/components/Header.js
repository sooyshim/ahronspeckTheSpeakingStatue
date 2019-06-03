import React from 'react';
import MessageGenerator from './MessageGenerator.js';
import ErrorMessage from "./ErrorMessage.js";
import MoreInfo from "./MoreInfo.js";
import small from '../styles/image/small.png';
import large from '../styles/image/large.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  constructor() {
    super(); 
    this.state={
      showInfo: false
    }
  }

  handleClick = () => {
    this.setState({
      showInfo:true
    })
  }

  toggleMoreInfo = () => {
    this.setState({
      showInfo: false
    })
  }

  render() {
    const infoIcon = <FontAwesomeIcon icon={faInfoCircle} />;

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
          <div className="moreInfoContainer">
            <button
              className="moreInfo"
              aria-label="moreInfo"
              onClick={this.handleClick}
            >
              <i aria-hidden="true">{infoIcon}</i>
            </button>
            <MoreInfo
              showInfo={this.state.showInfo}
              toggleMoreInfo={this.toggleMoreInfo}
            />
          </div>
          <div className="headerContent">
            <h1>
              Ahornspeck <br />
              The Speaking Statue
            </h1>
            <p className="subTitle">
              Inspired by the Talking Statues of Rome, this virtual space
              provides a room for public opinion.
            </p>
            <p>
              Post your opinions as if you are Ahornspeck, the speaking
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