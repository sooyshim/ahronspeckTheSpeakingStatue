import React from 'react';
import Header from './Header.js';
import MessageGenerator from './MessageGenerator.js';
import BulletinBoard from './BulletinBoard.js';
import Footer from './Footer.js';
import firebase from '../firebase.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      value: "",
      showError: false
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
          userMessage: data[key]
        });
      }      

      this.setState({
        messages: newState
      });
    });
  }

// componentDidCatch(error, info) {
//   // display fallback UI
//   this.setState({
//     hasError: true
//   });

//   logErrorToMyService(error, info)
// }

addNewInput = (newMessage) => {
  //??? is this necessary???
  let currentInput = this.state.value;
  currentInput = newMessage;

  //add new input the state
  this.setState({
    value: currentInput
  })
}

updateDB = (event) => {
  event.preventDefault();

  if (this.state.value) {
    const dbRef = firebase.database().ref();
    dbRef.push(this.state.value);
  } else {
    this.setState({
      showError: true
    })
  }

  this.setState({
    value: ""
  })
}

toggleErrorMessage = () => {
  this.setState({
    showError: !this.state.showError
  })
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
        />
        <BulletinBoard messages={this.state.messages} />
        <Footer />
      </div>
    );
  }
}

export default App;
