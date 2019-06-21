import React from 'react';
import DeleteOption from './DeleteOption.js';
import washiTape from "./images/washiTape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

class BulletinBoard extends React.Component {
  render() {
    const likeIcon = <FontAwesomeIcon icon={faHandHoldingHeart} />;

    return (
      <section className="bulletinBoard">
        <div className="wrapper">
          <h2>Posted Messages</h2>
          <p className="explanation voteExplanation">Vote for opinions by clicking the hand button</p>
          <DeleteOption
            showDeleteOption={this.props.showDeleteOption}
            minutes={this.props.minutes}
            seconds={this.props.seconds}
            removeInput={this.props.removeInput}
            messages={this.props.messages}
            stopTimer={this.props.stopTimer}
          />
          <ul>
            {this.props.messages.map(message => {
              return (
                <li key={message.key} tabIndex="0">
                  <img src={washiTape} alt="" />
                  <div className="messageContainer">
                    <p>{message.userMessage}</p>
                    <button
                      onClick={() => {
                        this.props.addNewLikeCount(message.key);
                      }}
                    >
                      <i aria-hidden="true">{likeIcon}</i>
                      <p>{message.likes}</p>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default BulletinBoard;