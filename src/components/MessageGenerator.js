import React from 'react';

class MessageGenerator extends React.Component {
  
  handleChange = event => {
    const userInput = event.target.value;
    this.props.addNewInput(userInput);
  };


  render() {
    return (
      <form action="">
        <label htmlFor="userMessage">
          Enter your opinion here
          <textarea
            name="userMessage"
            id="userMessage"
            cols="30"
            rows="10"
            maxLength="200"
            required
            value={this.props.value}
            onChange={this.handleChange}
          />
        </label>
        {/* !!!! WHY IS THIS WORKING? REACT DOC SAYS TO AVOID!*/}
        <button
          onClick={event => {
            this.props.updateDB(event);
          }}
        >
          Post
        </button>
      </form>
    );
  }
}

export default MessageGenerator;