import React from 'react';
import PropTypes from 'prop-types';

const DeleteOption = ({
  messages, showDeleteOption, minutes, seconds, stopTimer, removeInput,
}) => {
  const lastIndex = (messages.length) - 1;
  const lastMessage = messages[lastIndex];

  if (showDeleteOption) {
    return (
      <div className="deleteOption" tabIndex="0">
        <h3>Your message: </h3>
        <p>{lastMessage.userMessage}</p>
        <p>
            You have{minutes}:{seconds} to delete your message.
        </p>
        <div className="optionButtons">
          <button
            type="button"
            className="deleteButton"
            onClick={() => {
              removeInput(lastMessage.key);
            }}
          >
              Delete
          </button>
          <button
            type="button"
            className="postButton"
            onClick={stopTimer}
          >
              Post
          </button>
        </div>
      </div>
    );
  }
  return null;
};

DeleteOption.propTypes = {
  showDeleteOption: PropTypes.bool,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  removeInput: PropTypes.func,
  messages: PropTypes.array,
  stopTimer: PropTypes.func,
};

export default DeleteOption;
