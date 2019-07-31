import React from 'react';
import PropTypes from 'prop-types';

class MessageGenerator extends React.Component {
  handleChange = (event) => {
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
        <button
          type="button"
          disabled={this.props.disableButton}
          onClick={(event) => {
            this.props.handlePostClick(event);
          }}
        >
          Post
        </button>
      </form>
    );
  }
}

MessageGenerator.propTypes = {
  addNewInput: PropTypes.func,
  handlePostClick: PropTypes.func,
  value: PropTypes.string,
  disableButton: PropTypes.bool,
};

export default MessageGenerator;
