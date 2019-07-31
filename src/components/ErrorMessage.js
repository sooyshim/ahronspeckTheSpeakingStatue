import React from 'react';

const ErrorMessage = ({ showError, toggleErrorMessage }) => {
  if (showError) {
    return (
      <React.Fragment>
        <div className="errorMessage">
          <p>Please enter your message!</p>
          <button onClick={toggleErrorMessage} type="button">Close</button>
        </div>
      </React.Fragment>
    );
  }
  return (null);
};

export default ErrorMessage;
