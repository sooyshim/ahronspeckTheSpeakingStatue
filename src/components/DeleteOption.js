import React from "react";

class DeleteOption extends React.Component {
  render() {
    const messages = this.props.messages;
    const lastIndex= (this.props.messages.length) - 1;
    const lastMessage = messages[lastIndex];
       
    if(this.props.showDeleteOption) {
      return (
        <div className="deleteOption" tabIndex="0">
          <h3>Your message: </h3>
          <p>{lastMessage.userMessage}</p>
          <p>
            You have {this.props.minutes}: {this.props.seconds} to delete
            your message.
          </p>
          <div className="optionButtons">
            <button
              className="deleteButton"
              onClick={() => {
                this.props.removeInput(lastMessage.key);
              }}
            >
              Delete
            </button>
            <button className="postButton" onClick={this.props.stopTimer}>
              Post
            </button>
          </div>
        </div>
      );
    } 
    return null   
  }
}

export default DeleteOption;