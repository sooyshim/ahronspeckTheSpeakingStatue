import React from 'react';

class BulletinBoard extends React.Component {
  render() {
    return (
      <ul>
        {this.props.messages.map(message => {
          return <li key={message.key}>{message.userMessage}</li>
        })}
      </ul>
    );
  }
}

export default BulletinBoard;