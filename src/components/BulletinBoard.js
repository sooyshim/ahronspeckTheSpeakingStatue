import React from 'react';
import Timer from './Timer.js'
import washiTape from "../styles/image/washiTape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";


class BulletinBoard extends React.Component {
  render() {
    const likeIcon = <FontAwesomeIcon icon={faHandHoldingHeart} />;

    return (
      <main className="bulletinBoard">
        <div className="wrapper">
          <ul>
            {this.props.messages.map(message => {
              return (
                  <li key={message.key} tabIndex="0">
                    <img src={washiTape} alt="" />
                    {message.userMessage}
                    <button
                      onClick={() => {
                        this.props.addNewLikeCount(message.key);
                      }}
                    >
                      <p>{message.likes}</p>
                      <i aria-hidden="true">{likeIcon}</i>
                    </button>
                  </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}

export default BulletinBoard;