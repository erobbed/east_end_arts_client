import React, { Component } from 'react';
import './App.css';
import MyCalendar from './components/Calendar'

class App extends Component {

  handleClick = () => {
    fetch('http://localhost:3000/api/v1/test').then(res => res.json()).then(json => console.log(json))
  }

  render() {
    let myEventsList = [{title: 'Demo For Shane', startDate: new Date(), endDate: new Date()}]

    return (
      <div className="App">
        <h1 className="App-title">Welcome to SHACC</h1>
        <button onClick={this.handleClick}>Click Me to Test API</button><br/><br/>
        <MyCalendar myEventsList={myEventsList}/>
      </div>
    );
  }
}

export default App;
