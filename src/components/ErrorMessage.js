import React from 'react';

class ErrorMessage extends React.Component {
  render() {
    if(this.props.showError) {
      return (
        <div className="errorMessage">
          <h1>Please enter your message!</h1>
          <button onClick={this.props.toggleErrorMessage}>Close</button>
        </div>
      )
    }
    return (null)
  }
}

export default ErrorMessage;