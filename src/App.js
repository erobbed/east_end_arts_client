import React, { Component } from 'react';
import MyCalendar from './components/Calendar'
import NavBar from './components/NavBar'
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  handleClick = () => {
    fetch(`${process.env.REACT_APP_RAILS_URL}test`).then(res => res.json()).then(json => console.log(json))
  }

  render() {
    let myEventsList = [{title: 'Demo For Shane', startDate: new Date(), endDate: new Date()}]

    return (
      <div className="App">
        <NavBar/>
        <h1 className="App-title">Welcome to SHACC</h1>
        <button onClick={this.handleClick}>Click Me to Test API</button><br/><br/>
        <MyCalendar myEventsList={myEventsList}/>
      </div>
    );
  }
}

export default App;
