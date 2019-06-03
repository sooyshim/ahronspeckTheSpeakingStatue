import React from 'react';

class ErrorMessage extends React.Component {
  render() {
    if(this.props.showError) {
      return (
        <React.Fragment>
          <div className="errorMessage">
            <p>Please enter your message!</p>
            <button onClick={this.props.toggleErrorMessage} >Close</button>
          </div>
        </React.Fragment>
      );
    }
    return (null)
  }
}

export default ErrorMessage;