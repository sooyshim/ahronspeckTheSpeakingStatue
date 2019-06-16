import React from 'react';

class MessageGenerator extends React.Component {
  handleChange = event => {
    const userInput = event.target.value;
    this.props.addNewInput(userInput);
  };

  render() {
    return (
      <form action="">
        <label htmlFor="userMessage">Have your say:</label>
        <p className="textareaInfo">(Maximum 300 characters/ 3 mins to delete)</p>
        <div className="inputArea">
          <textarea
            name="userMessage"
            id="userMessage"
            cols="30"
            rows="10"
            maxLength="300"
            required
            value={this.props.value}
            onChange={this.handleChange}
            placeholder="I, Ahronspeck,"
          />
        </div>
        <button disabled={this.props.disableButton}
          onClick={event => {
            this.props.handlePostClick(event);
          }}
        >
          Post
        </button>
      </form>
    );
  }
}

export default MessageGenerator;