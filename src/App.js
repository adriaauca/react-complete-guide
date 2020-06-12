import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      {name: 'Mario', age: 24},
      {name: 'James', age: 26}
    ]
  }

  switchNameHandler = () => {
    this.setState({persons: [
      {name: 'Marios', age: 245},
      {name: 'Jamess', age: 265}
    ]});
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
      {name: event.target.value, age: 23},
      {name: 'Pere', age: 29}
    ]});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler}
          changed={this.nameChangeHandler}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler}>
            My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
