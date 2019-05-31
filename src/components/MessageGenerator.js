import React from 'react';
import parchemin from "../styles/image/parchemin.png";

class MessageGenerator extends React.Component {
  handleChange = event => {
    const userInput = event.target.value;
    this.props.addNewInput(userInput);
  };

  render() {
    return (
      <form action="">
        <label htmlFor="userMessage">Enter your opinion here: </label>
        <div className="inputArea">
          <textarea
            name="userMessage"
            id="userMessage"
            cols="30"
            rows="10"
            maxLength="200"
            required
            value={this.props.value}
            onChange={this.handleChange}
            placeholder="I, Ahronspeck,"
          />
          <img className="parchemin" src={parchemin} alt="" />
        </div>
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