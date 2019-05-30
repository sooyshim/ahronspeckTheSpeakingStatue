import React from 'react';
import Header from './Header.js';
import MessageGenerator from './MessageGenerator.js';
import BulletinBoard from './BulletinBoard.js';
import Footer from './Footer.js';
import firebase from '../firebase.js';
import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      value: "I, Ahronspeck,"
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

  const dbRef = firebase.database().ref();

  dbRef.push(this.state.value);

  this.setState({
    value: "I, Ahronspeck,"
  })
}

  render() {
    return (
      <div className="App">
        {/* Is this a good syntax? */}
        <header>
          <div className="wrapper">
            <Header />
            <MessageGenerator
              addNewInput={this.addNewInput}
              updateDB={this.updateDB}
              value={this.state.value}
            />
          </div>
        </header>
        <BulletinBoard messages={this.state.messages} />
        <Footer />
      </div>
    );
  }
}

export default App;
