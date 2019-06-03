import React from 'react';
import Header from './Header.js';
import BulletinBoard from './BulletinBoard.js';
import Footer from './Footer.js';
import firebase from '../firebase.js';
import scrollToComponent from "react-scroll-to-component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      value: "",
      minutes: 0,
      seconds: 0,
      givenTime: 180,
      showError: false,
      showDeleteOption: false,
      disableButton: false
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

  // (fired on change of child component)
  // add user's input to the state value
  addNewInput = currentInput => {
    this.setState({
      value: currentInput
    });
  };

  //on click of the post button
  handlePostClick = event => {
    event.preventDefault();

    //if there is a value, push the value to firebase, start timer and scroll to the component
    // else prompt the error message and disable the post button
    if (this.state.value) {
      const dbRef = firebase.database().ref();
      dbRef.push({ value: this.state.value, likeCount: 0 });
      this.startTimer();
      scrollToComponent(this.BulletinBoard, {
        offset: 0,
        align: "top",
        duration: 500,
        ease: "inExpo"
      });
    } else {
      this.setState({
        showError: true,
        disableButton: true
      });
    }

    this.setState({
      value: ""
    });
  };

  // add new like counts to the firebase db
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
  
  //remove user input from the firebase db
  removeInput = key => {
    const dbRef = firebase
      .database()
      .ref()
      .child(key);

    dbRef.remove();

    this.setState({
      showDeleteOption: false,
      disableButton: false
    });

    this.stopTimer();
  };

  //start the timer and prompt the delete option window
  startTimer = () => {
    this.timer = setInterval(() => {
      const secondsRemaining = this.state.givenTime;
      if (secondsRemaining > 0) {
        const newTime = secondsRemaining - 1;

        const min = Math.floor(newTime / 60);

        const sec = Math.floor((newTime / 60 - min) * 60);

        this.setState({
          minutes: min,
          seconds: sec,
          givenTime: newTime,
          showDeleteOption: true,
          disableButton: true
        });

        if (sec < 10) {
          this.setState({
            seconds: "0" + this.state.seconds
          });
        }

        if (min < 10) {
          this.setState({
            minutes: "0" + this.state.minutes
          });
        }
      } else {
        this.setState({
          showDeleteOption: false,
          givenTime: 180,
          disableButton: false
        });
      }
    }, 1000);
  };

  //stop the timer
  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      showDeleteOption: false,
      givenTime: 180,
      disableButton: false
    });
  };

  //toggle error message and able the post button
  toggleErrorMessage = () => {
    this.setState({
      showError: !this.state.showError,
      disableButton: false
    });
  };

  // toggle to disable the post button
  toggleDisableButton = () => {
    this.setState({
      disableButton: true
    });
  };

  render() {
    return (
      <div className="app">
        <Header
          value={this.state.value}
          showError={this.state.showError}
          addNewInput={this.addNewInput}
          handlePostClick={this.handlePostClick}
          disableButton={this.state.disableButton}
          toggleErrorMessage={this.toggleErrorMessage}
        />
        <main
          className="bulletinBoard"
          ref={h2 => {
            this.BulletinBoard = h2;
          }}
        >
          <BulletinBoard
            messages={this.state.messages}
            showDeleteOption={this.state.showDeleteOption}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            addNewLikeCount={this.addNewLikeCount}
            removeInput={this.removeInput}
            stopTimer={this.stopTimer}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
