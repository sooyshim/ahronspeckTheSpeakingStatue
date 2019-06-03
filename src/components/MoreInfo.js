import React from "react";

class MoreInfo extends React.Component {
  render() {
    if(this.props.showInfo) {
      return (
        <div className="moreInfoContent">
          <button className="exitButton"onClick={this.props.toggleMoreInfo}>&times;</button>
          <p>
            During the Italian Renaissance, people anonymously expressed
            their discontentment towards their governing institutions
            through the speaking statues. Pretending to be a statue, a person would write their opinion and post it on the statue. This tradition continues today in Italy, especially in Rome, and in social media.
          </p>
          <a href="https://twitter.com/scribeaccroupi">
            Check out my friend
            <span className="scribe">Scribe Accroupi</span> at the Louvre!
          </a>
        </div>
      );
    }
    return null
  }
}

export default MoreInfo;