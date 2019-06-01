import React from 'react';
import Header from './Header.js';
import BulletinBoard from './BulletinBoard.js';
import Footer from './Footer.js';
import firebase from '../firebase.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      value: "",
      showError: false,
      minutes: 0,
      seconds: 0,
      givenTime: 10,
      showDeleteOption: false
    };
  }

  //when mounted, check the DB for data and setState
  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", response => {
      //create an empty array to contain data from the db
      const newState = [];
      //store the data from the db in a variable
      const data = response.val();

      for (let key in data) {
        newState.push({
          key: key,
          userMessage: data[key].value,
          likes: data[key].likeCount
        });
      }

      this.setState({
        messages: newState
      });
    });
  }

  addNewInput = currentInput => {
    //add new input the state
    this.setState({
      value: currentInput
    });
  };

  //on click post
  updateDB = event => {
    event.preventDefault();

    if (this.state.value) {
      const dbRef = firebase.database().ref();
      dbRef.push({ value: this.state.value, likeCount: 0 });
    } else {
      this.setState({
        showError: true
      });
    } 

    this.setState({
      value: ""
    });
  };

  toggleErrorMessage = () => {
    this.setState({
      showError: !this.state.showError
    });
  };

  addNewLikeCount = key => {
    const dbRef = firebase
      .database()
      .ref()
      .child(key);
    const dbLikeCount = dbRef.child("likeCount");
    let updatedCount;

    dbLikeCount.on("value", snapshot => {
      const currentLikeCount = snapshot.val();

      updatedCount = currentLikeCount + 1;

      return updatedCount;
    });

    dbLikeCount.set(updatedCount);
  };

  removeInput = key => {
    const dbRef = firebase
      .database()
      .ref()
      .child(key);

    dbRef.remove();
  };

  tick = () => {
    
    this.timer= setInterval(() => {      
        const secondsRemaining = this.state.givenTime;

        if(secondsRemaining > 0) {
          const newTime = secondsRemaining - 1;

          const min = Math.floor(newTime / 60);

          const sec = Math.floor((newTime / 60 - min) * 60);

          this.setState({
            minutes: min,
            seconds: sec,
            givenTime: newTime,
            showDeleteOption: true
          });
        } else {
          this.setState({
            showDeleteOption: false
          })
        }
      }, 1000);
    
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      showDeleteOption: false
    });
  }

  render() {
    return (
      <div className="app">
        <Header
          addNewInput={this.addNewInput}
          updateDB={this.updateDB}
          value={this.state.value}
          showError={this.state.showError}
          toggleErrorMessage={this.toggleErrorMessage}
          tick={this.tick}
          showDeleteOption={this.state.showDeleteOption}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          removeInput={this.removeInput}
          messages={this.state.messages}
          stopTimer={this.stopTimer}
        />
        <BulletinBoard
          messages={this.state.messages}
          addNewLikeCount={this.addNewLikeCount}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
