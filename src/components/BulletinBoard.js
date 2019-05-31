import React from 'react';

class BulletinBoard extends React.Component {
  render() {
    return (
      <main className="bulletinBoard">
        <div className="wrapper">
          <ul>
            {this.props.messages.map(message => {
              return (
                <li key={message.key} tabIndex="0">
                  {message.userMessage}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}

export default BulletinBoard;