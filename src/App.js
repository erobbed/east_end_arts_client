import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { currentUser } from './actions/authActions';
import MyCalendar from './components/Calendar';
import NavBar from './components/NavBar';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  componentDidMount(){
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      return this.props.currentUser(jwt)
    }
  }

  render() {
    let myEventsList = [{title: 'Demo For Shane', startDate: new Date(), endDate: new Date()}]

    return (
      <div className="App">
        <NavBar/>
        <h1 className="App-title">Welcome to SHACC</h1>
        <br/>
        <MyCalendar myEventsList={myEventsList}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({currentUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(App);
