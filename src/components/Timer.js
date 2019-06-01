import React from "react";

class Timer extends React.Component {

  render() {

    return (
        <p>
          {this.props.minutes}: {this.props.seconds}
        </p>
    );
  

  }
}
export default Timer;