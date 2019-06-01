import React from "react";
import Timer from "./Timer.js"

class ShowDeleteOption extends React.Component {
  
  render() {
    const messages = this.props.messages;
    const lastIndex= this.props.messages.length - 1;
    const lastMessage = messages[lastIndex];
       
    if(this.props.showDeleteOption) {
      
      return (
        <div className="timer">
          <h3>Your message: </h3>
          <p>{this.props.messages[this.props.messages.length - 1].userMessage}</p>
          <p>
            You have {this.props.minutes}: {this.props.seconds} to delete your message
          </p>
          <button 
          onClick={()=> {
            this.props.removeInput(lastMessage.key);
            this.props.stopTimer();
          }}>
          Delete my message
          </button>
        </div>
      );
    } 

    return null
    
  }
}

export default ShowDeleteOption;