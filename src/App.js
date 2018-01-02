import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { currentUser } from './actions/authActions';
import MyCalendar from './components/Calendar';
import NavBar from './components/assets/NavBar';
import GroupContainer from './components/GroupContainer'
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
    let myEventsList = (this.props.selectedGroup ? this.props.selectedGroup.events : [{title: 'Demo For Shane', startDate: new Date(), endDate: new Date()}] )
    myEventsList = myEventsList.filter( event => event.public )
    
    return (
      <div className="App">
        <NavBar/>
        <h1 className="App-title">Welcome to SHACC</h1>
        <br/>
        <div className='page'>
          {this.props.loggedIn ? <GroupContainer groups={this.props.groups} /> : <div></div> }
          <MyCalendar myEventsList={myEventsList}/>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({currentUser}, dispatch)
}

function mapStateToProps(state){
  console.log(state);
  return {loggedIn: state.auth.loggedIn, user: state.auth.user, groups: state.groups.groups, selectedGroup: state.groups.selectedGroup}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
