import React from 'react';

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


export default DeleteOption;
