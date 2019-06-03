import React from 'react';
import ShowDeleteOption from './ShowDeleteOption.js';
import washiTape from "../styles/image/washiTape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";


class BulletinBoard extends React.Component {
  render() {
    const likeIcon = <FontAwesomeIcon icon={faHandHoldingHeart} />;

    return (
      <section className="bulletinBoard">
        <div className="wrapper">
          <ShowDeleteOption
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