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
    let myEventsList = (this.props.selectedGroup ? this.props.selectedGroup.events : this.props.events)
    // myEventsList = myEventsList.filter( event => event.public )
    let left = this.props.loggedIn ? {width: '15%'} : {width: '0px'}
    let right = this.props.loggedIn ? {width: '85%'} : {width: '100%', margin: '0 auto'}
    let url = 'http://ny-southampton.civicplus.com/1054/Southampton-Arts-and-Culture-Committee-S'
    return (
      <div className="App">
        <NavBar/>
        <a href={url}><h1 className="App-title">Town of Southampton Arts and Culture Committee</h1></a>
        <br/>
        <div className='page'>
          {this.props.loggedIn ? <div className='column left' style={left}><GroupContainer groups={this.props.groups} selectedGroup={this.props.selectedGroup}/></div> : <div className='column left' style={left}></div> }
          <MyCalendar myEventsList={myEventsList} style={right}/>
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
  return {loggedIn: state.auth.loggedIn, user: state.auth.user, groups: state.groups.groups, selectedGroup: state.groups.selectedGroup, events: state.events.all}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
