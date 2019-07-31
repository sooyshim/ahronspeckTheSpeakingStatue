import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import DeleteOption from './DeleteOption.js';
import washiTape from './images/washiTape.png';

const BulletinBoard = ({
  showDeleteOption, minutes, seconds, removeInput, messages, stopTimer, addNewLikeCount,
}) => {
  const likeIcon = <FontAwesomeIcon icon={faHandHoldingHeart} />;
  return (

    <section className="bulletinBoard">
      <div className="wrapper">
        <h2>Posted Messages</h2>
        <p className="explanation voteExplanation">Vote for opinions by clicking the hand button</p>
        <DeleteOption
          showDeleteOption={showDeleteOption}
          minutes={minutes}
          seconds={seconds}
          removeInput={removeInput}
          messages={messages}
          stopTimer={stopTimer}
        />
        <ul>
          {messages.map(message => (
            <li key={message.key}>
              <img src={washiTape} alt="" />
              <div className="messageContainer">
                <p>{message.userMessage}</p>
                <button
                  type="button"
                  onClick={() => {
                    addNewLikeCount(message.key);
                  }}
                >
                  <i aria-hidden="true">{likeIcon}</i>
                  <p>{message.likes}</p>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};


export default BulletinBoard;
