import React from 'react';
import PropTypes from 'prop-types';

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

ErrorMessage.propTypes = {
  showError: PropTypes.bool,
  toggleErrorMessage: PropTypes.func,
};

export default ErrorMessage;
